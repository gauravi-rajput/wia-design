/**
 * MF Recommendation Engine — deterministic, rule-based, client-side.
 *
 * Mirrors the architecture handed down for this prototype:
 *   Unified Wealth Context + advisor-approved business rules + eligible
 *   fund universe
 *     1. Assess the client's combined goals and funding needs.
 *     2. Determine suitable fund categories and select candidate schemes.
 *     3. Compare the proposed allocation with current holdings.
 *     4. Generate proposed investment actions and supporting rationale.
 *   -> Recommendation Proposal (existing vs proposed, Hold/Add/Exit,
 *      new schemes, goal alignment, rationale & evidence)
 *
 * No LLM and no network calls: every number here is produced by an
 * explicit, readable rule so an advisor can trace *why* a pick was made.
 * This is a prototype — thresholds and assumed return rates are
 * illustrative, not validated financial advice.
 */
import { FUND_UNIVERSE } from "../data/fundUniverse";
import type {
  AllocationSlice,
  AssetClass,
  Client,
  FundCandidate,
  Goal,
  GoalAlignment,
  GoalStatus,
  Holding,
  NewSchemeSuggestion,
  RecommendationProposal,
  RecommendedAction,
  RiskProfile,
} from "../types/domain";

const CURRENT_YEAR = 2026;

/** Base target mix by risk profile. Unavailable falls back to Moderate. */
const BASE_TARGET: Record<RiskProfile, Record<AssetClass, number>> = {
  Aggressive: { Equity: 75, Hybrid: 15, Debt: 10, Other: 0 },
  Moderate: { Equity: 55, Hybrid: 25, Debt: 20, Other: 0 },
  Conservative: { Equity: 25, Hybrid: 25, Debt: 50, Other: 0 },
  Unavailable: { Equity: 55, Hybrid: 25, Debt: 20, Other: 0 },
};

/** Assumed long-run CAGR per asset class, used only to project goal funding. */
export const ASSUMED_CAGR: Record<AssetClass, number> = {
  Equity: 0.12,
  Hybrid: 0.09,
  Debt: 0.065,
  Other: 0.06,
};

const OVERWEIGHT_THRESHOLD = 8; // pp
const UNDERWEIGHT_THRESHOLD = -8; // pp
const NEGLIGIBLE_CORPUS = 5000; // below this, treat data as insufficient

/** Risk-vs-actual-allocation mismatch thresholds — declared risk vs Equity %. */
const CONSERVATIVE_EQUITY_MISMATCH_PCT = 60;
const AGGRESSIVE_EQUITY_MISMATCH_PCT = 20;

/** How well each asset class fits a declared risk profile (0-1). Unavailable mirrors Moderate. */
const ASSET_RISK_FIT: Record<RiskProfile, Record<AssetClass, number>> = {
  Aggressive: { Equity: 1.0, Hybrid: 0.55, Debt: 0.2, Other: 0.4 },
  Moderate: { Equity: 0.7, Hybrid: 1.0, Debt: 0.6, Other: 0.4 },
  Conservative: { Equity: 0.25, Hybrid: 0.7, Debt: 1.0, Other: 0.35 },
  Unavailable: { Equity: 0.7, Hybrid: 1.0, Debt: 0.6, Other: 0.4 },
};

/** How well each asset class fits a goal horizon bucket (0-1). */
function horizonFitByAssetClass(years: number | null): Record<AssetClass, number> {
  if (years == null) return { Equity: 0.6, Hybrid: 0.6, Debt: 0.6, Other: 0.5 };
  if (years < 3) return { Equity: 0.2, Hybrid: 0.7, Debt: 1.0, Other: 0.4 };
  if (years < 7) return { Equity: 0.6, Hybrid: 1.0, Debt: 0.7, Other: 0.4 };
  return { Equity: 1.0, Hybrid: 0.7, Debt: 0.3, Other: 0.4 };
}

// Hybrid sub-type keyword markers — same convention as the marker-list style
// used elsewhere for asset-class classification, kept local since only the
// Hybrid bucket needs this finer split.
const HYBRID_AGGRESSIVE_MARKERS = ["aggressive hybrid"];
const HYBRID_EQUITY_SAVINGS_MARKERS = ["equity savings"];
const HYBRID_MULTI_ASSET_MARKERS = ["multi asset"];

