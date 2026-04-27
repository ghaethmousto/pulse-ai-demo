"use client";

import { startTransition, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import {
  skeletonAuthLinks,
  skeletonNavLinks,
} from "@/components/skeleton/nav-links";
import { useLocale } from "@/components/providers/locale-provider";
import { PulseLinkButton } from "@/components/ui/PulseButton";

export function SkeletonPlatformHeader() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { locale, toggleLocale } = useLocale();
  const t = useTranslations("skeleton.nav");

  useEffect(() => {
    startTransition(() => setMounted(true));
  }, []);

  const isDark = theme === "dark";

  return (
    <header className="w-full border-b border-border bg-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/pulse/Pulse%20-%20Red%20Rec%20Icon.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            aria-hidden
          />
          <span className="text-sm font-semibold tracking-wide text-foreground">
            Pulse <span className="text-muted-foreground">{t("intelligence")}</span>
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {skeletonNavLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm text-foreground/70 transition hover:text-foreground"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground/70 transition hover:border-wine/40 hover:text-wine sm:flex"
          >
            <motion.span
              key={mounted ? (isDark ? "moon" : "sun") : "idle"}
              initial={{ rotate: -45, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.22 }}
              className="flex"
            >
              {mounted && isDark ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              )}
            </motion.span>
          </button>

          {/* Locale toggle */}
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Switch language"
            className="hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-[10px] font-bold tracking-wider text-foreground/70 transition hover:border-wine/40 hover:text-wine sm:flex"
          >
            <span suppressHydrationWarning>{locale.toUpperCase()}</span>
          </button>

          <Link
            href={skeletonAuthLinks.signIn}
            className="hidden text-sm text-foreground/70 transition hover:text-foreground sm:inline"
          >
            {t("signIn")}
          </Link>

          <PulseLinkButton href={skeletonAuthLinks.requestDemo} variant="primary">
            {t("requestDemo")}
          </PulseLinkButton>
        </div>
      </div>
    </header>
  );
}
