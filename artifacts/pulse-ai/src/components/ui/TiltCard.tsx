"use client";

import { useRef, useState, useCallback, useMemo } from "react";
import { motion } from "motion/react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltFactor?: number;
  perspective?: number;
  glareIntensity?: number;
  glareSize?: number;
  hoverScale?: number;
  transitionDuration?: number;
  borderRadius?: number;
}

export function TiltCard({
  children,
  className = "",
  tiltFactor = 14,
  perspective = 1000,
  glareIntensity = 0.35,
  glareSize = 75,
  hoverScale = 1.04,
  transitionDuration = 0.2,
  borderRadius = 16,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !isHovered) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 100;
      setMouse({ x: 50 + x / 2, y: 50 + y / 2 });
      setTilt({ x: -(y / 50) * tiltFactor, y: (x / 50) * tiltFactor });
    },
    [isHovered, tiltFactor]
  );

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setMouse({ x: 50, y: 50 });
  }, []);

  const glareStyle = useMemo(
    () => ({
      background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,${isHovered ? glareIntensity : 0}) 0%, rgba(255,255,255,0) ${glareSize}%)`,
      borderRadius,
    }),
    [mouse.x, mouse.y, isHovered, glareIntensity, glareSize, borderRadius]
  );

  return (
    <div
      style={{
        perspective: `${perspective}px`,
        borderRadius,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      className={`cursor-pointer ${className}`}
    >
      <motion.div
        ref={cardRef}
        style={{
          borderRadius,
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isHovered ? hoverScale : 1,
        }}
        transition={{
          duration: transitionDuration,
          ease: "easeOut",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {/* Glare overlay */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            pointerEvents: "none",
            ...glareStyle,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: transitionDuration }}
        />
      </motion.div>
    </div>
  );
}
