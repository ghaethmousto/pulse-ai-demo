"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const THEME_STORAGE_KEY = "pulse-theme";
const THEMES = ["light", "dark"] as const;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const root = document.documentElement;
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    const theme = stored === "light" || stored === "dark" ? stored : "dark";

    root.classList.remove(...THEMES, "system");
    root.classList.add(theme);
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, []);

  return (
    <NextThemesProvider
      attribute={["class", "data-theme"]}
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      storageKey={THEME_STORAGE_KEY}
      themes={[...THEMES]}
    >
      {children}
    </NextThemesProvider>
  );
}
