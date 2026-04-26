"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { AlertTriangle, Sparkle } from "lucide-react";

export function ProblemSolution() {
  const t = useTranslations("landing");

  return (
    <section className="border-y border-border/70 bg-card/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-border bg-background p-7 shadow-pulse-card"
        >
          <div className="inline-flex size-10 items-center justify-center rounded-xl bg-warning/10 text-warning">
            <AlertTriangle className="size-5" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
            {t("problemTitle")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {t("problemBody")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border p-7 shadow-pulse-wine"
          style={{
            background:
              "linear-gradient(140deg, color-mix(in oklab, var(--pulse-wine) 10%, var(--bg-surface)) 0%, var(--bg-surface) 60%)",
          }}
        >
          <div className="inline-flex size-10 items-center justify-center rounded-xl bg-wine text-white shadow-pulse-wine">
            <Sparkle className="size-5" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
            {t("solutionTitle")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/80">{t("solutionBody")}</p>
        </motion.div>
      </div>
    </section>
  );
}
