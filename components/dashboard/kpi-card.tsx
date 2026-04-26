"use client";

import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

import type { Trend } from "@/types/pulse";

const TREND_ICON: Record<Trend, typeof ArrowUpRight> = {
  positive: ArrowUpRight,
  negative: ArrowDownRight,
  neutral: Minus,
};

const TREND_TONE: Record<Trend, string> = {
  positive: "text-success bg-success/10",
  negative: "text-danger bg-danger/10",
  neutral: "text-muted-foreground bg-muted",
};

export function KpiCard({
  index,
  label,
  value,
  note,
  trend,
}: {
  index: number;
  label: string;
  value: string;
  note: string;
  trend: Trend;
}) {
  const Icon = TREND_ICON[trend];

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-pulse-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
          {label}
        </div>
        <span
          className={`inline-flex size-7 items-center justify-center rounded-full ${TREND_TONE[trend]}`}
          aria-hidden
        >
          <Icon className="size-3.5" />
        </span>
      </div>
      <div className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{value}</div>
      <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{note}</div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-wine-light/40 to-transparent opacity-0 transition group-hover:opacity-100"
      />
    </motion.article>
  );
}
