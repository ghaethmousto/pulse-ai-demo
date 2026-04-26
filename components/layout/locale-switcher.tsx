"use client";

import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";

import { Link, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const current = useLocale();
  const pathname = usePathname();
  const t = useTranslations("common");
  const next = locales.find((l) => l !== current) ?? "en";
  const labelKey = next === "ar" ? "arabic" : "english";

  return (
    <Link
      href={pathname}
      locale={next}
      aria-label={`${t("language")}: ${t(labelKey)}`}
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-medium text-foreground/80 shadow-pulse-card transition hover:text-foreground hover:bg-accent",
        className,
      )}
    >
      <Languages className="size-4" aria-hidden />
      <span className="font-mono text-xs uppercase tracking-[0.2em]">{next}</span>
    </Link>
  );
}
