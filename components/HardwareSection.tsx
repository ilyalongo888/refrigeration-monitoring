"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";

export function HardwareSection() {
  const { t } = useLanguage();
  const hw = t.hardware;

  return (
    <section className="border-t border-[rgba(148,163,184,0.08)] bg-[#0B1728] py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading heading={hw.heading} subtitle={hw.subtitle} theme="dark" className="max-w-2xl" />

        <div className="relative mx-auto mt-12 w-full">
          <div
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-accent-cyan/[0.06] blur-3xl"
            aria-hidden
          />
          <div
            className="relative w-full overflow-hidden rounded-panel border border-line bg-black/20"
            style={{ aspectRatio: "1672 / 433" }}
          >
            <Image
              src="/images/thermoguard-hardware-system-cropped.png"
              alt={hw.heading}
              fill
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-contain"
            />
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-text-secondary">{hw.note}</p>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4 lg:gap-x-8">
          {hw.features.map((feature, i) => (
            <div key={i} className="text-center">
              <p className="text-[15px] font-semibold text-text-primary">{feature.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-text-secondary">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
