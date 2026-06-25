import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollProgress, Entrance, Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { SERVICES, SERVICE_SLUGS } from "@/lib/services-data";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const service = SERVICES[slug];
  if (!service) return {};
  return { title: `${service.title} | Manthan`, description: service.description };
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = SERVICES[slug];
  if (!service) notFound();

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] glow-blue -z-10 animate-float-slow" />
          <div className="max-w-4xl mx-auto">
            <Entrance>
              <a href="/services" className="inline-flex items-center gap-1 text-sm text-on-surface-variant/50 hover:text-primary transition-colors mb-6">
                <span className="material-symbols-outlined notranslate text-sm">arrow_back</span> All Services
              </a>
            </Entrance>
            <Entrance delay={0.1}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center`}>
                  <span className="material-symbols-outlined notranslate text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{service.icon}</span>
                </div>
                <div>
                  <h1 className="font-display-lg text-4xl md:text-5xl tracking-tight">{service.title}</h1>
                  <p className="text-on-surface-variant/50 text-sm mt-1">{service.subtitle}</p>
                </div>
              </div>
            </Entrance>
            <Entrance delay={0.2}>
              <p className="text-lg text-on-surface-variant/70 max-w-2xl">{service.description}</p>
            </Entrance>
          </div>
        </section>

        {/* Capabilities + Metric */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            <Reveal>
              <div>
                <h2 className="font-display-lg text-2xl md:text-3xl mb-8">What we deliver</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.capabilities.map((c) => (
                    <div key={c} className="flex items-start gap-3 p-4 rounded-xl bg-surface-container/30 border border-outline-variant/10">
                      <span className="material-symbols-outlined notranslate text-primary text-lg mt-0.5">check_circle</span>
                      <span className="text-sm text-on-surface-variant/70">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="glass-card rounded-2xl p-8 text-center h-fit sticky top-28">
                <div className={`text-5xl font-bold font-display-lg mb-2 ${service.color.split(" ")[0]}`}>{service.metric.value}</div>
                <div className="font-semibold text-on-background mb-2">{service.metric.label}</div>
                <p className="text-xs text-on-surface-variant/50">{service.metric.description}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/30">
          <div className="max-w-4xl mx-auto">
            <Reveal><h2 className="font-display-lg text-2xl md:text-3xl mb-12 text-center">Our process</h2></Reveal>
            <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.process.map((p, i) => (
                <StaggerItem key={p.title}>
                  <div className="glass-card rounded-2xl p-8 h-full group hover:border-primary/20 transition-colors">
                    <span className="inline-flex w-8 h-8 rounded-lg bg-primary/10 text-primary items-center justify-center text-xs font-bold font-code-sm mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-on-surface-variant/60 leading-relaxed">{p.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop text-center">
          <Reveal>
            <h2 className="font-display-lg text-4xl mb-4">Interested in {service.title.toLowerCase()}?</h2>
            <p className="text-on-surface-variant/60 mb-8 max-w-md mx-auto">Let&apos;s discuss how we can help.</p>
            <a href="/contact" className="bg-primary text-on-primary font-bold px-10 py-4 rounded-full inline-flex items-center gap-2 hover:brightness-110 transition-all">
              <span className="material-symbols-outlined notranslate">mail</span> Start a Conversation
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
