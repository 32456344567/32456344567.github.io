"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, FileText, CheckCircle2, QrCode } from "lucide-react";

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden border-b border-neutral-200">
      
      {/* Marca de agua tipográfica gigante en fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[17vw] font-serif font-black tracking-tighter text-neutral-900/[0.03] uppercase whitespace-nowrap">
          ANGELO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje Principal & Acciones */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Meta-tag de ubicación y profesión */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium">
                Angelo Omar Apolo Chamba · Guayaquil, Ecuador
              </span>
            </div>

            {/* Título Principal Editorial en Español */}
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl xl:text-8xl font-serif font-bold tracking-tight text-neutral-900 leading-[0.95]">
                Ingeniero <br />
                <span className="italic font-normal">Químico.</span>
              </h1>
              <p className="pt-2 text-sm sm:text-base font-mono text-neutral-600">
                Optimización de Procesos | Gemelos Digitales | Analítica Industrial | Lean Six Sigma
              </p>
            </div>

            {/* Filosofía / Propuesta de Valor */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-xl font-normal leading-relaxed">
              Ingeniero Químico con más de 2 años de experiencia directa en planta continua. 
              Especializado en traducir la complejidad química y operativa en <strong className="font-semibold text-neutral-900">operaciones de alta eficiencia, cero no conformidades y gemelos digitales con IA</strong>.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 text-white font-medium text-sm rounded-xl shadow-md hover:bg-neutral-800 transition-all hover:translate-y-[-1px]"
              >
                <span>Ver proyectos reales</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/593969763084?text=Hola%20Ing.%20Angelo%20Apolo,%20revisamos%20su%20portafolio%20y%20nos%20gustar%C3%ADa%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white text-neutral-900 font-medium text-sm rounded-xl border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50 transition-all"
              >
                <span>Conversemos</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="/assets/CV_Angelo_Apolo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-neutral-600 hover:text-neutral-900 font-mono text-xs transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Descargar CV (PDF)</span>
              </a>
            </div>

            {/* Credenciales Rápidas en Planta */}
            <div className="pt-4 border-t border-neutral-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-neutral-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Técnico de PTAR (Incarpalm)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Lean Six Sigma Green Belt</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>IA Aplicada (U. de Míchigan)</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta / Credencial 3D Interactiva & Avatar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            
            <div
              className="relative perspective-1000 cursor-pointer select-none"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Cuerda / Lanyard visual simulada */}
              <div className="hidden sm:block absolute -top-16 left-1/2 -translate-x-1/2 w-4 h-16 bg-neutral-300 rounded-b-sm border-x border-neutral-400 z-0 shadow-inner">
                <div className="w-6 h-3 bg-neutral-800 rounded-full mx-auto -mt-1 shadow-sm"></div>
              </div>

              {/* Gafete / ID Badge flotante estilo Apple / Neo-Brutalist Soft */}
              <div
                className="w-[300px] sm:w-[320px] bg-white rounded-2xl p-6 shadow-2xl border border-neutral-200/90 transition-transform duration-200 ease-out z-10"
                style={{
                  transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Ranura del gafete */}
                <div className="w-12 h-1.5 bg-neutral-200 rounded-full mx-auto mb-5"></div>

                {/* Foto / Retrato profesional */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 mb-5 border border-neutral-200 group">
                  <Image
                    src="/assets/img/angelo_apolo.png"
                    alt="Ing. Angelo Apolo"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-sm text-[10px] font-mono text-white">
                    EN VIVO
                  </div>
                </div>

                {/* Información de Identificación en Planta */}
                <div className="space-y-3">
                  <div>
                    <h2 className="font-bold text-neutral-900 text-lg leading-tight">
                      Angelo Apolo Chamba
                    </h2>
                    <p className="text-xs font-mono text-neutral-500 uppercase tracking-wide">
                      Ingeniero Químico · UTMACH
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 space-y-1.5 text-[11px] font-mono">
                    <div className="flex justify-between text-neutral-500">
                      <span>UBICACIÓN</span>
                      <strong className="text-neutral-800 font-medium">Guayaquil, Ecuador</strong>
                    </div>
                    <div className="flex justify-between text-neutral-500">
                      <span>ESPECIALIDAD</span>
                      <strong className="text-neutral-800 font-medium">Procesos & Datos</strong>
                    </div>
                    <div className="flex justify-between text-neutral-500">
                      <span>ESTADO</span>
                      <strong className="text-emerald-700 font-medium">Disponible para Contratación</strong>
                    </div>
                  </div>

                  {/* Pie de la tarjeta con Código QR & Verificación */}
                  <div className="pt-2 flex items-center justify-between border-t border-neutral-100 text-[11px] text-neutral-500">
                    <div className="flex items-center gap-1.5">
                      <QrCode className="w-4 h-4 text-neutral-700" />
                      <span className="font-mono text-[10px]">REGISTRO: IQ-2024-EC</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400">Efecto 3D</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-4 right-8 hidden lg:flex items-center gap-2 text-xs font-mono text-neutral-400 select-none">
        <span>RIGOR TÉCNICO & BASADO EN DATOS</span>
        <span className="text-neutral-300">|</span>
        <span>DESPLAZAR ↓</span>
      </div>

    </section>
  );
}
