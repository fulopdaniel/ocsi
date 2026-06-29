import { telLink, site } from "@/lib/site";
import { PhoneIcon, CheckIcon } from "@/components/icons";

export default function LocalHero({
  eyebrow,
  title,
  intro,
  badges = [],
}: {
  eyebrow: string;
  title: string;
  intro: string;
  badges?: string[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-8 pb-4 sm:px-8 sm:pt-10">
      <div className="max-w-3xl">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-balance font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
          {intro}
        </p>

        {badges.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {badges.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-semibold text-ink">
                <CheckIcon className="h-4 w-4 text-brand-500" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={telLink}
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-base font-bold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-700"
          >
            <PhoneIcon className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
          <a
            href="#kapcsolat"
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-surface px-7 py-4 text-base font-bold text-brand-800 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-300"
          >
            Ingyenes árajánlat
          </a>
        </div>
      </div>
    </section>
  );
}
