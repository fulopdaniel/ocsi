# SEO terv – karpittisztitas-oroshaza.hu

**Cél:** A `kárpittisztítás Orosháza` és hasonló keresésekben első oldalas (ideálisan top 3) rangsorolás, valamint a környékbeli települések és szolgáltatások félig long-tail kulcsszavainak lefedése programozott (tömegesen generált) aloldalakkal. Minden aloldalon erős, mérhető CTA a kapcsolatfelvételhez. Minden új oldal bekerül a `sitemap.xml`-be.

**Üzleti kontextus:** Asztalos Tibor – egyfős kárpittisztító vállalkozás Orosházán. Helyszíni mélytisztítás. Konverziós cél: telefonhívás / Viber / űrlapos árajánlatkérés. A jelenlegi oldal egy erős one-pager (`app/page.tsx`), jó on-page alappal (metaadatok, `HomeAndConstructionBusiness` JSON-LD a `app/layout.tsx`-ben).

---

## 1. Stratégiai keret: lokális + programozott SEO

Két SEO-játszma fut párhuzamosan, és kiegészítik egymást:

1. **Lokális SEO (off-page + GBP)** – ez dönti el, hogy egyáltalán versenyképesek vagyunk-e a „kárpittisztítás Orosháza" típusú, magas szándékú keresésekre. Egy egyfős vállalkozásnál ez legalább annyit nyom a latba, mint az oldalstruktúra (lásd 9. szakasz). **Enélkül a generált oldalak sem fognak rangsorolni.**
2. **Programozott SEO (on-page, ez a repó feladata)** – `szolgáltatás × település` mátrix aloldalak, amelyek a long-tail keresési szándékot fogják be (pl. „szőnyegtisztítás Tótkomlós").

A választott pSEO playbook a **Locations** (`[szolgáltatás] [településen]`), rétegezve a **Glossary/Examples** elemekkel (ár-tényezők, folyamat, előtte-utána), hogy elkerüljük a thin content büntetést.

### Kannibalizáció elkerülése (kritikus)

A keresési szándékot egyértelműen szét kell osztani az oldalak között, különben egymás ellen versengenek:

| Oldal | Cél-kulcsszó | Megjegyzés |
|---|---|---|
| **Főoldal** (`/`) | `kárpittisztítás Orosháza` | Marad az elsődleges, legerősebb oldal. **Nem** készítünk vele versengő „Orosháza" lokációs oldalt. |
| Szolgáltatás-pillér (`/szolgaltatasok/[service]`) | `szőnyegtisztítás Orosháza`, `matractisztítás` | Szolgáltatásonként egy mély tartalmi oldal, a home városra optimalizálva. |
| Település-hub (`/teruletek/[telepules]`) | `kárpittisztítás Tótkomlós` | Településenként egy oldal, a környékbeli városokra. |
| Szolgáltatás×Település (`/szolgaltatasok/[service]/[telepules]`) | `szőnyegtisztítás Tótkomlós` | A long-tail mélység. |

> A főoldal `<title>`-jét és H1-jét meghagyjuk Orosházára fókuszálva; az új oldalak más város/szolgáltatás kombinációkat céloznak, így nincs átfedés.

---

## 2. Kulcsszó- és oldalmátrix

### Szolgáltatások (bővített lista – jelenleg 3, javasolt 7)

A `lib/site.ts` `services` tömbjét bővítsük. Mindegyik valós keresett kulcsszó:

| slug | Szolgáltatás | Cél-kulcsszó |
|---|---|---|
| `karpittisztitas` | Kárpittisztítás (általános, pillér) | kárpittisztítás |
| `ulogarnitura-kanape-tisztitas` | Ülőgarnitúra & kanapétisztítás | kanapétisztítás |
| `szonyegtisztitas` | Szőnyegtisztítás | szőnyegtisztítás |
| `matractisztitas` | Matractisztítás | matractisztítás |
| `fotel-szek-tisztitas` | Fotel- és széktisztítás | fotel tisztítás |
| `autokarpit-tisztitas` | Autókárpit-tisztítás | autókárpit tisztítás |
| `iroda-kozuleti-tisztitas` | Irodai / közületi kárpittisztítás | irodabútor tisztítás |

> Új szolgáltatás felvételekor mindegyikhez kell egyedi `description`, `features`, és ideálisan saját előtte-utána kép. Üres sablon = thin content.

### Települések (jelenleg 12 – javasolt ~18-20)

Meglévők: Orosháza, Gyopárosfürdő, Tótkomlós, Nagyszénás, Csorvás, Békéssámson, Kardoskút, Pusztaföldvár, Gádoros, Mezőhegyes, Battonya + „Békés vármegye".

Javasolt bővítés a reális kiszállási körzettel: **Békéscsaba, Szarvas, Mezőberény, Gyula, Kondoros, Medgyesegyháza, Orosháza-Szentetornya**. (Csak olyan települést vegyünk fel, ahová tényleg kimegyünk – a hamis lokáció rontja a bizalmat és a GBP-konzisztenciát.)

### Mátrix mérete

- 7 szolgáltatás-pillér oldal
- ~18 település-hub oldal (az Orosháza-hub helyett a főoldal él)
- 7 × 18 ≈ **~120 szolgáltatás×település oldal**
- **Összesen ~145 indexelhető oldal.**

> **Minőség > mennyiség.** Inkább 120 valóban egyedi oldal, mint 1000 névcserés. Ha egy szolgáltatás×település kombináció nagyon thin maradna (nincs egyedi adat), `noindex`-eljük, vagy csak a település-hubon listázzuk, külön oldal nélkül.

---

## 3. URL-struktúra (subfolder, nem subdomain)

```
/                                             → Főoldal (kárpittisztítás Orosháza)
/szolgaltatasok/szonyegtisztitas              → Szolgáltatás-pillér
/szolgaltatasok/szonyegtisztitas/totkomlos    → Szolgáltatás + település (long-tail)
/teruletek/totkomlos                          → Település-hub (összes szolgáltatás ott)
```

- Ékezet nélküli, kötőjeles, kisbetűs slugok (`totkomlos`, `bekescsaba`, `bekes-varmegye`).
- Subfolder-struktúra konszolidálja a domain authority-t (a skill alapelve).
- Minden oldal canonical önmagára mutat; trailing slash konzisztensen (Next default: nincs).

---

## 4. Adatmodell (a thin content elleni fő fegyver)

A pSEO bukása mindig az, hogy csak a városnevet cserélgetjük. Ezt **per-település egyedi, valós adatmezőkkel** kerüljük el. Bővítsük a `lib/site.ts`-t egy gazdag település-táblával:

```ts
// lib/areas.ts (új)
export type Area = {
  slug: string;          // "totkomlos"
  name: string;          // "Tótkomlós"
  nameInflected: string; // "Tótkomlóson" (helyes ragozás – kézzel!)
  distanceKm: number;    // Orosházától, valós érték
  travelNote: string;    // "kb. 20 perc autóval"
  calloutFee: string;    // "díjmentes kiszállás" | "kedvezményes kiszállás"
  intro: string;         // 2-3 mondat EGYEDI, helyi vonatkozású szöveg
  localNote?: string;    // helyi horgony: ismert utca, lakótelep, intézmény
  nearby: string[];      // szomszédos slugok belső linkeléshez
  testimonialName?: string; // ha van helyi vélemény
};
```

Mindegyik település legalább ezekben tér el: **távolság, kiszállási díj, utazási idő, egyedi bevezető, szomszédos települések, helyi vélemény.** Ezek nem csak SEO-töltelék – valódi, hasznos infók a látogatónak (ez egyben a Google „helpful content" elvárása is).

A `services` tömbhöz hasonlóan minden szolgáltatásnak legyen: egyedi `description`, `features`, `priceFactors` (mitől függ az ár), `processSteps`, ideálisan saját galéria.

---

## 5. Oldalsablonok (Next.js App Router)

Kihasználjuk a meglévő komponenseket (`Reveal`, `Services`, `Faq`, `Contact`, `Footer`, `Header`, `FloatingCall`). Statikus generálás `generateStaticParams`-szal (gyors, jól indexelhető).

### Fájlstruktúra

```
app/
  szolgaltatasok/
    [service]/
      page.tsx              → generateStaticParams a services-ből
      [telepules]/
        page.tsx            → generateStaticParams a services × areas-ból
  teruletek/
    [telepules]/
      page.tsx              → generateStaticParams az areas-ból
components/
  seo/
    LocalHero.tsx           → H1 + lokális bevezető + dupla CTA
    CtaBand.tsx             → ismétlődő CTA sáv (hívás + Viber + űrlap-ugrás)
    LocalServiceGrid.tsx    → kapcsolódó szolgáltatások/települések (belső link)
    Breadcrumbs.tsx         → vizuális + BreadcrumbList JSON-LD
```

### Egy szolgáltatás×település oldal tartalmi váza (egyedi szekciók sorrendben)

1. **Breadcrumb** (Főoldal › Szolgáltatások › Szőnyegtisztítás › Tótkomlós)
2. **H1**: „Szőnyegtisztítás Tótkomlóson" + egyedi `area.intro` (helyi horgonnyal)
3. **CTA #1** (azonnal a hajtás felett): hívás-gomb + „Ingyenes árajánlat" → űrlap
4. Szolgáltatás-leírás (`service.description`, `features`)
5. **Helyi blokk**: „Kiszállás Tótkomlósra" – távolság, utazási idő, kiszállási díj (`area` mezőkből)
6. Folyamat (`processSteps`) + előtte/utána galéria
7. Ár-tényezők (`priceFactors`) – egyedi, hasznos tartalom
8. **CTA-band #2** (`CtaBand`)
9. Helyi/általános vélemény(ek)
10. **Egyedi FAQ**: 2 általános + 1-2 település-specifikus kérdés (pl. „Mennyi a kiszállási díj Tótkomlósra?") → FAQPage schema
11. **Belső linkek**: „Más szolgáltatások Tótkomlóson" + „Szőnyegtisztítás a környéken" (`nearby`)
12. **CTA #3**: teljes `Contact` szekció (űrlap előre kiválasztott szolgáltatással)
13. `FloatingCall` (mobil, már globális)

> A 3-13 közül a 2., 5., 7., 10., 11. szekció településenként/szolgáltatásonként ténylegesen más szöveget jelenít meg → minden oldal egyedi.

---

## 6. CTA-stratégia minden oldalon

Cél: a látogató sose görgessen 1.5 képernyőnél többet CTA nélkül. Háromféle akció minden oldalon, prioritási sorrendben:

1. **Telefonhívás** (legfőbb konverzió) – `telLink`, sticky header gomb + `FloatingCall` (mobil) + inline gombok.
2. **Viber** – `viberLink` (sokan ezt preferálják fotóküldésre).
3. **Űrlap** – a meglévő `Contact` komponens.

### Konkrét teendők

- **`Contact` komponens bővítése**: fogadjon `defaultService?: string` és `locationName?: string` propot. A `select` alapértelmezett értéke az oldal szolgáltatása legyen, a tárgysor és a heading a településre utaljon (pl. „Kérj árajánlatot – szőnyegtisztítás Tótkomlóson"). Így a beérkező lead-ből rögtön látszik a forrás (kulcsfontosságú a ROI méréshez).
- **`CtaBand` komponens (új)**: kompakt, ismételhető sáv H2-vel („Foltos a kanapé Tótkomlóson? Hívj most!"), nagy hívás-gomb + Viber + „Árajánlatot kérek" horgony a `#kapcsolat`-ra. Oldalanként 2-3 helyen.
- A `FloatingCall` már globális a layoutban – marad minden oldalon.
- Minden CTA-gomb mérhető legyen (lásd 11. szakasz: GA4/GTM event a `tel:` és `viber:` kattintásokra).

---

## 7. Strukturált adatok (schema.org)

A `app/layout.tsx` `HomeAndConstructionBusiness` JSON-LD jó alap. Oldaltípusonként egészítsük ki:

- **Szolgáltatás×település oldal**: `Service` schema, `areaServed` = az adott `City`, `provider` = a fő `LocalBusiness` (`@id` referenciával a `${site.url}/#business`-re – ne duplikáljuk, hivatkozzunk).
- **`BreadcrumbList`** minden mély oldalon (a `Breadcrumbs` komponensben).
- **`FAQPage`** az oldal egyedi GYIK-jéből.
- A `aggregateRating`-et csak a fő business entitáson tartsuk (ne szórjuk szét hamis review-számokat oldalakra – Google policy-kockázat).
- Helyezzünk el egy közös `getBusinessJsonLd()` helpert (`lib/schema.ts`), hogy ne duplikálódjon a kód.

---

## 8. Belső linkelés (hub & spoke)

Árva oldal = halott oldal. Linkstruktúra:

- **Hubok**: a 7 szolgáltatás-pillér és a 18 település-hub. Ezekre a **footerből és a főoldalról** is mutasson link.
- **Spoke-ok**: a ~120 szolgáltatás×település oldal. Minden spoke-ra mutat:
  - a saját szolgáltatás-pillér,
  - a saját település-hub,
  - a szomszédos települések azonos szolgáltatású oldalai (`area.nearby`).
- **`Footer` bővítése**: „Szolgáltatások" és „Településeink" linkoszlopok (legalább a top településekre), hogy minden mély oldal max. 2-3 kattintásra legyen.
- A `ServiceArea` komponens chip-jei legyenek **linkek** a település-hubokra (most csak szöveg).
- Breadcrumb minden mély oldalon → fel a hubokra.

---

## 9. Off-page / lokális SEO (a rangsorolás motorja)

A „near me" és városneves keresések 50-70%-át a lokális pakk (térkép) viszi. Ezek **nem a repóban** valósulnak meg, de a terv része:

1. **Google Business Profile** – létrehozás/igénylés „Asztalos Tibor Kárpittisztítás" néven, kategória: *Kárpittisztító szolgáltatás*. Szolgáltatási terület beállítása (service-area business, cím nélkül is működik). Fotók, nyitvatartás, szolgáltatások felsorolása. **Ez az egyetlen legnagyobb hatású lépés.**
2. **NAP-konzisztencia** (Name-Address-Phone) – a `lib/site.ts` adatai egyezzenek minden platformon. Töltsük ki a `site.street`-et (jelenleg üres) – a pontos cím / vagy szolgáltatási terület segíti a lokális SEO-t.
3. **Vélemények** – aktív kérés minden munka után GBP-re. A vélemények száma+frissessége erős rangsorjel. Cél: havi 2-4 új értékelés.
4. **Helyi citation-ök / katalógusok** – jofogas, aranyoldalak, telefonkonyv.hu, helyi FB-csoportok, céginformációs oldalak. Egységes NAP-pal.
5. **Backlinkek** – helyi vállalkozói partnerek, bababörze/lakberendező oldalak, helyi hírportál cikk.

---

## 10. `sitemap.xml` és indexelés

A `app/sitemap.ts` jelenleg csak a főoldalt adja vissza. Bővítsük úgy, hogy **programatikusan iterálja** a szolgáltatásokat, településeket és a mátrixot:

```ts
// app/sitemap.ts (vázlat)
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
  ];
  for (const s of services)
    entries.push({ url: `${site.url}/szolgaltatasok/${s.slug}`, priority: 0.8, changeFrequency: "monthly" });
  for (const a of areas)
    entries.push({ url: `${site.url}/teruletek/${a.slug}`, priority: 0.7, changeFrequency: "monthly" });
  for (const s of services)
    for (const a of areas)
      entries.push({ url: `${site.url}/szolgaltatasok/${s.slug}/${a.slug}`, priority: 0.6, changeFrequency: "monthly" });
  return entries;
}
```

- A `app/robots.ts` már helyesen hivatkozik a `/sitemap.xml`-re – marad.
- Build után **Google Search Console**-ban beadni a sitemap-et, és a kulcsoldalakat manuálisan „Request indexing".
- Ha valamelyik kombináció thin marad → `export const metadata = { robots: { index: false } }` az adott oldalon, és kihagyni a sitemapből.

---

## 11. Mérés (e nélkül vakon repülünk)

- **GA4 + Google Tag Manager** bekötése (jelenleg nincs analytics a kódban).
- Event-ek: `tel:` kattintás (hívás), `viber:` kattintás, űrlap-submit (a `Contact` `setSent(true)` ágánál), oldaltípus dimenzió (szolgáltatás/település).
- **Google Search Console**: rangsor-pozíciók, impressziók, indexeltség oldaltípusonként.
- A `Contact` űrlap tárgysorába/rejtett mezőjébe az oldal URL-je / szolgáltatás+település → minden lead forrása beazonosítható.
- KPI-k: indexelt oldalak száma, kulcsszó-pozíciók (top 10/3), organikus forgalom, hívás+űrlap konverziók.

---

## 12. Ütemezés (fázisok)

**1. fázis – Alapok (1. hét)**
- `lib/site.ts` szolgáltatások bővítése 7-re (egyedi szövegekkel).
- `lib/areas.ts` létrehozása a gazdag település-adatokkal (valós távolságok, ragozás kézzel).
- GA4/GTM bekötés, esemény-mérés.
- **GBP létrehozása** (párhuzamosan, nem-kód).

**2. fázis – Sablonok (2. hét)**
- `Breadcrumbs`, `CtaBand`, `LocalHero`, `LocalServiceGrid` komponensek.
- `Contact` bővítése `defaultService` / `locationName` proppal.
- Település-hub oldalsablon (`/teruletek/[telepules]`).

**3. fázis – Programozott generálás (3. hét)**
- Szolgáltatás-pillér oldalak (`/szolgaltatasok/[service]`).
- Szolgáltatás×település oldalak (`/szolgaltatasok/[service]/[telepules]`) + `generateStaticParams`.
- Per-oldal `generateMetadata` (egyedi `<title>`, description, canonical, OG).
- Schema (`Service`, `BreadcrumbList`, `FAQPage`).

**4. fázis – Linkelés + sitemap + indexelés (4. hét)**
- `Footer` és `ServiceArea` belső linkek.
- `sitemap.ts` bővítése.
- GSC sitemap-beadás, indexelés kérése.

**5. fázis – Off-page + iteráció (folyamatos)**
- Vélemények gyűjtése, citation-ök, backlinkek.
- GSC-adatok alapján: gyenge oldalak tartalmának bővítése, thin oldalak noindexelése, új kulcsszavak.

---

## 13. Minőség-ellenőrző lista (launch előtt)

**Tartalom**
- [ ] Minden oldalnak van egyedi, hasznos tartalma (nem csak névcsere).
- [ ] Egyedi `<title>` és meta description oldalanként (kulcsszó + település).
- [ ] Egy H1 / oldal, helyes heading-hierarchia.

**Technikai**
- [ ] Canonical önmagára.
- [ ] `Service` + `BreadcrumbList` + `FAQPage` schema validál (Rich Results Test).
- [ ] Statikus generálás, gyors LCP (Core Web Vitals).
- [ ] `lang="hu"`, ékezetes szövegek rendben.

**Linkelés / index**
- [ ] Nincs árva oldal (footer + breadcrumb + hub linkek).
- [ ] Minden oldal a sitemapben (a noindex-eltek kivételével).
- [ ] `robots.ts` enged + sitemap hivatkozva.

**CTA / mérés**
- [ ] Minden oldalon ≥3 CTA (hívás, Viber, űrlap).
- [ ] `Contact` előre kiválasztott szolgáltatással, forrás-azonosítóval.
- [ ] GA4 event-ek a hívás/Viber/űrlap akciókra.

---

## 14. Kockázatok és tiltások

- **Thin content / doorway pages**: a legnagyobb veszély. Védekezés: valós, egyedi per-település adatok (4. szakasz), és kevesebb, de jobb oldal.
- **Hamis lokáció**: ne vegyünk fel olyan települést, ahová nem megyünk ki – ront a bizalmon és a GBP-konzisztencián.
- **Kulcsszó-stuffing**: természetes, magyar nyelvű, helyesen ragozott szöveg (nem „kárpittisztítás Tótkomlós kárpittisztítás olcsó Tótkomlós").
- **Review-schema szórás**: az `aggregateRating` csak a fő business entitáson, ne minden aloldalon.
- **Kannibalizáció**: a főoldal marad „Orosháza", az aloldalak más kombinációkat céloznak (1. szakasz).

---

## 15. Bővítés – folteltávolítási útmutatók (2026-06)

Az alapmátrix (szolgáltatás × település) mellé egy új, alacsony versenyű, jól konvertáló oldaltípus került, kihasználva, hogy Orosháza környékén gyenge a verseny.

### Új oldaltípus: folteltávolítási útmutatók (`/folteltavolitas/[folt]`)

Informatív, long-tail oldalak, amiket valaki ÉPP akkor keres, amikor foltos a bútora → könnyű rangsorolni + jól konvertál (minden útmutató CTA-val zárul a kapcsolódó szolgáltatásra). Egyben topikális tekintélyt épít a pénzes oldalaknak.

- Adat: `lib/stains.ts` (`stains` – 8 folt: borfolt, kávéfolt, vérfolt, vizeletfolt, zsírfolt, tintafolt, rágógumi, kisállat-szag). Minden folt egyedi: `intro`, `difficulty`, `urgency`, `surfaces`, lépésenkénti `steps` (HowTo), `mistakes`, `proNote`, `relatedServiceSlug`.
- Generátorok `lib/seo.ts`-ben: `stainFaqs()` (FAQPage) + `stainHowToJsonLd()` (HowTo schema).
- Oldalak: `app/folteltavolitas/page.tsx` (hub) + `app/folteltavolitas/[folt]/page.tsx` (`generateStaticParams`). Belső linkek: kapcsolódó szolgáltatás-pillér + 5 település-hub + a többi útmutató. A `Footer` márka-oszlopa linkel a hubra (nincs árva oldal).
- Sitemap: hub (0.6) + minden útmutató (0.5) hozzáadva.

Új folt felvétele = egy bejegyzés a `stains` tömbbe (az oldal + sitemap regenerálódik). `npm run build` zöld, lint tiszta. Összesen 136 statikus oldal (127-ről).
