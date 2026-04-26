"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { AlertTriangle, Sparkles } from "lucide-react";

export function ProblemSolution() {
  const t = useTranslations("landing");

  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 md:grid-cols-2 lg:px-8 lg:py-14">
        <Card index={0}>
          <IconTile tone="warning">
            <AlertTriangle className="size-[18px]" strokeWidth={1.6} />
          </IconTile>
          <h2 className="mt-5 text-[22px] font-bold leading-tight tracking-[-0.02em] text-foreground">
            {t("problemTitle")}
          </h2>
          <p className="mt-2.5 text-[14px] leading-[1.6] text-muted-foreground">
            {t("problemBody")}
          </p>
        </Card>

        <Card index={1}>
          <IconTile tone="wine">
            <Sparkles className="size-[18px]" strokeWidth={1.6} />
          </IconTile>
          <h2 className="mt-5 text-[22px] font-bold leading-tight tracking-[-0.02em] text-foreground">
            {t("solutionTitle")}
          </h2>
          <p className="mt-2.5 text-[14px] leading-[1.6] text-foreground/85">
            {t("solutionBody")}
          </p>
        </Card>
      </div>
    </section>
  );
}

function Card({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="card-hover-primary rounded-[10px] border border-border bg-card p-7"
    >
      {children}
    </motion.div>
  );
}

/**
 * IconTile — shared squircle for landing/dashboard card headers.
 * "wine" matches the new Pulse identity; "warning"/"info" use status tints.
 * One shape, one ring style, one shadow language.
 */
export function IconTile({
  tone = "wine",
  children,
}: {
  tone?: "wine" | "warning" | "info";
  children: React.ReactNode;
}) {
  const styles =
    tone === "warning"
      ? {
          background:
            "linear-gradient(180deg, rgba(184,113,42,0.16), rgba(184,113,42,0.06))",
          boxShadow: "inset 0 0 0 1px rgba(184,113,42,0.24)",
          color: "var(--status-warning)",
        }
      : tone === "info"
        ? {
            background:
              "linear-gradient(180deg, rgba(62,99,158,0.14), rgba(62,99,158,0.05))",
            boxShadow: "inset 0 0 0 1px rgba(62,99,158,0.22)",
            color: "var(--status-info)",
          }
        : {
            background:
              "linear-gradient(180deg, rgba(141,53,75,0.14), rgba(141,53,75,0.05))",
            boxShadow: "inset 0 0 0 1px rgba(141,53,75,0.22)",
            color: "var(--pulse-wine)",
          };
  return (
    <span
      aria-hidden
      className="inline-flex size-9 items-center justify-center rounded-md"
      style={styles}
    >
      {children}
    </span>
  );
}
