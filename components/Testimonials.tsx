import { testimonials } from "@/lib/site";
import Reveal from "./Reveal";
import { StarIcon } from "./icons";

export default function Testimonials() {
  return (
    <section id="velemenyek" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
          Vélemények
        </span>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-ink sm:text-4xl">
          Amit az ügyfeleim mondanak
        </h2>
        <div className="mt-4 flex items-center justify-center gap-2 text-ink-soft">
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-amber-accent" />
            ))}
          </span>
          <span className="font-semibold">5,0 átlagos értékelés</span>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 100}
            as="article"
            className="flex flex-col rounded-3xl border border-brand-100 bg-surface p-7 shadow-soft"
          >
            <span className="flex">
              {Array.from({ length: t.rating }).map((_, j) => (
                <StarIcon key={j} className="h-5 w-5 text-amber-accent" />
              ))}
            </span>
            <p className="mt-4 flex-1 text-pretty text-[15px] leading-relaxed text-ink">
              „{t.text}”
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-brand-100 pt-5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-100 font-display text-lg font-extrabold text-brand-700">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block font-bold text-ink">{t.name}</span>
                <span className="block text-sm text-ink-soft">{t.place}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
