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

  return (
    <aside className="hidden border-e border-sidebar-border bg-sidebar lg:flex lg:w-64 lg:flex-col">
      <div className="flex h-16 items-center px-5 border-b border-sidebar-border">
        <PulseLogo />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5">
        <ul className="space-y-1">
          {NAV.map(({ href, key, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                    active
                      ? "bg-accent text-wine"
                      : "text-foreground/70 hover:bg-accent/60 hover:text-foreground",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-y-2 start-0 w-0.5 rounded-full transition",
                      active ? "bg-wine" : "bg-transparent",
                    )}
                  />
                  <Icon className="size-4 shrink-0" />
                  <span>{tNav(key)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-xl border border-border bg-card p-3 shadow-pulse-card">
          <div className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
            {tProj("name")}
          </div>
          <div className="mt-1 text-sm font-semibold text-foreground">
            {tProj("location")}
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-warning/10 px-2 py-0.5 text-[0.7rem] font-medium text-warning">
            <span className="size-1.5 rounded-full bg-warning" /> {tProj("status")}
          </div>
        </div>
      </div>
    </aside>
  );
}
