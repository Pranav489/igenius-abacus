import { siteSEO } from "@/utils/seoConfig";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${siteSEO.baseUrl}/sitemap.xml`,
    host: siteSEO.baseUrl,
  };
}
