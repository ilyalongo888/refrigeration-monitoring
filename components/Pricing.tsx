"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";
import { PricingCard } from "./ui/PricingCard";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="scroll-mt-20 bg-bg-light py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading
          heading={t.pricing.heading}
          subtitle={t.pricing.subtitle}
          theme="light"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center lg:gap-5">
          {t.pricing.plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
