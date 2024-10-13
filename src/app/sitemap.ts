import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.SITE_URL!,
      lastModified: new Date(),
      changeFrequency: "monthly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en",
          fr: process.env.SITE_URL + "/fr",
          ar: process.env.SITE_URL + "/ar",
        },
      },
    },
    {
      url: process.env.SITE_URL! + "/best-tour-travel-agency-website",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en/best-tour-travel-agency-website",
          fr: process.env.SITE_URL + "/fr/best-tour-travel-agency-website",
          ar: process.env.SITE_URL + "/ar/best-tour-travel-agency-website",
        },
      },
    },
    {
      url: process.env.SITE_URL! + "/crti-project-management-app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en/crti-project-management-app",
          fr: process.env.SITE_URL + "/fr/crti-project-management-app",
          ar: process.env.SITE_URL + "/ar/crti-project-management-app",
        },
      },
    },
    {
      url: process.env.SITE_URL! + "/e-commerce-management-application",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en/e-commerce-management-application",
          fr: process.env.SITE_URL + "/fr/e-commerce-management-application",
          ar: process.env.SITE_URL + "/ar/e-commerce-management-application",
        },
      },
    },
  ];
}
