"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function AiSummary({ summary }: { summary: string }) {
  const t = useTranslations("dashboard.summary");

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="card-hover-primary rounded-[10px] border border-border/70 bg-card p-5 md:p-6"
    >
      <div className="flex items-start gap-3.5">
        {/* Pulse identity tile — same official asset as launcher / panel header */}
        <span
          aria-hidden
          className="pulse-mark-breath grid size-9 shrink-0 place-items-center rounded-full"
          style={{
            background: "linear-gradient(180deg, #9e4259 0%, #7a2b3f 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.18), 0 4px 12px rgba(141,53,75,0.28)",
          }}
        >
          <Image
            src="/assets/pulse/Pulse - Red Circle Icon.svg"
            alt=""
            width={26}
            height={26}
            className="block size-[26px] brightness-0 invert"
          />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-wine">
            {t("eyebrow")}
          </div>
          <h2 className="mt-1 text-[15px] font-bold tracking-[-0.01em] text-foreground">
            {t("title")}
          </h2>
          <p className="mt-2 max-w-3xl text-[12.5px] leading-[1.6] text-foreground/85">
            {summary}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
