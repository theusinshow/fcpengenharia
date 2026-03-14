"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Início", section: "hero" },
  { href: "#servicos", label: "Serviços", section: "servicos" },
  { href: "#portfolio", label: "Portfólio", section: "portfolio" },
  { href: "#sobre", label: "Sobre", section: "sobre" },
  { href: "#contato", label: "Contato", section: "contato" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver para detectar seção ativa
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.section))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "#0D0D0D",
        borderBottom: "1px solid #1C1C1C",
        transition: "box-shadow 0.3s",
      }}
    >
      <div
        className="header-bar"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "flex-start", width: "fit-content" }}
        >
          <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "22px", color: "#F0EDE8", letterSpacing: "-0.02em", lineHeight: 1 }}>
            FCP
          </span>
          <span style={{ display: "block", width: "36px", height: "2px", background: "#F5C518", marginTop: "3px" }} />
          <span style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", color: "#888888", letterSpacing: "0.12em", marginTop: "2px" }}>
            ENGENHARIA <span style={{ color: "#F5C518" }}>·</span> ELÉTRICA
          </span>
        </a>

        {/* Desktop nav — coluna central */}
        <nav className="hidden md:flex" style={{ alignItems: "center", justifyContent: "center", gap: "40px" }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={activeSection === link.section}
            />
          ))}
        </nav>

        {/* CTA + mobile hamburger — coluna direita */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "1rem" }}>
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "1px", height: "20px", background: "#2A2A2A" }} />
            <OutlineBtn href="#contato" label="Orçamento →" />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{ color: "#F0EDE8", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu-overlay"
          >
            <nav style={{ display: "flex", flexDirection: "column", padding: "2rem 2rem 0" }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollTo(link.href); }}
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 700,
                    fontSize: "26px",
                    color: activeSection === link.section ? "#F5C518" : "#F0EDE8",
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                    padding: "1rem 0",
                    borderBottom: "1px solid #1C1C1C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                  <span style={{ color: "#F5C518", fontSize: "20px" }}>→</span>
                </a>
              ))}
            </nav>

            {/* CTA at bottom */}
            <div style={{ padding: "2rem", marginTop: "auto" }}>
              <a
                href="#contato"
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollTo("#contato"); }}
                style={{
                  display: "block",
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#0D0D0D",
                  background: "#F5C518",
                  padding: "16px 24px",
                  textDecoration: "none",
                  textAlign: "center",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                SOLICITAR ORÇAMENTO →
              </a>
              <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "11px", color: "#555555", textAlign: "center", letterSpacing: "0.1em" }}>
                (48) 99956-9631
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isHighlighted = active || hovered;

  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); scrollTo(href); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-space-grotesk)",
        fontWeight: 500,
        fontSize: "12px",
        color: isHighlighted ? "#F5C518" : "#FFFFFF",
        textDecoration: "none",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        paddingBottom: "4px",
        borderBottom: isHighlighted ? "2px solid #F5C518" : "2px solid transparent",
        transition: "color 0.3s, border-color 0.3s",
      }}
    >
      {label}
    </a>
  );
}

function OutlineBtn({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); scrollTo(href); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-space-grotesk)",
        fontWeight: 600,
        fontSize: "12px",
        color: hovered ? "#0D0D0D" : "#F5C518",
        border: "1px solid #F5C518",
        borderRadius: 0,
        padding: "8px 20px",
        textDecoration: "none",
        background: hovered ? "#F5C518" : "transparent",
        transition: "background 0.25s, color 0.25s",
        display: "inline-block",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </a>
  );
}
