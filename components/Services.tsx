import { services } from "@/lib/site";
import Reveal from "./Reveal";
import { SofaIcon, RugIcon, MattressIcon, CheckIcon, ArrowIcon } from "./icons";

const iconMap = {
  sofa: SofaIcon,
  rug: RugIcon,
  mattress: MattressIcon,
} as const;

export default function Services() {
  return (
    <section id="szolgaltatasok" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
          Szolgáltatások
        </span>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-ink sm:text-4xl">
          Amit ragyogóan tisztára varázsolok
        </h2>
        <p className="mt-4 text-pretty text-lg text-ink-soft">
          Minden megrendelés egyedi felmérés és ingyenes árajánlat alapján indul.
          A tisztítást a legtöbb esetben nálad otthon, a helyszínen végzem.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon];
          return (
            <Reveal
              key={s.slug}
              delay={i * 100}
              as="article"
              className="group flex flex-col rounded-3xl border border-brand-100 bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-extrabold text-ink">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                {s.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-brand-100 pt-5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kapcsolat"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition-colors hover:text-brand-600"
              >
                Árajánlatot kérek
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
