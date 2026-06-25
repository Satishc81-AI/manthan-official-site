"use client";

import { Fragment, useEffect, useState } from "react";
import { RELEASE, DOWNLOAD_MATRIX, type PlatformId } from "@/lib/releases";
import DownloadModal from "./download-modal";

const platformOrder: PlatformId[] = ["windows", "linux", "macos"];

const floatClasses: Record<PlatformId, string> = {
  windows: "logo-float",
  linux: "logo-float-delayed",
  macos: "logo-float-slow",
};

function detectOS(): PlatformId {
  if (typeof navigator === "undefined") return "windows";
  const ua = navigator.userAgent;
  if (/Macintosh|Mac OS/i.test(ua)) return "macos";
  if (/Linux/i.test(ua) && !/Android/i.test(ua)) return "linux";
  return "windows";
}

function WindowsLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 88 88"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 12.4L35.7 7.5V42H0.03V12.4Z" />
      <path d="M35.7 46V80.4L0.03 75.5V46H35.7Z" />
      <path d="M40 6.9L87.3 0V42.2L40 42.6V6.9Z" />
      <path d="M87.3 46.2V88.3L40 81.8V46.1L87.3 46.2Z" />
    </svg>
  );
}

function LinuxLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 120"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="50" cy="22" rx="18" ry="20" />
      <ellipse cx="50" cy="66" rx="28" ry="34" />
      <path d="M22 54C12 58 8 70 14 78C17 81 22 76 24 70Z" />
      <path d="M78 54C88 58 92 70 86 78C83 81 78 76 76 70Z" />
      <path d="M32 96C22 99 16 103 16 108C16 113 24 115 34 113C40 111 40 104 38 98Z" />
      <path d="M68 96C78 99 84 103 84 108C84 113 76 115 66 113C60 111 60 104 62 98Z" />
    </svg>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 84 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M57.2 0c.9 7.3-2.1 14.6-6.7 19.8-4.6 5.2-12.1 9.3-19.4 8.7-.8-7 2.5-14.2 6.8-18.8C42.3 5.1 50 1.2 57.2 0Z" />
      <path d="M75 35.3c-1.2 1.5-12.5 7.8-12.5 22.2 0 16.8 14.8 22.7 15.1 22.8-.1.4-2.3 8-7.7 15.9-4.7 7-9.6 13.8-17.3 14-7.6.1-10-4.5-18.7-4.5-8.6 0-11.4 4.3-18.6 4.6-7.4.2-13-7.5-17.8-14.4C-10.8 84.4-16 61-6.3 45c4.9-8 13.6-12.9 23.1-13.1 7.3-.1 14.3 5 18.8 5 4.5 0 12.9-6.1 21.7-5.2 3.7.1 14 1.5 20.7 11.3-.6.3-12.4 7.2-12.3 21.5z" />
    </svg>
  );
}

const logoComponents: Record<PlatformId, typeof WindowsLogo> = {
  windows: WindowsLogo,
  linux: LinuxLogo,
  macos: AppleLogo,
};

export default function DownloadCards() {
  const [detected, setDetected] = useState<PlatformId | null>(null);
  const [modalPlatform, setModalPlatform] = useState<PlatformId | null>(null);

  useEffect(() => {
    setDetected(detectOS());
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 xl:gap-10 max-w-5xl mx-auto items-start">
        {platformOrder.map((id) => {
          const matrix = DOWNLOAD_MATRIX[id];
          const isDetected = detected === id;
          const Logo = logoComponents[id];

          return (
            <div key={id} className="flex flex-col items-center">
              {/* OS Logo — gentle float */}
              <div
                className={`h-20 flex items-center justify-center mb-8 transition-colors ${floatClasses[id]} ${
                  isDetected
                    ? "text-on-background"
                    : "text-on-surface-variant/50"
                }`}
              >
                <Logo className="h-full w-auto" />
              </div>

              {/* Primary Download Button(s) — pulse ring on detected OS */}
              <div className="flex gap-2 mb-8 flex-wrap justify-center">
                {matrix.buttons.map((btn, i) => (
                  <button
                    key={i}
                    onClick={() => setModalPlatform(id)}
                    className={`bg-primary text-on-primary px-5 py-2.5 rounded-lg inline-flex items-center gap-2 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer ${
                      isDetected ? "btn-pulse" : ""
                    }`}
                  >
                    <span className="material-symbols-outlined notranslate text-lg">
                      download
                    </span>
                    <div className="text-left">
                      <div className="font-bold text-sm leading-tight">
                        {btn.label}
                      </div>
                      <div className="text-[10px] opacity-70 leading-tight mt-0.5">
                        {btn.sublabel}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Format / Architecture Matrix */}
              <div className="grid grid-cols-[auto_auto] gap-x-4 gap-y-2.5 w-fit mx-auto items-center">
                {matrix.formats.map((fmt) => (
                  <Fragment key={fmt.name}>
                    <span className="text-on-surface-variant/40 text-xs text-right font-medium whitespace-nowrap">
                      {fmt.name}
                    </span>
                    <div className="flex gap-1.5 flex-wrap">
                      {fmt.arches.map((arch) => (
                        <button
                          key={arch}
                          onClick={() => setModalPlatform(id)}
                          className="shimmer-badge px-2.5 py-[3px] bg-primary text-on-primary text-[11px] font-semibold rounded hover:brightness-110 hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
                        >
                          {arch}
                        </button>
                      ))}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          );
        })}
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
