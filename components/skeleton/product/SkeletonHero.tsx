"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { skeletonAuthLinks } from "@/components/skeleton/nav-links";
import { PulseLinkButton, PulseIcon } from "@/components/ui/PulseButton";

const headline = ["One project.", "Three stakeholders.", "One trusted truth."];

export function SkeletonHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-[#faf8f6] dark:bg-[#0e0c0c]">
      {/* Subtle radial background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 55% 40%, rgba(141,53,75,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        {/* Left — copy */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="mb-6 inline-flex w-fit items-center rounded-full border border-[#8d354b]/30 bg-[#8d354b]/8 px-3 py-1 text-xs font-medium text-[#8d354b]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#8d354b]" />
            Built for construction teams
          </motion.span>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-[#f5f0ed] sm:text-6xl">
            {headline.map((line, i) => (
              <motion.span
                key={line}
                className={`block ${i === 2 ? "text-[#8d354b]" : ""}`}
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
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            Pulse AI connects Owners, Consultants, and Contractors around a
            single source of project truth — documents, decisions, tasks, risks,
            and AI insights in one operational layer.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.45 }}
          >
            <PulseLinkButton
              href={skeletonAuthLinks.requestDemo}
              variant="primary"
              icon={<PulseIcon />}
            >
              Request Demo
            </PulseLinkButton>
            <PulseLinkButton
              href={skeletonAuthLinks.seePlatform}
              variant="secondary"
            >
              See Platform
            </PulseLinkButton>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            <div className="flex -space-x-2">
              {["O", "C", "K"].map((l, i) => (
                <div
                  key={l}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-800 text-[10px] font-semibold text-white dark:border-[#0e0c0c]"
                  style={{ zIndex: 3 - i }}
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-500">
              Trusted by 50+ UAE construction teams
            </p>
          </motion.div>
        </motion.div>

        {/* Right — hero image with float */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="relative w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {/* Glow ring behind image */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(141,53,75,0.18) 0%, transparent 70%)",
                filter: "blur(24px)",
                transform: "scale(0.9)",
              }}
            />
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0.3) 75%, transparent 90%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0.3) 75%, transparent 90%)",
              }}
            >
              <Image
                src="/assets/images/Hero%20reference.png"
                alt="Pulse AI command core connecting Owner, Consultant, and Contractor"
                width={1680}
                height={945}
                priority
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
