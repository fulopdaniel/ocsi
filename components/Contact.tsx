"use client";

import { useState, type FormEvent } from "react";
import { site, telLink, viberLink, mailLink, services } from "@/lib/site";
import Reveal from "./Reveal";
import {
  PhoneIcon,
  ViberIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  CheckIcon,
} from "./icons";

const contactCards = [
  {
    icon: PhoneIcon,
    label: "Telefon",
    value: site.phoneDisplay,
    href: telLink,
    accent: "bg-brand-600 text-white",
  },
  {
    icon: ViberIcon,
    label: "Viber",
    value: "Üzenj vagy hívj",
    href: viberLink,
    accent: "bg-[#7360f2] text-white",
  },
  {
    icon: MailIcon,
    label: "E-mail",
    value: site.email,
    href: mailLink,
    accent: "bg-amber-accent text-ink",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = `Árajánlatkérés – ${service || "kárpittisztítás"}`;
    const body = `Név: ${name}\nTelefon: ${phone}\nSzolgáltatás: ${service}\n\nÜzenet:\n${message}`;
    const href = `${mailLink}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  return (
    <section id="kapcsolat" className="scroll-mt-24 bg-brand-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Bal: elérhetőségek */}
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-300">
              Kapcsolat
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold sm:text-4xl">
              Kérj ingyenes árajánlatot
            </h2>
            <p className="mt-4 text-pretty text-lg text-brand-100/90">
              Hívj, írj Viberen, vagy töltsd ki az űrlapot — a leggyorsabb a
              telefonhívás. Küldhetsz fotót is a bútorról a pontos árért.
            </p>

            <div className="mt-8 space-y-3">
              {contactCards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <span className={`grid h-12 w-12 place-items-center rounded-xl ${c.accent}`}>
                    <c.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm text-brand-200">{c.label}</span>
                    <span className="block font-bold">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-sm text-brand-100/80">
              <p className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-brand-300" />
                {site.city}, {site.region} — és környéke
              </p>
              <p className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-brand-300" />
                {site.hours}
              </p>
            </div>
          </Reveal>

          {/* Jobb: űrlap */}
          <Reveal delay={120}>
            <div className="rounded-3xl bg-surface p-6 text-ink shadow-lift sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-brand-600">
                    <CheckIcon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-ink">
                    Köszönöm!
                  </h3>
                  <p className="mt-2 max-w-sm text-ink-soft">
                    Megnyílt az e-mail kliensed az üzenettel. Ha gyorsabb választ
                    szeretnél, hívj bátran a{" "}
                    <a href={telLink} className="font-bold text-brand-700">
                      {site.phoneDisplay}
                    </a>{" "}
                    számon!
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-bold text-brand-700 hover:underline"
                  >
                    Új üzenet írása
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Neved" name="name" placeholder="Pl. Kovács Anna" required />
                    <Field
                      label="Telefonszám"
                      name="phone"
                      type="tel"
                      placeholder="Pl. +36 30 123 4567"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-ink">
                      Milyen szolgáltatás érdekel?
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="w-full rounded-xl border border-brand-200 bg-cream/40 px-4 py-3 text-ink outline-none transition-colors focus:border-brand-500 focus:bg-surface"
                    >
                      <option value="" disabled>
                        Válassz…
                      </option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Egyéb / több szolgáltatás">
                        Egyéb / több szolgáltatás
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-ink">
                      Üzenet
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Írd le röviden, mit szeretnél tisztíttatni (pl. 3 személyes kanapé + 1 fotel)."
                      className="w-full resize-none rounded-xl border border-brand-200 bg-cream/40 px-4 py-3 text-ink outline-none transition-colors focus:border-brand-500 focus:bg-surface"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-base font-bold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-700"
                  >
                    Árajánlatot kérek
                  </button>
                  <p className="text-center text-xs text-ink-soft">
                    A „Küldés” gomb megnyitja az e-mail klienst az adataiddal. Vagy
                    egyszerűen{" "}
                    <a href={telLink} className="font-bold text-brand-700">
                      hívj telefonon
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-bold text-ink">
        {label} {required && <span className="text-amber-deep">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-brand-200 bg-cream/40 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-brand-500 focus:bg-surface"
      />
    </div>
  );
}
