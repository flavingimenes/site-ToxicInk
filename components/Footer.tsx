import { site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";


export default function Footer() {
  return (
    <footer id="contato" className="grain grain-dark border-t border-white/15">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-8 text-center md:flex-row md:justify-between md:text-left">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0">
            
          </div>
          <span className="font-display text-2xl leading-none">{site.name}</span>
        </a>

        <p className="text-[11px]">
          {site.location}
          <span className="mx-3 text-white/40">|</span>
          <a
            href={site.whatsapp}
            className="underline decoration-dotted underline-offset-4 transition-colors hover:text-[var(--neon)]"
          >
            {site.phone}
          </a>
        </p>

        <div className="flex items-center gap-4">
          <a href={site.instagram} aria-label="Instagram" className="transition-colors hover:text-[var(--neon)]">
            <InstagramIcon />
          </a>
          <a href={site.whatsapp} aria-label="WhatsApp" className="transition-colors hover:text-[var(--neon)]">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
