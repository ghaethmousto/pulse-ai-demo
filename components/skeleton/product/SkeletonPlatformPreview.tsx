"use client";

import { motion } from "motion/react";

const sidebarItems = [
  { label: "Overview", active: true },
  { label: "Documents", active: false },
  { label: "Decisions", active: false },
  { label: "Tasks", active: false },
  { label: "Risks", active: false },
  { label: "Submittals", active: false },
  { label: "Timeline", active: false },
  { label: "Intelligence", active: false },
];

const kpis = [
  { label: "Budget", value: "847M", unit: "AED", color: "#5aad7a", trend: "on track" },
  { label: "Schedule", value: "+2d", unit: "variance", color: "#d97706", trend: "at risk" },
  { label: "RFIs", value: "12", unit: "open", color: "#d97706", trend: "pending" },
  { label: "Risks", value: "4", unit: "high", color: "#8d354b", trend: "escalated" },
];

const feed = [
  { tag: "RFI · OPEN", tagColor: "#d97706", title: "RFI-124 — slab edge detail clarification", meta: "blocks 2 tasks · L4 east", dot: "#d97706" },
  { tag: "SUBMITTAL · APPROVED", tagColor: "#3f8a5c", title: "SB-88 cladding panels approved", meta: "procurement unblocked", dot: "#3f8a5c" },
  { tag: "SCHEDULE", tagColor: "#2563a6", title: "MEP rough-in wk-34 delayed +3d", meta: "3 mitigations proposed", dot: "#2563a6" },
  { tag: "RISK · WEATHER", tagColor: "#8d354b", title: "Wk-34 storm — pour at risk", meta: "crane ops escalated +6h", dot: "#8d354b" },
  { tag: "DECISION · APPROVED", tagColor: "#3f8a5c", title: "Façade vendor switch — Owner sign-off", meta: "6 docs linked · audit trail", dot: "#3f8a5c" },
];

const aiNotes = [
  { text: "RFI-124 blocks 3 downstream tasks on L4 east. Recommend escalation to Owner by EOD.", severity: "high" },
  { text: "Submittal SB-88 approved — procurement team should initiate PO immediately.", severity: "ok" },
  { text: "Weather risk wk-34: 68% chance of pour delay. 2 rescheduling options modelled.", severity: "med" },
];

