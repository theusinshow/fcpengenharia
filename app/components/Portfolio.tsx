"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    category: "SAÚDE",
    name: "UBS Dilnei Sonego",
    disciplines: "Elétrico · Lógico · BIM",
    image: "https://static.wixstatic.com/media/b817bd_a334d40d6003449c912aebbc0992b497~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    alt: "https://static.wixstatic.com/media/b817bd_55412ed77f0f4b669e4f292f146435cd~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    large: true,
  },
  {
    category: "PATRIMÔNIO",
    name: "Restauro Histórico",
    disciplines: "Elétrico · SPDA · Luminotécnico",
    image: "https://static.wixstatic.com/media/b817bd_d6accb1c2d91457f873ac8204f8866cc~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    alt: "https://static.wixstatic.com/media/b817bd_66237b46fd394d82b0f7fb389e559a4f~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    large: false,
  },
  {
    category: "ESPORTIVO",
    name: "Sede Esportiva",
    disciplines: "Elétrico · PPCI · Automação",
    image: "https://static.wixstatic.com/media/b817bd_3670115a62c64f4d8eb39cb58f623d89~mv2.jpeg/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    alt: "https://static.wixstatic.com/media/b817bd_a3cec119ec3e45628529609ebd54dda2~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    large: false,
  },
];

function PortfolioCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(project.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        border: hovered ? "1px solid #F5C518" : "1px solid #2A2A2A",
        transition: "border-color 0.3s",
        aspectRatio: project.large ? "16/10" : "4/3",
      }}
    >
      <Image
        src={imgSrc}
        alt={project.name}
        fill
        unoptimized
        onError={() => setImgSrc(project.alt)}
        style={{
          objectFit: "cover",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, rgba(13,13,13,0.2) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "10px",
            color: "#F5C518",
            letterSpacing: "0.15em",
            display: "block",
            marginBottom: "6px",
          }}
        >
          {project.category}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 600,
            fontSize: project.large ? "22px" : "17px",
            color: "#F0EDE8",
            margin: "0 0 4px",
            letterSpacing: "-0.02em",
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "13px",
            color: "#888888",
            margin: 0,
          }}
        >
          {project.disciplines}
        </p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="portfolio"
      style={{ background: "#0A0A0A", padding: "6rem 2rem" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Label */}
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
          [ 03 — PORTFÓLIO ]
        </motion.p>

        {/* Headline */}
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
            maxWidth: "620px",
          }}
        >
          Projetos que resistem à inspeção técnica.
        </motion.h2>

        {/* Asymmetric grid: large (60%) + 2 small (40%) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gridTemplateRows: "auto auto",
            gap: "1px",
            background: "#2A2A2A",
          }}
        >
          {/* Large card spans 2 rows on left */}
          <div style={{ gridRow: "1 / 3" }}>
            <PortfolioCard project={projects[0]} index={0} inView={inView} />
          </div>
          {/* Two small cards on right */}
          <PortfolioCard project={projects[1]} index={1} inView={inView} />
          <PortfolioCard project={projects[2]} index={2} inView={inView} />
        </div>
      </div>
    </section>
  );
}
