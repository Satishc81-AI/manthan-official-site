import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollProgress, Entrance, Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { TiltCard } from "@/components/interactive";

export const metadata: Metadata = {
  title: "Case Studies | Manthan Software Technologies",
  description: "See how Manthan delivers real results — from 40% faster deployments to 3x model accuracy improvements.",
};

const studies = [
  {
    client: "HealthCo",
    industry: "Healthcare",
    title: "Automating CI/CD for a Health-Tech Platform",
    description: "HealthCo needed to reduce deployment time for a platform serving 2M+ patients. We automated their entire CI/CD pipeline, implemented blue-green deployments, and built a custom monitoring dashboard.",
    metric: "40%",
    metricLabel: "Faster Deployments",
    services: ["Custom Development", "DevOps"],
    results: ["Deployment time: 4 hours → 25 minutes", "Zero-downtime releases", "Automated rollback on failure", "99.99% uptime SLA achieved"],
    color: "text-blue-400",
    bars: [30, 45, 55, 65, 80, 92, 100],
  },
  {
    client: "FinEdge",
    industry: "Fintech",
    title: "AI-Powered Fraud Detection Pipeline",
    description: "FinEdge's existing rule-based fraud system was missing 60% of novel fraud patterns. We built a custom ML pipeline with real-time scoring and human-in-the-loop review.",
    metric: "3x",
    metricLabel: "Detection Accuracy",
    services: ["AI & Automation", "Consulting"],
    results: ["False positive rate reduced by 70%", "Real-time scoring under 50ms", "Custom model training pipeline", "Regulatory compliance maintained"],
    color: "text-purple-400",
    bars: [20, 35, 40, 55, 70, 85, 95],
  },
  {
    client: "ScaleUp",
    industry: "SaaS",
    title: "Cloud-Native Migration & Cost Optimization",
    description: "ScaleUp was spending $180K/month on legacy infrastructure. We re-architected their platform on Kubernetes with auto-scaling, cutting costs while improving performance.",
    metric: "60%",
    metricLabel: "Cost Reduction",
    services: ["Consulting", "Custom Development"],
    results: ["Monthly infra cost: $180K → $72K", "Auto-scaling handles 10x traffic spikes", "Containerized microservices architecture", "Team trained on cloud-native practices"],
    color: "text-green-400",
    bars: [90, 80, 65, 55, 45, 38, 35],
  },
  {
    client: "DataFlow",
    industry: "Enterprise",
    title: "Team Augmentation for AI Product Launch",
    description: "DataFlow needed 8 senior engineers in 3 weeks to hit their product launch deadline. We embedded a cross-functional team that shipped the v1.0 on time.",
    metric: "3 wks",
    metricLabel: "Time to Full Team",
    services: ["Team Augmentation"],
    results: ["8 engineers onboarded in 3 weeks", "Shipped v1.0 on deadline", "Team retained for 12+ months", "Zero attrition during engagement"],
    color: "text-amber-400",
    bars: [100, 95, 90, 88, 85, 85, 85],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden text-center">
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] glow-purple -z-10 animate-float-slow" />
          <div className="max-w-3xl mx-auto">
            <Entrance><p className="font-label-caps text-label-caps text-primary mb-6">CASE STUDIES</p></Entrance>
            <Entrance delay={0.1}>
              <h1 className="font-display-lg text-5xl md:text-7xl tracking-tight mb-6">Real{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">impact</span>
              </h1>
            </Entrance>
            <Entrance delay={0.2}>
              <p className="text-lg text-on-surface-variant/70 max-w-xl mx-auto">Concrete results from real engagements. No vanity metrics.</p>
            </Entrance>
          </div>
        </section>

        <section className="py-12 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-5xl mx-auto">
            <StaggerContainer stagger={0.15} className="space-y-10">
              {studies.map((s) => (
                <StaggerItem key={s.client}>
                  <TiltCard intensity={6}>
                    <div className="glass-card rounded-3xl p-8 md:p-12 hover:border-primary/15 transition-colors">
                      <div className="flex flex-col lg:flex-row gap-10">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-[10px] px-2.5 py-0.5 bg-outline-variant/15 text-on-surface-variant/50 rounded-full uppercase tracking-wider font-code-sm">{s.industry}</span>
                            <span className="text-[10px] text-on-surface-variant/30">{s.client}</span>
                          </div>
                          <h2 className="font-semibold text-2xl text-on-background mb-4">{s.title}</h2>
                          <p className="text-on-surface-variant/60 mb-6">{s.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {s.services.map((svc) => (
                              <span key={svc} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">{svc}</span>
                            ))}
                          </div>
                          <ul className="space-y-2">
                            {s.results.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-sm text-on-surface-variant/60">
                                <span className="material-symbols-outlined notranslate text-primary text-sm mt-0.5">check</span>{r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="lg:w-[220px] shrink-0 flex flex-col items-center justify-center">
                          <div className={`text-6xl font-bold font-display-lg ${s.color} mb-2`}>{s.metric}</div>
                          <div className="font-semibold text-on-background text-center mb-4">{s.metricLabel}</div>
                          <div className="flex items-end gap-1.5 h-16 w-full">
                            {s.bars.map((h, i) => (
                              <div key={i} className="flex-1 rounded-t bg-primary" style={{ height: `${h}%`, opacity: 0.2 + (h / 100) * 0.6 }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-32 px-margin-mobile md:px-margin-desktop text-center">
          <Reveal>
            <h2 className="font-display-lg text-4xl mb-6">Want results like these?</h2>
            <a href="/contact" className="bg-primary text-on-primary font-bold px-10 py-4 rounded-full inline-flex items-center gap-2 hover:brightness-110 transition-all">
              <span className="material-symbols-outlined notranslate">mail</span> Start Your Project
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
