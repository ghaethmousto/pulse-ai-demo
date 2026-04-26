"use client";

import { useTranslations } from "next-intl";

import { CountUp } from "@/components/dashboard/count-up";
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
      </header>
      <ol className="border-t border-border/60 divide-y divide-border/50">
        {stages.map((s) => (
          <li
            key={s.stage}
            className="list-card-row grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-3.5"
          >
            <span aria-hidden className={`size-2 rounded-full ${STATUS_TONE[s.status]}`} />
            <div className="min-w-0">
              <div className="truncate text-[12.5px] font-semibold text-foreground">
                {pickLocale(s.title, locale)}
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">
                {t("plannedLabel")} <bdi>{formatDate(s.planned, locale)}</bdi>
                {s.actual ? (
                  <>
                    {" · "}
                    {t("actualLabel")} <bdi>{formatDate(s.actual, locale)}</bdi>
                  </>
                ) : null}
              </div>
            </div>
            <div className="text-end">
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {tStatus(STATUS_LABEL[s.status])}
              </span>
              {s.varianceDays > 0 ? (
                <div className="mt-0.5 font-mono text-[11px] font-semibold tabular-nums text-warning">
                  <bdi>
                    <CountUp value={t("variance", { days: s.varianceDays })} />
                  </bdi>
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
