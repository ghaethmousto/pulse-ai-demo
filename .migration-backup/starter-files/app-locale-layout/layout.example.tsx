import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getDirection, locales } from "@/i18n/routing";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as any)) notFound();

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={getDirection(locale)} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
