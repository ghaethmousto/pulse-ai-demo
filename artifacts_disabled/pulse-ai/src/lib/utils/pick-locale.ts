import type { Bilingual, Locale } from "@/types/pulse";

export function pickLocale(field: Bilingual, locale: Locale): string {
  return field[locale] ?? field.en;
}
