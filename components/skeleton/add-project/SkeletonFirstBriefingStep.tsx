"use client";

import { useTranslations } from "next-intl";
import { SkeletonStepBody } from "./SkeletonStepBody";

const cadenceOn: boolean[] = [false, true, true, false];

export function SkeletonFirstBriefingStep() {
  const t = useTranslations("skeleton.addProject.firstBriefing");
  const items = t.raw("items") as {
    n: string;
    title: string;
    body: string;
    chips: string[];
    cta: string;
  }[];
  const stats = t.raw("stats") as { value: string; label: string; sub: string }[];
  const facts = t.raw("facts") as { label: string; value: string }[];
  const cadence = t.raw("cadenceItems") as { label: string; desc: string }[];

  const left = (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">{t("intro")}</p>

      <section className="rounded-md border border-border bg-card">
        <header className="flex flex-wrap items-start justify-between gap-3 border-b border-border px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {t("weeklyEyebrow")}
            </p>
            <h2 className="mt-2 text-xl font-semibold">{t("weeklyTitle")}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{t("weeklySub")}</p>
          </div>
          <span className="text-[10px] text-muted-foreground bidi-iso">
            {t("readTime")}
          </span>
        </header>
        <ul className="divide-y divide-border">
          {items.map((item, idx) => (
            <li
              key={item.n}
              className="flex flex-wrap items-start gap-4 px-5 py-4"
            >
              <span className="font-mono text-xs text-muted-foreground bidi-isolate">
                {item.n}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.body}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-muted-foreground">
                  {item.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className={
                  idx === 0
                    ? "rounded-md border border-foreground bg-foreground px-3 py-1.5 text-xs text-background"
                    : "rounded-md border border-foreground bg-card px-3 py-1.5 text-xs text-foreground"
                }
              >
                {item.cta}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-5 py-3 text-xs text-muted-foreground">
          <span>{t("footerNote")}</span>
          <span className="flex items-center gap-2">
            <span className="rounded-full border border-border px-3 py-1">
              ↓ {t("exportLabel")}
            </span>
            <span className="rounded-full border border-border px-3 py-1">
              + {t("adjustLabel")}
            </span>
          </span>
        </div>
      </section>

      <section className="rounded-md border border-border bg-card">
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {t("sinceSetup")}
          </p>
          <span className="text-[10px] text-muted-foreground">{t("elapsed")}</span>
        </header>
        <ul className="grid grid-cols-2 gap-3 p-5 md:grid-cols-4">
          {stats.map((s) => (
            <li
              key={s.value}
              className="rounded-md border border-border bg-muted p-4"
            >
              <p className="text-2xl font-semibold bidi-isolate">{s.value}</p>
              <p className="mt-1 text-xs text-foreground/80">{s.label}</p>
              <p className="text-[10px] text-muted-foreground">{s.sub}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );

  const rail = (
    <>
      <div className="rounded-md border border-border bg-card p-4 lg:mt-[65px]">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {t("yourProject")}
        </p>
        <p className="mt-2 text-base font-semibold bidi-isolate">{t("projectName")}</p>
        <p className="text-xs text-muted-foreground">{t("projectMeta")}</p>
        <ul className="mt-3 divide-y divide-border border-t border-border pt-2 text-xs">
          {facts.map((f) => (
            <li
              key={f.label}
              className="flex items-baseline justify-between py-2"
            >
              <span className="uppercase tracking-widest text-[10px] text-muted-foreground">
                {f.label}
              </span>
              <span className="text-foreground/80">{f.value}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[10px] text-muted-foreground">
          <span className="underline">{t("editSetup")}</span>
        </p>
      </div>

      <div className="rounded-md border border-border bg-card p-4">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {t("cadence")}
        </p>
        <ul className="mt-3 space-y-3">
          {cadence.map((c, i) => (
            <li
              key={c.label}
              className="flex items-start justify-between gap-3"
            >
              <div>
                <p className="text-xs font-semibold">{c.label}</p>
                <p className="text-[10px] text-muted-foreground">{c.desc}</p>
              </div>
              <span
                className={
                  cadenceOn[i]
                    ? "flex h-4 w-7 items-center justify-end rounded-full bg-foreground px-0.5"
                    : "flex h-4 w-7 items-center justify-start rounded-full bg-muted px-0.5"
                }
                aria-hidden
              >
                <span className="h-3 w-3 rounded-full bg-background" />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-md border border-dashed border-border bg-card p-4">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {t("needHand")}
        </p>
        <p className="mt-2 text-xs text-foreground/80">{t("needHandBody")}</p>
        <span className="mt-3 inline-block rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/80">
          {t("bookWalkthrough")}
        </span>
      </div>
    </>
  );

  return <SkeletonStepBody left={left} rail={rail} />;
}
