"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { SkeletonFooter } from "@/components/skeleton/product/SkeletonFooter";
import { SkeletonHeader } from "@/components/skeleton/product/SkeletonHeader";
import { SkeletonTrustedLogos } from "@/components/skeleton/product/SkeletonTrustedLogos";

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SkeletonHeader />
      <main className="flex-1">{children}</main>
      <SkeletonFooter />
    </div>
  );
}

function LogoStrip() {
  return <SkeletonTrustedLogos />;
}

function CTASection() {
  const t = useTranslations("skeleton.ctaBecomeStory");
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-2xl bg-neutral-950 px-6 py-8 text-white border border-neutral-800">
        <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-400">
          {t("eyebrow")}
        </p>
        <div className="mt-2 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <h2 className="text-2xl font-semibold">{t("title")}</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/skeleton/contact"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-neutral-100"
            >
              {t("request")}
            </Link>
            <Link
              href="/skeleton/contact"
              className="rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-white transition hover:border-white"
            >
              {t("talk")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ label }: { label: string }) {
  return (
    <div className="mt-5 flex h-36 items-center justify-center rounded-md border border-dashed border-border bg-muted text-xs text-muted-foreground">
      {label}
    </div>
  );
}

/* Solutions page card backgrounds — index-mapped to outcome strip
   cells (Owner / Consultant / Contractor) and to per-role preview
   tiles (Owner brief / RFI cycle / Tower B). */
const SOLUTIONS_OUTCOME_BG = [
  "/assets/cards%20background/1-2.png",
  "/assets/cards%20background/2.png",
  "/assets/cards%20background/3.png",
];
const SOLUTIONS_PREVIEW_BG = [
  "/assets/cards%20background/Solutions/2.png",
  "/assets/cards%20background/Solutions/3.png",
  "/assets/cards%20background/Solutions/4.png",
];

