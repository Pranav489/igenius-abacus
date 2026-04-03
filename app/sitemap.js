import { siteSEO } from "@/utils/seoConfig";

const baseUrl = siteSEO.baseUrl;

export default function sitemap() {
  const routes = [
    { url: "/", changeFrequency: "weekly", priority: 1.0 },
    { url: "/about-us", changeFrequency: "monthly", priority: 0.9 },
    { url: "/courses", changeFrequency: "monthly", priority: 0.9 },
    { url: "/courses/abacus", changeFrequency: "monthly", priority: 0.85 },
    { url: "/courses/vedic-math", changeFrequency: "monthly", priority: 0.85 },
    { url: "/courses/rubik-cube", changeFrequency: "monthly", priority: 0.85 },
    { url: "/school-project", changeFrequency: "monthly", priority: 0.8 },
    { url: "/franchise", changeFrequency: "monthly", priority: 0.8 },
    { url: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { url: "/career", changeFrequency: "weekly", priority: 0.6 },
    { url: "/contact", changeFrequency: "monthly", priority: 0.75 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
