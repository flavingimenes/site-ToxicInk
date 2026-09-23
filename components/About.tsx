import { ShieldCheck, Gem, UserRound } from "lucide-react";

const perks = [
  { icon: ShieldCheck, text: "Ambiente seguro e higienizado" },
  { icon: Gem, text: "Materiais de alta qualidade" },
  { icon: UserRound, text: "Atendimento personalizado" },
];

export default function About() {
  return (
    <section id="sobre" className="grain grain-dark border-b border-white/15">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1fr_1.15fr] md:gap-14 md:px-0 md:py-16">
        <div className="aspect-10/7 w-full md:ml-0"></div>

        <div>
          <p className="text-xs uppercase tracking-[0.12em]">
            <span className="mr-1 text-[#ff26a8]">/</span>Sobre o meu
          </p>
          <h2 className="font-display mt-1 inline-block text-5xl uppercase leading-none md:text-6xl">
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
              className="hand-underline mt-2 w-full"
              style={{
                background:
                  "linear-gradient(to right, #ff26a8, #ff3eba, #ff56cc)",
                boxShadow:
                  "0 0 8px rgba(255,46,174,0.7), 0 0 18px rgba(255,46,174,0.35)",
              }}
            />
          </h2>

          <p className="mt-7 max-w-md text-[13px] leading-[1.9] text-white/85">
            Trabalho criando cada projeto de forma única e pessoal. Meu objetivo
            é transformar sua ideia em uma arte que tenha significado para você
            e faça sentido na sua pele. :)
          </p>

          <ul className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {perks.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <Icon
                  size={30}
                  strokeWidth={1.3}
                  className="shrink-0 text-[#ff26a8]"
                />
                <span className="text-[11px] leading-snug text-white/80">
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
