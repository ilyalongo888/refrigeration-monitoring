"use client";

import { SearchCheck, Zap, History, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";

const icons = [SearchCheck, Zap, History, ShieldCheck];

export function Benefits() {
  const { t } = useLanguage();

  return (
    <section className="bg-bg-light py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading heading={t.benefits.heading} theme="light" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.benefits.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="rounded-card border border-slate-200/80 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold text-[#0B1728]">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
