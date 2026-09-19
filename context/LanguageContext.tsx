"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ru } from "@/locales/ru";
import { lv } from "@/locales/lv";
import { en } from "@/locales/en";
import { et } from "@/locales/et";
import type { Dictionary } from "@/locales/ru";

// To add another language (e.g. Lithuanian "lt"):
// 1. Create locales/<code>.ts exporting `export const <code>: Dictionary = {...}`
// 2. Import it above and add it to `dictionaries` and `LANGUAGES` below.
export type Lang = "lv" | "ru" | "en" | "et";

const dictionaries: Record<Lang, Dictionary> = { lv, ru, en, et };

// Order here is the site-wide switcher order (desktop + mobile): LV | RU | EN | ET.
export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "lv", label: "Latviešu" },
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "et", label: "Eesti" },
];

const LANG_CODES = LANGUAGES.map((l) => l.code);

const STORAGE_KEY = "thermoguard-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Latvia is the primary market, so LV is the default language on first visit.
  const [lang, setLangState] = useState<Lang>("lv");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && (LANG_CODES as string[]).includes(stored)) {
        setLangState(stored as Lang);
      }
    } catch {
      // localStorage unavailable — keep default
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore write failures (private mode, etc.)
    }
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
