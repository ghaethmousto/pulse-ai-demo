import type { Metadata } from "next";
import { SkeletonResourcesPage } from "@/components/skeleton/marketing/SkeletonMarketingPages";

export const metadata: Metadata = {
  title: "Pulse AI - Resources",
  description: "Pulse AI platform resources and product surfaces.",
};

export default function ResourcesPage() {
  return <SkeletonResourcesPage />;
}
