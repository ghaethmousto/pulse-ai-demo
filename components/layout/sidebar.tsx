"use client";

import { useTranslations } from "next-intl";
import {
  ChevronDown,
  ClipboardCheck,
  FileBarChart,
  Folders,
  LayoutDashboard,
  ListChecks,
  Settings,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Link, usePathname } from "@/i18n/navigation";
import { PulseLogo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

type NavItem = { href: string; key: keyof Messages; icon: LucideIcon };
type Messages = {
  dashboard: string;
  projects: string;
  pulse: string;
  tasks: string;
  approvals: string;
  reports: string;
  settings: string;
};

const NAV: NavItem[] = [
  { href: "/dashboard", key: "dashboard", icon: LayoutDashboard },
  { href: "/projects", key: "projects", icon: Folders },
  { href: "/pulse", key: "pulse", icon: Waves },
  { href: "/tasks", key: "tasks", icon: ListChecks },
  { href: "/approvals", key: "approvals", icon: ClipboardCheck },
  { href: "/reports", key: "reports", icon: FileBarChart },
  { href: "/settings", key: "settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const tProj = useTranslations("demoProject");
  const tSidebar = useTranslations("sidebar");

  return (
    <aside className="hidden w-[220px] shrink-0 flex-col border-e border-sidebar-border bg-sidebar lg:flex">
      <div className="flex items-center gap-2 px-3.5 py-4">
        <PulseLogo />
      </div>

      <button
        type="button"
        className="mx-2.5 flex items-center justify-between rounded-lg border border-border bg-card px-2.5 py-2 text-start shadow-pulse-card transition hover:bg-accent/40"
      >
        <div className="min-w-0">
          <div className="text-[8px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
            {tSidebar("activeProject")}
          </div>
          <div className="mt-0.5 truncate text-[11px] font-semibold text-foreground">
            {tProj("name")}
          </div>
        </div>
        <ChevronDown className="size-3 shrink-0 text-muted-foreground" />
      </button>

      <nav className="flex-1 overflow-y-auto px-2 py-3">
        <ul className="space-y-px">
          {NAV.map(({ href, key, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[12px] font-medium transition",
                    active
                      ? "bg-wine/[0.07] text-wine font-semibold"
                      : "text-foreground/60 hover:bg-foreground/[0.04] hover:text-foreground/90",
                  )}
                >
                  <Icon className="size-[14px] shrink-0" strokeWidth={1.6} />
                  <span>{tNav(key)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-sidebar-border px-3 py-3">
        <div className="flex items-center gap-2">
          <div
            aria-hidden
            className="grid size-[26px] shrink-0 place-items-center rounded-full text-[9px] font-bold text-white"
            style={{ background: "linear-gradient(135deg, #8d354b, #6a2638)" }}
          >
            GM
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[11px] font-semibold text-foreground">
              {tSidebar("userName")}
            </div>
            <div className="truncate text-[9px] text-muted-foreground">
              {tSidebar("userRole")}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