/**
 * Hybrid sub-type nuance: Aggressive Hybrid suits a long horizon, Equity
 * Savings suits a medium horizon with a cushion, Multi Asset is largely
 * horizon-agnostic (diversification play). Anything else (Balanced
 * Advantage, Arbitrage, ...) gets a generic medium-horizon-leaning score.
 */
function hybridSubtypeHorizonFit(subCategory: string, years: number | null): number {
  const text = subCategory.toLowerCase();
  if (years == null) return 0.7;
  if (HYBRID_AGGRESSIVE_MARKERS.some((m) => text.includes(m))) {
    if (years >= 7) return 1.0;
    if (years >= 3) return 0.6;
    return 0.3;
  }
  if (HYBRID_EQUITY_SAVINGS_MARKERS.some((m) => text.includes(m))) {
    return years >= 3 && years < 10 ? 1.0 : 0.6;
  }
  if (HYBRID_MULTI_ASSET_MARKERS.some((m) => text.includes(m))) {
    return 0.8;
  }
  return years >= 3 && years < 10 ? 0.85 : 0.6;
}

/** A goal's small nudge toward/away from an asset class beyond risk+horizon fit. */
function goalTypeBonus(goalType: Goal["type"], assetClass: AssetClass, subCategory: string): number {
  switch (goalType) {
    case "Tax Saving":
      return subCategory.toLowerCase().includes("elss") ? 15 : assetClass === "Equity" ? 5 : -5;
    case "Legacy/Wealth Transfer":
      return assetClass === "Hybrid" || assetClass === "Debt" ? 8 : -5;
    case "Retirement":
    case "Wealth Creation":
      return assetClass === "Equity" ? 5 : 0;
    case "Emergency Fund":
      return assetClass === "Debt" ? 10 : assetClass === "Equity" ? -15 : -5;
    default:
      return 0;
  }
}

function averageGoalHorizonYears(goals: Goal[]): number | null {
  const horizons = goals.map((g) => g.targetYear - CURRENT_YEAR);
  return horizons.length ? horizons.reduce((a, b) => a + b, 0) / horizons.length : null;
}

/**
 * Correlation of a scheme/holding to a specific goal's objectives (0-100).
 * Blends risk fit, horizon fit (with a Hybrid sub-type refinement), and a
 * small goal-type nudge. When `goal` is null (no goals on file), falls back
 * to risk fit alone against the client's declared profile.
 */
export function computeGoalFitPct(
  assetClass: AssetClass,
  subCategory: string,
  clientRisk: RiskProfile,
  goal: Goal | null,
): number {
  const risk = goal?.riskProfile ?? clientRisk;
  const riskFit = ASSET_RISK_FIT[risk][assetClass];
  if (!goal) {
    return Math.round(clamp(riskFit * 100, 0, 100));
  }
  const years = goal.targetYear - CURRENT_YEAR;
  let horizonFit = horizonFitByAssetClass(years)[assetClass];
  if (assetClass === "Hybrid") {
    horizonFit = (horizonFit + hybridSubtypeHorizonFit(subCategory, years)) / 2;
  }
  const score = (riskFit * 0.5 + horizonFit * 0.5) * 100 + goalTypeBonus(goal.type, assetClass, subCategory);
  return Math.round(clamp(score, 0, 100));
}

/** Best-fitting goal (by computeGoalFitPct) for a given scheme, or null if the client has no goals. */
function bestGoalFit(
  assetClass: AssetClass,
  subCategory: string,
  client: Client,
): { goal: Goal | null; fitPct: number } {
  if (client.goals.length === 0) {
    return { goal: null, fitPct: computeGoalFitPct(assetClass, subCategory, client.riskProfile, null) };
  }
  let best: { goal: Goal; fitPct: number } | null = null;
  for (const goal of client.goals) {
    const fitPct = computeGoalFitPct(assetClass, subCategory, client.riskProfile, goal);
    if (!best || fitPct > best.fitPct) best = { goal, fitPct };
  }
  return best!;
}

