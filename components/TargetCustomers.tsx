"use client";

import {
  Warehouse,
  Factory,
  Beef,
  Fish,
  Milk,
  Snowflake,
  Truck,
  ShoppingCart,
  Pill,
  Building2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";

const icons = [
  Warehouse,
  Factory,
  Beef,
  Fish,
  Milk,
  Snowflake,
  Truck,
  ShoppingCart,
  Pill,
  Building2,
];

export function TargetCustomers() {
  const { t } = useLanguage();
  const tc = t.targetCustomers;

  return (
    <section className="bg-bg-light py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading heading={tc.heading} theme="light" />

        <p className="mt-14 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          {tc.primaryLabel}
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tc.primary.map((name, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="flex items-center gap-3 rounded-card border border-slate-200/80 bg-white p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-card-lift"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-accent-blue">
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                </div>
                <span className="text-sm font-medium text-[#0B1728]">{name}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-14 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          {tc.secondaryLabel}
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {tc.secondary.map((name, i) => (
            <span
              key={i}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-500"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
