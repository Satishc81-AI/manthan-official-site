import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import NetworkGrid from "@/components/network-grid";
import { TiltCard, MagneticButton, DraggableCard } from "@/components/interactive";
import {
  Entrance,
  Reveal,
  StaggerContainer,
  StaggerItem,
  Counter,
  ScrollProgress,
  HeroParallax,
  Parallax,
} from "@/components/motion";

const services = [
  { icon: "code", title: "Custom Development", description: "End-to-end application engineering — web, mobile, desktop, and cloud-native platforms built for scale.", color: "bg-blue-500/15 text-blue-400" },
  { icon: "psychology", title: "AI & Automation", description: "Integrate AI into your workflows with LLM connectivity, intelligent agents, and pipeline automation.", color: "bg-purple-500/15 text-purple-400" },
  { icon: "lightbulb", title: "Consulting & Strategy", description: "Technical architecture, system design, and digital transformation consulting for engineering teams.", color: "bg-amber-500/15 text-amber-400" },
  { icon: "group_add", title: "Team Augmentation", description: "Scale your engineering capacity with our senior developers, embedded directly in your workflow.", color: "bg-green-500/15 text-green-400" },
];

const process = [
  { num: "01", title: "Discover", description: "Understand your challenges, goals, and technical landscape.", icon: "search" },
  { num: "02", title: "Design", description: "Architect the right solution with clear milestones.", icon: "draw" },
  { num: "03", title: "Build", description: "Agile development with continuous integration and delivery.", icon: "construction" },
  { num: "04", title: "Support", description: "Ongoing maintenance, optimization, and iteration.", icon: "support" },
];

const impact = [
  { metric: "40%", label: "Faster Deployments", industry: "Healthcare", description: "Automated CI/CD pipeline reducing deployment time from hours to minutes.", bars: [30, 45, 55, 65, 80, 92, 100] },
  { metric: "3x", label: "Model Accuracy", industry: "Fintech", description: "Custom AI pipeline that tripled prediction accuracy for fraud detection.", bars: [20, 35, 40, 55, 70, 85, 95] },
  { metric: "60%", label: "Cost Reduction", industry: "SaaS", description: "Cloud-native migration that cut operational costs by more than half.", bars: [90, 80, 65, 55, 45, 38, 35] },
];

