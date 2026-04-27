import type { Metadata } from "next";
import { SkeletonAddProjectLayout } from "@/components/skeleton/add-project/SkeletonAddProjectLayout";
import { SkeletonProjectInvitesStep } from "@/components/skeleton/add-project/SkeletonProjectInvitesStep";

export const metadata: Metadata = {
  title: "Pulse AI — Add Project · Project & Invites (Skeleton)",
  description:
    "Skeleton step 2 of 5: name the project and invite counterparts.",
};

export default function AddProjectProjectInvitesSkeletonPage() {
  return (
    <SkeletonAddProjectLayout step="project-invites">
      <SkeletonProjectInvitesStep />
    </SkeletonAddProjectLayout>
  );
}
