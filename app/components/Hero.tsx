"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0D0D0D",
      }}
    >
      {/* Blueprint grid */}
      <div
        className="blueprint-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.6 }}
      />

      {/* Background image with dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://static.wixstatic.com/media/b817bd_063cba0d64d742a599d965844c46ea61~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_95/file.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            display: "inline-block",
            fontFamily: "var(--font-space-mono)",
            fontSize: "11px",
            color: "#F5C518",
            border: "1px solid #F5C518",
            padding: "6px 16px",
            letterSpacing: "0.15em",
            marginBottom: "2.5rem",
          }}
        >
          [ CREA-SC · CRICIÚMA, SC ]
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...reveal}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "clamp(48px, 8vw, 80px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#F0EDE8",
            marginBottom: "1.5rem",
          }}
        >
          Engenharia{" "}
          <span style={{ color: "#F5C518" }}>Elétrica</span>
          <br />
          de Alto Padrão.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...reveal}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: "18px",
            color: "#888888",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.6,
          }}
        >
          Projetos elétricos completos — do laudo à aprovação — para
          construtoras, indústrias e empreendedores exigentes de SC.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <PrimaryBtn href="#contato" label="Solicitar Orçamento →" />
          <SecondaryBtn href="#portfolio" label="Ver Portfólio" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "10px",
            color: "#555555",
            letterSpacing: "0.15em",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "#F5C518",
            opacity: 0.6,
          }}
          className="scroll-line"
        />
      </motion.div>
    </section>
  );
}

function PrimaryBtn({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); }}
      style={{
        fontFamily: "var(--font-space-grotesk)",
        fontWeight: 600,
        fontSize: "15px",
        color: "#0D0D0D",
        background: "#F5C518",
        borderRadius: 0,
        padding: "14px 28px",
        textDecoration: "none",
        display: "inline-block",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#B8920E")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#F5C518")}
    >
      {label}
    </a>
  );
}

function SecondaryBtn({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); }}
      style={{
        fontFamily: "var(--font-space-grotesk)",
        fontWeight: 400,
        fontSize: "15px",
        color: "#F0EDE8",
        background: "transparent",
        border: "1px solid #2A2A2A",
        borderRadius: 0,
        padding: "14px 28px",
        textDecoration: "none",
        display: "inline-block",
        transition: "border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#F5C518";
        e.currentTarget.style.color = "#F5C518";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#2A2A2A";
        e.currentTarget.style.color = "#F0EDE8";
      }}
    >
      {label}
    </a>
  );
}
