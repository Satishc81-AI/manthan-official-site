"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
  useSpring,
  animate,
} from "framer-motion";
import { useRef, useEffect, type ReactNode } from "react";

const SPRING = { type: "spring" as const, duration: 0.7, bounce: 0.15 };
const SPRING_BOUNCY = { type: "spring" as const, duration: 0.5, bounce: 0.3 };

export function Entrance({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ ...SPRING, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const offset = 40;
  const dirMap = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: offset },
    right: { x: -offset },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...dirMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...SPRING, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  stagger = 0.08,
  className,
}: {
  children: ReactNode;
  stagger?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: SPRING,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsub = motionValue.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent =
          decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
      }
    });
    return unsub;
  }, [motionValue, decimals]);

  return <span ref={ref}>0</span>;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left bg-gradient-to-r from-primary via-secondary to-tertiary"
      style={{ scaleX }}
    />
  );
}

export function Parallax({
  children,
  speed = 0.3,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [speed * 100, speed * -100]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export function HeroParallax({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);

  return (
    <motion.div style={{ y, opacity, scale }} className={className}>
      {children}
    </motion.div>
  );
}

export function TiltCard({
  children,
  className,
  intensity = 6,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springCfg = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [intensity, -intensity]),
    springCfg
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-intensity, intensity]),
    springCfg
  );

  function handleMouse(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { motion, SPRING_BOUNCY };
