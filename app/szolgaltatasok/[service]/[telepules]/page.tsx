import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { localServices, getService, site } from "@/lib/site";
import { areas, getArea } from "@/lib/areas";
import { serviceAreaFaqs, serviceJsonLd } from "@/lib/seo";
import SeoShell from "@/components/seo/SeoShell";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import LocalHero from "@/components/seo/LocalHero";
import ServiceDetails from "@/components/seo/ServiceDetails";
import CtaBand from "@/components/seo/CtaBand";
import RelatedLinks from "@/components/seo/RelatedLinks";
import SeoFaq from "@/components/seo/SeoFaq";
import Contact from "@/components/Contact";
import { MapPinIcon, ClockIcon, WalletIcon } from "@/components/icons";

type Params = { service: string; telepules: string };

export function generateStaticParams() {
  return localServices.flatMap((s) =>
    areas.map((a) => ({ service: s.slug, telepules: a.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service: sSlug, telepules: aSlug } = await params;
  const service = getService(sSlug);
  const area = getArea(aSlug);
  if (!service || !area) return {};
  const title = `${service.keyword} ${area.name} – helyszíni mélytisztítás`;
  const description = `${service.keyword} ${area.inflected}: ${service.short} ${area.travelNote}. Ingyenes árajánlat, hívj: ${site.phoneDisplay}`;
  const url = `/szolgaltatasok/${service.slug}/${area.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", locale: "hu_HU" },
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service: sSlug, telepules: aSlug } = await params;
  const service = getService(sSlug);
  const area = getArea(aSlug);
  if (!service || !service.local || !area) notFound();

  const kw = service.keyword.charAt(0).toLowerCase() + service.keyword.slice(1);

  const nearbyLinks = area.nearby
    .map((slug) => getArea(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .map((a) => ({
      label: `${service.keyword} ${a.inflected}`,
      href: `/szolgaltatasok/${service.slug}/${a.slug}`,
    }));

  const otherServices = localServices
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({
      label: `${s.keyword} ${area.inflected}`,
      href: `/szolgaltatasok/${s.slug}/${area.slug}`,
    }));

  return (
    <SeoShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service, area)) }}
      />
      <Breadcrumbs
        items={[
          { name: "Főoldal", href: "/" },
          { name: "Szolgáltatások", href: "/#szolgaltatasok" },
          { name: service.keyword, href: `/szolgaltatasok/${service.slug}` },
          { name: area.name },
        ]}
      />

      <LocalHero
        eyebrow={`${service.keyword} • ${area.name}`}
        title={`${service.keyword} ${area.inflected}`}
        intro={`A ${kw} ${area.inflected} ugyanazzal a gondossággal és korszerű géppel zajlik, mint Orosházán. ${area.intro}`}
        badges={["Helyszíni munkavégzés", "Ingyenes árajánlat", area.calloutFee]}
      />

      {/* Helyi információk – egyedi adatok településenként */}
      {!area.isRegion && (
        <section className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <LocalStat icon={<MapPinIcon className="h-6 w-6" />} label="Távolság Orosházától" value={`${area.distanceKm} km`} />
            <LocalStat icon={<ClockIcon className="h-6 w-6" />} label="Kiszállás" value={area.travelNote} />
            <LocalStat icon={<WalletIcon className="h-6 w-6" />} label="Kiszállási feltétel" value={area.calloutFee} />
          </div>
        </section>
      )}

      <ServiceDetails service={service} />

      <CtaBand
        title={`Foltos a kárpit ${area.inflected}? Hívj most!`}
        subtitle={`${service.keyword} ${area.inflected} – ingyenes felmérés és árajánlat telefonon vagy Viberen.`}
      />

      <SeoFaq
        faqs={serviceAreaFaqs(service, area)}
        subtitle={`Amit a ${kw}ról ${area.inflected} tudni érdemes.`}
      />

      {nearbyLinks.length > 0 && (
        <RelatedLinks title={`${service.keyword} a környéken`} links={nearbyLinks} />
      )}

      <RelatedLinks title={`Más szolgáltatások ${area.inflected}`} links={otherServices} />

      <Contact
        defaultService={service.title}
        locationName={area.name}
        sourcePath={`/szolgaltatasok/${service.slug}/${area.slug}`}
      />
    </SeoShell>
  );
}

function LocalStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-surface p-5 shadow-soft">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
        {icon}
      </span>
      <span>
        <span className="block text-sm text-ink-soft">{label}</span>
        <span className="block font-display font-bold text-ink">{value}</span>
      </span>
    </div>
  );
}
