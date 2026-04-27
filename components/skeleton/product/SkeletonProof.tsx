"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

/* ─── Brand Card Visuals ─────────────────────────────────── */

interface VisualProps {
  bg: string;
  textColor?: string;
  pattern?: "waves" | "stars" | "rings" | "bars" | "none";
  patternColor?: string;
}

function BrandLogoCard({
  src,
  alt,
  bg,
  pattern = "none",
  patternColor = "rgba(0,0,0,0.06)",
  invert = false,
  logoMaxWidth = 180,
  logoAspect = "5/2",
}: VisualProps & {
  src: string;
  alt: string;
  invert?: boolean;
  logoMaxWidth?: number;
  logoAspect?: string;
}) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: bg }}
    >
      {/* Pattern overlay */}
      {pattern === "waves" && (
        <svg
          viewBox="0 0 400 500"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          style={{ opacity: 0.4 }}
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <path
              key={i}
              d={`M 0 ${100 + i * 22} Q 200 ${80 + i * 22} 400 ${100 + i * 22}`}
              stroke={patternColor}
              strokeWidth="1"
              fill="none"
              opacity={0.5 - i * 0.015}
            />
          ))}
        </svg>
      )}
      {pattern === "stars" &&
        Array.from({ length: 22 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 1.5,
              height: 1.5,
              background: patternColor,
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              opacity: 0.7,
            }}
          />
        ))}
      {pattern === "rings" && (
        <svg
          viewBox="0 0 400 500"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          style={{ opacity: 0.3 }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx="200"
              cy="250"
              r={50 + i * 30}
              stroke={patternColor}
              strokeWidth="0.6"
              fill="none"
            />
          ))}
        </svg>
      )}
      {pattern === "bars" && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-1">
          {[10, 22, 32, 28, 24, 18].map((h, i) => (
            <div
              key={i}
              style={{
                width: 4,
                height: h * 1.4,
                background: patternColor,
                borderRadius: 1,
              }}
            />
          ))}
        </div>
      )}

      {/* Logo centered */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div
          className="relative w-full"
          style={{
            maxWidth: logoMaxWidth,
            aspectRatio: logoAspect,
            filter: invert ? "invert(1) brightness(2)" : "none",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="280px"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

function PulseVisionVisual() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 120% 90% at 50% 50%, #1a0e2e 0%, #0a0612 70%, #050208 100%)",
      }}
    >
      {/* Concentric pulsing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ width: 200, height: 200 }}>
          {[
            { size: 200, color: "rgba(141,53,75,0.10)", duration: 3 },
            { size: 160, color: "rgba(141,53,75,0.16)", duration: 3.4 },
            { size: 120, color: "rgba(141,53,75,0.28)", duration: 3.8 },
            { size: 85, color: "rgba(190,80,110,0.45)", duration: 4.2 },
          ].map((r, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                top: "50%",
                left: "50%",
                width: r.size,
                height: r.size,
                marginTop: -r.size / 2,
                marginLeft: -r.size / 2,
                background: `radial-gradient(circle, ${r.color} 0%, transparent 70%)`,
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [1, 0.7, 1] }}
              transition={{
                duration: r.duration,
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          <motion.div
            className="absolute rounded-full"
            style={{
              top: "50%",
              left: "50%",
              width: 30,
              height: 30,
              marginTop: -15,
              marginLeft: -15,
              background:
                "radial-gradient(circle, #ffaa66 0%, #ff7744 50%, transparent 100%)",
              boxShadow: "0 0 40px rgba(255,140,90,0.7)",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      </div>

      {/* Coming soon label */}
      <div className="absolute bottom-16 left-0 right-0 text-center">
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.25em",
            color: "rgba(245,240,237,0.5)",
            textTransform: "uppercase",
          }}
        >
          Coming Soon
        </span>
      </div>
    </div>
  );
}

/* ─── Card Data ──────────────────────────────────────────── */

interface ProofCard {
  id: string;
  tag: string;
  description: React.ReactNode;
  cta: string;
  bg: string;
  pattern?: "waves" | "stars" | "rings" | "bars" | "none";
  patternColor?: string;
  logoSrc?: string;
  invertLogo?: boolean;
  isPreview?: boolean;
  accent?: string;
  logoMaxWidth?: number;
  logoAspect?: string;
}

