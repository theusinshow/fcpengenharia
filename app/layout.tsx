import type { Metadata } from "next";
import { Sora, Raleway } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FCP Engenharia Elétrica | Criciúma SC",
  description:
    "Projetos elétricos, laudos técnicos, periciais judiciais, automação e geração fotovoltaica em Criciúma, SC. Engenharia elétrica premium com excelência técnica.",
  keywords:
    "engenharia elétrica Criciúma SC, projeto elétrico, laudo técnico SPDA, CREA, automação industrial, painel elétrico, geração fotovoltaica",
  authors: [{ name: "FCP Engenharia Elétrica" }],
  openGraph: {
    title: "FCP Engenharia Elétrica | Criciúma SC",
    description:
      "Da planta ao padrão aprovado. Engenharia elétrica premium em Santa Catarina.",
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
    <html lang="pt-BR" className={`${sora.variable} ${raleway.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService"],
              name: "FCP Engenharia Elétrica",
              description:
                "Escritório de engenharia elétrica premium em Criciúma, SC.",
              telephone: "+55-48-99956-9631",
              email: "eng.fernandocoanp@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Criciúma",
                addressRegion: "SC",
                addressCountry: "BR",
              },
              url: "https://fcpengenharia.com.br",
              sameAs: ["https://www.instagram.com/FCP_EngEletrica"],
            }),
          }}
        />
      </head>
      <body className={`${sora.variable} ${raleway.variable} antialiased bg-white text-[#2D3436]`}>
        {children}
      </body>
    </html>
  );
}