export function SkeletonResourcesPage() {
  const t = useTranslations("skeleton.resources");
  const layers = t.raw("layers") as {
    n: string;
    title: string;
    body: string;
    visual: string;
  }[];
  return (
    <PageShell>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {t("eyebrow")}
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            {t("h1")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <LogoStrip />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {layers.map((layer) => (
            <article
              key={layer.title}
              className="rounded-md border border-border bg-card p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground bidi-isolate">
                  {layer.n}
                </span>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                  {t("featureLabel")}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-semibold">{layer.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{layer.body}</p>
              <FeatureVisual label={layer.visual} />
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {t("rolesEyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold">{t("rolesTitle")}</h2>
        <div className="mt-8 overflow-hidden rounded-md border border-border bg-card">
          <table className="w-full text-start text-sm">
            <thead className="border-b border-border text-[10px] uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-start">{t("table.surface")}</th>
                <th className="px-4 py-3 text-start">{t("table.owner")}</th>
                <th className="px-4 py-3 text-start">{t("table.consultant")}</th>
                <th className="px-4 py-3 text-start">{t("table.contractor")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs text-foreground/70">
              {layers.map((layer) => (
                <tr key={layer.title}>
                  <td className="px-4 py-3 font-medium text-foreground">
                    {layer.title}
                  </td>
                  <td className="px-4 py-3">{t("table.ownerUsage")}</td>
                  <td className="px-4 py-3">{t("table.consultantUsage")}</td>
                  <td className="px-4 py-3">{t("table.contractorUsage")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}

export function SkeletonSolutionsPage() {
  const t = useTranslations("skeleton.solutions");
  const chips = t.raw("chips") as string[];
  const outcomes = t.raw("outcomes") as { label: string; value: string; caption: string }[];
  const sections = t.raw("sections") as {
    tag: string;
    title: string;
    body: string;
    cta: string;
    visualTitle: string;
    chips: string[];
  }[];
  const lensesShort = t.raw("lensesShort") as string[];

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border bg-card">
        {/* Cinematic backdrop image */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("/assets/cards%20background/Solutions/1.png")',
          }}
        />
        {/* Readability wash — light in light mode, dark in dark mode */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-white/55 dark:bg-black/65"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {t("eyebrow")}
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            {t("h1")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
            {t("subtitle")}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border bg-card/80 px-3 py-1 text-foreground/80 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 overflow-hidden rounded-md border border-border bg-card md:grid-cols-3">
          {outcomes.map((o, i) => (
            <div
              key={o.label}
              className="relative overflow-hidden border-border p-6 md:border-e last:md:border-e-0"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${SOLUTIONS_OUTCOME_BG[i] ?? ""}")`,
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-white/72 dark:bg-black/68"
              />
              <div className="relative">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {o.label}
                </p>
                <p className="mt-2 text-4xl font-semibold bidi-isolate">{o.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{o.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.tag} className="border-t border-border">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-wine">
                {section.tag}
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-5 max-w-xl text-sm text-muted-foreground">
                {section.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {section.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border bg-card px-2 py-1 text-[10px] text-foreground/80"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/skeleton/contact"
                  className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background"
                >
                  {section.cta}
                </Link>
                <Link
                  href="/skeleton/contact"
                  className="rounded-md border border-border px-4 py-2 text-sm font-medium"
                >
                  {t("ctaBookDemo")}
                </Link>
              </div>
            </div>
            <div className="rounded-md border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{section.visualTitle}</h3>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                  {t("liveView")}
                </span>
              </div>
              <div
                className="relative mt-5 h-36 overflow-hidden rounded-md border border-border"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${SOLUTIONS_PREVIEW_BG[i] ?? ""}")`,
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-white/30 dark:bg-black/40"
                />
                <div className="relative flex h-full items-center justify-center text-xs text-muted-foreground/80">
                  {t("previewLabel")}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {section.chips.slice(0, 2).map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-muted px-2 py-1 text-[10px] text-foreground/80"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {t("whyEyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold">{t("whyTitle")}</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {lensesShort.map((text) => (
            <div
              key={text}
              className="rounded-md border border-dashed border-border bg-card p-5 text-sm"
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}

export function SkeletonCustomersPage() {
  const t = useTranslations("skeleton.customers");
  const outcomes = t.raw("outcomes") as { value: string; label: string }[];
  const stories = t.raw("stories") as { company: string; title: string; metric: string }[];
  const kpis = t.raw("kpis") as { value: string; label: string }[];
  const quotes = t.raw("quotes") as string[];

  return (
    <PageShell>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
            {t("h1")}
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <article className="grid grid-cols-1 overflow-hidden rounded-md border border-border bg-card lg:grid-cols-[1.4fr_1fr]">
          <div className="p-8">
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground bidi-iso">
              {t("featuredEyebrow")}
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold">
              {t("featuredTitle")}
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
              {t("featuredBody")}
            </p>
            <Link
              href="/skeleton/contact"
              className="mt-6 inline-block rounded-md bg-wine px-4 py-2 text-sm font-medium text-white transition hover:bg-wine-light"
            >
              {t("readCaseStudy")}
            </Link>
          </div>
          <div className="border-t border-border bg-muted p-8 lg:border-s lg:border-t-0">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {t("outcomeLabel")}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-5">
              {outcomes.map((o) => (
                <div key={o.label}>
                  <p className="text-3xl font-semibold bidi-isolate">{o.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{o.label}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-8 text-sm italic text-foreground/70">
              &laquo;{t("quote")}&raquo;
            </blockquote>
          </div>
        </article>
      </section>

      <LogoStrip />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {t("moreEyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-semibold">{t("moreTitle")}</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.company}
              className="rounded-md border border-border bg-card"
            >
              <FeatureVisual label={`[ ${t("storyImage")} ]`} />
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground bidi-isolate">
                  {story.company}
                </p>
                <h3 className="mt-2 text-sm font-semibold">{story.title}</h3>
                <p className="mt-5 text-2xl font-semibold text-wine bidi-isolate">
                  {story.metric}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-md border border-border bg-card md:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="border-border p-6 md:border-e last:md:border-e-0">
              <p className="text-3xl font-semibold bidi-isolate">{kpi.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{kpi.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {t("wordsEyebrow")}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {quotes.map((quote) => (
            <blockquote
              key={quote}
              className="rounded-md border border-dashed border-border bg-card p-6 text-sm text-foreground/80"
            >
              &laquo;{quote}&raquo;
            </blockquote>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}

export function SkeletonContactPage() {
  const t = useTranslations("skeleton.contact");
  const fieldKeys = ["name", "email", "company", "role", "projectSize"] as const;
  const contactCards: { value: string; isLtr: boolean }[] = [
    { value: "demo@pulse-ai.com", isLtr: true },
    { value: "+971 50 381 6979", isLtr: true },
    { value: t("office"), isLtr: false },
  ];

  return (
    <PageShell>
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-[1fr_440px]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
              {t("h1")}
            </h1>
            <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
              {t("subtitle")}
            </p>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm md:grid-cols-3">
              {contactCards.map((card) => (
                <div
                  key={card.value}
                  className="rounded-md border border-border bg-muted p-4 text-foreground/80"
                >
                  {card.isLtr ? (
                    <span className="bidi-isolate inline-block">{card.value}</span>
                  ) : (
                    card.value
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-border bg-muted p-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              {t("demoRequest")}
            </p>
            <div className="mt-5 space-y-3">
              {fieldKeys.map((field) => (
                <div
                  key={field}
                  className="rounded-md border border-dashed border-border bg-card px-3 py-3 text-sm text-muted-foreground"
                >
                  {t(`fields.${field}`)}
                </div>
              ))}
              <div className="h-28 rounded-md border border-dashed border-border bg-card px-3 py-3 text-sm text-muted-foreground">
                {t("fields.message")}
              </div>
            </div>
            <Link
              href="mailto:demo@pulse-ai.com"
              className="mt-5 block rounded-md bg-foreground px-4 py-3 text-center text-sm font-medium text-background transition hover:opacity-90"
            >
              {t("submit")}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { titleKey: "forOwners" as const, bodyKey: "forOwnersBody" as const },
            { titleKey: "forConsultants" as const, bodyKey: "forConsultantsBody" as const },
            { titleKey: "forContractors" as const, bodyKey: "forContractorsBody" as const },
          ].map((item) => (
            <div
              key={item.titleKey}
              className="rounded-md border border-border bg-card p-6"
            >
              <h2 className="text-lg font-semibold">{t(item.titleKey)}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t(item.bodyKey)}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
