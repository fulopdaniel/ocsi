import type { Metadata } from "next";
import { stains } from "@/lib/stains";
import { site } from "@/lib/site";
import SeoShell from "@/components/seo/SeoShell";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import LocalHero from "@/components/seo/LocalHero";
import CtaBand from "@/components/seo/CtaBand";
import RelatedLinks from "@/components/seo/RelatedLinks";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Folteltávolítási útmutatók – kanapé, szőnyeg, matrac | Asztalos Tibor",
  description: `Hogyan tüntesd el a bor-, kávé-, vér-, vizelet- és zsírfoltot a kárpitból? Bevált, lépésről lépésre útmutatók. Ha nem jön ki: helyszíni mélytisztítás Orosházán – ${site.phoneDisplay}`,
  alternates: { canonical: "/folteltavolitas" },
  openGraph: {
    title: "Folteltávolítási útmutatók – kanapé, szőnyeg, matrac",
    description:
      "Bevált házi módszerek a leggyakoribb kárpitfoltokra, lépésről lépésre. Plusz: mikor érdemes szakembert hívni.",
    url: "/folteltavolitas",
    type: "website",
    locale: "hu_HU",
  },
};

export default function StainIndexPage() {
  const guideLinks = stains.map((s) => ({
    label: `${s.name} eltávolítása`,
    href: `/folteltavolitas/${s.slug}`,
  }));

  return (
    <SeoShell>
      <Breadcrumbs
        items={[
          { name: "Főoldal", href: "/" },
          { name: "Folteltávolítás" },
        ]}
      />

      <LocalHero
        eyebrow="Hasznos útmutatók"
        title="Folteltávolítási útmutatók kárpithoz"
        intro="A leggyakoribb kanapé-, szőnyeg- és matracfoltokra szedtem össze bevált, lépésről lépésre házi módszereket – és azt is megmutatom, mikor jobb szakemberre bízni. Ha a folt makacs vagy értékes a bútor, Orosházán és környékén helyszíni gépi mélytisztítással segítek."
        badges={["Bevált házi módszerek", "Lépésről lépésre", "Mikor hívj szakembert"]}
      />

      <RelatedLinks title="Válassz folttípust" links={guideLinks} />

      <CtaBand
        title="Nem jött ki a folt? Hívj, és megoldom!"
        subtitle="Helyszíni gépi mélytisztítás Orosházán és Békés vármegyében – ingyenes felmérés és árajánlat telefonon vagy Viberen, akár fotó alapján."
      />

      <Contact sourcePath="/folteltavolitas" />
    </SeoShell>
  );
}
