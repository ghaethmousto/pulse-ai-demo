"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("common");
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`${t("theme")}: ${isDark ? t("light") : t("dark")}`}
      suppressHydrationWarning
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground/80 shadow-pulse-card transition hover:text-foreground hover:bg-accent",
        className,
      )}
    >
      <Sun className="size-4 hidden dark:block" />
      <Moon className="size-4 block dark:hidden" />
    </button>
  );
}
