// =============================================================
//  KÖZPONTI ADATOK – itt szerkeszd a vállalkozás adatait
// =============================================================

export const site = {
  name: "Asztalos Tibor Kárpittisztítás",
  shortName: "Asztalos Tibor",
  tagline: "Kárpittisztítás Orosházán és környékén",
  // Cseréld le a valódi domainre, ha élesben lesz:
  url: "https://karpittisztitas-oroshaza.hu",
  city: "Orosháza",
  region: "Békés vármegye",
  postalCode: "5900",
  country: "HU",
  // Pontos cím – töltsd ki a saját címeddel a jobb helyi SEO-hoz:
  street: "",
  // Telefonszám
  phoneDisplay: "+36 30 621 4934",
  phoneRaw: "+36306214934",
  // E-mail
  email: "asztalostibor13@gmail.com",
  // Elérhetőség (rugalmas, hétvégén is)
  hours: "Hétvégén is elérhető",
  priceRange: "$$",
  // Megközelítő földrajzi koordináták Orosháza központra (finomítsd, ha kell)
  geo: { lat: 46.5667, lng: 20.6667 },
} as const;

export const viberLink = `viber://chat?number=${encodeURIComponent(site.phoneRaw)}`;
export const telLink = `tel:${site.phoneRaw}`;
export const mailLink = `mailto:${site.email}`;

// A vállalkozás által lefedett települések (helyi SEO + szöveg)
export const serviceAreas = [
  "Orosháza",
  "Gyopárosfürdő",
  "Tótkomlós",
  "Nagyszénás",
  "Csorvás",
  "Békéssámson",
  "Kardoskút",
  "Pusztaföldvár",
  "Gádoros",
  "Mezőhegyes",
  "Battonya",
  "Békés vármegye",
] as const;

export type Service = {
  slug: string;
  // A kulcsszó alapalakja (pl. "Szőnyegtisztítás") — címekhez, H1-hez
  keyword: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  // Mitől függ az ár — egyedi, hasznos tartalom az aloldalakon
  priceFactors: string[];
  icon: "sofa" | "rug" | "mattress" | "chair" | "car" | "office";
  // Megjelenjen-e a főoldal szolgáltatás-rácsában
  primary?: boolean;
  // Készüljön-e hozzá település×szolgáltatás aloldal (false a "kárpittisztítás"
  // általános pillérnél, mert azt a település-hub fedi le – ld. SEO_PLAN.md)
  local?: boolean;
};

