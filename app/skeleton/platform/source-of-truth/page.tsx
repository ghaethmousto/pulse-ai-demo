import type { Metadata } from "next";
import { SkeletonPlatformLayout } from "@/components/skeleton/platform/SkeletonPlatformLayout";
import { SkeletonSourceOfTruthView } from "@/components/skeleton/platform/SkeletonSourceOfTruthView";

export const metadata: Metadata = {
  title: "Pulse AI — Platform · Source of truth (Skeleton)",
  description:
    "Skeleton view of the unified project truth dashboard for all roles.",
};

export default function PlatformSourceOfTruthSkeletonPage() {
  return (
    <SkeletonPlatformLayout
      view="source-of-truth"
      roleLabel="All roles · Overview"
      pageTitle="Source of truth — Marina Tower Ph2"
      pageScribble="single reconciled view · same data, all stakeholders"
      userBadge={{ name: "Pulse · live", role: "" }}
    >
      <SkeletonSourceOfTruthView />
    </SkeletonPlatformLayout>
  );
}
