"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Minimize2, Send, Sparkles, X } from "lucide-react";

import { findAnswer, getDialogues } from "@/lib/data/dialogues";
import { routeKeyFromPath } from "@/lib/utils/route-key";
import type { Locale, PulseQuestion } from "@/types/pulse";
import { cn } from "@/lib/utils";

type Message =
  | { id: string; role: "assistant"; text: string; question?: string }
  | { id: string; role: "user"; text: string };

export function PulseFloatingAI({ locale }: { locale: string }) {
  const pathname = usePathname();
  const tCommon = useTranslations("common");
  const tAssistant = useTranslations("pulseAssistant");

  const loc = (locale === "ar" ? "ar" : "en") as Locale;
  const isAr = loc === "ar";

  const [open, setOpen] = React.useState(false);
  const [draft, setDraft] = React.useState("");
  const [messages, setMessages] = React.useState<Message[]>(() => [
    { id: "greet", role: "assistant", text: tAssistant("greeting") },
  ]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const dialogues = React.useMemo(() => getDialogues(loc), [loc]);
  const routeKey = React.useMemo(
    () => routeKeyFromPath(pathname ?? "/", loc),
    [pathname, loc],
  );

  const suggested = React.useMemo<PulseQuestion[]>(() => {
    const onRoute = dialogues.filter((q) => q.suggestedPage === routeKey);
    return (onRoute.length ? onRoute.concat(dialogues.filter((q) => !onRoute.includes(q))) : dialogues).slice(0, 4);
  }, [dialogues, routeKey]);

  React.useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      inputRef.current?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [open, messages.length]);

  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  function ask(question: PulseQuestion) {
    setMessages((prev) => [
      ...prev,
      { id: `${question.id}-u-${prev.length}`, role: "user", text: question.question },
      { id: `${question.id}-a-${prev.length}`, role: "assistant", text: question.answer, question: question.question },
    ]);
    setDraft("");
  }

  function submitDraft() {
    const text = draft.trim();
    if (!text) return;
    const match = findAnswer(text, loc);
    setMessages((prev) => [
      ...prev,
      { id: `u-${prev.length}-${Date.now()}`, role: "user", text },
      match
        ? { id: `a-${prev.length}-${Date.now()}`, role: "assistant", text: match.answer, question: match.question }
        : { id: `a-${prev.length}-${Date.now()}`, role: "assistant", text: tAssistant("fallback") },
    ]);
    setDraft("");
  }

  return (
    <div
      className="fixed z-50 [inset-block-end:1.25rem] [inset-inline-end:1.25rem]"
      dir={isAr ? "rtl" : "ltr"}
    >
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 w-[min(384px,calc(100vw-2rem))] overflow-hidden rounded-3xl glass-strong shadow-pulse-wine"
            role="dialog"
            aria-modal="false"
            aria-label={tAssistant("label")}
          >
            <div
              className="flex items-center justify-between gap-3 px-5 py-4 text-white"
              style={{
                background:
                  "linear-gradient(140deg, var(--pulse-maroon-deep), var(--pulse-wine) 60%, var(--pulse-wine-glow))",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-10 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur"
                >
                  <Sparkles className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">{tAssistant("name")}</div>
                  <div className="text-xs text-white/75">{tAssistant("liveContext")}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={tAssistant("close")}
                className="grid size-8 place-items-center rounded-full text-white/90 transition hover:bg-white/15"
              >
                <Minimize2 className="size-4" />
              </button>
            </div>

            <div ref={scrollRef} className="max-h-[42vh] space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m) =>
                m.role === "assistant" ? (
                  <div
                    key={m.id}
                    className="rounded-2xl border border-border bg-card p-3 text-sm leading-relaxed text-foreground shadow-pulse-card"
                  >
                    {m.text}
                  </div>
                ) : (
                  <div
                    key={m.id}
                    className="ms-auto max-w-[85%] rounded-2xl bg-wine px-3 py-2 text-sm text-white shadow-pulse-wine"
                  >
                    {m.text}
                  </div>
                ),
              )}
            </div>

            {suggested.length > 0 && (
              <div className="border-t border-border px-4 py-3">
                <div className="mb-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                  {tAssistant("suggested")}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {suggested.map((q) => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => ask(q)}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground/80 transition hover:border-wine-light hover:bg-wine-subtle hover:text-wine"
                    >
                      {q.question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitDraft();
              }}
              className="flex items-center gap-2 border-t border-border bg-card/60 p-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={tAssistant("placeholder")}
                aria-label={tAssistant("placeholder")}
                className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none transition placeholder:text-muted-foreground focus:border-wine-light focus:ring-2 focus:ring-wine-light/30"
              />
              <button
                type="submit"
                aria-label={tCommon("send")}
                className="grid size-9 place-items-center rounded-xl bg-wine text-white shadow-pulse-wine transition hover:bg-wine-light"
              >
                <Send className={cn("size-4", isAr && "-scale-x-100")} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label={open ? tAssistant("close") : tAssistant("open")}
        aria-expanded={open}
        className="group relative grid size-14 place-items-center rounded-2xl text-white shadow-pulse-wine ring-1 ring-white/15"
        style={{
          background:
            "radial-gradient(120% 120% at 30% 20%, var(--pulse-wine-glow), var(--pulse-wine) 55%, var(--pulse-maroon-deep))",
        }}
      >
        <span aria-hidden className="absolute inset-0 -z-10 rounded-2xl bg-wine/40 blur-2xl transition group-hover:bg-wine-glow/50" />
        {open ? <X className="size-6" /> : <Sparkles className="size-6" />}
      </motion.button>
    </div>
  );
}
