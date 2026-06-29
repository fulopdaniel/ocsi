import Reveal from "./Reveal";
import BeforeAfter from "./BeforeAfter";

const items = [
  {
    label: "Ülőgarnitúra & kanapétisztítás",
    before: "/before_kanape.png",
    after: "/after_kanape.jpeg",
  },
  {
    label: "Szőnyegtisztítás",
    before: "/before_szonyeg.png",
    after: "/after_szonyeg.jpeg",
  },
  {
    label: "Fotel- és széktisztítás",
    before: "/before_fotel.png",
    after: "/after_fotel.jpeg",
  },
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
            <Reveal key={it.label} delay={i * 100}>
              <BeforeAfter
                before={it.before}
                after={it.after}
                label={it.label}
              />
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
