"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
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

// Walks the rendered string and replaces ASCII or Arabic-Indic digits with a
// linearly interpolated "from zero" value driven by `progress` ∈ [0, 1].
function interpolateNumbers(value: string, progress: number): string {
  if (progress >= 1) return value;
  const arabicDigits = "٠١٢٣٤٥٦٧٨٩";
  return value.replace(/[0-9٠-٩]+(?:[.,][0-9٠-٩]+)?/g, (match) => {
    // Detect Arabic-Indic digits
    const isArabic = /[٠-٩]/.test(match);
    const ascii = isArabic
      ? match.replace(/[٠-٩]/g, (d) => arabicDigits.indexOf(d).toString())
      : match;
    const num = parseFloat(ascii.replace(",", "."));
    if (Number.isNaN(num)) return match;
    const interp = num * progress;
    const decimals = (ascii.split(".")[1] ?? "").length;
    const out = decimals > 0 ? interp.toFixed(decimals) : Math.round(interp).toString();
    if (isArabic) {
      return out.replace(/[0-9]/g, (d) => arabicDigits[parseInt(d, 10)]).replace(".", "٫");
    }
    return out;
  });
}

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
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now() + index * 80;
    const duration = 900;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / duration));
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, index]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 8 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-lg border border-border bg-card p-4"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </div>
        <span
          className={`inline-flex size-5 items-center justify-center rounded-full ${TREND_TONE[trend]}`}
          aria-hidden
        >
          <Icon className="size-3" strokeWidth={2} />
        </span>
      </div>
      <div className="mt-2 font-mono text-[28px] font-semibold tracking-[-0.02em] tabular-nums text-foreground">
        <bdi>{interpolateNumbers(value, progress)}</bdi>
      </div>
      <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{note}</div>
    </motion.article>
  );
}
