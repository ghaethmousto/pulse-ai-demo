import type { Metadata } from "next";
import { SkeletonAddProjectLayout } from "@/components/skeleton/add-project/SkeletonAddProjectLayout";
import { SkeletonConnectToolsStep } from "@/components/skeleton/add-project/SkeletonConnectToolsStep";

export const metadata: Metadata = {
  title: "Pulse AI — Add Project · Connect Tools (Skeleton)",
  description:
    "Skeleton step 3 of 5: connect tools, communications, and contract pack.",
};

export default function AddProjectConnectToolsSkeletonPage() {
  return (
    <SkeletonAddProjectLayout step="connect-tools">
      <SkeletonConnectToolsStep />
    </SkeletonAddProjectLayout>
  );
}
