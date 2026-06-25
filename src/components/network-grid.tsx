"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  opacity: number;
}

export default function NetworkGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    const mouse = { x: -1000, y: -1000, active: false };
    const ripples: Ripple[] = [];

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      const count = Math.min(60, Math.floor((w * h) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.8,
      }));
    };

    resize();
    spawn();

    const onResize = () => { resize(); spawn(); };
    window.addEventListener("resize", onResize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active =
        mouse.x >= 0 && mouse.x <= w && mouse.y >= 0 && mouse.y <= h;
    };

    const onClick = () => {
      if (!mouse.active) return;
      ripples.push({ x: mouse.x, y: mouse.y, radius: 0, opacity: 0.4 });
      for (const n of nodes) {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250 && dist > 1) {
          const force = (250 - dist) / 250;
          n.vx += (dx / dist) * force * 6;
          n.vy += (dy / dist) * force * 6;
        }
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    const LINE_DIST = 150;
    const COL = "rgba(173,198,255,";
    const PULSE = [0, 5, 12, 20, 30, 42];

    let frame = 0;
    let animId: number;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);

      // cursor glow
      if (mouse.active) {
        const g = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 180
        );
        g.addColorStop(0, "rgba(173,198,255,0.07)");
        g.addColorStop(1, "rgba(173,198,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      // physics
      for (const n of nodes) {
        // mouse attraction
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220 && dist > 1) {
            const force = (220 - dist) / 220;
            n.vx += (dx / dist) * force * 0.04;
            n.vy += (dy / dist) * force * 0.04;
          }
        }

        n.x += n.vx;
        n.y += n.vy;

        // damping
        n.vx *= 0.995;
        n.vy *= 0.995;

        // bounce
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x));
        n.y = Math.max(0, Math.min(h, n.y));
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DIST) {
            const alpha = (1 - dist / LINE_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = COL + alpha + ")";
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const isPulse = PULSE.includes(i);
        const pulseScale = isPulse ? 1 + 0.3 * Math.sin(frame * 0.02 + i) : 1;
        const alpha = isPulse ? 0.5 : 0.35;

        // highlight nodes near cursor
        let cursorBoost = 0;
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) cursorBoost = (150 - dist) / 150 * 0.4;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pulseScale * (1 + cursorBoost), 0, Math.PI * 2);
        ctx.fillStyle = COL + Math.min(alpha + cursorBoost, 0.8) + ")";
        ctx.fill();

        if (isPulse) {
          const ringAlpha = 0.08 * (0.5 + 0.5 * Math.sin(frame * 0.025 + i * 2));
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * pulseScale * 4, 0, Math.PI * 2);
          ctx.strokeStyle = COL + ringAlpha + ")";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // data packets
      const t = (frame * 0.003) % 1;
      for (let k = 0; k < 6; k++) {
        const i = (k * 7) % nodes.length;
        const j = (k * 7 + 3) % nodes.length;
        const a = nodes[i];
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > LINE_DIST) continue;
        const progress = (t + k * 0.15) % 1;
        const px = a.x + dx * progress;
        const py = a.y + dy * progress;
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(208,188,255,0.5)";
        ctx.fill();
      }

      // ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 4;
        r.opacity *= 0.96;
        if (r.opacity < 0.01) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(173,198,255,${r.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
