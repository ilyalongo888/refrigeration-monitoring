"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/Button";

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="bg-cta-glow relative overflow-hidden py-20 sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <div className="container relative text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-cyan">
          {t.finalCta.label}
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-balance text-[30px] font-semibold leading-tight tracking-tight text-text-primary sm:text-[40px]">
          {t.finalCta.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
          {t.finalCta.text}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#calculator" size="lg">
            {t.finalCta.ctaPrimary}
          </Button>
          <Button href="#how-it-works" variant="secondary" size="lg">
            {t.finalCta.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
