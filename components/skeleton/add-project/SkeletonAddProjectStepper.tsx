"use client";

import { useTranslations } from "next-intl";
import { addProjectSteps, type AddProjectStepKey } from "./steps";

export function SkeletonAddProjectStepper({
  current,
}: {
  current: AddProjectStepKey;
}) {
  const t = useTranslations("skeleton.addProject");
  const total = addProjectSteps.length;
  const currentStep = addProjectSteps.find((s) => s.key === current);
  const currentIndex = currentStep ? currentStep.number : 1;
  const pct = Math.round((currentIndex / total) * 100);
  const label = t("stepOf", { n: currentIndex, total });

  return (
    <div className="flex flex-1 items-center justify-center gap-4">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div
        className="h-1 w-48 overflow-hidden rounded-full bg-muted"
        aria-label={label}
      >
        <div
          className="h-full bg-foreground"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
