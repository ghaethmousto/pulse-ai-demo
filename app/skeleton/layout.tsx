import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { PulseLine } from "@/components/ui/PulseLine";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pulse AI — Skeleton",
  description: "Pulse AI structural skeleton routes (preview only).",
};

/**
 * Layout for /skeleton/* routes only.
 *
 * Renders the html/body shell, fonts, and the skeleton-specific
 * Theme/Locale providers + PulseLine watermark. This is isolated to the
 * /skeleton subtree so it does not affect production /[locale]/* routes,
 * which have their own root layout in app/[locale]/layout.tsx.
 */
export default function SkeletonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LocaleProvider>
            <PulseLine />
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
