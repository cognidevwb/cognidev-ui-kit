type Props = { label: string; tone?: "neutral" | "success" | "warn" };

export function Badge({ label, tone = "neutral" }: Props) {
  return <span className={`ck-badge ck-badge--${tone}`}>{label}</span>;
}
