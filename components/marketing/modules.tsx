"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  Activity,
  ClipboardCheck,
  FileBarChart,
  Folders,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ITEMS: { key: string; icon: LucideIcon }[] = [
  { key: "intelligence", icon: Sparkles },
  { key: "pulse", icon: Activity },
  { key: "approvals", icon: ClipboardCheck },
  { key: "risks", icon: ShieldAlert },
  { key: "documents", icon: Folders },
  { key: "reports", icon: FileBarChart },
];

export function Modules() {
  const t = useTranslations("landing.modules");

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="max-w-2xl">
        <div className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
          {t("eyebrow")}
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ key, icon: Icon }, i) => (
          <motion.article
            key={key}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-pulse-card transition hover:border-wine-light/60"
          >
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-wine">
              <Icon className="size-5" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-foreground">{t(`items.${key}.title`)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`items.${key}.body`)}</p>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-wine-light/40 to-transparent opacity-0 transition group-hover:opacity-100"
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
