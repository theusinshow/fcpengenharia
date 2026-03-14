"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "+50", label: "Projetos entregues" },
  { value: "5", label: "Áreas de atuação" },
  { value: "Criciúma", label: "Santa Catarina" },
  { value: "CREA-SC", label: "Registrado" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#2D3436] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <p className="font-sora font-bold text-5xl text-[#116DFF] mb-2">
                {stat.value}
              </p>
              <p className="font-sora font-light text-sm text-[#868D90] uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
