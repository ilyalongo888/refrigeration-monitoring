"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Snowflake, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";
import { useLanguage, LANGUAGES } from "@/context/LanguageContext";
import type { Lang } from "@/context/LanguageContext";

const navAnchors = [
  { key: "how", href: "#how-it-works" },
  { key: "pricing", href: "#pricing" },
  { key: "calculator", href: "#calculator" },
  { key: "faq", href: "#faq" },
] as const;

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#07111F]/90 backdrop-blur-md border-b border-line"
          : "bg-[#07111F]/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-text-primary">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan">
            <Snowflake className="h-4 w-4" strokeWidth={2} />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            {t.meta.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navAnchors.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LangSwitch lang={lang} setLang={setLang} />
          <Button href="#calculator" size="md">
            {t.nav.cta}
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary lg:hidden"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-[#07111F]/98 backdrop-blur-md lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navAnchors.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-lg px-2 py-3 text-[15px] text-text-secondary hover:bg-white/5 hover:text-text-primary"
              >
                {t.nav[item.key]}
              </a>
            ))}
            <div className="mt-2 flex items-center px-2">
              <LangSwitch lang={lang} setLang={setLang} />
            </div>
            <Button href="#calculator" size="md" className="mt-3" onClick={handleNavClick}>
              {t.nav.cta}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function LangSwitch({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium uppercase text-text-secondary transition-colors hover:text-text-primary"
      >
        {current.code}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-btn border border-line bg-[#0B1728] py-1 shadow-card-lift"
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={lang === l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-sm transition-colors ${
                lang === l.code
                  ? "text-accent-cyan"
                  : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
              }`}
            >
              <span>{l.label}</span>
              <span className="text-xs uppercase text-text-secondary/60">{l.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