const cards: ProofCard[] = [
  {
    id: "ora",
    tag: "ORA Developers",
    description: (
      <>
        ORA Developers recently doubled its land bank in Bayn Al Jessrain —{" "}
        <strong className="font-semibold text-[#8d354b]">Pulse</strong> unified
        approvals across 6 authorities.
      </>
    ),
    cta: "Read ORA Developers's story",
    bg: "linear-gradient(135deg, #d9c190 0%, #b89968 50%, #c9a978 100%)",
    pattern: "waves",
    patternColor: "#7a5d35",
    logoSrc: "/assets/logos/ora.svg",
    accent: "#3a2614",
    logoMaxWidth: 200,
    logoAspect: "5/2",
  },
  {
    id: "emaar",
    tag: "Emaar Group",
    description: (
      <>
        Emaar rolled{" "}
        <strong className="font-semibold text-[#8d354b]">Pulse</strong> across
        14 projects in 9 months — one operational truth, one shared decision
        ledger.
      </>
    ),
    cta: "Read Emaar Group's story",
    bg: "linear-gradient(180deg, #1a1f3d 0%, #0f1228 100%)",
    pattern: "stars",
    patternColor: "rgba(255,255,255,0.5)",
    logoSrc: "/assets/logos/emaar.svg",
    invertLogo: true,
    accent: "#ffffff",
    logoMaxWidth: 240,
    logoAspect: "3/2",
  },
  {
    id: "aldar",
    tag: "Aldar",
    description: (
      <>
        Aldar reconciled three capital projects against one shared decision
        ledger — saving{" "}
        <strong className="font-bold text-[#8d354b]">AED 22M</strong> in
        prevented rework.
      </>
    ),
    cta: "Read Aldar's story",
    bg: "linear-gradient(135deg, #f1eae0 0%, #d9cfc1 50%, #c9bfae 100%)",
    pattern: "none",
    logoSrc: "/assets/logos/aldar.svg",
    accent: "#1a1a1a",
    logoMaxWidth: 240,
    logoAspect: "3/2",
  },
  {
    id: "vision",
    tag: "Pulse Vision",
    description: (
      <>
        <strong className="font-semibold text-[#8d354b]">Pulse Vision</strong>{" "}
        — upcoming. 24/7 computer vision on every site cam, fed into the project
        graph.
      </>
    ),
    cta: "Get early access to Pulse Vision",
    bg: "#0a0612",
    isPreview: true,
    accent: "#e08aa0",
  },
  {
    id: "nakheel",
    tag: "Nakheel",
    description: (
      <>
        Nakheel cut end-of-month reconciliation from{" "}
        <strong className="font-semibold text-[#8d354b]">6 days to 6 hours</strong>{" "}
        — across all active developments.
      </>
    ),
    cta: "Read Nakheel's story",
    bg: "linear-gradient(180deg, #0d3a4a 0%, #062430 100%)",
    pattern: "waves",
    patternColor: "#5fa8c2",
    logoSrc: "/assets/logos/nakheel.svg",
    invertLogo: true,
    accent: "#e6f0f5",
    logoMaxWidth: 220,
    logoAspect: "3/1",
  },
  {
    id: "adnoc",
    tag: "ADNOC",
    description: (
      <>
        ADNOC uses{" "}
        <strong className="font-semibold text-[#8d354b]">Pulse</strong> on
        infrastructure capex projects — full risk register synchronization
        across stakeholders.
      </>
    ),
    cta: "Read ADNOC's story",
    bg: "linear-gradient(135deg, #ffffff 0%, #f5f0eb 100%)",
    pattern: "none",
    logoSrc: "/assets/logos/adnoc.svg",
    accent: "#1a1a1a",
    logoMaxWidth: 200,
    logoAspect: "5/2",
  },
  {
    id: "mubadala",
    tag: "Mubadala",
    description: (
      <>
        Mubadala adopted{" "}
        <strong className="font-semibold text-[#8d354b]">Pulse</strong> to track
        multi-billion-dirham capital portfolios — board reporting in one click.
      </>
    ),
    cta: "Read Mubadala's story",
    bg: "linear-gradient(135deg, #2a3a52 0%, #1a2436 100%)",
    pattern: "rings",
    patternColor: "#8aa6c7",
    logoSrc: "/assets/logos/mubadala.svg",
    invertLogo: true,
    accent: "#e6edf5",
    logoMaxWidth: 220,
    logoAspect: "5/2",
  },
];

