"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  {
    prefix: "AED ",
    to: 150,
    suffix: "K",
    decimals: 0,
    label: "Average delay cost",
    sub: "per day on large projects",
    accentColor: "#8d354b",
  },
  {
    prefix: "",
    to: 70,
    suffix: " days",
    decimals: 0,
    label: "Typical project delay",
    sub: "without operational truth",
    accentColor: "#8d354b",
  },
  {
    prefix: "",
    to: 30,
    suffix: "%",
    decimals: 0,
    label: "Reduction with Pulse AI",
    sub: "through faster decisions",
    accentColor: "#8d354b",
  },
  {
    prefix: "AED ",
    to: 3.15,
    suffix: "M",
    decimals: 2,
    label: "Saved per project",
    sub: "over the project lifecycle",
    accentColor: "#8d354b",
  },
];

export function SkeletonEconomics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="relative border-b border-neutral-800 overflow-hidden"
      style={{ background: "#0c0909" }}
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,240,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,237,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(141,53,75,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8d354b]">
            The Economics
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[#f5f0ed] sm:text-5xl">
            Construction delays cost{" "}
            <span className="text-[#8d354b]">real money.</span>
            <br />
            Pulse AI saves it.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400">
            Average delay cost on a large UAE construction project is AED
            150,000 per day. A typical 70-day delay translates to AED 10M+ in
            lost value. Pulse AI cuts that by 30%.
          </p>
        </motion.div>

        <div ref={ref} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.12,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative overflow-hidden rounded-2xl p-6 text-left"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "2px solid #8d354b",
              }}
            >
              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(141,53,75,0.12) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <p className="text-2xl font-semibold text-[#f5f0ed] sm:text-3xl lg:text-4xl">
                  <AnimatedCounter
                    to={s.to}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                    duration={2.2}
                  />
                </p>
                <p className="mt-3 text-xs font-medium text-neutral-300">{s.label}</p>
                <p className="text-xs text-neutral-500">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
