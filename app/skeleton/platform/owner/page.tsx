import type { Metadata } from "next";
import { SkeletonPlatformLayout } from "@/components/skeleton/platform/SkeletonPlatformLayout";
import { SkeletonOwnerView } from "@/components/skeleton/platform/SkeletonOwnerView";

export const metadata: Metadata = {
  title: "Pulse AI — Platform · Owner (Skeleton)",
  description:
    "Skeleton view of owner-facing project clarity: budget, status, milestones, risks, and decisions.",
};

export default function PlatformOwnerSkeletonPage() {
  return (
    <SkeletonPlatformLayout
      view="owner"
      roleLabel="Owner · Overview"
      pageTitle="Portfolio & decisions"
      pageScribble="Owner = numbers + decisions"
      userBadge={{ name: "S. Al-Mansouri", role: "Owner" }}
    >
      <SkeletonOwnerView />
    </SkeletonPlatformLayout>
  );
}
