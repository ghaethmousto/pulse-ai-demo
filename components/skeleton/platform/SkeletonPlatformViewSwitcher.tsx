import Link from "next/link";
import { skeletonPlatformViews } from "@/components/skeleton/nav-links";

type ViewKey = "source-of-truth" | "consultant" | "contractor" | "owner";

const viewKeyByHref: Record<string, ViewKey> = {
  "/skeleton/platform/source-of-truth": "source-of-truth",
  "/skeleton/platform/consultant": "consultant",
  "/skeleton/platform/contractor": "contractor",
  "/skeleton/platform/owner": "owner",
};

export function SkeletonPlatformViewSwitcher({ active }: { active: ViewKey }) {
  return (
    <div className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3 text-xs">
        <span className="text-neutral-500">⠿ Platform view</span>
        <div className="flex flex-wrap gap-2">
          {skeletonPlatformViews.map((view) => {
            const key = viewKeyByHref[view.href];
            const isActive = key === active;
            return (
              <Link
                key={view.href}
                href={view.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "rounded-md border border-neutral-900 bg-neutral-900 px-3 py-1 text-white"
                    : "rounded-md border border-neutral-300 bg-white px-3 py-1 text-neutral-700 hover:text-neutral-950"
                }
              >
                {view.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export type SkeletonPlatformView = ViewKey;
