"use client";

import { useTranslations } from "next-intl";
import { SkeletonMetricGrid } from "@/components/skeleton/platform/SkeletonMetricCard";

/* Per-metric image overrides for the Consultant view, in array order. */
const CONSULTANT_METRIC_IMAGES = [
  "/assets/cards%20background/consultant/Layer%201.png",
  "/assets/cards%20background/consultant/Layer%202.png",
  "/assets/cards%20background/consultant/Layer%203.png",
  "/assets/cards%20background/consultant/Layer%204.png",
  "/assets/cards%20background/consultant/Layer%205.png",
];

export function SkeletonConsultantView() {
  const t = useTranslations("skeleton.platform.consultantView");
  const metrics = t.raw("metrics") as {
    label: string;
    value: string;
    caption: string;
  }[];
  const rfis = t.raw("rfis") as {
    id: string;
    subject: string;
    discipline: string;
    status: string;
    age: string;
  }[];
  const headers = t.raw("rfiHeaders") as string[];
  const notes = t.raw("notes") as {
    author: string;
    chip: string;
    when: string;
    body: string;
    refs: string[];
  }[];
  const tasks = t.raw("tasks") as {
    title: string;
    meta: string;
    status: "open" | "done";
  }[];

  const metricsWithImages = metrics.map((m, i) => ({
    ...m,
    image: CONSULTANT_METRIC_IMAGES[i],
  }));

  return (
    <>
      <SkeletonMetricGrid metrics={metricsWithImages} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <section className="rounded-md border border-border bg-card lg:col-span-2">
          <header className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold">{t("rfiQueue")}</h2>
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full border border-border px-2 py-0.5 text-foreground/80">
                {t("filters.all")}
              </span>
              <span className="rounded-full border border-foreground bg-foreground px-2 py-0.5 text-background">
                {t("filters.mine")}
              </span>
              <span className="rounded-full border border-border px-2 py-0.5 text-foreground/80">
                {t("filters.overdue")}
              </span>
            </div>
          </header>
          <table className="w-full text-start text-xs">
            <thead className="text-[10px] uppercase tracking-widest text-muted-foreground">
              <tr className="border-b border-border">
                {headers.map((h) => (
                  <th key={h} className="px-5 py-3 text-start">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground/80">
              {rfis.map((r) => (
                <tr key={r.id}>
                  <td className="px-5 py-3 font-mono text-muted-foreground bidi-isolate">{r.id}</td>
                  <td className="px-5 py-3">{r.subject}</td>
                  <td className="px-5 py-3">{r.discipline}</td>
                  <td className="px-5 py-3">
                    <span className="rounded-full border border-border px-2 py-0.5">
                      {r.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 bidi-isolate">{r.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-md border border-border bg-card">
          <header className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold">{t("coordination")}</h2>
          </header>
          <div className="p-5">
            <div className="relative h-44 overflow-hidden rounded border border-border">
              <img
                src="/assets/cards%20background/5.png"
                alt={t("matrixPlaceholder")}
                className="absolute inset-0 h-full w-full object-cover dark:invert dark:hue-rotate-180"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{t("clashes")}</p>
            <div className="relative mt-4 overflow-hidden rounded-md border border-border p-3">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-cover bg-center dark:invert dark:hue-rotate-180"
                style={{
                  backgroundImage:
                    'url("/assets/cards%20background/owner/Layer%202.png")',
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-white/80 dark:bg-black/65"
              />
              <div className="relative">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t("pulseSuggests")}
                </p>
                <p className="mt-1 text-xs text-foreground/80">
                  {t("pulseSuggestion")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <section className="rounded-md border border-border bg-card lg:col-span-2">
          <header className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold">{t("notesTitle")}</h2>
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full border border-foreground bg-foreground px-2 py-0.5 text-background">
                {t("noteFilters.mine")}
              </span>
              <span className="rounded-full border border-border px-2 py-0.5 text-foreground/80">
                {t("noteFilters.team")}
              </span>
              <span className="rounded-full border border-border px-2 py-0.5 text-foreground/80">
                {t("noteFilters.pinned")}
              </span>
            </div>
          </header>
          <ul className="divide-y divide-border">
            {notes.map((n) => (
              <li key={n.author + n.when} className="px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold">{n.author}</span>
                    <span className="rounded-full border border-border px-2 py-0.5 text-xs text-foreground/80">
                      {n.chip}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground bidi-iso">{n.when}</span>
                </div>
                <p className="mt-2 text-sm text-foreground/80">{n.body}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-muted-foreground">
                  {n.refs.map((r) => (
                    <span key={r} className="rounded border border-border px-1.5 py-0.5 bidi-isolate">
                      ↳ {r}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-border px-5 py-3">
            <div className="flex items-center justify-between rounded-md border border-dashed border-border bg-muted px-3 py-2 text-xs text-muted-foreground">
              {t("addNote")}
              <span className="rounded-full border border-foreground bg-foreground px-3 py-1 text-background">
                {t("post")}
              </span>
            </div>
          </div>
        </section>

        <section className="rounded-md border border-border bg-card">
          <header className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold">{t("myTasks")}</h2>
            <span className="text-xs text-muted-foreground">{t("tasksMeta")}</span>
          </header>
          <ul className="divide-y divide-border">
            {tasks.map((tk) => (
              <li key={tk.title} className="flex items-start gap-3 px-5 py-3">
                <span
                  className={
                    tk.status === "done"
                      ? "mt-0.5 h-4 w-4 rounded border border-foreground bg-foreground text-[10px] text-background"
                      : "mt-0.5 h-4 w-4 rounded border border-border"
                  }
                  aria-hidden
                />
                <div>
                  <p
                    className={
                      tk.status === "done"
                        ? "text-sm text-muted-foreground line-through"
                        : "text-sm text-foreground"
                    }
                  >
                    {tk.title}
                  </p>
                  <p className="text-xs text-muted-foreground">↳ {tk.meta}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-muted-foreground">
            <span>{t("addTask")}</span>
            <span>{t("autoLink")}</span>
          </div>
        </section>
      </div>
    </>
  );
}
