"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  label: string;
};

export default function BeforeAfter({ before, after, label }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(50);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [setFromClientX]);

  return (
    <div className="overflow-hidden rounded-3xl border border-brand-100 bg-surface shadow-soft">
      <div
        ref={containerRef}
        className="relative h-56 cursor-ew-resize select-none touch-none"
        onPointerDown={(e) => {
          draggingRef.current = true;
          setFromClientX(e.clientX);
        }}
      >
        {/* Utána (alsó réteg) */}
        <Image
          src={after}
          alt={`${label} – utána`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          draggable={false}
        />
        <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-white/25 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          Utána
        </span>

        {/* Előtte (felső réteg, levágva) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${label} – előtte`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            draggable={false}
          />
          <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Előtte
          </span>
        </div>

        {/* Elválasztó + fogantyú */}
        <div
          className="absolute inset-y-0 z-20 w-1 -translate-x-1/2 bg-surface shadow-[0_0_0_2px_rgba(255,255,255,0.5)]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-surface text-brand-600 shadow-lift">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
            </svg>
          </div>
        </div>

        {/* Akadálymentes csúszka */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          aria-label={`${label} – előtte-utána csúszka`}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-0 bottom-0 z-30 w-full cursor-ew-resize opacity-0"
        />
      </div>
      <div className="px-5 py-4 text-center">
        <p className="font-display font-bold text-ink">{label}</p>
      </div>
    </div>
  );
}