/* ─── Card Component ─────────────────────────────────────── */

function ProofCardItem({ card }: { card: ProofCard }) {
  const [hovered, setHovered] = useState(false);
  const isDark = card.bg.includes("0a0612") || card.bg.includes("1a1f3d") ||
                  card.bg.includes("0d3a4a") || card.bg.includes("2a3a52");
  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-shrink-0 flex-col"
      style={{
        flex: hovered ? "0 0 360px" : "0 0 calc(25% - 12px)",
        minWidth: 240,
        scrollSnapAlign: "start",
        transition: "flex 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      animate={{ y: hovered ? -6 : 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Image card */}
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          aspectRatio: "3/4",
          boxShadow: hovered
            ? "0 24px 48px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(141,53,75,0.15)"
            : "0 8px 24px -8px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)",
          transition: "box-shadow 0.35s ease",
        }}
      >
        {card.isPreview ? (
          <PulseVisionVisual />
        ) : (
          <BrandLogoCard
            src={card.logoSrc!}
            alt={card.tag}
            bg={card.bg}
            pattern={card.pattern}
            patternColor={card.patternColor}
            invert={card.invertLogo}
            logoMaxWidth={card.logoMaxWidth}
            logoAspect={card.logoAspect}
          />
        )}

        {/* Bottom-left tag — subtle, brand-themed (no white pill) */}
        <div className="absolute bottom-4 left-4 right-4">
          <span
            className="inline-flex items-center gap-1.5"
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: card.accent,
              textShadow: isDark
                ? "0 1px 2px rgba(0,0,0,0.3)"
                : "0 1px 2px rgba(255,255,255,0.4)",
            }}
          >
            {card.isPreview ? (
              <motion.span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: card.accent,
                  flexShrink: 0,
                }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
            ) : (
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: card.accent,
                  flexShrink: 0,
                  opacity: 0.7,
                }}
              />
            )}
            {card.tag}
          </span>
        </div>
      </div>

      {/* Description + CTA */}
      <div className="mt-4 px-1">
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {card.description}
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#8d354b] transition-opacity hover:opacity-80"
        >
          {card.cta}
          <span>→</span>
        </a>
      </div>
    </motion.article>
  );
}

/* ─── Main Component ─────────────────────────────────────── */

export function SkeletonProof() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByAmount = useCallback((dir: "prev" | "next") => {
    const el = viewportRef.current;
    if (!el) return;
    const slide = el.querySelector("article") as HTMLElement | null;
    const step = slide
      ? slide.getBoundingClientRect().width + 16
      : el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  }, []);

  const scrollPrev = useCallback(() => scrollByAmount("prev"), [scrollByAmount]);
  const scrollNext = useCallback(() => scrollByAmount("next"), [scrollByAmount]);

  return (
    <section
      className="border-b border-neutral-200 dark:border-neutral-800"
      style={{ background: "#f9f7f5" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="flex items-end justify-between mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8d354b]">
              Proof
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Teams ship projects{" "}
              <span className="text-[#8d354b]">on Pulse.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500">
              From land acquisition to handover — construction&apos;s most
              demanding teams trust Pulse to keep every stakeholder aligned.
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canPrev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-neutral-700 transition-all hover:border-[#8d354b] hover:text-[#8d354b] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-neutral-300 disabled:hover:text-neutral-700"
              style={{ borderColor: "#d4cfc8" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canNext}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border bg-white text-neutral-700 transition-all hover:border-[#8d354b] hover:text-[#8d354b] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-neutral-300 disabled:hover:text-neutral-700"
              style={{ borderColor: "#d4cfc8" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            ref={viewportRef}
            className="proof-viewport flex gap-4 overflow-x-auto pb-2"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {cards.map((card) => (
              <ProofCardItem key={card.id} card={card} />
            ))}
          </div>
        </motion.div>

        <p className="mt-6 flex items-center gap-2 text-xs text-neutral-400 sm:hidden">
          <span>←</span>
          Swipe to see more stories
        </p>
      </div>
    </section>
  );
}
