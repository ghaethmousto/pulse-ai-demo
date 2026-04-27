"use client";

import { useTranslations } from "next-intl";
import { SkeletonMetricGrid } from "@/components/skeleton/platform/SkeletonMetricCard";

/* Per-metric image overrides for the Contractor view, in array order. */
const CONTRACTOR_METRIC_IMAGES = [
  "/assets/cards%20background/contractor/Layer%2010.png",
  "/assets/cards%20background/contractor/Layer%209.png",
  "/assets/cards%20background/contractor/Layer%208.png",
  "/assets/cards%20background/contractor/Layer%207.png",
  "/assets/cards%20background/contractor/Layer%206.png",
];

const todayProgress = [70, 30, 45, 100];
const todayStatusKeys = ["inProgress", "ready", "blocked", "done"] as const;
const upcomingFlags = [
  { days: [1, 1, 0, 0, 0, 0, 0] },
  { days: [1, 1, 1, 0, 0, 0, 0], risk: true },
  { days: [0, 0, 1, 1, 1, 0, 0] },
  { days: [0, 0, 0, 0, 1, 0, 0] },
  { days: [0, 0, 0, 0, 0, 1, 1] },
  { days: [0, 0, 0, 0, 0, 0, 1] },
  { days: [0, 0, 1, 0, 0, 0, 0], milestone: true },
];

function statusPill(label: string, isBlocked: boolean) {
  return (
    <span
      className={
        isBlocked
          ? "rounded-full border border-foreground bg-foreground px-2 py-0.5 text-xs text-background"
          : "rounded-full border border-border px-2 py-0.5 text-xs text-foreground/80"
      }
    >
      {label}
    </span>
  );
}

export function SkeletonContractorView() {
  const t = useTranslations("skeleton.platform.contractorView");
  const metrics = t.raw("metrics") as {
    label: string;
    value: string;
    caption: string;
  }[];
  const today = t.raw("today") as {
    title: string;
    crew: string;
    status: string;
  }[];
  const blockers = t.raw("blockers") as {
    title: string;
    body: string;
    cta: string;
  }[];
  const days = t.raw("days") as { d: string; n: string }[];
  const upcomingNames = t.raw("upcoming") as { name: string; crew: string }[];

  const metricsWithImages = metrics.map((m, i) => ({
    ...m,
    image: CONTRACTOR_METRIC_IMAGES[i],
  }));

  return (
    <>
      <SkeletonMetricGrid metrics={metricsWithImages} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <section className="rounded-md border border-border bg-card lg:col-span-2">
          <header className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold">{t("todayTitle")}</h2>
          </header>
          <ul className="divide-y divide-border">
            {today.map((row, i) => {
              const isBlocked = todayStatusKeys[i] === "blocked";
              return (
                <li key={row.title} className="px-5 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium">{row.title}</p>
                      <p className="text-xs text-muted-foreground bidi-iso">{row.crew}</p>
                    </div>
                    {statusPill(row.status, isBlocked)}
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={isBlocked ? "h-full bg-foreground" : "h-full bg-foreground/70"}
                      style={{ width: `${todayProgress[i]}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="rounded-md border border-border bg-card">
          <header className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold">{t("blockersTitle")}</h2>
          </header>
          <ul className="divide-y divide-border">
            {blockers.map((b) => (
              <li key={b.title} className="px-5 py-4">
                <p className="text-sm font-semibold">⚠ {b.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{b.body}</p>
                <span className="mt-3 inline-block rounded-md border border-foreground bg-foreground px-3 py-1 text-xs text-background">
                  {b.cta}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t border-border px-5 py-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {t("dailyReport")}
            </p>
            <span className="mt-3 inline-block rounded-md border border-border bg-muted px-3 py-2 text-xs text-foreground/80">
              ◉ {t("addPhotos")}
            </span>
          </div>
        </section>
      </div>

      <section className="relative overflow-hidden rounded-md border border-border bg-card">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center dark:invert dark:hue-rotate-180"
          style={{
            backgroundImage:
              'url("/assets/cards%20background/4.png")',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-white/80 dark:bg-black/70"
        />
        <header className="relative flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <h2 className="text-base font-semibold">{t("upcomingTitle")}</h2>
            <p className="text-xs text-muted-foreground">{t("upcomingMeta")}</p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full border border-foreground bg-foreground px-2 py-0.5 text-background">
              {t("ranges.week")}
            </span>
            <span className="rounded-full border border-border px-2 py-0.5 text-foreground/80">
              {t("ranges.twoWeeks")}
            </span>
            <span className="rounded-full border border-border px-2 py-0.5 text-foreground/80">
              {t("ranges.month")}
            </span>
          </div>
        </header>
        <div className="relative overflow-x-auto">
          <table className="w-full text-start text-xs">
            <thead className="text-[10px] uppercase tracking-widest text-muted-foreground">
              <tr className="border-b border-border">
                <th className="px-5 py-3 text-start">{t("activity")}</th>
                {days.map((d) => (
                  <th key={d.n} className="px-2 py-3 text-center">
                    {d.d}
                    <br />
                    <span className="bidi-isolate">{d.n}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {upcomingNames.map((row, idx) => {
                const flags = upcomingFlags[idx];
                return (
                  <tr key={row.name}>
                    <td className="px-5 py-3 align-top">
                      <p
                        className={
                          flags.risk
                            ? "text-sm font-medium text-foreground"
                            : "text-sm font-medium"
                        }
                      >
                        {row.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground bidi-iso">{row.crew}</p>
                    </td>
                    {flags.days.map((on, i) => (
                      <td key={i} className="px-2 py-3">
                        {on ? (
                          <div
                            className={
                              flags.milestone
                                ? "mx-auto h-3 w-3 rotate-45 border border-foreground bg-background"
                                : flags.risk
                                ? "h-3 w-full rounded border border-muted-foreground/40 bg-muted"
                                : "h-3 w-full rounded bg-foreground/80"
                            }
                            aria-hidden
                          />
                        ) : (
                          <div className="h-3" aria-hidden />
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="relative flex flex-wrap gap-4 border-t border-border px-5 py-3 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>■ {t("legendPlanned")}</span>
          <span>□ {t("legendBlocked")}</span>
          <span>◆ {t("legendMilestone")}</span>
        </div>
      </section>
    </>
  );
}
