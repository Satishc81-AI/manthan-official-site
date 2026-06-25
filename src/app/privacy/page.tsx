import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ScrollProgress } from "@/components/motion";

export const metadata: Metadata = {
  title: "Privacy Policy | Manthan Software Technologies",
  description: "How Manthan Software Technologies collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="pt-20">
        <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto">
            <p className="font-label-caps text-label-caps text-primary mb-6">LEGAL</p>
            <h1 className="font-display-lg text-4xl md:text-5xl tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-sm text-on-surface-variant/40 mb-12">Last updated: May 2025</p>

            <div className="prose-custom space-y-8 text-on-surface-variant/70 text-sm leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">1. Information We Collect</h2>
                <p>We collect information you provide directly: name, email, company name, and project details when you contact us or use our services. We also collect usage data through analytics tools including page views, feature usage, and performance metrics.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">2. How We Use Your Information</h2>
                <p>We use your information to: provide and improve our services, respond to inquiries, send relevant updates about our products (with your consent), analyze usage patterns to improve our platform, and comply with legal obligations.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">3. Data Storage & Security</h2>
                <p>Your data is stored on encrypted servers hosted on AWS infrastructure. We implement industry-standard security measures including TLS encryption, access controls, regular security audits, and SOC2-compliant processes.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">4. Third-Party Services</h2>
                <p>We use third-party services for analytics (Plausible), email (Postmark), and infrastructure (AWS, Cloudflare). These services have their own privacy policies and we ensure they meet our data protection standards.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">5. Your Rights</h2>
                <p>You have the right to: access your personal data, request correction or deletion, opt out of marketing communications, and request a copy of your data. Contact us at privacy@manthansoft.com for any requests.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">6. Cookies</h2>
                <p>We use essential cookies for site functionality and optional analytics cookies to understand how our site is used. You can disable non-essential cookies through your browser settings.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">7. Changes to This Policy</h2>
                <p>We may update this policy from time to time. We will notify you of significant changes via email or a prominent notice on our website.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-on-background mb-3">8. Contact</h2>
                <p>For privacy-related questions, contact us at <a href="mailto:privacy@manthansoft.com" className="text-primary hover:underline">privacy@manthansoft.com</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