/**
 * Flags when a client's declared risk profile conflicts with their actual
 * portfolio composition (e.g. a Conservative client holding mostly Equity).
 * Returns null when aligned, or when risk is Unavailable (that gap is
 * already surfaced separately).
 */
export function checkRiskAlignment(
  client: Client,
  currentAllocation: Record<AssetClass, number>,
): string | null {
  if (client.riskProfile === "Unavailable") return null;
  const equityPct = currentAllocation.Equity;
  if (client.riskProfile === "Conservative" && equityPct > CONSERVATIVE_EQUITY_MISMATCH_PCT) {
    return `Declared risk profile is Conservative, but ${equityPct.toFixed(0)}% of the current portfolio is in Equity — well above what a Conservative profile implies. Recommend reconfirming the client's risk assessment before acting on this proposal.`;
  }
  if (client.riskProfile === "Aggressive" && equityPct < AGGRESSIVE_EQUITY_MISMATCH_PCT) {
    return `Declared risk profile is Aggressive, but only ${equityPct.toFixed(0)}% of the current portfolio is in Equity — well below what an Aggressive profile implies. Recommend reconfirming the client's risk assessment before acting on this proposal.`;
  }
  return null;
}

export interface AggregatedHolding {
  schemeName: string;
  amc: string;
  assetClass: AssetClass;
  subCategory: string;
  amountInvested: number;
  currentValue: number;
  absReturnPct: number | null;
  lotCount: number;
}

/** Pool multiple SIP/lump-sum lots of the same scheme into one row. */
export function aggregateHoldings(holdings: Holding[]): AggregatedHolding[] {
  const map = new Map<string, AggregatedHolding>();
  for (const h of holdings) {
    if (!h.schemeName || h.amountInvested === 0 && h.currentValue === 0) continue;
    const existing = map.get(h.schemeName);
    if (existing) {
      existing.amountInvested += h.amountInvested;
      existing.currentValue += h.currentValue;
      existing.lotCount += 1;
    } else {
      map.set(h.schemeName, {
        schemeName: h.schemeName,
        amc: h.amc,
        assetClass: h.assetClass,
        subCategory: h.subCategory,
        amountInvested: h.amountInvested,
        currentValue: h.currentValue,
        absReturnPct: null,
        lotCount: 1,
      });
    }
  }
  for (const row of map.values()) {
    row.absReturnPct =
      row.amountInvested > 0
        ? ((row.currentValue - row.amountInvested) / row.amountInvested) * 100
        : null;
  }
  return Array.from(map.values());
}

export function totalCurrentValue(holdings: AggregatedHolding[]): number {
  return holdings.reduce((sum, h) => sum + h.currentValue, 0);
}

/**
 * Risk- and horizon-adjusted target mix. When `goal` is passed, that goal's
 * own risk profile (if set) and its own target year drive the calculation
 * instead of the client-wide average — goals can carry a different risk
 * appetite than the client's declared profile.
 */
