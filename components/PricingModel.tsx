"use client";

import { Check, Plus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { track } from "@/lib/analytics";

export function PricingModel() {
  const { t } = useLanguage();
  const p = t.pricingModel;
  const ce = t.costExamples;

  return (
    <section id="pricing" className="scroll-mt-20 bg-[#F7F9FC] py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading
          heading={p.heading}
          subtitle={p.subtitle}
          theme="light"
          headingClassName="text-[#0F172A]"
          subtitleClassName="text-[#64748B]"
        />

        <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {/* Equipment & setup */}
          <div className="flex-1 rounded-card border border-slate-200/80 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-blue">
              {p.equipment.label}
            </p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight text-[#0F172A]">
                {p.equipment.price}
              </span>
              <span className="text-sm text-[#64748B]">{p.equipment.period}</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm">
              {p.equipment.included.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue" strokeWidth={2.25} />
                  <span className="text-[#0F172A]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-6 h-px w-full bg-slate-200" />
            <p className="text-sm text-[#64748B]">{p.equipment.installment}</p>
          </div>

          <span className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 lg:mx-0">
            <Plus className="h-4 w-4" strokeWidth={2} />
          </span>

          {/* Monitoring license */}
          <div className="flex-1 rounded-card border border-accent-cyan/40 bg-[#0B1728] p-8 shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-cyan">
              {p.monitoring.label}
            </p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight text-text-primary">
                {p.monitoring.price}
              </span>
              <span className="text-sm text-text-secondary">{p.monitoring.period}</span>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              {p.monitoring.included.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" strokeWidth={2.25} />
                  <span className="text-text-primary/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-6 h-px w-full bg-line" />
            <p className="text-sm text-text-secondary">{p.monitoring.note}</p>
          </div>
        </div>

        {/* Illustrative cost examples */}
        <div className="mt-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
            {ce.heading}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ce.items.map((item, i) => (
              <div
                key={i}
                className="rounded-panel border border-slate-200/80 bg-white px-5 py-5 text-center"
              >
                <p className="text-sm font-medium text-[#0F172A]">{item.label}</p>
                <p className="mt-1 text-xs text-[#64748B]">{item.sensors}</p>
                <p className="mt-3 text-lg font-semibold text-accent-blue">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-[#64748B]">{ce.footnote}</p>
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="#calculator" size="lg" onClick={() => track("pricing_cta_clicked")}>
            {p.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
