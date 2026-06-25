import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollProgress } from "@/components/motion";

export const metadata: Metadata = {
  title: "Terms of Service | Manthan Software Technologies",
  description: "Terms and conditions for using Manthan Software Technologies products and services.",
};

export default function TermsPage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto">
            <p className="font-label-caps text-label-caps text-primary mb-6">LEGAL</p>
            <h1 className="font-display-lg text-4xl md:text-5xl tracking-tight mb-4">Terms of Service</h1>
            <p className="text-sm text-on-surface-variant/40 mb-12">Last updated: May 2025</p>

            <div className="space-y-8 text-on-surface-variant/70 text-sm leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">1. Acceptance of Terms</h2>
                <p>By accessing or using any Manthan Software Technologies product or service, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">2. Services</h2>
                <p>Manthan provides software development services, AI integration, consulting, team augmentation, and software products including UniLink. Service scope is defined in individual agreements with clients.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">3. Software Products</h2>
                <p>Our software products (including UniLink) are licensed, not sold. Your license is non-exclusive, non-transferable, and subject to the terms of the applicable product license agreement. Free-tier usage is subject to usage limits.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">4. Intellectual Property</h2>
                <p>All Manthan products, code, documentation, and branding are owned by Manthan Software Technologies. Custom work delivered to clients is governed by the applicable project agreement, which typically transfers ownership of deliverables to the client.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">5. Payment Terms</h2>
                <p>Payment terms for services are defined in individual client agreements. Product subscriptions are billed monthly or annually as selected. All fees are non-refundable unless otherwise stated.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">6. Limitation of Liability</h2>
                <p>Manthan&apos;s total liability for any claim arising from our services shall not exceed the fees paid by you in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">7. Termination</h2>
                <p>Either party may terminate service agreements with 30 days written notice. We reserve the right to suspend access to products for violation of these terms or non-payment.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">8. Governing Law</h2>
                <p>These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Pune, Maharashtra.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">9. Contact</h2>
                <p>For questions about these terms, contact us at <a href="mailto:legal@manthansoft.com" className="text-primary hover:underline">legal@manthansoft.com</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
