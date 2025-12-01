import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://2mcrafters.com";

const routes = [
  "",
  "services",
  "portfolio",
  "a-propos",
  "blog",
  "contact",
  "modern",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: route === "" ? baseUrl : `${baseUrl}/${route}`,
    lastModified: now,
    changefreq: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
