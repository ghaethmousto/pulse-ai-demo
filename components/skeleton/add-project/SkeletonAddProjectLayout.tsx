import type { ReactNode } from "react";
import Image from "next/image";
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
  nextLabel = "Next →",
  skipHref = skeletonAuthLinks.seePlatform,
}: SkeletonAddProjectLayoutProps) {
  const current = getStep(step);
  const prev = getPrevStep(step);
  const next = getNextStep(step);
  const resolvedNextHref =
    nextHref ?? next?.href ?? skeletonAuthLinks.seePlatform;

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <Link href="/skeleton/product" className="flex items-center gap-2">
            <Image
              src="/assets/pulse/Pulse%20-%20Red%20Rec%20Icon.svg"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6"
              aria-hidden
            />
            <span className="text-sm font-semibold">Pulse AI</span>
          </Link>

          <SkeletonAddProjectStepper current={step} />

          <Link
            href={skipHref}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Skip setup
          </Link>
        </div>
      </header>

      <nav
        aria-label="Add project progress"
        className="border-b border-border bg-background"
      >
        <ol className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-3 text-xs sm:px-6">
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
                      ? "rounded-md border border-foreground bg-foreground px-2 py-1 text-background"
                      : isDone
                      ? "rounded-md border border-border bg-card px-2 py-1 text-foreground/80"
                      : "rounded-md border border-dashed border-border bg-card px-2 py-1 text-muted-foreground"
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
        <div className="mx-auto w-full max-w-6xl min-w-0 px-4 py-8 sm:px-6 sm:py-10">
          <div className="rounded-md border border-border bg-card p-6 sm:p-8">
            <header className="border-b border-border pb-6">
              <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
              {intro ? (
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                  {intro}
                </p>
              ) : null}
            </header>

            <div className="py-8">{children}</div>

            <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
              {prev ? (
                <Link
                  href={prev.href}
                  className="rounded-md border border-border bg-card px-4 py-2 text-sm text-foreground/80 hover:text-foreground"
                >
                  ← Back
                </Link>
              ) : (
                <span
                  aria-hidden
                  className="invisible rounded-md border border-border px-4 py-2 text-sm"
                >
                  ← Back
                </span>
              )}
              <Link
                href={resolvedNextHref}
                className="rounded-md bg-wine px-4 py-2 text-sm font-medium text-white hover:bg-wine-light"
              >
                {nextLabel}
              </Link>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
