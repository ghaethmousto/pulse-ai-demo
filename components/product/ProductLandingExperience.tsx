import { SkeletonHeader, type SkeletonHeaderMode } from "@/components/skeleton/product/SkeletonHeader";
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

interface ProductLandingExperienceProps {
  /** "production" routes the header logo + locale toggle to /{locale};
   *  "skeleton" keeps the existing /skeleton/* link tree. */
  mode?: SkeletonHeaderMode;
}

/**
 * Shared product landing experience used by both the production locale
 * landing (`/en`, `/ar`) and the `/skeleton/product` preview route.
 *
 * Owns no `<html>` / `<body>` / locale providers — those stay in the
 * route-level layouts. The skeleton sections inside use `useTranslations`
 * which is satisfied by either the production `NextIntlClientProvider`
 * (mounted in `app/[locale]/layout.tsx`) or the skeleton bridge (mounted
 * in `app/skeleton/layout.tsx` via `SkeletonI18nBridge`).
 */
export function ProductLandingExperience({
  mode = "skeleton",
}: ProductLandingExperienceProps = {}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <SkeletonHeader mode={mode} />
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
