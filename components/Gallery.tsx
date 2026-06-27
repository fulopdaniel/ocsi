import Reveal from "./Reveal";
import { services } from "@/lib/site";

// MEGJEGYZÉS: Cseréld le ezeket a placeholdereket valódi "előtte–utána"
// fotókra! Tedd a képeket a /public mappába, és használd az <Image> komponenst.

const items = [
  { label: services[0].title },
  { label: services[1].title },
  { label: services[2].title },
];

export default function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-24 bg-brand-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Előtte – Utána
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Látványos különbség
          </h2>
          <p className="mt-4 text-pretty text-lg text-ink-soft">
            A mélytisztítás eredménye magáért beszél. Nézd meg, milyen frissé
            válhat a kárpitod.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal
              key={it.label}
              delay={i * 100}
              className="overflow-hidden rounded-3xl border border-brand-100 bg-surface shadow-soft"
            >
              <div className="relative grid h-56 grid-cols-2">
                {/* Előtte */}
                <div className="relative flex items-end bg-gradient-to-br from-stone-400 to-stone-600 p-4">
                  <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Előtte
                  </span>
                </div>
                {/* Utána */}
                <div className="relative flex items-end bg-gradient-to-br from-brand-300 to-brand-600 p-4">
                  <span className="absolute right-3 top-3 rounded-full bg-white/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Utána
                  </span>
                </div>
                {/* Elválasztó */}
                <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-surface shadow-[0_0_0_2px_rgba(255,255,255,0.5)]" />
                <div className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-surface text-brand-600 shadow-lift">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
                  </svg>
                </div>
              </div>
              <div className="px-5 py-4 text-center">
                <p className="font-display font-bold text-ink">{it.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-soft">
          Szeretnél te is ilyen eredményt?{" "}
          <a href="#kapcsolat" className="font-bold text-brand-700 underline-offset-2 hover:underline">
            Kérj ingyenes árajánlatot
          </a>
          .
        </p>
      </div>
    </section>
  );
}
