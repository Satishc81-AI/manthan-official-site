const columns = [
  {
    title: "Products",
    links: [
      { label: "UniLink", href: "/downloads" },
      { label: "AI Agent Studio", href: "#" },
      { label: "AI Testing", href: "#" },
      { label: "Workflow Engine", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Development", href: "/services/custom-development" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "Consulting", href: "/services/consulting" },
      { label: "Team Augmentation", href: "/services/team-augmentation" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 relative w-full py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-gutter px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-6 mb-8 lg:mb-0">
          <a className="font-display-lg text-headline-lg text-primary" href="/">
            Manthan
          </a>
          <p className="font-body-md text-on-surface-variant text-sm pr-4 opacity-60">
            Intelligent automation for the complete software development
            lifecycle. Products, engineering, and consulting.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-label-caps text-label-caps text-on-surface mb-6">
              {col.title}
            </h4>
            <ul className="space-y-4 font-body-md text-sm text-on-surface-variant">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-tertiary transition-all duration-200 hover:translate-x-1 inline-block"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-outline-variant/10 text-outline text-xs flex flex-col md:flex-row justify-between gap-4">
        <p>&copy; 2024 Manthan Software Technologies</p>
        <div className="flex gap-4">
          {[
            { name: "GitHub", href: "#", path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
            { name: "LinkedIn", href: "#", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
            { name: "X", href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
          ].map((s) => (
            <a
              key={s.name}
              href={s.href}
              title={s.name}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-outline hover:text-on-surface hover:bg-white/5 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
