"use client";

export default function Hero() {
  function scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100svh",
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
        style={{ position: "absolute", inset: 0, opacity: 0.6, zIndex: 0 }}
      />

      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.2, zIndex: 1 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://static.wixstatic.com/media/b817bd_063cba0d64d742a599d965844c46ea61~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_95/file.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Content — rendered static (no Framer Motion) */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            fontFamily: "var(--font-space-mono)",
            fontSize: "11px",
            color: "#F5C518",
            border: "1px solid #F5C518",
            padding: "6px 16px",
            letterSpacing: "0.15em",
            marginBottom: "2rem",
          }}
        >
          [ CREA-SC · CRICIÚMA, SC ]
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 700,
            fontSize: "clamp(36px, 9vw, 80px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "#F0EDE8",
            marginBottom: "1.25rem",
          }}
        >
          Engenharia{" "}
          <span style={{ color: "#F5C518" }}>Elétrica</span>
          <br />
          de Alto Padrão.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: "clamp(14px, 3vw, 18px)",
            color: "#888888",
            maxWidth: "560px",
            margin: "0 auto 2.25rem",
            lineHeight: 1.65,
          }}
        >
          Projetos elétricos completos — do laudo à aprovação — para
          construtoras, indústrias e empreendedores exigentes de SC.
        </p>

        {/* CTAs — empilhados em mobile */}
        <div
          className="hero-ctas"
        >
          <a
            href="#contato"
            onClick={(e) => { e.preventDefault(); scrollTo("#contato"); }}
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "14px",
              color: "#0D0D0D",
              background: "#F5C518",
              borderRadius: 0,
              padding: "16px 32px",
              textDecoration: "none",
              display: "block",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Solicitar Orçamento →
          </a>
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); scrollTo("#portfolio"); }}
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 500,
              fontSize: "14px",
              color: "#FFFFFF",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: 0,
              padding: "16px 32px",
              textDecoration: "none",
              display: "block",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Ver Portfólio
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.7,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "9px",
            color: "#F5C518",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          SCROLL
        </span>
        <div
          className="scroll-bounce"
          style={{ width: "1px", height: "40px", background: "#F5C518", opacity: 0.7 }}
        />
      </div>

      {/* Bottom separator */}
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "1px",
          background: "rgba(245,197,24,0.2)",
        }}
      />
    </section>
  );
}
