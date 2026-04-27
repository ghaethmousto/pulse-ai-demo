"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";

import { CountUp } from "@/components/dashboard/count-up";
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
            "radial-gradient(70% 50% at 30% 0%, color-mix(in oklab, var(--pulse-wine) 14%, transparent) 0%, transparent 60%), radial-gradient(50% 40% at 90% 10%, color-mix(in oklab, var(--pulse-wine-glow) 10%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pt-12 pb-10 lg:px-8 lg:pt-20 lg:pb-14">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border-[1.25px] border-border bg-card/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
        >
          <Sparkles className="size-3 text-wine" strokeWidth={1.8} /> {tProj("name")} ·{" "}
          {tProj("phase")}
        </motion.div>

        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-[60rem] text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-foreground sm:text-[52px] lg:text-[64px]"
        >
          {t("heroTitle")}
        </motion.h1>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-[42rem] text-pretty text-[15px] leading-[1.55] text-muted-foreground sm:text-[16px]"
        >
          {t("heroSubtitle")}
        </motion.p>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/dashboard"
            className="group inline-flex h-[38px] items-center gap-2 rounded-[9px] px-[18px] text-[14px] font-medium text-white transition"
            style={{
              background: "linear-gradient(180deg, #9a3e55 0%, #7a2b3f 100%)",
              boxShadow:
                "0 4px 14px rgba(141,53,75,0.32), 0 0 0 1px rgba(141,53,75,0.20), inset 0 1px 0 rgba(255,255,255,0.20)",
            }}
          >
            {t("primaryCta")}
            <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" strokeWidth={2} />
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex h-[38px] items-center gap-2 rounded-[9px] border-[1.25px] border-border bg-card px-[18px] text-[14px] font-medium text-foreground/80 transition hover:text-foreground hover:bg-accent/40"
          >
            {tCommon("viewDemo")}
          </Link>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
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
    <div className="card-hover-primary relative overflow-hidden rounded-[10px] border-[1.25px] border-border bg-card">
      <div className="grid gap-5 p-6 md:grid-cols-[1.2fr_1fr] md:p-7">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
            {t("spotlight")}
          </div>
          <h3 className="mt-1.5 text-[22px] font-bold tracking-[-0.02em] text-foreground">
            {tProj("name")}
          </h3>
          <p className="mt-1 text-[12.5px] text-muted-foreground">{tProj("location")}</p>
          <p className="mt-4 max-w-xl text-[13.5px] leading-[1.6] text-foreground/80">
            {tProj("aiSummary")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <SpotlightStat index={0} label={t("stat.delay")} value={t("stat.delayValue")} tone="warning" />
          <SpotlightStat index={1} label={t("stat.exposure")} value={t("stat.exposureValue")} tone="danger" />
          <SpotlightStat index={2} label={t("stat.progress")} value={t("stat.progressValue")} tone="muted" />
          <SpotlightStat index={3} label={t("stat.milestone")} value={t("stat.milestoneValue")} tone="info" />
        </div>
      </div>
    </div>
  );
}

function SpotlightStat({
  label,
  value,
  tone,
  index = 0,
}: {
  label: string;
  value: string;
  tone: "warning" | "danger" | "muted" | "info";
  index?: number;
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
    <div className="card-hover-nested rounded-[8px] border border-border bg-background/60 px-3.5 py-2.5">
      <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
      <div className={`mt-1 font-mono text-[16px] font-semibold tabular-nums ${toneClass}`}>
        <bdi>
          <CountUp value={value} delay={index * 60} />
        </bdi>
      </div>
    </div>
  );
}
