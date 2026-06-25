import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollProgress, Entrance, Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services | Manthan Software Technologies",
  description: "Full-service software engineering — custom development, AI integration, consulting, and team augmentation.",
};

const serviceList = Object.values(SERVICES);

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden text-center">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] glow-purple -z-10 animate-float-slow" />
          <div className="max-w-3xl mx-auto">
            <Entrance><p className="font-label-caps text-label-caps text-primary mb-6">WHAT WE DO</p></Entrance>
            <Entrance delay={0.1}>
              <h1 className="font-display-lg text-5xl md:text-7xl tracking-tight mb-6">
                Full-service{" "}<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">engineering</span>
              </h1>
            </Entrance>
            <Entrance delay={0.2}>
              <p className="text-lg text-on-surface-variant/70 max-w-xl mx-auto">From architecture to production. We build, integrate, and scale.</p>
            </Entrance>
          </div>
        </section>

        <section className="py-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-5xl mx-auto">
            <StaggerContainer stagger={0.12} className="space-y-8">
              {serviceList.map((s) => (
                <StaggerItem key={s.slug}>
                  <a href={`/services/${s.slug}`} className="block glass-card rounded-3xl p-8 md:p-12 group hover:border-primary/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="material-symbols-outlined notranslate text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="font-semibold text-2xl text-on-background mb-2 group-hover:text-primary transition-colors">{s.title}</h2>
                        <p className="text-on-surface-variant/60 max-w-2xl">{s.description}</p>
                      </div>
                      <span className="material-symbols-outlined notranslate text-2xl text-on-surface-variant/30 group-hover:text-primary group-hover:translate-x-1 transition-all hidden md:block">arrow_forward</span>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-32 px-margin-mobile md:px-margin-desktop text-center">
          <Reveal>
            <h2 className="font-display-lg text-4xl mb-6">Ready to start?</h2>
            <a href="/contact" className="bg-primary text-on-primary font-bold px-10 py-4 rounded-full inline-flex items-center gap-2 hover:brightness-110 transition-all">
              <span className="material-symbols-outlined notranslate">mail</span> Get in Touch
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
