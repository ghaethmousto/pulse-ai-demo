"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";

import { PulseMark } from "@/components/brand/pulse-mark";
import { findAnswer, getDialogues } from "@/lib/data/dialogues";
import { routeKeyFromPath } from "@/lib/utils/route-key";
import type { Locale, PulseQuestion } from "@/types/pulse";
import { cn } from "@/lib/utils";

type Briefing = { label: string; text: string };

export function PulseFloatingAI({ locale }: { locale: string }) {
  const pathname = usePathname();
  const tCommon = useTranslations("common");
  const tAssistant = useTranslations("pulseAssistant");
  const tProj = useTranslations("demoProject");

  const loc = (locale === "ar" ? "ar" : "en") as Locale;
  const isAr = loc === "ar";

  const [open, setOpen] = React.useState(false);
  const [draft, setDraft] = React.useState("");
  const [briefing, setBriefing] = React.useState<Briefing>(() => ({
    label: tAssistant("currentSituation"),
    text: tAssistant("greeting"),
  }));
  const inputRef = React.useRef<HTMLInputElement>(null);

  const dialogues = React.useMemo(() => getDialogues(loc), [loc]);
  const routeKey = React.useMemo(
    () => routeKeyFromPath(pathname ?? "/", loc),
    [pathname, loc],
  );
  const suggested = React.useMemo<PulseQuestion[]>(() => {
    const onRoute = dialogues.filter((q) => q.suggestedPage === routeKey);
    const others = dialogues.filter((q) => !onRoute.includes(q));
    return (onRoute.length ? onRoute.concat(others) : dialogues).slice(0, 4);
  }, [dialogues, routeKey]);

  React.useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  function ask(question: PulseQuestion) {
    setBriefing({ label: question.question, text: question.answer });
    setDraft("");
  }

  function submitDraft() {
    const text = draft.trim();
    if (!text) return;
    const match = findAnswer(text, loc);
    setBriefing(
      match
        ? { label: match.question, text: match.answer }
        : { label: text, text: tAssistant("fallback") },
    );
    setDraft("");
  }

  const projectName = tProj("name");

  return (
    <div
      className="fixed z-50 [inset-block-end:1.5rem] [inset-inline-end:1.5rem]"
      dir={isAr ? "rtl" : "ltr"}
    >
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            role="dialog"
            aria-label={tAssistant("label")}
            initial={{ opacity: 0, y: 10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.985 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute end-0 w-[348px] max-w-[calc(100vw-2rem)] [bottom:calc(100%+14px)] origin-bottom rounded-[22px] p-[10px] backdrop-blur-[22px] backdrop-saturate-[1.15]"
            style={{
              background: "var(--pulse-panel-bg)",
              border: "1px solid var(--pulse-panel-border)",
              boxShadow: "var(--pulse-panel-shadow)",
            }}
          >
            <div className="overflow-hidden rounded-[16px]">
              {/* Wine header band */}
              <div
                className="relative flex items-center gap-2.5 overflow-hidden px-4 py-3 text-white"
                style={{
                  background: "linear-gradient(180deg, #9e4259 0%, #7a2b3f 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.24)",
                }}
              >
                <svg
                  aria-hidden
                  viewBox="0 0 320 70"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.55]"
                >
                  <path
                    d="M0 35 L80 35 L96 20 L108 50 L124 10 L140 60 L156 20 L170 42 L184 30 L320 30"
                    fill="none"
                    stroke="white"
                    strokeOpacity={0.18}
                    strokeWidth={1.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span
                  aria-hidden
                  className="pulse-mark-breath relative grid size-9 shrink-0 place-items-center rounded-[10px]"
                  style={{
                    background: "rgba(255,255,255,0.16)",
                    border: "1px solid rgba(255,255,255,0.30)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.18)",
                  }}
                >
                  <span
                    aria-hidden
                    className="pulse-mark-glow pointer-events-none absolute -inset-1 rounded-[14px]"
                    style={{ boxShadow: "0 0 26px 2px rgba(255,230,236,0.30)" }}
                  />
                  <PulseMark width={20} height={16} stroke="#ffffff" />
                </span>

                <div className="relative z-[1] min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-[13px] font-semibold tracking-[-0.005em] text-white">
                    {tAssistant("name")}
                    <span
                      aria-hidden
                      className="pulse-live-dot inline-block size-1.5 shrink-0 rounded-full bg-[#7ee0a8]"
                      style={{ boxShadow: "0 0 8px #7ee0a8" }}
                    />
                  </div>
                  <div className="mt-0.5 truncate text-[10px] tracking-[0.03em] text-[rgba(255,232,238,0.82)]">
                    {projectName} · {tAssistant("liveContext")}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={tAssistant("close")}
                  className="relative z-[1] grid size-6 shrink-0 place-items-center rounded-[7px] text-[rgba(255,232,238,0.82)] transition hover:bg-white/[0.14] hover:text-white"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M3 7h8"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Briefing card */}
              <div
                className="relative mx-2.5 mb-2 mt-2.5 overflow-hidden rounded-[13px] px-4 py-3.5"
                style={{
                  background: "var(--pulse-briefing-bg)",
                  boxShadow:
                    "inset 0 0 0 1px var(--pulse-briefing-ring), 0 1px 2px rgba(32,29,26,0.04)",
                }}
              >
                <svg
                  aria-hidden
                  viewBox="0 0 320 70"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.16]"
                >
                  <path
                    d="M0 35 L80 35 L96 20 L108 50 L124 10 L140 60 L156 20 L170 42 L184 30 L320 30"
                    fill="none"
                    stroke="var(--pulse-briefing-stroke)"
                    strokeWidth={1.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  className="relative z-[1] flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.26em]"
                  style={{ color: "var(--pulse-briefing-label)" }}
                >
                  <span
                    aria-hidden
                    className="pulse-live-dot inline-block size-1 rounded-full bg-current opacity-70"
                  />
                  <span className="truncate">{briefing.label}</span>
                </div>
                <p
                  className="relative z-[1] mt-1.5 text-[12px] leading-[1.6]"
                  style={{ color: "var(--pulse-action-text)" }}
                >
                  {briefing.text}
                </p>
              </div>

              {/* Suggested actions */}
              {suggested.length > 0 && (
                <div className="mt-1">
                  <div
                    className="flex items-center justify-between px-4 pb-1 pt-3 text-[9px] font-semibold uppercase tracking-[0.24em]"
                    style={{ color: "var(--pulse-action-meta)" }}
                  >
                    <span>{tAssistant("suggested")}</span>
                    <span
                      className="text-[9px] tracking-[0.06em]"
                      style={{ color: "var(--pulse-briefing-label)" }}
                    >
                      {suggested.length}
                    </span>
                  </div>
                  <ul className="mb-1">
                    {suggested.map((q) => (
                      <li key={q.id}>
                        <button
                          type="button"
                          onClick={() => ask(q)}
                          className="group mx-2.5 my-0.5 flex w-[calc(100%-1.25rem)] items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-start transition"
                          style={{
                            color: "var(--pulse-action-text)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              "var(--pulse-action-hover-bg)";
                            (e.currentTarget as HTMLElement).style.boxShadow =
                              "inset 0 0 0 1px var(--pulse-action-hover-ring), 0 4px 12px -3px rgba(32,29,26,0.10)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "";
                            (e.currentTarget as HTMLElement).style.boxShadow = "";
                          }}
                        >
                          <ActionTypeIcon page={q.suggestedPage} />
                          <span
                            className="min-w-0 flex-1 truncate text-[11.5px] font-semibold tracking-[-0.003em]"
                            style={{ color: "var(--pulse-action-text)" }}
                          >
                            {q.question}
                          </span>
                          <span
                            className="shrink-0 text-[13px] transition"
                            style={{ color: "var(--pulse-action-arrow)" }}
                          >
                            {isAr ? "‹" : "›"}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Input dock */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitDraft();
                }}
                className="mx-2.5 my-2.5 flex items-center gap-2 rounded-[13px] p-2"
                style={{
                  background: "var(--pulse-input-bg)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.10)",
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={tAssistant("placeholder")}
                  aria-label={tAssistant("placeholder")}
                  className="h-[38px] min-w-0 flex-1 rounded-[9px] px-3.5 text-[12px] outline-none transition focus:shadow-[0_0_0_3px_rgba(141,53,75,0.16)]"
                  style={{
                    background: "var(--pulse-input-field-bg)",
                    border: "1px solid var(--pulse-input-field-border)",
                    color: "var(--pulse-action-text)",
                  }}
                />
                <button
                  type="button"
                  aria-label={tAssistant("voice")}
                  title={tAssistant("voice")}
                  className="grid size-[38px] shrink-0 place-items-center rounded-[9px] transition hover:scale-105"
                  style={{
                    background: "var(--pulse-input-field-bg)",
                    border: "1px solid var(--pulse-input-field-border)",
                    color: "var(--pulse-action-meta)",
                  }}
                >
                  <MicIcon />
                </button>
                <button
                  type="submit"
                  aria-label={tCommon("send")}
                  disabled={draft.trim().length === 0}
                  className={cn(
                    "grid size-[38px] shrink-0 place-items-center rounded-[9px] text-white transition disabled:opacity-40 hover:translate-y-[-1px] active:translate-y-0",
                  )}
                  style={{
                    background: "linear-gradient(180deg, #9e4259 0%, #7a2b3f 100%)",
                    boxShadow:
                      "0 4px 14px rgba(141,53,75,0.36), 0 0 0 1px rgba(141,53,75,0.25), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.18)",
                  }}
                >
                  <SendIcon flip={isAr} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher — official Pulse - Red Circle Icon as the entire visual.
          The asset already provides the wine disc and the white pulse glyph;
          we add only a soft breathing halo behind it for "floating + alive". */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label={open ? tAssistant("close") : tAssistant("open")}
        aria-expanded={open}
        className="relative grid size-[60px] place-items-center rounded-full"
        style={{
          // No background here — the SVG asset is the disc.
          filter:
            "drop-shadow(0 10px 24px rgba(141,53,75,0.45)) drop-shadow(0 0 1px rgba(141,53,75,0.30))",
        }}
      >
        {/* Soft breathing halo behind the disc — keeps the "alive" feel
            without altering the icon itself. */}
        <span
          aria-hidden
          className="pulse-mark-glow pointer-events-none absolute -inset-2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(207,89,118,0.36) 0%, transparent 70%)",
          }}
        />
        {/* Brighter halo in dark mode for separation from the charcoal stage. */}
        <span
          aria-hidden
          className="pulse-mark-glow pointer-events-none absolute -inset-2 hidden rounded-full dark:block"
          style={{
            background:
              "radial-gradient(circle at center, rgba(207,89,118,0.55) 0%, transparent 70%)",
          }}
        />
        {/* The official Pulse mark asset. */}
        <Image
          src="/assets/pulse/Pulse - Red Circle Icon.svg"
          alt=""
          width={60}
          height={60}
          priority
          className="relative z-[1] block size-[60px]"
        />
      </motion.button>
    </div>
  );
}

function ActionTypeIcon({ page }: { page?: string }) {
  const tone =
    page === "approvals"
      ? "approve"
      : page === "tasks" || page === "pulse"
        ? "delay"
        : page === "reports"
          ? "doc"
          : "risk";

  const tones: Record<string, { bg: string; ring: string; stroke: string; path: React.ReactNode }> = {
    approve: {
      bg: "linear-gradient(180deg, rgba(184,113,42,0.18), rgba(184,113,42,0.08))",
      ring: "rgba(184,113,42,0.28)",
      stroke: "#b8712a",
      path: <path d="M2.5 6l2.5 2.5L10 3" />,
    },
    risk: {
      bg: "linear-gradient(180deg, rgba(163,66,85,0.18), rgba(163,66,85,0.08))",
      ring: "rgba(163,66,85,0.28)",
      stroke: "#a34255",
      path: (
        <>
          <circle cx={6} cy={6} r={4.8} />
          <path d="M6 3.5v3M6 8.4v.5" />
        </>
      ),
    },
    doc: {
      bg: "linear-gradient(180deg, rgba(62,99,158,0.16), rgba(62,99,158,0.06))",
      ring: "rgba(62,99,158,0.24)",
      stroke: "#3e639e",
      path: (
        <>
          <rect x={2.5} y={1.8} width={7} height={8.4} rx={1} />
          <path d="M4.5 5h3M4.5 7h2" />
        </>
      ),
    },
    delay: {
      bg: "linear-gradient(180deg, rgba(141,53,75,0.18), rgba(141,53,75,0.08))",
      ring: "rgba(141,53,75,0.30)",
      stroke: "#8d354b",
      path: (
        <>
          <circle cx={6} cy={6} r={4.8} />
          <path d="M6 3.4v2.8l1.6 1.6" />
        </>
      ),
    },
  };

  const t = tones[tone];
  return (
    <span
      aria-hidden
      className="grid size-[26px] shrink-0 place-items-center rounded-[7px]"
      style={{ background: t.bg, boxShadow: `inset 0 0 0 1px ${t.ring}` }}
    >
      <svg
        width="11"
        height="11"
        viewBox="0 0 12 12"
        fill="none"
        stroke={t.stroke}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {t.path}
      </svg>
    </span>
  );
}

function SendIcon({ flip }: { flip: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M3 10 L17 3 L13 17 L10.5 11.5 L3 10 Z"
        fill="white"
        stroke="white"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <path d="M10.5 11.5 L17 3" stroke="rgba(0,0,0,0.18)" strokeWidth={1} strokeLinecap="round" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x={5} y={1.6} width={4} height={7.4} rx={2} />
      <path d="M2.6 7a4.4 4.4 0 0 0 8.8 0" />
      <path d="M7 11.4v1.4" />
      <path d="M5 12.8h4" />
    </svg>
  );
}