export const services: Service[] = [
  {
    slug: "karpittisztitas",
    keyword: "Kárpittisztítás",
    title: "Kárpittisztítás",
    short: "Bútorkárpitok teljes körű, helyszíni gépi mélytisztítása.",
    description:
      "Kanapé, ülőgarnitúra, fotel, szék, matrac és szőnyeg – minden kárpitozott felület professzionális, gépi mélytisztítása egy kézből. A szövet mélyéről vonom ki a port, a zsírt, a foltokat és a szagokat, kíméletes, bevizsgált szerekkel, a helyszínen.",
    features: [
      "Minden kárpittípusra",
      "Helyszíni, gépi mélytisztítás",
      "Folt-, szag- és allergénmentesítés",
      "Ingyenes felmérés és árajánlat",
    ],
    priceFactors: [
      "A bútor mérete és típusa",
      "A kárpit anyaga és szennyezettsége",
      "A foltok jellege és kora",
      "A tisztítandó darabok száma",
    ],
    icon: "sofa",
    local: false,
  },
  {
    slug: "ulogarnitura-kanape-tisztitas",
    keyword: "Kanapétisztítás",
    title: "Ülőgarnitúra & kanapétisztítás",
    short: "Kanapé, sarokgarnitúra, fotel, szék és puff mélytisztítása.",
    description:
      "Professzionális gépi mélytisztítás, amely a szövet mélyéről távolítja el a port, a zsírt, az ételfoltokat és a kellemetlen szagokat. A kárpit megőrzi színét és puhaságát, miközben higiénikussá és frissé válik.",
    features: [
      "Sarok- és ülőgarnitúrák",
      "Fotel, szék, puff, étkezőszék",
      "Folt- és szageltávolítás",
      "Allergén- és atkamentesítés",
    ],
    priceFactors: [
      "Hány személyes a garnitúra",
      "Szövet- vagy bőrkárpit",
      "Folt- és szennyezettség mértéke",
      "Levehető vagy fix huzat",
    ],
    icon: "sofa",
    primary: true,
    local: true,
  },
  {
    slug: "szonyegtisztitas",
    keyword: "Szőnyegtisztítás",
    title: "Szőnyegtisztítás",
    short: "Padlószőnyeg és perzsaszőnyeg helyszíni, mélyreható tisztítása.",
    description:
      "Padlószőnyegek és gyapjú- vagy perzsaszőnyegek kíméletes, mégis alapos tisztítása korszerű géppel. A beivódott szennyeződést és port kivonjuk, így a szőnyeg újra élénk színű, puha és higiénikus lesz.",
    features: [
      "Padlószőnyeg helyszíni tisztítása",
      "Perzsa- és gyapjúszőnyeg",
      "Mélytisztítás, szárazporszívózás",
      "Folt- és szageltávolítás",
    ],
    priceFactors: [
      "A szőnyeg négyzetmétere",
      "Anyag: gyapjú, szintetikus, perzsa",
      "Szőnyeg vastagsága és szálhossza",
      "Folt- és szennyezettség mértéke",
    ],
    icon: "rug",
    primary: true,
    local: true,
  },
  {
    slug: "matractisztitas",
    keyword: "Matractisztítás",
    title: "Matractisztítás",
    short: "Matracok fertőtlenítő mélytisztítása az egészséges alváshoz.",
    description:
      "A matrac a legtöbb port, atkát és izzadságot rejtő bútor az otthonban. Mélytisztítással és fertőtlenítéssel eltávolítjuk az allergéneket és a foltokat, hogy tisztább, egészségesebb környezetben aludj.",
    features: [
      "Egy- és kétszemélyes matracok",
      "Atka- és allergénmentesítés",
      "Izzadság- és vizeletfolt kezelése",
      "Szagtalanítás",
    ],
    priceFactors: [
      "Egy- vagy kétszemélyes matrac",
      "Egy- vagy kétoldali tisztítás",
      "Folt- és szennyezettség mértéke",
      "Fertőtlenítés szükségessége",
    ],
    icon: "mattress",
    primary: true,
    local: true,
  },
  {
    slug: "fotel-szek-tisztitas",
    keyword: "Fotel- és széktisztítás",
    title: "Fotel- és széktisztítás",
    short: "Fotelek, étkezőszékek, irodaszékek és puffok kárpitjának felfrissítése.",
    description:
      "A fotelek és étkezőszékek kárpitja észrevétlenül gyűjti a port, a zsírt és a foltokat. Darabonkénti gépi mélytisztítással újra üde, tiszta és higiénikus lesz minden ülőfelület – kíméletesen, a szövet károsítása nélkül.",
    features: [
      "Fotel, fülesfotel, relaxfotel",
      "Étkező- és irodaszékek",
      "Puff és lábtartó",
      "Folt- és szageltávolítás",
    ],
    priceFactors: [
      "A darabok száma",
      "Kárpit anyaga és állapota",
      "Folt- és szennyezettség mértéke",
      "Fix vagy levehető huzat",
    ],
    icon: "chair",
    local: true,
  },
  {
    slug: "autokarpit-tisztitas",
    keyword: "Autókárpit-tisztítás",
    title: "Autókárpit-tisztítás",
    short: "Autóülések, kárpit és csomagtér gépi mélytisztítása.",
    description:
      "Az autó belső kárpitja gyorsan beissza a port, az ételfoltot és a szagokat. Az ülések, a tetőkárpit és a csomagtér gépi mélytisztításával az utastér újra friss, tiszta és kellemes illatú lesz – család- és allergiabarát módon.",
    features: [
      "Üléskárpit és tetőkárpit",
      "Szőnyeg és csomagtér",
      "Folt- és szageltávolítás",
      "Dohány- és állatszag semlegesítése",
    ],
    priceFactors: [
      "Az autó mérete (kategória)",
      "Üléshuzat anyaga",
      "Szennyezettség mértéke",
      "Teljes vagy részleges tisztítás",
    ],
    icon: "car",
    local: true,
  },
  {
    slug: "iroda-kozuleti-tisztitas",
    keyword: "Irodai kárpittisztítás",
    title: "Irodai & közületi kárpittisztítás",
    short: "Irodák, váróhelyiségek és közületek bútorkárpitjának karbantartása.",
    description:
      "Irodaszékek, váróbútorok, kárpitozott tárgyalószékek és padlószőnyegek rendszeres vagy egyszeri mélytisztítása. Tiszta, reprezentatív és egészséges környezet a munkatársaknak és az ügyfeleknek – rugalmas, munkaidőn kívüli időpontokkal is.",
    features: [
      "Irodaszékek nagy tételben",
      "Váró- és tárgyalóbútorok",
      "Padlószőnyeg helyszínen",
      "Rugalmas, munkaidőn kívüli időpont",
    ],
    priceFactors: [
      "A tisztítandó darabszám",
      "A felület típusa és mérete",
      "Egyszeri vagy rendszeres megbízás",
      "Időpont (munkaidőn kívül)",
    ],
    icon: "office",
    local: true,
  },
];

