"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const values = [
  { label: "Responsabilidade", icon: "⚖️" },
  { label: "Segurança", icon: "🛡️" },
  { label: "Qualidade", icon: "✅" },
  { label: "Ética", icon: "🤝" },
  { label: "Comprometimento", icon: "🎯" },
  { label: "Transparência", icon: "💡" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Background accent */}
            <div className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-[#116DFF]/8 rounded-3xl" />
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-[#993500]/8 rounded-3xl" />

            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://static.wixstatic.com/media/b817bd_b5df10da5db649e8bcb2643ff357827b~mv2.jpg/v1/fill/w_400,h_400,al_c,q_95/file.jpg"
                alt="Fernando Coan Peterle — Engenheiro Eletricista"
                width={500}
                height={500}
                className="w-full object-cover aspect-square"
                unoptimized
              />
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2D3436]/90 to-transparent p-6">
                <p className="font-sora font-semibold text-white text-lg">
                  Fernando Coan Peterle
                </p>
                <p className="font-sora font-light text-white/70 text-sm">
                  Engenheiro Eletricista · CREA-SC
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <span className="inline-block font-raleway font-semibold text-[#993500] text-sm uppercase tracking-widest mb-4">
              Quem somos
            </span>
            <h2 className="font-sora font-light text-[#2D3436] text-4xl md:text-5xl mb-6 leading-tight">
              Engenharia com{" "}
              <span className="font-semibold text-[#116DFF]">
                Propósito e Precisão
              </span>
            </h2>
            <p className="font-sora font-light text-[#868D90] text-base leading-relaxed mb-8">
              A FCP Engenharia Elétrica foi idealizada pelo Engenheiro Fernando
              Coan Peterle com o objetivo de elaborar soluções priorizando
              segurança, qualidade e atenção aos detalhes. Somos parceiros
              estratégicos para construtores, incorporadoras e indústrias que
              buscam excelência técnica em cada projeto.
            </p>

            {/* MVV */}
            <div className="space-y-5 mb-10">
              <div className="flex gap-4">
                <div className="w-1 rounded-full bg-[#116DFF] flex-shrink-0" />
                <div>
                  <h4 className="font-sora font-semibold text-[#2D3436] text-sm mb-1">
                    Missão
                  </h4>
                  <p className="font-sora font-light text-[#868D90] text-sm leading-relaxed">
                    Oferecer soluções de Engenharia Elétrica com foco na
                    segurança, economia e confiabilidade, visando excelência no
                    atendimento.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 rounded-full bg-[#993500] flex-shrink-0" />
                <div>
                  <h4 className="font-sora font-semibold text-[#2D3436] text-sm mb-1">
                    Visão
                  </h4>
                  <p className="font-sora font-light text-[#868D90] text-sm leading-relaxed">
                    Ser referência em soluções de engenharia elétrica,
                    reconhecido pela inovação e qualidade em Santa Catarina.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h4 className="font-sora font-semibold text-[#2D3436] text-sm mb-4">
                Nossos Valores
              </h4>
              <div className="flex flex-wrap gap-2">
                {values.map((v, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                    className="inline-flex items-center gap-1.5 bg-[#DFE6E9] text-[#2D3436] text-xs font-sora font-medium px-3 py-1.5 rounded-full"
                  >
                    <span>{v.icon}</span>
                    {v.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
