import type { ReactNode } from "react";

interface SkeletonStepBodyProps {
  left: ReactNode;
  rail: ReactNode;
}

/**
 * Shared two-column layout for every Add Project step.
 * - Left column flexes and uses minmax(0,1fr) so wide content cannot
 *   force horizontal scroll on tablet widths.
 * - Right rail is a fixed 360px column on lg+, stacking below on smaller
 *   widths.
 * - items-start prevents either column from stretching to match the other.
 */
export function SkeletonStepBody({ left, rail }: SkeletonStepBodyProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div className="min-w-0 space-y-6">{left}</div>
      <aside className="flex flex-col gap-4">{rail}</aside>
    </div>
  );
}
