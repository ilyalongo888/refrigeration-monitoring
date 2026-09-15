"use client";

import {
  Warehouse,
  Truck,
  Package,
  ShoppingCart,
  UtensilsCrossed,
  BedDouble,
  ChefHat,
  Factory,
  Refrigerator,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./ui/SectionHeading";

const icons = [
  Warehouse,
  Truck,
  Package,
  ShoppingCart,
  UtensilsCrossed,
  BedDouble,
  ChefHat,
  Factory,
  Refrigerator,
];

export function Industries() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading heading={t.industries.heading} theme="light" />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.industries.items.map((name, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="flex items-center gap-4 rounded-card border border-slate-200/80 bg-white p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-card-lift"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-accent-blue">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <span className="text-[15px] font-medium text-[#0B1728]">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
