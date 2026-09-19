"use client";

import { useEffect, useRef } from "react";
import { Warehouse, Cake, Flower2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";
import { StatusBadge } from "./ui/StatusBadge";
import { track } from "@/lib/analytics";

const icons = [Warehouse, Cake, Flower2];

export function BusinessScenarios() {
  const { t } = useLanguage();
  const bs = t.businessScenarios;

  return (
    <section className="bg-[#07111F] py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading heading={bs.heading} subtitle={bs.subtitle} theme="dark" className="max-w-2xl" />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {bs.scenarios.map((scenario, i) => {
            const Icon = icons[i];
            return (
              <ScenarioCard
                key={i}
                scenario={scenario}
                Icon={Icon}
                tag={bs.tag}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScenarioCard({
  scenario,
  Icon,
  tag,
  index,
}: {
  scenario: {
    industry: string;
    title: string;
    body: string;
    metrics: [{ value: string; label: string }, { value: string; label: string }];
    bottomLine: string;
  };
  Icon: typeof Warehouse;
  tag: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !seen.current) {
            seen.current = true;
            track("scenario_viewed", { index, industry: scenario.industry });
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, scenario.industry]);

  return (
    <div ref={ref} className="flex flex-col rounded-card border border-line bg-card p-7">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
          <Icon className="h-5 w-5" strokeWidth={1.7} />
        </div>
        <StatusBadge variant="neutral">{tag}</StatusBadge>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent-cyan">
        {scenario.industry}
      </p>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-text-primary">
        {scenario.title}
      </h3>
      <p className="mt-3 text-[13px] leading-relaxed text-text-secondary">{scenario.body}</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {scenario.metrics.map((m, i) => (
          <div key={i} className="rounded-panel border border-line bg-white/[0.02] px-3 py-3">
            <p className="font-mono text-lg font-semibold text-accent-cyan">{m.value}</p>
            <p className="mt-1 text-[11px] leading-snug text-text-secondary">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-start gap-2 border-t border-line pt-5">
        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" strokeWidth={2} />
        <p className="text-sm font-medium leading-snug text-text-primary">{scenario.bottomLine}</p>
      </div>
    </div>
  );
}
