"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";

export function AiSummary({ summary }: { summary: string }) {
  const t = useTranslations("dashboard.summary");

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl border border-border p-6 md:p-8"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in oklab, var(--pulse-wine) 8%, var(--bg-surface)) 0%, var(--bg-surface) 60%)",
      }}
    >
      <div className="flex items-start gap-4">
        <span
          aria-hidden
          className="grid size-11 shrink-0 place-items-center rounded-2xl text-white shadow-pulse-wine"
          style={{
            background:
              "radial-gradient(120% 120% at 30% 20%, var(--pulse-wine-glow), var(--pulse-wine) 55%, var(--pulse-maroon-deep))",
          }}
        >
          <Sparkles className="size-5" />
        </span>
        <div>
          <div className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
            {t("eyebrow")}
          </div>
          <h2 className="mt-1 text-xl font-semibold text-foreground">{t("title")}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/80">{summary}</p>
        </div>
      </div>
    </motion.section>
  );
}
