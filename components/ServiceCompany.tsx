"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";

export function ServiceCompany() {
  const { t } = useLanguage();
  const sc = t.serviceCompany;

  return (
    <section className="bg-bg-light py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading heading={sc.heading} theme="light" className="max-w-2xl" />

        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center">
          {sc.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-slate-500">
              {p}
            </p>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-card border border-accent-blue/20 bg-accent-blue/[0.04] px-8 py-7 text-center">
          <p className="text-balance text-lg font-semibold leading-snug text-[#0B1728] sm:text-xl">
            {sc.highlight}
          </p>
        </div>
      </div>
    </section>
  );
}
