import { site, type Service } from "./site";
import type { Area } from "./areas";
import type { QA } from "@/components/seo/SeoFaq";

// Kisbetűs kulcsszó mondat közepére (pl. "szőnyegtisztítás")
const lc = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

// ---- GYIK-generátorok (egyedi tartalom oldalanként) ----

export function serviceAreaFaqs(service: Service, area: Area): QA[] {
  const kw = lc(service.keyword);
  return [
    {
      q: `Mennyibe kerül a ${kw} ${area.inflected}?`,
      a: `Az ár a bútor méretétől, anyagától és szennyezettségétől függ, ezért fix árlista helyett ingyenes, kötelezettségmentes árajánlatot adok. Elég egy telefon vagy egy fotó a bútorról, és máris megmondom a pontos árat.`,
    },
    {
      q: `Kiszálltok ${area.inflected}?`,
      a: area.isRegion
        ? `Igen, Orosházi bázisomról egész Békés vármegyébe kiszállok. A pontos időpontot és a kiszállás feltételeit egy telefonhívással egyeztetjük.`
        : `Igen, ${area.name} ${area.travelNote}, ide rendszeresen kiszállok. ${capitalize(area.calloutFee)}.`,
    },
    {
      q: `A helyszínen, nálam otthon végzitek a tisztítást ${area.inflected}?`,
      a: `Igen. A ${kw} nagy részét a helyszínen, az otthonodban végzem, így nem kell a nehéz bútorokat mozgatni vagy elszállítani.`,
    },
    {
      q: `Mennyi idő alatt szárad meg a kárpit?`,
      a: `Egy átlagosan szennyezett bútor vagy matrac jellemzően 6–24 óra alatt szárad meg, az anyagtól és a szellőzéstől függően.`,
    },
  ];
}

export function townFaqs(area: Area): QA[] {
  return [
    {
      q: `Milyen kárpittisztítási szolgáltatásokat vállalsz ${area.inflected}?`,
      a: `Kanapé- és ülőgarnitúra-, szőnyeg-, matrac-, fotel- és széktisztítást, valamint autókárpit- és irodai kárpittisztítást is vállalok ${area.inflected}, mindezt a helyszínen.`,
    },
    {
      q: `Mennyi a kiszállási díj ${area.inflected}?`,
      a: area.isRegion
        ? `A kiszállás feltételeit a távolság függvényében egyeztetjük – hívj, és pontosan megmondom.`
        : `${capitalize(area.name)} ${area.travelNote}, így ${area.calloutFee} érvényes. A részleteket telefonon egyeztetjük.`,
    },
    {
      q: `Mennyibe kerül a kárpittisztítás ${area.inflected}?`,
      a: `Az árat a bútor mérete, anyaga és szennyezettsége határozza meg. Ingyenes, kötelezettségmentes árajánlatot adok telefon vagy fotó alapján.`,
    },
    {
      q: `A helyszínen végzed a munkát?`,
      a: `Igen, a tisztítást ${area.inflected} is a helyszínen, az otthonodban végzem, korszerű géppel és kíméletes, bevizsgált szerekkel.`,
    },
  ];
}

export function serviceFaqs(service: Service): QA[] {
  const kw = lc(service.keyword);
  return [
    {
      q: `Mennyibe kerül a ${kw}?`,
      a: `Fix árlista helyett ingyenes, kötelezettségmentes árajánlatot adok, mert az ár több tényezőtől függ. Elég egy telefon vagy egy fotó, és megmondom a pontos árat.`,
    },
    {
      q: `Hol érhető el a ${kw}?`,
      a: `Orosházán és Békés vármegye nagy részén – a környező településekre is kiszállok. Orosházán belül a kiszállás díjmentes.`,
    },
    {
      q: `A helyszínen végzed a ${kw}t?`,
      a: `Igen, a munka nagy részét a helyszínen, nálad otthon végzem, így nem kell a bútorokat mozgatni.`,
    },
    {
      q: `Biztonságosak a használt tisztítószerek?`,
      a: `Kizárólag bevizsgált, kíméletes szereket használok, amelyek a textilt és a benne élőket sem károsítják. Száradás után a felület gyermek- és állatbarát.`,
    },
  ];
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---- Service (szolgáltatás) schema.org JSON-LD ----

export function serviceJsonLd(service: Service, area?: Area) {
  const areaServed = area
    ? area.isRegion
      ? { "@type": "AdministrativeArea", name: area.name }
      : { "@type": "City", name: area.name }
    : { "@type": "AdministrativeArea", name: site.region };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.keyword,
    name: area ? `${service.keyword} ${area.inflected}` : `${service.keyword} – ${site.city}`,
    description: service.description,
    areaServed,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      telephone: site.phoneRaw,
      url: site.url,
    },
  };
}
