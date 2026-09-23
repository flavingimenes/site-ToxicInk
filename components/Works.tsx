"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import works from "@/lib/works";
import {
  TbArrowBigLeftFilled,
  TbArrowBigRightFilled,
  TbArrowBigRightLineFilled,
} from "react-icons/tb";

import paperBg from "@/images/textures/paperBg.jpg";
import Link from "next/link";

export default function Works() {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;

    const item = el.firstElementChild as HTMLElement;
    if (!item) return;

    const gap = 8;

    el.scrollBy({
      left: dir * (item.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="trabalhos"
      style={{ backgroundImage: `url(${paperBg.src})` }}
      className="relative bg-cover bg-center pb-20 pt-14 sm:pb-28 md:pb-40 md:pt-20"
    >
      <div className="relative mx-auto max-w-6xl px-4 text-black sm:px-5 md:px-6 xl:px-0">
        <p className="text-xs uppercase tracking-[0.12em]">alguns dos</p>

        <div className="mt-1">
          <h2 className="font-display inline-block text-3xl uppercase leading-none xs:text-4xl sm:text-5xl md:text-6xl">
            Meus Trabalhos
            <span className="hand-underline mt-2" />
          </h2>
        </div>

        <Link
          href="/trabalhos"
          className="group mt-5 inline-flex items-center gap-3 border border-[#ff26a8] bg-black px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#ff26a8] transition-all duration-300 hover:bg-[#ff26a8] hover:text-black sm:text-[12px] md:absolute md:right-0 md:top-7 md:mt-0"
        >
          Ver Galeria Completa
          <TbArrowBigRightLineFilled
            size={14}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <div className="relative mt-8 md:mt-6">
          <div
            ref={track}
            className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain touch-pan-x"
          >
            {works.map((work) => (
              <div
                key={work.id}
                className="aspect-5/6 w-[78%] shrink-0 snap-start xs:w-[68%] sm:w-[40%] md:w-[30%] lg:w-[calc((100%-2rem)/5)]"
              >
                {work.image ? (
                  <img
                    src={work.image.src}
                    alt={`Trabalho ${work.id}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
                    Sem imagem
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(-1)}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center bg-black text-white transition-colors hover:bg-pink-400 hover:text-black sm:h-9 sm:w-9 md:h-10 md:w-10 xl:-left-16"
          >
            <TbArrowBigLeftFilled size={16} />
          </button>

          <button
            onClick={() => scroll(1)}
            aria-label="Próximo"
            className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center bg-black text-white transition-colors hover:bg-pink-400 hover:text-black sm:h-9 sm:w-9 md:h-10 md:w-10 xl:-right-16"
          >
            <TbArrowBigRightFilled size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}