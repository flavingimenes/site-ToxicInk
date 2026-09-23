import { ShieldCheck, Gem, UserRound } from "lucide-react";

const perks = [
  { icon: ShieldCheck, text: "Ambiente seguro e higienizado" },
  { icon: Gem, text: "Materiais de alta qualidade" },
  { icon: UserRound, text: "Atendimento personalizado" },
];

export default function About() {
  return (
    <section id="sobre" className="grain grain-dark border-b border-white/15">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-[1fr_1.15fr] md:gap-14 md:px-0 md:py-16">
        <div className="aspect-4/3 w-full rounded-xl bg-white/5 sm:aspect-10/7 md:ml-0" />

        <div className="text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.12em]">
            <span className="mr-1 text-[#ff26a8]">/</span>Sobre o meu
          </p>
          <h2 className="font-display mt-1 inline-block text-4xl uppercase leading-none sm:text-5xl md:text-6xl">
            <span className="text-[#ff26a8] drop-shadow-[0_0_8px_rgba(255,38,168,0.65)]">
              E
            </span>
            <span className="text-[#ff2eae] drop-shadow-[0_0_9px_rgba(255,46,174,0.7)]">
              S
            </span>
            <span className="text-[#ff36b4] drop-shadow-[0_0_9px_rgba(255,54,180,0.7)]">
              T
            </span>
            <span className="text-[#ff3eba] drop-shadow-[0_0_10px_rgba(255,62,186,0.75)]">
              Ú
            </span>
            <span className="text-[#ff46c0] drop-shadow-[0_0_10px_rgba(255,70,192,0.8)]">
              D
            </span>
            <span className="text-[#ff4ec6] drop-shadow-[0_0_11px_rgba(255,78,198,0.8)]">
              I
            </span>
            <span className="text-[#ff56cc] drop-shadow-[0_0_11px_rgba(255,86,204,0.85)]">
              O
            </span>

            <span
              className="hand-underline mx-auto mt-2 w-full md:mx-0"
              style={{
                background:
                  "linear-gradient(to right, #ff26a8, #ff3eba, #ff56cc)",
                boxShadow:
                  "0 0 8px rgba(255,46,174,0.7), 0 0 18px rgba(255,46,174,0.35)",
              }}
            />
          </h2>

          <p className="mx-auto mt-6 max-w-md text-[13px] leading-[1.9] text-white/85 sm:mt-7 md:mx-0">
            Trabalho criando cada projeto de forma única e pessoal. Meu objetivo
            é transformar sua ideia em uma arte que tenha significado para você
            e faça sentido na sua pele. :)
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-5 sm:mt-9 sm:grid-cols-2 md:grid-cols-3">
            {perks.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center justify-center gap-3 md:justify-start"
              >
                <Icon
                  size={28}
                  strokeWidth={1.3}
                  className="shrink-0 text-[#ff26a8] sm:size-7.5"
                />
                <span className="text-left text-[11px] leading-snug text-white/80">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}