"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Activity, BarChart3, Gauge } from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "scada-gemelo",
    number: "01",
    title: "Gemelo Digital & SCADA con IA",
    category: "PTAR INDUSTRIAL & PROCESOS QUÍMICOS",
    description:
      "Desarrollo de un gemelo digital en tiempo real para la optimización de tratamiento de aguas residuales industriales (PTAR continua y sistema DAF). Modela balances estequiométricos de masa y predice la remoción de DBO, DQO y SST.",
    bullets: [
      "Simulación dinámica de dosificación de coagulante y floculante en el sistema DAF, reduciendo el consumo excesivo de químicos.",
      "Algoritmo predictivo de cumplimiento ambiental bajo normativa TULSMA Libro VI Anexo 1, alertando desviaciones con 4 horas de anticipación.",
      "Arquitectura analítica ligera con DuckDB, Python y visualización tipo HMI/SCADA industrial desplegada en Streamlit.",
    ],
    metrics: [
      { label: "Ahorro OPEX Químico", value: "-25%" },
      { label: "Cumplimiento TULSMA", value: "100%" },
      { label: "Registros Analizados", value: "500K+" },
    ],
    tags: ["Python", "Streamlit", "DuckDB", "SCADA Weintek", "TULSMA", "Balances de Masa"],
    image: "/assets/img/ptar_scada_railway.png",
    demoUrl: "https://github.com/32456344567",
    githubUrl: "https://github.com/32456344567",
  },
  {
    id: "copq-scrap",
    number: "02",
    title: "Control Estadístico & Reducción de Scrap (COPQ)",
    category: "LEAN SIX SIGMA & CALIDAD INDUSTRIAL",
    description:
      "Sistema de aseguramiento metrológico y análisis de Costos de Pobre Calidad (COPQ). Aplica la metodología DMAIC y gráficos de control para estabilizar líneas continuas de manufactura y empaque.",
    bullets: [
      "Implementación de matrices de causa raíz (Ishikawa 6M y 5 Porqués) para identificar fuentes sistemáticas de no conformidades.",
      "Cálculo continuo de capacidad del proceso (Cp, Cpk) y límites de control superior e inferior (UCL/LCL) en Minitab.",
      "Tablero gerencial interactivo en Power BI para seguimiento diario de scrap por lote, turno y operador.",
    ],
    metrics: [
      { label: "Reducción de Defectos", value: "-42%" },
      { label: "Ahorro Estimado Mensual", value: "$18.4K" },
      { label: "Capacidad Cpk Lograda", value: "1.45" },
    ],
    tags: ["Lean Six Sigma", "DMAIC", "Minitab", "Power BI", "NTE INEN", "CAPA / 8D"],
    image: "/assets/img/copq_tab1_resumen_ejecutivo.png",
    demoUrl: "https://github.com/32456344567",
    githubUrl: "https://github.com/32456344567",
  },
  {
    id: "oee-throughput",
    number: "03",
    title: "Optimización de OEE & Teoría de Restricciones",
    category: "OPERACIONES & MANTENIMIENTO INDUSTRIAL",
    description:
      "Modelo analítico para la elevación de la Efectividad Total del Equipo (OEE) en plantas industriales continuas, descomponiendo la disponibilidad mecánica, rendimiento y calidad operativa.",
    bullets: [
      "Identificación y amortiguación del cuello de botella principal de la planta mediante Teoría de Restricciones (TOC).",
      "Estandarización de órdenes preventivas en SAP PM para bombas y sopladores críticos, mitigando paradas imprevistas.",
      "Desarrollo de plantillas automatizadas con macros VBA en Excel para consolidación inmediata de tiempos muertos de turno.",
    ],
    metrics: [
      { label: "Aumento de OEE", value: "+18%" },
      { label: "Mitigación de Paradas", value: "-35%" },
      { label: "Disponibilidad Mecánica", value: "96.5%" },
    ],
    tags: ["OEE", "SAP PM", "Teoría de Restricciones", "Excel VBA", "5S", "BPMN 2.0"],
    image: "/assets/img/oee_tab1_diagnostico.png",
    demoUrl: "https://github.com/32456344567",
    githubUrl: "https://github.com/32456344567",
  },
];

