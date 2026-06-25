"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function TiltCard({
  children,
  className,
  intensity = 10,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const spring = { stiffness: 300, damping: 30 };
  const sRotateX = useSpring(rotateX, spring);
  const sRotateY = useSpring(rotateY, spring);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        rotateX.set(y * -intensity);
        rotateY.set(x * intensity);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{
        transformPerspective: 800,
        rotateX: sRotateX,
        rotateY: sRotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = { stiffness: 200, damping: 15 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left - rect.width / 2) * strength);
        y.set((e.clientY - rect.top - rect.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

export function DraggableCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      dragElastic={0.15}
      dragMomentum={false}
      whileDrag={{
        scale: 1.06,
        zIndex: 50,
        boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`cursor-grab active:cursor-grabbing ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
