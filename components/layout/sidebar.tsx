"use client";

import { useTranslations } from "next-intl";
import {
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
    <aside className="hidden w-[220px] shrink-0 flex-col border-e border-border/70 bg-[color:var(--bg-surface-2)] lg:flex">
      {/* Brand */}
      <div className="flex items-center gap-2 px-4 py-4">
        <PulseLogo />
      </div>

      {/* Project block — quiet, dense, high-content per the screenshots */}
      <div className="mx-3 mt-1 mb-3 border-t border-border/50 pt-3">
        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {tSidebar("activeProject")}
        </div>
        <div className="mt-1 truncate text-[12.5px] font-bold tracking-[-0.01em] text-foreground">
          {tProj("name")}
        </div>
        <div className="mt-0.5 truncate text-[10.5px] text-muted-foreground">
          {tSidebar("projectMeta")}
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2.5 pb-3">
        <ul className="space-y-px">
          {NAV.map(({ href, key, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "group flex items-center gap-2.5 rounded-md px-2 py-[7px] text-[12.5px] transition",
                    active
                      ? "font-semibold text-wine"
                      : "font-medium text-foreground/65 hover:text-foreground/90",
                  )}
                >
                  <Icon
                    className={cn(
                      "size-[14px] shrink-0",
                      active ? "opacity-100" : "opacity-60 group-hover:opacity-90",
                    )}
                    strokeWidth={1.6}
                  />
                  <span>{tNav(key)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User row */}
      <div className="mx-3 mb-3 mt-1 flex items-center gap-2 border-t border-border/50 pt-3">
        <span
          aria-hidden
          className="grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white"
          style={{ background: "linear-gradient(135deg, #8d354b, #6a2638)" }}
        >
          {tSidebar("userInitials")}
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="truncate text-[11.5px] font-semibold text-foreground">
            {tSidebar("userName")}
          </div>
          <div className="truncate text-[9.5px] text-muted-foreground">
            {tSidebar("userRole")}
          </div>
        </div>
      </div>
    </aside>
  );
}
