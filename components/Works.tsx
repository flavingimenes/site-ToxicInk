"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import works from "@/lib/works";
import { TbArrowBigLeftFilled, TbArrowBigRightFilled } from "react-icons/tb";

import paperBg from "@/images/textures/paperBg.jpg";

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
      className="relative bg-cover bg-center pb-32 pt-14 md:pb-40 md:pt-20"
    >
      <div className="mx-auto max-w-6xl px-5 text-black md:px-0">
        <p className="text-xs uppercase tracking-[0.12em]">Trabalhos</p>

        <div className="mt-1 flex items-end justify-between">
          <h2 className="font-display inline-block text-4xl uppercase leading-none sm:text-5xl md:text-6xl">
            Meus Trabalhos
            <span className="hand-underline mt-2" />
          </h2>

          <a
            href="#"
            className="mb-2 flex items-center gap-2 border-b border-black pb-0.5 text-xs uppercase tracking-wider transition-opacity hover:opacity-60"
          >
            Ver todos <ArrowRight size={13} />
          </a>
        </div>

        <div className="relative mt-6">
          <div
            ref={track}
            className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain touch-pan-x"
          >
            {works.map((work) => (
              <div
                key={work.id}
                className="aspect-5/6 w-[68%] shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-[calc((100%-2rem)/5)]"
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
            className="absolute left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center bg-black text-white transition-colors hover:bg-pink-400 hover:text-black md:flex lg:-left-16"
          >
            <TbArrowBigLeftFilled />
          </button>

          <button
            onClick={() => scroll(1)}
            aria-label="Próximo"
            className="absolute right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center bg-black text-white transition-colors hover:bg-pink-400 hover:text-black md:flex lg:-right-16"
          >
            <TbArrowBigRightFilled />
          </button>
        </div>
      </div>
    </section>
  );
}