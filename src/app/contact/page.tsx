import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { ScrollProgress, Entrance, Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact | Manthan Software Technologies",
  description: "Get in touch with Manthan. Whether you need a custom platform, AI integration, or consulting — we're ready to help.",
};

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] glow-blue -z-10 animate-float-slow" />
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left — form */}
              <div>
                <Entrance>
                  <p className="font-label-caps text-label-caps text-primary mb-4">CONTACT US</p>
                </Entrance>
                <Entrance delay={0.1}>
                  <h1 className="font-display-lg text-4xl md:text-5xl tracking-tight mb-4">Let&apos;s talk about your project</h1>
                </Entrance>
                <Entrance delay={0.2}>
                  <p className="text-on-surface-variant/70 mb-10 max-w-lg">
                    Tell us what you&apos;re building. We&apos;ll get back within 24 hours with a tailored approach.
                  </p>
                </Entrance>
                <Entrance delay={0.3}>
                  <ContactForm />
                </Entrance>
              </div>

              {/* Right — info */}
              <div className="lg:pl-8">
                <Reveal delay={0.2}>
                  <div className="space-y-8">
                    <div className="glass-card rounded-2xl p-8">
                      <h3 className="font-semibold text-lg mb-6">Get in touch</h3>
                      <div className="space-y-5">
                        {[
                          { icon: "mail", label: "Email", value: "hello@manthansoft.com", href: "mailto:hello@manthansoft.com" },
                          { icon: "phone", label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                          { icon: "location_on", label: "Office", value: "Pune, Maharashtra, India", href: "#" },
                        ].map((c) => (
                          <a key={c.label} href={c.href} className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <span className="material-symbols-outlined notranslate text-lg">{c.icon}</span>
                            </div>
                            <div>
                              <div className="text-xs text-on-surface-variant/40">{c.label}</div>
                              <div className="text-sm text-on-background group-hover:text-primary transition-colors">{c.value}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card rounded-2xl p-8">
                      <h3 className="font-semibold text-lg mb-4">Response time</h3>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-sm text-green-400 font-medium">Usually within 24 hours</span>
                      </div>
                      <p className="text-xs text-on-surface-variant/50 leading-relaxed">
                        We review every inquiry personally. For urgent requests, mention it in your message and we&apos;ll prioritize.
                      </p>
                    </div>

                    <div className="glass-card rounded-2xl p-8">
                      <h3 className="font-semibold text-lg mb-4">Connect with us</h3>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { name: "LinkedIn", href: "#", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                          { name: "GitHub", href: "#", path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
                          { name: "X", href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                          { name: "Instagram", href: "#", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                          { name: "YouTube", href: "#", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                          { name: "Discord", href: "#", path: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" },
                        ].map((s) => (
                          <a
                            key={s.name}
                            href={s.href}
                            title={s.name}
                            className="w-11 h-11 rounded-xl bg-outline-variant/10 flex items-center justify-center text-on-surface-variant/50 hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-200"
                          >
                            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                              <path d={s.path} />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
