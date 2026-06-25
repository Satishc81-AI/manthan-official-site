import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import DownloadCards from "@/components/download-cards";
import {
  RELEASE,
  SYSTEM_REQUIREMENTS,
  INSTALL_METHODS,
  CHANGELOG_HIGHLIGHTS,
  type PlatformId,
} from "@/lib/releases";
import Footer from "@/components/footer";
import {
  Entrance,
  Reveal,
  StaggerContainer,
  StaggerItem,
  ScrollProgress,
  TiltCard,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Download UniLink | Universal AI Connectivity Platform",
  description:
    "Download UniLink — the universal bridge between your applications and any LLM model. Connect, switch, and scale across cloud APIs and local models.",
};

/* ── Product screenshot / mockup ───────────────────────────────── */

function DashboardMockup() {
  return (
    <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/90 shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden select-none">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-outline-variant/15 bg-surface-container-lowest">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-0.5 bg-surface-container/60 rounded-md text-[9px] text-on-surface-variant/30 font-code-sm">
            localhost:8421
          </div>
        </div>
      </div>

      <div className="flex min-h-[380px] md:min-h-[440px]">
        {/* Sidebar */}
        <div className="w-[140px] shrink-0 border-r border-outline-variant/15 bg-surface-container-lowest p-3 hidden sm:block">
          <div className="flex items-center gap-2 mb-5 px-1">
            <span className="material-symbols-outlined notranslate text-primary text-base">
              hub
            </span>
            <span className="font-semibold text-xs text-on-background">
              UniLink
            </span>
          </div>
          <nav className="space-y-0.5">
            {[
              { icon: "dashboard", label: "Dashboard", active: true },
              { icon: "model_training", label: "Models" },
              { icon: "dns", label: "Providers" },
              { icon: "play_circle", label: "Playground" },
              { icon: "key", label: "API Keys" },
              { icon: "receipt_long", label: "Logs" },
              { icon: "settings", label: "Settings" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] ${
                  item.active
                    ? "bg-primary/15 text-primary font-medium"
                    : "text-on-surface-variant/60"
                }`}
              >
                <span className="material-symbols-outlined notranslate text-[14px]">
                  {item.icon}
                </span>
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 bg-surface-container/40 overflow-hidden">
          <div className="mb-4">
            <h3 className="font-semibold text-sm text-on-background">
              Dashboard
            </h3>
            <p className="text-[10px] text-on-surface-variant/50 mt-0.5">
              Manage your AI connections and models
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {[
              { label: "Providers", value: "8", sub: "Connected" },
              { label: "Models", value: "24", sub: "Available" },
              {
                label: "Requests",
                value: "12.4K",
                sub: "This Month",
              },
              {
                label: "Status",
                value: "Online",
                sub: "All Systems",
                cls: "text-green-400",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-outline-variant/15 rounded-lg p-2.5"
              >
                <div className="text-[9px] text-on-surface-variant/50 mb-1">
                  {s.label}
                </div>
                <div
                  className={`text-base font-bold leading-none ${s.cls ?? "text-on-background"}`}
                >
                  {s.value}
                </div>
                <div className="text-[8px] text-on-surface-variant/40 mt-1">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Active model */}
          <div className="border border-outline-variant/15 rounded-lg p-3 mb-4">
            <div className="text-[9px] text-on-surface-variant/50 mb-2">
              Active Model
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center text-sm">
                  🦙
                </div>
                <div>
                  <div className="font-semibold text-[11px] text-on-background">
                    Llama 3 8B (GGUF)
                  </div>
                  <div className="flex gap-1 mt-1">
                    {["Local", "GGUF", "Ollama"].map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 bg-outline-variant/15 rounded text-[8px] text-on-surface-variant/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-2 py-1 border border-outline-variant/20 rounded-md text-[9px] text-on-surface-variant/60">
                Switch Model
              </div>
            </div>
          </div>

          {/* Model router diagram */}
          <div className="border border-outline-variant/15 rounded-lg p-3">
            <div className="text-[9px] text-on-surface-variant/50 mb-3">
              Model Router
            </div>
            <div className="flex items-center gap-2 overflow-x-auto">
              <div className="border border-outline-variant/15 rounded-lg p-2 shrink-0">
                <div className="text-[9px] font-medium text-on-surface-variant/70 mb-1">
                  API Server
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[8px] text-green-400">Running</span>
                </div>
                <div className="text-[7px] text-on-surface-variant/40 font-mono">
                  localhost:8420
                </div>
              </div>
              <div className="flex items-center shrink-0">
                <div className="w-3 h-px bg-outline-variant/30" />
                <div className="w-0 h-0 border-y-[3px] border-y-transparent border-l-[4px] border-l-outline-variant/30" />
              </div>
              <div className="border border-primary/30 rounded-lg p-2 bg-primary/5 shrink-0">
                <div className="text-[9px] font-semibold text-primary text-center">
                  UniLink
                </div>
                <div className="text-[7px] text-primary/60 text-center">
                  AI Gateway
                </div>
              </div>
              <div className="flex items-center shrink-0">
                <div className="w-3 h-px bg-primary/40" />
                <div className="w-0 h-0 border-y-[3px] border-y-transparent border-l-[4px] border-l-primary/40" />
              </div>
              <div className="space-y-1.5 shrink-0">
                {[
                  { name: "OpenAI GPT-4o", color: "bg-green-400" },
                  { name: "Claude 3.5", color: "bg-amber-400" },
                  { name: "Llama 3 8B", color: "bg-blue-400" },
                  { name: "Local GGUF", color: "bg-purple-400" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center gap-1.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${m.color}`}
                    />
                    <span className="text-[8px] text-on-surface-variant/60 whitespace-nowrap">
                      {m.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Feature highlights data ───────────────────────────────────── */

const FEATURES = [
  {
    icon: "route",
    title: "Intelligent Model Routing",
    description:
      "Route requests across cloud and local models with automatic fallback chains. Switch providers without changing a single line of code.",
  },
  {
    icon: "monitoring",
    title: "Real-time Dashboard",
    description:
      "Monitor token usage, cost tracking, request latency, and provider health — all from a single unified interface.",
  },
  {
    icon: "api",
    title: "OpenAI-compatible API",
    description:
      "Drop-in replacement for the OpenAI API. Point your existing apps to localhost:8420 and connect to any model.",
  },
  {
    icon: "memory",
    title: "Local Model Support",
    description:
      "Run GGUF, Ollama, and other local models alongside cloud providers. Your data stays on your machine.",
  },
  {
    icon: "play_circle",
    title: "Built-in Playground",
    description:
      "Test prompts, compare model outputs side-by-side, and fine-tune parameters — all without writing code.",
  },
  {
    icon: "lock",
    title: "Secure by Default",
    description:
      "API keys encrypted at rest, request logging with PII redaction, and full audit trails for compliance.",
  },
] as const;

/* ── Page ──────────────────────────────────────────────────────── */

export default function DownloadsPage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* ── Hero + Download Grid ── */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] glow-blue -z-10 opacity-50 animate-float-slow" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] glow-purple -z-10 opacity-30 animate-float-slow-reverse" />

          <div className="max-w-5xl mx-auto">
            <Entrance>
              <h1 className="font-display-lg text-4xl md:text-5xl tracking-tight text-on-background text-center mb-4">
                Download UniLink
              </h1>
            </Entrance>

            <Entrance delay={0.1}>
              <p className="text-on-surface-variant/60 text-lg text-center max-w-2xl mx-auto mb-16">
                Free and open source. Universal AI connectivity platform with
                integrated model routing and management.
              </p>
            </Entrance>

            <Entrance delay={0.2}>
              <DownloadCards />
            </Entrance>

            <Reveal>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-on-surface-variant/40">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest/40 font-code-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  v{RELEASE.version}
                </span>
                <span className="hidden sm:inline text-on-surface-variant/15">
                  |
                </span>
                <a
                  href={RELEASE.releaseNotesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/60 hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span className="material-symbols-outlined notranslate text-[14px]">
                    description
                  </span>
                  Release notes
                </a>
                <span className="hidden sm:inline text-on-surface-variant/15">
                  |
                </span>
                <a
                  href={RELEASE.allReleasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/60 hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span className="material-symbols-outlined notranslate text-[14px]">
                    history
                  </span>
                  Previous versions
                </a>
                <span className="hidden sm:inline text-on-surface-variant/15">
                  |
                </span>
                <a
                  href={RELEASE.releaseNotesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/60 hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span className="material-symbols-outlined notranslate text-[14px]">
                    verified_user
                  </span>
                  SHA-256 checksums
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Product Preview (JetBrains-style) ── */}
        <section className="relative py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] glow-blue -z-10 opacity-20" />

          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="font-display-lg text-3xl md:text-4xl mb-4 text-on-background">
                  Everything you need.{" "}
                  <span className="text-on-surface-variant/50">
                    One dashboard.
                  </span>
                </h2>
                <p className="text-on-surface-variant/50 text-sm max-w-lg mx-auto">
                  Manage providers, models, API keys, and monitor
                  performance &mdash; all from a single interface running on your
                  machine.
                </p>
              </div>
            </Reveal>

            {/* Main screenshot / mockup — 3D tilt on hover + glow border */}
            <Reveal>
              <TiltCard intensity={4}>
                <div className="mockup-glow rounded-2xl">
                  <DashboardMockup />
                </div>
              </TiltCard>
            </Reveal>

            {/* Replace with actual screenshots when available:
            <Reveal>
              <div className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] border border-outline-variant/20">
                <Image
                  src="/screenshots/dashboard.png"
                  alt="UniLink Dashboard"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </Reveal>
            */}

            {/* Feature highlights grid */}
            <StaggerContainer
              stagger={0.08}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16"
            >
              {FEATURES.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="glass-card rounded-xl p-6 h-full group/feat">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover/feat:scale-110 group-hover/feat:bg-primary/20 group-hover/feat:rotate-3">
                      <span className="material-symbols-outlined notranslate text-primary text-xl transition-transform duration-300 group-hover/feat:scale-110">
                        {f.icon}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm text-on-background mb-2">
                      {f.title}
                    </h3>
                    <p className="text-on-surface-variant/50 text-xs leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="border-t border-outline-variant/10" />
        </div>

        {/* ── Package Managers ── */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-10">
                <h2 className="font-display-lg text-2xl md:text-3xl mb-2 text-on-background">
                  Install via package manager
                </h2>
                <p className="text-on-surface-variant/50 text-sm">
                  Install UniLink directly from your platform&apos;s package
                  manager.
                </p>
              </div>
            </Reveal>

            <StaggerContainer
              stagger={0.08}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {INSTALL_METHODS.map((m) => (
                <StaggerItem key={m.label}>
                  <div className="glass-card rounded-xl p-5 h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined notranslate text-primary text-lg">
                        {m.icon}
                      </span>
                      <span className="font-semibold text-sm text-on-background">
                        {m.label}
                      </span>
                    </div>
                    <code className="block bg-surface-container-lowest/60 border border-outline-variant/10 rounded-lg px-4 py-3 text-xs font-code-sm text-on-surface-variant/70 select-all">
                      {m.command}
                    </code>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="border-t border-outline-variant/10" />
        </div>

        {/* ── What's New ── */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
                <h2 className="font-display-lg text-2xl md:text-3xl text-on-background">
                  What&apos;s new in v{RELEASE.version}
                </h2>
                <a
                  href={RELEASE.releaseNotesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/60 hover:text-primary transition-colors text-sm inline-flex items-center gap-1 shrink-0"
                >
                  Full changelog
                  <span className="material-symbols-outlined notranslate text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </Reveal>

            <StaggerContainer stagger={0.06} className="space-y-0">
              {CHANGELOG_HIGHLIGHTS.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3 py-3.5 border-b border-outline-variant/10 last:border-0">
                    <span className="material-symbols-outlined notranslate text-primary/60 text-lg mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span className="text-on-surface-variant/80 text-sm">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="border-t border-outline-variant/10" />
        </div>

        {/* ── System Requirements ── */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-10">
                <h2 className="font-display-lg text-2xl md:text-3xl mb-2 text-on-background">
                  System requirements
                </h2>
              </div>
            </Reveal>

            <StaggerContainer
              stagger={0.1}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {(
                Object.entries(SYSTEM_REQUIREMENTS) as [
                  PlatformId,
                  (typeof SYSTEM_REQUIREMENTS)[PlatformId],
                ][]
              ).map(([id, req]) => {
                const p = RELEASE.platforms[id];
                return (
                  <StaggerItem key={id}>
                    <div className="glass-card rounded-xl p-6 h-full">
                      <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-outline-variant/10">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined notranslate text-primary text-lg">
                            {p.icon}
                          </span>
                        </div>
                        <h3 className="font-semibold text-on-background">
                          {p.name}
                        </h3>
                      </div>
                      <dl className="space-y-3.5 text-sm">
                        {[
                          { label: "Operating System", value: req.os },
                          { label: "Memory", value: req.ram },
                          { label: "Disk Space", value: req.disk },
                          { label: "Additional", value: req.extras },
                        ].map((r) => (
                          <div key={r.label}>
                            <dt className="text-on-surface-variant/40 text-xs font-medium mb-0.5">
                              {r.label}
                            </dt>
                            <dd className="text-on-surface-variant/80">
                              {r.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="border-t border-outline-variant/10" />
        </div>

        {/* ── Quick Start ── */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="font-display-lg text-2xl md:text-3xl mb-2 text-on-background">
                  Up and running in minutes
                </h2>
                <p className="text-on-surface-variant/50 text-sm">
                  Three steps from download to your first AI-powered API call.
                </p>
              </div>
            </Reveal>

            <StaggerContainer stagger={0.12} className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Install UniLink",
                  code: "# Download and run the installer\n$ unilink setup",
                },
                {
                  step: "02",
                  title: "Connect a model",
                  code: "$ unilink add provider openai --key sk-...\n$ unilink add model llama3 --source gguf",
                },
                {
                  step: "03",
                  title: "Start building",
                  code: "$ unilink start\n\n✓ API Server at http://localhost:8420\n✓ 3 models connected · Dashboard at :8421",
                },
              ].map((s) => (
                <StaggerItem key={s.step}>
                  <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm font-code-sm shrink-0">
                      {s.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-on-background mb-3">
                        {s.title}
                      </h3>
                      <pre className="bg-surface-container-lowest/60 border border-outline-variant/10 rounded-xl p-4 text-xs font-code-sm text-on-surface-variant/70 overflow-x-auto whitespace-pre">
                        {s.code}
                      </pre>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="border-t border-outline-variant/10" />
        </div>

        {/* ── Need Help? ── */}
        <section className="py-16 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-10">
                <h2 className="font-display-lg text-2xl md:text-3xl text-on-background">
                  Need help?
                </h2>
              </div>
            </Reveal>
            <StaggerContainer
              stagger={0.08}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                {
                  icon: "menu_book",
                  title: "Documentation",
                  desc: "Installation guides, API reference, and tutorials",
                  href: "#",
                },
                {
                  icon: "forum",
                  title: "Community",
                  desc: "Join our Discord for support and discussion",
                  href: "#",
                },
                {
                  icon: "bug_report",
                  title: "Report an Issue",
                  desc: "Found a bug? Open an issue on GitHub",
                  href: "https://github.com/SagarKapase/unilink_web/issues",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-xl p-6 block group text-center h-full"
                  >
                    <span className="material-symbols-outlined notranslate text-primary text-2xl mb-3 block group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <h3 className="font-semibold text-on-background mb-1.5 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant/50 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="relative py-20 px-margin-mobile md:px-margin-desktop text-center overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] glow-blue opacity-15 -z-10" />
          <Reveal>
            <div className="max-w-xl mx-auto space-y-4">
              <h2 className="font-display-lg text-3xl tracking-tight text-on-background">
                Start connecting today
              </h2>
              <p className="text-on-surface-variant/50 text-sm">
                Free for individual developers. No credit card required.
              </p>
              <a
                href="#"
                className="bg-primary text-on-primary font-bold px-10 py-4 rounded-full text-lg animate-glow-pulse hover:scale-105 active:scale-95 transition-transform duration-300 inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined notranslate">download</span>
                Download UniLink
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
