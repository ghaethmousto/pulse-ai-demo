"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "tertiary" | "destructive" | "darkPrimary" | "darkSecondary" | "darkTertiary";
type Size = "md" | "sm";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const baseStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  fontFamily: "var(--font-sans, 'Raleway', sans-serif)",
  fontSize: 12.5,
  fontWeight: 600,
  letterSpacing: "0.01em",
  lineHeight: 1,
  cursor: "pointer",
  border: "1px solid transparent",
  whiteSpace: "nowrap",
  position: "relative",
  textDecoration: "none",
  transition:
    "background 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1), transform 140ms cubic-bezier(0.22, 1, 0.36, 1), color 200ms ease",
};

const sizeStyle: Record<Size, React.CSSProperties> = {
  md: { height: 38, padding: "0 18px", borderRadius: 9, fontSize: 12.5 },
  sm: { height: 30, padding: "0 13px", borderRadius: 7, fontSize: 11.5, gap: 6 },
};

const variantStyle: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "linear-gradient(180deg, #9a3e55 0%, #7a2b3f 100%)",
    color: "#fff",
    borderColor: "rgba(0,0,0,0.14)",
    boxShadow:
      "0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.24) inset, 0 1px 2px rgba(141,53,75,0.22), 0 6px 16px -4px rgba(141,53,75,0.32)",
  },
  secondary: {
    background: "linear-gradient(180deg, #ffffff 0%, #f7f1ec 100%)",
    color: "#201d1a",
    borderColor: "rgba(92,69,69,0.22)",
    boxShadow:
      "0 1px 0 rgba(255,255,255,1) inset, 0 -1px 0 rgba(92,69,69,0.06) inset, 0 1px 2px rgba(32,29,26,0.05), 0 4px 10px -2px rgba(32,29,26,0.08)",
  },
  outline: {
    background: "#fdfbf9",
    color: "#8d354b",
    borderColor: "rgba(141,53,75,0.32)",
    boxShadow:
      "0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(141,53,75,0.08), 0 3px 8px -2px rgba(141,53,75,0.10)",
  },
  tertiary: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(247,241,236,0.82) 100%)",
    color: "#453c3a",
    borderColor: "rgba(92,69,69,0.16)",
    boxShadow:
      "0 1px 0 rgba(255,255,255,0.9) inset, 0 1px 1px rgba(32,29,26,0.03)",
  },
  destructive: {
    background: "linear-gradient(180deg, #ffffff 0%, #fbf4f5 100%)",
    color: "#a34255",
    borderColor: "rgba(163,66,85,0.30)",
    boxShadow:
      "0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(163,66,85,0.08), 0 4px 10px -2px rgba(163,66,85,0.10)",
  },
  darkPrimary: {
    background: "linear-gradient(180deg, #a14260 0%, #7a2b3f 100%)",
    color: "#fff",
    borderColor: "rgba(0,0,0,0.26)",
    boxShadow:
      "0 1px 0 rgba(255,255,255,0.22) inset, 0 -1px 0 rgba(0,0,0,0.28) inset, 0 2px 4px rgba(0,0,0,0.28), 0 10px 24px -6px rgba(141,53,75,0.50), 0 0 24px rgba(207,89,118,0.14)",
  },
  darkSecondary: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
    color: "#eeebe8",
    borderColor: "rgba(238,235,232,0.16)",
    boxShadow:
      "0 1px 0 rgba(255,255,255,0.06) inset, 0 -1px 0 rgba(0,0,0,0.24) inset, 0 2px 6px rgba(0,0,0,0.18)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  },
  darkTertiary: {
    background: "transparent",
    color: "rgba(238,235,232,0.60)",
    borderColor: "transparent",
    padding: "0 14px",
  },
};

function getHoverClass(v: Variant) {
  return `pb-${v}`;
}

export const PulseButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button"> & BaseProps
>(function PulseButton(
  { variant = "primary", size = "md", icon, trailingIcon, children, className, style, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${getHoverClass(variant)} ${className ?? ""}`}
      style={{ ...baseStyle, ...sizeStyle[size], ...variantStyle[variant], ...style }}
      {...props}
    >
      {icon}
      {children}
      {trailingIcon}
    </button>
  );
});

interface PulseLinkProps extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
}

export function PulseLinkButton({
  variant = "primary",
  size = "md",
  icon,
  trailingIcon,
  children,
  className,
  href,
  target,
  rel,
}: PulseLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${getHoverClass(variant)} ${className ?? ""}`}
      style={{ ...baseStyle, ...sizeStyle[size], ...variantStyle[variant] }}
    >
      {icon}
      {children}
      {trailingIcon}
    </Link>
  );
}

/** A wine-red ECG/pulse line icon — used in primary CTAs */
export function PulseIcon({ size = 13, color = "rgba(255,255,255,0.78)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 6.5L2.8 6.5L4.2 3.2L5.8 10L7.2 4.8L8.3 6.5L12 6.5" />
    </svg>
  );
}

/** Outline button hero-arrow circle (for Enter X Portal) */
export function PortalArrow() {
  return (
    <span
      className="pb-arrow"
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "rgba(141,53,75,0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 220ms, transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <svg width={10} height={10} viewBox="0 0 10 10" fill="none">
        <path
          d="M1.5 5H8M5.5 2L8 5L5.5 8"
          stroke="#8d354b"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
