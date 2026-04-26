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
    <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <div className="max-w-2xl">
        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
          {t("eyebrow")}
        </div>
        <h2 className="mt-2.5 text-[28px] font-bold leading-[1.08] tracking-[-0.022em] text-foreground sm:text-[34px]">
          {t("title")}
        </h2>
        <p className="mt-2.5 text-[14px] leading-[1.6] text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ key, icon: Icon }, i) => (
          <motion.article
            key={key}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="card-hover-primary rounded-[10px] border-[1.25px] border-border bg-card p-6"
          >
            <span
              aria-hidden
              className="inline-flex size-9 items-center justify-center rounded-md text-wine"
              style={{
                background:
                  "linear-gradient(180deg, rgba(141,53,75,0.10), rgba(141,53,75,0.04))",
                boxShadow: "inset 0 0 0 1px rgba(141,53,75,0.18)",
              }}
            >
              <Icon className="size-[18px]" strokeWidth={1.6} />
            </span>
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
