"use client";

import { useState } from "react";
import { Sliders } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";
import { StatusBadge } from "./ui/StatusBadge";
import { Button } from "./ui/Button";

export function RemoteControl() {
  const { t } = useLanguage();
  const rc = t.remoteControl;
  const [selected, setSelected] = useState(rc.mockup.setPoint);
  const [applied, setApplied] = useState(false);

  return (
    <section className="bg-[#07111F] py-16 sm:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            heading={rc.heading}
            subtitle={rc.subtitle}
            theme="dark"
            align="left"
            className="max-w-lg"
          />
          <p className="mt-6 max-w-lg text-sm text-text-secondary/80">{rc.note}</p>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-card border border-line bg-card p-6 shadow-card-lift">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-text-secondary">
              <Sliders className="h-3.5 w-3.5 text-accent-cyan" strokeWidth={2} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                {rc.mockup.unit}
              </span>
            </div>
            <StatusBadge variant="normal" dot>
              ONLINE
            </StatusBadge>
          </div>

          <div className="mt-6 flex items-center justify-between rounded-panel border border-line bg-white/[0.02] px-4 py-3">
            <span className="text-xs uppercase tracking-wide text-text-secondary">
              {rc.mockup.currentLabel}
            </span>
            <span className="font-mono text-xl font-semibold text-status-alert">
              {rc.mockup.current}
            </span>
          </div>

          <div className="mt-3 rounded-panel border border-line bg-white/[0.02] px-4 py-3">
            <span className="text-xs uppercase tracking-wide text-text-secondary">
              {rc.mockup.setPointLabel}
            </span>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {rc.mockup.options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setSelected(opt);
                    setApplied(false);
                  }}
                  className={`rounded-btn border py-2.5 text-center font-mono text-sm transition-colors ${
                    selected === opt
                      ? "border-accent-cyan bg-accent-cyan/10 text-accent-cyan"
                      : "border-line text-text-secondary hover:border-accent-cyan/30 hover:text-text-primary"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Button fullWidth onClick={() => setApplied(true)}>
              {applied ? "✓" : rc.mockup.apply}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
