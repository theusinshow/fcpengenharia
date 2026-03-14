"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    icon: "https://static.wixstatic.com/media/b817bd_ee13da9fdb4e4ebe8be54f8b63d1a482~mv2.png/v1/fill/w_200,h_200,al_c,q_95/file.png",
    title: "Projetos Elétricos",
    description:
      "Projetos completos: Padrão de entrada, Subestações, Elétrica, Cabeamento Estruturado (Internet, Telefone, TV e CFTV). Projetos em BIM com maior detalhamento e compatibilidade multidisciplinar.",
  },
  {
    icon: "https://static.wixstatic.com/media/b817bd_fcb0074c5657473d961603dcf630a0c7~mv2.png/v1/fill/w_200,h_200,al_c,q_95/file.png",
    title: "Laudos Técnicos",
    description:
      "SPDA, Luminotécnico, Aterramento, Prontuário de Instalações Elétricas, Restituição de ICMS, PPCI (incêndio).",
  },
  {
    icon: "https://static.wixstatic.com/media/b817bd_9fc37f25abb548d5bbdf23719a44525b~mv2.png/v1/fill/w_200,h_200,al_c,q_95/file.png",
    title: "Periciais Judiciais",
    description:
      "Expertise em Periciais Judiciais Elétricas e Assistências Técnicas Judiciais com rigor técnico e imparcialidade.",
  },
  {
    icon: "https://static.wixstatic.com/media/b817bd_a308787cb13e45e7a664e295bac9450b~mv2.png/v1/fill/w_200,h_200,al_c,q_95/file.png",
    title: "Automação",
    description:
      "Projetos residenciais, industriais e de painéis elétricos. Soluções inteligentes para maior eficiência e segurança.",
  },
  {
    icon: "https://static.wixstatic.com/media/b817bd_2619608c71024f72ae152f63886a63d4~mv2.png/v1/fill/w_200,h_200,al_c,q_95/file.png",
    title: "Geração de Energia & Segurança",
    description:
      "Projetos Fotovoltaicos com até 90% de economia na conta de luz e PPCI (Plano de Prevenção e Proteção Contra Incêndio).",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="inline-block font-raleway font-semibold text-[#993500] text-sm uppercase tracking-widest mb-4">
            O que fazemos
          </span>
          <h2 className="font-sora font-light text-[#2D3436] text-4xl md:text-5xl lg:text-6xl mb-6">
            Serviços{" "}
            <span className="font-semibold text-[#116DFF]">Especializados</span>
          </h2>
          <p className="font-sora font-light text-[#868D90] text-lg max-w-2xl mx-auto">
            Soluções completas de engenharia elétrica com rigor técnico,
            segurança e atenção a cada detalhe do projeto.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(17,109,255,0.12)",
              }}
              className={`bg-white border border-[#DFE6E9] rounded-2xl p-8 flex flex-col gap-5 group cursor-default transition-all duration-300 hover:border-[#116DFF] relative overflow-hidden ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#116DFF] to-[#116DFF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-14 h-14 relative">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={56}
                  height={56}
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-sora font-semibold text-[#2D3436] text-lg mb-2 group-hover:text-[#116DFF] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="font-sora font-light text-[#868D90] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Saiba mais */}
              <div className="mt-auto pt-2">
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#116DFF] hover:gap-3 transition-all duration-200"
                >
                  Saiba mais
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