function horizonAdjustedTarget(
  client: Client,
  goal?: Goal,
): {
  target: Record<AssetClass, number>;
  factors: string[];
  riskOverrideNote: string | null;
} {
  const effectiveRisk = goal?.riskProfile ?? client.riskProfile;
  const base = { ...BASE_TARGET[effectiveRisk] };
  const factors: string[] = [];
  let riskOverrideNote: string | null = null;

  if (goal?.riskProfile && goal.riskProfile !== client.riskProfile) {
    riskOverrideNote = `This goal carries its own ${goal.riskProfile} risk profile, overriding the client's declared ${client.riskProfile} profile.`;
    factors.push(riskOverrideNote);
  } else if (effectiveRisk === "Unavailable") {
    factors.push("Risk profile is not on file — using a balanced (Moderate) target mix.");
  }

  const avgHorizon = goal ? goal.targetYear - CURRENT_YEAR : averageGoalHorizonYears(client.goals);

  let equityShift = 0;
  let preferHybrid = false;

  if (avgHorizon != null) {
    if (avgHorizon <= 5) {
      equityShift -= 10;
      factors.push(
        `${goal ? "Goal" : "Average goal"} horizon is ~${avgHorizon.toFixed(0)} years — shifted 10pp from equity to debt for near-term capital protection.`,
      );
    } else if (avgHorizon >= 15) {
      equityShift += 5;
      factors.push(
        `${goal ? "Goal" : "Average goal"} horizon is ~${avgHorizon.toFixed(0)} years — shifted 5pp from debt to equity to capture the longer runway.`,
      );
    }
  }

  if (client.age != null) {
    if (client.age >= 60 && effectiveRisk === "Aggressive") {
      equityShift -= 20;
      preferHybrid = true;
      factors.push(
        `Senior client (age ${client.age}) with an Aggressive profile — treated as a likely legacy/wealth-transfer horizon rather than a standard growth goal, so equity is reduced further in favour of Hybrid. Confirm this reading with the client.`,
      );
    } else if (client.age >= 60) {
      equityShift -= 10;
      factors.push(`Age ${client.age} — reduced equity by 10pp in favour of capital preservation.`);
    } else if (client.age < 30) {
      equityShift += 5;
      factors.push(`Age ${client.age} — added 5pp of equity given the long earning horizon.`);
    }
  }

  if (client.dependants != null) {
    if (client.dependants <= 0) {
      equityShift += 3;
      factors.push("No dependants — added 3pp of equity given more capacity for growth.");
    } else if (client.dependants >= 2) {
      equityShift -= 5;
      factors.push(`${client.dependants} dependants — reduced equity by 5pp to prioritise stability.`);
    }
  }

  if (client.maritalStatus === "Single" || client.maritalStatus === "Divorced") {
    equityShift += 3;
    factors.push(`${client.maritalStatus} — added 3pp of equity given more capacity for growth.`);
  } else if (client.maritalStatus === "Married" || client.maritalStatus === "Widowed") {
    equityShift -= 3;
    factors.push(`${client.maritalStatus} — reduced equity by 3pp for household stability.`);
  }

  const target = applyEquityShift(base, equityShift, { preferHybrid });
  return { target, factors, riskOverrideNote };
}

