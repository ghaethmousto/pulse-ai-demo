"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import {
  skeletonAuthLinks,
  skeletonNavLinks,
} from "@/components/skeleton/nav-links";
import { useLocale } from "@/components/providers/locale-provider";
import { PulseLinkButton, PulseIcon } from "@/components/ui/PulseButton";

export function SkeletonHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname() ?? "";
  const { theme, setTheme } = useTheme();
  const { locale, toggleLocale } = useLocale();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";
  const isActive = (href: string) => {
    if (href === "/skeleton/product") {
      return pathname === "/" || pathname.startsWith("/skeleton/product");
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        background: scrolled
          ? "linear-gradient(180deg, rgba(255,250,248,0.72) 0%, rgba(247,232,236,0.55) 60%, rgba(247,232,236,0) 100%)"
          : "linear-gradient(180deg, rgba(255,250,248,0.6) 0%, rgba(247,232,236,0.4) 60%, rgba(247,232,236,0) 100%)",
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        // No hard border — soft fade into page via mask
        WebkitMaskImage:
          "linear-gradient(180deg, black 0%, black 70%, rgba(0,0,0,0.6) 88%, transparent 100%)",
        maskImage:
          "linear-gradient(180deg, black 0%, black 70%, rgba(0,0,0,0.6) 88%, transparent 100%)",
        paddingBottom: 12,
        transition: "background 300ms ease",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/assets/pulse/Pulse%20-%20Red%20Rec%20Icon.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            aria-hidden
          />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-[#f5f0ed]">
              Pulse <span className="text-[#8d354b]">AI</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
              Project Intelligence
            </span>
          </div>
        </Link>

        {/* Nav with active indicator */}
        <nav className="relative hidden items-center gap-1 md:flex">
          {skeletonNavLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "text-[#8d354b]"
                    : "text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
                }`}
              >
                {link.label}
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
          {/* Theme toggle — animated icon swap */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="hidden h-8 w-8 items-center justify-center rounded-full border border-neutral-300/70 bg-white/40 text-neutral-700 backdrop-blur-md transition-all hover:border-[#8d354b]/40 hover:text-[#8d354b] sm:flex dark:border-neutral-700 dark:bg-neutral-900/40 dark:text-neutral-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mounted ? (isDark ? "moon" : "sun") : "idle"}
                initial={{ rotate: -45, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 45, opacity: 0, scale: 0.6 }}
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
            </AnimatePresence>
          </button>

          {/* Language toggle EN/AR — same circle treatment as theme */}
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Switch language"
            className="hidden h-8 w-8 items-center justify-center rounded-full border border-neutral-300/70 bg-white/40 text-[10px] font-bold tracking-wider text-neutral-700 backdrop-blur-md transition-all hover:border-[#8d354b]/40 hover:text-[#8d354b] sm:flex dark:border-neutral-700 dark:bg-neutral-900/40 dark:text-neutral-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={locale}
                initial={{ y: -8, opacity: 0, scale: 0.7 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 8, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {locale.toUpperCase()}
              </motion.span>
            </AnimatePresence>
          </button>

          <Link
            href={skeletonAuthLinks.signIn}
            className="hidden text-sm text-neutral-700 transition-colors hover:text-neutral-950 sm:inline dark:text-neutral-300 dark:hover:text-white"
          >
            Sign in
          </Link>

          {/* Premium primary button using new system */}
          <PulseLinkButton
            href={skeletonAuthLinks.requestDemo}
            variant="primary"
            icon={<PulseIcon />}
          >
            Request Demo
          </PulseLinkButton>
        </div>
      </div>
    </header>
  );
}
