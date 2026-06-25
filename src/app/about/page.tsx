import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollProgress, Entrance, Reveal, StaggerContainer, StaggerItem, Counter } from "@/components/motion";
import { TiltCard } from "@/components/interactive";

export const metadata: Metadata = {
  title: "About | Manthan Software Technologies",
  description: "The story behind Manthan — our mission, team, and the values that drive intelligent software development.",
};

const values = [
  { icon: "auto_awesome", title: "AI-First Thinking", description: "Every solution we build starts with the question: how can AI make this smarter?" },
  { icon: "handshake", title: "Client Partnership", description: "We don't just deliver code — we embed in your team and own outcomes together." },
  { icon: "speed", title: "Ship Fast, Ship Right", description: "Rapid iteration with engineering rigor. No shortcuts, no bloat." },
  { icon: "lock", title: "Trust & Transparency", description: "Open communication, honest timelines, and no surprises." },
];

const team = [
  { name: "Sagar K.", role: "Founder & CEO", color: "bg-primary" },
  { name: "Arjun M.", role: "CTO", color: "bg-secondary" },
  { name: "Priya S.", role: "Head of AI", color: "bg-tertiary" },
  { name: "Rahul D.", role: "Lead Engineer", color: "bg-green-500" },
  { name: "Neha P.", role: "Design Lead", color: "bg-amber-500" },
  { name: "Vikram T.", role: "DevOps Lead", color: "bg-red-400" },
];

const milestones = [
  { year: "2020", event: "Manthan founded with a vision for AI-powered development" },
  { year: "2021", event: "First enterprise client — healthcare platform delivery" },
  { year: "2022", event: "Team grows to 15 engineers, launches consulting practice" },
  { year: "2023", event: "UniLink conceived — solving the multi-LLM connectivity problem" },
  { year: "2024", event: "UniLink v1.0 launched, 25+ engineers, 30+ clients" },
  { year: "2025", event: "AI Agent Studio and Workflow Engine enter development" },
];

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden text-center">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] glow-blue -z-10 animate-float-slow" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] glow-purple -z-10 animate-float-slow-reverse" />
          <div className="max-w-3xl mx-auto">
            <Entrance>
              <p className="font-label-caps text-label-caps text-primary mb-6">OUR STORY</p>
            </Entrance>
            <Entrance delay={0.1}>
              <h1 className="font-display-lg text-5xl md:text-7xl tracking-tight text-on-background mb-6">
                Building the future of{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">software</span>
              </h1>
            </Entrance>
            <Entrance delay={0.2}>
              <p className="text-lg text-on-surface-variant/70 max-w-xl mx-auto">
                Manthan was born from a simple belief: software development should be faster,
                smarter, and powered by AI at every stage.
              </p>
            </Entrance>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <h2 className="font-display-lg text-3xl md:text-4xl mb-6">Our Mission</h2>
                <p className="text-on-surface-variant/70 leading-relaxed mb-4">
                  We streamline the complete software development lifecycle through intelligent
                  workflow automation. From ideation to production, we help engineering teams
                  ship better software, faster.
                </p>
                <p className="text-on-surface-variant/70 leading-relaxed">
                  Whether it&apos;s a custom platform, an AI integration, or scaling your team —
                  Manthan is the engineering partner that grows with you.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="glass-card rounded-3xl p-10 text-center">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: 50, suffix: "+", label: "Projects", color: "text-primary" },
                    { value: 25, suffix: "+", label: "Engineers", color: "text-secondary" },
                    { value: 30, suffix: "+", label: "Clients", color: "text-tertiary" },
                    { value: 5, suffix: "+", label: "Years", color: "text-green-400" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className={`text-3xl font-bold ${s.color} font-display-lg`}>
                        <Counter value={s.value} />{s.suffix}
                      </div>
                      <div className="text-xs text-on-surface-variant/40 mt-1 font-code-sm">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/30">
          <div className="max-w-[1440px] mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display-lg text-3xl md:text-4xl mb-4">What drives us</h2>
              </div>
            </Reveal>
            <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <TiltCard>
                    <div className="glass-card p-8 rounded-2xl h-full text-center group hover:border-primary/20 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined notranslate text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{v.icon}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                      <p className="text-sm text-on-surface-variant/60 leading-relaxed">{v.description}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display-lg text-3xl md:text-4xl mb-4">Our team</h2>
                <p className="text-on-surface-variant/60">Engineers, designers, and AI specialists building the next generation of dev tools.</p>
              </div>
            </Reveal>
            <StaggerContainer stagger={0.08} className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((t) => (
                <StaggerItem key={t.name}>
                  <div className="glass-card rounded-2xl p-6 text-center group hover:border-outline-variant/30 transition-colors">
                    <div className={`w-16 h-16 rounded-full ${t.color} mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold`}>
                      {t.name.charAt(0)}
                    </div>
                    <h4 className="font-semibold text-on-background">{t.name}</h4>
                    <p className="text-xs text-on-surface-variant/50 mt-1">{t.role}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/30">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <h2 className="font-display-lg text-3xl md:text-4xl text-center mb-16">Our journey</h2>
            </Reveal>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.08}>
                  <div className="flex gap-6 pb-10 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold font-code-sm shrink-0">{m.year}</div>
                      {i < milestones.length - 1 && <div className="w-px flex-1 bg-outline-variant/15 mt-2" />}
                    </div>
                    <p className="text-on-surface-variant/70 pt-2 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop text-center">
          <Reveal>
            <h2 className="font-display-lg text-4xl md:text-5xl mb-6">Want to join us?</h2>
            <p className="text-on-surface-variant/60 mb-8 max-w-md mx-auto">We&apos;re always looking for talented engineers and designers.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/careers" className="bg-primary text-on-primary font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 hover:brightness-110 transition-all">
                <span className="material-symbols-outlined notranslate text-lg">work</span> View Careers
              </a>
              <a href="/contact" className="px-8 py-3.5 rounded-full font-medium border border-outline-variant/30 hover:bg-white/5 transition-all">Contact Us</a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
