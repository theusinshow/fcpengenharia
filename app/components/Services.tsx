"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, FileText, Scale, Cpu, Sun, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Zap,
    num: "01",
    title: "Projetos Elétricos",
    description:
      "Padrão de entrada, Subestações, Elétrica, Cabeamento Estruturado (Internet, Telefone, TV e CFTV). Projetos em BIM com maior compatibilidade multidisciplinar.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Laudos Técnicos",
    description:
      "SPDA, Luminotécnico, Aterramento, Prontuário de Instalações Elétricas, Restituição de ICMS, PPCI.",
  },
  {
    icon: Scale,
    num: "03",
    title: "Periciais Judiciais",
    description:
      "Expertise em Periciais Judiciais Elétricas e Assistências Técnicas para processos judiciais.",
  },
  {
    icon: Cpu,
    num: "04",
    title: "Automação",
    description:
      "Projetos residenciais, industriais e de painéis elétricos que facilitam e agilizam tarefas com economia real.",
  },
  {
    icon: Sun,
    num: "05",
    title: "Energia Solar",
    description:
      "Projetos Fotovoltaicos com até 90% de economia nas faturas. Invista no futuro com segurança técnica.",
  },
  {
    icon: ShieldCheck,
    num: "06",
    title: "PPCI",
    description:
      "Projetos Preventivos Contra Incêndio com atendimento às exigências do Corpo de Bombeiros.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicos"
      style={{ background: "#0D0D0D", padding: "6rem 2rem" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "12px",
            color: "#F5C518",
            letterSpacing: "0.15em",
            marginBottom: "1.5rem",
          }}
        >
          [ 02 — SERVIÇOS ]
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 52px)",
            color: "#F0EDE8",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "4rem",
            maxWidth: "560px",
          }}
        >
          O que fazemos com precisão.
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1px",
            background: "#2A2A2A",
            border: "1px solid #2A2A2A",
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#141414",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: hovered ? "1px solid #F5C518" : "1px solid transparent",
        borderLeft: hovered ? "3px solid #F5C518" : "3px solid transparent",
        boxShadow: hovered ? "0 0 32px rgba(245,197,24,0.08)" : "none",
        transition: "border-color 0.25s, box-shadow 0.25s",
        cursor: "default",
        position: "relative",
      }}
    >
      {/* Decorative number — yellow com opacity baixa */}
      <span
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          fontFamily: "var(--font-space-mono)",
          fontSize: "14px",
          color: "#F5C518",
          fontWeight: 400,
          opacity: 0.12,
        }}
      >
        {service.num}
      </span>

      <Icon size={24} color="#F5C518" strokeWidth={1.5} />

      <h3
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontWeight: 600,
          fontSize: "18px",
          color: "#F0EDE8",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
          fontSize: "14px",
          color: "#888888",
          lineHeight: 1.6,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {service.description}
      </p>

      <a
        href="#contato"
        onClick={(e) => { e.preventDefault(); document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" }); }}
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontWeight: 500,
          fontSize: "13px",
          color: "#F5C518",
          textDecoration: "none",
          marginTop: "0.5rem",
        }}
      >
        Ver detalhes →
      </a>
    </motion.div>
  );
}
