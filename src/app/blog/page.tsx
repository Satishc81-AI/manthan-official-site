import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollProgress, Entrance, Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Blog | Manthan Software Technologies",
  description: "Engineering insights, AI deep-dives, and lessons from building production software.",
};

const posts = [
  { title: "Why We Built UniLink: The Multi-LLM Problem", category: "Product", date: "May 2025", read: "8 min", featured: true, description: "The story behind our decision to build a universal AI connectivity platform — and the engineering challenges we solved along the way." },
  { title: "Migrating a Healthcare Platform to Cloud-Native", category: "Case Study", date: "Apr 2025", read: "6 min", description: "How we reduced deployment time by 40% for a health-tech platform serving 2M+ patients." },
  { title: "Local LLMs in Production: A Practical Guide", category: "AI", date: "Mar 2025", read: "10 min", description: "Running GGUF models locally with UniLink — performance benchmarks, gotchas, and best practices." },
  { title: "The Case for AI-Powered CI/CD Pipelines", category: "Engineering", date: "Feb 2025", read: "5 min", description: "How intelligent automation can cut build times and catch issues before they reach production." },
  { title: "Scaling an Engineering Team from 5 to 25", category: "Culture", date: "Jan 2025", read: "7 min", description: "What we learned about hiring, onboarding, and maintaining culture during rapid growth." },
  { title: "RAG Pipelines: Architecture Patterns That Work", category: "AI", date: "Dec 2024", read: "12 min", description: "A deep-dive into retrieval-augmented generation architectures we've built for enterprise clients." },
];

const categories = ["All", "AI", "Engineering", "Product", "Case Study", "Culture"];

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden text-center">
          <div className="absolute top-0 right-1/3 w-[400px] h-[400px] glow-blue -z-10 animate-float-slow" />
          <div className="max-w-3xl mx-auto">
            <Entrance><p className="font-label-caps text-label-caps text-primary mb-6">BLOG</p></Entrance>
            <Entrance delay={0.1}>
              <h1 className="font-display-lg text-5xl md:text-7xl tracking-tight mb-6">Engineering{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">insights</span>
              </h1>
            </Entrance>
            <Entrance delay={0.2}>
              <p className="text-lg text-on-surface-variant/70">Deep-dives into AI, software architecture, and what we&apos;re learning.</p>
            </Entrance>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop pb-8">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((c, i) => (
                  <button key={c} className={`px-4 py-1.5 rounded-full text-sm transition-colors ${i === 0 ? "bg-primary text-on-primary font-medium" : "bg-surface-container/50 text-on-surface-variant/50 hover:text-on-surface-variant"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-12 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-5xl mx-auto">
            {/* Featured post */}
            <Reveal>
              <a href="#" className="block glass-card rounded-3xl p-8 md:p-12 mb-10 group hover:border-primary/20 transition-colors">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  <span className="material-symbols-outlined notranslate text-sm">star</span> Featured
                </span>
                <h2 className="font-display-lg text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors">{featured.title}</h2>
                <p className="text-on-surface-variant/60 mb-4 max-w-2xl">{featured.description}</p>
                <div className="flex items-center gap-4 text-xs text-on-surface-variant/40">
                  <span>{featured.category}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.read} read</span>
                </div>
              </a>
            </Reveal>

            {/* Post grid */}
            <StaggerContainer stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <StaggerItem key={post.title}>
                  <a href="#" className="block glass-card rounded-2xl p-6 h-full group hover:border-outline-variant/30 transition-colors">
                    <span className="text-[10px] px-2 py-0.5 bg-outline-variant/15 text-on-surface-variant/50 rounded-full uppercase tracking-wider font-code-sm">{post.category}</span>
                    <h3 className="font-semibold text-lg mt-4 mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                    <p className="text-sm text-on-surface-variant/50 mb-4 leading-relaxed">{post.description}</p>
                    <div className="flex items-center gap-3 text-xs text-on-surface-variant/30 mt-auto">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.read} read</span>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
