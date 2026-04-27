import dialogues from "@/demo-data/pulse-ai-demo-dialogues.json";
import type { Locale, PulseDialogues, PulseQuestion } from "@/types/pulse";

const data = dialogues as unknown as PulseDialogues;

export function getDialogues(locale: Locale): PulseQuestion[] {
  return data[locale] ?? data.en;
}

export function findAnswer(query: string, locale: Locale): PulseQuestion | null {
  const list = getDialogues(locale);
  const normalized = query.trim().toLowerCase();
  if (!normalized) return null;

  const exact = list.find((q) => q.question.toLowerCase() === normalized);
  if (exact) return exact;

  const tokens = normalized.split(/\s+/).filter(Boolean);
  let best: { item: PulseQuestion; score: number } | null = null;
  for (const item of list) {
    const haystack = item.question.toLowerCase();
    const score = tokens.reduce((acc, t) => acc + (haystack.includes(t) ? 1 : 0), 0);
    if (score > 0 && (!best || score > best.score)) {
      best = { item, score };
    }
  }
  return best?.item ?? null;
}
