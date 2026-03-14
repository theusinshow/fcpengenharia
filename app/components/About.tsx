"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const mvv = [
  {
    label: "Missão",
    text: "Oferecer soluções de Engenharia Elétrica com foco na segurança, economia e confiabilidade, visando excelência no atendimento.",
  },
  {
    label: "Visão",
    text: "Ser referência em soluções de engenharia elétrica, reconhecido pela inovação e qualidade em Santa Catarina.",
  },
  {
    label: "Valores",
    text: "Responsabilidade · Segurança · Qualidade · Ética · Comprometimento · Transparência.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      id="sobre"
      style={{
        background: "#141414",
        borderTop: "1px solid #2A2A2A",
        padding: "5rem 1.25rem",
      }}
    >
      <div
        ref={ref}
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "12px",
            color: "#F5C518",
            letterSpacing: "0.15em",
            marginBottom: "3rem",
          }}
        >
          [ 04 — SOBRE ]
        </motion.p>

        {/* Two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Mobile-only: name above photo */}
          <div
            className="md:hidden"
            style={{ gridColumn: "1 / -1", marginBottom: "-2rem" }}
          >
            <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "26px", color: "#F0EDE8", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 6px" }}>
              Fernando Coan Peterle
            </h2>
            <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", color: "#F5C518", letterSpacing: "0.1em", margin: 0 }}>
              Engenheiro Eletricista · CREA-SC
            </p>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                border: "1px solid #2A2A2A",
                boxShadow: "0 0 40px rgba(245,197,24,0.06)",
                overflow: "hidden",
              }}
            >
              <Image
                src="https://static.wixstatic.com/media/b817bd_b5df10da5db649e8bcb2643ff357827b~mv2.jpg/v1/fill/w_400,h_400,al_c,q_95/file.jpg"
                alt="Fernando Coan Peterle — Engenheiro Eletricista"
                width={500}
                height={500}
                unoptimized
                style={{ width: "100%", height: "auto", display: "block", filter: "grayscale(8%) contrast(1.05)" }}
              />
              {/* Yellow accent line at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "#F5C518",
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {/* Desktop-only name (hidden on mobile, shown above photo instead) */}
            <h2
              className="hidden md:block"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "#F0EDE8",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "8px",
              }}
            >
              Fernando Coan Peterle
            </h2>
            <p
              className="hidden md:block"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "12px",
                color: "#F5C518",
                letterSpacing: "0.1em",
                marginBottom: "1.75rem",
              }}
            >
              Engenheiro Eletricista · CREA-SC
            </p>

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "15px",
                color: "#888888",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              A FCP Engenharia Elétrica foi idealizada pelo Engenheiro Fernando
              Coan Peterle com o objetivo de elaborar soluções priorizando
              segurança, qualidade e atenção aos detalhes. Somos parceiros
              estratégicos para construtoras, incorporadoras e indústrias que
              buscam excelência técnica em cada projeto.
            </p>

            {/* MVV blocks */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {mvv.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  style={{ display: "flex", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: "2px",
                      background: "#F5C518",
                      flexShrink: 0,
                      borderRadius: 0,
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "#F0EDE8",
                        marginBottom: "4px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {item.label}
                    </h4>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 300,
                        fontSize: "13px",
                        color: "#888888",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
