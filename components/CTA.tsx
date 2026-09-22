import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section
      id="agendamento"
      className="relative overflow-visible pt-12 pb-14 md:pt-16 md:pb-16"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1fr_1.3fr_0.8fr] md:gap-16 md:px-0 md:py-16">
        <div className="flex justify-center md:justify-start">
          <h2 className="font-hand mt-1 mb-8 rotate-[-16deg] text-center text-6xl uppercase leading-[0.82] text-white md:mb-0 md:text-left md:text-7xl">
            Vamos
            <br />
            tatuar
            <br />
            ideias?
          </h2>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="max-w-sm text-center text-xs leading-[1.9] text-white/85 md:text-left">
            Se curtiu o nosso estilo e quer fazer sua tattoo, é só chamar no
            WhatsApp. Vamos trocar uma ideia e tirar todas as suas dúvidas.
          </p>

          <a
            href={site.whatsapp}
            className="btn-frame mt-6 inline-flex items-center gap-4 border border-(--neon) px-6 py-3.5 text-[11px] uppercase tracking-wider text-(--neon) transition-colors duration-200 hover:bg-(--neon) hover:text-black"
          >


            <span>Chamar no WhatsApp</span>

            <FaWhatsapp className="h-5 w-5" />
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="paper grain rotate-[8deg] px-7 py-8 shadow-[3px_4px_0_rgba(0,0,0,0.5)] [clip-path:polygon(2%_4%,97%_0,100%_95%,4%_100%)]">
            <p className="font-hand -rotate-6 text-center text-2xl uppercase leading-tight">
              Arte
              <br />
              na pele
              <br />
              pra sempre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}