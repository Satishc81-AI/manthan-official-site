"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { saveDownloadLead } from "@/app/downloads/actions";
import { RELEASE, type PlatformId } from "@/lib/releases";

export default function DownloadModal({
  platform,
  onClose,
}: {
  platform: PlatformId;
  onClose: () => void;
}) {
  const info = RELEASE.platforms[platform];
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await saveDownloadLead(email, platform);

    if (result.success) {
      const a = document.createElement("a");
      a.href = info.url;
      a.download = info.file;
      document.body.appendChild(a);
      a.click();
      a.remove();
      onClose();
    } else {
      setError(result.message);
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div
      data-modal-overlay=""
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass-card rounded-2xl p-8 max-w-md w-full border-primary/15 shadow-[0_32px_80px_rgba(0,0,0,0.5)] animate-[modal-in_0.25s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined notranslate text-2xl">
                {info.icon}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-on-background">
                Download for {info.name}
              </h3>
              <p className="text-xs text-on-surface-variant/40 font-code-sm">
                {info.file} &middot; {info.size}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant/40 hover:text-on-surface-variant hover:bg-white/5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined notranslate text-lg">close</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <p className="text-sm text-on-surface-variant/60 mb-4">
            Enter your email to download UniLink. We&apos;ll send you setup
            guides and important updates.
          </p>

          {error && (
            <div className="px-4 py-2.5 rounded-xl bg-error/10 border border-error/20 text-error text-sm mb-4">
              {error}
            </div>
          )}

          <div className="mb-4">
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoFocus
              className="w-full bg-surface-container/50 border border-outline-variant/20 rounded-xl px-4 py-3 text-sm text-on-background placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-on-primary font-bold py-3.5 rounded-xl inline-flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined notranslate text-lg animate-spin">
                  progress_activity
                </span>
                Starting download...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined notranslate text-lg">
                  download
                </span>
                Download Now
              </>
            )}
          </button>

          <p className="text-[11px] text-on-surface-variant/30 text-center mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>,
    document.body
  );
}