// Közös tisztítási folyamat – minden szolgáltatásnál ez a munkamenet
export const processSteps = [
  {
    title: "Felmérés és árajánlat",
    text: "Telefonon vagy fotó alapján felmérem a bútort, és ingyenes, kötelezettségmentes árajánlatot adok.",
  },
  {
    title: "Előkészítés",
    text: "Leporszívózom a felületet, és kíméletes folttisztítóval előkezelem a makacs szennyeződéseket.",
  },
  {
    title: "Gépi mélytisztítás",
    text: "Professzionális géppel a szövet mélyéről vonom ki a feloldott szennyeződést, port és atkát.",
  },
  {
    title: "Szárítás és átadás",
    text: "A felület jellemzően 6–24 óra alatt megszárad. Frissen, tisztán és higiénikusan adom át.",
  },
] as const;

// Segédfüggvények a programozott oldalakhoz
export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
export const localServices = services.filter((s) => s.local);

export const faqs = [
  {
    q: "Mennyibe kerül a kárpittisztítás?",
    a: "Az ár a bútor méretétől, anyagától és szennyezettségétől függ. Ezért ingyenes, kötelezettségmentes árajánlatot adok – elég egy telefon vagy egy fénykép a bútorról, és máris megmondom a pontos árat.",
  },
  {
    q: "A helyszínen, nálam otthon végzitek a tisztítást?",
    a: "Igen. A kanapé-, ülőgarnitúra- és matractisztítást általában a helyszínen, az otthonodban végzem, így nem kell a nehéz bútorokat mozgatni. A szőnyegeket szintén helyszínen tisztítom.",
  },
  {
    q: "Mennyi idő alatt szárad meg a kárpit?",
    a: "Egy átlagosan szennyezett ülőgarnitúra vagy matrac jellemzően 6–24 óra alatt szárad meg, az anyagtól és a szellőzéstől függően. Erős igénybevétel esetén ez kissé hosszabb lehet.",
  },
  {
    q: "Milyen szereket használtok? Biztonságos a gyerekek és állatok számára?",
    a: "Kizárólag bevizsgált, kíméletes tisztítószereket használok, amelyek a textilt és a benne élőket sem károsítják. A tisztítás után a felület megszáradva biztonságos a gyermekek és háziállatok számára is.",
  },
  {
    q: "Eltűnnek a régi és makacs foltok?",
    a: "A foltok nagy része eltávolítható, és a bútor összképe minden esetben látványosan javul. A nagyon régi, beivódott vagy festékfoltoknál előfordulhat halvány nyom, erről a felmérésnél őszintén tájékoztatlak.",
  },
  {
    q: "Mely településekre mentek ki?",
    a: "Orosháza és Gyopárosfürdő mellett a környező településekre – Tótkomlós, Nagyszénás, Csorvás, Gádoros és Békés vármegye nagy részére – is kiszállok. Hívj, és egyeztetjük a részleteket!",
  },
];

export const testimonials = [
  {
    name: "Kovács Erika",
    place: "Orosháza",
    text: "Hihetetlen, mennyit változott a kanapénk! Évek óta nem volt ilyen tiszta. Tibor pontos, precíz és nagyon kedves. Csak ajánlani tudom!",
    rating: 5,
  },
  {
    name: "Nagy Sándor",
    place: "Gyopárosfürdő",
    text: "A sarokgarnitúra és a szőnyeg is mint új lett. Korrekt ár, megbízható munka, házhoz jött. Legközelebb is őt hívom.",
    rating: 5,
  },
  {
    name: "Tóth Margit",
    place: "Tótkomlós",
    text: "A matracaink tisztítását kértem az allergiás kislányom miatt. Profi munka, érezhető a különbség. Köszönöm szépen!",
    rating: 5,
  },
];

export const stats = [
  { value: "10+", label: "év tapasztalat" },
  { value: "1500+", label: "tisztított bútor" },
  { value: "100%", label: "elégedettségi garancia" },
  { value: "0 Ft", label: "kiszállás a városban" },
];
