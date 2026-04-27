import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ProductLandingExperience } from "@/components/product/ProductLandingExperience";
import { isLocale } from "@/i18n/routing";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  return <ProductLandingExperience mode="production" />;
}