export function SkeletonPlatformPreview() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8d354b]">
            The Platform
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-neutral-900 sm:text-4xl">
            One operational space.{" "}
            <span className="text-[#8d354b]">All project intelligence.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-500">
            Real-time decisions, risks, tasks, and AI insights — unified across
            Owner, Consultant, and Contractor.
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
            className="overflow-hidden rounded-2xl text-left shadow-2xl"
            style={{
              border: "1px solid rgba(141,53,75,0.18)",
              background: "#fbfaf8",
              boxShadow:
                "0 32px 64px -16px rgba(0,0,0,0.12), 0 0 0 1px rgba(141,53,75,0.05) inset",
            }}
          >
            {/* Window chrome */}
            <div
              className="flex items-center gap-2 border-b px-4 py-3"
              style={{ borderColor: "#ece6df", background: "#f5f0eb" }}
            >
              <div className="flex gap-1.5">
                {["#d56b80", "#e2a557", "#74b88f"].map((c, i) => (
                  <div key={i} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div
                className="mx-auto flex items-center gap-2 rounded-md px-3 py-1"
                style={{
                  background: "white",
                  border: "1px solid #ece6df",
                  fontSize: 11,
                  color: "#7a6f64",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#3f8a5c]" />
                pulse.ai/projects/al-reem-tower
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_280px]">
              {/* Sidebar */}
              <aside
                className="border-b lg:border-b-0 lg:border-r p-4"
                style={{ borderColor: "#ece6df", background: "#fbfaf8" }}
              >
                <div className="mb-5 flex items-center gap-2">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-md"
                    style={{ background: "#8d354b" }}
                  >
                    <span style={{ fontSize: 10, fontWeight: 700, color: "white" }}>P</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#1a1614" }}>Pulse</span>
                </div>
                <ul className="space-y-1">
                  {sidebarItems.map((s) => (
                    <li
                      key={s.label}
                      className="rounded-lg px-2.5 py-1.5"
                      style={{
                        fontSize: 11,
                        fontWeight: s.active ? 600 : 400,
                        color: s.active ? "#8d354b" : "#7a6f64",
                        background: s.active ? "rgba(141,53,75,0.08)" : "transparent",
                        borderLeft: s.active ? "2px solid #8d354b" : "2px solid transparent",
                        cursor: "pointer",
                      }}
                    >
                      {s.label}
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Main content */}
              <div className="p-5 overflow-hidden" style={{ background: "white" }}>
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontSize: 10, color: "#a89c8e", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                    Project · Al Reem Tower
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
                      LIVE
                    </span>
                    <span
                      className="rounded-full px-2 py-0.5"
                      style={{
                        fontSize: 9,
                        color: "#7a6f64",
                        background: "#f5f0eb",
                        border: "1px solid #ece6df",
                        fontWeight: 600,
                      }}
                    >
                      14 members
                    </span>
                  </div>
                </div>

                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1a1614", marginBottom: 16, letterSpacing: "-0.01em" }}>
                  Overview
                </h3>

                {/* KPI cards — text centered */}
                <div className="grid grid-cols-2 gap-2 mb-4 sm:grid-cols-4">
                  {kpis.map((k) => (
                    <div
                      key={k.label}
                      className="rounded-xl p-3 transition-all hover:-translate-y-0.5"
                      style={{
                        background: "#fbfaf8",
                        border: "1px solid #ece6df",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "#a89c8e", fontWeight: 600 }}>{k.label}</p>
                      <p style={{ fontSize: 22, fontWeight: 700, color: k.color, lineHeight: 1.2, marginTop: 6 }}>{k.value}</p>
                      <p style={{ fontSize: 9, color: "#a89c8e", marginTop: 4 }}>{k.unit}</p>
                    </div>
                  ))}
                </div>

                {/* Live feed — sticky notes / cards layout */}
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #ece6df", background: "#fbfaf8" }}>
                  <div
                    className="flex items-center gap-2 px-3 py-2"
                    style={{ borderBottom: "1px solid #ece6df", background: "#fbfaf8" }}
                  >
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "#3f8a5c" }}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "#7a6f64", fontWeight: 600 }}>
                      One reconciled view · Streaming
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 p-3 sm:grid-cols-2">
                    {feed.map((f, i) => {
                      const tilt = (i % 5) - 2; // -2..+2 degrees
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
                            borderTop: `3px solid ${f.tagColor}`,
                            borderRight: "1px solid rgba(0,0,0,0.04)",
                            borderBottom: "1px solid rgba(0,0,0,0.06)",
                            borderLeft: "1px solid rgba(0,0,0,0.04)",
                            boxShadow:
                              "0 1px 1px rgba(0,0,0,0.03), 0 4px 10px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.5) inset",
                          }}
                        >
                          {/* Pin dot */}
                          <span
                            className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full"
                            style={{ background: f.dot, boxShadow: `0 0 0 3px ${f.tagColor}22` }}
                          />
                          <p
                            style={{
                              fontSize: 9,
                              fontWeight: 700,
                              color: f.tagColor,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
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
                className="border-t lg:border-l lg:border-t-0 p-4"
                style={{ borderColor: "#ece6df", background: "#fbfaf8" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="flex h-5 w-5 items-center justify-center rounded-md"
                    style={{ background: "#8d354b" }}
                  >
                    <span style={{ fontSize: 9, fontWeight: 700, color: "white" }}>AI</span>
                  </div>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#7a6f64",
                    }}
                  >
                    Pulse Intelligence
                  </p>
                </div>
                <ul className="space-y-3">
                  {aiNotes.map((n, i) => (
                    <motion.li
                      key={n.text}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                      className="rounded-xl p-3"
                      style={{
                        background:
                          n.severity === "high"
                            ? "rgba(141,53,75,0.06)"
                            : n.severity === "ok"
                              ? "rgba(63,138,92,0.05)"
                              : "rgba(37,99,166,0.05)",
                        border: `1px solid ${
                          n.severity === "high"
                            ? "rgba(141,53,75,0.18)"
                            : n.severity === "ok"
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
                              n.severity === "high"
                                ? "#8d354b"
                                : n.severity === "ok"
                                  ? "#3f8a5c"
                                  : "#2563a6",
                          }}
                        />
                        <p style={{ fontSize: 11, color: "#3a3431", lineHeight: 1.55 }}>{n.text}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div
                  className="mt-4 rounded-xl px-3 py-2.5 cursor-pointer transition-colors hover:bg-[rgba(141,53,75,0.06)]"
                  style={{
                    background: "white",
                    border: "1px solid rgba(141,53,75,0.2)",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#a89c8e", marginBottom: 4, fontWeight: 600 }}>
                    Ask Pulse AI
                  </p>
                  <p style={{ fontSize: 11, color: "#a89c8e", fontStyle: "italic" }}>
                    What risks could delay wk-34 handover?
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
