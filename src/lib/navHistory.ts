/**
 * Synthetic NAV history for the "past performance" sparkline.
 *
 * There's no market-data feed in this prototype, so this generates a
 * deterministic (seeded) pseudo-random walk per scheme — the same scheme
 * name always produces the same series across renders and reloads, and the
 * walk's drift is anchored to the scheme's stated 3Y CAGR so the shape is at
 * least directionally consistent with the numbers shown next to it.
 * Illustrative only — not real NAV data.
 */

const POINTS = 24; // monthly points over 2 years

function seedFromString(text: string): number {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) || 1;
}

/** Small mulberry32 PRNG — deterministic given a numeric seed. */
function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface NavPoint {
  month: number; // 0..POINTS-1, oldest first
  nav: number;
}

/** Deterministic monthly NAV series ending at 100, seeded by scheme name. */
export function generateNavHistory(schemeName: string, threeYearCagrPct: number): NavPoint[] {
  const rng = mulberry32(seedFromString(schemeName));
  const monthlyDrift = threeYearCagrPct / 100 / 12;
  const monthlyVol = 0.035; // illustrative volatility

  // Build forward from an arbitrary start, then rescale so the series ends at 100
  // (today's NAV), which is what the rest of the app treats as "current").
  const raw: number[] = [100];
  for (let i = 1; i < POINTS; i++) {
    const noise = (rng() - 0.5) * 2 * monthlyVol;
    const prev = raw[i - 1];
    raw.push(Math.max(1, prev * (1 + monthlyDrift + noise)));
  }
  const scale = 100 / raw[raw.length - 1];
  return raw.map((nav, month) => ({ month, nav: Math.round(nav * scale * 100) / 100 }));
}
