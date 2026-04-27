"use client";

import { useLocale, useTranslations } from "next-intl";
import { Search } from "lucide-react";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { PulseLine } from "@/components/brand/pulse-line";
import { getProject } from "@/lib/data/al-reem";
import { pickLocale } from "@/lib/utils/pick-locale";
import type { Locale } from "@/types/pulse";

export function Topbar() {
  const t = useTranslations("common");
  const tProj = useTranslations("demoProject");
  const tHeader = useTranslations("dashboard.header");
  const locale = useLocale() as Locale;
  const project = getProject();

  const city = pickLocale(project.location, locale).split("،")[0].split(",")[0];

  return (
    <div className="sticky top-0 z-30">
      <header
        className="topbar-frost relative border-b border-border/60 backdrop-blur-2xl backdrop-saturate-[1.4]"
      >
        <div className="flex h-[68px] items-center gap-4 px-6 lg:px-8">
          <div className="min-w-0 flex-1">
            <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              {tHeader("eyebrow")}
            </div>
            <div className="mt-0.5 truncate text-[18px] font-bold tracking-[-0.022em] text-foreground">
              <bdi>
                {pickLocale(project.name, locale)} — {city}
              </bdi>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Ask Pulse search pill */}
            <button
              type="button"
              aria-label={t("searchPlaceholder")}
              className="hidden h-[30px] items-center gap-2 rounded-full border border-border/80 bg-card/85 px-3 text-[11px] text-muted-foreground transition hover:bg-card hover:text-foreground/90 sm:inline-flex"
            >
              <Search className="size-3" strokeWidth={1.8} />
              <span className="font-medium">{t("askPulse")}</span>
              <span className="ms-2 inline-flex items-center gap-0.5 rounded border border-border/80 bg-background/60 px-1 font-mono text-[9px] text-muted-foreground/80">
                ⌘K
              </span>
            </button>

            {/* Live chip */}
            <span className="inline-flex h-[30px] items-center gap-1.5 rounded-full border border-border/80 bg-card/85 px-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/80">
              <span
                aria-hidden
                className="pulse-live-dot inline-block size-1.5 rounded-full bg-[#3d7a58]"
                style={{ boxShadow: "0 0 6px rgba(61,122,88,0.6)" }}
              />
              {tProj("live")}
            </span>

            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <PulseLine accent />
    </div>
  );
}
