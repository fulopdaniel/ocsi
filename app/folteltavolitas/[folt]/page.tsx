import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stains, getStain } from "@/lib/stains";
import { getService, site } from "@/lib/site";
import { townAreas } from "@/lib/areas";
import { stainFaqs, stainHowToJsonLd } from "@/lib/seo";
import SeoShell from "@/components/seo/SeoShell";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import LocalHero from "@/components/seo/LocalHero";
import CtaBand from "@/components/seo/CtaBand";
import RelatedLinks from "@/components/seo/RelatedLinks";
import SeoFaq from "@/components/seo/SeoFaq";
import Contact from "@/components/Contact";
import { SparkleIcon, ClockIcon, ShieldIcon } from "@/components/icons";

type Params = { folt: string };

export function generateStaticParams() {
  return stains.map((s) => ({ folt: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { folt } = await params;
  const stain = getStain(folt);
  if (!stain) return {};
  const title = `${stain.name} eltávolítása kárpitból – így csináld lépésről lépésre`;
  const description = `${stain.name} a kanapén, szőnyegen vagy matracon? Lépésről lépésre útmutató + gyakori hibák. Ha nem jön ki, helyszíni mélytisztítás Orosházán: ${site.phoneDisplay}`;
  const url = `/folteltavolitas/${stain.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", locale: "hu_HU" },
  };
}

export default async function StainGuidePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { folt } = await params;
  const stain = getStain(folt);
  if (!stain) notFound();

  const service = getService(stain.relatedServiceSlug);

  // Belső linkek: kapcsolódó szolgáltatás + más útmutatók + néhány település-hub
  const otherStains = stains
    .filter((s) => s.slug !== stain.slug)
    .map((s) => ({
      label: `${s.name} eltávolítása`,
      href: `/folteltavolitas/${s.slug}`,
    }));

  const serviceLinks = [
    ...(service
      ? [{ label: `${service.keyword} Orosházán és környékén`, href: `/szolgaltatasok/${service.slug}` }]
      : []),
    ...townAreas.slice(0, 5).map((a) => ({
      label: `Kárpittisztítás ${a.inflected}`,
      href: `/teruletek/${a.slug}`,
    })),
  ];

  return (
    <SeoShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stainHowToJsonLd(stain)) }}
      />
      <Breadcrumbs
        items={[
          { name: "Főoldal", href: "/" },
          { name: "Folteltávolítás", href: "/folteltavolitas" },
          { name: stain.name },
        ]}
      />

      <LocalHero
        eyebrow={`Folteltávolítás • ${stain.eyebrow}`}
        title={`${stain.name} eltávolítása a kárpitból`}
        intro={stain.intro}
        badges={["Lépésről lépésre", "Bevált házi módszer", "Mikor hívj szakembert"]}
      />

      {/* Info-sáv – egyedi adatok foltonként */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoStat
            icon={<ShieldIcon className="h-6 w-6" />}
            label="Nehézség otthon"
            value={stain.difficulty}
          />
          <InfoStat
            icon={<ClockIcon className="h-6 w-6" />}
            label="Mire figyelj"
            value={stain.urgency}
          />
          <InfoStat
            icon={<SparkleIcon className="h-6 w-6" />}
            label="Jellemző felület"
            value={stain.surfaces[0]}
          />
        </div>
      </section>

      {/* Lépésről lépésre – HowTo */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="text-balance font-display text-2xl font-extrabold text-ink sm:text-3xl">
          {stain.name} eltávolítása lépésről lépésre
        </h2>
        <ol className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stain.steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-3xl border border-brand-100 bg-surface p-6 shadow-soft"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 font-display font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Gyakori hibák */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50/60 p-7 shadow-soft">
          <h2 className="font-display text-2xl font-extrabold text-ink">
            Gyakori hibák, amiket kerülj
          </h2>
          <ul className="mt-5 space-y-3">
            {stain.mistakes.map((m) => (
              <li key={m} className="flex items-start gap-2.5 text-[15px] text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-200 text-sm font-bold text-amber-deep">
                  ✕
                </span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mikor hívj szakembert + CTA */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="text-balance font-display text-2xl font-extrabold text-ink sm:text-3xl">
          Ha a {stain.name.toLowerCase()} nem jön ki
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">
          {stain.proNote}
        </p>
      </section>

      <CtaBand
        title={`Makacs ${stain.name.toLowerCase()} a kárpiton? Bízd rám!`}
        subtitle="Helyszíni gépi mélytisztítás Orosházán és környékén – ingyenes felmérés és árajánlat telefonon vagy Viberen, akár fotó alapján."
      />

      <SeoFaq
        faqs={stainFaqs(stain)}
        subtitle={`Amit a ${stain.name.toLowerCase()} eltávolításáról tudni érdemes.`}
      />

      <RelatedLinks title="Kapcsolódó tisztítás és területek" links={serviceLinks} />

      <RelatedLinks title="További folteltávolítási útmutatók" links={otherStains} />

      <Contact
        defaultService={service?.title}
        sourcePath={`/folteltavolitas/${stain.slug}`}
      />
    </SeoShell>
  );
}

function InfoStat({
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
