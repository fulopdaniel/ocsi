// =============================================================
//  FOLTELTÁVOLÍTÁSI ÚTMUTATÓK – informatív, könnyen rangsorolható
//  long-tail oldalak (pl. „borfolt eltávolítása kanapéból").
// -------------------------------------------------------------
//  Magas keresési szándék (valakinek ÉPP most foltos a bútora),
//  alacsony verseny. Minden útmutató végén konverziós CTA a
//  kapcsolódó szolgáltatásra. A tartalom legyen EGYEDI és valóban
//  hasznos (Google „helpful content"), ne kulcsszó-töltelék.
// =============================================================

export type StainStep = { title: string; text: string };

export type Stain = {
  slug: string;
  // A folt megnevezése (pl. „Borfolt") – címekhez, H1-hez
  name: string;
  // Eyebrow/kategória szöveg
  eyebrow: string;
  // 2–3 mondat egyedi bevezető
  intro: string;
  // Mennyire nehéz házilag (info-sáv)
  difficulty: "Könnyű" | "Közepes" | "Nehéz";
  // Mennyire sürgős a beavatkozás (info-sáv)
  urgency: string;
  // Mely felületeken fordul elő jellemzően
  surfaces: string[];
  // Lépésről lépésre házi eltávolítás (HowTo schema)
  steps: StainStep[];
  // Gyakori hibák, amiket kerülj
  mistakes: string[];
  // Mikor érdemes szakembert hívni
  proNote: string;
  // A kapcsolódó szolgáltatás slugja (belső link + Contact)
  relatedServiceSlug: string;
};

