import { processSteps, type Service } from "@/lib/site";
import { CheckIcon, WalletIcon } from "@/components/icons";

export default function ServiceDetails({ service }: { service: Service }) {
  return (
    <>
      {/* Tartalom + ár-tényezők */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
        <div className="rounded-3xl border border-brand-100 bg-surface p-7 shadow-soft">
          <h2 className="font-display text-2xl font-extrabold text-ink">
            Amit a szolgáltatás tartalmaz
          </h2>
          <ul className="mt-5 space-y-3">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-brand-100 bg-brand-50/50 p-7 shadow-soft">
          <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold text-ink">
            <WalletIcon className="h-6 w-6 text-brand-600" />
            Mitől függ az ár?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            Fix árlista helyett minden esetben ingyenes, pontos árajánlatot adok.
            Az ár az alábbiaktól függ:
          </p>
          <ul className="mt-4 space-y-3">
            {service.priceFactors.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Folyamat */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="text-balance font-display text-2xl font-extrabold text-ink sm:text-3xl">
          Így zajlik a tisztítás
        </h2>
        <ol className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-3xl border border-brand-100 bg-surface p-6 shadow-soft"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 font-display font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
