"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Each locale ships its own fully-localized hardware/product graphic — the heading,
// subtitle, sensor note and feature callouts are all baked into the PNG itself, so
// this component renders nothing but the image (no HTML text duplicating it).
const hardwareImageByLocale = {
  lv: "/images/temvio-system-lv.png",
  ru: "/images/temvio-system-ru.png",
  en: "/images/temvio-system-en.png",
  et: "/images/temvio-system-et.png",
};

export function HardwareSection() {
  const { t, lang } = useLanguage();
  const hw = t.hardware;
  const imageSrc = hardwareImageByLocale[lang] ?? hardwareImageByLocale.lv;

  return (
    <section className="border-t border-[rgba(148,163,184,0.08)] bg-[#0B1728] py-16 sm:py-24 lg:py-28">
      <div className="container">
        <div className="relative mx-auto w-full max-w-5xl">
          <div
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-accent-cyan/[0.06] blur-3xl"
            aria-hidden
          />
          <div
            className="relative w-full overflow-hidden rounded-panel border border-line bg-black/20"
            style={{ aspectRatio: "1659 / 948" }}
          >
            <Image
              key={imageSrc}
              src={imageSrc}
              alt={hw.imageAlt}
              fill
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
