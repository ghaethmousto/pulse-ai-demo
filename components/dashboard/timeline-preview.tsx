"use client";

import { useTranslations } from "next-intl";
import { Activity } from "lucide-react";

import type { Locale, TimelineStage, TimelineStatus } from "@/types/pulse";
import { pickLocale } from "@/lib/utils/pick-locale";
import { formatDate } from "@/lib/data/al-reem";

const STATUS_TONE: Record<TimelineStatus, string> = {
  done: "bg-success",
  "in-progress": "bg-info",
  delayed: "bg-warning",
  "at-risk": "bg-danger",
  upcoming: "bg-muted-foreground/40",
};

const STATUS_LABEL: Record<TimelineStatus, string> = {
  done: "done",
  "in-progress": "inProgress",
  delayed: "delayed",
  "at-risk": "atRisk",
  upcoming: "upcoming",
};

export function TimelinePreview({ stages, locale }: { stages: TimelineStage[]; locale: Locale }) {
  const t = useTranslations("dashboard.timeline");
  const tStatus = useTranslations("dashboard.timeline.status");

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
          <Activity className="size-4" />
        </span>
      </header>
      <ol className="divide-y divide-border">
        {stages.map((s) => (
          <li key={s.stage} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4">
            <span aria-hidden className={`size-2.5 rounded-full ${STATUS_TONE[s.status]}`} />
            <div className="min-w-0">
              <div className="truncate text-sm font-medium text-foreground">
                {pickLocale(s.title, locale)}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {t("plannedLabel", { date: formatDate(s.planned, locale) })}
                {s.actual ? ` · ${t("actualLabel", { date: formatDate(s.actual, locale) })}` : ""}
              </div>
            </div>
            <div className="text-end text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              {tStatus(STATUS_LABEL[s.status])}
              {s.varianceDays > 0 ? (
                <div className="mt-0.5 text-xs font-semibold text-warning">+{s.varianceDays}d</div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
