import { ReactNode } from "react";

type Variant = "normal" | "alert" | "neutral" | "cyan";

interface StatusBadgeProps {
  variant?: Variant;
  dot?: boolean;
  pulse?: boolean;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  normal: "bg-status-normal/10 text-status-normal border-status-normal/30",
  alert: "bg-status-alert/10 text-status-alert border-status-alert/30",
  neutral: "bg-white/5 text-text-secondary border-line",
  cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30",
};

const dotStyles: Record<Variant, string> = {
  normal: "bg-status-normal",
  alert: "bg-status-alert",
  neutral: "bg-text-secondary",
  cyan: "bg-accent-cyan",
};

export function StatusBadge({
  variant = "neutral",
  dot = false,
  pulse = false,
  children,
  className = "",
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {pulse && (
            <span
              className={`absolute inline-flex h-full w-full animate-pulse-ring rounded-full ${dotStyles[variant]}`}
            />
          )}
          <span
            className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotStyles[variant]}`}
          />
        </span>
      )}
      {children}
    </span>
  );
}
