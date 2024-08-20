import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    host: "Vanguard.com",
    sitemap: "https://vanguard-group.com/sitemap.xml",
  };
}
