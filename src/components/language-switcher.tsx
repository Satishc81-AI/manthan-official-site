"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "zh-CN", label: "中文" },
  { code: "ko", label: "한국어" },
  { code: "ar", label: "العربية" },
  { code: "ru", label: "Русский" },
  { code: "it", label: "Italiano" },
  { code: "tr", label: "Türkçe" },
];

function readCookie(name: string): string {
  const m = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return m ? decodeURIComponent(m[2]) : "";
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = readCookie("googtrans");
    if (v) {
      const parts = v.split("/");
      const lang = parts[parts.length - 1];
      if (lang && lang !== "en") setActive(lang);
    }
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const SELECTOR =
      '.material-symbols-outlined:not(.notranslate), pre:not(.notranslate), code:not(.notranslate), [class*="font-code"]:not(.notranslate)';

    function protect() {
      document
        .querySelectorAll(SELECTOR)
        .forEach((el) => el.classList.add("notranslate"));
    }

    protect();

    let timer: ReturnType<typeof setTimeout>;
    const observer = new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(protect, 50);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (document.getElementById("gtranslate-script")) return;

    const container = document.createElement("div");
    container.id = "google_translate_element";
    container.style.display = "none";
    document.body.appendChild(container);

    /* eslint-disable @typescript-eslint/no-explicit-any */
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: LANGUAGES.filter((l) => l.code !== "en")
            .map((l) => l.code)
            .join(","),
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const script = document.createElement("script");
    script.id = "gtranslate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const pick = useCallback((code: string) => {
    setActive(code);
    setOpen(false);

    if (code === "en") {
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
      window.location.reload();
      return;
    }

    const sel = document.querySelector<HTMLSelectElement>(
      "#google_translate_element select"
    );
    if (sel) {
      sel.value = code;
      sel.dispatchEvent(new Event("change"));
    }
  }, []);

  const current = LANGUAGES.find((l) => l.code === active) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative notranslate">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-sm text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors cursor-pointer"
        aria-label="Change language"
      >
        <span className="material-symbols-outlined notranslate text-[18px]">
          translate
        </span>
        <span className="text-xs font-medium hidden sm:inline">
          {current.label}
        </span>
        <span className="material-symbols-outlined notranslate text-[14px]">
          expand_more
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-xl glass-card shadow-[0_16px_48px_rgba(0,0,0,0.5)] overflow-hidden z-[60] py-1 max-h-[70vh] overflow-y-auto">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => pick(lang.code)}
              className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors cursor-pointer ${
                active === lang.code
                  ? "bg-primary/10 text-primary"
                  : "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
              }`}
            >
              <span className="font-medium">{lang.label}</span>
              {active === lang.code && (
                <span className="material-symbols-outlined notranslate text-[16px] ml-auto">
                  check
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
