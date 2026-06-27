import { stats } from "@/lib/site";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-2 max-w-6xl px-5 sm:px-8">
      <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-brand-100 bg-brand-100 shadow-soft md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface px-5 py-7 text-center">
            <div className="font-display text-3xl font-extrabold text-brand-600 sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm font-semibold text-ink-soft">
              {s.label}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
