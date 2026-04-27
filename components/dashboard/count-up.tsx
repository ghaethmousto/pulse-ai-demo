"use client";

import * as React from "react";
import { useInView } from "motion/react";

import { interpolateNumbers } from "@/lib/utils/interpolate-numbers";
import { cn } from "@/lib/utils";

/**
 * CountUp — animates the digits inside `value` from zero to their final
 * value when the element first scrolls into view. Non-digit characters
 * (currency symbols, %, slashes, Arabic-Indic vs ASCII digits) are
 * preserved verbatim, so formatting is reproduced exactly.
 *
 * Hydration-safe: server and initial client render both produce the
 * "zero" form (progress = 0), then the animation runs after the IO
 * trigger fires.
 *
 * Honours prefers-reduced-motion.
 */
export function CountUp({
  value,
  duration = 900,
  delay = 0,
  className,
}: {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      if (reduce) {
        setProgress(1);
        return;
      }
      const t = Math.min(1, Math.max(0, (now - start) / duration));
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, delay, duration]);

  return (
    <span ref={ref} className={cn(className)}>
      {interpolateNumbers(value, progress)}
    </span>
  );
}
