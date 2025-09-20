import { SITE } from "./seo.config";

/** @type {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const now = new Date().toISOString();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/services/google-ads`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/services/facebook-ads`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
