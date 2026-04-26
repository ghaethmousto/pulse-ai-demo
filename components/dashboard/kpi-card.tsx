"use client";

import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

import { CountUp } from "@/components/dashboard/count-up";
import type { Trend } from "@/types/pulse";

const TREND_ICON: Record<Trend, typeof ArrowUpRight> = {
  positive: ArrowUpRight,
  negative: ArrowDownRight,
  neutral: Minus,
};

const TREND_TONE: Record<Trend, string> = {
  positive: "text-success bg-success/10 ring-success/20",
  negative: "text-danger bg-danger/10 ring-danger/20",
  neutral: "text-muted-foreground bg-muted ring-border",
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
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="card-hover-primary flex flex-col items-center rounded-[10px] border border-border/70 bg-card px-5 pt-5 pb-5 text-center"
    >
      {/* Trend pill — small, restrained, sits above the number */}
      <span
        className={`inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] ring-1 ring-inset ${TREND_TONE[trend]}`}
        aria-hidden
      >
        <Icon className="size-2.5" strokeWidth={2.2} />
      </span>

      {/* The number — biggest element, centered, sits high */}
      <div className="mt-2.5 font-mono text-[36px] font-semibold leading-none tracking-[-0.025em] tabular-nums text-foreground">
        <bdi>
          <CountUp value={value} delay={index * 80} />
        </bdi>
      </div>

      {/* Supporting label */}
      <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>

      {/* Note */}
      <div className="mt-1.5 max-w-[22ch] text-[11px] leading-snug text-muted-foreground/85">
        {note}
      </div>
    </motion.article>
  );
}
