"use client";

import { useTranslations } from "next-intl";
import { SkeletonMetricGrid } from "@/components/skeleton/platform/SkeletonMetricCard";
import {
  SkeletonActivityPanel,
  type SkeletonActivityItem,
} from "@/components/skeleton/platform/SkeletonActivityPanel";
import { SkeletonDocumentPanel } from "@/components/skeleton/platform/SkeletonDocumentPanel";

export function SkeletonSourceOfTruthView() {
  const t = useTranslations("skeleton.platform.sourceOfTruthView");
  const metrics = t.raw("metrics") as {
    label: string;
    value: string;
    caption: string;
  }[];
  const items = t.raw("items") as SkeletonActivityItem[];
  const lenses = t.raw("lenses") as { label: string; body: string }[];
  const tableHeaders = t.raw("tableHeaders") as string[];
  const decisions = t.raw("decisions") as {
    id: string;
    decision: string;
    owner: string;
    date: string;
  }[];
  const docLegend = t.raw("documentLegend") as { label: string; count: string }[];

  return (
    <>
      <SkeletonMetricGrid metrics={metrics} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SkeletonActivityPanel
            title={t("livingTimeline")}
            toolbar={
              <>
                <span className="rounded-md border border-foreground bg-foreground px-2 py-1 text-background">
                  {t("toolbar.schedule")}
                </span>
                <span className="rounded-md border border-border px-2 py-1 text-foreground/80">
                  {t("toolbar.decisions")}
                </span>
                <span className="rounded-md border border-border px-2 py-1 text-foreground/80">
                  {t("toolbar.risks")}
                </span>
                <span className="rounded-md border border-border px-2 py-1 text-foreground/80">
                  {t("toolbar.docs")}
                </span>
              </>
            }
            items={items}
            footnote={t("footnote")}
          />
        </div>
        <div className="flex flex-col gap-4">
          <section className="rounded-md border border-border bg-card">
            <header className="border-b border-border px-5 py-4">
              <h2 className="text-base font-semibold">{t("sameTruth")}</h2>
            </header>
            <ul className="divide-y divide-border">
              {lenses.map((l) => (
                <li key={l.label} className="px-5 py-4">
                  <p className="text-sm font-semibold">◯ {l.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{l.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SkeletonDocumentPanel
          title={t("documentGraph")}
          caption={t("documentCaption")}
          legend={docLegend}
        />
        <section className="rounded-md border border-border bg-card">
          <header className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold">{t("decisionLedger")}</h2>
            <span className="rounded-md border border-border px-2 py-1 text-xs text-foreground/80">
              {t("auditReady")}
            </span>
          </header>
          <table className="w-full text-start text-xs">
            <thead className="text-[10px] uppercase tracking-widest text-muted-foreground">
              <tr className="border-b border-border">
                {tableHeaders.map((h) => (
                  <th key={h} className="px-5 py-3 text-start">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground/80">
              {decisions.map((row) => (
                <tr key={row.id}>
                  <td className="px-5 py-3 font-mono text-muted-foreground bidi-isolate">
                    {row.id}
                  </td>
                  <td className="px-5 py-3">{row.decision}</td>
                  <td className="px-5 py-3">{row.owner}</td>
                  <td className="px-5 py-3">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
