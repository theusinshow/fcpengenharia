"use client";

import { motion, type Variants } from "framer-motion";

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const headline = "Da Planta ao Padrão Aprovado".split(" ");

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://static.wixstatic.com/media/b817bd_063cba0d64d742a599d965844c46ea61~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_95/file.jpg')`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D3436]/90 via-[#2D3436]/75 to-[#116DFF]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#116DFF]/20 border border-[#116DFF]/40 text-[#116DFF] text-xs font-raleway font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#116DFF] inline-block" />
          CREA-SC Registrado · Criciúma, SC
        </motion.div>

        {/* Headline */}
        <h1 className="font-sora font-light text-white text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 tracking-tight">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className={`inline-block mr-4 ${
                word === "Aprovado" ? "font-semibold text-[#116DFF]" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-sora font-light text-white/80 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Projetos elétricos com rigor técnico, laudos aprovados e entregas
          dentro do prazo. Parceiro estratégico para construtores e indústrias
          em Santa Catarina.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#116DFF] text-white font-sora font-semibold text-base px-8 py-4 rounded-xl hover:bg-[#0d5fd4] transition-all duration-300 hover:shadow-lg hover:shadow-[#116DFF]/30 hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </a>
          <a
            href="https://wa.me/5548999569631?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#37D366] text-white font-sora font-semibold text-base px-8 py-4 rounded-xl hover:bg-[#2dbf58] transition-all duration-300 hover:shadow-lg hover:shadow-[#37D366]/30 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale pelo WhatsApp
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs font-light tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
