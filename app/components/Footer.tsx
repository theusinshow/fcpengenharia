"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1f20] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="https://static.wixstatic.com/media/b817bd_41a1358f382b4304a14839471571cd5a~mv2.png/v1/fill/w_400,h_200,al_c,q_95/file.png"
              alt="FCP Engenharia Elétrica"
              width={140}
              height={70}
              className="h-10 w-auto object-contain mb-4 brightness-0 invert"
              unoptimized
            />
            <p className="font-sora font-light text-[#868D90] text-sm leading-relaxed max-w-xs">
              Engenharia elétrica premium em Criciúma, SC. Da planta ao padrão
              aprovado, com segurança e rigor técnico.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sora font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-2">
              {[
                "Projetos Elétricos",
                "Laudos Técnicos",
                "Periciais Judiciais",
                "Automação",
                "Geração de Energia & PPCI",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-sora font-light text-[#868D90] text-sm hover:text-[#116DFF] transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sora font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+5548999569631"
                  className="font-sora font-light text-[#868D90] text-sm hover:text-[#116DFF] transition-colors duration-200"
                >
                  (48) 99956-9631
                </a>
              </li>
              <li>
                <a
                  href="mailto:eng.fernandocoanp@gmail.com"
                  className="font-sora font-light text-[#868D90] text-sm hover:text-[#116DFF] transition-colors duration-200"
                >
                  eng.fernandocoanp@gmail.com
                </a>
              </li>
              <li>
                <span className="font-sora font-light text-[#868D90] text-sm">
                  Criciúma, SC
                </span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/FCP_EngEletrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sora font-light text-[#868D90] text-sm hover:text-[#116DFF] transition-colors duration-200"
                >
                  @FCP_EngEletrica
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sora font-light text-[#868D90] text-xs">
            © {currentYear} FCP Engenharia Elétrica. Todos os direitos reservados.
          </p>
          <p className="font-sora font-light text-[#868D90] text-xs">
            CREA-SC Registrado · Criciúma, SC
          </p>
        </div>
      </div>
    </footer>
  );
}
