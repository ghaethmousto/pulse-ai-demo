import { setRequestLocale } from "next-intl/server";

import { LenisProvider } from "@/components/providers/lenis-provider";
import { isLocale } from "@/i18n/routing";
import { notFound } from "next/navigation";

export default async function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  return <LenisProvider>{children}</LenisProvider>;
}
