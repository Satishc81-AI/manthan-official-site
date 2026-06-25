import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-[80vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-lg">
          <div className="text-[120px] md:text-[160px] font-bold font-display-lg leading-none bg-gradient-to-b from-primary/40 to-primary/5 bg-clip-text text-transparent select-none">
            404
          </div>
          <h1 className="font-display-lg text-2xl md:text-3xl text-on-background mt-2 mb-3">
            Page not found
          </h1>
          <p className="text-on-surface-variant/60 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/"
              className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full inline-flex items-center gap-2 hover:brightness-110 transition-all text-sm"
            >
              <span className="material-symbols-outlined notranslate text-lg">home</span>
              Back to Home
            </a>
            <a
              href="/contact"
              className="px-8 py-3 rounded-full font-medium border border-outline-variant/30 hover:bg-white/5 transition-all text-sm"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
