"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/Button";
import { StatusBadge } from "./ui/StatusBadge";
import { Highlighted } from "./ui/Highlighted";
import { MonitoringDashboard } from "./MonitoringDashboard";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="bg-hero-glow relative scroll-mt-20 overflow-hidden pb-16 pt-[140px] sm:pt-[160px] lg:pb-24 lg:pt-[176px]"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />

      <div className="container relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[55%_45%] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <StatusBadge variant="cyan" dot>
            {t.hero.badge}
          </StatusBadge>

          <h1 className="mt-6 max-w-xl text-balance text-[38px] font-semibold leading-[1.12] tracking-tight text-text-primary sm:text-[48px] lg:text-[60px]">
            <Highlighted text={t.hero.h1} />
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contact" size="lg">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg" icon>
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <p className="mt-7 text-sm text-text-secondary/80">{t.hero.proofLine}</p>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <MonitoringDashboard />
        </div>
      </div>
    </section>
  );
}
