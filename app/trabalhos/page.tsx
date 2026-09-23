import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import works from "@/lib/works-data";
import WorkNavbar from "./WorkNavabar";
import Link from "next/link";
import { TbArrowBigLeftLine } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";

import rockEmoji from "@/images/textures/sign-of-the-horns.png";
import WorksGallery from "./WorksGallery";

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
              className="group mb-8 inline-flex items-center gap-3 border border-white/15 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#ff26b8] hover:bg-[#ff26b8] hover:text-black"
            >
              <TbArrowBigLeftLine className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
              Voltar ao início
            </Link>
            <p className="text-xs uppercase tracking-[0.12em]">
              <span className="mr-1 text-[#ff2eae]">/</span>
              Portfólio
            </p>
            <h1 className="font-display relative mt-1 inline-block text-6xl uppercase leading-none md:text-7xl">
              Minha{" "}
              <span className="block md:inline">
                <span className="text-[#ff26a8] drop-shadow-[0_0_8px_rgba(255,38,168,0.65)]">
                  G
                </span>
                <span className="text-[#ff2eae] drop-shadow-[0_0_9px_rgba(255,46,174,0.7)]">
                  A
                </span>
                <span className="text-[#ff36b4] drop-shadow-[0_0_9px_rgba(255,54,180,0.7)]">
                  L
                </span>
                <span className="text-[#ff3eba] drop-shadow-[0_0_10px_rgba(255,62,186,0.75)]">
                  E
                </span>
                <span className="text-[#ff46c0] drop-shadow-[0_0_10px_rgba(255,70,192,0.8)]">
                  R
                </span>
                <span className="text-[#ff4ec6] drop-shadow-[0_0_11px_rgba(255,78,198,0.8)]">
                  I
                </span>
                <span className="text-[#ff56cc] drop-shadow-[0_0_11px_rgba(255,86,204,0.85)]">
                  A
                </span>

                <span
                  className="hand-underline mt-2 w-full md:hidden"
                  style={{
                    background:
                      "linear-gradient(to right, white, white, #ff2eae, #ff2eae)",
                    boxShadow:
                      "0 0 8px rgba(255,46,174,0.7), 0 0 18px rgba(255,46,174,0.35)",
                  }}
                />
              </span>
            </h1>
          </div>
        </section>

        <section className="px-5 py-14 md:px-0 md:py-20">
          <div className="mx-auto max-w-7xl ">
            <WorksGallery works={works} />
          </div>
        </section>

        <section className="grain grain-dark border-t border-white/15 px-5 py-16 text-center md:px-0">
          <div className="mx-auto max-w-xl">
            <h2 className="font-hand flex -rotate-2 items-center justify-center text-4xl leading-none md:text-5xl">
              Gostou Do Que Viu?
              <Image
                src={rockEmoji}
                alt="Rock"
                width={60}
                height={60}
                className="ml-2 mb-3 inline-block"
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
              className="btn-frame mt-8 inline-flex items-center gap-4 border border-white bg-linear-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45] px-6 py-4 text-[13px] uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
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
