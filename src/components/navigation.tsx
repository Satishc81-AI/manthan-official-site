"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import LanguageSwitcher from "./language-switcher";

type DropdownItem = {
  name: string;
  description: string;
  icon: string;
  href: string;
  badge?: string;
  svgPath?: string;
};

type NavLink = {
  label: string;
  href?: string;
  dropdown?: {
    heading: string;
    description: string;
    columns: number;
    items: DropdownItem[];
  };
};

const navigation: NavLink[] = [
  {
    label: "Products",
    dropdown: {
      heading: "Our Products",
      description:
        "AI-powered tools for modern software development.",
      columns: 2,
      items: [
        { name: "UniLink", description: "Universal AI Connectivity Platform", icon: "hub", href: "/downloads" },
        { name: "AI Agent Studio", description: "Autonomous AI Agents", icon: "smart_toy", href: "#", badge: "Soon" },
        { name: "AI Testing Platform", description: "LLM Testing & Evaluation", icon: "science", href: "#", badge: "Soon" },
        { name: "Workflow Engine", description: "Dev Pipeline Automation", icon: "account_tree", href: "#", badge: "Soon" },
      ],
    },
  },
  {
    label: "Services",
    dropdown: {
      heading: "What We Do",
      description:
        "Full-service software engineering and consulting.",
      columns: 2,
      items: [
        { name: "Custom Development", description: "End-to-end application engineering", icon: "code", href: "/services/custom-development" },
        { name: "AI & Automation", description: "Intelligent workflow integration", icon: "psychology", href: "/services/ai-automation" },
        { name: "Consulting & Strategy", description: "Architecture & digital transformation", icon: "lightbulb", href: "/services/consulting" },
        { name: "Team Augmentation", description: "Scale with our engineers", icon: "group_add", href: "/services/team-augmentation" },
      ],
    },
  },
  {
    label: "Resources",
    dropdown: {
      heading: "Learn & Explore",
      description: "Guides, insights, and open-source projects.",
      columns: 2,
      items: [
        { name: "Documentation", description: "Guides and API reference", icon: "menu_book", href: "#" },
        { name: "Blog", description: "Engineering insights & articles", icon: "article", href: "/blog" },
        { name: "Case Studies", description: "Client success stories", icon: "assignment", href: "/case-studies" },
        { name: "GitHub", description: "Open-source projects", icon: "code", href: "#", svgPath: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
      ],
    },
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const gridClasses: Record<number, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navigation() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [navHidden, setNavHidden] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 150 && !activeDropdown && !mobileOpen) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  });

  const open = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const activeNav = navigation.find(
    (n) => n.dropdown && n.label === activeDropdown
  );

  const isLinkActive = (href?: string) =>
    href && href !== "#" && pathname === href;

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20"
      animate={{ y: navHidden ? "-100%" : "0%" }}
      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
    >
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex items-center gap-8">
          <a
            className="font-display-lg text-xl md:text-headline-lg tracking-tighter text-on-background notranslate"
            href="/"
          >
            Manthan
          </a>

          <div className="hidden lg:flex items-center">
            {navigation.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => item.dropdown && open(item.label)}
                onMouseLeave={scheduleClose}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className={`px-3 py-2 font-medium transition-colors font-label-caps text-label-caps ${
                      isLinkActive(item.href)
                        ? "text-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    className={`px-3 py-2 font-medium transition-colors font-label-caps text-label-caps inline-flex items-center gap-0.5 ${
                      activeDropdown === item.label
                        ? "text-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <motion.span
                      className="material-symbols-outlined notranslate text-[16px]"
                      animate={{
                        rotate: activeDropdown === item.label ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      expand_more
                    </motion.span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="lg:hidden text-on-surface-variant p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined notranslate text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Desktop dropdown */}
      <AnimatePresence>
        {activeNav?.dropdown && (
          <motion.div
            key={activeNav.label}
            className="hidden lg:block absolute top-full left-0 w-full"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
            transition={{ duration: 0.25, ease: EASE }}
            onMouseEnter={() => open(activeNav.label)}
            onMouseLeave={scheduleClose}
          >
            <div className="bg-surface-container/95 backdrop-blur-2xl border-b border-outline-variant/20 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
              <div className="max-w-[1440px] mx-auto px-margin-desktop py-8">
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05, ease: EASE }}
                >
                  <h3 className="text-lg font-semibold text-on-background mb-1">
                    {activeNav.dropdown.heading}
                  </h3>
                  <p className="text-sm text-on-surface-variant opacity-70">
                    {activeNav.dropdown.description}
                  </p>
                </motion.div>
                <div
                  className={`grid gap-2 ${gridClasses[activeNav.dropdown.columns]}`}
                >
                  {activeNav.dropdown.items.map((sub, i) => (
                    <motion.a
                      key={sub.name}
                      href={sub.href}
                      className={`flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group ${
                        sub.badge ? "opacity-60" : ""
                      }`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: sub.badge ? 0.6 : 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.06 + i * 0.03,
                        ease: EASE,
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                        {sub.svgPath ? (
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d={sub.svgPath} />
                          </svg>
                        ) : (
                          <span className="material-symbols-outlined notranslate text-xl">
                            {sub.icon}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-on-background group-hover:text-primary transition-colors inline-flex items-center gap-2">
                          {sub.name}
                          {sub.badge && (
                            <span className="text-[9px] px-1.5 py-0.5 bg-secondary/15 text-secondary rounded-full font-normal">
                              {sub.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-on-surface-variant opacity-70 mt-0.5">
                          {sub.description}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full h-[calc(100dvh-80px)] bg-background/98 backdrop-blur-2xl border-t border-outline-variant/20 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-margin-mobile py-4 space-y-1">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-outline-variant/10 last:border-0"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block px-4 py-4 font-medium text-on-surface hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-4 py-4 font-medium text-on-surface hover:text-primary transition-colors"
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <motion.span
                          className="material-symbols-outlined notranslate text-lg"
                          animate={{
                            rotate:
                              mobileExpanded === item.label ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          expand_more
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && item.dropdown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 space-y-0.5">
                              {item.dropdown.items.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  className="flex items-center gap-3 mx-2 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {sub.svgPath ? (
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-primary shrink-0">
                                      <path d={sub.svgPath} />
                                    </svg>
                                  ) : (
                                  <span className="material-symbols-outlined notranslate text-primary text-xl">
                                    {sub.icon}
                                  </span>
                                  )}
                                  <div>
                                    <div className="text-sm font-medium text-on-background inline-flex items-center gap-2">
                                      {sub.name}
                                      {sub.badge && (
                                        <span className="text-[9px] px-1.5 py-0.5 bg-secondary/15 text-secondary rounded-full">
                                          {sub.badge}
                                        </span>
                                      )}
                                    </div>
                                    <div className="text-xs text-on-surface-variant opacity-60">
                                      {sub.description}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
              <div className="pt-6 px-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
