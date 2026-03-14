"use client";

import { Instagram } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid #1C1C1C",
        padding: "3rem 1.25rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "2rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid #1C1C1C",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "22px", color: "#F0EDE8", letterSpacing: "-0.02em", lineHeight: 1 }}>
              FCP
            </span>
            <span style={{ display: "block", width: "100%", height: "2px", background: "#F5C518", margin: "3px 0" }} />
            <span style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", color: "#555555", letterSpacing: "0.12em" }}>
              ENGENHARIA ELÉTRICA · CRICIÚMA SC
            </span>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 400, fontSize: "13px",
                  color: "#555555", textDecoration: "none", transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5C518")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/FCP_EngEletrica"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-space-mono)", fontSize: "11px", color: "#555555", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5C518")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
          >
            <Instagram size={16} strokeWidth={1.5} />
            @FCP_EngEletrica
          </a>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem" }}>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", color: "#2A2A2A", margin: 0, letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} FCP Engenharia Elétrica. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", margin: 0, letterSpacing: "0.06em" }}>
            <span style={{ color: "#2A2A2A" }}>Desenvolvido por </span>
            <span style={{ color: "#2A2A2A" }}>Coded by M</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
