"use client";

import { useTranslations } from "next-intl";
import { SkeletonMetricGrid } from "@/components/skeleton/platform/SkeletonMetricCard";
import { SkeletonRiskPanel } from "@/components/skeleton/platform/SkeletonRiskPanel";

export function SkeletonOwnerView() {
  const t = useTranslations("skeleton.platform.ownerView");
  const metrics = t.raw("metrics") as {
    label: string;
    value: string;
    caption: string;
  }[];
  const decisions = t.raw("decisions") as {
    title: string;
    body: string;
    age: string;
  }[];
  const notes = t.raw("notes") as string[];

  return (
    <>
      <SkeletonMetricGrid metrics={metrics} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <section className="rounded-md border border-border bg-card lg:col-span-2">
          <header className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold">{t("portfolioHealth")}</h2>
            <span className="text-xs text-muted-foreground">{t("lastNDays")}</span>
          </header>
          <div className="p-5">
            <div className="flex h-56 items-center justify-center rounded border border-dashed border-border bg-muted text-xs text-muted-foreground">
              {t("chartPlaceholder")}
            </div>
          </div>
        </section>

        <section className="rounded-md border border-border bg-card">
          <header className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold">{t("decisionsAwaiting")}</h2>
          </header>
          <ul className="divide-y divide-border">
            {decisions.map((d) => (
              <li key={d.title} className="px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold">{d.title}</p>
                  <span className="text-xs text-muted-foreground bidi-isolate">{d.age}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{d.body}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md border border-foreground bg-foreground px-3 py-1 text-background">
                    {t("approve")}
                  </span>
                  <span className="rounded-md border border-border px-3 py-1 text-foreground/80">
                    {t("defer")}
                  </span>
                  <span className="rounded-md border border-border px-3 py-1 text-foreground/80">
                    {t("discuss")}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SkeletonRiskPanel
            title={t("riskRadar")}
            placeholder={t("riskPlaceholder")}
            notes={[t("riskNote")]}
          />
        </div>
        <section className="rounded-md border border-border bg-card">
          <header className="border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold">{t("whatNoticed")}</h2>
          </header>
          <ul className="divide-y divide-border">
            {notes.map((n) => (
              <li key={n} className="px-5 py-3 text-sm text-foreground/80">
                ◆ {n}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
