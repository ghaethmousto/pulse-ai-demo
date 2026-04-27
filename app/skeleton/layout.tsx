import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Sans_Arabic, Raleway } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { SkeletonI18nBridge } from "@/components/skeleton/SkeletonI18nBridge";
import enMessages from "@/messages/en.json";
import arMessages from "@/messages/ar.json";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pulse AI — Skeleton",
  description: "Pulse AI structural skeleton routes (preview only).",
};

export default function SkeletonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${plexArabic.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider>
          <LocaleProvider>
            <SkeletonI18nBridge enMessages={enMessages} arMessages={arMessages}>
              {children}
            </SkeletonI18nBridge>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
