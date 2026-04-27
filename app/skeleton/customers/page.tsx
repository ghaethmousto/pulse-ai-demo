import type { Metadata } from "next";
import { SkeletonCustomersPage } from "@/components/skeleton/marketing/SkeletonMarketingPages";

export const metadata: Metadata = {
  title: "Pulse AI - Customers",
  description: "Customer stories and outcomes from Pulse AI projects.",
};

export default function CustomersPage() {
  return <SkeletonCustomersPage />;
}
