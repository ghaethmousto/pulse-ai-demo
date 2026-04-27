"use client";

import { useTranslations } from "next-intl";
import { SkeletonStepBody } from "./SkeletonStepBody";

const roleKeys = ["owner", "consultant", "contractor"] as const;

export function SkeletonRoleStep() {
  const t = useTranslations("skeleton.addProject.role");
  const tPreview = useTranslations("skeleton.addProject.role.preview");
  const roleData = roleKeys.map((key, idx) => ({
    key,
    title: t(`roles.${key}.title`),
    quote: t(`roles.${key}.quote`),
    chips: t.raw(`roles.${key}.chips`) as string[],
    selected: idx === 0,
  }));

  const previewKpis = [
    { label: tPreview("kpiOnTrack"), value: "52" },
    { label: tPreview("kpiAtRisk"), value: "18" },
    { label: tPreview("kpiSlipping"), value: "9" },
    { label: tPreview("kpiStalled"), value: "5" },
  ];

  const left = (
    <>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {t("primaryQuestion")}
        </p>
        <ul className="mt-3 space-y-3">
          {roleData.map((r) => (
            <li
              key={r.key}
              className={
                r.selected
                  ? "rounded-md border-2 border-foreground bg-card p-5"
                  : "rounded-md border border-border bg-card p-5"
              }
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-xs">
                  ◯
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-base font-semibold">{r.title}</p>
                    {r.selected ? (
                      <span className="rounded-md border border-foreground bg-foreground px-2 py-0.5 text-[10px] uppercase tracking-widest text-background">
                        {t("selected")}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm italic text-muted-foreground">
                    &laquo;{r.quote}&raquo;
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {r.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-border bg-card px-2 py-0.5 text-xs text-foreground/80"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  className={
                    r.selected
                      ? "mt-1 h-4 w-4 rounded-full border-2 border-foreground bg-foreground"
                      : "mt-1 h-4 w-4 rounded-full border border-border"
                  }
                  aria-hidden
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          {t("or")}
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-4 flex flex-col items-stretch gap-3 rounded-md border border-border bg-card p-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p className="text-sm font-semibold">{t("invitedQ")}</p>
            <p className="text-xs text-muted-foreground">{t("invitedBody")}</p>
          </div>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <span className="rounded-md border border-dashed border-border bg-muted px-3 py-2 text-xs font-mono text-muted-foreground bidi-isolate">
              {t("projectCode")}
            </span>
            <span className="rounded-md border border-border bg-card px-3 py-2 text-xs text-foreground/80">
              {t("join")}
            </span>
          </div>
        </div>

        <div className="mt-3 flex flex-col items-stretch gap-3 rounded-md border border-border bg-card p-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p className="text-sm font-semibold">{t("migratingQ")}</p>
            <p className="text-xs text-muted-foreground">{t("migratingBody")}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Procore", "Aconex", "BIM 360", "Asta Powerproject"].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] text-muted-foreground bidi-isolate"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <span className="shrink-0 rounded-md border border-foreground bg-foreground px-3 py-2 text-xs text-background">
            {t("importProject")}
          </span>
        </div>
      </div>
    </>
  );

  const rail = (
    <>
      <div className="rounded-md border border-border bg-card lg:mt-[28px]">
        <header className="flex items-center justify-between border-b border-border px-4 py-3 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>{t("tunedFor", { role: t("roles.owner.title") })}</span>
          <span>{t("previewDay")}</span>
        </header>
        <div className="border-b border-border px-4 py-2 text-[10px] text-muted-foreground bidi-isolate">
          ●●● {tPreview("url")}
        </div>
        <div className="p-4">
          <p className="text-sm font-semibold">{tPreview("title")}</p>
          <p className="text-xs text-muted-foreground">{tPreview("body")}</p>
          <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>{tPreview("portfolio")}</span>
            <span className="bidi-isolate">{tPreview("valueAed")}</span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {previewKpis.map((k) => (
              <div
                key={k.label}
                className="rounded border border-border p-2"
              >
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {k.label}
                </p>
                <p className="mt-1 text-base font-semibold bidi-isolate">{k.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-32 items-center justify-center rounded border border-dashed border-border bg-muted text-[10px] text-muted-foreground">
            [ {tPreview("evChartLabel")} ]
          </div>
          <p className="mt-3 text-[10px] text-muted-foreground">
            · {tPreview("decisionsLine")}
          </p>
          <p className="mt-3 border-t border-border pt-3 text-[10px] text-muted-foreground">
            {tPreview("footnote")}
          </p>
        </div>
      </div>

      <div className="rounded-md border border-dashed border-border bg-card p-3">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {t("upNext")}
        </p>
        <p className="mt-1 text-xs text-foreground/80">{t("upNextBody")}</p>
      </div>
      <div className="rounded-md border border-dashed border-border bg-card p-3">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {t("privacy")}
        </p>
        <p className="mt-1 text-xs text-foreground/80">{t("privacyBody")}</p>
      </div>
    </>
  );

  return <SkeletonStepBody left={left} rail={rail} />;
}
