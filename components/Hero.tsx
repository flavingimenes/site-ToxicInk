import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="grain grain-dark border-b border-white/15">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-5 py-14 md:order-1 md:py-24 md:pl-16 md:pr-6">
          <h1 className="font-display -rotate-3 text-[4.5rem] uppercase leading-[0.85] sm:text-[6rem] md:text-[6.5rem]">
            Toxic
            <br />
            <span className="ml-10 inline-block">Ink</span>
          </h1>

          <p className="mt-10 text-sm uppercase tracking-[0.15em]">
            Tattoo Studio&nbsp;&nbsp;-&nbsp;&nbsp;{site.location}
          </p>

          <p className="mt-7 max-w-[300px] text-[13px] leading-relaxed text-white/80">
            Tatuagens autorais, com traços únicos e muito significado. Aqui, cada
            ideia ganha forma na pele.
          </p>

          <a
            href="#agendamento"
            className="btn-frame mt-9 inline-flex w-fit items-center gap-4 border border-white px-6 py-4 text-[13px] uppercase tracking-wider hover:bg-white hover:text-black"
          >
            Agendar sua tattoo
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="order-1 md:order-2 md:py-0 md:pr-10">
          <div className="mx-auto aspect-[4/5] w-full max-w-md md:max-w-none">
            
          </div>
        </div>
      </div>
    </section>
  );
}
