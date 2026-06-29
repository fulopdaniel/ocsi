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
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: "sofa" | "rug" | "mattress";
};

export const services: Service[] = [
  {
    slug: "ulogarnitura-kanape-tisztitas",
    title: "Ülőgarnitúra & kanapé tisztítás",
    short: "Kanapé, sarokgarnitúra, fotel, szék és puff mélytisztítása.",
    description:
      "Professzionális gépi mélytisztítás, amely a szövet mélyéről távolítja el a port, a zsírt, az ételfoltokat és a kellemetlen szagokat. A kárpit megőrzi színét és puhaságát, miközben higiénikussá és frissé válik.",
    features: [
      "Sarok- és ülőgarnitúrák",
      "Fotel, szék, puff, étkezőszék",
      "Folt- és szageltávolítás",
      "Allergén- és atkamentesítés",
    ],
    icon: "sofa",
  },
  {
    slug: "szonyegtisztitas",
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
    icon: "rug",
  },
  {
    slug: "matractisztitas",
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
    icon: "mattress",
  },
];

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
