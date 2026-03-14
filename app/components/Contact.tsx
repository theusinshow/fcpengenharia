"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "", email: "", phone: "", projectType: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const msg = `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${form.name}\nE-mail: ${form.email}\nTelefone: ${form.phone}\nTipo de Projeto: ${form.projectType}\nMensagem: ${form.message}`;
    window.open(`https://wa.me/5548999569631?text=${encodeURIComponent(msg)}`, "_blank");
    setStatus("success");
    setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  return (
    <section id="contato" style={{ background: "#0D0D0D", padding: "6rem 2rem" }}>
      <div ref={ref} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: "var(--font-space-mono)", fontSize: "12px", color: "#F5C518", letterSpacing: "0.15em", marginBottom: "1.5rem" }}
        >
          [ 05 — CONTATO ]
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 52px)", color: "#F0EDE8", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "4rem", maxWidth: "600px" }}
        >
          Vamos falar sobre o seu projeto.
        </motion.h2>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}
          className="contact-grid"
        >
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <ContactItem icon={<Phone size={18} color="#F5C518" strokeWidth={1.5} />} label="Telefone" value="(48) 99956-9631" href="tel:+5548999569631" />
            <Separator />
            <ContactItem icon={<MessageCircle size={18} color="#F5C518" strokeWidth={1.5} />} label="WhatsApp" value="(48) 99956-9631" href="https://wa.me/5548999569631" />
            <Separator />
            <ContactItem icon={<Mail size={18} color="#F5C518" strokeWidth={1.5} />} label="E-mail" value="eng.fernandocoanp@gmail.com" href="mailto:eng.fernandocoanp@gmail.com" />
            <Separator />
            <ContactItem icon={<MapPin size={18} color="#F5C518" strokeWidth={1.5} />} label="Localização" value="Criciúma, Santa Catarina" />

            <div style={{ width: "40px", height: "1px", background: "#F5C518", margin: "1.5rem 0" }} />
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "#555555", lineHeight: 1.6, margin: 0 }}>
              Instagram:{" "}
              <a href="https://www.instagram.com/FCP_EngEletrica" target="_blank" rel="noopener noreferrer" style={{ color: "#888888", textDecoration: "none" }}>
                @FCP_EngEletrica
              </a>
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <FieldInput label="Nome" name="name" value={form.name} onChange={handleChange} placeholder="Seu nome" required />
                <FieldInput label="E-mail" name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <FieldInput label="Telefone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(48) 99999-9999" required />
                <FieldSelect label="Tipo de Projeto" name="projectType" value={form.projectType} onChange={handleChange} />
              </div>
              <FieldTextarea label="Mensagem" name="message" value={form.message} onChange={handleChange} placeholder="Descreva seu projeto ou necessidade..." />

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  fontFamily: "var(--font-space-grotesk)", fontWeight: 700, fontSize: "15px",
                  color: "#0D0D0D", background: "#F5C518", border: "none", borderRadius: 0,
                  padding: "16px 32px", cursor: status === "sending" ? "not-allowed" : "pointer",
                  opacity: status === "sending" ? 0.6 : 1, transition: "background 0.2s",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => { if (status !== "sending") e.currentTarget.style.background = "#B8920E"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#F5C518"; }}
              >
                {status === "sending" ? "Enviando..." : "Enviar Solicitação →"}
              </button>

              {status === "success" && (
                <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "12px", color: "#25D366", textAlign: "center", letterSpacing: "0.08em" }}>
                  MENSAGEM ENVIADA VIA WHATSAPP ✓
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

function Separator() {
  return (
    <div style={{ height: "1px", background: "rgba(245,197,24,0.15)", margin: "1rem 0" }} />
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "0.75rem 0" }}>
      <div style={{ marginTop: "2px", flexShrink: 0 }}>{icon}</div>
      <div>
        <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "10px", color: "#555555", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 2px" }}>{label}</p>
        <p style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 400, fontSize: "15px", color: "#F0EDE8", margin: 0 }}>{value}</p>
      </div>
    </div>
  );
  if (href) return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none" }}>{inner}</a>;
  return <div>{inner}</div>;
}

const fieldLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-space-mono)", fontSize: "10px", color: "#555555",
  letterSpacing: "0.12em", display: "block", marginBottom: "6px", textTransform: "uppercase",
};

const baseInputStyle: React.CSSProperties = {
  width: "100%", background: "#141414", border: "1px solid #2A2A2A", borderRadius: 0,
  padding: "12px 16px", fontFamily: "var(--font-inter)", fontWeight: 400,
  fontSize: "14px", color: "#F0EDE8", outline: "none", boxSizing: "border-box",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

function FieldInput({ label, name, value, onChange, placeholder, type = "text", required }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label style={fieldLabelStyle}>{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        placeholder={placeholder} required={required}
        style={baseInputStyle}
        onFocus={(e) => { e.currentTarget.style.borderColor = "#F5C518"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(245,197,24,0.1)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.boxShadow = "none"; }}
      />
    </div>
  );
}

function FieldSelect({ label, name, value, onChange }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div>
      <label style={fieldLabelStyle}>{label}</label>
      <select
        name={name} value={value} onChange={onChange}
        style={baseInputStyle}
        onFocus={(e) => { e.currentTarget.style.borderColor = "#F5C518"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(245,197,24,0.1)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.boxShadow = "none"; }}
      >
        <option value="">Selecione</option>
        <option>Projetos Elétricos</option>
        <option>Laudos Técnicos</option>
        <option>Periciais Judiciais</option>
        <option>Automação</option>
        <option>Energia Solar</option>
        <option>PPCI</option>
        <option>Outro</option>
      </select>
    </div>
  );
}

function FieldTextarea({ label, name, value, onChange, placeholder }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label style={fieldLabelStyle}>{label}</label>
      <textarea
        name={name} value={value} onChange={onChange} rows={5}
        placeholder={placeholder}
        style={{ ...baseInputStyle, resize: "none" }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "#F5C518"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(245,197,24,0.1)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.boxShadow = "none"; }}
      />
    </div>
  );
}
