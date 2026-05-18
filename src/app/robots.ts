import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Generates /robots.txt at build time.
 * Allows everything; declares the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
