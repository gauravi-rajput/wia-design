/**
 * Canonical-ish domain types for the WIA design prototype.
 * Mirrors the shape of the real Unified Wealth Context (client, goals, risk,
 * holdings, signals) closely enough to demo the Recommendation Engine flow,
 * but is entirely mock/static data — no backend.
 */

export type RiskProfile = "Aggressive" | "Moderate" | "Conservative" | "Unavailable";

export type AssetClass = "Equity" | "Debt" | "Hybrid" | "Other";

export type MaritalStatus = "Single" | "Married" | "Widowed" | "Divorced" | null;

export type GoalType =
  | "Retirement"
  | "Child Education"
  | "Child Marriage"
  | "House Purchase"
  | "Wealth Creation"
  | "Tax Saving"
  | "Legacy/Wealth Transfer"
  | "Emergency Fund";

export type GoalStatus = "on_track" | "at_risk" | "behind" | "unavailable";

export interface Goal {
  id: string;
  type: GoalType;
  label: string;
  targetAmount: number;
  targetYear: number;
  /** Portion of the client's current portfolio earmarked toward this goal (0-1). */
  allocationShare: number;
  priority: "High" | "Medium" | "Low";
  /** Goal-specific risk profile — overrides the client's declared risk for this goal only, when set. */
  riskProfile?: RiskProfile;
}

export interface Holding {
  id: string;
  schemeName: string;
  amc: string;
  assetClass: AssetClass;
  subCategory: string;
  amountInvested: number;
  currentValue: number;
  investedDate: string;
  absReturnPct: number | null;
  xirrPct: number | null;
}

export type ClientStatus = "on_track" | "review_due" | "high_risk";

export interface Client {
  id: string;
  clientCode: string;
  name: string;
  avatarColor: string;
  age: number | null;
  maritalStatus: MaritalStatus;
  dependants: number | null;
  riskProfile: RiskProfile;
  advisor: string;
  city: string;
  email: string;
  phone: string;
  status: ClientStatus;
  goals: Goal[];
  holdings: Holding[];
  signals: WealthSignal[];
}

export type SignalTag = "CONCERN" | "PREFERENCE" | "COMMITMENT" | "OPPORTUNITY";

export interface WealthSignal {
  id: string;
  tag: SignalTag;
  text: string;
  source: string;
}

/** Candidate scheme from the eligible fund universe (not necessarily held). */
export interface FundCandidate {
  id: string;
  schemeName: string;
  amc: string;
  assetClass: AssetClass;
  subCategory: string;
  riskLevel: RiskProfile;
  threeYearCagrPct: number;
  rating: 1 | 2 | 3 | 4 | 5;
  expenseRatioPct: number;
  minSipAmount: number;
  /** Minimum lump-sum investment amount (INR). */
  minLumpsumAmount: number;
  /** Statutory lock-in in years (e.g. ELSS = 3). 0 = no lock-in. */
  lockInYears: number;
}

export type ActionType = "HOLD" | "ADD_MORE" | "EXIT" | "NEW";

export interface RecommendedAction {
  id: string;
  type: ActionType;
  schemeName: string;
  assetClass: AssetClass;
  subCategory: string;
  currentValue: number;
  currentAllocationPct: number;
  targetAllocationPct: number;
  proposedAmount: number | null;
  rationale: string[];
  evidence: string[];
  linkedGoalIds: string[];
  /** Correlation of this holding to its best-matched linked goal (0-100), or null when no goal links to it. */
  goalFitPct: number | null;
}

/** A candidate scheme paired with how well it fits a specific underweight sleeve/goal. */
export interface NewSchemeSuggestion {
  scheme: FundCandidate;
  /** Correlation of this scheme to the matched goal's objectives (0-100). */
  goalFitPct: number;
  matchedGoalLabel: string | null;
}

export type AdvisorDecision = "PENDING" | "ACCEPTED" | "MODIFIED" | "REJECTED";

export interface AllocationSlice {
  assetClass: AssetClass;
  currentPct: number;
  targetPct: number;
  currentValue: number;
}

export interface GoalAlignment {
  goalId: string;
  goalLabel: string;
  status: GoalStatus;
  projectedCorpus: number;
  targetAmount: number;
  fundingGapPct: number;
  note: string;
}

export interface RecommendationProposal {
  clientId: string;
  generatedAt: string;
  allocation: AllocationSlice[];
  actions: RecommendedAction[];
  newSchemes: NewSchemeSuggestion[];
  goalAlignment: GoalAlignment[];
  notes: string[];
  /** Declared risk profile conflicts with actual portfolio composition — surfaced separately from `notes`. */
  mismatchWarning: string | null;
  /** Portfolio value is too small to generate a confident recommendation — show an onboarding state instead. */
  onboarding: boolean;
}
