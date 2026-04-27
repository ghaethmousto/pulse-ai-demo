import { setRequestLocale } from "next-intl/server";

import { LandingNav } from "@/components/marketing/landing-nav";
import { Hero } from "@/components/marketing/hero";
import { ProblemSolution } from "@/components/marketing/problem-solution";
import { Modules } from "@/components/marketing/modules";
import { LandingFooter } from "@/components/marketing/footer";
import { isLocale } from "@/i18n/routing";
import { notFound } from "next/navigation";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  return (
    <div className="flex min-h-dvh flex-col">
      <LandingNav />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Modules />
      </main>
      <LandingFooter />
    </div>
  );
}
