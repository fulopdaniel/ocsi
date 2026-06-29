import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { localServices, getService, site } from "@/lib/site";
import { areas, getArea } from "@/lib/areas";
import { townFaqs, serviceJsonLd } from "@/lib/seo";
import SeoShell from "@/components/seo/SeoShell";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import LocalHero from "@/components/seo/LocalHero";
import CtaBand from "@/components/seo/CtaBand";
import RelatedLinks from "@/components/seo/RelatedLinks";
import SeoFaq from "@/components/seo/SeoFaq";
import Contact from "@/components/Contact";
import { MapPinIcon, ClockIcon, WalletIcon, CheckIcon } from "@/components/icons";

type Params = { telepules: string };

export function generateStaticParams() {
  return areas.map((a) => ({ telepules: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { telepules: aSlug } = await params;
  const area = getArea(aSlug);
  if (!area) return {};
  const title = `Kárpittisztítás ${area.name} | Kanapé, szőnyeg, matrac – Asztalos Tibor`;
  const description = `Kárpittisztítás ${area.inflected}: kanapé, ülőgarnitúra, szőnyeg és matrac helyszíni mélytisztítása. ${area.travelNote}. Ingyenes árajánlat: ${site.phoneDisplay}`;
  const url = `/teruletek/${area.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", locale: "hu_HU" },
  };
}

export default async function TownHubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { telepules: aSlug } = await params;
  const area = getArea(aSlug);
  if (!area) notFound();

  const general = getService("karpittisztitas")!;

  const serviceLinks = localServices.map((s) => ({
    label: `${s.keyword} ${area.inflected}`,
    href: `/szolgaltatasok/${s.slug}/${area.slug}`,
  }));

  const nearbyLinks = area.nearby
    .map((slug) => getArea(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .map((a) => ({
      label: `Kárpittisztítás ${a.inflected}`,
      href: `/teruletek/${a.slug}`,
    }));

  return (
    <SeoShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(general, area)) }}
      />
      <Breadcrumbs
        items={[
          { name: "Főoldal", href: "/" },
          { name: "Területeink", href: "/#terulet" },
          { name: area.name },
        ]}
      />

      <LocalHero
        eyebrow={`Kárpittisztítás • ${area.name}`}
        title={`Kárpittisztítás ${area.inflected}`}
        intro={area.intro}
        badges={["Helyszíni mélytisztítás", "Ingyenes árajánlat", area.calloutFee]}
      />

      {!area.isRegion && (
        <section className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <Stat icon={<MapPinIcon className="h-6 w-6" />} label="Távolság Orosházától" value={`${area.distanceKm} km`} />
            <Stat icon={<ClockIcon className="h-6 w-6" />} label="Kiszállás" value={area.travelNote} />
            <Stat icon={<WalletIcon className="h-6 w-6" />} label="Kiszállási feltétel" value={area.calloutFee} />
          </div>
        </section>
      )}

      {/* Teljes körű leírás – egyedi tartalom */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="text-balance font-display text-2xl font-extrabold text-ink sm:text-3xl">
          Teljes körű kárpittisztítás {area.inflected}
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">
          {general.description}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {general.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      <RelatedLinks title={`Szolgáltatásaink ${area.inflected}`} links={serviceLinks} />

      <CtaBand
        title={`Kárpittisztítás ${area.inflected} – kérj árajánlatot!`}
        subtitle="Hívj telefonon vagy írj Viberen, akár fotó alapján is pontos árat mondok."
      />

      <SeoFaq faqs={townFaqs(area)} subtitle={`Amit a kárpittisztításról ${area.inflected} tudni érdemes.`} />

      {nearbyLinks.length > 0 && (
        <RelatedLinks title="Kárpittisztítás a környéken" links={nearbyLinks} />
      )}

      <Contact locationName={area.name} sourcePath={`/teruletek/${area.slug}`} />
    </SeoShell>
  );
}

function Stat({
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
