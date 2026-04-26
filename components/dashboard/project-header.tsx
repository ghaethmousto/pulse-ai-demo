"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Building2, CalendarClock, MapPin } from "lucide-react";

import type { Locale, ProjectMeta } from "@/types/pulse";
import { pickLocale } from "@/lib/utils/pick-locale";
import { formatAed, formatDate } from "@/lib/data/al-reem";

export function ProjectHeader({
  project,
  locale,
  statusLabel,
}: {
  project: ProjectMeta;
  locale: Locale;
  statusLabel: string;
}) {
  const t = useTranslations("dashboard.header");

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-lg border border-border bg-card p-5 md:p-6"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {t("eyebrow")}
          </div>
          <h1 className="mt-1.5 text-[28px] font-bold leading-tight tracking-[-0.028em] text-foreground md:text-[32px]">
            {pickLocale(project.name, locale)}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3" strokeWidth={1.6} /> {pickLocale(project.location, locale)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="size-3" strokeWidth={1.6} /> {pickLocale(project.type, locale)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="size-3" strokeWidth={1.6} />
              {t("nextMilestone")} · <bdi>{formatDate(project.nextMilestoneDate, locale)}</bdi>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <Chip tone="warning">{statusLabel}</Chip>
          <Chip tone="muted">{pickLocale(project.currentPhase, locale)}</Chip>
          <Chip tone="info">{formatAed(project.contractValueAED, locale)}</Chip>
        </div>
      </div>
    </motion.section>
  );
}

function Chip({
  tone,
  children,
}: {
  tone: "warning" | "muted" | "info";
  children: React.ReactNode;
}) {
  const toneClass =
    tone === "warning"
      ? "bg-warning/10 text-warning border-warning/20"
      : tone === "info"
        ? "bg-info/10 text-info border-info/20"
        : "bg-muted text-foreground/80 border-border";
  return (
    <span
      className={`inline-flex items-center rounded-[4px] border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] ${toneClass}`}
    >
      <bdi>{children}</bdi>
    </span>
  );
}
