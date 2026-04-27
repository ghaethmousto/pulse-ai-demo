"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { TiltCard } from "@/components/ui/TiltCard";
import { PulseLinkButton, PortalArrow } from "@/components/ui/PulseButton";

/* ─── Mini Dashboard Mockups ─────────────────────────────── */

interface OwnerDashboardLabels {
  label: string;
  live: string;
  spent: string;
  budget: string;
  schedule: string;
  rfis: string;
  onTrack: string;
  variance: string;
  pending: string;
  generateReport: string;
  pendingCount: string;
}

function OwnerDashboard({ labels }: { labels: OwnerDashboardLabels }) {
  return (
    <div
      className="relative overflow-hidden rounded-t-2xl"
      style={{
        background: "linear-gradient(135deg, #130f0f 0%, #1a1015 100%)",
        padding: "20px 20px 16px",
        height: 240,
      }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#8d354b]" />
          <span style={{ fontSize: 10, color: "rgba(245,240,237,0.5)", letterSpacing: "0.1em" }}>
            {labels.label}
          </span>
        </div>
        <span style={{ fontSize: 9, color: "rgba(245,240,237,0.3)" }}>{labels.live}</span>
      </div>

      {/* Budget ring + KPI row */}
      <div className="flex items-center gap-4 mb-4">
        {/* Ring gauge */}
        <div className="relative flex-shrink-0" style={{ width: 72, height: 72 }}>
          <svg viewBox="0 0 72 72" style={{ width: 72, height: 72, transform: "rotate(-90deg)" }}>
            <circle cx="36" cy="36" r="28" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
            <circle cx="36" cy="36" r="28" fill="none" stroke="#8d354b" strokeWidth="6"
              strokeDasharray={`${2 * Math.PI * 28 * 0.72} ${2 * Math.PI * 28}`}
              strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span style={{ fontSize: 13, fontWeight: 700, color: "#f5f0ed", lineHeight: 1 }}>72%</span>
            <span style={{ fontSize: 8, color: "rgba(245,240,237,0.4)", letterSpacing: "0.05em" }}>{labels.spent}</span>
          </div>
        </div>

        {/* KPI chips */}
        <div className="flex flex-col gap-2 flex-1">
          {[
            { label: labels.budget, value: "847M", unit: "AED", ok: true },
            { label: labels.schedule, value: "+2d", unit: labels.variance, ok: false },
            { label: labels.rfis, value: "12", unit: labels.pending, ok: false },
          ].map((k) => (
            <div key={k.label}
              className="flex items-center justify-between rounded-lg px-3 py-1.5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontSize: 10, color: "rgba(245,240,237,0.45)" }}>{k.label}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: k.ok ? "#5aad7a" : "#f5f0ed" }}>
                <span className="bidi-isolate">{k.value}</span>{" "}
                <span style={{ fontSize: 9, fontWeight: 400, color: "rgba(245,240,237,0.35)" }}>{k.unit}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Board report button mockup */}
      <div className="flex gap-2">
        <div className="flex-1 rounded-lg py-2 text-center"
          style={{ background: "#8d354b", fontSize: 10, fontWeight: 600, color: "white", letterSpacing: "0.04em" }}>
          {labels.generateReport}
        </div>
        <div className="rounded-lg px-3 py-2"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 10, color: "rgba(245,240,237,0.5)" }}>
          {labels.pendingCount}
        </div>
      </div>
    </div>
  );
}

interface ConsultantDashboardLabels {
  label: string;
  reviewedCount: string;
  items: { id: string; title: string; status: string }[];
}

function ConsultantDashboard({ labels }: { labels: ConsultantDashboardLabels }) {
  const statusColors: Record<string, string> = {
    Open: "#f59e0b",
    Reviewed: "#5aad7a",
    Closed: "rgba(245,240,237,0.3)",
    "مفتوح": "#f59e0b",
    "مراجَع": "#5aad7a",
    "مغلق": "rgba(245,240,237,0.3)",
  };
  return (
    <div
      className="relative overflow-hidden rounded-t-2xl"
      style={{
        background: "linear-gradient(135deg, #0d1117 0%, #111820 100%)",
        padding: "20px 20px 16px",
        height: 240,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#3b7ec8]" />
          <span style={{ fontSize: 10, color: "rgba(245,240,237,0.5)", letterSpacing: "0.1em" }}>
            {labels.label}
          </span>
        </div>
        <span style={{ fontSize: 9, color: "rgba(245,240,237,0.3)" }} className="bidi-isolate">{labels.reviewedCount}</span>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="h-1.5 w-full rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div className="h-1.5 rounded-full" style={{ width: "78%", background: "linear-gradient(90deg, #3b7ec8 0%, #5aad7a 100%)" }} />
        </div>
      </div>

      {/* RFI rows */}
      <div className="flex flex-col gap-1.5">
        {labels.items.map((r) => {
          const c = statusColors[r.status] ?? "#f59e0b";
          return (
          <div key={r.id}
            className="flex items-center justify-between rounded-lg px-3 py-2"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <span style={{ fontSize: 9, fontWeight: 600, color: "#3b7ec8", letterSpacing: "0.06em" }} className="bidi-isolate">{r.id}</span>
              <p style={{ fontSize: 10, color: "rgba(245,240,237,0.6)", marginTop: 1, lineHeight: 1.2 }}>{r.title}</p>
            </div>
            <span
              className="rounded-full px-2 py-0.5"
              style={{ fontSize: 9, fontWeight: 600, color: c, background: `${c}18`, border: `1px solid ${c}30`, letterSpacing: "0.05em" }}>
              {r.status}
            </span>
          </div>
        );})}
      </div>
    </div>
  );
}

interface ContractorDashboardLabels {
  label: string;
  fieldLog: string;
  items: { label: string }[];
}

function ContractorDashboard({ labels }: { labels: ContractorDashboardLabels }) {
  const tasks = [
    { label: labels.items[0]?.label ?? "", pct: 100, done: true },
    { label: labels.items[1]?.label ?? "", pct: 65, done: false },
    { label: labels.items[2]?.label ?? "", pct: 38, done: false },
    { label: labels.items[3]?.label ?? "", pct: 20, done: false },
  ];
  return (
    <div
      className="relative overflow-hidden rounded-t-2xl"
      style={{
        background: "linear-gradient(135deg, #0d1309 0%, #111a0f 100%)",
        padding: "20px 20px 16px",
        height: 240,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#5aad7a]" />
          <span style={{ fontSize: 10, color: "rgba(245,240,237,0.5)", letterSpacing: "0.1em" }}>
            {labels.label}
          </span>
        </div>
        <span
          className="rounded-full px-2 py-0.5"
          style={{ fontSize: 9, fontWeight: 600, color: "#5aad7a", background: "rgba(90,173,122,0.12)", border: "1px solid rgba(90,173,122,0.25)" }}>
          {labels.fieldLog}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {tasks.map((t) => (
          <div key={t.label}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-4 w-4 items-center justify-center rounded"
                  style={{ background: t.done ? "#5aad7a" : "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  {t.done && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span style={{ fontSize: 10, color: t.done ? "rgba(245,240,237,0.35)" : "rgba(245,240,237,0.65)", textDecoration: t.done ? "line-through" : "none" }}>
                  {t.label}
                </span>
              </div>
              <span style={{ fontSize: 9, fontWeight: 600, color: t.done ? "#5aad7a" : "rgba(245,240,237,0.45)" }} className="bidi-isolate">{t.pct}%</span>
            </div>
            <div className="h-1 w-full rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div
                className="h-1 rounded-full transition-all"
                style={{
                  width: `${t.pct}%`,
                  background: t.done ? "#5aad7a" : "linear-gradient(90deg, rgba(90,173,122,0.7) 0%, #5aad7a 100%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Component ───────────────────────────────────────────── */

export function SkeletonRolePerspectives() {
  const t = useTranslations("skeleton.rolePerspectives");
  const tOwner = useTranslations("skeleton.rolePerspectives.owner");
  const tConsultant = useTranslations("skeleton.rolePerspectives.consultant");
  const tContractor = useTranslations("skeleton.rolePerspectives.contractor");

  const ownerBullets = tOwner.raw("bullets") as string[];
  const consultantBullets = tConsultant.raw("bullets") as string[];
  const contractorBullets = tContractor.raw("bullets") as string[];

  const roles = [
    {
      title: tOwner("title"),
      label: tOwner("label"),
      icon: "◆",
      iconColor: "#8d354b",
      iconBg: "rgba(141,53,75,0.12)",
      iconBorder: "rgba(141,53,75,0.25)",
      bullets: ownerBullets,
      cta: tOwner("cta"),
      Dashboard: () => (
        <OwnerDashboard
          labels={{
            label: tOwner("dashboard.label"),
            live: tOwner("dashboard.live"),
            spent: tOwner("dashboard.spent"),
            budget: tOwner("dashboard.budget"),
            schedule: tOwner("dashboard.schedule"),
            rfis: tOwner("dashboard.rfis"),
            onTrack: tOwner("dashboard.onTrack"),
            variance: tOwner("dashboard.variance"),
            pending: tOwner("dashboard.pending"),
            generateReport: tOwner("dashboard.generateReport"),
            pendingCount: tOwner("dashboard.pendingCount"),
          }}
        />
      ),
      accentBorder: "rgba(141,53,75,0.3)",
      accentGlow: "rgba(141,53,75,0.12)",
    },
    {
      title: tConsultant("title"),
      label: tConsultant("label"),
      icon: "◈",
      iconColor: "#3b7ec8",
      iconBg: "rgba(59,126,200,0.12)",
      iconBorder: "rgba(59,126,200,0.25)",
      bullets: consultantBullets,
      cta: tConsultant("cta"),
      Dashboard: () => (
        <ConsultantDashboard
          labels={{
            label: tConsultant("dashboard.label"),
            reviewedCount: tConsultant("dashboard.reviewedCount"),
            items: tConsultant.raw("dashboard.items") as {
              id: string;
              title: string;
              status: string;
            }[],
          }}
        />
      ),
      accentBorder: "rgba(59,126,200,0.3)",
      accentGlow: "rgba(59,126,200,0.08)",
    },
    {
      title: tContractor("title"),
      label: tContractor("label"),
      icon: "◉",
      iconColor: "#5aad7a",
      iconBg: "rgba(90,173,122,0.12)",
      iconBorder: "rgba(90,173,122,0.25)",
      bullets: contractorBullets,
      cta: tContractor("cta"),
      Dashboard: () => (
        <ContractorDashboard
          labels={{
            label: tContractor("dashboard.label"),
            fieldLog: tContractor("dashboard.fieldLog"),
            items: tContractor.raw("dashboard.items") as { label: string }[],
          }}
        />
      ),
      accentBorder: "rgba(90,173,122,0.3)",
      accentGlow: "rgba(90,173,122,0.08)",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-[#f9f7f5] dark:bg-[#080606]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center dark:invert dark:hue-rotate-180"
        style={{ backgroundImage: 'url("/assets/cards%20background/7.png")' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-white/72 dark:bg-black/65"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-neutral-900 dark:text-[#f5f0ed] sm:text-4xl">
            {t("title1")}{" "}
            <span className="text-[#8d354b]">{t("title2")}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {roles.map((role, i) => {
            const { Dashboard } = role;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex h-full flex-col"
              >
                <TiltCard
                  tiltFactor={12}
                  perspective={900}
                  glareIntensity={0.28}
                  borderRadius={20}
                  className="flex flex-col rounded-2xl"
                  hoverScale={1.03}
                >
                  <div
                    className="rounded-2xl border bg-white dark:bg-neutral-950 overflow-hidden flex flex-col h-full"
                    style={{ borderColor: role.accentBorder }}
                  >
                    {/* Mini dashboard at top */}
                    <Dashboard />

                    {/* Card body */}
                    <div className="flex flex-col gap-0 p-6 flex-1">
                      {/* Role badge + title */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold"
                          style={{
                            color: role.iconColor,
                            background: role.iconBg,
                            border: `1px solid ${role.iconBorder}`,
                          }}
                        >
                          {role.icon}
                        </div>
                        <div>
                          <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", color: role.iconColor }}>
                            {role.label}
                          </p>
                          <h3 className="text-base font-semibold text-neutral-900 dark:text-[#f5f0ed]">
                            {role.title}
                          </h3>
                        </div>
                      </div>

                      {/* Feature list */}
                      <ul className="space-y-2 mb-6">
                        {role.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"
                          >
                            <span
                              className="flex h-1.5 w-1.5 flex-shrink-0 rounded-full"
                              style={{ background: role.iconColor }}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto">
                        <PulseLinkButton
                          href="#"
                          variant="outline"
                          trailingIcon={<PortalArrow />}
                        >
                          {role.cta}
                        </PulseLinkButton>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
