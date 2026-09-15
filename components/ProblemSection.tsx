"use client";

import { Wrench, Clock, BellOff } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";
import { Highlighted } from "./ui/Highlighted";

const icons = [Wrench, Clock, BellOff];

export function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-bg-light py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading heading={t.problem.heading} theme="light" className="max-w-3xl" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {t.problem.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="rounded-card border border-slate-200/80 bg-white p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#0B1728]">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-500">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-balance text-center text-2xl font-semibold tracking-tight text-[#0B1728] sm:text-3xl">
          <Highlighted text={t.problem.statement} />
        </p>
      </div>
    </section>
  );
}
