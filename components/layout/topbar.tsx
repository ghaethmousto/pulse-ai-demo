"use client";

import { useTranslations } from "next-intl";
import { Bell, Search } from "lucide-react";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Topbar() {
  const t = useTranslations("common");

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-5 backdrop-blur lg:px-8">
      <div className="relative hidden max-w-sm flex-1 md:block">
        <Search
          aria-hidden
          className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-muted-foreground [inset-inline-start:0.875rem]"
        />
        <input
          type="search"
          placeholder={t("searchPlaceholder")}
          className="h-9 w-full rounded-full border border-border bg-card text-sm placeholder:text-muted-foreground shadow-pulse-card outline-none transition focus:border-wine-light focus:ring-2 focus:ring-wine-light/30 [padding-inline-start:2.25rem] [padding-inline-end:1rem]"
        />
      </div>

      <div className="ms-auto flex items-center gap-2">
        <button
          type="button"
          aria-label={t("notifications")}
          className="relative inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground/80 shadow-pulse-card transition hover:text-foreground hover:bg-accent"
        >
          <Bell className="size-4" />
          <span className="absolute size-2 rounded-full bg-wine ring-2 ring-card [inset-block-start:0.4rem] [inset-inline-end:0.4rem]" />
        </button>
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
