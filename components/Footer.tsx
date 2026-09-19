"use client";

import { Snowflake, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  const links = [
    { label: f.links.how, href: "#how-it-works" },
    { label: f.links.pricing, href: "#pricing" },
    { label: f.links.calculator, href: "#calculator" },
    { label: f.links.faq, href: "#faq" },
    { label: f.links.privacy, href: "#" },
    { label: f.links.terms, href: "#" },
  ];

  return (
    <footer className="border-t border-line bg-[#07111F] py-14">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-text-primary">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan">
                <Snowflake className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">{t.meta.brand}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              {f.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
              {f.linksHeading}
            </p>
            <ul className="mt-4 space-y-2.5">
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
              {f.contactsHeading}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" strokeWidth={1.8} />
                <span>{f.address}</span>
              </li>
              {f.phones.map((phone, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-accent-cyan" strokeWidth={1.8} />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-text-primary">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent-cyan" strokeWidth={1.8} />
                <a href={`mailto:${f.email}`} className="hover:text-text-primary">
                  {f.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" strokeWidth={1.8} />
                <span>
                  {f.hoursLabel} {f.hours}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
              {f.companyHeading}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-text-secondary">
              <li className="text-text-primary">{f.companyName}</li>
              <li>
                {f.vatLabel} {f.vatNumber}
              </li>
            </ul>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
              {f.bankHeading}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-text-secondary">
              <li>
                {f.ibanLabel} <span className="font-mono text-[13px]">{f.iban}</span>
              </li>
              <li>{f.bankName}</li>
              <li>
                {f.swiftLabel} <span className="font-mono text-[13px]">{f.swift}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-text-secondary/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{f.disclaimer}</p>
          <p>
            © {year} {t.meta.brand}. {f.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
