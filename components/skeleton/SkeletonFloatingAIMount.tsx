"use client";

import { NextIntlClientProvider } from "next-intl";
import { PulseFloatingAI } from "@/components/pulse/floating-ai";
import { useLocale } from "@/components/providers/locale-provider";

type Messages = Record<string, unknown>;

export function SkeletonFloatingAIMount({
  enMessages,
  arMessages,
}: {
  enMessages: Messages;
  arMessages: Messages;
}) {
  const { locale } = useLocale();
  const messages = locale === "ar" ? arMessages : enMessages;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PulseFloatingAI locale={locale} />
    </NextIntlClientProvider>
  );
}
