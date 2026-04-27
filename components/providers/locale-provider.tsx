"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Locale = "en" | "ar";

interface LocaleContextValue {
  locale: Locale;
  toggleLocale: () => void;
  setLocale: (l: Locale) => void;
  dir: "ltr" | "rtl";
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const STORAGE_KEY = "pulse-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ar") {
        startTransition(() => setLocaleState(stored));
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {}
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggleLocale = useCallback(
    () => setLocaleState((prev) => (prev === "en" ? "ar" : "en")),
    []
  );

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      toggleLocale,
      setLocale,
      dir: locale === "ar" ? "rtl" : "ltr",
    }),
    [locale, toggleLocale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}

/** Same as useLocale but returns undefined when no LocaleProvider is mounted.
 *  Used by components shared between skeleton (has provider) and production
 *  (does not — locale comes from URL via next-intl). */
export function useOptionalLocale() {
  return useContext(LocaleContext);
}
