"use client";

const stats = [
  { display: "50+", label: "PROJETOS ENTREGUES" },
  { display: "5", label: "ESPECIALIDADES" },
  { display: "CREA-SC", label: "REGISTRADO" },
  { display: "CRICIÚMA SC", label: "LOCALIZAÇÃO" },
];

export default function Stats() {
  return (
    <section
      style={{
        background: "#141414",
        borderTop: "1px solid #F5C518",
        padding: "3.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gap: "2rem",
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontWeight: 700,
                  fontSize: "clamp(22px, 3.5vw, 34px)",
                  color: "#F5C518",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "8px",
                  margin: "0 0 8px",
                }}
              >
                {stat.display}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 400,
                  fontSize: "11px",
                  color: "#888888",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
