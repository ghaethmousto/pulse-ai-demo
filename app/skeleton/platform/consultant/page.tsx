import type { Metadata } from "next";
import { SkeletonPlatformLayout } from "@/components/skeleton/platform/SkeletonPlatformLayout";
import { SkeletonConsultantView } from "@/components/skeleton/platform/SkeletonConsultantView";

export const metadata: Metadata = {
  title: "Pulse AI — Platform · Consultant (Skeleton)",
  description:
    "Skeleton view of consultant workflows: RFIs, submittals, multi-discipline coordination, and reports.",
};

export default function PlatformConsultantSkeletonPage() {
  return (
    <SkeletonPlatformLayout view="consultant">
      <SkeletonConsultantView />
    </SkeletonPlatformLayout>
  );
}
