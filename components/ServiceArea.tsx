import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { MapPinIcon } from "./icons";

export default function ServiceArea() {
  return (
    <section id="terulet" className="scroll-mt-24 bg-brand-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="grid mx-auto h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-soft">
            <MapPinIcon className="h-7 w-7" />
          </span>
          <h2 className="mt-5 text-balance font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Hol érhetsz el? Orosháza és környéke
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-ink-soft">
            Bázisom {site.city}, ahonnan a környező településekre is kiszállok.
            Orosházán belül a kiszállás díjmentes. Nem találod a településed?
            Hívj, biztosan megoldjuk!
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-9 flex flex-wrap justify-center gap-2.5">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/teruletek/${area.slug}`}
              className="rounded-full border border-brand-200 bg-surface px-4 py-2 text-sm font-semibold text-brand-800 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700"
            >
              {area.name}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
