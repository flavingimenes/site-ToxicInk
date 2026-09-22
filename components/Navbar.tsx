"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="grain grain-dark sticky top-0 z-50 border-b border-white/15 bg-[#0d0d0d]/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0">
            
          </div>
          <span className="font-display text-3xl leading-none">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-9 text-[13px] md:flex">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`border-b pb-1 transition-colors hover:text-[var(--neon)] ${
                i === 0 ? "border-[var(--neon)]" : "border-transparent"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={site.instagram} aria-label="Instagram" className="transition-colors hover:text-[var(--neon)]">
            <InstagramIcon />
          </a>
          <a href={site.whatsapp} aria-label="WhatsApp" className="transition-colors hover:text-[var(--neon)]">
            <WhatsAppIcon />
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/15 bg-[#0d0d0d] px-5 py-4 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href} className="border-b border-white/10 last:border-0">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-5 pt-4">
            <a href={site.instagram} aria-label="Instagram"><InstagramIcon /></a>
            <a href={site.whatsapp} aria-label="WhatsApp"><WhatsAppIcon /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
