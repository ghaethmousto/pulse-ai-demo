"use client";

import { useTranslations } from "next-intl";
import { SkeletonStepBody } from "./SkeletonStepBody";

const taskShape = [
  { progress: 100, done: true },
  { progress: 100, done: true },
  { progress: 60, done: false },
  { progress: 10, done: false },
  { progress: 5, done: false },
];

export function SkeletonPulseReadsStep() {
  const t = useTranslations("skeleton.addProject.pulseReads");
  const taskLabels = t.raw("tasks") as string[];
  const learnings = t.raw("learnings") as string[];
  const tasks = taskLabels.map((label, i) => ({ label, ...taskShape[i] }));

  const left = (
    <div>
      <p className="text-sm text-muted-foreground">{t("intro")}</p>

      <ul className="mt-6 space-y-4">
        {tasks.map((tk) => (
          <li
            key={tk.label}
            className="grid grid-cols-[24px_minmax(0,1fr)_minmax(60px,120px)] items-center gap-3"
          >
            <span
              className={
                tk.done
                  ? "flex h-5 w-5 items-center justify-center rounded-full border border-foreground bg-foreground text-[10px] text-background"
                  : "flex h-5 w-5 items-center justify-center rounded-full border border-border"
              }
              aria-hidden
            >
              {tk.done ? "✓" : ""}
            </span>
            <span
              className={
                tk.done
                  ? "text-sm text-foreground"
                  : tk.progress > 0
                  ? "text-sm text-foreground/80"
                  : "text-sm text-muted-foreground"
              }
            >
              {tk.label}
            </span>
            <span
              className="h-1 w-full overflow-hidden rounded-full bg-muted"
              aria-hidden
            >
              <span
                className="block h-full bg-foreground"
                style={{ width: `${tk.progress}%` }}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  const rail = (
    <div className="rounded-md border border-border bg-muted p-5">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {t("alreadyLearning")}
      </p>
      <ul className="mt-3 space-y-3">
        {learnings.map((l) => (
          <li
            key={l}
            className="rounded-md border border-border bg-card px-4 py-3 text-xs text-foreground/80"
          >
            ◆ {l}
          </li>
        ))}
      </ul>
    </div>
  );

  return <SkeletonStepBody left={left} rail={rail} />;
}
