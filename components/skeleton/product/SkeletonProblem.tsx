"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";

/* ─── Wireframe illustrations for each problem ─────────── */

function FragmentedRealityWireframe() {
  // Three disconnected document/file panels with conflicting numbers
  return (
    <svg viewBox="0 0 220 100" className="h-full w-full" fill="none">
      {/* Panel 1 */}
      <g>
        <rect x="6" y="10" width="60" height="78" rx="4" stroke="#8d354b" strokeOpacity="0.45" strokeWidth="1.2" fill="#fbf6f4" />
        <line x1="14" y1="22" x2="50" y2="22" stroke="#8d354b" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="14" y1="30" x2="42" y2="30" stroke="#8d354b" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round" />
        <text x="14" y="56" fontSize="11" fontWeight="700" fill="#8d354b">847M</text>
        <text x="14" y="72" fontSize="6.5" fill="#8d354b" fillOpacity="0.6" letterSpacing="0.4">OWNER</text>
      </g>
      {/* Panel 2 */}
      <g>
        <rect x="80" y="10" width="60" height="78" rx="4" stroke="#8d354b" strokeOpacity="0.45" strokeWidth="1.2" fill="#fbf6f4" />
        <line x1="88" y1="22" x2="124" y2="22" stroke="#8d354b" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="88" y1="30" x2="116" y2="30" stroke="#8d354b" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round" />
        <text x="88" y="56" fontSize="11" fontWeight="700" fill="#8d354b">820M</text>
        <text x="88" y="72" fontSize="6.5" fill="#8d354b" fillOpacity="0.6" letterSpacing="0.4">CONSULTANT</text>
      </g>
      {/* Panel 3 */}
      <g>
        <rect x="154" y="10" width="60" height="78" rx="4" stroke="#8d354b" strokeOpacity="0.45" strokeWidth="1.2" fill="#fbf6f4" />
        <line x1="162" y1="22" x2="198" y2="22" stroke="#8d354b" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="162" y1="30" x2="190" y2="30" stroke="#8d354b" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round" />
        <text x="162" y="56" fontSize="11" fontWeight="700" fill="#8d354b">863M</text>
        <text x="162" y="72" fontSize="6.5" fill="#8d354b" fillOpacity="0.6" letterSpacing="0.4">CONTRACTOR</text>
      </g>
      {/* Disconnect lines (broken) */}
      <line x1="66" y1="49" x2="80" y2="49" stroke="#8d354b" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="140" y1="49" x2="154" y2="49" stroke="#8d354b" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 3" />
    </svg>
  );
}

function InvisibleRiskWireframe() {
  // Email/inbox layout with a hidden risk buried at the bottom
  return (
    <svg viewBox="0 0 220 100" className="h-full w-full" fill="none">
      <rect x="6" y="6" width="208" height="86" rx="5" stroke="#8d354b" strokeOpacity="0.4" strokeWidth="1.2" fill="#fbf6f4" />
      {/* Inbox rows */}
      {[18, 32, 46, 60, 74].map((y, i) => (
        <g key={y}>
          <circle cx="16" cy={y} r="3.5" fill="#8d354b" fillOpacity={i === 4 ? 0.9 : 0.12} />
          <line x1="26" y1={y} x2="80" y2={y} stroke="#8d354b" strokeOpacity={i === 4 ? 0.8 : 0.3} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="86" y1={y} x2={i === 4 ? 200 : 168 - i * 8} y2={y} stroke="#8d354b" strokeOpacity={i === 4 ? 0.55 : 0.18} strokeWidth="1" strokeLinecap="round" />
        </g>
      ))}
      {/* Highlight: risk hidden in last row */}
      <rect x="10" y="69" width="200" height="11" rx="2" fill="#8d354b" fillOpacity="0.08" />
      {/* Warning indicator */}
      <g transform="translate(196, 70)">
        <path d="M0 6L4 -1L8 6Z" stroke="#8d354b" strokeWidth="1.2" fill="#fce8eb" strokeLinejoin="round" />
        <line x1="4" y1="1.2" x2="4" y2="3.5" stroke="#8d354b" strokeWidth="1" strokeLinecap="round" />
        <circle cx="4" cy="4.8" r="0.7" fill="#8d354b" />
      </g>
    </svg>
  );
}