const TECHS = [
  "React", "Next.js", "TypeScript", "Python", "Node.js",
  "TensorFlow", "PyTorch", "LangChain", "OpenAI", "AWS",
  "Docker", "Kubernetes", "PostgreSQL", "Redis", "GraphQL",
];

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main className="pt-20">
        {/* ── Hero ── */}
        <section className="relative pt-16 pb-8 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-70">
            <NetworkGrid />
          </div>
          <div className="absolute top-0 left-0 w-[600px] h-[600px] glow-blue -z-10 animate-float-slow" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] glow-purple -z-10 animate-float-slow-reverse" />
          {/* Abstract geometric accents */}
          <div className="absolute top-32 right-[10%] w-72 h-72 border border-primary/5 rounded-full -z-10 animate-float-slow-reverse" />
          <div className="absolute bottom-20 left-[5%] w-48 h-48 border border-secondary/5 rounded-full -z-10 animate-float-slow" />

          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <div className="text-center lg:text-left space-y-5">
                <Entrance>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-outline-variant/20 bg-surface-container/50 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-on-surface-variant font-medium">
                      Manthan Software Technologies
                    </span>
                  </div>
                </Entrance>

                <Entrance delay={0.1}>
                  <h1 className="font-display-lg text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-on-background">
                    From Idea to
                    <br />
                    <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-text text-glow">
                      Production.
                    </span>
                  </h1>
                </Entrance>

                <Entrance delay={0.2}>
                  <p className="font-body-md text-on-surface-variant text-lg max-w-lg mx-auto lg:mx-0 opacity-80">
                    We streamline the complete software development lifecycle
                    through intelligent workflow automation, custom engineering,
                    and AI-powered tools.
                  </p>
                </Entrance>

                <Entrance delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 pt-2">
                    <MagneticButton>
                      <a href="#products" className="w-full sm:w-auto bg-primary text-on-primary font-bold px-8 py-3.5 rounded-full text-base animate-glow-pulse transition-all hover:brightness-110 hover:scale-[1.02] active:scale-95 inline-flex items-center justify-center gap-2">
                        Explore Solutions
                      </a>
                    </MagneticButton>
                    <MagneticButton>
                      <a href="/contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-medium border border-outline-variant/30 hover:bg-white/5 hover:border-outline-variant/60 transition-all inline-flex items-center justify-center gap-2">
                        Talk to Us
                      </a>
                    </MagneticButton>
                  </div>
                </Entrance>

                <Entrance delay={0.4}>
                  <p className="text-sm text-on-surface-variant/40 pt-1">
                    Trusted by 30+ companies across healthcare, fintech, and SaaS
                  </p>
                </Entrance>
              </div>

              <HeroParallax className="hidden lg:block">
                <Entrance delay={0.35}>
                  <div className="relative min-h-[520px]">
                    <div className="absolute inset-0 -z-10 opacity-40">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 blur-[80px]" />
                    </div>

                    {/* Main card — dev lifecycle */}
                    <div className="absolute top-10 left-4 right-4 animate-float-card">
                      <div className="glass-card rounded-2xl overflow-hidden border-primary/15 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
                        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-outline-variant/10 bg-surface-container-lowest/60">
                          <div className="w-2 h-2 rounded-full bg-red-500/50" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                          <div className="w-2 h-2 rounded-full bg-green-500/50" />
                          <span className="ml-2 text-[10px] text-on-surface-variant/30 font-code-sm">manthan — workflow</span>
                        </div>
                        <div className="p-5">
                          <div className="text-xs font-semibold text-on-surface-variant/70 mb-4">Development Pipeline</div>
                          <div className="flex items-center gap-2 mb-5">
                            {["Plan", "Code", "Test", "Deploy", "Monitor"].map((stage, i) => (
                              <div key={stage} className="flex items-center gap-2">
                                <div className={`px-3 py-1.5 rounded-lg text-[10px] font-medium ${i < 4 ? "bg-green-500/15 text-green-400" : "bg-outline-variant/15 text-on-surface-variant/50"}`}>
                                  {i < 4 && <span className="mr-1">✓</span>}{stage}
                                </div>
                                {i < 4 && <div className="w-3 h-px bg-outline-variant/20" />}
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { label: "Builds", value: "847", trend: "+12%" },
                              { label: "Deploys", value: "234", trend: "+8%" },
                              { label: "Uptime", value: "99.99%", trend: "" },
                            ].map((m) => (
                              <div key={m.label} className="bg-surface-container-lowest/30 border border-outline-variant/8 rounded-lg p-2.5">
                                <div className="text-[9px] text-on-surface-variant/40">{m.label}</div>
                                <div className="text-sm font-bold text-on-background/80">{m.value}</div>
                                {m.trend && <div className="text-[9px] text-green-400">{m.trend}</div>}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* UniLink badge */}
                    <div className="absolute -top-2 -right-2 z-20 animate-float-slow">
                      <div className="-rotate-2">
                        <div className="glass-card rounded-xl p-4 border-secondary/20 shadow-xl w-[160px]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined notranslate text-primary text-base">hub</span>
                            <span className="text-xs font-semibold text-on-background">UniLink</span>
                          </div>
                          <div className="text-[10px] text-on-surface-variant/50">4 models connected</div>
                          <div className="flex items-center gap-1 mt-1.5 text-[10px] text-green-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />Running
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Team card */}
                    <div className="absolute bottom-6 -left-2 z-20 animate-float-slow-reverse">
                      <div className="rotate-1">
                        <div className="glass-card rounded-xl p-4 border-green-500/15 shadow-xl w-[180px]">
                          <div className="text-xs font-semibold text-on-background mb-2">Engineering Team</div>
                          <div className="flex -space-x-2 mb-2">
                            {["bg-blue-500", "bg-purple-500", "bg-amber-500", "bg-green-500", "bg-red-500"].map((c, i) => (
                              <div key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-surface-container`} />
                            ))}
                            <div className="w-6 h-6 rounded-full bg-outline-variant/30 border-2 border-surface-container flex items-center justify-center text-[8px] text-on-surface-variant/60">+20</div>
                          </div>
                          <div className="text-[10px] text-on-surface-variant/50">25+ engineers across 3 time zones</div>
                        </div>
                      </div>
                    </div>

                    {/* Code card */}
                    <div className="absolute bottom-2 right-2 z-20 animate-float-card [animation-delay:1.5s]">
                      <div className="-rotate-1">
                        <div className="glass-card rounded-xl p-4 border-tertiary/15 shadow-xl w-[200px]">
                          <div className="text-[10px] text-on-surface-variant/40 mb-2 font-code-sm">manthan.config.ts</div>
                          <pre className="text-[10px] font-code-sm leading-relaxed">
                            <span className="text-secondary/70">export</span>{" "}
                            <span className="text-on-background/70">pipeline</span>{" = {\n"}
                            {"  "}<span className="text-tertiary/70">ci</span>: <span className="text-tertiary/70">&quot;auto&quot;</span>,{"\n  "}
                            <span className="text-tertiary/70">deploy</span>: <span className="text-tertiary/70">&quot;prod&quot;</span>{"\n}"}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </Entrance>
              </HeroParallax>
            </div>
          </div>
        </section>

        {/* ── Social Proof ── */}
        <section className="py-16 border-y border-outline-variant/10">
          <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
            <Reveal>
              <p className="text-center font-label-caps text-label-caps text-outline mb-10">
                TRUSTED BY ENGINEERING TEAMS AT
              </p>
            </Reveal>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {["HealthCo", "FinEdge", "ScaleUp", "DataFlow", "CloudPeak", "NovaSoft"].map((name) => (
                <StaggerItem key={name}>
                  <div className="flex justify-center text-lg md:text-xl font-bold text-on-surface-variant/25 hover:text-on-surface-variant/50 transition-colors">{name}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── AI Mission ── */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px] animate-float-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/4 blur-[100px] animate-float-slow-reverse" />
          </div>
          <div className="absolute top-10 left-[10%] w-32 h-32 border border-primary/5 rounded-full -z-10" />
          <div className="absolute bottom-10 right-[15%] w-24 h-24 border border-secondary/5 rounded-full -z-10" />

          <div className="max-w-3xl mx-auto text-center px-margin-mobile">
            <Reveal>
              <span
                className="material-symbols-outlined notranslate text-primary/30 text-6xl mb-8 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl md:text-3xl lg:text-4xl font-display-lg leading-[1.4] text-on-background/90 tracking-tight">
                We believe AI should{" "}
                <span className="text-primary">
                  amplify human capability
                </span>
                , not replace it. Every tool we build, every system we
                architect, starts with this principle.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Products ── */}
        <section id="products" className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/30 relative overflow-hidden">
          <div className="absolute -right-40 top-20 w-80 h-80 border border-primary/3 rounded-full -z-10" />

          <div className="max-w-[1440px] mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display-lg text-4xl md:text-5xl mb-4">Products</h2>
                <p className="font-body-md text-on-surface-variant opacity-60 max-w-lg mx-auto">AI-powered tools built by Manthan to solve real engineering problems.</p>
              </div>
            </Reveal>

            {/* UniLink featured */}
            <Reveal>
              <div className="glass-card rounded-3xl p-8 md:p-12 mb-8 border-primary/15 hover:border-primary/25 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined notranslate" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl text-on-background">UniLink</h3>
                        <p className="text-xs text-on-surface-variant/50">Universal AI Connectivity Platform</p>
                      </div>
                      <span className="px-2.5 py-0.5 bg-green-500/15 text-green-400 text-[10px] font-bold rounded-full uppercase tracking-wider ml-2">Live</span>
                    </div>
                    <p className="text-on-surface-variant/70 mb-6 max-w-xl">
                      Connect any LLM — OpenAI, Anthropic, Mistral, or local GGUF — through a single unified API. Switch models without changing a line of code.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {["Multi-provider routing", "Local GGUF support", "Auto API backend", "Works offline"].map((f) => (
                        <span key={f} className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant/50 px-3 py-1.5 bg-surface-container-highest/30 rounded-full">
                          <span className="material-symbols-outlined notranslate text-[14px] text-primary/60">check</span>{f}
                        </span>
                      ))}
                    </div>
                    <a href="/downloads" className="inline-flex items-center gap-2 bg-primary text-on-primary font-bold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all">
                      <span className="material-symbols-outlined notranslate text-lg">download</span>
                      Download UniLink
                    </a>
                  </div>
                  <div className="hidden lg:block w-[280px] shrink-0">
                    <div className="glass-card rounded-xl p-4 border-primary/10">
                      <div className="space-y-2">
                        {[
                          { model: "GPT-4o", provider: "OpenAI", dot: "bg-green-400" },
                          { model: "Claude 3.5", provider: "Anthropic", dot: "bg-amber-400" },
                          { model: "Llama 3 8B", provider: "Local", dot: "bg-blue-400" },
                        ].map((m) => (
                          <div key={m.model} className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface-container-lowest/30 border border-outline-variant/8 text-xs">
                            <div>
                              <div className="font-medium text-on-background/80">{m.model}</div>
                              <div className="text-[9px] text-on-surface-variant/40">{m.provider}</div>
                            </div>
                            <div className={`w-1.5 h-1.5 rounded-full ${m.dot}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Coming soon */}
            <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "smart_toy", name: "AI Agent Studio", desc: "Build and deploy autonomous AI agents with visual orchestration." },
                { icon: "science", name: "AI Testing Platform", desc: "Enterprise-grade testing and evaluation for LLM applications." },
                { icon: "account_tree", name: "Workflow Engine", desc: "Automate development pipelines with intelligent triggers." },
              ].map((p) => (
                <StaggerItem key={p.name}>
                  <div className="glass-card rounded-2xl p-8 h-full opacity-60 hover:opacity-80 transition-opacity">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined notranslate">{p.icon}</span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 bg-secondary/15 text-secondary rounded-full font-bold uppercase tracking-wider">Coming Soon</span>
                    </div>
                    <h4 className="font-semibold text-lg text-on-background mb-2">{p.name}</h4>
                    <p className="text-sm text-on-surface-variant/50">{p.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
          <div className="absolute -left-32 bottom-0 w-64 h-64 border border-secondary/3 rounded-full -z-10" />

          <div className="max-w-[1440px] mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display-lg text-4xl md:text-5xl mb-4">Services</h2>
                <p className="font-body-md text-on-surface-variant opacity-60 max-w-lg mx-auto">Full-service software engineering — from architecture to production.</p>
              </div>
            </Reveal>

            <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <StaggerItem key={s.title}>
                  <TiltCard>
                    <div className="glass-card p-8 rounded-2xl h-full group hover:border-outline-variant/30 transition-colors">
                      <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="material-symbols-outlined notranslate text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                      </div>
                      <h3 className="font-semibold text-lg text-on-background mb-2">{s.title}</h3>
                      <p className="text-sm text-on-surface-variant/60 leading-relaxed">{s.description}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Impact / Case Studies ── */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] glow-blue opacity-20 -z-10" />

          <div className="max-w-[1440px] mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display-lg text-4xl md:text-5xl mb-4">Impact</h2>
                <p className="font-body-md text-on-surface-variant opacity-60 max-w-lg mx-auto">Real results from real projects.</p>
              </div>
            </Reveal>

            <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impact.map((c) => (
                <StaggerItem key={c.label}>
                  <TiltCard intensity={8}>
                  <div className="glass-card rounded-2xl p-8 h-full group hover:border-primary/20 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] px-2.5 py-0.5 bg-outline-variant/15 text-on-surface-variant/50 rounded-full uppercase tracking-wider font-code-sm">
                        {c.industry}
                      </span>
                    </div>
                    <div className="text-5xl font-bold text-primary font-display-lg mb-1">
                      {c.metric}
                    </div>
                    <div className="text-lg font-semibold text-on-background mb-3">
                      {c.label}
                    </div>
                    <p className="text-sm text-on-surface-variant/50 mb-6">
                      {c.description}
                    </p>
                    {/* Mini bar chart */}
                    <div className="flex items-end gap-1.5 h-14">
                      {c.bars.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-primary transition-all duration-500 group-hover:bg-secondary"
                          style={{ height: `${h}%`, opacity: 0.2 + (h / 100) * 0.6 }}
                        />
                      ))}
                    </div>
                  </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] glow-purple -z-10 opacity-20 animate-float-slow-reverse" />
          <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="font-display-lg text-3xl md:text-4xl mb-4">What our clients say</h2>
              </div>
            </Reveal>
            <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "Manthan integrated AI into our platform in 6 weeks. Their team felt like an extension of ours.", name: "Arjun Mehta", role: "CTO, HealthCo", color: "border-blue-500/20" },
                { quote: "We went from 4-hour deploys to 25 minutes. The ROI was obvious within the first month.", name: "Priya Sharma", role: "VP Engineering, FinEdge", color: "border-purple-500/20" },
                { quote: "They didn't just deliver code — they helped us rethink our entire architecture. Rare for an outsourced team.", name: "Rahul Desai", role: "Founder, ScaleUp", color: "border-green-500/20" },
              ].map((t) => (
                <StaggerItem key={t.name}>
                  <div className={`glass-card rounded-2xl p-8 h-full border-l-2 ${t.color}`}>
                    <span className="material-symbols-outlined notranslate text-primary/20 text-3xl mb-4 block">format_quote</span>
                    <p className="text-on-surface-variant/80 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                    <div>
                      <div className="font-semibold text-sm text-on-background">{t.name}</div>
                      <div className="text-xs text-on-surface-variant/40">{t.role}</div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── How We Work ── */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 border border-primary/5 rounded-3xl rotate-12 -z-10" />
          <div className="absolute -right-10 top-[45%] -translate-y-1/2 w-32 h-32 border border-secondary/5 rounded-2xl -rotate-6 -z-10" />

          <div className="max-w-[1440px] mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display-lg text-4xl md:text-5xl mb-4">How we work</h2>
                <p className="font-body-md text-on-surface-variant opacity-60 max-w-lg mx-auto">A proven process refined across 50+ projects.</p>
              </div>
            </Reveal>

            <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((s) => (
                <StaggerItem key={s.num}>
                  <DraggableCard>
                  <div className="glass-card p-8 rounded-2xl h-full group hover:border-primary/20 transition-colors text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined notranslate text-2xl">{s.icon}</span>
                    </div>
                    <span className="text-[10px] text-primary/50 font-code-sm font-bold tracking-widest">
                      STEP {s.num}
                    </span>
                    <h3 className="font-semibold text-xl text-on-background mt-2 mb-3">{s.title}</h3>
                    <p className="text-sm text-on-surface-variant/60 leading-relaxed">{s.description}</p>
                  </div>
                  </DraggableCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Tech Stack Ticker ── */}
        <section className="py-10 border-y border-outline-variant/10 overflow-hidden bg-surface-container-lowest/30">
          <Reveal>
            <p className="text-center font-label-caps text-label-caps text-outline mb-6">
              TECHNOLOGIES WE WORK WITH
            </p>
          </Reveal>
          <div className="ticker-mask">
            <div className="ticker-track flex items-center whitespace-nowrap" style={{ animationDuration: "40s" }}>
              {[...TECHS, ...TECHS].map((tech, i) => (
                <span key={`${tech}-${i}`} className="inline-flex items-center gap-3 px-8 text-base text-on-surface-variant/30 font-code-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section id="about" className="py-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <TiltCard intensity={5}>
              <div className="glass-card rounded-3xl p-10 md:p-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                  {[
                    { value: 50, decimals: 0, suffix: "+", label: "Projects Delivered", color: "text-primary" },
                    { value: 25, decimals: 0, suffix: "+", label: "Engineers", color: "text-secondary" },
                    { value: 99.99, decimals: 2, suffix: "%", label: "Uptime SLA", color: "text-tertiary" },
                    { value: 5, decimals: 0, suffix: "+", label: "Years", color: "text-green-400" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className={`text-4xl md:text-5xl font-bold ${s.color} font-display-lg`}>
                        <Counter value={s.value} decimals={s.decimals} />{s.suffix}
                      </div>
                      <div className="text-xs text-on-surface-variant/40 mt-2 uppercase tracking-wider font-code-sm">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* ── CTA / Contact ── */}
        <section id="contact" className="relative py-40 px-margin-mobile md:px-margin-desktop text-center overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] glow-blue opacity-25 -z-10 animate-float-slow" />
          <div className="absolute top-20 right-[20%] w-48 h-48 border border-primary/5 rounded-full -z-10 animate-float-slow-reverse" />
          <div className="absolute bottom-32 left-[15%] w-32 h-32 border border-secondary/5 rounded-full -z-10 animate-float-slow" />

          <div className="max-w-3xl mx-auto space-y-10">
            <Reveal>
              <h2 className="font-display-lg text-4xl sm:text-5xl md:text-7xl tracking-tighter">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">great</span>{" "}
                together.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body-md text-xl text-on-surface-variant max-w-xl mx-auto opacity-60">
                Whether you need a custom platform, AI integration, or a
                dedicated engineering team — we&apos;re ready.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton strength={0.2}>
                  <a href="mailto:hello@manthansoft.com" className="inline-flex items-center gap-2 bg-primary text-on-primary font-bold px-10 py-4 rounded-full text-lg animate-glow-pulse hover:scale-105 active:scale-95 transition-transform duration-300">
                    <span className="material-symbols-outlined notranslate">mail</span>
                    hello@manthansoft.com
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <a href="#" className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg font-medium border border-outline-variant/30 hover:bg-white/5 transition-all">
                    <span className="material-symbols-outlined notranslate">calendar_today</span>
                    Schedule a Call
                  </a>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
