"use client";

import { startTransition, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useLocale as useIntlLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import {
  skeletonAuthLinks,
  skeletonNavLinks,
} from "@/components/skeleton/nav-links";
import { useOptionalLocale } from "@/components/providers/locale-provider";
import { PulseLinkButton, PulseIcon } from "@/components/ui/PulseButton";

export type SkeletonHeaderMode = "skeleton" | "production";

interface SkeletonHeaderProps {
  /** "skeleton" preserves the existing /skeleton/* link tree and the
   *  client-state locale toggle. "production" routes the logo to
   *  /{locale}, swaps the locale toggle for a URL navigation, and
   *  reads the active locale from next-intl. */
  mode?: SkeletonHeaderMode;
}

export function SkeletonHeader({ mode = "skeleton" }: SkeletonHeaderProps = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname() ?? "";
  const { theme, setTheme } = useTheme();
  const skeletonCtx = useOptionalLocale();
  const intlLocale = useIntlLocale();
  const t = useTranslations("skeleton.nav");

  const isProduction = mode === "production";
  const locale = isProduction ? intlLocale : (skeletonCtx?.locale ?? intlLocale);
  const homeHref = isProduction ? `/${locale}` : "/skeleton/product";
  const toggleLocale = useCallback(() => {
    if (isProduction) {
      const next = locale === "en" ? "ar" : "en";
      const stripped = pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
      const target = stripped === "/" ? `/${next}` : `/${next}${stripped}`;
      router.push(target);
      return;
    }
    skeletonCtx?.toggleLocale();
  }, [isProduction, locale, pathname, router, skeletonCtx]);

  useEffect(() => {
    startTransition(() => setMounted(true));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";
  const isActive = (href: string) => {
    if (href === "/skeleton/product") {
      // Production landing (`/en`, `/ar`) and skeleton product both map to
      // the "Product" nav entry.
      if (isProduction) return pathname === `/${locale}` || pathname === "/";
      return pathname === "/" || pathname.startsWith("/skeleton/product");
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      data-scrolled={scrolled ? "true" : "false"}
      className={[
        "skeleton-header sticky top-0 z-40 w-full",
        "border-b border-neutral-900/10 dark:border-neutral-100/10",
        "bg-[rgba(255,255,255,0.86)] dark:bg-[rgba(10,8,8,0.88)]",
        "[backdrop-filter:blur(10px)_saturate(140%)]",
        "[-webkit-backdrop-filter:blur(10px)_saturate(140%)]",
        "transition-shadow",
        scrolled ? "shadow-[0_1px_2px_rgba(32,29,26,0.06)] dark:shadow-[0_1px_0_rgba(0,0,0,0.4)]" : "shadow-none",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={homeHref} className="flex items-center gap-2.5">
          <Image
            src="/assets/pulse/Pulse%20-%20Red%20Rec%20Icon.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            aria-hidden
          />
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-[#f5f0ed] bidi-isolate">
              Pulse <span className="text-[#8d354b]">AI</span>
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-500 leading-tight">
              {t("intelligence")}
            </span>
          </div>
        </Link>

        {/* Nav with active indicator */}
        <nav className="relative hidden items-center gap-1 md:flex">
          {skeletonNavLinks.map((link) => {
            const active = isActive(link.href);
            const navHref =
              isProduction && link.href === "/skeleton/product" ? homeHref : link.href;
            return (
              <Link
                key={link.key}
                href={navHref}
                className={`relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "text-[#8d354b] dark:text-[#e08aa0]"
                    : "text-neutral-800 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white"
                }`}
              >
                {t(link.key)}
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-10 rounded-md"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(141,53,75,0.12) 0%, rgba(141,53,75,0.05) 100%)",
                      border: "1px solid rgba(141,53,75,0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: theme, locale, sign in, request demo */}
        <div className="flex items-center gap-2.5">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-neutral-900/15 bg-white/60 text-neutral-700 transition-colors hover:border-[#8d354b]/40 hover:text-[#8d354b] sm:flex dark:border-neutral-100/15 dark:bg-white/[0.04] dark:text-neutral-200 dark:hover:text-[#e08aa0]"
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

          {/* Language toggle EN/AR */}
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Switch language"
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-neutral-900/15 bg-white/60 text-[10px] font-bold tracking-wider text-neutral-700 transition-colors hover:border-[#8d354b]/40 hover:text-[#8d354b] sm:flex dark:border-neutral-100/15 dark:bg-white/[0.04] dark:text-neutral-200 dark:hover:text-[#e08aa0]"
          >
            <span suppressHydrationWarning>{locale.toUpperCase()}</span>
          </button>

          <Link
            href={skeletonAuthLinks.signIn}
            className="hidden text-sm font-medium text-neutral-800 transition-colors hover:text-neutral-950 sm:inline dark:text-neutral-200 dark:hover:text-white"
          >
            {t("signIn")}
          </Link>

          {/* Premium primary button using new system */}
          <PulseLinkButton
            href={skeletonAuthLinks.requestDemo}
            variant="primary"
            icon={<PulseIcon />}
          >
            {t("requestDemo")}
          </PulseLinkButton>
        </div>
      </div>
    </header>
  );
}
