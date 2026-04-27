"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

const THEME_STORAGE_KEY = "pulse-theme";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();
  const t = useTranslations("common");

  function toggleTheme() {
    const root = document.documentElement;
    const currentIsDark =
      root.classList.contains("dark") || root.dataset.theme === "dark";
    const nextTheme = currentIsDark ? "light" : "dark";
    setTheme(nextTheme);

    root.classList.remove("dark", "light", "system");
    root.classList.add(nextTheme);
    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t("theme")}
      title={t("theme")}
      suppressHydrationWarning
      className={cn(
        "grid size-[30px] place-items-center rounded-full border border-border/80 bg-background/60 text-foreground/85 transition hover:bg-background hover:text-foreground dark:bg-white/[0.06] dark:hover:bg-white/[0.10]",
        className,
      )}
    >
      <Sun strokeWidth={1.6} className="size-[14px] hidden dark:block" />
      <Moon strokeWidth={1.6} className="size-[14px] block dark:hidden" />
    </button>
  );
}
