import Reveal from "./Reveal";
import { telLink, site } from "@/lib/site";
import {
  HomeIcon,
  LeafIcon,
  WalletIcon,
  ShieldIcon,
  ClockIcon,
  SparkleIcon,
  PhoneIcon,
} from "./icons";

const reasons = [
  {
    icon: HomeIcon,
    title: "Helyszíni tisztítás",
    text: "Nem kell cipekedned: a nehéz bútorokat és matracokat nálad otthon tisztítom meg, profi géppel.",
  },
  {
    icon: LeafIcon,
    title: "Kíméletes szerek",
    text: "Bevizsgált, a textilt és a családot is kímélő tisztítószerekkel dolgozom — gyerek- és állatbarát.",
  },
  {
    icon: WalletIcon,
    title: "Ingyenes árajánlat",
    text: "Kötelezettségmentes, átlátható ár előre. Nincs rejtett költség, nincs meglepetés a végén.",
  },
  {
    icon: ShieldIcon,
    title: "Elégedettségi garancia",
    text: "Ha nem vagy elégedett az eredménnyel, az érintett részt díjmentesen újratisztítom.",
  },
  {
    icon: ClockIcon,
    title: "Rugalmas időpont",
    text: "Igazodom a beosztásodhoz — hétvégén is elérhető vagyok. Gyors, megbízható kiszállás.",
  },
  {
    icon: SparkleIcon,
    title: "Látványos eredmény",
    text: "Beivódott foltok, por és szag helyett friss, higiénikus és újszerű bútorok.",
  },
];

export default function WhyUs() {
  return (
    <section id="miert-minket" className="scroll-mt-24 bg-brand-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-300">
              Miért engem válassz?
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold sm:text-4xl">
              Megbízható helyi szakember, akire számíthatsz
            </h2>
            <p className="mt-4 text-pretty text-lg text-brand-100/90">
              Orosházi vállalkozóként a nevemmel és a munkám minőségével állok ki
              minden megrendelésért. A cél, hogy elégedetten ajánlj tovább a
              családodnak és az ismerőseidnek.
            </p>
            <a
              href={telLink}
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-amber-accent px-7 py-4 text-base font-bold text-ink shadow-lift transition-all hover:-translate-y-0.5 hover:bg-amber-deep hover:text-white"
            >
              <PhoneIcon className="h-5 w-5" />
              Hívj most: {site.phoneDisplay}
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 70}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/30 text-brand-200">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-100/80">
                  {r.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
