"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const tagColors = ["#d97706", "#3f8a5c", "#2563a6", "#8d354b", "#3f8a5c"];
const dotColors = ["#d97706", "#3f8a5c", "#2563a6", "#8d354b", "#3f8a5c"];
const kpiColors = ["#5aad7a", "#d97706", "#d97706", "#8d354b"];
const aiSeverities: ("high" | "ok" | "med")[] = ["high", "ok", "med"];

export function SkeletonPlatformPreview() {
  const t = useTranslations("skeleton.platformPreview");
  const sidebarItems = t.raw("sidebarItems") as string[];
  const kpis = t.raw("kpis") as {
    label: string;
    value: string;
    unit: string;
  }[];
  const feed = t.raw("feed") as {
    tag: string;
    title: string;
    meta: string;
  }[];
  const aiNotes = t.raw("aiNotes") as string[];

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center dark:invert dark:hue-rotate-180"
        style={{ backgroundImage: 'url("/assets/cards%20background/9.png")' }}
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
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8d354b]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            {t("titleLead")}{" "}
            <span className="text-[#8d354b]">{t("titleAccent")}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Platform mockup — light mode */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, rotateX: 8, y: 48 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ perspective: 1200 }}
        >
          <div
            className="overflow-hidden rounded-2xl text-start shadow-2xl bg-[#fbfaf8] dark:bg-[#181314]"
            style={{
              border: "1px solid rgba(141,53,75,0.18)",
              boxShadow:
                "0 32px 64px -16px rgba(0,0,0,0.20), 0 0 0 1px rgba(141,53,75,0.08) inset",
            }}
          >
            {/* Window chrome */}
            <div
              className="flex items-center gap-2 border-b px-4 py-3 bg-[#f5f0eb] dark:bg-[#221a1c]"
              style={{ borderColor: "rgba(141,53,75,0.16)" }}
            >
              <div className="flex gap-1.5">
                {["#d56b80", "#e2a557", "#74b88f"].map((c, i) => (
                  <div key={i} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div
                className="mx-auto flex items-center gap-2 rounded-md px-3 py-1 bg-white dark:bg-[#0e0c0c]"
                style={{
                  border: "1px solid rgba(141,53,75,0.18)",
                  fontSize: 11,
                  color: "var(--fg-tertiary, #7a6f64)",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#3f8a5c]" />
                <span className="bidi-isolate">{t("browserUrl")}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_280px]">
              {/* Sidebar */}
              <aside
                className="border-b lg:border-b-0 lg:border-r p-4 bg-[#fbfaf8] dark:bg-[#1a1314]"
                style={{ borderColor: "rgba(141,53,75,0.14)" }}
              >
                <div className="mb-5 flex items-center gap-2">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-md"
                    style={{ background: "#8d354b" }}
                  >
                    <span style={{ fontSize: 10, fontWeight: 700, color: "white" }}>P</span>
                  </div>
                  <span className="text-xs font-bold text-[#1a1614] dark:text-[#f5f0ed]">Pulse</span>
                </div>
                <ul className="space-y-1">
                  {sidebarItems.map((label, idx) => {
                    const active = idx === 0;
                    return (
                      <li
                        key={label}
                        className={`rounded-lg px-2.5 py-1.5 cursor-pointer ${
                          active
                            ? "text-[#8d354b] bg-[rgba(141,53,75,0.08)] border-s-2 border-[#8d354b]"
                            : "text-[#7a6f64] dark:text-[#a89c8e] border-s-2 border-transparent"
                        }`}
                        style={{
                          fontSize: 11,
                          fontWeight: active ? 600 : 400,
                        }}
                      >
                        {label}
                      </li>
                    );
                  })}
                </ul>
              </aside>

              {/* Main content */}
              <div className="p-5 overflow-hidden bg-white dark:bg-[#0e0c0c]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold text-[#a89c8e] dark:text-[#7a6f64]" style={{ letterSpacing: "0.1em" }}>
                    {t("projectLabel")}
                  </span>
                  <div className="flex items-center gap-2">
                    {/* Live badge */}
                    <span
                      className="flex items-center gap-1.5 rounded-full px-2 py-0.5"
                      style={{
                        background: "rgba(63,138,92,0.1)",
                        border: "1px solid rgba(63,138,92,0.25)",
                        fontSize: 9,
                        fontWeight: 700,
                        color: "#3f8a5c",
                        letterSpacing: "0.06em",
                      }}
                    >
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: "#3f8a5c" }}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {t("live")}
                    </span>
                    <span
                      className="rounded-full px-2 py-0.5 text-[#7a6f64] dark:text-[#a89c8e] bg-[#f5f0eb] dark:bg-[#221a1c]"
                      style={{
                        fontSize: 9,
                        border: "1px solid rgba(141,53,75,0.16)",
                        fontWeight: 600,
                      }}
                    >
                      {t("members")}
                    </span>
                  </div>
                </div>

                <h3 className="text-[22px] font-bold text-[#1a1614] dark:text-[#f5f0ed]" style={{ marginBottom: 16, letterSpacing: "-0.01em" }}>
                  {t("overview")}
                </h3>

                {/* KPI cards — text centered */}
                <div className="grid grid-cols-2 gap-2 mb-4 sm:grid-cols-4">
                  {kpis.map((k, idx) => (
                    <div
                      key={k.label}
                      className="rounded-xl p-3 transition-all hover:-translate-y-0.5 bg-[#fbfaf8] dark:bg-[#181314]"
                      style={{
                        border: "1px solid rgba(141,53,75,0.14)",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                        textAlign: "center",
                      }}
                    >
                      <p className="text-[#a89c8e] dark:text-[#7a6f64]" style={{ fontSize: 9, letterSpacing: "0.1em", fontWeight: 600 }}>{k.label}</p>
                      <p className="bidi-isolate" style={{ fontSize: 22, fontWeight: 700, color: kpiColors[idx], lineHeight: 1.2, marginTop: 6 }}>{k.value}</p>
                      <p className="text-[#a89c8e] dark:text-[#7a6f64]" style={{ fontSize: 9, marginTop: 4 }}>{k.unit}</p>
                    </div>
                  ))}
                </div>

                {/* Live feed — sticky notes / cards layout */}
                <div className="rounded-xl overflow-hidden bg-[#fbfaf8] dark:bg-[#181314]" style={{ border: "1px solid rgba(141,53,75,0.14)" }}>
                  <div
                    className="flex items-center gap-2 px-3 py-2 bg-[#fbfaf8] dark:bg-[#1a1314]"
                    style={{ borderBottom: "1px solid rgba(141,53,75,0.14)" }}
                  >
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "#3f8a5c" }}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <span className="text-[#7a6f64] dark:text-[#a89c8e]" style={{ fontSize: 9, letterSpacing: "0.1em", fontWeight: 600 }}>
                      {t("feedHeader")}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 p-3 sm:grid-cols-2">
                    {feed.map((f, i) => {
                      const tilt = (i % 5) - 2; // -2..+2 degrees
                      const tagColor = tagColors[i] ?? "#8d354b";
                      const dotColor = dotColors[i] ?? "#8d354b";
                      return (
                        <motion.div
                          key={f.title}
                          initial={{ opacity: 0, y: 12, rotate: tilt }}
                          whileInView={{ opacity: 1, y: 0, rotate: tilt * 0.6 }}
                          whileHover={{ rotate: 0, y: -2, scale: 1.02 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="relative rounded-lg p-3"
                          style={{
                            background: `linear-gradient(180deg, #fffaf3 0%, #fdf2e8 100%)`,
                            borderTop: `3px solid ${tagColor}`,
                            borderInlineEnd: "1px solid rgba(0,0,0,0.04)",
                            borderBottom: "1px solid rgba(0,0,0,0.06)",
                            borderInlineStart: "1px solid rgba(0,0,0,0.04)",
                            boxShadow:
                              "0 1px 1px rgba(0,0,0,0.03), 0 4px 10px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.5) inset",
                          }}
                        >
                          {/* Pin dot */}
                          <span
                            className="absolute end-2.5 top-2.5 h-1.5 w-1.5 rounded-full"
                            style={{ background: dotColor, boxShadow: `0 0 0 3px ${tagColor}22` }}
                          />
                          <p
                            style={{
                              fontSize: 9,
                              fontWeight: 700,
                              color: tagColor,
                              letterSpacing: "0.06em",
                              marginBottom: 4,
                            }}
                          >
                            {f.tag}
                          </p>
                          <p style={{ fontSize: 12, fontWeight: 600, color: "#1a1614", lineHeight: 1.35 }}>
                            {f.title}
                          </p>
                          <p style={{ fontSize: 10, color: "#7a6f64", marginTop: 4, lineHeight: 1.4 }}>
                            {f.meta}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Pulse Intelligence sidebar */}
              <aside
                className="border-t lg:border-s lg:border-t-0 p-4 bg-[#fbfaf8] dark:bg-[#1a1314]"
                style={{ borderColor: "rgba(141,53,75,0.14)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="flex h-5 w-5 items-center justify-center rounded-md"
                    style={{ background: "#8d354b" }}
                  >
                    <span style={{ fontSize: 9, fontWeight: 700, color: "white" }}>AI</span>
                  </div>
                  <p className="text-[#7a6f64] dark:text-[#a89c8e]"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {t("intelligenceLabel")}
                  </p>
                </div>
                <ul className="space-y-3">
                  {aiNotes.map((note, i) => (
                    <motion.li
                      key={note}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                      className="rounded-xl p-3"
                      style={{
                        background:
                          aiSeverities[i] === "high"
                            ? "rgba(141,53,75,0.06)"
                            : aiSeverities[i] === "ok"
                              ? "rgba(63,138,92,0.05)"
                              : "rgba(37,99,166,0.05)",
                        border: `1px solid ${
                          aiSeverities[i] === "high"
                            ? "rgba(141,53,75,0.18)"
                            : aiSeverities[i] === "ok"
                              ? "rgba(63,138,92,0.18)"
                              : "rgba(37,99,166,0.18)"
                        }`,
                      }}
                    >
                      <div className="flex items-start gap-2">
                        <span
                          className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{
                            background:
                              aiSeverities[i] === "high"
                                ? "#8d354b"
                                : aiSeverities[i] === "ok"
                                  ? "#3f8a5c"
                                  : "#2563a6",
                          }}
                        />
                        <p className="text-[#3a3431] dark:text-[#d4cfc8]" style={{ fontSize: 11, lineHeight: 1.55 }}>{note}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div
                  className="mt-4 rounded-xl px-3 py-2.5 cursor-pointer transition-colors hover:bg-[rgba(141,53,75,0.06)] bg-white dark:bg-[#0e0c0c]"
                  style={{
                    border: "1px solid rgba(141,53,75,0.2)",
                  }}
                >
                  <p className="text-[#a89c8e] dark:text-[#7a6f64]" style={{ fontSize: 10, marginBottom: 4, fontWeight: 600 }}>
                    {t("askPulse")}
                  </p>
                  <p className="text-[#a89c8e] dark:text-[#7a6f64]" style={{ fontSize: 11, fontStyle: "italic" }}>
                    {t("askPulseExample")}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
