import { useTranslations } from "next-intl";

import { PulseLogo } from "@/components/brand/logo";

export function LandingFooter() {
  const t = useTranslations("landing.footer");

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <PulseLogo />
          <span className="text-sm text-muted-foreground">{t("tagline")}</span>
        </div>
        <p className="text-xs text-muted-foreground">{t("legal")}</p>
      </div>
    </footer>
  );
}
