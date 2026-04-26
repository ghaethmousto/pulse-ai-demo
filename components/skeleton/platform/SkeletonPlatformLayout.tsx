import type { ReactNode } from "react";
import { SkeletonPlatformHeader } from "@/components/skeleton/platform/SkeletonPlatformHeader";
import {
  SkeletonPlatformViewSwitcher,
  type SkeletonPlatformView,
} from "@/components/skeleton/platform/SkeletonPlatformViewSwitcher";

const sidebarItems = [
  "Overview",
  "Documents",
  "Decisions",
  "Tasks",
  "RFIs",
  "Submittals",
  "Risks",
  "Schedule",
  "Intelligence",
  "Team",
];

interface SkeletonPlatformLayoutProps {
  view: SkeletonPlatformView;
  roleLabel: string;
  pageTitle: string;
  pageScribble?: string;
  userBadge?: { name: string; role: string };
  children: ReactNode;
}

export function SkeletonPlatformLayout({
  view,
  roleLabel,
  pageTitle,
  pageScribble,
  userBadge,
  children,
}: SkeletonPlatformLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-neutral-50 text-neutral-900">
      <SkeletonPlatformHeader />
      <SkeletonPlatformViewSwitcher active={view} />

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 lg:grid-cols-[220px_1fr]">
        <aside className="border-r border-neutral-200 bg-white p-5">
          <div className="flex items-center gap-2">
            <span className="h-5 w-5 rounded-sm border border-neutral-400 bg-neutral-100" />
            <span className="text-sm font-semibold">Pulse AI</span>
          </div>

          <div className="mt-6 rounded-md border border-neutral-200 bg-neutral-50 p-3">
            <p className="text-[10px] uppercase tracking-widest text-neutral-500">
              Project
            </p>
            <p className="mt-1 text-sm font-semibold">Marina Tower Ph2</p>
            <p className="text-[10px] text-neutral-500">847M AED · 28 mo</p>
          </div>

          <ul className="mt-6 space-y-1 text-sm text-neutral-600">
            {sidebarItems.map((item, idx) => (
              <li
                key={item}
                className={
                  idx === 0
                    ? "rounded-md border border-neutral-200 bg-neutral-100 px-2 py-1.5 text-neutral-900"
                    : "px-2 py-1.5"
                }
              >
                {item}
              </li>
            ))}
          </ul>

          {userBadge ? (
            <div className="mt-10 flex items-center gap-2 border-t border-neutral-200 pt-4">
              <span className="h-7 w-7 rounded-full border border-neutral-300 bg-neutral-100" />
              <div>
                <p className="text-xs font-medium">{userBadge.name}</p>
                <p className="text-[10px] text-neutral-500">{userBadge.role}</p>
              </div>
            </div>
          ) : null}
        </aside>

        <main className="p-6 lg:p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                {roleLabel}
              </p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
                {pageTitle}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-700">
                ◌ Ask Pulse...
              </span>
              <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-700">
                • Live
              </span>
            </div>
          </div>

          <div
            className="mt-6 h-6 rounded-md border border-dashed border-neutral-300 bg-white"
            aria-hidden
          />
          {pageScribble ? (
            <p className="mt-2 text-right text-[10px] italic text-neutral-500">
              {pageScribble}
            </p>
          ) : null}

          <div className="mt-6 flex flex-col gap-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
