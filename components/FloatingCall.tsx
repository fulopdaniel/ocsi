import { telLink, site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function FloatingCall() {
  return (
    <a
      href={telLink}
      aria-label={`Hívás: ${site.phoneDisplay}`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-brand-600 px-5 py-3.5 font-bold text-white shadow-lift transition-transform hover:scale-105 sm:hidden"
    >
      <span className="relative flex h-5 w-5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
        <PhoneIcon className="relative h-5 w-5" />
      </span>
      Hívás
    </a>
  );
}
