import type { Metadata } from "next";
import { SkeletonSolutionsPage } from "@/components/skeleton/marketing/SkeletonMarketingPages";

export const metadata: Metadata = {
  title: "Pulse AI - Solutions",
  description: "Role-based Pulse AI solutions for owners, consultants, and contractors.",
};

export default function SolutionsPage() {
  return <SkeletonSolutionsPage />;
}
