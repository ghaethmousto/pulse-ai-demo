"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { AlertTriangle, Sparkle } from "lucide-react";

export function ProblemSolution() {
  const t = useTranslations("landing");

  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-2 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[10px] border-[1.25px] border-border bg-card p-7"
        >
          <span
            aria-hidden
            className="inline-flex size-9 items-center justify-center rounded-md text-warning"
            style={{
              background:
                "linear-gradient(180deg, rgba(184,113,42,0.14), rgba(184,113,42,0.06))",
              boxShadow: "inset 0 0 0 1px rgba(184,113,42,0.22)",
            }}
          >
            <AlertTriangle className="size-[18px]" strokeWidth={1.6} />
          </span>
          <h2 className="mt-5 text-[22px] font-bold leading-tight tracking-[-0.02em] text-foreground">
            {t("problemTitle")}
          </h2>
          <p className="mt-2.5 text-[14px] leading-[1.6] text-muted-foreground">
            {t("problemBody")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[10px] border-[1.25px] p-7"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--pulse-wine) 6%, var(--bg-surface)) 0%, var(--bg-surface) 100%)",
            borderColor: "rgba(141,53,75,0.22)",
          }}
        >
          <span
            aria-hidden
            className="inline-flex size-9 items-center justify-center rounded-md text-white"
            style={{
              background: "linear-gradient(180deg, #9e4259 0%, #7a2b3f 100%)",
              boxShadow:
                "0 4px 14px rgba(141,53,75,0.32), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.18)",
            }}
          >
            <Sparkle className="size-[18px]" strokeWidth={1.6} />
          </span>
          <h2 className="mt-5 text-[22px] font-bold leading-tight tracking-[-0.02em] text-foreground">
            {t("solutionTitle")}
          </h2>
          <p className="mt-2.5 text-[14px] leading-[1.6] text-foreground/80">{t("solutionBody")}</p>
        </motion.div>
      </div>
    </section>
  );
}
