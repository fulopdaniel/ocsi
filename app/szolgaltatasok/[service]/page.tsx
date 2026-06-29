import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService, site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { serviceFaqs, serviceJsonLd } from "@/lib/seo";
import SeoShell from "@/components/seo/SeoShell";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import LocalHero from "@/components/seo/LocalHero";
import ServiceDetails from "@/components/seo/ServiceDetails";
import CtaBand from "@/components/seo/CtaBand";
import RelatedLinks from "@/components/seo/RelatedLinks";
import SeoFaq from "@/components/seo/SeoFaq";
import Contact from "@/components/Contact";

type Params = { service: string };

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const title = `${service.keyword} Orosháza és Békés vármegye`;
  const description = `${service.short} Helyszíni mélytisztítás Orosházán és környékén, ingyenes árajánlat. Hívj: ${site.phoneDisplay}`;
  const url = `/szolgaltatasok/${service.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", locale: "hu_HU" },
  };
}

export default async function ServicePillarPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const townLinks = service.local
    ? areas.map((a) => ({
        label: `${service.keyword} ${a.inflected}`,
        href: `/szolgaltatasok/${service.slug}/${a.slug}`,
      }))
    : [];

  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({ label: s.title, href: `/szolgaltatasok/${s.slug}` }));

  return (
    <SeoShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service)) }}
      />
      <Breadcrumbs
        items={[
          { name: "Főoldal", href: "/" },
          { name: "Szolgáltatások", href: "/#szolgaltatasok" },
          { name: service.keyword },
        ]}
      />

      <LocalHero
        eyebrow="Szolgáltatás"
        title={`${service.keyword} Orosházán és környékén`}
        intro={service.description}
        badges={["Helyszíni mélytisztítás", "Ingyenes árajánlat", site.hours]}
      />

      <ServiceDetails service={service} />

      <CtaBand
        title={`Kérj ingyenes árajánlatot a ${service.keyword.toLowerCase()}ra`}
        subtitle="Hívj telefonon vagy írj Viberen – akár fotó alapján is pontos árat mondok."
      />

      {townLinks.length > 0 && (
        <RelatedLinks title="Hol érhető el a szolgáltatás?" links={townLinks} />
      )}

      <SeoFaq
        faqs={serviceFaqs(service)}
        subtitle={`A leggyakoribb kérdések a ${service.keyword.toLowerCase()}ról.`}
      />

      <RelatedLinks title="További szolgáltatások" links={otherServices} />

      <Contact
        defaultService={service.title}
        sourcePath={`/szolgaltatasok/${service.slug}`}
      />
    </SeoShell>
  );
}