function applyEquityShift(
  base: Record<AssetClass, number>,
  shift: number,
  opts: { preferHybrid?: boolean } = {},
): Record<AssetClass, number> {
  if (shift === 0) return base;
  const equity = clamp(base.Equity + shift, 5, 90);
  const actualShift = equity - base.Equity;

  if (opts.preferHybrid) {
    // Pull/push the difference from Hybrid first, then Debt — used for the
    // senior+Aggressive legacy tilt, where capital preservation shouldn't
    // mean a full flight to Debt.
    let hybrid = base.Hybrid - actualShift;
    let debt = base.Debt;
    if (hybrid < 0) {
      debt += hybrid;
      hybrid = 0;
    }
    if (hybrid > 100) {
      debt -= hybrid - 100;
      hybrid = 100;
    }
    debt = clamp(debt, 0, 100);
    return { Equity: equity, Debt: debt, Hybrid: hybrid, Other: base.Other };
  }

  // Pull/push the difference from Debt first, then Hybrid, to keep the
  // mix intuitive (equity vs "everything else").
  let debt = base.Debt - actualShift;
  let hybrid = base.Hybrid;
  if (debt < 0) {
    hybrid += debt;
    debt = 0;
  }
  if (debt > 100) {
    hybrid -= debt - 100;
    debt = 100;
  }
  hybrid = clamp(hybrid, 0, 100);
  return { Equity: equity, Debt: debt, Hybrid: hybrid, Other: base.Other };
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function computeTargetAllocation(client: Client): {
  target: Record<AssetClass, number>;
  factors: string[];
} {
  return horizonAdjustedTarget(client);
}

export function computeCurrentAllocation(
  holdings: AggregatedHolding[],
): Record<AssetClass, number> {
  const total = totalCurrentValue(holdings);
  const byClass: Record<AssetClass, number> = { Equity: 0, Debt: 0, Hybrid: 0, Other: 0 };
  if (total <= 0) return byClass;
  for (const h of holdings) {
    byClass[h.assetClass] += h.currentValue;
  }
  for (const key of Object.keys(byClass) as AssetClass[]) {
    byClass[key] = (byClass[key] / total) * 100;
  }
  return byClass;
}

/** Step 1 — assess combined goals and funding needs. */
export function assessGoalFunding(client: Client): GoalAlignment[] {
  const holdings = aggregateHoldings(client.holdings);
  const total = totalCurrentValue(holdings);

  return client.goals.map((goal) => {
    // Each goal gets its own risk- and horizon-adjusted target mix, so a
    // goal with its own risk_category projects funding differently from
    // the client's default even when both draw on the same portfolio.
    const { target, riskOverrideNote } = horizonAdjustedTarget(client, goal);
    const blendedCagr =
      (target.Equity * ASSUMED_CAGR.Equity +
        target.Debt * ASSUMED_CAGR.Debt +
        target.Hybrid * ASSUMED_CAGR.Hybrid +
        target.Other * ASSUMED_CAGR.Other) /
      100;
    return buildGoalAlignment(goal, total, blendedCagr, riskOverrideNote);
  });
}

function buildGoalAlignment(
  goal: Goal,
  totalPortfolioValue: number,
  blendedCagr: number,
  riskOverrideNote: string | null,
): GoalAlignment {
  const yearsRemaining = Math.max(goal.targetYear - CURRENT_YEAR, 0);
  const allocatedToday = totalPortfolioValue * goal.allocationShare;
  const riskNote = riskOverrideNote ? `${riskOverrideNote} ` : "";

  if (totalPortfolioValue < NEGLIGIBLE_CORPUS) {
    return {
      goalId: goal.id,
      goalLabel: goal.label,
      status: "unavailable" as GoalStatus,
      projectedCorpus: allocatedToday,
      targetAmount: goal.targetAmount,
      fundingGapPct: 0,
      note: `${riskNote}Portfolio value is too small to project — insufficient data for a confident funding estimate.`,
    };
  }

  const projectedCorpus = allocatedToday * Math.pow(1 + blendedCagr, yearsRemaining);
  const fundingGapPct =
    goal.targetAmount > 0 ? ((projectedCorpus - goal.targetAmount) / goal.targetAmount) * 100 : 0;

  let status: GoalStatus = "on_track";
  if (fundingGapPct < -25) status = "behind";
  else if (fundingGapPct < -5) status = "at_risk";

  const note =
    status === "on_track"
      ? `${riskNote}Projected to reach ${formatCr(projectedCorpus)} by ${goal.targetYear} against a ${formatCr(goal.targetAmount)} target, assuming a blended ${(blendedCagr * 100).toFixed(1)}% return on the allocated share of the portfolio.`
      : `${riskNote}Projected ${formatCr(projectedCorpus)} vs a ${formatCr(goal.targetAmount)} target by ${goal.targetYear} — a ${Math.abs(fundingGapPct).toFixed(0)}% shortfall at the current allocation and contribution rate.`;

  return {
    goalId: goal.id,
    goalLabel: goal.label,
    status,
    projectedCorpus,
    targetAmount: goal.targetAmount,
    fundingGapPct,
    note,
  };
}

function formatCr(value: number): string {
  if (value >= 1_00_00_000) return `₹${(value / 1_00_00_000).toFixed(2)} Cr`;
  if (value >= 1_00_000) return `₹${(value / 1_00_000).toFixed(1)} L`;
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

/** Step 2 — select candidate schemes for underweight categories. */
export function selectCandidateSchemes(
  client: Client,
  targetAllocation: Record<AssetClass, number>,
  currentAllocation: Record<AssetClass, number>,
  heldSchemeNames: Set<string>,
  universe: FundCandidate[] = FUND_UNIVERSE,
): NewSchemeSuggestion[] {
  const gapClasses = (Object.keys(targetAllocation) as AssetClass[]).filter(
    (ac) => ac !== "Other" && targetAllocation[ac] - currentAllocation[ac] > -UNDERWEIGHT_THRESHOLD,
  );
  if (gapClasses.length === 0) return [];

  const preferredRisk = client.riskProfile === "Unavailable" ? "Moderate" : client.riskProfile;
  const avgHorizon = averageGoalHorizonYears(client.goals);

  const picks: FundCandidate[] = [];
  for (const ac of gapClasses) {
    const candidates = universe
      .filter((f) => f.assetClass === ac && !heldSchemeNames.has(f.schemeName))
      .sort((a, b) => {
        const riskFitA = a.riskLevel === preferredRisk ? 1 : 0;
        const riskFitB = b.riskLevel === preferredRisk ? 1 : 0;
        if (riskFitA !== riskFitB) return riskFitB - riskFitA;
        if (ac === "Hybrid") {
          const subtypeFitA = hybridSubtypeHorizonFit(a.subCategory, avgHorizon);
          const subtypeFitB = hybridSubtypeHorizonFit(b.subCategory, avgHorizon);
          if (subtypeFitA !== subtypeFitB) return subtypeFitB - subtypeFitA;
        }
        if (b.rating !== a.rating) return b.rating - a.rating;
        return b.threeYearCagrPct - a.threeYearCagrPct;
      })
      .slice(0, 2);
    picks.push(...candidates);
  }
  return picks.map((scheme) => {
    const match = bestGoalFit(scheme.assetClass, scheme.subCategory, client);
    return { scheme, goalFitPct: match.fitPct, matchedGoalLabel: match.goal?.label ?? null };
  });
}

/** Steps 3 & 4 — compare allocation, decide Hold/Add/Exit, build rationale. */
export function buildRecommendationProposal(client: Client): RecommendationProposal {
  const aggregated = aggregateHoldings(client.holdings);
  const total = totalCurrentValue(aggregated);
  const { target, factors: allocationFactors } = computeTargetAllocation(client);
  const current = computeCurrentAllocation(aggregated);

  const allocation: AllocationSlice[] = (Object.keys(target) as AssetClass[])
    .filter((ac) => ac !== "Other" || current.Other > 0)
    .map((ac) => ({
      assetClass: ac,
      currentPct: round1(current[ac]),
      targetPct: round1(target[ac]),
      currentValue: (current[ac] / 100) * total,
    }));

  const byClass = groupBy(aggregated, (h) => h.assetClass);
  const actions: RecommendedAction[] = [];

  for (const [assetClass, rows] of byClass.entries()) {
    const delta = current[assetClass] - target[assetClass];
    const sorted = [...rows].sort((a, b) => (a.absReturnPct ?? 0) - (b.absReturnPct ?? 0));

    if (delta > OVERWEIGHT_THRESHOLD && sorted.length > 1) {
      const [weakest, ...rest] = sorted;
      actions.push(
        toAction("EXIT", weakest, current, target, client, {
          rationale: [
            `${assetClass} is ${delta.toFixed(0)}pp overweight (${current[assetClass].toFixed(0)}% vs a ${target[assetClass].toFixed(0)}% target).`,
            weakest.absReturnPct != null
              ? `Weakest performer in this sleeve at ${weakest.absReturnPct.toFixed(1)}% absolute return — first candidate to trim.`
              : "Return data unavailable for this holding, but it's the smallest contributor in an overweight sleeve.",
          ],
          evidence: [`Portfolio analytics — holdings as of 27 Aug 2026`],
        }),
      );
      for (const row of rest) {
        actions.push(
          toAction("HOLD", row, current, target, client, {
            rationale: [
              `Part of an overweight ${assetClass} sleeve, but performing in line with or above peers — no change proposed.`,
            ],
            evidence: [`Portfolio analytics — holdings as of 27 Aug 2026`],
          }),
        );
      }
    } else if (delta < UNDERWEIGHT_THRESHOLD && sorted.length > 0) {
      const strongest = sorted[sorted.length - 1];
      for (const row of sorted) {
        if (row === strongest) {
          actions.push(
            toAction("ADD_MORE", row, current, target, client, {
              rationale: [
                `${assetClass} is ${Math.abs(delta).toFixed(0)}pp underweight (${current[assetClass].toFixed(0)}% vs a ${target[assetClass].toFixed(0)}% target).`,
                row.absReturnPct != null
                  ? `Strongest existing holding in this sleeve at ${row.absReturnPct.toFixed(1)}% — preferred vehicle to close the gap.`
                  : "Best-positioned existing holding to receive the incremental allocation.",
              ],
              evidence: [`Portfolio analytics — holdings as of 27 Aug 2026`],
            }),
          );
        } else {
          actions.push(
            toAction("HOLD", row, current, target, client, {
              rationale: [`No change — the sleeve gap is being closed via the strongest existing holding instead.`],
              evidence: [`Portfolio analytics — holdings as of 27 Aug 2026`],
            }),
          );
        }
      }
    } else {
      for (const row of sorted) {
        actions.push(
          toAction("HOLD", row, current, target, client, {
            rationale: [
              `${assetClass} allocation (${current[assetClass].toFixed(0)}%) is within range of the ${target[assetClass].toFixed(0)}% target — no action needed.`,
            ],
            evidence: [`Portfolio analytics — holdings as of 27 Aug 2026`],
          }),
        );
      }
    }
  }

  actions.sort((a, b) => actionRank(a.type) - actionRank(b.type) || b.currentValue - a.currentValue);

  const heldSchemeNames = new Set(aggregated.map((h) => h.schemeName));
  const newSchemes = selectCandidateSchemes(client, target, current, heldSchemeNames);

  const goalAlignment = assessGoalFunding(client);

  const onboarding = total < NEGLIGIBLE_CORPUS;
  const notes = [
    "Picks and Hold/Add More/Exit decisions are produced by deterministic rules over this client's existing book and the eligible fund universe — no LLM is used to generate figures.",
    ...allocationFactors,
  ];
  if (onboarding) {
    notes.push(
      "Portfolio value is negligible for this client — treat this proposal as directional only until more data is available.",
    );
  }

  // Only meaningful once there's enough of a book to read an actual mix from.
  const mismatchWarning = onboarding ? null : checkRiskAlignment(client, current);

  return {
    clientId: client.id,
    generatedAt: new Date().toISOString(),
    allocation,
    actions,
    newSchemes,
    goalAlignment,
    notes,
    mismatchWarning,
    onboarding,
  };
}

function actionRank(type: RecommendedAction["type"]): number {
  switch (type) {
    case "EXIT":
      return 0;
    case "ADD_MORE":
      return 1;
    case "NEW":
      return 2;
    case "HOLD":
    default:
      return 3;
  }
}

function toAction(
  type: RecommendedAction["type"],
  row: AggregatedHolding,
  current: Record<AssetClass, number>,
  target: Record<AssetClass, number>,
  client: Client,
  extra: { rationale: string[]; evidence: string[] },
): RecommendedAction {
  const linkedGoalIds = client.goals
    .filter((g) => assetClassSuitsGoal(g, row.assetClass, client.riskProfile))
    .map((g) => g.id);
  const bestFit = bestGoalFit(row.assetClass, row.subCategory, client);
  return {
    id: `${client.id}-${row.schemeName}`.replace(/\s+/g, "-"),
    type,
    schemeName: row.schemeName,
    assetClass: row.assetClass,
    subCategory: row.subCategory,
    currentValue: row.currentValue,
    currentAllocationPct: round1(current[row.assetClass]),
    targetAllocationPct: round1(target[row.assetClass]),
    proposedAmount: null,
    rationale: extra.rationale,
    evidence: extra.evidence,
    linkedGoalIds,
    goalFitPct: bestFit.goal ? bestFit.fitPct : null,
  };
}

function assetClassSuitsGoal(goal: Goal, assetClass: AssetClass, clientRisk: RiskProfile): boolean {
  const horizon = goal.targetYear - CURRENT_YEAR;
  const risk = goal.riskProfile ?? clientRisk;
  if (assetClass === "Equity") return horizon >= 5 && risk !== "Conservative";
  if (assetClass === "Debt") return horizon < 8 || risk === "Conservative";
  return true;
}

function groupBy<T, K>(items: T[], key: (item: T) => K): Map<K, T[]> {
  const map = new Map<K, T[]>();
  for (const item of items) {
    const k = key(item);
    const arr = map.get(k);
    if (arr) arr.push(item);
    else map.set(k, [item]);
  }
  return map;
}

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}
