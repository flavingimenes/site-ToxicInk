import { site } from "@/lib/site";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="grain grain-dark border-t border-white/15"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-10 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">
        {/* Marca */}
        <a
          href="#inicio"
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="h-10 w-10 shrink-0" />
          <span className="font-display text-2xl leading-none tracking-tight">
            {site.name}
          </span>
        </a>

        {/* Contato */}
        <p className="flex flex-wrap items-center justify-center gap-x-3 text-[11px] uppercase tracking-wider text-white/60 md:justify-start">
          <span>{site.location}</span>
          <span className="text-white/25">|</span>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted decoration-white/40 underline-offset-4 transition-colors hover:text-(--neon) hover:decoration-(--neon)"
          >
            {site.phone}
          </a>
        </p>

        {/* Redes sociais */}
        <div className="flex items-center gap-5">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/70 transition-all duration-200 hover:scale-110 hover:text-(--neon)"
          >
            <FaInstagram className="h-7 w-7" />
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white/70 transition-all duration-200 hover:scale-110 hover:text-(--neon)"
          >
            <FaWhatsapp className="h-7 w-7" />
          </a>
        </div>
      </div>

      {/* Linha de créditos */}
      <div className="border-t border-white/10 py-4 text-center text-[10px] text-white/40">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}