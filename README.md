# Asztalos Tibor – Kárpittisztítás Orosháza

Kárpit-, szőnyeg- és matractisztító vállalkozás bemutatkozó weboldala.
Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Futtatás

```bash
npm install      # függőségek telepítése
npm run dev      # fejlesztői szerver → http://localhost:3000
npm run build    # éles build
npm run start    # éles szerver indítása build után
```

## ⚙️ Mit érdemes testreszabni? (`lib/site.ts`)

Szinte minden szöveges adat **egy helyen**, a `lib/site.ts` fájlban van:

- **E-mail cím** – jelenleg placeholder (`tibor.karpittisztitas@gmail.com`).
  Cseréld le a valódira! Az árajánlatkérő űrlap erre a címre nyit levelet.
- **Pontos cím** (`street`) – töltsd ki a jobb helyi (Google) SEO érdekében.
- **Domain** (`url`) – cseréld le az éles domainre (sitemap, canonical, JSON-LD).
- **Szolgáltatási területek**, **árak/szövegek**, **vélemények**, **GYIK** – mind itt.

## 🖼️ Képek

- A hero jelenleg a `public/profilkep.jpg` képet használja (személyes fotó).
  Cseréld le egy szakmai/„tiszta kanapé" képre, ha lesz – elég felülírni a fájlt.
- A galéria szekció (`components/Gallery.tsx`) jelenleg **placeholder** „előtte–utána"
  csempéket mutat. Tedd a valódi munkafotóidat a `public/` mappába, és cseréld le
  a placeholdereket `<Image>` komponensekre.

## 🔍 SEO – ami már beépült

- Magyar nyelvű `<html lang="hu">`, kulcsszóoptimalizált cím + leírás
- OpenGraph + Twitter kártyák
- **LocalBusiness** strukturált adat (JSON-LD) – cím, telefon, nyitvatartás, terület, értékelés
- **FAQPage** JSON-LD a GYIK-hez (rich snippet esély a Google-ben)
- `sitemap.xml` és `robots.txt` automatikusan generálva
- Szemantikus HTML, helyes címsorhierarchia, képek alt-szöveggel

### Élesítés után ajánlott

1. Regisztráld az oldalt a [Google Search Console](https://search.google.com/search-console)-ban.
2. Hozz létre egy **Google Cégprofilt** (Google Business Profile) Orosházára – ez a
   helyi keresésben a legnagyobb hatású lépés.
3. Gyűjts valódi Google-értékeléseket az ügyfelektől.
