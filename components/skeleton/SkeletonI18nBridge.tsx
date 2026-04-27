"use client";

import { NextIntlClientProvider } from "next-intl";
import { PulseFloatingAI } from "@/components/pulse/floating-ai";
import { useLocale } from "@/components/providers/locale-provider";

type Messages = Record<string, unknown>;

/**
 * Wraps all skeleton page content with a NextIntlClientProvider whose
 * locale + messages are driven by the existing skeleton LocaleProvider.
 * This lets every skeleton component use `useTranslations` exactly like
 * the production /[locale]/ tree, without needing the next-intl
 * middleware or route segment.
 *
 * Also mounts the approved Phase 1 PulseFloatingAI inside the provider
 * so it picks up the same locale and messages.
 */
export function SkeletonI18nBridge({
  enMessages,
  arMessages,
  children,
}: {
  enMessages: Messages;
  arMessages: Messages;
  children: React.ReactNode;
}) {
  const { locale } = useLocale();
  const messages = locale === "ar" ? arMessages : enMessages;

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      {children}
      <PulseFloatingAI locale={locale} />
    </NextIntlClientProvider>
  );
}
