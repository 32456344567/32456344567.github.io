"use client";

import { ArrowUpRight, CheckCircle2, ShieldCheck, Factory, Cpu, Flame } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Introducción */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase block">
                01 — PERFIL PROFESIONAL
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
                Hola, soy Angelo.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Ingeniero Químico con sólida formación analítica y experiencia directa en turnos continuos de planta industrial. 
              Mi enfoque une el <strong className="font-semibold text-neutral-900">rigor técnico de los balances de materia y la química industrial</strong> con herramientas modernas de analítica de datos, Lean Six Sigma y automatización digital.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Actualmente como <strong className="font-semibold text-neutral-900">Técnico de PTAR en Incarpalm</strong>, aseguro el 100% de cumplimiento normativo ambiental TULSMA, optimizo la dosificación en sistemas DAF y coordino la confiabilidad mecánica de bombas y sopladores mediante SAP PM. En mis pasantías y cargos previos en <strong className="font-semibold text-neutral-900">Symrise AG</strong>, <strong className="font-semibold text-neutral-900">Agua Azul Ec.</strong>, <strong className="font-semibold text-neutral-900">MAATE</strong> y <strong className="font-semibold text-neutral-900">Camaronera Montealto</strong>, lideré diagnósticos de resguardos de maquinaria (Machine Security en 25+ equipos), protocolos LOTO, fiscalizaciones ambientales y control de calidad bajo normas NTE INEN.
            </p>

            {/* Enlaces de Perfil */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="/assets/CV_Angelo_Apolo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-mono font-medium hover:bg-neutral-800 transition-all shadow-sm"
              >
                <span>Descargar CV Oficial</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.linkedin.com/in/angelo-a-44a9a323b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-100 text-neutral-700 rounded-xl text-xs font-mono font-medium hover:bg-neutral-200 transition-all border border-neutral-200"
              >
                <span>Perfil de LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Columna Derecha: 4 Pilares de Excelencia - Subtemas con tipografía estandarizada */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-neutral-900">
                Operaciones Continuas
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Supervisión en turnos rotativos 24/7, reactores biológicos, clarificación DAF y gestión en SAP PM.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-neutral-900">
                Datos & Gemelos Digitales
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Modelado en Python, tableros en Power BI y macros VBA para eliminar tiempos muertos de reportabilidad.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-neutral-900">
                Seguridad Industrial & HSE
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Bloqueo LOTO, resguardos en 25+ máquinas, matrices IPER y cero accidentes laborales.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-neutral-900">
                Lean Six Sigma & Calidad
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Green Belt certificado, estandarización BPMN 2.0, análisis de causa raíz y reducción de scrap.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
