"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { PulseLogo } from "@/components/brand/logo";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function LandingNav() {
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-5 lg:px-8">
        <Link href="/" aria-label="Pulse AI">
          <PulseLogo />
        </Link>
        <nav className="ms-6 hidden items-center gap-6 text-sm text-foreground/70 lg:flex">
          <Link href="/dashboard" className="transition hover:text-foreground">
            {tNav("dashboard")}
          </Link>
          <Link href="/dashboard" className="transition hover:text-foreground">
            {tNav("pulse")}
          </Link>
        </nav>
        <div className="ms-auto flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          <Link
            href="/dashboard"
            className="hidden h-9 items-center rounded-full bg-wine px-4 text-sm font-medium text-white shadow-pulse-wine transition hover:bg-wine-light sm:inline-flex"
          >
            {tCommon("explorePlatform")}
          </Link>
        </div>
      </div>
    </header>
  );
}
