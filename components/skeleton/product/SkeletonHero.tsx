import Link from "next/link";
import { skeletonAuthLinks } from "@/components/skeleton/nav-links";

export function SkeletonHero() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600">
            • Built for construction teams
          </span>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-6xl">
            One project.
            <br />
            Three stakeholders.
            <br />
            <span className="text-neutral-700">One trusted truth.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-neutral-600">
            Pulse AI connects Owners, Consultants, and Contractors around a single
            source of project truth — documents, decisions, tasks, risks, and AI
            insights in one operational layer.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={skeletonAuthLinks.requestDemo}
              className="rounded-md border border-neutral-900 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white"
            >
              Request Demo →
            </Link>
            <Link
              href={skeletonAuthLinks.seePlatform}
              className="rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900"
            >
              See Platform
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-500">
            <span>◆ SOC 2</span>
            <span>◆ ISO 27001</span>
            <span>◆ Built for Gulf megaprojects</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="aspect-square w-full max-w-md rounded-full border border-dashed border-neutral-300">
            <div className="relative h-full w-full">
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-400 bg-neutral-100 text-xs text-neutral-600">
                Pulse AI
              </div>
              <div className="absolute left-[15%] top-[30%] flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-[10px] text-neutral-500">
                Owner
              </div>
              <div className="absolute right-[15%] top-[40%] flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-[10px] text-neutral-500">
                Consult.
              </div>
              <div className="absolute bottom-[15%] left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white text-[10px] text-neutral-500">
                Contract.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
