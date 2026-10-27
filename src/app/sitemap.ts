import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/bello", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/envigado", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/itagui-sabaneta", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/reset-almohadillas-epson", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/destape-cabezales-impresoras", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  return routes.map((item) => ({
    url: `${SITE_CONFIG.domainUrl}${item.path}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
