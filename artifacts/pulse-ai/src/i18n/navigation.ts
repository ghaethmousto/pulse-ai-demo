import { useLocation } from "wouter";
import React from "react";

export { useLocale } from "@/components/providers/locale-provider";

export function usePathname(): string {
  const [location] = useLocation();
  return location;
}

export function useRouter() {
  const [, navigate] = useLocation();
  return {
    push: (href: string) => navigate(href),
    replace: (href: string) => navigate(href, { replace: true }),
  };
}

export function Link({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const [, navigate] = useLocation();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(href);
    if (props.onClick) props.onClick(e);
  };
  return React.createElement("a", { ...props, href, onClick: handleClick }, children);
}

export function redirect(path: string) {
  window.location.href = path;
}

export function getPathname(opts: { locale: string; href: string }) {
  return opts.href;
}
