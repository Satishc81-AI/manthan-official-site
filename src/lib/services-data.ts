export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  capabilities: string[];
  process: { title: string; description: string }[];
  metric: { value: string; label: string; description: string };
}

export const SERVICES: Record<string, ServiceData> = {
  "custom-development": {
    slug: "custom-development",
    title: "Custom Software Development",
    subtitle: "End-to-end application engineering",
    description:
      "We design, build, and ship production-grade software — web apps, mobile platforms, desktop tools, and cloud-native systems. Every project is architected for scale from day one.",
    icon: "code",
    color: "text-blue-400 bg-blue-500/15",
    capabilities: [
      "Full-stack web & mobile applications",
      "Cloud-native architecture (AWS, GCP, Azure)",
      "API design and microservices",
      "Database design and optimization",
      "CI/CD pipeline setup",
      "Performance optimization and monitoring",
    ],
    process: [
      { title: "Requirements & Architecture", description: "We map your needs into a technical blueprint with clear milestones." },
      { title: "Sprint-Based Development", description: "2-week sprints with demos, feedback loops, and continuous delivery." },
      { title: "Testing & QA", description: "Automated testing, load testing, and security audits before every release." },
      { title: "Launch & Support", description: "Zero-downtime deployment with ongoing maintenance and iteration." },
    ],
    metric: { value: "40%", label: "Faster Time-to-Market", description: "Average reduction in delivery time compared to traditional development." },
  },
  "ai-automation": {
    slug: "ai-automation",
    title: "AI & Automation",
    subtitle: "Intelligent workflow integration",
    description:
      "We integrate AI into your existing systems — from LLM-powered features to autonomous agents and intelligent pipeline automation. No hype, just production-ready AI.",
    icon: "psychology",
    color: "text-purple-400 bg-purple-500/15",
    capabilities: [
      "LLM integration (OpenAI, Anthropic, local models)",
      "AI agent development and orchestration",
      "RAG pipelines and knowledge bases",
      "Workflow automation with AI decision nodes",
      "Model evaluation and testing",
      "Private/on-premise AI deployment",
    ],
    process: [
      { title: "AI Readiness Assessment", description: "Evaluate your data, workflows, and infrastructure for AI integration." },
      { title: "Prototype & Validate", description: "Build a working AI prototype in weeks, not months." },
      { title: "Production Integration", description: "Harden the solution with monitoring, fallbacks, and scale." },
      { title: "Optimize & Iterate", description: "Continuously improve model performance and ROI." },
    ],
    metric: { value: "3x", label: "Productivity Gain", description: "Average improvement in team output after AI workflow integration." },
  },
  consulting: {
    slug: "consulting",
    title: "Consulting & Strategy",
    subtitle: "Architecture and digital transformation",
    description:
      "We help engineering leaders make the right technical decisions — from system architecture to AI strategy to cloud migration. Battle-tested advice, not theory.",
    icon: "lightbulb",
    color: "text-amber-400 bg-amber-500/15",
    capabilities: [
      "System architecture review and design",
      "AI strategy and roadmap planning",
      "Cloud migration strategy",
      "Technical due diligence",
      "Engineering process optimization",
      "Technology stack evaluation",
    ],
    process: [
      { title: "Discovery Workshop", description: "Deep-dive into your current state, goals, and constraints." },
      { title: "Analysis & Recommendations", description: "Deliver a prioritized roadmap with clear trade-offs." },
      { title: "Implementation Support", description: "Hands-on guidance during execution — not just a report." },
      { title: "Knowledge Transfer", description: "Ensure your team can own and evolve the solution." },
    ],
    metric: { value: "60%", label: "Cost Reduction", description: "Average infrastructure cost savings after architecture optimization." },
  },
  "team-augmentation": {
    slug: "team-augmentation",
    title: "Team Augmentation",
    subtitle: "Scale with our engineers",
    description:
      "Embed our senior engineers directly into your team. Same tools, same standups, same velocity — just more hands and deeper expertise.",
    icon: "group_add",
    color: "text-green-400 bg-green-500/15",
    capabilities: [
      "Senior full-stack engineers",
      "AI/ML specialists",
      "DevOps and infrastructure experts",
      "React, Next.js, Node.js, Python",
      "Flexible engagement (part-time or full-time)",
      "Same-timezone overlap guaranteed",
    ],
    process: [
      { title: "Needs Assessment", description: "Understand your tech stack, team culture, and skill gaps." },
      { title: "Engineer Matching", description: "Hand-pick engineers with the right skills and cultural fit." },
      { title: "Onboarding", description: "Engineers get productive in your codebase within the first week." },
      { title: "Ongoing Management", description: "Regular check-ins, performance reviews, and seamless rotation." },
    ],
    metric: { value: "2x", label: "Faster Scaling", description: "Average time-to-productivity compared to traditional hiring." },
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES);
