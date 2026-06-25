import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollProgress, Entrance, Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { TiltCard } from "@/components/interactive";

export const metadata: Metadata = {
  title: "Careers | Manthan Software Technologies",
  description: "Join Manthan — we're building AI-powered development tools and looking for talented engineers, designers, and AI specialists.",
};

const benefits = [
  { icon: "laptop_mac", title: "Remote-First", description: "Work from anywhere. Async-first culture with flexible hours." },
  { icon: "school", title: "Learning Budget", description: "Annual budget for courses, conferences, and certifications." },
  { icon: "health_and_safety", title: "Health Coverage", description: "Comprehensive health insurance for you and your family." },
  { icon: "rocket_launch", title: "Equity Options", description: "Early-stage equity so you share in our growth." },
  { icon: "devices", title: "Top-Tier Gear", description: "MacBook Pro, 4K display, and any tools you need." },
  { icon: "calendar_today", title: "Flexible PTO", description: "Take the time you need. No tracking, no guilt." },
];

const positions = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", type: "Full-time · Remote", tags: ["React", "Node.js", "TypeScript"] },
  { title: "AI/ML Engineer", team: "AI Platform", type: "Full-time · Remote", tags: ["Python", "LLMs", "RAG"] },
  { title: "DevOps Engineer", team: "Infrastructure", type: "Full-time · Remote", tags: ["AWS", "Kubernetes", "Terraform"] },
  { title: "Product Designer", team: "Design", type: "Full-time · Remote", tags: ["Figma", "Design Systems", "UX"] },
];

export default function CareersPage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden text-center">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] glow-purple -z-10 animate-float-slow" />
          <div className="max-w-3xl mx-auto">
            <Entrance><p className="font-label-caps text-label-caps text-primary mb-6">CAREERS</p></Entrance>
            <Entrance delay={0.1}>
              <h1 className="font-display-lg text-5xl md:text-7xl tracking-tight mb-6">Build with{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">purpose</span>
              </h1>
            </Entrance>
            <Entrance delay={0.2}>
              <p className="text-lg text-on-surface-variant/70 max-w-xl mx-auto">
                We&apos;re a small team solving big problems. If you care about AI, developer tools, and shipping great software — you&apos;ll fit right in.
              </p>
            </Entrance>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-[1440px] mx-auto">
            <Reveal><h2 className="font-display-lg text-3xl md:text-4xl text-center mb-14">Why Manthan</h2></Reveal>
            <StaggerContainer stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <StaggerItem key={b.title}>
                  <TiltCard>
                    <div className="glass-card p-8 rounded-2xl h-full group hover:border-primary/20 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined notranslate text-xl">{b.icon}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                      <p className="text-sm text-on-surface-variant/60 leading-relaxed">{b.description}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/30">
          <div className="max-w-3xl mx-auto">
            <Reveal><h2 className="font-display-lg text-3xl md:text-4xl text-center mb-14">Open positions</h2></Reveal>
            <StaggerContainer stagger={0.1} className="space-y-4">
              {positions.map((p) => (
                <StaggerItem key={p.title}>
                  <a href={`mailto:careers@manthansoft.com?subject=Application: ${p.title}`} className="block glass-card rounded-2xl p-6 md:p-8 group hover:border-primary/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-on-surface-variant/50">
                          <span>{p.team}</span><span>·</span><span>{p.type}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {p.tags.map((t) => (
                            <span key={t} className="text-[10px] px-2 py-0.5 bg-outline-variant/15 text-on-surface-variant/50 rounded-full font-code-sm">{t}</span>
                          ))}
                        </div>
                      </div>
                      <span className="material-symbols-outlined notranslate text-on-surface-variant/30 group-hover:text-primary group-hover:translate-x-1 transition-all text-2xl hidden md:block">arrow_forward</span>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal>
              <div className="glass-card rounded-2xl p-8 mt-10 text-center">
                <h3 className="font-semibold text-lg mb-2">Don&apos;t see your role?</h3>
                <p className="text-sm text-on-surface-variant/60 mb-4">We&apos;re always looking for exceptional people. Send us your resume.</p>
                <a href="mailto:careers@manthansoft.com" className="text-primary text-sm font-medium hover:underline">careers@manthansoft.com</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
