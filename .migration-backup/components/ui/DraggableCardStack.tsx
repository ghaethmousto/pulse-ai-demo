"use client";

import { useState, useRef, startTransition, useMemo } from "react";
import { motion } from "motion/react";

export interface StackCard {
  id: string | number;
  tag: string;
  title: string;
  body: string;
  cta: string;
  ctaHref?: string;
  accentColor?: string;
}

interface DraggableCardStackProps {
  cards: StackCard[];
  className?: string;
}

type Position = "front" | "middle" | "back";

function CardItem({
  card,
  position,
  onShuffle,
}: {
  card: StackCard;
  position: Position;
  onShuffle: () => void;
}) {
  const dragStartX = useRef(0);

  const rotateMap: Record<Position, string> = {
    front: "-4deg",
    middle: "0deg",
    back: "4deg",
  };
  const xMap: Record<Position, string> = {
    front: "0%",
    middle: "22%",
    back: "44%",
  };
  const zMap: Record<Position, number> = {
    front: 3,
    middle: 2,
    back: 1,
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: zMap[position],
        cursor: position === "front" ? "grab" : "default",
        userSelect: "none",
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.12)",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow:
          position === "front"
            ? "0 24px 48px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08) inset"
            : "0 8px 24px -8px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        padding: "28px 32px",
        overflow: "hidden",
      }}
      animate={{
        rotate: rotateMap[position],
        x: xMap[position],
      }}
      drag={position === "front" ? "x" : false}
      dragElastic={0.3}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragStart={(e) => {
        if ("clientX" in e) dragStartX.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if ("clientX" in e && dragStartX.current - e.clientX > 120) {
          onShuffle();
        }
        dragStartX.current = 0;
      }}
      whileTap={position === "front" ? { cursor: "grabbing" } : undefined}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Subtle top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          borderRadius: "20px 20px 0 0",
          background: card.accentColor ?? "#8d354b",
        }}
      />

      <div className="flex flex-col gap-4 h-full">
        {/* Tag */}
        <span
          style={{
            display: "inline-flex",
            width: "fit-content",
            alignItems: "center",
            gap: 6,
            borderRadius: 999,
            border: `1px solid ${card.accentColor ?? "#8d354b"}44`,
            background: `${card.accentColor ?? "#8d354b"}18`,
            color: card.accentColor ?? "#b85c72",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            padding: "4px 12px",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: card.accentColor ?? "#8d354b",
              flexShrink: 0,
            }}
          />
          {card.tag}
        </span>

        <h3
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#f5f0ed",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {card.title}
        </h3>

        <p
          style={{
            fontSize: 13,
            color: "rgba(245,240,237,0.65)",
            lineHeight: 1.65,
            flexGrow: 1,
            margin: 0,
          }}
        >
          {card.body}
        </p>

        <a
          href={card.ctaHref ?? "#"}
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: card.accentColor ?? "#b85c72",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.textDecoration = "underline")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.textDecoration = "none")
          }
        >
          {card.cta} →
        </a>
      </div>
    </motion.div>
  );
}

export function DraggableCardStack({
  cards,
  className = "",
}: DraggableCardStackProps) {
  const [stack, setStack] = useState(cards);

  const handleShuffle = () => {
    startTransition(() => {
      setStack((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    });
  };

  const visible = useMemo(() => stack.slice(0, 3).reverse(), [stack]);

  return (
    <div
      className={className}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {visible.map((card, idx) => {
        const pos: Position =
          idx === 2 ? "front" : idx === 1 ? "middle" : "back";
        return (
          <CardItem
            key={card.id}
            card={card}
            position={pos}
            onShuffle={handleShuffle}
          />
        );
      })}
    </div>
  );
}
