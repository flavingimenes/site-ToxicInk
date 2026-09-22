import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import works from "@/lib/works-data";
import WorkNavbar from "./WorkNavabar";
import Link from "next/link";
import { TbArrowBigLeftLine } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";

import rockEmoji from "@/images/textures/sign-of-the-horns.png";

export const metadata: Metadata = {
  title: "Trabalhos | Toxic Ink",
  description: "Galeria de trabalhos autorais do estúdio Toxic Ink.",
};

export default function TrabalhosPage() {
  return (
    <>
      <WorkNavbar />

      <main id="inicio" className="grain grain-dark pt-18">
        <section className="border-b border-white/15 px-5 py-14 md:px-0 md:py-16">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/"
              className="group mb-8 font-bold inline-flex items-center gap-3 border border-white/15 px-4 py-2.5 text-[11px] uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#ff2eae] hover:bg-[#ff2eae] hover:text-black"
            >
              <TbArrowBigLeftLine className="transition-transform duration-300 group-hover:-translate-x-1 w-5 h-5" />
              Voltar ao início
            </Link>

            <p className="text-xs uppercase tracking-[0.12em]">
              <span className="mr-1 text-[#ff2eae]">/</span>
              Portfólio
            </p>

            <h1 className="font-display mt-1 inline-block text-5xl uppercase leading-none md:text-7xl">
              Minha <span className="text-[#ff26a8]">G</span>
              <span className="text-[#ff2eae]">A</span>
              <span className="text-[#ff36b4]">L</span>
              <span className="text-[#ff3eba]">E</span>
              <span className="text-[#ff46c0]">R</span>
              <span className="text-[#ff4ec6]">I</span>
              <span className="text-[#ff56cc]">A</span>
              <span
  className="hand-underline mt-2"
  style={{
    background: "linear-gradient(to right, white, white, #ff2eae, #ff2eae)",
  }}
/>
            </h1>
          </div>
        </section>

        <section className="px-5 py-12 md:px-0 md:py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {works.map((w) => (
              <div
                key={w.id}
                className="group relative aspect-4/5 overflow-hidden border border-white/10"
              >
                <Image
                  src={w.image}
                  alt={`Trabalho ${w.id} - Toxic Ink`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover grayscale-15 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="grain grain-dark border-t border-white/15 px-5 py-16 text-center md:px-0">
          <div className="mx-auto max-w-xl">
            <h2 className="font-hand -rotate-2 text-4xl flex items-center justify-center leading-none md:text-5xl">
              Gostou Do Que Viu?
              <Image
                src={rockEmoji}
                alt="Rock"
                width={60}
                height={60}
                className="inline-block ml-2 mb-3"
              />
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-white/80">
              Acompanhe o dia a dia do estúdio e os últimos trabalhos direto no
              Instagram, segue ai :3
            </p>

            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-frame mt-8 inline-flex items-center gap-4 border border-white px-6 py-4 text-[13px] uppercase tracking-wider text-white transition-all duration-300 bg-linear-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45] hover:scale-[1.02] hover:brightness-110"
            >
              Seguir no Instagram
              <FiExternalLink size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
