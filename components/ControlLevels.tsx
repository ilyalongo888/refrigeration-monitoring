"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";

export function ControlLevels() {
  const { t } = useLanguage();
  const levels = t.controlLevels.levels;

  return (
    <section id="control-levels" className="scroll-mt-20 bg-bg-secondary py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading heading={t.controlLevels.heading} theme="dark" />

        <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {levels.map((level, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-4 lg:flex-row">
              <div className="w-full rounded-card border border-line bg-card p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-cyan">
                  {level.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-text-primary">
                  {level.title}
                </h3>
                <p className="mt-4 font-mono text-[13px] leading-relaxed text-text-secondary">
                  {level.flow}
                </p>
              </div>
              {i !== levels.length - 1 && (
                <span className="shrink-0 text-text-secondary/50">
                  <ChevronRight className="hidden h-5 w-5 lg:block" />
                  <ChevronDown className="h-5 w-5 lg:hidden" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
