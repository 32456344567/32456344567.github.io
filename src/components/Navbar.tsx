"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, FileText, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F8]/85 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Identidad */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-sm group-hover:bg-neutral-800 transition-colors">
              AA
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-900 tracking-tight text-sm sm:text-base group-hover:text-neutral-600 transition-colors">
                Angelo Apolo
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                Ingeniero Químico · Procesos & Datos
              </span>
            </div>
          </Link>

          {/* Links Principales (Desktop) - 100% Español */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <a href="#sobre-mi" className="hover:text-neutral-950 transition-colors">
              Sobre Mí
            </a>
            <a href="#stack" className="hover:text-neutral-950 transition-colors flex items-center gap-1.5">
              <span>Stack Técnico</span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase bg-neutral-100 text-neutral-700 rounded border border-neutral-200">
                Tabla Periódica
              </span>
            </a>
            <a href="#proyectos" className="hover:text-neutral-950 transition-colors">
              Proyectos
            </a>
            <a href="#experiencia" className="hover:text-neutral-950 transition-colors">
              Experiencia
            </a>
            <a href="#metricas" className="hover:text-neutral-950 transition-colors">
              Resultados
            </a>
            <a href="#contacto" className="hover:text-neutral-950 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Acciones Rápidas */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/assets/CV_Angelo_Apolo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200/80 rounded-lg border border-neutral-200 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Ver CV (PDF)</span>
            </a>
            <a
              href="https://wa.me/593969763084?text=Hola%20Ing.%20Angelo%20Apolo,%20revisamos%20su%20portafolio%20y%20nos%20gustar%C3%ADa%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-sm transition-all"
            >
              <span>Conversemos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Botón Móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú Móvil desplegable */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white/95 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-700">
            <a href="#sobre-mi" onClick={() => setIsOpen(false)} className="py-1">Sobre Mí</a>
            <a href="#stack" onClick={() => setIsOpen(false)} className="py-1 flex items-center justify-between">
              <span>Stack Técnico</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 rounded">Tabla Periódica</span>
            </a>
            <a href="#proyectos" onClick={() => setIsOpen(false)} className="py-1">Proyectos</a>
            <a href="#experiencia" onClick={() => setIsOpen(false)} className="py-1">Experiencia</a>
            <a href="#metricas" onClick={() => setIsOpen(false)} className="py-1">Resultados</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="py-1">Contacto</a>
          </nav>
          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <a
              href="/assets/CV_Angelo_Apolo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 text-xs font-mono font-medium bg-neutral-100 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>Ver CV Oficial (PDF)</span>
            </a>
            <a
              href="https://wa.me/593969763084"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 text-xs font-medium bg-neutral-900 text-white rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
