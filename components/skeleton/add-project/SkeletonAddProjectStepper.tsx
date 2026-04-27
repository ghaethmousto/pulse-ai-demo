import { addProjectSteps, type AddProjectStepKey } from "./steps";

export function SkeletonAddProjectStepper({
  current,
}: {
  current: AddProjectStepKey;
}) {
  const total = addProjectSteps.length;
  const currentStep = addProjectSteps.find((s) => s.key === current);
  const currentIndex = currentStep ? currentStep.number : 1;
  const pct = Math.round((currentIndex / total) * 100);

  return (
    <div className="flex flex-1 items-center justify-center gap-4">
      <span className="text-xs text-neutral-500">
        Step {currentIndex} of {total}
      </span>
      <div
        className="h-1 w-48 overflow-hidden rounded-full bg-neutral-200"
        aria-label={`Step ${currentIndex} of ${total}`}
      >
        <div
          className="h-full bg-neutral-900"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
