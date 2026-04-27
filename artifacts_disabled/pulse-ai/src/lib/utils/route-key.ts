import type { Locale } from "@/types/pulse";

export type RouteKey =
  | "landing"
  | "dashboard"
  | "projects"
  | "pulse"
  | "tasks"
  | "approvals"
  | "reports"
  | "settings";

export function routeKeyFromPath(pathname: string, locale: Locale): RouteKey {
  const stripped = pathname.replace(new RegExp(`^/${locale}`), "") || "/";
  const first = stripped.split("/").filter(Boolean)[0];
  switch (first) {
    case "dashboard":
      return "dashboard";
    case "projects":
      return "projects";
    case "pulse":
      return "pulse";
    case "tasks":
      return "tasks";
    case "approvals":
      return "approvals";
    case "reports":
      return "reports";
    case "settings":
      return "settings";
    default:
      return "landing";
  }
}
