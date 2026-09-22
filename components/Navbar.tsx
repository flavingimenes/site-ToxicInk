"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="grain grain-dark fixed! left-0 right-0 top-0 z-50 border-b border-white/15 bg-[#0d0d0d]/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0"></div>

          <span className="font-display text-3xl leading-none md:text-4xl">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-medium md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link pb-1">
              <span className="nav-link-text inline-block">{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 transition-all duration-200 hover:scale-110 hover:text-pink-400"
          >
            <FaInstagram className="h-7 w-7" />
          </a>

          <a
            href={site.whatsapp}
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 transition-all duration-200 hover:scale-110 hover:text-green-400"
          >
            <FaWhatsapp className="h-7 w-7" />
          </a>
        </div>

        <button
          className="relative z-50 flex h-8 w-8 items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              open
                ? "rotate-90 opacity-0"
                : "rotate-0 opacity-100"
            }`}
          >
            <Menu className="h-6 w-6" />
          </span>

          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              open
                ? "rotate-0 opacity-100"
                : "-rotate-90 opacity-0"
            }`}
          >
            <X className="h-6 w-6" />
          </span>
        </button>
      </div>

      <nav
        className={`overflow-hidden border-t border-white/15 bg-[#0d0d0d] px-5 transition-all duration-300 ease-in-out md:hidden ${
          open
            ? "max-h-100 py-4 opacity-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {navLinks.map((l, i) => (
            <li
              key={l.href}
              className={`border-b border-white/10 last:border-0 transition-all duration-300 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }`}
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
              }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="nav-link block py-3 text-sm"
              >
                <span className="nav-link-text inline-block text-pink-500">
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-5 pt-6">
          <a
            href={site.instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 transition-all duration-200 hover:scale-110 hover:text-fuchsia-400"
          >
            <FaInstagram className="h-8 w-8" />
          </a>

          <a
            href={site.whatsapp}
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 transition-all duration-200 hover:scale-110 hover:text-green-400"
          >
            <FaWhatsapp className="h-8 w-8" />
          </a>
        </div>
      </nav>

      <style jsx>{`
        @keyframes navShake {
          0%,
          100% {
            transform: rotate(0deg) translateY(0);
          }

          20% {
            transform: rotate(-4deg) translateY(-1px);
          }

          40% {
            transform: rotate(4deg) translateY(1px);
          }

          60% {
            transform: rotate(-2deg);
          }

          80% {
            transform: rotate(1deg);
          }
        }

        .nav-link-text {
          display: inline-block;
          transition: color 0.2s ease;
        }

        .nav-link:hover .nav-link-text {
          color: #ff26a8;
          animation: navShake 0.35s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}