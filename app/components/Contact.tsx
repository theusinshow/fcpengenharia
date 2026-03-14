"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Build WhatsApp message as fallback if no EmailJS configured
    const msg = `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${form.name}\nTelefone: ${form.phone}\nE-mail: ${form.email}\nServiço: ${form.service}\nMensagem: ${form.message}`;
    const encoded = encodeURIComponent(msg);

    // Open WhatsApp with the form data
    window.open(`https://wa.me/5548999569631?text=${encoded}`, "_blank");
    setStatus("success");
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const inputClass =
    "w-full bg-white border border-[#DFE6E9] rounded-xl px-4 py-3 font-sora font-light text-[#2D3436] text-sm placeholder-[#868D90] focus:outline-none focus:border-[#116DFF] focus:ring-2 focus:ring-[#116DFF]/10 transition-all duration-200";

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#2D3436]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-raleway font-semibold text-[#993500] text-sm uppercase tracking-widest mb-4">
            Fale conosco
          </span>
          <h2 className="font-sora font-light text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Solicite seu{" "}
            <span className="font-semibold text-[#116DFF]">Orçamento</span>
          </h2>
          <p className="font-sora font-light text-[#868D90] text-lg max-w-2xl mx-auto">
            Entre em contato e receba uma proposta personalizada para seu projeto.
            Atendemos construtoras, indústrias e empreendedores em Santa Catarina.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sora text-xs font-medium text-[#868D90] uppercase tracking-wider mb-1.5">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-sora text-xs font-medium text-[#868D90] uppercase tracking-wider mb-1.5">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(48) 99999-9999"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block font-sora text-xs font-medium text-[#868D90] uppercase tracking-wider mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block font-sora text-xs font-medium text-[#868D90] uppercase tracking-wider mb-1.5">
                  Serviço de interesse *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Projetos Elétricos">Projetos Elétricos</option>
                  <option value="Laudos Técnicos">Laudos Técnicos</option>
                  <option value="Periciais Judiciais">Periciais Judiciais</option>
                  <option value="Automação">Automação</option>
                  <option value="Geração de Energia & PPCI">Geração de Energia & PPCI</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block font-sora text-xs font-medium text-[#868D90] uppercase tracking-wider mb-1.5">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Descreva brevemente seu projeto ou necessidade..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#116DFF] text-white font-sora font-semibold text-base py-4 rounded-xl hover:bg-[#0d5fd4] transition-all duration-300 hover:shadow-lg hover:shadow-[#116DFF]/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Enviando..." : "Enviar pelo WhatsApp"}
              </button>

              {status === "success" && (
                <p className="text-[#37D366] text-sm text-center font-sora">
                  Mensagem enviada! Aguarde nosso retorno em breve.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/5548999569631"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#37D366]/10 border border-[#37D366]/30 rounded-2xl p-6 hover:bg-[#37D366]/20 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-[#37D366] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-sora font-semibold text-white text-sm mb-0.5">WhatsApp</p>
                <p className="font-sora font-light text-[#37D366] text-base">(48) 99956-9631</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:eng.fernandocoanp@gmail.com"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-[#116DFF] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-sora font-semibold text-white text-sm mb-0.5">E-mail</p>
                <p className="font-sora font-light text-[#116DFF] text-sm break-all">
                  eng.fernandocoanp@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#993500] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-sora font-semibold text-white text-sm mb-0.5">Localização</p>
                <p className="font-sora font-light text-[#868D90] text-sm">
                  Criciúma, Santa Catarina — SC
                </p>
              </div>
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/FCP_EngEletrica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <p className="font-sora font-semibold text-white text-sm mb-0.5">Instagram</p>
                <p className="font-sora font-light text-[#868D90] text-sm">@FCP_EngEletrica</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
