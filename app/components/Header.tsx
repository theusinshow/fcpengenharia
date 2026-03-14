"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        background: scrolled ? "rgba(13,13,13,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #2A2A2A" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "flex-start" }}
        >
          <span style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "22px", color: "#F0EDE8", letterSpacing: "-0.02em", lineHeight: 1 }}>
            FCP
          </span>
          <span style={{ display: "block", width: "100%", height: "2px", background: "#F5C518", marginTop: "3px" }} />
          <span style={{ fontFamily: "var(--font-space-mono)", fontSize: "9px", color: "#888888", letterSpacing: "0.12em", marginTop: "2px" }}>
            ENGENHARIA ELÉTRICA
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <OutlineBtn href="#contato" label="Orçamento" />
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{ color: "#F0EDE8", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: "#141414", borderTop: "1px solid #2A2A2A", overflow: "hidden" }}
          >
            <nav style={{ display: "flex", flexDirection: "column", padding: "1.5rem 2rem", gap: "1.25rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollTo(link.href); }}
                  style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "16px", color: "#888888", textDecoration: "none" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollTo("#contato"); }}
                style={{
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "14px",
                  color: "#0D0D0D", background: "#F5C518", borderRadius: 0,
                  padding: "12px 20px", textDecoration: "none", textAlign: "center", display: "block",
                }}
              >
                Solicitar Orçamento →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); scrollTo(href); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-space-grotesk)", fontWeight: 400, fontSize: "14px",
        color: hovered ? "#F5C518" : "#888888",
        textDecoration: "none", transition: "color 0.2s",
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
        fontFamily: "var(--font-space-grotesk)", fontWeight: 600, fontSize: "14px",
        color: hovered ? "#0D0D0D" : "#F5C518",
        border: "1px solid #F5C518", borderRadius: 0,
        padding: "8px 20px", textDecoration: "none",
        background: hovered ? "#F5C518" : "transparent",
        transition: "background 0.2s, color 0.2s", display: "inline-block",
      }}
    >
      {label}
    </a>
  );
}
