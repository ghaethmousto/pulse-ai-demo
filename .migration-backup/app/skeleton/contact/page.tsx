import type { Metadata } from "next";
import { SkeletonContactPage } from "@/components/skeleton/marketing/SkeletonMarketingPages";

export const metadata: Metadata = {
  title: "Pulse AI - Request Demo",
  description: "Request a Pulse AI walkthrough.",
};

export default function ContactPage() {
  return <SkeletonContactPage />;
}
