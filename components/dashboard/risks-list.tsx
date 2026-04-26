"use client";

import { useTranslations } from "next-intl";
import { ShieldAlert } from "lucide-react";

import type { Locale, Risk } from "@/types/pulse";
import { pickLocale } from "@/lib/utils/pick-locale";

const SEVERITY_TONE: Record<string, string> = {
  Critical: "bg-danger/15 text-danger",
  High: "bg-danger/10 text-danger",
  Medium: "bg-warning/15 text-warning",
  Low: "bg-info/15 text-info",
};

export function RisksList({ risks, locale }: { risks: Risk[]; locale: Locale }) {
  const t = useTranslations("dashboard.risks");
  const tSeverity = useTranslations("dashboard.severity");

  return (
    <section className="rounded-3xl border border-border bg-card shadow-pulse-card">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <div>
          <div className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
            {t("eyebrow")}
          </div>
          <h2 className="mt-1 text-base font-semibold text-foreground">{t("title")}</h2>
        </div>
        <span className="grid size-8 place-items-center rounded-full bg-accent text-wine">
          <ShieldAlert className="size-4" />
        </span>
      </header>
      <ul className="divide-y divide-border">
        {risks.map((r) => (
          <li key={r.id} className="px-6 py-4">
            <div className="flex items-start gap-3">
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider ${SEVERITY_TONE[r.severity] ?? "bg-muted text-foreground"}`}>
                {tSeverity(r.severity)}
              </span>
              <div className="min-w-0">
                <div className="text-sm font-medium text-foreground">{pickLocale(r.title, locale)}</div>
                <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {pickLocale(r.recommendedAction, locale)}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
