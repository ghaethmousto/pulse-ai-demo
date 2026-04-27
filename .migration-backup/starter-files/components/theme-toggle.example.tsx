"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button type="button" onClick={() => setTheme(nextTheme)} aria-label="Toggle theme">
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
