import type { Metadata } from "next";
import { ProductLandingExperience } from "@/components/product/ProductLandingExperience";

export const metadata: Metadata = {
  title: "Pulse AI — Product (Skeleton)",
  description:
    "Skeleton preview of the Pulse AI product / landing page. Mirrors the production landing at /en and /ar.",
};

export default function ProductSkeletonPage() {
  return <ProductLandingExperience mode="skeleton" />;
}
