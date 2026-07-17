// Shared axis scaling for the dyno / comparison charts.

/** Snap a range to a clean magnitude. */
export function niceNum(range: number, round: boolean): number {
  const exp = Math.floor(Math.log10(range));
  const f = range / Math.pow(10, exp);
  const nf = round ? (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) : f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
  return nf * Math.pow(10, exp);
}

/** Clean bounds + step covering [min, max]. */
export function niceScale(min: number, max: number, maxTicks = 8) {
  if (!isFinite(min) || !isFinite(max) || min === max) {
    const c = isFinite(min) ? min : 0;
    return { min: c - 1, max: c + 1, step: 1 };
  }
  const step = niceNum(niceNum(max - min, false) / (maxTicks - 1), true);
  return { min: Math.floor(min / step) * step, max: Math.ceil(max / step) * step, step };
}

/**
 * Y-axis bounds fitted to the data (min→max with a small margin) instead of
 * zero-based, snapped to clean steps. Curves fill the plot, so their shape is
 * readable rather than squashed into a corner — e.g. an efficiency sweep living
 * in 47–84 % uses the full height instead of the top third of a 0–90 axis.
 */
export function yAxisFor(values: number[], maxTicks = 8) {
  const dMin = Math.min(...values);
  const dMax = Math.max(...values);
  const pad = (dMax - dMin || Math.abs(dMax) || 1) * 0.08;
  // Never let the padding push the floor below zero for physically non-negative
  // quantities (torque, power, current) — a "-200 W" tick is nonsense. Series
  // that never approach zero (efficiency) still get the fitted min→max window.
  const lo = dMin >= 0 ? Math.max(0, dMin - pad) : dMin - pad;
  return niceScale(lo, dMax + pad, maxTicks);
}

/** Decimals needed so tick labels at `step` never repeat (2.5 / 3.0, not 3 / 3). */
export function tickDecimals(step: number, atLeast = 0): number {
  return Math.max(atLeast, Math.max(0, Math.ceil(-Math.log10(step))));
}
