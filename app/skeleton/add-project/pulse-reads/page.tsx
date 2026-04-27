import type { Metadata } from "next";
import { SkeletonAddProjectLayout } from "@/components/skeleton/add-project/SkeletonAddProjectLayout";
import { SkeletonPulseReadsStep } from "@/components/skeleton/add-project/SkeletonPulseReadsStep";

export const metadata: Metadata = {
  title: "Pulse AI — Add Project · Pulse Reads (Skeleton)",
  description:
    "Skeleton step 4 of 5: Pulse indexes documents, reconciles tasks, and builds the project graph.",
};

export default function AddProjectPulseReadsSkeletonPage() {
  return (
    <SkeletonAddProjectLayout
      step="pulse-reads"
      title="Pulse is reading your project."
    >
      <SkeletonPulseReadsStep />
    </SkeletonAddProjectLayout>
  );
}