function CostlyReworkWireframe() {
  // Bar chart showing budget overrun + downward trend
  return (
    <svg viewBox="0 0 220 100" className="h-full w-full" fill="none">
      {/* Axes */}
      <line x1="14" y1="84" x2="208" y2="84" stroke="#8d354b" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="14" y1="14" x2="14" y2="84" stroke="#8d354b" strokeOpacity="0.3" strokeWidth="1" />
      {/* Bars (planned vs actual) */}
      {[
        { x: 26, planned: 30, actual: 32 },
        { x: 60, planned: 36, actual: 44 },
        { x: 94, planned: 42, actual: 56 },
        { x: 128, planned: 48, actual: 64 },
        { x: 162, planned: 50, actual: 68 },
      ].map((b) => (
        <g key={b.x}>
          {/* Planned (faint) */}
          <rect x={b.x} y={84 - b.planned} width="10" height={b.planned} rx="1" fill="#8d354b" fillOpacity="0.18" />
          {/* Actual (bold) */}
          <rect x={b.x + 12} y={84 - b.actual} width="10" height={b.actual} rx="1" fill="#8d354b" fillOpacity="0.7" />
        </g>
      ))}
      {/* Trend line — increasing variance */}
      <path
        d="M 32 56 L 66 44 L 100 30 L 134 22 L 168 18"
        stroke="#8d354b"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 2"
      />
      {/* Arrow up indicating overrun */}
      <g transform="translate(186, 22)">
        <path d="M0 8L0 0M0 0L-3 3M0 0L3 3" stroke="#8d354b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      {/* Legend dots */}
      <circle cx="20" cy="92" r="2" fill="#8d354b" fillOpacity="0.18" />
      <circle cx="60" cy="92" r="2" fill="#8d354b" fillOpacity="0.7" />
    </svg>
  );
}

export function SkeletonProblem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const t = useTranslations("skeleton.problem");

  const problems = [
    {
      n: "01",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="7" height="18" rx="1" />
          <rect x="9" y="8" width="7" height="13" rx="1" />
          <rect x="16" y="13" width="7" height="8" rx="1" />
        </svg>
      ),
      title: t("card1Title"),
      body: "Each company maintains its own files, statuses, and numbers. Three companies — three conflicting truths.",
      accent: "rgba(141,53,75,0.1)",
      border: "rgba(141,53,75,0.25)",
      Wireframe: FragmentedRealityWireframe,
    },
    {
      n: "02",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      title: t("card2Title"),
      body: "Critical decisions get buried in email threads and meeting notes. By the time risk surfaces, it is already a crisis.",
      accent: "rgba(141,53,75,0.06)",
      border: "rgba(141,53,75,0.15)",
      Wireframe: InvisibleRiskWireframe,
    },
    {
      n: "03",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: t("card3Title"),
      body: "Misalignment compounds daily. By the time it surfaces, the budget variance and schedule loss are irreversible.",
      accent: "rgba(141,53,75,0.04)",
      border: "rgba(141,53,75,0.1)",
      Wireframe: CostlyReworkWireframe,
    },
  ];

  return (
    <section className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0e0c0c]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#8d354b] font-semibold">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-neutral-900 dark:text-[#f5f0ed] sm:text-4xl">
            {t("titleLead")}{" "}
            <span className="text-[#8d354b]">{t("titleAccent")}</span>
            {t("titleTrail")}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {t("body")}
          </p>
        </motion.div>

        <div ref={ref} className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {problems.map((p, i) => {
            const { Wireframe } = p;
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.15,
                  duration: 0.55,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 32px -8px rgba(141,53,75,0.18)",
                  borderColor: "rgba(141,53,75,0.35)",
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 dark:border-neutral-800 dark:bg-neutral-950"
                style={{ transition: "border-color 0.2s, box-shadow 0.2s" }}
              >
                {/* Top accent bar (hover) */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "#8d354b" }}
                />

                {/* Number */}
                <span className="mb-4 block font-mono text-[11px] font-semibold tracking-[0.15em] text-[#8d354b]/60">
                  {p.n}
                </span>

                {/* Wireframe illustration */}
                <div
                  className="mb-5 overflow-hidden rounded-xl border"
                  style={{
                    borderColor: p.border,
                    background:
                      "linear-gradient(180deg, #fdfaf8 0%, #f8eef0 100%)",
                    height: 110,
                  }}
                >
                  <Wireframe />
                </div>

                {/* Icon + heading */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-[#8d354b]"
                    style={{ background: p.accent, border: `1px solid ${p.border}` }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-[#f5f0ed]">
                    {p.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
