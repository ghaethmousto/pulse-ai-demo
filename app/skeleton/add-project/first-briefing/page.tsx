import type { Metadata } from "next";
import { SkeletonAddProjectLayout } from "@/components/skeleton/add-project/SkeletonAddProjectLayout";
import { SkeletonFirstBriefingStep } from "@/components/skeleton/add-project/SkeletonFirstBriefingStep";
import { skeletonAuthLinks } from "@/components/skeleton/nav-links";

export const metadata: Metadata = {
  title: "Pulse AI — Add Project · First Briefing (Skeleton)",
  description:
    "Skeleton step 5 of 5: review the first briefing and land on the platform.",
};

export default function AddProjectFirstBriefingSkeletonPage() {
  return (
    <SkeletonAddProjectLayout
      step="first-briefing"
      title="You're ready. Here's your first briefing."
      nextHref={skeletonAuthLinks.seePlatform}
      nextLabel="Finish → Open platform"
    >
      <SkeletonFirstBriefingStep />
    </SkeletonAddProjectLayout>
  );
}
