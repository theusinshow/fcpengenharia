"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    category: "SAÚDE",
    name: "UBS Dilnei Sonego",
    disciplines: "Elétrico · Lógico · BIM",
    image: "https://static.wixstatic.com/media/b817bd_a334d40d6003449c912aebbc0992b497~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    fallback: "https://static.wixstatic.com/media/b817bd_55412ed77f0f4b669e4f292f146435cd~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
  {
    category: "SAÚDE",
    name: "UBS — Modelo BIM",
    disciplines: "BIM · Climatização · Elétrico",
    image: "https://static.wixstatic.com/media/b817bd_55412ed77f0f4b669e4f292f146435cd~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    fallback: "https://static.wixstatic.com/media/b817bd_a334d40d6003449c912aebbc0992b497~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
  {
    category: "PATRIMÔNIO",
    name: "Restauro Histórico",
    disciplines: "Elétrico · SPDA · Luminotécnico",
    image: "https://static.wixstatic.com/media/b817bd_d6accb1c2d91457f873ac8204f8866cc~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    fallback: "https://static.wixstatic.com/media/b817bd_66237b46fd394d82b0f7fb389e559a4f~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
  {
    category: "PATRIMÔNIO",
    name: "Patrimônio — Planta BIM",
    disciplines: "Elétrico · Lógico · Entrada de Energia",
    image: "https://static.wixstatic.com/media/b817bd_66237b46fd394d82b0f7fb389e559a4f~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    fallback: "https://static.wixstatic.com/media/b817bd_d6accb1c2d91457f873ac8204f8866cc~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
  {
    category: "ESPORTIVO",
    name: "Sede Esportiva",
    disciplines: "Elétrico · PPCI · Automação",
    image: "https://static.wixstatic.com/media/b817bd_3670115a62c64f4d8eb39cb58f623d89~mv2.jpeg/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    fallback: "https://static.wixstatic.com/media/b817bd_a3cec119ec3e45628529609ebd54dda2~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
  {
    category: "ESPORTIVO",
    name: "Sede — Detalhe Técnico",
    disciplines: "Luminotécnico · Campo de Futebol",
    image: "https://static.wixstatic.com/media/b817bd_a3cec119ec3e45628529609ebd54dda2~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
    fallback: "https://static.wixstatic.com/media/b817bd_3670115a62c64f4d8eb39cb58f623d89~mv2.jpeg/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
];

const CARD_GAP = 16;

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [active, setActive] = useState(0);
  const [cardWidth, setCardWidth] = useState(480);
  const [hasInteracted, setHasInteracted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive card width
  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setCardWidth(vw < 640 ? Math.min(420, Math.floor(vw * 0.82)) : 480);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Drag state
  const dragStart = useRef<number | null>(null);
  const dragDelta = useRef(0);

  const goTo = useCallback(
    (idx: number) => {
      setActive(Math.max(0, Math.min(projects.length - 1, idx)));
      setHasInteracted(true);
    },
    []
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
    dragDelta.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    dragDelta.current = e.clientX - dragStart.current;
  };

  const handlePointerUp = () => {
    if (dragStart.current === null) return;
    if (dragDelta.current < -60) goTo(active + 1);
    else if (dragDelta.current > 60) goTo(active - 1);
    dragStart.current = null;
    dragDelta.current = 0;
  };

  const translateX = -(active * (cardWidth + CARD_GAP));

  return (
    <section
      id="portfolio"
      style={{
        background: "#0A0A0A",
        padding: "6rem 0",
        overflow: "hidden",
      }}
    >
      <div ref={ref} style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: "var(--font-space-mono)", fontSize: "12px", color: "#F5C518", letterSpacing: "0.15em", marginBottom: "1rem" }}
            >
              [ 03 — PORTFÓLIO ]
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 48px)", color: "#F0EDE8", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "8px" }}
            >
              Projetos que resistem à<br />inspeção técnica.
            </motion.h2>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            style={{ fontFamily: "var(--font-space-mono)", fontSize: "12px", color: "#F5C518", alignSelf: "flex-start" }}
          >
            {String(projects.length).padStart(2, "0")} projetos
          </motion.span>
        </div>
      </div>

      {/* Carousel track — full width overflow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            padding: "0 2rem",
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            cursor: "grab",
            userSelect: "none",
            willChange: "transform",
          }}
        >
          {projects.map((project, i) => (
            <PortfolioCard key={i} project={project} active={active === i} cardWidth={cardWidth} />
          ))}
        </div>
      </motion.div>

      {/* Controls */}
      <div style={{ maxWidth: "1280px", margin: "1.5rem auto 0", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "1rem" }}>
        {/* Dots */}
        <div style={{ display: "flex", gap: "8px", marginRight: "auto" }}>
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                background: i === active ? "#F5C518" : "#2A2A2A",
                border: "none",
                borderRadius: 0,
                cursor: "pointer",
                transition: "width 0.3s, background 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Arrow buttons — hidden on mobile */}
        <div className="hidden md:flex" style={{ gap: "1rem" }}>
          <ArrowBtn onClick={() => goTo(active - 1)} disabled={active === 0}>
            <ArrowLeft size={18} />
          </ArrowBtn>
          <ArrowBtn onClick={() => goTo(active + 1)} disabled={active === projects.length - 1}>
            <ArrowRight size={18} />
          </ArrowBtn>
        </div>
      </div>

      {/* Swipe hint — mobile only */}
      {!hasInteracted && (
        <div
          className="swipe-hint md:hidden"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "1rem",
            fontFamily: "var(--font-space-mono)",
            fontSize: "10px",
            color: "#555555",
            letterSpacing: "0.12em",
          }}
        >
          <span>←</span>
          <span>DESLIZE PARA VER MAIS</span>
          <span>→</span>
        </div>
      )}
    </section>
  );
}

function PortfolioCard({
  project,
  active,
  cardWidth,
}: {
  project: (typeof projects)[0];
  active: boolean;
  cardWidth: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(project.image);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        width: `${cardWidth}px`,
        height: "clamp(320px, 65vw, 600px)",
        position: "relative",
        overflow: "hidden",
        border: hovered ? "1.5px solid #F5C518" : "1px solid #2A2A2A",
        transition: "border-color 0.3s",
      }}
    >
      <Image
        src={imgSrc}
        alt={project.name}
        fill
        unoptimized
        onError={() => setImgSrc(project.fallback)}
        style={{
          objectFit: "cover",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}
      />

      {/* Permanent gradient + info — always visible (mobile-friendly) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.3) 45%, transparent 70%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
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
            marginBottom: "8px",
          }}
        >
          {project.category}
        </span>
        <div style={{ width: "24px", height: "1.5px", background: "#F5C518", marginBottom: "10px" }} />
        <h3
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "18px",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            margin: "0 0 6px",
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "12px",
            color: "#888888",
            margin: "0 0 14px",
          }}
        >
          {project.disciplines}
        </p>
        {/* "Ver projeto" — only on hover (desktop) */}
        <a
          href="#contato"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 500,
            fontSize: "12px",
            color: "#F5C518",
            textDecoration: "none",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.3s, transform 0.3s",
          }}
        >
          Ver projeto →
        </a>
      </div>
    </div>
  );
}

function ArrowBtn({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "48px",
        height: "48px",
        background: hovered && !disabled ? "#F5C518" : "#141414",
        border: "1px solid #2A2A2A",
        borderRadius: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.3 : 1,
        transition: "background 0.2s",
        color: hovered && !disabled ? "#0D0D0D" : "#F5C518",
      }}
    >
      {children}
    </button>
  );
}
