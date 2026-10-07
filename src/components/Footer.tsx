"use client";

import { useState } from "react";
import { ArrowUp, Copy, Check, MessageCircle, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("apoloangelo.ing@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="pt-24 pb-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sección de Llamado Principal */}
        <div className="border-b border-neutral-200 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            {/* Titular Editorial Gigante en Español */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase">
                06 — CONTACTO Y COLABORACIÓN
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-neutral-900 tracking-tight leading-[0.95]">
                Construyamos <br />
                <span className="italic font-normal">procesos eficientes.</span>
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                ¿Buscas optimizar un proceso industrial, controlar mermas con rigor analítico 
                o elevar la confiabilidad en planta continua? Conversemos directamente.
              </p>

              {/* Email con Copiado en 1 Clic */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-3 px-6 py-4 bg-neutral-900 text-white rounded-2xl hover:bg-neutral-800 transition-all shadow-md group"
                >
                  <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                  <span className="font-mono text-sm sm:text-base font-semibold">
                    apoloangelo.ing@gmail.com
                  </span>
                  <span className="ml-2 pl-3 border-l border-neutral-700 text-xs font-mono text-neutral-400 flex items-center gap-1">
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar correo</span>
                      </>
                    )}
                  </span>
                </button>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/593969763084?text=Hola%20Ing.%20Angelo%20Apolo,%20revisamos%20su%20portafolio%20y%20nos%20gustar%C3%ADa%20conversar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-2xl hover:bg-emerald-100 transition-all font-mono text-sm font-semibold"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>+593 969 763 084</span>
                </a>
              </div>
            </div>

            {/* Sello Circular Giratorio */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end items-center">
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* SVG de Texto Circular Girando */}
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[7.5px] font-mono uppercase tracking-[2.8px] fill-neutral-600 font-medium">
                      <textPath href="#circlePath">
                        • ING. QUÍMICO • GUAYAQUIL ECUADOR • PROCESOS & DATOS
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Centro del Sello */}
                <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">
                  AA
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sub-footer / Enlaces y Créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-500">
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/angelo-a-44a9a323b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/32456344567"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>Guayaquil, Ecuador</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-neutral-400">
              © {new Date().getFullYear()} Ing. Angelo Apolo · Desarrollado con Next.js y Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-all"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
