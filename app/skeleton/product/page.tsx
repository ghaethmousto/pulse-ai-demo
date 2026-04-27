import type { Metadata } from "next";
import { SkeletonHeader } from "@/components/skeleton/product/SkeletonHeader";
import { SkeletonHero } from "@/components/skeleton/product/SkeletonHero";
import { SkeletonProblem } from "@/components/skeleton/product/SkeletonProblem";
import { SkeletonTrustedLogos } from "@/components/skeleton/product/SkeletonTrustedLogos";
import { SkeletonRolePerspectives } from "@/components/skeleton/product/SkeletonRolePerspectives";
import { SkeletonEconomics } from "@/components/skeleton/product/SkeletonEconomics";
import { SkeletonPlatformPreview } from "@/components/skeleton/product/SkeletonPlatformPreview";
import { SkeletonIntegrations } from "@/components/skeleton/product/SkeletonIntegrations";
import { SkeletonProof } from "@/components/skeleton/product/SkeletonProof";
import { SkeletonFinalCTA } from "@/components/skeleton/product/SkeletonFinalCTA";
import { SkeletonFooter } from "@/components/skeleton/product/SkeletonFooter";

export const metadata: Metadata = {
  title: "Pulse AI — Product (Skeleton)",
  description:
    "Structural skeleton for the Pulse AI product / landing page. Draft route, not the final production landing page.",
};

export default function ProductSkeletonPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <SkeletonHeader />
      <main className="flex-1">
        <SkeletonHero />
        <SkeletonProblem />
        <SkeletonTrustedLogos />
        <SkeletonRolePerspectives />
        <SkeletonEconomics />
        <SkeletonPlatformPreview />
        <SkeletonIntegrations />
        <SkeletonProof />
        <SkeletonFinalCTA />
      </main>
      <SkeletonFooter />
    </div>
  );
}