export const stains: Stain[] = [
  {
    slug: "borfolt",
    name: "Borfolt",
    eyebrow: "Vörösbor folt",
    intro:
      "A kiömlött vörösbor másodpercek alatt beivódik a kárpit szálai közé, és száradás után makacs, lilás-rózsaszín nyomot hagy. A jó hír: ha gyorsan és helyesen lépsz, az esetek többségében teljesen eltűnik. A legfontosabb szabály, hogy soha ne dörzsöld – attól csak mélyebbre és szélesebbre viszed.",
    difficulty: "Közepes",
    urgency: "Azonnal lépj – száradva sokkal nehezebb",
    surfaces: ["Kanapé, ülőgarnitúra", "Szőnyeg", "Étkezőszék"],
    steps: [
      {
        title: "Itasd fel, ne dörzsöld",
        text: "Tiszta, fehér papírtörlővel vagy ronggyal óvatosan nyomkodd fel a folyadékot kívülről befelé haladva. A dörzsölés a szálak közé préseli a színanyagot.",
      },
      {
        title: "Szórj rá sót vagy szódabikarbónát",
        text: "Bőven hintsd be a nedves foltot konyhasóval vagy szódabikarbónával – ez magába szívja a maradék bort. Hagyd 10–15 percig hatni, majd porszívózd fel.",
      },
      {
        title: "Tisztítsd langyos szappanos vízzel",
        text: "Néhány csepp mosogatószert keverj kevés langyos vízbe, és a habjával, fehér ronggyal pötyögtetve dolgozd át a foltot. Közben gyakran öblítsd ki a rongyot.",
      },
      {
        title: "Semlegesíts és szárítsd",
        text: "Tiszta, langyos vízzel törölgesd át a területet, hogy ne maradjon szappanmaradék, majd száraz törülközővel itasd ki a nedvességet, és hagyd jól megszáradni.",
      },
    ],
    mistakes: [
      "Forró vizet használsz – a hő megköti a bor színanyagát.",
      "Erősen dörzsölöd, amitől szétkenődik és bolyhosodik a szövet.",
      "Fehérbort öntesz rá ellenszerként – ettől csak még nedvesebb lesz a folt.",
    ],
    proNote:
      "Ha a borfolt régi, beszáradt, vagy világos, kényes huzaton van, a házi módszer könnyen halvány nyomot vagy vízkarikát hagy. Ilyenkor a helyszíni gépi mélytisztítás a biztos megoldás – a szövet mélyéről vonom ki a maradék színanyagot.",
    relatedServiceSlug: "ulogarnitura-kanape-tisztitas",
  },
  {
    slug: "kavefolt",
    name: "Kávéfolt",
    eyebrow: "Kávé- és teafolt",
    intro:
      "A kávé- és teafolt a cserzőanyagai miatt sárgásbarna, idővel egyre nehezebben kivehető nyomot hagy a kárpiton. Frissen még egyszerű feladat, a régi, beszáradt folt viszont már komolyabb kezelést kíván. A tej és cukor a foltban ráadásul szagot és ragacsot is okozhat.",
    difficulty: "Könnyű",
    urgency: "Frissen pár perc, száradva makacs",
    surfaces: ["Kanapé, fotel", "Szőnyeg", "Autókárpit"],
    steps: [
      {
        title: "Itasd fel a felesleget",
        text: "Tiszta ronggyal vagy papírtörlővel nyomkodd fel a kifolyt kávét, mielőtt beszívódik. Haladj a folt széléről a közepe felé.",
      },
      {
        title: "Készíts enyhe tisztítóoldatot",
        text: "Keverj össze 2 dl langyos vizet egy kevés mosogatószerrel és egy evőkanál ételecettel. Az ecet segít a cserzőanyag oldásában.",
      },
      {
        title: "Pötyögtesd át a foltot",
        text: "A ronggyal, az oldatot felvíve, kívülről befelé dolgozd át a foltot. Ne áztasd el, csak nedvesítsd – többször ismételd, ha kell.",
      },
      {
        title: "Öblítsd és szárítsd",
        text: "Tiszta vizes ronggyal töröld le a tisztítószer-maradékot, majd száraz törülközővel nyomkodd ki a nedvességet, és hagyd megszáradni.",
      },
    ],
    mistakes: [
      "Hagyod beszáradni – a cserzőanyag órák alatt rögzül.",
      "Túl sok vizet használsz, ami vízkarikát hagy a kárpiton.",
      "Színes vagy klóros tisztítót használsz kényes huzaton, ami kifakít.",
    ],
    proNote:
      "A régi, beivódott vagy tejeskávé okozta szagos foltoknál a házi módszer gyakran csak halványít. A helyszíni gépi mélytisztítással a maradék elszíneződést és a szagot is kivonom a szövetből.",
    relatedServiceSlug: "ulogarnitura-kanape-tisztitas",
  },
  {
    slug: "verfolt",
    name: "Vérfolt",
    eyebrow: "Vérfolt",
    intro:
      "A vér fehérjetartalma miatt a meleg víz hatására megalvad és véglegesen megköt a szövetben – ezért a vérfolt kezelésének első szabálya, hogy mindig hideg vízzel dolgozz. Frissen a legtöbb vérfolt nyom nélkül eltűnik, a beszáradt barnás folt viszont türelmet igényel.",
    difficulty: "Közepes",
    urgency: "Csak hideg vízzel, minél hamarabb",
    surfaces: ["Matrac", "Kanapé", "Szőnyeg"],
    steps: [
      {
        title: "Itasd fel hideg vizes ronggyal",
        text: "Hideg vízbe mártott tiszta ronggyal nyomkodd, itasd a foltot – soha ne meleggel. Cseréld a rongyot, ahogy felveszi a vért.",
      },
      {
        title: "Próbáld sós vízzel vagy hidrogén-peroxiddal",
        text: "Makacs foltra hideg sós víz, világos huzaton pedig 3%-os hidrogén-peroxid segít. Előbb mindig próbáld ki egy rejtett részen, hogy nem fakít-e.",
      },
      {
        title: "Pötyögtetve dolgozd át",
        text: "Az oldatot ronggyal felvíve, kívülről befelé haladva itasd át a foltot. Ne dörzsöld, csak nyomkodd, hogy ne terjedjen szét.",
      },
      {
        title: "Öblítsd hideggel és szárítsd",
        text: "Tiszta, hideg vizes ronggyal töröld át, majd száraz törülközővel itasd ki a nedvességet, és hagyd levegőn megszáradni.",
      },
    ],
    mistakes: [
      "Meleg vagy forró vizet használsz – ettől a vér véglegesen megköt.",
      "Dörzsölöd a foltot, amitől nagyobb felületre kenődik.",
      "Próba nélkül használsz peroxidot színes szöveten, ami kifakítja.",
    ],
    proNote:
      "Matracon vagy világos kárpiton a beszáradt vérfolt és a hozzá tapadó szag eltávolítása szaktudást igényel. A helyszíni mélytisztítással és fertőtlenítéssel higiénikussá teszem a felületet – különösen fontos ez az egészséges alváshoz.",
    relatedServiceSlug: "matractisztitas",
  },
  {
    slug: "vizeletfolt",
    name: "Vizeletfolt",
    eyebrow: "Vizelet- és szagfolt",
    intro:
      "A vizeletfolt nem csak látható nyomot, hanem beivódott, ammóniás szagot is hagy – legyen szó kisgyermekről, idős hozzátartozóról vagy háziállatról. A felszíni tisztítás itt kevés: ha a szagért felelős sók a kárpit vagy matrac mélyén maradnak, a bűz nedves időben újra és újra visszatér.",
    difficulty: "Nehéz",
    urgency: "A szag miatt mélytisztítás kell",
    surfaces: ["Matrac", "Kanapé", "Szőnyeg", "Autókárpit"],
    steps: [
      {
        title: "Itasd ki a nedvességet",
        text: "Friss folt esetén száraz törülközővel nyomkodd ki a lehető legtöbb vizeletet, mielőtt mélyebbre szívódik.",
      },
      {
        title: "Kezeld ecetes vízzel",
        text: "Fele-fele arányú langyos víz és ételecet oldatával itasd át a foltot. Az ecet semlegesíti a vizelet lúgos sóit és tompítja a szagot.",
      },
      {
        title: "Szórj rá szódabikarbónát",
        text: "Száradás közben hintsd be bőven szódabikarbónával, és hagyd néhány órát (akár egy éjszakát) hatni – magába szívja a szagot és a maradék nedvességet. Utána porszívózd fel.",
      },
      {
        title: "Szárítsd át alaposan",
        text: "Gondoskodj jó szellőzésről, hogy a felület teljesen kiszáradjon. A bent maradt nedvesség penészt és visszatérő szagot okoz.",
      },
    ],
    mistakes: [
      "Csak a felszínt tisztítod – a szagért felelős sók mélyen maradnak.",
      "Ammóniás tisztítót használsz, ami kutyánál épp odacsalogat a vizeléshez.",
      "Nem szárítod ki rendesen, így penész és visszatérő bűz alakul ki.",
    ],
    proNote:
      "A beivódott vizeletfolt és -szag a leggyakoribb ok, amiért szakembert hívnak. A helyszíni gépi mélytisztítással a szennyeződést és a szagsókat a szövet mélyéről vonom ki, fertőtlenítéssel – matracon, kanapén és autóban egyaránt.",
    relatedServiceSlug: "matractisztitas",
  },
  {
    slug: "zsirfolt",
    name: "Zsír- és ételfolt",
    eyebrow: "Zsír- és ételfolt",
    intro:
      "A kanapén elköltött vacsora, a kicsöppent olaj vagy a zsíros ujjnyom sötét, fénylő foltot hagy, ami vonzza a port és idővel egyre láthatóbb lesz. A zsír vízzel nem oldódik, ezért itt a zsírbontó és a nedvszívó por a két legjobb fegyver.",
    difficulty: "Közepes",
    urgency: "Minél előbb, mielőtt port köt",
    surfaces: ["Kanapé, étkezőszék", "Autókárpit", "Szőnyeg"],
    steps: [
      {
        title: "Szórd be nedvszívó porral",
        text: "Friss zsírfoltra bőven hints szódabikarbónát, kukoricakeményítőt vagy babahintőport. Hagyd 15–30 percig állni, hogy magába szívja a zsírt, majd porszívózd fel.",
      },
      {
        title: "Vidd fel a zsírbontót",
        text: "Néhány csepp mosogatószert (ez célzottan zsírbontó) keverj langyos vízbe, és a habjával, ronggyal dolgozd át a foltot.",
      },
      {
        title: "Pötyögtetve oldd ki",
        text: "Kívülről befelé haladva itasd át a foltot, közben gyakran öblítsd ki a rongyot. Ismételd, amíg a zsírfény eltűnik.",
      },
      {
        title: "Öblítsd és szárítsd",
        text: "Tiszta vizes ronggyal töröld le a szappanmaradékot, majd száraz törülközővel itasd ki a nedvességet, és hagyd megszáradni.",
      },
    ],
    mistakes: [
      "Csak vízzel próbálod – a zsír nem oldódik vízben.",
      "Dörzsölöd, amitől szélesebb felületen oszlik el a zsír.",
      "Forró levegővel szárítod, ami megköti a maradék zsírt a szálban.",
    ],
    proNote:
      "A nagyobb, régi vagy mélyen beivódott zsír- és ételfoltoknál a házi tisztítás után gyakran marad fénylő nyom. A gépi mélytisztítás a zsírt a szövet mélyéről oldja és vonja ki, nyommentesen.",
    relatedServiceSlug: "ulogarnitura-kanape-tisztitas",
  },
  {
    slug: "tintafolt",
    name: "Tintafolt",
    eyebrow: "Toll- és tintafolt",
    intro:
      "A golyóstoll vagy filctoll nyoma az egyik legmakacsabb folt: a tinta gyorsan beszívódik és könnyen szétkenődik. A kulcs a türelem és az, hogy a tintát feloldd, ne pedig szétdörzsöld a kárpiton.",
    difficulty: "Nehéz",
    urgency: "Ne dörzsöld, mert szétkenődik",
    surfaces: ["Kanapé, fotel", "Autókárpit", "Étkezőszék"],
    steps: [
      {
        title: "Tesztelj rejtett helyen",
        text: "A tintaoldó szerek (alkohol) fakíthatnak, ezért előbb mindig próbáld ki egy nem látható részen.",
      },
      {
        title: "Vidd fel az alkoholt pötyögtetve",
        text: "Tiszta ruhára vagy vattára tölts izopropil-alkoholt vagy színtelen alkoholos kézfertőtlenítőt, és nyomkodd a foltra. A tinta átmegy a rongyra.",
      },
      {
        title: "Cseréld gyakran a ruhát",
        text: "Minden nyomkodásnál tiszta felülettel dolgozz, hogy a feloldott tintát felvedd, ne pedig visszakend a szövetbe.",
      },
      {
        title: "Tisztítsd és szárítsd",
        text: "A végén enyhe szappanos vízzel töröld át, majd tiszta vízzel öblítsd, és száraz ronggyal itasd ki a nedvességet.",
      },
    ],
    mistakes: [
      "Dörzsölöd a foltot, amitől a tinta nagyobb felületre kenődik.",
      "Próba nélkül használsz alkoholt, ami kifakítja a színes huzatot.",
      "Túl sok folyadékot viszel fel, amitől a tinta szétfolyik.",
    ],
    proNote:
      "A tinta- és tollfolt az egyik legnehezebben eltávolítható szennyeződés. Ha a házi próbálkozás nem hoz eredményt, vagy félsz a huzat kifakításától, a célzott, helyszíni folttisztítás biztonságosabb megoldás.",
    relatedServiceSlug: "fotel-szek-tisztitas",
  },
  {
    slug: "ragogumi",
    name: "Rágógumi",
    eyebrow: "Rágógumi és viasz",
    intro:
      "A kárpitba taposott rágógumi (vagy a lecsöppent gyertyaviasz) elsőre reménytelennek tűnik, pedig egy egyszerű konyhai trükkel a legtöbbször maradéktalanul eltávolítható: a hideg megfagyasztja és törékennyé teszi, így leválik a szálakról.",
    difficulty: "Könnyű",
    urgency: "Ráér – a hideg a barátod",
    surfaces: ["Kanapé", "Szőnyeg", "Autókárpit"],
    steps: [
      {
        title: "Fagyaszd meg jéggel",
        text: "Tegyél néhány jégkockát zacskóba, és nyomd a rágógumira 10–15 percre, amíg keményre fagy.",
      },
      {
        title: "Feszítsd le óvatosan",
        text: "Tompa eszközzel (pl. kanál vagy műanyag kártya élével) pattintsd, feszítsd le a megfagyott gumit a szövetről, óvatosan, hogy ne tépd a szálakat.",
      },
      {
        title: "Oldd a maradékot",
        text: "A visszamaradt ragacsra cseppents kevés étolajat vagy mogyoróvajat, vagy használj egy kevés izopropil-alkoholt, és pötyögtetve oldd fel.",
      },
      {
        title: "Tisztítsd ki a foltot",
        text: "Enyhe szappanos vízzel töröld át az olajos vagy ragacsos maradékot, öblítsd tiszta vízzel, és hagyd megszáradni.",
      },
    ],
    mistakes: [
      "Melegen próbálod lehúzni – csak mélyebbre keni a szálak közé.",
      "Éles késsel kapargatod, amivel elvágod a kárpit szálait.",
      "Az olajos maradékot nem tisztítod ki, így új, zsíros folt marad.",
    ],
    proNote:
      "Ha a rágógumi mélyen a szálak közé taposódott, vagy az olajos maradék foltot hagyott, a helyszíni gépi tisztítással a szövet sérülése nélkül teszem újra tisztává a felületet.",
    relatedServiceSlug: "ulogarnitura-kanape-tisztitas",
  },
  {
    slug: "kisallat-szag",
    name: "Kisállat szaga és szőre",
    eyebrow: "Állatszag és -szőr",
    intro:
      "A kutya és a macska kedvenc helye gyakran a kanapé – ahol idővel beivódik a jellegzetes állatszag, és a szőr mélyen a szálak közé fúródik. A felszíni szellőztetés és porszívózás csak tüneti kezelés; a szagért felelős zsírok és fehérjék a kárpit mélyén maradnak.",
    difficulty: "Nehéz",
    urgency: "A szag mélytisztítás nélkül visszatér",
    surfaces: ["Kanapé, ülőgarnitúra", "Autókárpit", "Szőnyeg"],
    steps: [
      {
        title: "Távolítsd el a szőrt",
        text: "Gumikesztyűvel vagy nedves szivaccsal húzd össze a befúródott szőrt, majd alaposan porszívózd le a felületet, a réseket is.",
      },
      {
        title: "Semlegesítsd ecetes vízzel",
        text: "Fele-fele langyos víz és ételecet oldatával finoman itasd át a kárpitot – az ecet semlegesíti a szagot, és száradás után az ecetszag is elillan.",
      },
      {
        title: "Szórj rá szódabikarbónát",
        text: "Hintsd be bőven szódabikarbónával, hagyd néhány órát hatni, hogy magába szívja a szagot, majd porszívózd fel alaposan.",
      },
      {
        title: "Szellőztess és ismételd",
        text: "Gondoskodj friss levegőről. Erős, régi szagnál a házi módszert többször is meg kell ismételni.",
      },
    ],
    mistakes: [
      "Csak illatosítóval feded el a szagot a tisztítás helyett.",
      "Ammóniás tisztítót használsz, ami a macskát épp odacsalogatja.",
      "Csak a felszínt kezeled, így a szag nedves időben visszatér.",
    ],
    proNote:
      "A beivódott állatszag a házi módszerekkel a legnehezebben győzhető le, mert a forrása a szövet mélyén van. A helyszíni gépi mélytisztítás és szagtalanítás a szőrt, a szennyeződést és a szagot is kivonja – tartós eredménnyel.",
    relatedServiceSlug: "ulogarnitura-kanape-tisztitas",
  },
];

// Segédfüggvények a programozott oldalakhoz
export const getStain = (slug: string) => stains.find((s) => s.slug === slug);
