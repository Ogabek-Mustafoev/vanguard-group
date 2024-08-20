import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vanguard-group.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: "https://vanguard-group.com",
          ru: "https://vanguard-group.com/ru",
          uz: "https://vanguard-group.com/uz",
        },
      },
    },
    {
      url: "https://vanguard-group.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://vanguard-group.com/about",
          ru: "https://vanguard-group.com/ru/about",
          uz: "https://vanguard-group.com/uz/about",
        },
      },
    },
    {
      url: "https://vanguard-group.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: "https://vanguard-group.com/services",
          ru: "https://vanguard-group.com/ru/services",
          uz: "https://vanguard-group.com/uz/services",
        },
      },
    },
    {
      url: "https://vanguard-group.com/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: "https://vanguard-group.com/projects",
          ru: "https://vanguard-group.com/ru/projects",
          uz: "https://vanguard-group.com/uz/projects",
        },
      },
    },
  ];
}
