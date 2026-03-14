"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    category: "SAÚDE",
    name: "UBS Dilnei Sonego",
    disciplines: "Elétrico · Lógico · BIM",
    image: "https://static.wixstatic.com/media/b817bd_a334d40d6003449c912aebbc0992b497~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
  {
    category: "SAÚDE",
    name: "UBS — Modelo BIM",
    disciplines: "BIM · Climatização · Elétrico",
    image: "https://static.wixstatic.com/media/b817bd_55412ed77f0f4b669e4f292f146435cd~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
  {
    category: "PATRIMÔNIO",
    name: "Restauro Histórico",
    disciplines: "Elétrico · SPDA · Luminotécnico",
    image: "https://static.wixstatic.com/media/b817bd_d6accb1c2d91457f873ac8204f8866cc~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
  {
    category: "PATRIMÔNIO",
    name: "Patrimônio — Planta BIM",
    disciplines: "Elétrico · Lógico · Entrada de Energia",
    image: "https://static.wixstatic.com/media/b817bd_66237b46fd394d82b0f7fb389e559a4f~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
  {
    category: "ESPORTIVO",
    name: "Sede Esportiva",
    disciplines: "Elétrico · PPCI · Automação",
    image: "https://static.wixstatic.com/media/b817bd_3670115a62c64f4d8eb39cb58f623d89~mv2.jpeg/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
  {
    category: "ESPORTIVO",
    name: "Sede — Detalhe Técnico",
    disciplines: "Luminotécnico · Campo de Futebol",
    image: "https://static.wixstatic.com/media/b817bd_a3cec119ec3e45628529609ebd54dda2~mv2.png/v1/fill/w_1200,h_800,al_c,q_95/file.jpg",
  },
];

export default function Portfolio() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, amount: 0.1 });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragStartScroll = useRef(0);

  // Track active card via scroll position
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const handler = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.offsetWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      children.forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft + child.offsetWidth / 2 - center);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);

  const goTo = useCallback((idx: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.children[idx] as HTMLElement;
    if (card) el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, []);

  // Mouse drag for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = carouselRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartScroll.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX.current === null) return;
    const el = carouselRef.current;
    if (!el) return;
    el.scrollLeft = dragStartScroll.current - (e.clientX - dragStartX.current);
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section
      id="portfolio"
      style={{
        background: "#0A0A0A",
        overflow: "hidden", // CRÍTICO: contém o carrossel
        padding: "5rem 0 3rem",
      }}
    >
      {/* Section header */}
      <div ref={headerRef} style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", marginBottom: "2.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div style={{ width: "40px", height: "1.5px", background: "#F5C518", marginBottom: "16px" }} />
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", color: "#F5C518", letterSpacing: "0.15em", marginBottom: "1rem" }}>
            [ 03 — PORTFÓLIO ]
          </p>
          <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "clamp(26px, 5vw, 48px)", color: "#F0EDE8", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Projetos que resistem à<br />inspeção técnica.
          </h2>
        </motion.div>
      </div>

      {/* Carousel — CSS scroll-snap, overflow contained */}
      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          display: "flex",
          gap: "4px",
          overflowX: "auto",
          overflowY: "hidden",
          overscrollBehavior: "contain",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          cursor: isDragging ? "grabbing" : "grab",
          height: "clamp(300px, 55vw, 560px)",
          paddingLeft: "1.5rem",
        } as React.CSSProperties}
      >
        {projects.map((project, i) => (
          <PortfolioCard key={i} project={project} />
        ))}
        {/* Trailing spacer */}
        <div style={{ flexShrink: 0, width: "1.5rem" }} />
      </div>

      {/* Controls */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "1.5rem auto 0",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Mobile swipe hint */}
        <p
          className="md:hidden"
          style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", color: "#555555", letterSpacing: "0.12em" }}
        >
          ← DESLIZE →
        </p>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px" }}>
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === activeIndex ? "24px" : "8px",
                height: "8px",
                background: i === activeIndex ? "#F5C518" : "#2A2A2A",
                border: "none",
                borderRadius: 0,
                cursor: "pointer",
                transition: "width 0.3s, background 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Arrow buttons — desktop only */}
        <div className="hidden md:flex" style={{ gap: "8px" }}>
          <ArrowBtn onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} label="←" />
          <ArrowBtn onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === projects.length - 1} label="→" />
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ project }: { project: (typeof projects)[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      style={{
        flexShrink: 0,
        width: "clamp(260px, 78vw, 420px)",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        scrollSnapAlign: "start",
        border: "1px solid #2A2A2A",
      }}
    >
      {/* Fallback background */}
      <div style={{ position: "absolute", inset: 0, background: "#1C1C1C" }} />

      {/* Image */}
      {!imgError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          onError={() => setImgError(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(13,13,13,0.96) 0%, rgba(13,13,13,0.4) 50%, transparent 100%)",
        }}
      />

      {/* Info — always visible (mobile-friendly) */}
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          padding: "1.5rem",
        }}
      >
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-space-mono)",
            fontSize: "10px",
            color: "#F5C518",
            letterSpacing: "0.15em",
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
            fontSize: "clamp(16px, 3vw, 22px)",
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
            margin: 0,
          }}
        >
          {project.disciplines}
        </p>
      </div>
    </div>
  );
}

function ArrowBtn({ onClick, disabled, label }: { onClick: () => void; disabled: boolean; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "48px", height: "48px",
        background: hovered && !disabled ? "#F5C518" : "#141414",
        border: "1px solid #2A2A2A",
        borderRadius: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.3 : 1,
        transition: "background 0.2s",
        color: hovered && !disabled ? "#0D0D0D" : "#F5C518",
        fontFamily: "var(--font-space-mono)",
        fontSize: "16px",
      }}
    >
      {label}
    </button>
  );
}
