interface MetricCardProps {
  value: string;
  label: string;
  tone?: "default" | "normal" | "alert";
}

const toneStyles: Record<NonNullable<MetricCardProps["tone"]>, string> = {
  default: "text-text-primary",
  normal: "text-status-normal",
  alert: "text-status-alert",
};

export function MetricCard({ value, label, tone = "default" }: MetricCardProps) {
  return (
    <div className="rounded-panel border border-line bg-white/[0.02] px-4 py-3">
      <div className={`font-mono text-2xl font-semibold ${toneStyles[tone]}`}>
        {value}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-wide text-text-secondary">
        {label}
      </div>
    </div>
  );
}
