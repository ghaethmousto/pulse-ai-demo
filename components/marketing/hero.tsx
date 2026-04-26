"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";

import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("landing");
  const tCommon = useTranslations("common");
  const tProj = useTranslations("demoProject");

  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(75% 60% at 30% 0%, color-mix(in oklab, var(--pulse-wine) 18%, transparent) 0%, transparent 60%), radial-gradient(60% 50% at 90% 10%, color-mix(in oklab, var(--pulse-wine-glow) 14%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--pulse-wine-border), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-5 pt-20 pb-24 lg:px-8 lg:pt-28 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted-foreground shadow-pulse-card backdrop-blur"
        >
          <Sparkles className="size-3.5 text-wine" /> {tProj("name")} · {tProj("phase")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          {t("heroTitle")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {t("heroSubtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/dashboard"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-wine px-5 text-sm font-medium text-white shadow-pulse-wine transition hover:bg-wine-light"
          >
            {t("primaryCta")}
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground/80 shadow-pulse-card transition hover:text-foreground hover:bg-accent"
          >
            {tCommon("viewDemo")}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <ProjectSpotlightCard />
        </motion.div>
      </div>
    </section>
  );
}

function ProjectSpotlightCard() {
  const tProj = useTranslations("demoProject");
  const t = useTranslations("landing");

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-pulse-card">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--pulse-wine) 8%, transparent), transparent 50%)",
        }}
      />
      <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
        <div>
          <div className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
            {t("spotlight")}
          </div>
          <h3 className="mt-2 text-2xl font-semibold text-foreground">{tProj("name")}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{tProj("location")}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/80">
            {tProj("aiSummary")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <SpotlightStat label={t("stat.delay")} value={t("stat.delayValue")} tone="warning" />
          <SpotlightStat label={t("stat.exposure")} value={t("stat.exposureValue")} tone="danger" />
          <SpotlightStat label={t("stat.progress")} value={t("stat.progressValue")} tone="muted" />
          <SpotlightStat label={t("stat.milestone")} value={t("stat.milestoneValue")} tone="info" />
        </div>
      </div>
    </div>
  );
}

function SpotlightStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "warning" | "danger" | "muted" | "info";
}) {
  const toneClass =
    tone === "warning"
      ? "text-warning"
      : tone === "danger"
        ? "text-danger"
        : tone === "info"
          ? "text-info"
          : "text-foreground";
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-4">
      <div className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">{label}</div>
      <div className={`mt-2 text-lg font-semibold ${toneClass}`}>{value}</div>
    </div>
  );
}
