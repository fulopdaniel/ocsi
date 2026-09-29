import { telLink, site } from "@/lib/site";
import Reveal from "./Reveal";
import { WalletIcon, PhoneIcon } from "./icons";

type PriceItem = {
  label: string;
  detail?: string;
  price: string;
  unit?: string;
};

const priceItems: PriceItem[] = [
  { label: "Szőnyeg", price: "2 000 Ft", unit: "/ m²" },
  { label: "1 személyes ágy", detail: "90×200", price: "10 000 Ft" },
  { label: "2 személyes ágy", detail: "180×200", price: "15 000 Ft" },
  { label: "Kanapé, 2 személyes", price: "15 000 Ft" },
  { label: "L alakú kanapé", detail: "3 személyes", price: "20 000 Ft" },
  { label: "U alakú kanapé", detail: "nagy", price: "25 000 Ft" },
  { label: "1 személyes matrac", price: "10 000 Ft" },
  { label: "2 személyes matrac", price: "15 000 Ft" },
  { label: "Étkezőszék", price: "2 000 Ft", unit: "/ darab" },
];

export default function Pricing() {
  return (
    <section id="araink" className="scroll-mt-24 bg-brand-50/40 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Áraink
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Tájékoztató árlista
          </h2>
          <p className="mt-4 text-pretty text-lg text-ink-soft">
            Az alábbi árak átlagárak, tájékoztató jellegűek, és a bútor pontos
            méretétől, típusától és állapotától függően változhatnak. Pontos árat
            ingyenes felmérés után adok.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-12 max-w-2xl">
          <ul className="divide-y divide-brand-100 overflow-hidden rounded-3xl border border-brand-100 bg-surface shadow-soft">
            {priceItems.map((item) => (
              <li
                key={item.label + (item.detail ?? "")}
                className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-brand-50/50 sm:px-7"
              >
                <span className="flex items-center gap-3">
                  <WalletIcon className="h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-[15px] font-semibold text-ink sm:text-base">
                    {item.label}
                    {item.detail && (
                      <span className="ml-1.5 text-sm font-normal text-ink-soft">
                        ({item.detail})
                      </span>
                    )}
                  </span>
                </span>
                <span className="shrink-0 whitespace-nowrap text-right">
                  <span className="font-display text-lg font-extrabold text-brand-700">
                    {item.price}
                  </span>
                  {item.unit && (
                    <span className="ml-1 text-sm font-medium text-ink-soft">
                      {item.unit}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-ink-soft">
              Nem találod a bútorodat a listában? Hívj, és személyre szabott
              árajánlatot adok.
            </p>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:bg-brand-700 hover:shadow-lift"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
