import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/lib/services-data";

const BASE = "https://manthansoft.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...services,
    { url: `${BASE}/downloads`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/careers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
