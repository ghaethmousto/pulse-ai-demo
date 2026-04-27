"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const navColumns: { headingKey: "platform" | "resources" | "company"; linksKey: "platformLinks" | "resourcesLinks" | "companyLinks" }[] = [
  { headingKey: "platform", linksKey: "platformLinks" },
  { headingKey: "resources", linksKey: "resourcesLinks" },
  { headingKey: "company", linksKey: "companyLinks" },
];

const contactLines: { value: string; href: string | null; isLtr: boolean }[] = [
  { value: "demo@pulse-ai.com", href: "mailto:demo@pulse-ai.com", isLtr: true },
  { value: "+971 50 381 6979", href: "tel:+971503816979", isLtr: true },
  { value: "office", href: null, isLtr: false },
];

export function SkeletonFooter() {
  const t = useTranslations("skeleton.footer");
  const platformLinks = t.raw("platformLinks") as string[];
  const resourcesLinks = t.raw("resourcesLinks") as string[];
  const companyLinks = t.raw("companyLinks") as string[];
  const linksByKey = { platformLinks, resourcesLinks, companyLinks };
  return (
    <footer className="bg-neutral-950 text-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-6">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/pulse/Pulse%20-%20Red%20Rec%20Icon.svg"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
                aria-hidden
              />
              <span className="text-sm font-semibold text-white">Pulse AI</span>
            </div>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-neutral-300">
              {t("tagline")}
            </p>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.headingKey}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white">
                {t(col.headingKey)}
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-neutral-300">
                {linksByKey[col.linksKey].map((label) => (
                  <li key={label}>
                    <a href="#" className="transition hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              {t("contact")}
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-neutral-300">
              {contactLines.map((c) => {
                const display = c.isLtr ? c.value : t("office");
                const inner = c.isLtr ? (
                  <span className="bidi-isolate inline-block">{display}</span>
                ) : (
                  display
                );
                return (
                  <li key={c.value}>
                    {c.href ? (
                      <a href={c.href} className="transition hover:text-white">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-neutral-800 pt-6 text-xs text-neutral-400 sm:flex-row sm:items-center">
          <span>{t("credit")}</span>
          <span>{t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}
