"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { skeletonAuthLinks } from "@/components/skeleton/nav-links";
import { PulseLinkButton, PulseIcon } from "@/components/ui/PulseButton";

export function SkeletonHero() {
  const t = useTranslations("skeleton.hero");
  const headline = [t("h1Line1"), t("h1Line2"), t("h1Line3")];
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-[#faf8f6] dark:bg-[#0e0c0c]">
      {/* Background image — mirrors horizontally in RTL so the diagram
          sits opposite the copy column instead of overlapping it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-95 dark:opacity-95 dark:invert dark:hue-rotate-180 rtl:[transform:scaleX(-1)]"
        style={{ backgroundImage: 'url("/assets/cards%20background/77.jpg")' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#faf8f6]/35 dark:bg-[#0e0c0c]/40"
      />

      {/* Restrained ambient backdrop — controlled radial, not foggy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 60% 38%, rgba(141,53,75,0.08) 0%, rgba(141,53,75,0.03) 38%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-[5fr_6fr] lg:gap-14 lg:py-28">
        {/* Left — copy */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="mb-6 inline-flex w-fit items-center rounded-full border border-[#8d354b]/30 bg-[#8d354b]/[0.08] px-3 py-1 text-xs font-medium text-[#8d354b] dark:text-[#e08aa0]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#8d354b]" />
            {t("badge")}
          </motion.span>

          <h1 className="text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-neutral-900 dark:text-[#f5f0ed] sm:text-5xl lg:text-[3.4rem]">
            {headline.map((line, i) => {
              const isCore = i === headline.length - 1;
              return (
                <motion.span
                  key={line}
                  className={`block ${
                    isCore
                      ? "font-bold text-[#8d354b] dark:text-[#e08aa0]"
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.55,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {line}
                </motion.span>
              );
            })}
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-[15px] leading-[1.65] text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            className="mt-7 flex flex-wrap items-center gap-2.5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.45 }}
          >
            <PulseLinkButton
              href={skeletonAuthLinks.requestDemo}
              variant="primary"
              icon={<PulseIcon />}
            >
              {t("ctaPrimary")}
            </PulseLinkButton>
            <PulseLinkButton
              href={skeletonAuthLinks.seePlatform}
              variant="secondary"
            >
              {t("ctaSecondary")}
            </PulseLinkButton>
          </motion.div>

          {/* Social proof row — clean aligned avatars */}
          <motion.div
            className="mt-9 flex items-center gap-3.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            <div className="flex -space-x-2">
              {["O", "C", "K"].map((l, i) => (
                <div
                  key={l}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-800 text-[10px] font-semibold tracking-wide text-white ring-2 ring-[#faf8f6] dark:bg-neutral-700 dark:ring-[#0e0c0c]"
                  style={{ zIndex: 3 - i }}
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              {t("trustedBy")}
            </p>
          </motion.div>
        </motion.div>

        {/* Right — premium command-stage container */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Restrained burgundy aura — controlled, soft, not foggy.
              Sits behind the stage and never bleeds past it on edges. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[88%] w-[92%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(141,53,75,0.18) 0%, rgba(141,53,75,0.06) 38%, transparent 72%)",
            }}
          />

        </motion.div>
      </div>
    </section>
  );
}
