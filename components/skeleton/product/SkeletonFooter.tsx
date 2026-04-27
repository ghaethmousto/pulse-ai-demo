"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const navColumns: { headingKey: "platform" | "resources" | "company"; links: string[] }[] = [
  {
    headingKey: "platform",
    links: ["Overview", "Owner", "Consultant", "Contractor"],
  },
  {
    headingKey: "resources",
    links: ["Docs", "Changelog", "Case studies", "Security"],
  },
  {
    headingKey: "company",
    links: ["About", "Careers", "Press", "Legal"],
  },
];

const contactLines: { label: string; href: string | null }[] = [
  { label: "demo@pulse-ai.com", href: "mailto:demo@pulse-ai.com" },
  { label: "+971 50 381 6979", href: "tel:+971503816979" },
  { label: "Dubai · Abu Dhabi · Riyadh", href: null },
];

export function SkeletonFooter() {
  const t = useTranslations("skeleton.footer");
  return (
    <footer className="bg-neutral-950 text-neutral-300">
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
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-neutral-400">
              {t("tagline")}
            </p>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.headingKey}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white">
                {t(col.headingKey)}
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-neutral-400">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-white">
                      {l}
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
            <ul className="mt-4 space-y-2.5 text-xs text-neutral-400">
              {contactLines.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} className="transition hover:text-white">
                      {c.label}
                    </a>
                  ) : (
                    c.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center">
          <span>{t("credit")}</span>
          <span>{t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}
