import Reveal from "./Reveal";
import { PhoneIcon, ClockIcon, SparkleIcon, CheckIcon } from "./icons";

const steps = [
  {
    icon: PhoneIcon,
    title: "1. Kapcsolatfelvétel",
    text: "Hívj fel, vagy küldj egy fotót a bútorról Viberen. Megbeszéljük az igényeidet.",
  },
  {
    icon: ClockIcon,
    title: "2. Ingyenes árajánlat",
    text: "Pontos, kötelezettségmentes árat adok, és egyeztetünk egy neked megfelelő időpontot.",
  },
  {
    icon: SparkleIcon,
    title: "3. Mélytisztítás helyszínen",
    text: "A megbeszélt időpontban kiszállok, és profi géppel alaposan kitisztítom a kárpitot.",
  },
  {
    icon: CheckIcon,
    title: "4. Tiszta, friss otthon",
    text: "Átveszed a ragyogóan tiszta bútort. Néhány óra száradás után újra használható.",
  },
];

export default function Process() {
  return (
    <section id="folyamat" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
          Hogyan dolgozom
        </span>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-ink sm:text-4xl">
          Egyszerű, 4 lépéses folyamat
        </h2>
        <p className="mt-4 text-pretty text-lg text-ink-soft">
          A kapcsolatfelvételtől a ragyogó eredményig — gyorsan és kényelmesen.
        </p>
      </Reveal>

      <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent md:block" />
        {steps.map((s, i) => (
          <Reveal
            key={s.title}
            as="li"
            delay={i * 100}
            className="relative flex flex-col items-center rounded-3xl border border-brand-100 bg-surface p-6 text-center shadow-soft"
          >
            <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-soft">
              <s.icon className="h-7 w-7" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
