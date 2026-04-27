"use client";

import { useTranslations } from "next-intl";
import { SkeletonStepBody } from "./SkeletonStepBody";

type ToolStatus = "connected" | "connect";

interface Tool {
  short: string;
  name: string;
  caption: string;
  status: ToolStatus;
}

interface ToolGroupRow {
  short: string;
  name: string;
  caption: string;
}

const projectStatuses: ToolStatus[] = ["connected", "connected", "connected", "connect", "connect", "connect"];
const commsStatuses: ToolStatus[] = ["connect", "connect", "connect"];

const contractFiles = [
  { name: "Conditions of contract.pdf", size: "2.1 MB", parsing: true },
  { name: "Particular conditions.pdf", size: "892 KB", parsing: false },
  { name: "BOQ — signed.xlsx", size: "4.4 MB", parsing: false },
];

function ToolCard({ tool, connectedLabel, connectLabel }: { tool: Tool; connectedLabel: string; connectLabel: string }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-border bg-card p-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted text-xs font-mono bidi-isolate">
        {tool.short}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-tight bidi-isolate">{tool.name}</p>
        <p className="text-[10px] text-muted-foreground truncate">{tool.caption}</p>
      </div>
      {tool.status === "connected" ? (
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full border border-foreground bg-foreground text-[10px] text-background"
          aria-label={connectedLabel}
        >
          ✓
        </span>
      ) : (
        <span className="rounded-md border border-border bg-card px-2 py-1 text-[10px] text-foreground/80">
          {connectLabel}
        </span>
      )}
    </div>
  );
}

export function SkeletonConnectToolsStep() {
  const t = useTranslations("skeleton.addProject.connectTools");

  const projectGroup = t.raw("groups.projectTools") as ToolGroupRow[];
  const commsGroup = t.raw("groups.communication") as ToolGroupRow[];
  const projectTools: Tool[] = projectGroup.map((row, i) => ({
    ...row,
    status: projectStatuses[i] ?? "connect",
  }));
  const commsTools: Tool[] = commsGroup.map((row, i) => ({
    ...row,
    status: commsStatuses[i] ?? "connect",
  }));

  const extracts = t.raw("extractList") as string[];
  const seen = t.raw("seenStats") as { value: string; label: string }[];

  const permissionRows = [
    { key: "read" as const, on: true },
    { key: "mirror" as const, on: true },
    { key: "writeBack" as const, on: false },
    { key: "trainModels" as const, on: false },
  ];

  const projectConnectedCount = projectStatuses.filter((s) => s === "connected").length;

  const left = (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground">{t("intro")}</p>

      <section>
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {t("projectTools")}
          </p>
          <span className="text-[10px] text-muted-foreground bidi-iso">
            {t("connected", { n: projectConnectedCount, total: projectStatuses.length })}
          </span>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projectTools.map((tool) => (
            <ToolCard
              key={tool.short}
              tool={tool}
              connectedLabel={t("connected_short")}
              connectLabel={t("connect")}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {t("communication")}
          </p>
          <span className="text-[10px] text-muted-foreground bidi-iso">
            {t("connected", { n: 0, total: commsStatuses.length })}
          </span>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {commsTools.map((tool) => (
            <ToolCard
              key={tool.short}
              tool={tool}
              connectedLabel={t("connected_short")}
              connectLabel={t("connect")}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {t("contractPack")}
          </p>
          <span className="text-[10px] text-muted-foreground">{t("contractPackCaption")}</span>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[1fr_280px]">
          <div className="rounded-md border border-dashed border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted text-xs">
                ↑
              </span>
              <div>
                <p className="text-sm font-semibold">{t("drop")}</p>
                <p className="text-[10px] text-muted-foreground">{t("dropCaption")}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {contractFiles.map((f) => (
                <li
                  key={f.name}
                  className="flex items-center justify-between rounded border border-border bg-muted px-3 py-2 text-xs font-mono"
                >
                  <span className="text-foreground/80 bidi-isolate">{f.name}</span>
                  <span className="flex items-center gap-3 text-muted-foreground">
                    <span className="bidi-isolate">{f.size}</span>
                    <span className={f.parsing ? "text-foreground/80" : "text-muted-foreground"}>
                      {f.parsing ? `· ${t("parsing")}` : `✓ ${t("parsed")}`}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-border bg-muted p-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {t("extracts")}
            </p>
            <ul className="mt-3 space-y-2 text-xs text-foreground/80">
              {extracts.map((line) => (
                <li key={line}>· {line}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );

  const rail = (
    <>
      <div className="rounded-md border border-border bg-card p-4 lg:mt-[80px]">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {t("permissionsTitle")}
        </p>
        <ul className="mt-3 space-y-3">
          {permissionRows.map((p) => (
            <li key={p.key} className="flex items-start gap-3">
              <span className="min-w-[80px] text-xs font-semibold">
                {t(`permissions.${p.key}.label`)}
              </span>
              <span className="flex-1 text-xs text-muted-foreground">
                {t(`permissions.${p.key}.desc`)}
              </span>
              <span
                className={
                  p.on
                    ? "flex h-4 w-7 items-center justify-end rounded-full bg-foreground px-0.5"
                    : "flex h-4 w-7 items-center justify-start rounded-full bg-muted px-0.5"
                }
                aria-hidden
              >
                <span className="h-3 w-3 rounded-full bg-background" />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-md border border-border bg-card p-4">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {t("alreadySees")}
        </p>
        <ul className="mt-3 space-y-2">
          {seen.map((s) => (
            <li
              key={s.value}
              className="flex items-baseline justify-between gap-3 text-xs"
            >
              <span className="font-mono text-sm text-foreground bidi-isolate">{s.value}</span>
              <span className="text-end text-muted-foreground">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-md border border-dashed border-border bg-card p-4">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {t("missingTool")}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">{t("missingToolBody")}</p>
      </div>
    </>
  );

  return <SkeletonStepBody left={left} rail={rail} />;
}