export default function ThingsIveBuilt() {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);

  const activeProject =
    projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section id="work" className="py-24 border-b border-neutral-200 bg-[#F9F9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial */}
        <div className="space-y-3 mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase">
            03 — SELECTED DELIVERABLES
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Things I&apos;ve built.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-normal">
            Proyectos reales de ingeniería aplicada a planta industrial: simulación de procesos, 
            control estadístico de calidad y maximización de disponibilidad mecánica.
          </p>
        </div>

        {/* Acordeón / Drawer Vertical & Horizontal (Estilo del Video dataconale.com) */}
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xl shadow-neutral-100/60">
          
          {/* Barra de pestañas superiores tipo Drawer */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-200 bg-neutral-50/50">
            {projects.map((proj) => {
              const isSelected = activeProjectId === proj.id;

              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProjectId(proj.id)}
                  className={`p-5 text-left transition-all border-b md:border-b-0 md:border-r last:border-r-0 flex items-start gap-4 ${
                    isSelected
                      ? "bg-white border-t-2 border-t-neutral-900 md:border-t-2 shadow-sm"
                      : "hover:bg-neutral-100/80 text-neutral-500 border-t-2 border-t-transparent"
                  }`}
                >
                  <span
                    className={`font-mono text-xl font-bold leading-none ${
                      isSelected ? "text-neutral-900" : "text-neutral-400"
                    }`}
                  >
                    {proj.number}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                      {proj.category}
                    </span>
                    <h3
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isSelected ? "text-neutral-900" : "text-neutral-600"
                      }`}
                    >
                      {proj.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Panel Desplegado del Proyecto Activo */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Información y Resultados (Columna Izquierda) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      CASE STUDY #{activeProject.number}
                    </span>
                    <span className="text-neutral-300">/</span>
                    <span className="text-xs font-mono uppercase text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Planta Industrial
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
                    {activeProject.title}
                  </h3>
                </div>

                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Métricas Hard (KPIs) */}
                <div className="grid grid-cols-3 gap-3 py-2">
                  {activeProject.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100"
                    >
                      <span className="block text-2xl sm:text-3xl font-mono font-bold text-neutral-900 tracking-tight">
                        {m.value}
                      </span>
                      <span className="block text-[11px] font-mono text-neutral-500 uppercase mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Viñetas CAR de Impacto */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-medium">
                    Logros Técnicos & Metodología
                  </h4>
                  {activeProject.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Stack de Tecnologías */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-medium mb-2">
                    Herramientas Empleadas
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-neutral-100 text-neutral-800 text-xs font-mono rounded-lg border border-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón de Enlace / Repo */}
                <div className="pt-2">
                  <a
                    href="https://github.com/32456344567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-xs font-mono font-medium rounded-xl hover:bg-neutral-800 transition-all shadow-sm"
                  >
                    <span>Ver Repositorio & Código</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Blueprint / Ilustración de Arquitectura (Columna Derecha) */}
              <div className="lg:col-span-5">
                <div className="bg-neutral-900 rounded-2xl p-4 sm:p-6 text-white shadow-2xl relative overflow-hidden border border-neutral-800 group">
                  
                  {/* Encabezado del visor */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      <span>SCHEMATIC_VIEW // {activeProject.number}</span>
                    </span>
                    <span>1080p PREVIEW</span>
                  </div>

                  {/* Imagen del Proyecto */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                  </div>

                  {/* Pie de la ilustración */}
                  <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>STATUS: OPERACIONAL</span>
                    <span className="text-emerald-400">● TELEMETRÍA ACTIVA</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
