import type { MetadataRoute } from "next";
import { site, services, localServices } from "@/lib/site";
import { areas } from "@/lib/areas";
import { stains } from "@/lib/stains";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
  ];

  // Szolgáltatás-pillér oldalak
  for (const s of services) {
    entries.push({
      url: `${site.url}/szolgaltatasok/${s.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Település-hub oldalak
  for (const a of areas) {
    entries.push({
      url: `${site.url}/teruletek/${a.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Szolgáltatás × település oldalak (long-tail)
  for (const s of localServices) {
    for (const a of areas) {
      entries.push({
        url: `${site.url}/szolgaltatasok/${s.slug}/${a.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  // Folteltávolítási útmutatók (hub + egyedi oldalak)
  entries.push({
    url: `${site.url}/folteltavolitas`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  });
  for (const s of stains) {
    entries.push({
      url: `${site.url}/folteltavolitas/${s.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return entries;
}
