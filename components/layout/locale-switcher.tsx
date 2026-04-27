"use client";

import { useLocale, useTranslations } from "next-intl";

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
      title={t(labelKey)}
      aria-label={`${t("language")}: ${t(labelKey)}`}
      className={cn(
        "grid size-[30px] place-items-center rounded-full border border-border/80 bg-background/60 text-foreground/85 transition hover:bg-background hover:text-foreground dark:bg-white/[0.06] dark:hover:bg-white/[0.10]",
        className,
      )}
    >
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.04em] leading-none">
        {next.toUpperCase()}
      </span>
    </Link>
  );
}
