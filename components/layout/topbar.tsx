"use client";

import { useLocale, useTranslations } from "next-intl";
import { Bell, Search } from "lucide-react";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { getProject } from "@/lib/data/al-reem";
import { pickLocale } from "@/lib/utils/pick-locale";
import type { Locale } from "@/types/pulse";

export function Topbar() {
  const t = useTranslations("common");
  const tProj = useTranslations("demoProject");
  const locale = useLocale() as Locale;
  const project = getProject();

  return (
    <header className="sticky top-0 z-30 flex h-12 items-center gap-3 border-b border-border bg-background/85 px-5 backdrop-blur lg:px-7">
      <div className="min-w-0 flex-1">
        <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {tProj("phase")}
        </div>
        <div className="truncate text-[14px] font-bold tracking-[-0.02em] text-foreground">
          {pickLocale(project.name, locale)} — {pickLocale(project.location, locale).split("،")[0].split(",")[0]}
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          aria-label={t("searchPlaceholder")}
          className="grid size-[30px] place-items-center rounded-md border border-border bg-card text-foreground/70 transition hover:text-foreground hover:bg-accent/60"
        >
          <Search className="size-[14px]" strokeWidth={1.6} />
        </button>
        <button
          type="button"
          aria-label={t("notifications")}
          className="relative grid size-[30px] place-items-center rounded-md border border-border bg-card text-foreground/70 transition hover:text-foreground hover:bg-accent/60"
        >
          <Bell className="size-[14px]" strokeWidth={1.6} />
          <span
            aria-hidden
            className="absolute size-1.5 rounded-full bg-wine ring-2 ring-card [inset-block-start:0.25rem] [inset-inline-end:0.25rem]"
          />
        </button>
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
