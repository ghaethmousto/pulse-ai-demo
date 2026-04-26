import type { Metadata } from "next";
import { SkeletonAddProjectLayout } from "@/components/skeleton/add-project/SkeletonAddProjectLayout";
import { SkeletonRoleStep } from "@/components/skeleton/add-project/SkeletonRoleStep";

export const metadata: Metadata = {
  title: "Pulse AI — Add Project · Role (Skeleton)",
  description: "Skeleton step 1 of 5: pick the primary role for the project.",
};

export default function AddProjectRoleSkeletonPage() {
  return (
    <SkeletonAddProjectLayout
      step="role"
      title="Welcome. Let's connect your project."
    >
      <SkeletonRoleStep />
    </SkeletonAddProjectLayout>
  );
}
