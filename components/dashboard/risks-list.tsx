"use client";

import { useTranslations } from "next-intl";

import type { Locale, Risk } from "@/types/pulse";
import { pickLocale } from "@/lib/utils/pick-locale";

const SEVERITY_TONE: Record<string, string> = {
  Critical: "bg-danger/15 text-danger border-danger/30",
  High: "bg-danger/10 text-danger border-danger/25",
  Medium: "bg-warning/15 text-warning border-warning/25",
  Low: "bg-info/15 text-info border-info/25",
};

export function RisksList({ risks, locale }: { risks: Risk[]; locale: Locale }) {
  const t = useTranslations("dashboard.risks");
  const tSeverity = useTranslations("dashboard.severity");

  return (
    <section className="card-hover-primary overflow-hidden rounded-[10px] border border-border/70 bg-card">
      <header className="list-card-header flex items-center justify-between px-5 py-4">
        <div>
          <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
            {t("eyebrow")}
          </div>
          <h2 className="mt-0.5 text-[15px] font-bold tracking-[-0.01em] text-foreground">
            {t("title")}
          </h2>
        </div>
        <span className="text-[10px] font-semibold tabular-nums text-muted-foreground">
          {risks.length}
        </span>
      </header>
      <ul className="border-t border-border/60 divide-y divide-border/50">
        {risks.map((r) => (
          <li key={r.id} className="list-card-row px-5 py-3.5">
            <div className="flex items-start gap-3">
              <span
                className={`shrink-0 rounded-[4px] border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] ${SEVERITY_TONE[r.severity] ?? "bg-muted text-foreground border-border"}`}
              >
                {tSeverity(r.severity)}
              </span>
              <div className="min-w-0">
                <div className="text-[12.5px] font-semibold text-foreground">
                  {pickLocale(r.title, locale)}
                </div>
                <div className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
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
