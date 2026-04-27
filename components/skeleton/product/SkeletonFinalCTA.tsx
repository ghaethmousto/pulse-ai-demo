"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { PulseLinkButton, PulseIcon } from "@/components/ui/PulseButton";

export function SkeletonFinalCTA() {
  const t = useTranslations("skeleton.finalCta");
  const headlineWords = t("h1Line1").split(" ");
  const subWords = t("h1Line2").split(" ");
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#080606" }}
    >
      {/* Central wine glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(141,53,75,0.25) 0%, rgba(141,53,75,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,240,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,237,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#8d354b]/30 bg-[#8d354b]/10 px-4 py-1.5"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[#8d354b]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-xs font-semibold tracking-widest text-[#8d354b] uppercase">
            {t("badge")}
          </span>
        </motion.div>

        {/* Headline — word by word wipe */}
        <h2 className="text-5xl font-semibold leading-tight text-[#f5f0ed] sm:text-7xl">
          <span className="block overflow-hidden">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word + i}
                className="inline-block mr-4"
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {subWords.map((word, i) => (
              <motion.span
                key={word + i}
                className="inline-block mr-4 text-[#8d354b]"
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.32 + i * 0.1,
                  duration: 0.55,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h2>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {t("body")}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <PulseLinkButton href="/skeleton/add-project/role" variant="darkPrimary" icon={<PulseIcon />}>
            {t("primary")}
          </PulseLinkButton>
          <PulseLinkButton href="/skeleton/contact" variant="darkSecondary">
            {t("secondary")}
          </PulseLinkButton>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          className="mt-12 text-xs text-neutral-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {t("tagline")}
          <br />
          <span style={{ color: "rgba(245,240,237,0.2)" }}>
            Pulse AI · UAE · 2025
          </span>
        </motion.p>
      </div>
    </section>
  );
}
