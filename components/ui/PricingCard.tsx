import { Check } from "lucide-react";
import { Button } from "./Button";

interface PricingPlan {
  label: string;
  badge?: string | null;
  title: string;
  price: string;
  period: string;
  description: string;
  featuresIntro?: string;
  features: readonly string[];
  extra?: string | null;
  cta: string;
  highlighted?: boolean;
}

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-card border p-8 transition-transform duration-200 ${
        plan.highlighted
          ? "border-accent-cyan/40 bg-[#0B1728] shadow-glow lg:-translate-y-4"
          : "border-slate-200 bg-white"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-8 rounded-full bg-accent-cyan px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#03141C]">
          {plan.badge}
        </span>
      )}

      <p
        className={`text-xs font-semibold uppercase tracking-[0.14em] ${
          plan.highlighted ? "text-accent-cyan" : "text-slate-400"
        }`}
      >
        {plan.label}
      </p>

      <h3
        className={`mt-3 text-xl font-semibold ${
          plan.highlighted ? "text-text-primary" : "text-[#0B1728]"
        }`}
      >
        {plan.title}
      </h3>

      <div className="mt-5 flex items-baseline gap-2">
        <span
          className={`text-4xl font-semibold tracking-tight ${
            plan.highlighted ? "text-text-primary" : "text-[#0B1728]"
          }`}
        >
          {plan.price}
        </span>
        <span
          className={`text-sm ${
            plan.highlighted ? "text-text-secondary" : "text-slate-400"
          }`}
        >
          {plan.period}
        </span>
      </div>

      <p
        className={`mt-4 text-sm leading-relaxed ${
          plan.highlighted ? "text-text-secondary" : "text-slate-500"
        }`}
      >
        {plan.description}
      </p>

      {plan.featuresIntro && (
        <p
          className={`mt-6 text-xs font-medium uppercase tracking-wide ${
            plan.highlighted ? "text-accent-cyan/80" : "text-slate-400"
          }`}
        >
          {plan.featuresIntro}
        </p>
      )}

      <ul className={`space-y-3 text-sm ${plan.featuresIntro ? "mt-3" : "mt-6"}`}>
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                plan.highlighted ? "text-accent-cyan" : "text-accent-blue"
              }`}
              strokeWidth={2.25}
            />
            <span
              className={plan.highlighted ? "text-text-primary/90" : "text-slate-600"}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {plan.extra && (
        <>
          <div
            className={`my-6 h-px w-full ${
              plan.highlighted ? "bg-line" : "bg-slate-200"
            }`}
          />
          <p className={plan.highlighted ? "text-sm text-text-secondary" : "text-sm text-slate-500"}>
            {plan.extra}
          </p>
        </>
      )}

      <div className="mt-8">
        <Button
          href="#contact"
          variant={plan.highlighted ? "primary" : "outline"}
          fullWidth
        >
          {plan.cta}
        </Button>
      </div>
    </div>
  );
}
