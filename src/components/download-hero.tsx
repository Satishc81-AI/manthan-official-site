"use client";

import { useEffect, useState } from "react";
import { RELEASE, type PlatformId } from "@/lib/releases";
import DownloadModal from "./download-modal";

const platformIds: PlatformId[] = ["windows", "macos", "linux"];

function detectOS(): PlatformId {
  if (typeof navigator === "undefined") return "windows";
  const ua = navigator.userAgent;
  if (/Macintosh|Mac OS/i.test(ua)) return "macos";
  if (/Linux/i.test(ua) && !/Android/i.test(ua)) return "linux";
  return "windows";
}

export default function DownloadHero() {
  const [detected, setDetected] = useState<PlatformId>("windows");
  const [modalPlatform, setModalPlatform] = useState<PlatformId | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDetected(detectOS());
    setMounted(true);
  }, []);

  const primary = RELEASE.platforms[detected];
  const others = platformIds.filter((id) => id !== detected);

  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => setModalPlatform(detected)}
          className="group bg-primary text-on-primary font-bold px-14 py-5 rounded-2xl text-lg animate-glow-pulse hover:scale-[1.03] active:scale-[0.98] transition-transform duration-300 inline-flex items-center gap-3 cursor-pointer"
        >
          <span className="material-symbols-outlined notranslate text-2xl">download</span>
          Download for {primary.name}
        </button>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-on-surface-variant/50 font-code-sm">
          <span>{primary.arch}</span>
          <span className="text-on-surface-variant/20">|</span>
          <span>{primary.file}</span>
          <span className="text-on-surface-variant/20">|</span>
          <span>{primary.size}</span>
        </div>

        {mounted && (
          <div className="flex items-center gap-1.5 text-sm text-on-surface-variant/40">
            <span>Also available for</span>
            {others.map((id, i) => (
              <span key={id}>
                <button
                  onClick={() => setModalPlatform(id)}
                  className="text-primary/60 hover:text-primary transition-colors underline underline-offset-2 decoration-primary/20 hover:decoration-primary/60 cursor-pointer"
                >
                  {RELEASE.platforms[id].name}
                </button>
                {i < others.length - 1 && <span>,&nbsp;</span>}
              </span>
            ))}
            <span className="text-on-surface-variant/20 mx-1">|</span>
            <a
              href="#all-platforms"
              className="text-primary/60 hover:text-primary transition-colors"
            >
              View all &darr;
            </a>
          </div>
        )}
      </div>

      {modalPlatform && (
        <DownloadModal
          platform={modalPlatform}
          onClose={() => setModalPlatform(null)}
        />
      )}
    </>
  );
}
