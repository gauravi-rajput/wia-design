const inr = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

/** Compact Indian currency: ₹1.2 Cr / ₹8.4 L / ₹42,000 */
export function formatInrCompact(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  if (abs >= 1_00_00_000) return `${sign}₹${(abs / 1_00_00_000).toFixed(2)} Cr`;
  if (abs >= 1_00_000) return `${sign}₹${(abs / 1_00_000).toFixed(2)} L`;
  return `${sign}₹${inr.format(abs)}`;
}

export function formatInr(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  return `₹${inr.format(Math.round(value))}`;
}

export function formatPct(
  value: number | null | undefined,
  opts: { signed?: boolean; digits?: number } = {},
): string {
  if (value == null || Number.isNaN(value)) return "—";
  const digits = opts.digits ?? 1;
  const sign = opts.signed && value > 0 ? "+" : "";
  return `${sign}${value.toFixed(digits)}%`;
}

export function formatDate(value: string | null | undefined): string {
  if (!value) return "—";
  const m = value.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (!m) return value;
  const [, dd, mm, yyyy] = m;
  const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
