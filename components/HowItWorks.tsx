"use client";

import { Plug, Thermometer, ScanSearch, BellRing, Share2, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";

const icons = [Plug, Thermometer, ScanSearch, BellRing, Share2, Wrench];

export function HowItWorks() {
  const { t } = useLanguage();
  const steps = t.howItWorks.steps;

  return (
    <section id="how-it-works" className="scroll-mt-20 bg-[#081321] py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading
          heading={t.howItWorks.heading}
          subtitle={t.howItWorks.subtitle}
          theme="dark"
        />

        {/* Desktop horizontal timeline */}
        <div className="relative mt-16 hidden lg:flex">
          <div className="absolute left-[10%] right-[10%] top-6 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />
          <div className="grid w-full grid-cols-6 gap-3">
            {steps.map((step, i) => {
              const Icon = icons[i];
              const isLast = i === steps.length - 1;
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-[#081321] ${
                      isLast
                        ? "border-accent-cyan shadow-glow-sm"
                        : "border-line"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${isLast ? "text-accent-cyan" : "text-text-secondary"}`}
                      strokeWidth={1.8}
                    />
                  </div>
                  <span className="mt-4 font-mono text-xs text-text-secondary">
                    {step.number}
                  </span>
                  <h3 className="mt-1.5 text-sm font-semibold tracking-wide text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 flex flex-col lg:hidden">
          {steps.map((step, i) => {
            const Icon = icons[i];
            const isLast = i === steps.length - 1;
            return (
              <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
                {!isLast && (
                  <span className="absolute left-[23px] top-12 h-full w-px bg-line" aria-hidden />
                )}
                <div
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-[#081321] ${
                    isLast ? "border-accent-cyan shadow-glow-sm" : "border-line"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${isLast ? "text-accent-cyan" : "text-text-secondary"}`}
                    strokeWidth={1.8}
                  />
                </div>
                <div className="pt-1.5">
                  <span className="font-mono text-xs text-text-secondary">{step.number}</span>
                  <h3 className="mt-1 text-sm font-semibold tracking-wide text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
