"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

/**
 * Background pulse line.
 *
 * - Centered horizontally
 * - Single smooth flowing curve (no ECG spikes)
 * - Travels slowly down the page
 * - Lives BEHIND all page content (z-index: -1)
 */
export function PulseLine() {
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => {
      const h = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      );
      setDocHeight(h);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    window.addEventListener("resize", update);
    const t = window.setInterval(update, 1500);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.clearInterval(t);
    };
  }, []);

  if (!docHeight) return null;

  // Single smooth sinusoidal flow — gentle s-curves down the page
  // Each segment is one full sine cycle of vertical length `cycleH`
  const cycleH = 520;
  const amplitude = 14; // horizontal sway in px
  const cx = 30; // SVG center x

  // Build a smooth Catmull/Bezier curve that gently flows side-to-side
  let d = `M ${cx} 0 `;
  let y = 0;
  let direction = 1;
  while (y < docHeight) {
    const yMid = y + cycleH / 2;
    const yEnd = y + cycleH;
    // Cubic bezier — smooth S-curve from current point through mid swing to next point
    d += `C ${cx + amplitude * direction} ${y + cycleH * 0.25}, ${
      cx + amplitude * direction
    } ${yMid + cycleH * 0.05}, ${cx} ${yMid} `;
    d += `C ${cx - amplitude * direction} ${yMid + cycleH * 0.2}, ${
      cx - amplitude * direction
    } ${yEnd - cycleH * 0.1}, ${cx} ${yEnd} `;
    y = yEnd;
    direction *= -1;
  }

  // Animation duration scales with document height so the dot travels
  // at a consistent (slow) speed regardless of page length.
  // Aim for ~140 px/sec → very slow, calming.
  const PX_PER_SEC = 140;
  const duration = Math.max(20, docHeight / PX_PER_SEC);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-1/2 hidden -translate-x-1/2 lg:block"
      style={{
        width: 60,
        zIndex: 1,
        // Blend modes make the line read as "in the background" — it tints
        // whatever it crosses (light or dark) instead of covering it. Cards
        // and text remain fully readable; the line acts like a watermark.
        mixBlendMode: "multiply",
      }}
    >
      <svg
        viewBox={`0 0 60 ${docHeight}`}
        width={60}
        height={docHeight}
        preserveAspectRatio="none"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          {/* Base line gradient — fades out at top and bottom */}
          <linearGradient id="pl-line-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8d354b" stopOpacity="0" />
            <stop offset="6%" stopColor="#8d354b" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#8d354b" stopOpacity="0.32" />
            <stop offset="94%" stopColor="#8d354b" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#8d354b" stopOpacity="0" />
          </linearGradient>

          {/* Travelling glow trail — bright burgundy */}
          <linearGradient id="pl-glow-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e08aa0" stopOpacity="0" />
            <stop offset="50%" stopColor="#e08aa0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e08aa0" stopOpacity="0" />
          </linearGradient>

          {/* Halo around dot */}
          <radialGradient id="pl-dot-halo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ffd4dd" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#e08aa0" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8d354b" stopOpacity="0" />
          </radialGradient>

          <filter id="pl-blur-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
          <filter id="pl-blur-strong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.6" />
          </filter>
        </defs>

        {/* Outer soft glow under line */}
        <path
          d={d}
          stroke="#8d354b"
          strokeWidth={5}
          fill="none"
          strokeLinecap="round"
          opacity={0.05}
          filter="url(#pl-blur-strong)"
        />

        {/* Main line — single smooth flowing curve */}
        <path
          d={d}
          stroke="url(#pl-line-grad)"
          strokeWidth={1.2}
          fill="none"
          strokeLinecap="round"
        />

        {/* Slow travelling glow trail */}
        <motion.path
          d={d}
          stroke="url(#pl-glow-grad)"
          strokeWidth={2.2}
          fill="none"
          strokeLinecap="round"
          filter="url(#pl-blur-soft)"
          pathLength={1}
          strokeDasharray="0.14 0.86"
          animate={{ strokeDashoffset: [0, -1] }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        />

        {/* Soft halo around the travelling pulse */}
        <motion.circle
          r={8}
          fill="url(#pl-dot-halo)"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
          style={{
            offsetPath: `path("${d}")`,
            offsetRotate: "0deg",
          }}
        />

        {/* Bright pulse dot core */}
        <motion.circle
          r={2.5}
          fill="#fff5f8"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
          style={{
            offsetPath: `path("${d}")`,
            offsetRotate: "0deg",
            filter: "drop-shadow(0 0 4px #e08aa0)",
          }}
        />
      </svg>
    </div>
  );
}
