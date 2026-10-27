import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "Applebot",
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "Anthropic-AI",
          "PerplexityBot",
          "ClaudeBot"
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_CONFIG.domainUrl}/sitemap.xml`,
    host: SITE_CONFIG.domainUrl,
  };
}
