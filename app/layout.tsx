import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FCP Engenharia Elétrica | Criciúma SC",
  description:
    "Projetos elétricos, laudos técnicos, periciais judiciais, automação e geração fotovoltaica em Criciúma, SC. Engenharia elétrica de alto padrão.",
  keywords:
    "engenharia elétrica Criciúma SC, projeto elétrico, laudo técnico SPDA, CREA-SC, automação industrial, painel elétrico, energia solar fotovoltaica",
  authors: [{ name: "FCP Engenharia Elétrica" }],
  openGraph: {
    title: "FCP Engenharia Elétrica | Criciúma SC",
    description: "Engenharia elétrica de alto padrão. Precisão que ilumina.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService"],
              name: "FCP Engenharia Elétrica",
              description: "Engenharia elétrica de alto padrão em Criciúma, SC.",
              telephone: "+55-48-99956-9631",
              email: "eng.fernandocoanp@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Criciúma",
                addressRegion: "SC",
                addressCountry: "BR",
              },
              sameAs: ["https://www.instagram.com/FCP_EngEletrica"],
            }),
          }}
        />
      </head>
      <body
        style={{
          fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
          background: "#0D0D0D",
          color: "#F0EDE8",
        }}
      >
        {children}
      </body>
    </html>
  );
}
