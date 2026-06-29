// =============================================================
//  TELEPÜLÉSEK – a programozott (helyi SEO) aloldalak adatai
// -------------------------------------------------------------
//  FONTOS: a `distanceKm`, `inflected` (helyes magyar ragozás) és
//  `intro` mezők teszik EGYEDIVÉ az oldalakat. Ne hagyd sablonosnak!
//  Orosháza szándékosan KIMARAD: azt a főoldal célozza (ld. SEO_PLAN.md).
// =============================================================

export type Area = {
  slug: string;
  name: string;
  // Helyhatározós alak: „… Tótkomlóson", „… Békéscsabán"
  inflected: string;
  // Közúti távolság Orosházától (km) – valós, közelítő érték
  distanceKm: number;
  travelNote: string;
  calloutFee: string;
  // 2–3 mondat EGYEDI, helyi vonatkozású bevezető
  intro: string;
  // Szomszédos települések slugjai – belső linkeléshez
  nearby: string[];
  // Régió-oldal (Békés vármegye) – más elrendezést kap
  isRegion?: boolean;
};

export const areas: Area[] = [
  {
    slug: "gyoparosfurdo",
    name: "Gyopárosfürdő",
    inflected: "Gyopárosfürdőn",
    distanceKm: 4,
    travelNote: "néhány perc Orosháza központjától",
    calloutFee: "díjmentes kiszállás",
    intro:
      "Gyopárosfürdő Orosháza üdülőövezete, néhány percre a központtól – ide ugyanúgy díjmentesen szállok ki, mint a városba. A nyaralók, apartmanok és vendégszobák kárpitjait a szezon előtt és után is érdemes felfrissíteni.",
    nearby: ["totkomlos", "kardoskut", "bekessamson"],
  },
  {
    slug: "totkomlos",
    name: "Tótkomlós",
    inflected: "Tótkomlóson",
    distanceKm: 18,
    travelNote: "kb. 20 perc autóval Orosházáról",
    calloutFee: "kedvezményes kiszállás",
    intro:
      "Tótkomlós alig 20 percre fekszik Orosházától, így a kárpittisztítást itt is rugalmasan, akár hétvégén is vállalom. A helyszínen, az otthonodban dolgozom, nem kell a nehéz bútorokat mozgatni.",
    nearby: ["bekessamson", "nagyszenas", "kardoskut"],
  },
  {
    slug: "nagyszenas",
    name: "Nagyszénás",
    inflected: "Nagyszénáson",
    distanceKm: 18,
    travelNote: "kb. 20 perc autóval Orosházáról",
    calloutFee: "kedvezményes kiszállás",
    intro:
      "Nagyszénásra szívesen kiszállok Orosházáról – a környékbeli munkáimat gyakran egy útba esően szervezem, így gyorsan tudok időpontot adni. Kanapé, szőnyeg és matrac mélytisztítása egy helyen.",
    nearby: ["gadoros", "csorvas", "kondoros"],
  },
  {
    slug: "csorvas",
    name: "Csorvás",
    inflected: "Csorváson",
    distanceKm: 17,
    travelNote: "kb. 20 perc autóval Orosházáról",
    calloutFee: "kedvezményes kiszállás",
    intro:
      "Csorvás Orosháza és Békéscsaba között fekszik, így a környéki kiszállásaim természetes állomása. A bútorkárpitok, szőnyegek és matracok helyszíni mélytisztítását itt is teljes körűen vállalom.",
    nearby: ["gadoros", "nagyszenas", "bekescsaba"],
  },
  {
    slug: "bekessamson",
    name: "Békéssámson",
    inflected: "Békéssámsonban",
    distanceKm: 12,
    travelNote: "kb. 15 perc autóval Orosházáról",
    calloutFee: "kedvezményes kiszállás",
    intro:
      "Békéssámson közvetlen szomszédja Orosházának, mindössze negyedóra autóval. A közelség miatt gyorsan egyeztethetünk időpontot, és kedvező feltételekkel végzem a helyszíni kárpittisztítást.",
    nearby: ["totkomlos", "kardoskut", "gyoparosfurdo"],
  },
  {
    slug: "kardoskut",
    name: "Kardoskút",
    inflected: "Kardoskúton",
    distanceKm: 12,
    travelNote: "kb. 15 perc autóval Orosházáról",
    calloutFee: "kedvezményes kiszállás",
    intro:
      "Kardoskút csendes települését Orosházáról néhány perc alatt elérem. A helyszíni mélytisztítással a kanapé, a szőnyeg és a matrac is megújul, anélkül hogy bárhová el kellene szállítani.",
    nearby: ["bekessamson", "totkomlos", "pusztafoldvar"],
  },
  {
    slug: "pusztafoldvar",
    name: "Pusztaföldvár",
    inflected: "Pusztaföldváron",
    distanceKm: 13,
    travelNote: "kb. 15 perc autóval Orosházáról",
    calloutFee: "kedvezményes kiszállás",
    intro:
      "Pusztaföldvár Orosháza tőszomszédságában fekszik, így a kiszállás gyors és kedvező. A bútorkárpitok és szőnyegek beivódott szennyeződését korszerű géppel, a helyszínen vonom ki.",
    nearby: ["kardoskut", "totkomlos", "gadoros"],
  },
  {
    slug: "gadoros",
    name: "Gádoros",
    inflected: "Gádoroson",
    distanceKm: 14,
    travelNote: "kb. 15 perc autóval Orosházáról",
    calloutFee: "kedvezményes kiszállás",
    intro:
      "Gádoros mindössze negyedórányira van Orosházától, így ide rugalmasan és gyorsan kiszállok. Kanapé-, szőnyeg- és matractisztítást egyaránt vállalok, kíméletes, bevizsgált szerekkel.",
    nearby: ["nagyszenas", "pusztafoldvar", "csorvas"],
  },
  {
    slug: "mezohegyes",
    name: "Mezőhegyes",
    inflected: "Mezőhegyesen",
    distanceKm: 35,
    travelNote: "kb. 35 perc autóval Orosházáról",
    calloutFee: "kiszállási díj egyeztetés szerint",
    intro:
      "Mezőhegyes a megye déli részén fekszik, ahová előzetes egyeztetéssel szívesen kiszállok. Több bútor vagy egész lakás tisztítása esetén különösen megéri egyszerre megrendelni a munkát.",
    nearby: ["battonya", "medgyesegyhaza"],
  },
  {
    slug: "battonya",
    name: "Battonya",
    inflected: "Battonyán",
    distanceKm: 45,
    travelNote: "kb. 45 perc autóval Orosházáról",
    calloutFee: "kiszállási díj egyeztetés szerint",
    intro:
      "Battonya a déli határszélen található, ahová nagyobb vagy összevont megbízás esetén jövök ki. Egyeztessünk telefonon – ha több darabot tisztíttatnál, a kiszállás is megéri.",
    nearby: ["mezohegyes", "medgyesegyhaza"],
  },
  {
    slug: "bekescsaba",
    name: "Békéscsaba",
    inflected: "Békéscsabán",
    distanceKm: 35,
    travelNote: "kb. 35 perc autóval Orosházáról",
    calloutFee: "kiszállási díj egyeztetés szerint",
    intro:
      "Békéscsaba a megyeszékhely, ahová Orosházáról rendszeresen kiszállok. A lakások, irodák és váróhelyiségek bútorkárpitját, szőnyegét egyaránt felfrissítem – munkaidőn kívül is.",
    nearby: ["csorvas", "mezobereny", "gyula"],
  },
  {
    slug: "szarvas",
    name: "Szarvas",
    inflected: "Szarvason",
    distanceKm: 45,
    travelNote: "kb. 45 perc autóval Orosházáról",
    calloutFee: "kiszállási díj egyeztetés szerint",
    intro:
      "Szarvas a Körös-parti város, ahová előzetes időpont-egyeztetéssel jövök ki. Nyaralók, vendégházak és otthonok kárpitjának mélytisztítását is vállalom a helyszínen.",
    nearby: ["kondoros", "mezobereny"],
  },
  {
    slug: "mezobereny",
    name: "Mezőberény",
    inflected: "Mezőberényben",
    distanceKm: 40,
    travelNote: "kb. 40 perc autóval Orosházáról",
    calloutFee: "kiszállási díj egyeztetés szerint",
    intro:
      "Mezőberénybe Békéscsaba érintésével szállok ki, így a környékbeli megbízásokat össze tudom hangolni. A kanapék, szőnyegek és matracok helyszíni mélytisztítását teljes körűen elvégzem.",
    nearby: ["bekescsaba", "szarvas", "kondoros"],
  },
  {
    slug: "gyula",
    name: "Gyula",
    inflected: "Gyulán",
    distanceKm: 55,
    travelNote: "kb. 50–55 perc autóval Orosházáról",
    calloutFee: "kiszállási díj egyeztetés szerint",
    intro:
      "Gyula fürdővárosába nagyobb vagy összevont megbízás esetén jövök ki. Apartmanok, vendégszobák és otthonok kárpitjának felfrissítését is vállalom – egyeztessünk telefonon a részletekről.",
    nearby: ["bekescsaba"],
  },
  {
    slug: "kondoros",
    name: "Kondoros",
    inflected: "Kondoroson",
    distanceKm: 28,
    travelNote: "kb. 30 perc autóval Orosházáról",
    calloutFee: "kiszállási díj egyeztetés szerint",
    intro:
      "Kondoros Orosháza és Szarvas között fekszik, így a környéki kiszállásaim útvonalába esik. Bútorkárpit, szőnyeg és matrac mélytisztítását egyaránt elvégzem a helyszínen.",
    nearby: ["nagyszenas", "szarvas", "mezobereny"],
  },
  {
    slug: "medgyesegyhaza",
    name: "Medgyesegyháza",
    inflected: "Medgyesegyházán",
    distanceKm: 30,
    travelNote: "kb. 30 perc autóval Orosházáról",
    calloutFee: "kiszállási díj egyeztetés szerint",
    intro:
      "Medgyesegyházára előzetes egyeztetéssel szívesen kiszállok Orosházáról. Több bútor egyidejű tisztítása esetén a kiszállás is gazdaságosabb – kérj rá ingyenes árajánlatot.",
    nearby: ["mezohegyes", "battonya"],
  },
  {
    slug: "bekes-varmegye",
    name: "Békés vármegye",
    inflected: "Békés vármegyében",
    distanceKm: 0,
    travelNote: "Orosházáról az egész vármegyébe",
    calloutFee: "kiszállás a vármegye egész területére",
    intro:
      "Orosházi bázisomról egész Békés vármegyébe kiszállok: a környező falvaktól a megyeszékhelyig. Bárhol jársz a vármegyében, a kanapé, a szőnyeg és a matrac mélytisztítását a helyszínen, kíméletes szerekkel végzem.",
    nearby: ["totkomlos", "bekescsaba", "szarvas", "gyula"],
    isRegion: true,
  },
];

// Segédfüggvények a programozott oldalakhoz
export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
export const townAreas = areas.filter((a) => !a.isRegion);
