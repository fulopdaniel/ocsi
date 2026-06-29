import Link from "next/link";
import { site } from "@/lib/site";

export type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${site.url}${c.href}` } : {}),
    })),
  };

  return (
    <nav
      aria-label="Morzsamenü"
      className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.name} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className="transition-colors hover:text-brand-700">
                  {c.name}
                </Link>
              ) : (
                <span className={last ? "font-semibold text-ink" : ""} aria-current={last ? "page" : undefined}>
                  {c.name}
                </span>
              )}
              {!last && <span className="text-brand-300">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
