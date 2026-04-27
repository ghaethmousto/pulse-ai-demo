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

import { IconTile } from "@/components/marketing/problem-solution";

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
    <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-16">
      <div className="max-w-2xl">
        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
          {t("eyebrow")}
        </div>
        <h2 className="mt-2.5 text-[28px] font-bold leading-[1.08] tracking-[-0.022em] text-foreground sm:text-[34px]">
          {t("title")}
        </h2>
        <p className="mt-2.5 text-[14px] leading-[1.6] text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ key, icon: Icon }, i) => (
          <motion.article
            key={key}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="card-hover-primary rounded-[10px] border border-border bg-card p-6"
          >
            <IconTile tone="wine">
              <Icon className="size-[18px]" strokeWidth={1.6} />
            </IconTile>
            <h3 className="mt-4 text-[15px] font-bold tracking-[-0.01em] text-foreground">
              {t(`items.${key}.title`)}
            </h3>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-muted-foreground">
              {t(`items.${key}.body`)}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
