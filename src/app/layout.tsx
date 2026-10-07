import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-editorial",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ing. Angelo Apolo · Ingeniero Químico · Procesos Industriales, Datos & Gemelos Digitales",
  description: "Portafolio oficial del Ing. Químico Angelo Apolo. Optimización de procesos industriales, Gemelos Digitales, Lean Six Sigma y analítica de datos en planta.",
  keywords: [
    "Ingeniero Químico",
    "Procesos Industriales",
    "PTAR",
    "Lean Six Sigma",
    "Gemelos Digitales",
    "Power BI",
    "Python",
    "SAP PM",
    "Guayaquil Ecuador",
  ],
  authors: [{ name: "Angelo Omar Apolo Chamba" }],
  icons: {
    icon: "/assets/img/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F9F9F8] text-[#18181B] font-sans selection:bg-black selection:text-white antialiased bg-grid-editorial">
        {children}
      </body>
    </html>
  );
}
