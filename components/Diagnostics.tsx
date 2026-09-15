"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/Button";
import { TemperatureChart } from "./TemperatureChart";

export function Diagnostics() {
  const { t } = useLanguage();
  const dx = t.diagnostics;

  return (
    <section id="diagnostics" className="scroll-mt-20 bg-bg-light py-16 sm:py-24 lg:py-28">
      <div className="container">
        <div className="overflow-hidden rounded-card border border-line bg-[#0B1728]">
          <div className="grid grid-cols-1 gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:gap-8 lg:p-14">
            <div>
              <p className="text-sm font-medium text-text-secondary">{dx.heading}</p>
              <h2 className="mt-3 text-balance text-[28px] font-semibold leading-tight tracking-tight text-text-primary sm:text-[34px]">
                {dx.subheading}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
                {dx.text}
              </p>

              <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {dx.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-primary/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" strokeWidth={2.25} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <span className="text-2xl font-semibold text-text-primary">{dx.price}</span>
                <Button href="#contact" size="lg">
                  {dx.cta}
                </Button>
              </div>
            </div>

            <div className="flex items-center">
              <TemperatureChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
