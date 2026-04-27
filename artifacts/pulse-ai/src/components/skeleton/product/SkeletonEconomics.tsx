"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const statShapes = [
  { prefix: "AED ", to: 150, suffix: "K", decimals: 0 },
  { prefix: "", to: 70, suffix: "", decimals: 0 },
  { prefix: "", to: 30, suffix: "%", decimals: 0 },
  { prefix: "AED ", to: 3.15, suffix: "M", decimals: 2 },
];

export function SkeletonEconomics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const t = useTranslations("skeleton.economics");
  const stats = t.raw("stats") as { label: string; sub: string }[];
  // Suffix for "70 days" — append the localized "days" unit if available.
  // Keep numeric formatting LTR by isolating the AnimatedCounter span.

  return (
    <section
      className="relative overflow-hidden border-b border-neutral-800 bg-black"
    >
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8d354b]">
            {t("eyebrow")}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[#f5f0ed] sm:text-5xl">
            {t("titleLead")}{" "}
            <span className="text-[#8d354b]">{t("titleAccent")}</span>
            <br />
            {t("titleTrail")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300">
            {t("body")}
          </p>
        </motion.div>

        <div ref={ref} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => {
            const shape = statShapes[i];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.12,
                  duration: 0.55,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative overflow-hidden rounded-2xl p-6 text-start"
                style={{
                  background:
                    "linear-gradient(180deg, #a14260 0%, #7a2b3f 100%)",
                  border: "1px solid rgba(0,0,0,0.26)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.28), 0 2px 4px rgba(0,0,0,0.28), 0 10px 24px -6px rgba(141,53,75,0.50), 0 0 24px rgba(207,89,118,0.14)",
                  fontFamily: "var(--font-sans, 'Raleway', sans-serif)",
                }}
              >
                {/* Card background image */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40 dark:invert dark:hue-rotate-180 dark:opacity-50"
                  style={{ backgroundImage: 'url("/assets/cards%20background/3.png")' }}
                />

                {/* Subtle hover glow */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(245,240,237,0.10) 0%, transparent 70%)",
                  }}
                />

                <div className="relative">
                  <p className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                    <span className="bidi-isolate inline-block">
                      <AnimatedCounter
                        to={shape.to}
                        prefix={shape.prefix}
                        suffix={shape.suffix}
                        decimals={shape.decimals}
                        duration={2.2}
                      />
                    </span>
                  </p>
                  <p className="mt-3 text-sm font-medium text-white">{s.label}</p>
                  <p className="mt-0.5 text-xs text-white">{s.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
