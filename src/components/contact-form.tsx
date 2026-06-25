"use client";

import { useActionState, useState, useRef, useEffect } from "react";
import { submitContact } from "@/app/contact/actions";

const inputClass =
  "w-full bg-surface-container/50 border border-outline-variant/20 rounded-xl px-4 py-3 text-sm text-on-background placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all";

const serviceOptions = [
  "Custom Software Development",
  "AI & Automation",
  "Consulting & Strategy",
  "Team Augmentation",
  "UniLink / Products",
  "Other",
];

function CustomSelect({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <input type="hidden" name={name} value={selected} />
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`${inputClass} text-left flex items-center justify-between`}
      >
        <span
          className={
            selected ? "text-on-background" : "text-on-surface-variant/30"
          }
        >
          {selected || "Select a service"}
        </span>
        <span
          className={`material-symbols-outlined notranslate text-on-surface-variant/30 text-lg transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          expand_more
        </span>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-xl border border-outline-variant/20 bg-surface-container/95 backdrop-blur-xl shadow-[0_16px_48px_rgba(0,0,0,0.4)] overflow-hidden">
          {serviceOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                selected === opt
                  ? "bg-primary/15 text-primary"
                  : "text-on-surface-variant/70 hover:bg-white/5 hover:text-on-background"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null);

  if (state?.success) {
    return (
      <div className="glass-card rounded-2xl p-10 text-center">
        <span className="material-symbols-outlined notranslate text-green-400 text-5xl mb-4 block">
          check_circle
        </span>
        <h3 className="font-semibold text-xl text-on-background mb-2">
          Message sent!
        </h3>
        <p className="text-on-surface-variant/60 text-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state?.message && !state.success && (
        <div className="px-4 py-3 rounded-xl bg-error/10 border border-error/20 text-error text-sm">
          {state.message}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-on-surface-variant/50 mb-2 font-code-sm">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-on-surface-variant/50 mb-2 font-code-sm">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs text-on-surface-variant/50 mb-2 font-code-sm">
          Company
        </label>
        <input
          type="text"
          name="company"
          placeholder="Company name"
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-xs text-on-surface-variant/50 mb-2 font-code-sm">
          Service interest
        </label>
        <CustomSelect name="service" />
      </div>
      <div>
        <label className="block text-xs text-on-surface-variant/50 mb-2 font-code-sm">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full sm:w-auto bg-primary text-on-primary font-bold px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? (
          <>
            <span className="material-symbols-outlined notranslate text-lg animate-spin">
              progress_activity
            </span>
            Sending...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined notranslate text-lg">send</span>
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
