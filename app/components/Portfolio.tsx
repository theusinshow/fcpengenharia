"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    category: "Saúde Pública",
    name: "UBS Dilnei Sonego",
    disciplines: "Elétrico, Lógico, BIM",
    images: [
      "https://static.wixstatic.com/media/b817bd_a334d40d6003449c912aebbc0992b497~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
      "https://static.wixstatic.com/media/b817bd_55412ed77f0f4b669e4f292f146435cd~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
      "https://static.wixstatic.com/media/b817bd_50d0e612abd6436c93019a155a038a1d~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
      "https://static.wixstatic.com/media/b817bd_add39ecd8b81414993d706253f8a7993~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    ],
  },
  {
    category: "Patrimônio Histórico",
    name: "Restauro Patrimônio Histórico",
    disciplines: "Elétrico, SPDA, Luminotécnico",
    images: [
      "https://static.wixstatic.com/media/b817bd_d6accb1c2d91457f873ac8204f8866cc~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
      "https://static.wixstatic.com/media/b817bd_3e5ddde7b47e4f5abc9ba47ce4b7bfb3~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
      "https://static.wixstatic.com/media/b817bd_a1fdf63c603b44de8632e86128bb512e~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
      "https://static.wixstatic.com/media/b817bd_66237b46fd394d82b0f7fb389e559a4f~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    ],
  },
  {
    category: "Esporte & Lazer",
    name: "Sede Esportiva",
    disciplines: "Elétrico, PPCI, Automação",
    images: [
      "https://static.wixstatic.com/media/b817bd_3670115a62c64f4d8eb39cb58f623d89~mv2.jpeg/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
      "https://static.wixstatic.com/media/b817bd_a3cec119ec3e45628529609ebd54dda2~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
      "https://static.wixstatic.com/media/b817bd_ca7cdcbd8d8a488ca6e0d84d253b5c84~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    ],
  },
];

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
      className="group bg-white border border-[#DFE6E9] rounded-2xl overflow-hidden hover:border-[#116DFF]/30 hover:shadow-xl transition-all duration-400"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[#DFE6E9]">
        <Image
          src={project.images[activeImg]}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          unoptimized
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#2D3436]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-sora font-light text-sm">Ver projeto</span>
        </div>

        {/* Thumbnail dots */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === activeImg ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <span className="inline-block bg-[#116DFF]/10 text-[#116DFF] text-xs font-raleway font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          {project.category}
        </span>
        <h3 className="font-sora font-semibold text-[#2D3436] text-lg mb-1">
          {project.name}
        </h3>
        <p className="font-sora font-light text-[#868D90] text-sm">
          Disciplinas: {project.disciplines}
        </p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#DFE6E9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-raleway font-semibold text-[#993500] text-sm uppercase tracking-widest mb-4">
            Projetos realizados
          </span>
          <h2 className="font-sora font-light text-[#2D3436] text-4xl md:text-5xl lg:text-6xl mb-6">
            Nosso{" "}
            <span className="font-semibold text-[#116DFF]">Portfólio</span>
          </h2>
          <p className="font-sora font-light text-[#868D90] text-lg max-w-2xl mx-auto">
            Projetos reais entregues com excelência técnica em diferentes
            segmentos — saúde, patrimônio histórico e esporte.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
