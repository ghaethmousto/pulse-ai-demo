"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Building2, CalendarClock, MapPin } from "lucide-react";

import type { Locale, ProjectMeta } from "@/types/pulse";
import { pickLocale } from "@/lib/utils/pick-locale";
import { formatAed, formatDate } from "@/lib/data/al-reem";

export function ProjectHeader({ project, locale }: { project: ProjectMeta; locale: Locale }) {
  const t = useTranslations("dashboard.header");

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-pulse-card md:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 100% at 100% 0%, color-mix(in oklab, var(--pulse-wine) 10%, transparent), transparent 60%)",
        }}
      />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
            {t("eyebrow")}
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {pickLocale(project.name, locale)}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" /> {pickLocale(project.location, locale)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="size-3.5" /> {pickLocale(project.type, locale)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="size-3.5" />
              {t("nextMilestone", { date: formatDate(project.nextMilestoneDate, locale) })}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Pill tone="warning" label={t("status")} value={project.overallStatus} />
          <Pill tone="muted" label={t("phase")} value={pickLocale(project.currentPhase, locale)} />
          <Pill tone="info" label={t("contract")} value={formatAed(project.contractValueAED, locale)} />
        </div>
      </div>
    </motion.section>
  );
}

function Pill({ tone, label, value }: { tone: "warning" | "muted" | "info"; label: string; value: string }) {
  const toneClass =
    tone === "warning"
      ? "bg-warning/10 text-warning"
      : tone === "info"
        ? "bg-info/10 text-info"
        : "bg-muted text-foreground";
  return (
    <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
      <div className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">{label}</div>
      <div className={`mt-1 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${toneClass}`}>
        {value}
      </div>
    </div>
  );
}
