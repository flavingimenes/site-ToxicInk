import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function CTA() {
  return (
    <section id="agendamento" className="grain grain-dark -mt-6 pt-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1fr_1.2fr_0.7fr] md:px-0 md:py-16">
        <h2 className="font-hand -rotate-[16deg] text-6xl uppercase -mt-14 leading-[0.85] md:text-7xl mt-1 mb-12">
          Vamos
          <br />
          tatuar
          <br />
          ideias?
        </h2>

        <div>
          <p className="max-w-xs text-xs leading-[1.9] text-white/85">
            Se curtiu o nosso estilo e quer fazer sua tattoo, é só chamar no
            WhatsApp. Vamos trocar uma ideia e tirar todas as suas dúvidas.
          </p>
          <a
            href={site.whatsapp}
            className="btn-frame mt-6 inline-flex items-center gap-4 border border-[var(--neon)] px-6 py-3.5 text-[11px] uppercase tracking-wider text-[var(--neon)] hover:bg-[var(--neon)] hover:text-black"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chamar no WhatsApp
            <ArrowRight size={14} />
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
