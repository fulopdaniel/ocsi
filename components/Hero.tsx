import Image from "next/image";
import { site, telLink, viberLink } from "@/lib/site";
import {
  PhoneIcon,
  ViberIcon,
  StarIcon,
  CheckIcon,
  ShieldIcon,
  HomeIcon,
  LeafIcon,
} from "./icons";

const badges = [
  { icon: HomeIcon, label: "Helyszíni tisztítás" },
  { icon: ShieldIcon, label: "Elégedettségi garancia" },
  { icon: LeafIcon, label: "Kíméletes szerek" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-mesh" />
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Bal oldal – üzenet */}
        <div>
          <p
            className="animate-in inline-flex items-center gap-2 rounded-full border border-brand-200 bg-surface/70 px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-soft"
            style={{ animationDelay: "0ms" }}
          >
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-amber-accent" />
              ))}
            </span>
            Elégedett orosházi ügyfelek
          </p>

          <h1
            className="animate-in mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem]"
            style={{ animationDelay: "80ms" }}
          >
            Kárpittisztítás{" "}
            <span className="relative whitespace-nowrap text-brand-600">
              Orosházán
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-brand-300"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9C40 3 160 3 198 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className="animate-in mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: "160ms" }}
          >
            Kanapé, ülőgarnitúra, szőnyeg és matrac{" "}
            <strong className="font-bold text-ink">mélytisztítása helyszínen</strong>{" "}
            — kíméletes, mégis alapos módszerrel. Frissítse fel otthonát, és aludjon
            tisztább környezetben.
          </p>

          <div
            className="animate-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={telLink}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-600 px-7 py-4 text-base font-bold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
            <a
              href="#kapcsolat"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-300 bg-surface px-7 py-4 text-base font-bold text-brand-700 transition-all hover:border-brand-500 hover:bg-brand-50"
            >
              Ingyenes árajánlat
            </a>
          </div>

          <a
            href={viberLink}
            className="animate-in mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-brand-700"
            style={{ animationDelay: "300ms" }}
          >
            <ViberIcon className="h-5 w-5 text-[#7360f2]" />
            Írjon Viberen is — gyors válasz
          </a>

          <ul
            className="animate-in mt-9 flex flex-wrap gap-x-6 gap-y-3"
            style={{ animationDelay: "360ms" }}
          >
            {badges.map((b) => (
              <li key={b.label} className="flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-100 text-brand-700">
                  <b.icon className="h-4 w-4" />
                </span>
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Jobb oldal – tulajdonos fotó kártya */}
        <div
          className="animate-in relative mx-auto w-full max-w-md lg:max-w-none"
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-300/50 to-amber-accent/20 blur-xl" />
            <div className="overflow-hidden rounded-[1.75rem] border-4 border-surface bg-surface shadow-lift">
              <Image
                src="/profilkep.jpg"
                alt="Asztalos Tibor – kárpittisztító szakember, Orosháza"
                width={720}
                height={760}
                priority
                className="h-[380px] w-full object-cover object-top sm:h-[460px]"
              />
            </div>

            {/* Lebegő kártya: tulajdonos */}
            <div className="float-slow absolute -bottom-5 -left-4 max-w-[15rem] rounded-2xl border border-brand-100 bg-surface/95 p-4 shadow-lift backdrop-blur">
              <p className="font-display text-base font-extrabold text-ink">
                Asztalos Tibor
              </p>
              <p className="text-sm text-ink-soft">
                A tisztítást személyesen végzem — nálad otthon.
              </p>
            </div>

            {/* Lebegő kártya: garancia */}
            <div className="absolute -right-3 top-6 flex items-center gap-2.5 rounded-2xl border border-brand-100 bg-surface/95 px-4 py-3 shadow-lift backdrop-blur">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">
                <CheckIcon className="h-5 w-5" />
              </span>
              <span className="text-sm font-bold leading-tight text-ink">
                Tiszta eredmény
                <span className="block text-xs font-medium text-ink-soft">
                  vagy újratisztítás
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
