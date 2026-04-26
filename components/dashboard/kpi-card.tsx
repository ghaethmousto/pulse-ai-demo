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
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="card-hover-primary rounded-[10px] border border-border/70 bg-card p-5"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </div>
        <span
          className={`inline-flex size-5 items-center justify-center rounded-full ${TREND_TONE[trend]}`}
          aria-hidden
        >
          <Icon className="size-3" strokeWidth={2} />
        </span>
      </div>
      <div className="mt-3 font-mono text-[34px] font-semibold leading-none tracking-[-0.025em] tabular-nums text-foreground">
        <bdi>
          <CountUp value={value} delay={index * 80} />
        </bdi>
      </div>
      <div className="mt-2 text-[11px] leading-snug text-muted-foreground">{note}</div>
    </motion.article>
  );
}
