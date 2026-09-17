"use client";

import { Snowflake, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// TODO: replace with real company contact details before launch.
const REAL_EMAIL = "";
const REAL_PHONE = "";

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

  const hasEmail = REAL_EMAIL.length > 0;
  const hasPhone = REAL_PHONE.length > 0;

  return (
    <footer className="border-t border-line bg-[#07111F] py-14">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
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
            {hasEmail || hasPhone ? (
              <ul className="mt-4 space-y-2.5 text-sm text-text-secondary">
                {hasEmail && (
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent-cyan" strokeWidth={1.8} />
                    <a href={`mailto:${REAL_EMAIL}`} className="hover:text-text-primary">
                      {REAL_EMAIL}
                    </a>
                  </li>
                )}
                {hasPhone && (
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-accent-cyan" strokeWidth={1.8} />
                    <a href={`tel:${REAL_PHONE.replace(/\s/g, "")}`} className="hover:text-text-primary">
                      {REAL_PHONE}
                    </a>
                  </li>
                )}
              </ul>
            ) : (
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
                {f.contactsFallback}
              </p>
            )}
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
