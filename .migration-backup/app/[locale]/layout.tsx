import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Raleway, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { getDirection, isLocale, locales } from "@/i18n/routing";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PulseFloatingAI } from "@/components/pulse/floating-ai";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-plex-arabic",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "Pulse AI — Construction Intelligence",
    template: "%s · Pulse AI",
  },
  description:
    "Pulse AI is a unified, AI-powered operating layer for construction projects — risks, approvals, reports, and decisions on one live surface.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = getDirection(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${raleway.variable} ${plexArabic.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-dvh bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            {children}
            <PulseFloatingAI locale={locale} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
