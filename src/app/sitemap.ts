import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/bello", "/envigado", "/itagui-sabaneta"];

  return routes.map((route) => ({
    url: `${SITE_CONFIG.domainUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
