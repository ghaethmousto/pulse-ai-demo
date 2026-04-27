"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

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
  // `briefingOverride` is set only when the user picks a question or sends
  // a draft. While it's null, the rendered briefing falls back to the
  // active-locale greeting — this keeps the default copy in sync with the
  // language toggle without an effect.
  const [briefingOverride, setBriefingOverride] = React.useState<Briefing | null>(null);
  const briefing: Briefing = briefingOverride ?? {
    label: tAssistant("currentSituation"),
    text: tAssistant("greeting"),
  };
  const inputRef = React.useRef<HTMLInputElement>(null);

  const dialogues = React.useMemo(() => getDialogues(loc), [loc]);
  const routeKey = React.useMemo(
    () => routeKeyFromPath(pathname ?? "/", loc),
    [pathname, loc],
  );
  const suggested = React.useMemo<PulseQuestion[]>(() => {
    const onRoute = dialogues.filter((q) => q.suggestedPage === routeKey);
    const others = dialogues.filter((q) => !onRoute.includes(q));
    return (onRoute.length ? onRoute.concat(others) : dialogues).slice(0, 3);
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
    setBriefingOverride({ label: question.question, text: question.answer });
    setDraft("");
  }

  function submitDraft() {
    const text = draft.trim();
    if (!text) return;
    const match = findAnswer(text, loc);
    setBriefingOverride(
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
      {open && (
          <div
            key="panel"
            role="dialog"
            aria-label={tAssistant("label")}
            className="absolute end-0 w-[296px] max-w-[calc(100vw-2rem)] [bottom:calc(100%+12px)] origin-bottom rounded-[20px] p-[8px] backdrop-blur-[22px] backdrop-saturate-[1.15]"
            style={{
              background: "var(--pulse-panel-bg)",
              border: "1px solid var(--pulse-panel-border)",
              boxShadow: "var(--pulse-panel-shadow)",
            }}
          >
            <div className="overflow-hidden rounded-[14px]">
              {/* Wine header band */}
              <div
                className="relative flex items-center gap-2 overflow-hidden px-3 py-2.5 text-white"
                style={{
                  background: "linear-gradient(180deg, #9e4259 0%, #7a2b3f 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.24)",
                }}
              >
                {/* Official Pulse mark asset — same identity as the launcher */}
                <span
                  aria-hidden
                  className="relative grid size-8 shrink-0 place-items-center rounded-full"
                  style={{
                    filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.24))",
                  }}
                >
                  <Image
                    src="/assets/pulse/Pulse - Red Circle Icon.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="block size-8 brightness-0 invert"
                    priority
                  />
                </span>

                <div className="relative z-[1] min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[12px] font-semibold tracking-[-0.005em] text-white">
                    {tAssistant("name")}
                    <span
                      aria-hidden
                      className="pulse-live-dot inline-block size-1.5 shrink-0 rounded-full bg-[#7ee0a8]"
                      style={{ boxShadow: "0 0 8px #7ee0a8" }}
                    />
                  </div>
                  <div className="truncate text-[9.5px] tracking-[0.02em] text-[rgba(255,232,238,0.82)]">
                    {projectName} · {tAssistant("liveContext")}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={tAssistant("close")}
                  className="relative z-[1] grid size-5 shrink-0 place-items-center rounded-[6px] text-[rgba(255,232,238,0.82)] transition hover:bg-white/[0.14] hover:text-white"
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
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
                className="relative mx-2 mb-1.5 mt-2 overflow-hidden rounded-[11px] px-3 py-2.5"
                style={{
                  background: "var(--pulse-briefing-bg)",
                  boxShadow:
                    "inset 0 0 0 1px var(--pulse-briefing-ring), 0 1px 2px rgba(32,29,26,0.04)",
                }}
              >
                <div
                  className="relative z-[1] flex items-center gap-1.5 text-[8.5px] font-semibold uppercase tracking-[0.24em]"
                  style={{ color: "var(--pulse-briefing-label)" }}
                >
                  <span
                    aria-hidden
                    className="pulse-live-dot inline-block size-1 rounded-full bg-current opacity-70"
                  />
                  <span className="truncate">{briefing.label}</span>
                </div>
                <p
                  className="relative z-[1] mt-1 line-clamp-3 text-[11.5px] leading-[1.55]"
                  style={{ color: "var(--pulse-action-text)" }}
                >
                  {briefing.text}
                </p>
              </div>

              {/* Suggested actions */}
              {suggested.length > 0 && (
                <div className="mt-0.5">
                  <div
                    className="flex items-center justify-between px-3 pb-0.5 pt-2 text-[8.5px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: "var(--pulse-action-meta)" }}
                  >
                    <span>{tAssistant("suggested")}</span>
                    <span
                      className="text-[8.5px] tracking-[0.06em]"
                      style={{ color: "var(--pulse-briefing-label)" }}
                    >
                      {suggested.length}
                    </span>
                  </div>
                  <ul className="mb-0.5">
                    {suggested.map((q) => (
                      <li key={q.id}>
                        <button
                          type="button"
                          onClick={() => ask(q)}
                          className="group mx-2 my-px flex w-[calc(100%-1rem)] items-center gap-2 rounded-[8px] px-2 py-1.5 text-start transition"
                          style={{
                            color: "var(--pulse-action-text)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              "var(--pulse-action-hover-bg)";
                            (e.currentTarget as HTMLElement).style.boxShadow =
                              "inset 0 0 0 1px var(--pulse-action-hover-ring), 0 3px 10px -3px rgba(32,29,26,0.10)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "";
                            (e.currentTarget as HTMLElement).style.boxShadow = "";
                          }}
                        >
                          <ActionTypeIcon page={q.suggestedPage} />
                          <span
                            className="min-w-0 flex-1 truncate text-[11px] font-semibold tracking-[-0.003em]"
                            style={{ color: "var(--pulse-action-text)" }}
                          >
                            {q.question}
                          </span>
                          <span
                            className="shrink-0 text-[12px] transition"
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
                className="mx-2 my-2 flex items-center gap-1.5 rounded-[11px] p-1.5"
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
                  className="h-[34px] min-w-0 flex-1 rounded-[8px] px-3 text-[12px] outline-none transition focus:shadow-[0_0_0_3px_rgba(141,53,75,0.16)]"
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
                  className="grid size-[34px] shrink-0 place-items-center rounded-[8px] transition hover:scale-105"
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
                    "grid size-[34px] shrink-0 place-items-center rounded-[8px] text-white transition disabled:opacity-40 hover:translate-y-[-1px] active:translate-y-0",
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
          </div>
        )}

      {/* Launcher — crisp burgundy disc floating above an atmospheric
          halo: a static radial glow, three soft blurred rings that
          breathe slowly, and a top glass reflection on the disc.
          All in burgundy, no pink. Subtler in light mode, fuller in
          dark mode (rules in globals.css). */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? tAssistant("close") : tAssistant("open")}
        aria-expanded={open}
        className="pulse-fab relative z-[1] grid size-[60px] place-items-center rounded-full transition hover:scale-[1.04] active:scale-[0.96]"
      >
        <span aria-hidden className="pulse-fab-glow" />
        <span aria-hidden className="pulse-fab-ring pulse-fab-ring--1" />
        <span aria-hidden className="pulse-fab-ring pulse-fab-ring--2" />
        <Image
          src="/assets/pulse/Pulse - Red Circle Icon.svg"
          alt=""
          width={60}
          height={60}
          priority
          className="relative z-[1] block size-[60px]"
        />
        <span aria-hidden className="pulse-fab-shine" />
      </button>
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
