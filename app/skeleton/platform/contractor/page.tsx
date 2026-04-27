import type { Metadata } from "next";
import { SkeletonPlatformLayout } from "@/components/skeleton/platform/SkeletonPlatformLayout";
import { SkeletonContractorView } from "@/components/skeleton/platform/SkeletonContractorView";

export const metadata: Metadata = {
  title: "Pulse AI — Platform · Contractor (Skeleton)",
  description:
    "Skeleton view of contractor workflows: today's plan, blockers, daily report, and upcoming works.",
};

export default function PlatformContractorSkeletonPage() {
  return (
    <SkeletonPlatformLayout view="contractor">
      <SkeletonContractorView />
    </SkeletonPlatformLayout>
  );
}
