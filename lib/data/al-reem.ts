import dataset from "@/demo-data/al-reem-tower.json";
import type { Locale, ProjectDataset } from "@/types/pulse";
import { pickLocale } from "@/lib/utils/pick-locale";

const data = dataset as unknown as ProjectDataset;

export function getDataset(): ProjectDataset {
  return data;
}

export function getProject() {
  return data.project;
}

export function getProjectName(locale: Locale): string {
  return pickLocale(data.project.name, locale);
}

export function getKpis() {
  return data.kpis;
}

export function getTimeline() {
  return data.timeline;
}

export function getRisks() {
  return data.risks;
}

export function getTasks() {
  return data.tasks;
}

export function getApprovals() {
  return data.approvals;
}

export function getReports() {
  return data.reports;
}

export function getAiSummary(locale: Locale): string {
  return pickLocale(data.aiSummary, locale);
}

export function formatAed(value: number, locale: Locale): string {
  if (value >= 1_000_000) {
    const millions = (value / 1_000_000).toLocaleString(locale === "ar" ? "ar-AE" : "en-US", {
      maximumFractionDigits: 2,
    });
    return locale === "ar" ? `${millions} م د.إ` : `AED ${millions}M`;
  }
  return locale === "ar"
    ? `${value.toLocaleString("ar-AE")} د.إ`
    : `AED ${value.toLocaleString("en-US")}`;
}

export function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(locale === "ar" ? "ar-AE" : "en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
