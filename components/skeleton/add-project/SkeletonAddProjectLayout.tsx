import type { ReactNode } from "react";
import Link from "next/link";
import { skeletonAuthLinks } from "@/components/skeleton/nav-links";
import { SkeletonAddProjectStepper } from "./SkeletonAddProjectStepper";
import {
  addProjectSteps,
  getNextStep,
  getPrevStep,
  getStep,
  type AddProjectStepKey,
} from "./steps";

interface SkeletonAddProjectLayoutProps {
  step: AddProjectStepKey;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  /** Override the default Next link target (defaults to next step). */
  nextHref?: string;
  /** Override the default Next button label. */
  nextLabel?: string;
  skipHref?: string;
}

export function SkeletonAddProjectLayout({
  step,
  title,
  intro,
  children,
  nextHref,
  nextLabel = "Finish →",
  skipHref = skeletonAuthLinks.seePlatform,
}: SkeletonAddProjectLayoutProps) {
  const current = getStep(step);
  const prev = getPrevStep(step);
  const next = getNextStep(step);
  const resolvedNextHref =
    nextHref ?? next?.href ?? skeletonAuthLinks.seePlatform;

  return (
    <div className="flex min-h-screen w-full flex-col bg-neutral-50 text-neutral-900">
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-4 text-xs text-neutral-500">
          <span aria-hidden>⠿</span>
          <span>
            {current.number} · {current.shortLabel}
          </span>
        </div>
      </div>

      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/skeleton/product" className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-sm border border-neutral-300 bg-neutral-100" />
            <span className="text-sm font-semibold">Pulse AI</span>
          </Link>

          <SkeletonAddProjectStepper current={step} />

          <Link
            href={skipHref}
            className="text-xs text-neutral-500 hover:text-neutral-900"
          >
            Skip setup
          </Link>
        </div>
      </header>

      <nav
        aria-label="Add project progress"
        className="border-b border-neutral-200 bg-neutral-50"
      >
        <ol className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-3 text-xs">
          {addProjectSteps.map((s) => {
            const isCurrent = s.key === step;
            const isDone = s.number < current.number;
            return (
              <li key={s.key}>
                <Link
                  href={s.href}
                  aria-current={isCurrent ? "step" : undefined}
                  className={
                    isCurrent
                      ? "rounded-md border border-neutral-900 bg-neutral-900 px-2 py-1 text-white"
                      : isDone
                      ? "rounded-md border border-neutral-300 bg-white px-2 py-1 text-neutral-700"
                      : "rounded-md border border-dashed border-neutral-300 bg-white px-2 py-1 text-neutral-500"
                  }
                >
                  {s.number}. {s.shortLabel}
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="rounded-md border border-neutral-300 bg-white p-8">
            <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
            {intro ? (
              <p className="mt-3 max-w-2xl text-sm text-neutral-600">{intro}</p>
            ) : null}

            <div className="mt-8">{children}</div>

            <div className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-6">
              {prev ? (
                <Link
                  href={prev.href}
                  className="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700"
                >
                  ← Back
                </Link>
              ) : (
                <span aria-hidden />
              )}
              <Link
                href={resolvedNextHref}
                className="rounded-md border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm text-white"
              >
                {nextLabel}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
