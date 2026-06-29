import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export type LinkItem = { label: string; href: string };

export default function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: LinkItem[];
}) {
  if (links.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8">
      <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{title}</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-brand-100 bg-surface px-5 py-4 font-semibold text-ink shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-700 hover:shadow-lift"
            >
              {l.label}
              <ArrowIcon className="h-4 w-4 shrink-0 text-brand-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-600" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
