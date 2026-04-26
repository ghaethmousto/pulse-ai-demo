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
      title={isDark ? t("light") : t("dark")}
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
