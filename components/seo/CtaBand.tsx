import { telLink, viberLink, site } from "@/lib/site";
import { PhoneIcon, ViberIcon } from "@/components/icons";

export default function CtaBand({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="overflow-hidden rounded-3xl bg-brand-900 px-6 py-10 text-white shadow-lift sm:px-12 sm:py-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-balance font-display text-2xl font-extrabold sm:text-3xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-pretty text-brand-100/90">{subtitle}</p>
            )}
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-brand-900 shadow-soft transition-transform hover:scale-105"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
            <a
              href={viberLink}
              className="inline-flex items-center gap-2 rounded-full bg-[#7360f2] px-6 py-3.5 font-bold text-white shadow-soft transition-transform hover:scale-105"
            >
              <ViberIcon className="h-5 w-5" />
              Viber
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
