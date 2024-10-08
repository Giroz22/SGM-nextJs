import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "SGM Consultores Indagine di Legge S.A.S. | Firma Legal Líder en Colombia - Derecho Laboral, Mercantil, Civil y Más",
  description:
    "SGM Consultores Indagine di Legge S.A.S., firma legal en Medellín, Colombia, fundada en 2022. Especializados en derecho procesal, laboral, mercantil, civil y más. Ofrecemos soluciones jurídicas eficaces y personalizadas con un enfoque en calidad, profesionalismo y compromiso social. Líderes en asesoría jurídica integral y conciliación.",
  keywords: [
    "SGM Consultores",
    "firma legal Colombia",
    "abogados en Medellín",
    "asesoría jurídica Medellín",
    "derecho procesal",
    "derecho laboral",
    "derecho mercantil",
    "derecho civil",
    "seguridad social",
    "prevención de riesgos",
    "conciliación legal",
    "servicios legales Colombia",
    "soluciones jurídicas",
    "bufete de abogados",
    "abogados especializados",
  ],
  authors: [{ name: "SGM Consultores Indagine di Legge S.A.S." }],
  openGraph: {
    title:
      "SGM Consultores Indagine di Legge S.A.S. | Firma Legal Líder en Colombia",
    description:
      "SGM Consultores es una firma legal en Medellín especializada en derecho procesal, laboral, mercantil y civil. Proveemos asesoría jurídica integral y soluciones personalizadas.",
    url: "https://sgmconsultoressas.com/",
    type: "website",
    images: [
      {
        url: "./imgs/logos/light-logo.png",
        width: 1200,
        height: 630,
        alt: "SGM Consultores Indagine di Legge S.A.S.",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: "https://sgmconsultoressas.com/",
    languages: {
      es: "https://sgmconsultoressas.com/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
