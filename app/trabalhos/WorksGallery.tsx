"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import type { Work } from "@/lib/works-data";

export default function WorksGallery({ works }: { works: Work[] }) {
  const [active, setActive] = useState<Work | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5">
        {works.map((w) => (
          <button
            key={w.id}
            type="button"
            onClick={() => setActive(w)}
            aria-label={`Ampliar trabalho ${w.id}`}
            className="group relative cursor-pointer aspect-4/5 overflow-hidden border-2 border-white/10 bg-black text-left transition-all duration-500 hover:border-[#ff22b5] hover:shadow-[0_0_20px_rgba(255,34,181,0.55),0_0_42px_rgba(255,34,181,0.25)]"
          >
            <Image
              src={w.image}
              alt={`Trabalho ${w.id} - Toxic Ink`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              className="object-cover grayscale-12 brightness-[0.92] transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="pointer-events-none absolute inset-1.5 border border-transparent transition-all duration-500 group-hover:border-[#ff4cc4] group-hover:shadow-[inset_0_0_14px_rgba(255,34,181,0.35),inset_0_0_28px_rgba(255,34,181,0.12)]" />

            <div className="absolute bottom-3 left-3 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/90">
                Trabalho {w.id}
              </span>
            </div>

            <span className="absolute right-3 top-3 h-1.5 w-1.5 scale-0 bg-[#ff4cc4] shadow-[0_0_8px_#ff4cc4,0_0_18px_#ff26b8,0_0_30px_rgba(255,38,184,0.9)] transition-transform duration-500 group-hover:scale-100" />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-10"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#ff26b8] hover:text-[#ff26b8] md:right-8 md:top-8"
          >
            <FiX size={20} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-4/5 w-full max-w-lg border-2 border-[#ff26b8] shadow-[0_0_25px_rgba(255,38,184,0.7),0_0_55px_rgba(255,38,184,0.35)] md:max-w-xl"
          >
            <Image
              src={active.image}
              alt={`Trabalho ${active.id} - Toxic Ink`}
              fill
              sizes="(max-width: 768px) 90vw, 600px"
              className="bg-black object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}