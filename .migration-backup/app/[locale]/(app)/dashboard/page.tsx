import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { isLocale } from "@/i18n/routing";
import { getAiSummary, getKpis, getProject, getRisks, getTimeline } from "@/lib/data/al-reem";
import { pickLocale } from "@/lib/utils/pick-locale";
import { ProjectHeader } from "@/components/dashboard/project-header";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { AiSummary } from "@/components/dashboard/ai-summary";
import { RisksList } from "@/components/dashboard/risks-list";
import { TimelinePreview } from "@/components/dashboard/timeline-preview";
import type { Locale } from "@/types/pulse";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "dashboard" });
  const project = getProject();
  const kpis = getKpis();
  const risks = getRisks();
  const timeline = getTimeline();
  const summary = getAiSummary(locale);

  const exposureMillions = (project.costExposureAED / 1_000_000).toLocaleString(
    locale === "ar" ? "ar-AE" : "en-US",
    { maximumFractionDigits: 2 },
  );
  const kpiValues: Record<string, string> = {
    health: t("kpiValues.health"),
    delay: t("kpiValues.delay", { days: project.delayDays }),
    progress: t("kpiValues.progress", {
      actual: project.progressPercent,
      planned: project.plannedProgressPercent,
    }),
    exposure: t("kpiValues.exposure", { amount: exposureMillions }),
  };
  const overallStatusLabel = t("statusValues.atRisk");

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-5 py-8 lg:px-8 lg:py-10">
      <div>
        <div className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
          {t("eyebrow")}
        </div>
        <h1 className="sr-only">{t("title")}</h1>
      </div>

      <ProjectHeader
        project={project}
        locale={locale}
        statusLabel={overallStatusLabel}
      />

      <section>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((k, i) => (
            <KpiCard
              key={k.key}
              index={i}
              label={pickLocale(k.label, locale)}
              value={kpiValues[k.key] ?? k.value}
              note={pickLocale(k.note, locale)}
              trend={k.trend}
            />
          ))}
        </div>
      </section>

      <AiSummary summary={summary} />

      <div className="grid gap-6 lg:grid-cols-2">
        <TimelinePreview stages={timeline} locale={locale} />
        <RisksList risks={risks} locale={locale} />
      </div>
    </div>
  );
}
