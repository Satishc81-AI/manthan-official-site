"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function truncateHtml(html: string, maxChars: number): string {
  let result = "";
  let count = 0;
  let i = 0;

  while (i < html.length) {
    if (count >= maxChars) break;

    if (html[i] === "<") {
      const end = html.indexOf(">", i);
      if (end === -1) break;
      result += html.slice(i, end + 1);
      i = end + 1;
    } else if (html[i] === "&") {
      const end = html.indexOf(";", i);
      if (end !== -1 && end - i < 8) {
        result += html.slice(i, end + 1);
        i = end + 1;
      } else {
        result += html[i];
        i++;
      }
      count++;
    } else {
      result += html[i];
      i++;
      count++;
    }
  }

  return result;
}

export default function TypewriterCode({
  html,
  speed = 18,
}: {
  html: string;
  speed?: number;
}) {
  const wrapperRef = useRef<HTMLPreElement>(null);
  const codeRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(wrapperRef, { once: true, margin: "-100px" });
  const plainLength = html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, "x")
    .length;

  useEffect(() => {
    if (!isInView || !codeRef.current) return;

    let start: number | null = null;
    let rafId: number;

    const step = (ts: number) => {
      if (!start) start = ts;
      const chars = Math.min(
        Math.floor((ts - start) / speed),
        plainLength
      );

      if (codeRef.current) {
        codeRef.current.innerHTML = truncateHtml(html, chars);
      }
      if (cursorRef.current) {
        cursorRef.current.style.display =
          chars < plainLength ? "inline-block" : "none";
      }

      if (chars < plainLength) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, html, plainLength, speed]);

  return (
    <pre ref={wrapperRef} className="p-6 overflow-x-auto min-h-[340px]">
      <code ref={codeRef} />
      <span
        ref={cursorRef}
        className="inline-block w-0.5 h-[1.1em] bg-primary align-middle ml-px animate-pulse"
      />
    </pre>
  );
}
