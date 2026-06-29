import {
  site,
  telLink,
  mailLink,
  viberLink,
  services,
} from "@/lib/site";
import { areas } from "@/lib/areas";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, MailIcon, MapPinIcon, ViberIcon } from "./icons";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-brand-100 bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Márka */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt={`${site.name} logó`}
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <span className="font-display text-lg font-extrabold text-ink">
                {site.shortName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Professzionális kárpit-, szőnyeg- és matractisztítás Orosházán és
              Békés vármegyében. Helyszíni munkavégzés, kíméletes szerek,
              elégedettségi garancia.
            </p>
            <Link
              href="/folteltavolitas"
              className="mt-4 inline-block text-sm font-bold text-brand-700 transition-colors hover:text-brand-800"
            >
              Folteltávolítási útmutatók →
            </Link>
          </div>

          {/* Szolgáltatások */}
          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-ink">
              Szolgáltatások
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/szolgaltatasok/${s.slug}`}
                    className="transition-colors hover:text-brand-700"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Terület */}
          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-ink">
              Területünk
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-ink-soft">
              {areas.slice(0, 10).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/teruletek/${a.slug}`}
                    className="transition-colors hover:text-brand-700"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kapcsolat */}
          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-ink">
              Kapcsolat
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={telLink} className="flex items-center gap-2.5 font-bold text-ink transition-colors hover:text-brand-700">
                  <PhoneIcon className="h-4 w-4 text-brand-600" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={viberLink} className="flex items-center gap-2.5 text-ink-soft transition-colors hover:text-brand-700">
                  <ViberIcon className="h-4 w-4 text-[#7360f2]" />
                  Viber üzenet
                </a>
              </li>
              <li>
                <a href={mailLink} className="flex items-center gap-2.5 text-ink-soft transition-colors hover:text-brand-700">
                  <MailIcon className="h-4 w-4 text-brand-600" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-ink-soft">
                <MapPinIcon className="h-4 w-4 text-brand-600" />
                {site.city}, {site.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-100 pt-6 text-sm text-ink-soft sm:flex-row">
          <p>
            © {year} {site.name}. Minden jog fenntartva.
          </p>
          <p>Kárpittisztítás Orosháza • {site.hours}</p>
        </div>
      </div>
    </footer>
  );
}
