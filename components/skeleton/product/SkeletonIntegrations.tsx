"use client";

import { motion } from "motion/react";

const tools = [
  { name: "Procore", category: "Project Mgmt" },
  { name: "Aconex", category: "Document Control" },
  { name: "Autodesk", category: "BIM & Design" },
  { name: "SAP", category: "Finance" },
  { name: "Primavera", category: "Scheduling" },
  { name: "Revit", category: "BIM" },
  { name: "SharePoint", category: "Documents" },
  { name: "Bluebeam", category: "Markup" },
  { name: "Slack", category: "Communication" },
  { name: "Teams", category: "Communication" },
  { name: "PowerBI", category: "Reporting" },
  { name: "Outlook", category: "Email" },
];

function ToolIcon({ name }: { name: string }) {
  const initials = name.slice(0, 2).toUpperCase();
  const colors: Record<string, string> = {
    Procore: "#f59e0b",
    Aconex: "#3b7ec8",
    Autodesk: "#5aad7a",
    SAP: "#3b82f6",
    Primavera: "#8b5cf6",
    Revit: "#ec4899",
    SharePoint: "#0078d4",
    Bluebeam: "#e11d48",
    Slack: "#e01e5a",
    Teams: "#6264a7",
    PowerBI: "#f2c811",
    Outlook: "#0078d4",
  };
  const bg = colors[name] ?? "#8d354b";
  return (
    <div
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white"
      style={{ background: bg, opacity: 0.85 }}
    >
      {initials}
    </div>
  );
}

export function SkeletonIntegrations() {
  return (
    <section className="border-b border-neutral-200 dark:border-neutral-800 bg-[#f9f7f5] dark:bg-[#080606]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8d354b]">
            Integrations
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-neutral-900 dark:text-[#f5f0ed] sm:text-4xl">
            Works with the tools{" "}
            <span className="text-[#8d354b]">already on site.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-neutral-500">
            Pulse connects to your existing stack — no rip-and-replace, no
            retraining. Just intelligence on top of what you already use.
          </p>
        </motion.div>

        {/* Bordered container with subtle inner glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl p-5 sm:p-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(247,241,236,0.4) 100%)",
            border: "1px solid rgba(141,53,75,0.18)",
            boxShadow:
              "0 1px 0 rgba(255,255,255,1) inset, 0 4px 20px -8px rgba(141,53,75,0.12), 0 1px 4px rgba(32,29,26,0.04)",
          }}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.04,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -3 }}
                className="group flex cursor-default items-center gap-3 rounded-xl bg-white px-4 py-3 transition-all"
                style={{
                  border: "1px solid #ece6df",
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(32,29,26,0.03)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#8d354b";
                  e.currentTarget.style.boxShadow =
                    "0 1px 0 rgba(255,255,255,1) inset, 0 2px 4px rgba(141,53,75,0.14), 0 8px 18px -4px rgba(141,53,75,0.22)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ece6df";
                  e.currentTarget.style.boxShadow =
                    "0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(32,29,26,0.03)";
                }}
              >
                <ToolIcon name={tool.name} />
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-[#f5f0ed]">
                    {tool.name}
                  </p>
                  <p className="text-[10px] text-neutral-400 dark:text-neutral-500">
                    {tool.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* "And more" row */}
        <motion.p
          className="mt-6 text-center text-xs text-neutral-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          + REST API and webhooks for custom integrations
        </motion.p>
      </div>
    </section>
  );
}
