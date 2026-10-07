"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Activity,
  ExternalLink,
  Github,
  BookOpen,
  X,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  Layers,
  Zap,
} from "lucide-react";

interface ProjectView {
  title: string;
  desc: string;
  img: string;
}

interface Project {
  id: string;
  number: string;
  title: string;
  headline: string;
  category: string;
  problem: string;
  solution: string;
  businessImpact: string;
  bullets: string[];
  metrics: { label: string; value: string; hint: string }[];
  tags: string[];
  image: string;
  views: ProjectView[];
  liveUrl: string;
  githubUrl: string;
  technicalDetails: {
    process: string;
    dataset: string;
    engineeringFocus: string;
  };
}

const projects: Project[] = [
  {
    id: "scada-gemelo",
    number: "01",
    title: "Optimización Operativa de PTAR & Gemelo Digital con IA",
    headline: "De 5 Días de Espera en Laboratorio a Inferencia en Segundos",
    category: "INGENIERÍA DE PROCESOS QUÍMICOS · AGUAS INDUSTRIALES",
    problem:
      "La planta operaba 'a ciegas': no conocía la calidad del efluente tratado (DBO₅) hasta 5 días después de la toma de muestras por el retraso de incubación. Por precaución ante multas del MAATE, se sobre-aireaba de forma continua con los sopladores, disparando el gasto eléctrico y rompiendo los flóculos por cizalla.",
    solution:
      "Analicé 80,000 lecturas SCADA, modelé la cinética de Monod y construí un sensor virtual con IA (Gemelo Digital) en Python y DuckDB. Redefiní la consigna de oxígeno disuelto a 1.8–2.2 mg/L validada empíricamente sobre la relación real Aire–Oxígeno–Carga de la planta, y la desplegué en una plataforma web SCADA en vivo.",
    businessImpact:
      "Ahorro de 11,810 kWh/año en consumo eléctrico de sopladores con CERO inversión de capital (CAPEX $0), garantizando un 98.17% de cumplimiento normativo ambiental TULSMA Libro VI.",
    bullets: [
      "Sensor virtual en tiempo real que anticipa desviaciones de calidad del agua antes de la descarga a cuerpo receptor.",
      "Optimización de dosificación química y clarificación en sistema DAF mediante balances de materia estequiométricos.",
      "Consola analítica OLAP en DuckDB SQL capaz de procesar 80,000 registros operativos en milisegundos sin congelar la planta.",
    ],
    metrics: [
      { label: "Cumplimiento TULSMA", value: "98.17%", hint: "Medido sobre datos reales" },
      { label: "Ahorro Energético", value: "11,810 kWh/a", hint: "En sopladores sin CAPEX" },
      { label: "Inercia Analítica", value: "0 seg", hint: "De 5 días a tiempo real" },
    ],
    tags: ["Python", "FastAPI", "DuckDB SQL", "XGBoost", "SCADA Weintek", "TULSMA Anexo 1", "Balances de Masa"],
    image: "/assets/img/ptar_scada_railway.png",
    views: [
      {
        title: "Vista 01: Monitoreo SCADA en Planta",
        desc: "Panel de control con telemetría de oxígeno disuelto, pH, caudales y turbidez en tiempo real.",
        img: "/assets/img/scada_tab1_operaciones.png",
      },
      {
        title: "Vista 02: Eficiencia Energética & OPEX",
        desc: "Curva empírica de modulación de sopladores y cálculo de ahorro de energía acumulada.",
        img: "/assets/img/scada_tab2_energia_opex.png",
      },
      {
        title: "Vista 03: Gemelo Digital & PFD Dinámico",
        desc: "Simulador de escenarios de perturbación de carga orgánica y ajuste de setpoints de clarificación.",
        img: "/assets/img/scada_tab3_gemelo_digital.png",
      },
      {
        title: "Vista 04: Consola Analítica DuckDB SQL",
        desc: "Consultas de series temporales de alta velocidad sobre registros continuos de operación.",
        img: "/assets/img/scada_tab4_sql_duckdb.png",
      },
    ],
    liveUrl: "https://01optimizacionptarefluentes-production.up.railway.app",
    githubUrl: "https://github.com/32456344567/01_Optimizacion_PTAR_Efluentes",
    technicalDetails: {
      process: "Reactor aerobio de lodos activados (4,050 m³), celda DAF y sopladores con variadores VFD",
      dataset: "80,000 registros de telemetría a intervalos de 5 minutos",
      engineeringFocus: "Cinética de saturación de Monod, balance de transferencia de O₂ y sensor virtual",
    },
  },
  {
    id: "oee-throughput",
    number: "02",
    title: "Optimización de OEE, Paradas de Máquina & SMED",
    headline: "Eliminación de Cuellos de Botella y Recuperación de Capacidad Oculta",
    category: "OPERACIONES INDUSTRIALES · MANTENIMIENTO & DISPONIBILIDAD",
    problem:
      "Líneas de empaque y procesamiento sufrían frecuentes paradas imprevistas no registradas con precisión, provocando caídas de disponibilidad mecánica por debajo del 78% y sobrecostos por horas extras no programadas.",
    solution:
      "Apliqué Teoría de Restricciones (TOC) para aislar la máquina cuello de botella de la línea. Desarrollé una herramienta analítica interactiva y estandaricé órdenes de trabajo preventivas en SAP PM junto con metodologías SMED para acortar tiempos de cambio de formato.",
    businessImpact:
      "Incremento del OEE en un +18%, reducción del 35% en paradas no programadas y elevación de la disponibilidad mecánica al 96.5%, aumentando el rendimiento efectivo de la planta.",
    bullets: [
      "Diagnóstico cuantitativo de las 6 grandes pérdidas de manufactura (disponibilidad, rendimiento y calidad).",
      "Matriz de priorización de intervenciones electromecánicas sincronizada con el módulo de mantenimiento SAP PM.",
      "Plantillas automatizadas para registro de novedades en turnos rotativos 24/7 sin pérdida de trazabilidad.",
    ],
    metrics: [
      { label: "Incremento de OEE", value: "+18%", hint: "Capacidad productiva ganada" },
      { label: "Paradas Imprevistas", value: "-35%", hint: "Mitigación con preventivo SAP" },
      { label: "Disponibilidad Mecánica", value: "96.5%", hint: "Líneas de proceso continuas" },
    ],
    tags: ["OEE", "SAP PM", "Teoría de Restricciones", "Metodología SMED", "Excel VBA", "BPMN 2.0"],
    image: "/assets/img/oee_tab1_diagnostico.png",
    views: [
      {
        title: "Vista 01: Diagnóstico de Pérdidas OEE",
        desc: "Desglose por turnos de tiempos de operación neta, pérdidas de velocidad y paradas menores.",
        img: "/assets/img/oee_tab1_diagnostico.png",
      },
      {
        title: "Vista 02: Análisis de la Máquina Restricción",
        desc: "Mapeo de saturación del cuello de botella y cálculo de buffers de amortiguamiento.",
        img: "/assets/img/oee_tab2_restriccion.png",
      },
      {
        title: "Vista 03: Caso de Negocio & ROI de Capacidad",
        desc: "Proyección financiera de producción adicional ganada por reducción de tiempos muertos.",
        img: "/assets/img/oee_tab3_business_case.png",
      },
    ],
    liveUrl: "https://02analisisoeeparadassmed-production.up.railway.app",
    githubUrl: "https://github.com/32456344567/02_Analisis_OEE_Paradas_SMED",
    technicalDetails: {
      process: "Líneas continuas de envasado, dosificación y empaque secundario",
      dataset: "Registros históricos de turnos, fallas de máquina y eventos de mantenimiento",
      engineeringFocus: "Teoría de Restricciones de Goldratt, SMED y disponibilidad mecánica",
    },
  },
  {
    id: "copq-scrap",
    number: "03",
    title: "Control Estadístico de Procesos (SPC) & Costos de Scrap (COPQ)",
    headline: "Reducción de Defectos y Costos de Pobre Calidad con Metodología DMAIC",
    category: "GESTIÓN DE CALIDAD · LEAN SIX SIGMA GREEN BELT",
    problem:
      "Variabilidad excesiva en los parámetros fisicoquímicos del producto terminado causaba rechazos de lotes, retrabajos costosos y desviaciones frente a los estándares de inocuidad NTE INEN y normativas ARCSA.",
    solution:
      "Lideré un proyecto Lean Six Sigma bajo ciclo DMAIC. Implementé gráficos de control por variables (X-bar R) y matrices de causa raíz Ishikawa 6M / 5 Porqués para estabilizar los puntos de dosificación y calibrar instrumentos críticos.",
    businessImpact:
      "Reducción del 42% en defectos de calidad y scrap, generando un ahorro directo mensual recurrente de $18,400 USD con una capacidad del proceso Cpk de 1.45.",
    bullets: [
      "Eliminación de no conformidades repetitivas mediante planes de acción correctiva y preventiva (CAPA / 8D).",
      "Control de calibración metrológica y estandarización de POEs para el personal de laboratorio y planta.",
      "Tablero gerencial interactivo en Power BI para monitoreo de costo de no calidad por turno y operador.",
    ],
    metrics: [
      { label: "Reducción de Scrap", value: "-42%", hint: "Menos retrabajos y mermas" },
      { label: "Ahorro Mensual", value: "$18.4K", hint: "Impacto directo al margen" },
      { label: "Capacidad del Proceso", value: "Cpk 1.45", hint: "Proceso altamente capaz" },
    ],
    tags: ["Lean Six Sigma", "DMAIC", "Minitab", "Power BI", "NTE INEN", "CAPA / 8D", "ISO 9001"],
    image: "/assets/img/copq_tab1_resumen_ejecutivo.png",
    views: [
      {
        title: "Vista 01: Resumen Ejecutivo COPQ",
        desc: "Tablero de control financiero con distribución de costos de prevención, evaluación y fallas.",
        img: "/assets/img/copq_tab1_resumen_ejecutivo.png",
      },
      {
        title: "Vista 02: Análisis de Causa Raíz (Ishikawa 6M)",
        desc: "Estratificación de defectos por máquina, mano de obra, método y materia prima.",
        img: "/assets/img/copq_tab2_causa_raiz.png",
      },
      {
        title: "Vista 03: Inspección & Cumplimiento Metrológico",
        desc: "Gráficos de control estadístico SPC con límites reales de tolerancia industrial.",
        img: "/assets/img/copq_tab3_inspeccion_garantia.png",
      },
    ],
    liveUrl: "https://web-production-cc7d7.up.railway.app",
    githubUrl: "https://github.com/32456344567/03_Control_Calidad_Scrap_Retrabajo",
    technicalDetails: {
      process: "Control de calidad en línea de producción, llenado y laboratorio fisicoquímico",
      dataset: "Ensayos de laboratorio, tolerancias dimensionales e historial de no conformidades",
      engineeringFocus: "Capacidad de proceso Cp/Cpk, gráficos de control SPC y metodología DMAIC",
    },
  },
];

export default function ThingsIveBuilt() {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const activeProject =
    projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section id="proyectos" className="py-24 border-b border-neutral-200 bg-[#F9F9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial en Español */}
        <div className="space-y-3 mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase">
            03 — PROYECTOS INDUSTRIALES REALES
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Proyectos que he construido.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-normal">
            Ingeniería química aplicada a planta continua: simulación de procesos, gemelos digitales, 
            control estadístico de calidad y maximización de rendimiento operativo. Cada proyecto cuenta con aplicación en vivo y código abierto.
          </p>
        </div>

        {/* Acordeón / Drawer Principal */}
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xl shadow-neutral-100/60">
          
          {/* Pestañas de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-200 bg-neutral-50/50">
            {projects.map((proj) => {
              const isSelected = activeProjectId === proj.id;

              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProjectId(proj.id)}
                  className={`p-5 text-left transition-all border-b md:border-b-0 md:border-r last:border-r-0 flex items-start gap-4 ${
                    isSelected
                      ? "bg-white border-t-2 border-t-neutral-900 shadow-sm"
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
                      {proj.category.split("·")[0]}
                    </span>
                    <h3
                      className={`text-sm sm:text-base font-bold transition-colors line-clamp-1 ${
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

          {/* Panel Desplegado del Proyecto Seleccionado */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Información, Resumen y Métricas (Columna Izquierda) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      CASO DE ESTUDIO #{activeProject.number}
                    </span>
                    <span className="text-neutral-300">/</span>
                    <span className="text-xs font-mono uppercase text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      En Producción
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm font-mono text-neutral-500 mt-1">
                    {activeProject.headline}
                  </p>
                </div>

                {/* El Pitch de Negocio (Problema vs Solución) */}
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/80 space-y-2 text-xs sm:text-sm">
                  <p className="text-neutral-700 leading-relaxed">
                    <strong className="text-neutral-900 font-semibold">El Desafío: </strong>
                    {activeProject.problem}
                  </p>
                  <p className="text-emerald-900 font-medium leading-relaxed pt-1 border-t border-neutral-200/60">
                    <strong className="text-emerald-950 font-semibold">El Retorno de Inversión: </strong>
                    {activeProject.businessImpact}
                  </p>
                </div>

                {/* Métricas de Alto Impacto */}
                <div className="grid grid-cols-3 gap-3 py-1">
                  {activeProject.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100"
                    >
                      <span className="block text-2xl sm:text-3xl font-mono font-bold text-neutral-900 tracking-tight">
                        {m.value}
                      </span>
                      <span className="block text-[11px] font-mono text-neutral-800 font-medium uppercase mt-0.5">
                        {m.label}
                      </span>
                      <span className="block text-[10px] text-neutral-500 mt-0.5">
                        {m.hint}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Viñetas Técnicas Clave */}
                <div className="space-y-2">
                  {activeProject.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Herramientas Empleadas */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-neutral-100 text-neutral-800 text-xs font-mono rounded-lg border border-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BOTONES DE ACCIÓN: DEMO EN VIVO + DETALLES COMPLETOS + GITHUB */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold rounded-xl shadow-md transition-all hover:translate-y-[-1px]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>ABRIR APLICACIÓN EN VIVO</span>
                  </a>

                  <button
                    onClick={() => setModalProject(activeProject)}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-medium rounded-xl shadow-sm transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Ver caso completo & entregables</span>
                  </button>

                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-white hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 text-xs font-mono font-medium rounded-xl border border-neutral-300 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

              </div>

              {/* Vista Previa de la Arquitectura / UI (Columna Derecha) */}
              <div className="lg:col-span-5">
                <div className="bg-neutral-900 rounded-2xl p-4 sm:p-6 text-white shadow-2xl relative overflow-hidden border border-neutral-800 group">
                  
                  {/* Encabezado del visor */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      <span>VISTA_TÉCNICA // {activeProject.number}</span>
                    </span>
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>Probar App</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Imagen del Proyecto con enlace directo a la app en vivo */}
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 cursor-pointer"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3.5 py-1.5 bg-black/80 backdrop-blur-sm rounded-lg text-xs font-mono text-white flex items-center gap-1.5">
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-400" /> Clic para abrir app
                      </span>
                    </div>
                  </a>

                  {/* Pie de la ilustración */}
                  <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>ESTADO: OPERACIONAL EN LA NUBE</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      EN VIVO EN RAILWAY
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* MODAL DETALLADO DE CASO DE ESTUDIO (Vender el proyecto con arquitectura completa) */}
      {modalProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
            
            {/* Cabecera del Modal */}
            <div className="p-6 border-b border-neutral-200 flex items-start justify-between bg-neutral-50/80 sticky top-0 z-10">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase block mb-1">
                  CASO DE ESTUDIO INDUSTRIAL // PROYECTO {modalProject.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900 leading-tight">
                  {modalProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-600 mt-1">
                  {modalProject.headline}
                </p>
              </div>

              <button
                onClick={() => setModalProject(null)}
                className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/80 transition-colors"
                aria-label="Cerrar ventana"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Contenido Desplazable del Modal */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
              
              {/* Tarjeta de Resumen Ejecutivo (El Pitch de Venta) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div className="p-4 bg-red-50/60 rounded-xl border border-red-200/70 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-red-800 uppercase">
                    <TrendingDown className="w-4 h-4 text-red-600" />
                    <span>1. El Problema en Planta</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                    {modalProject.problem}
                  </p>
                </div>

                <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200/70 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-blue-800 uppercase">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span>2. Solución de Ingeniería</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                    {modalProject.solution}
                  </p>
                </div>

                <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/70 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 uppercase">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>3. Retorno de Inversión (ROI)</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                    {modalProject.businessImpact}
                  </p>
                </div>

              </div>

              {/* Ficha Técnica del Proceso */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2 text-xs font-mono">
                <span className="font-bold text-neutral-900 uppercase block mb-1">
                  Especificaciones Técnicas del Caso
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-neutral-600">
                  <div>
                    <strong className="text-neutral-900 block">Tren Operativo:</strong>
                    <span>{modalProject.technicalDetails.process}</span>
                  </div>
                  <div>
                    <strong className="text-neutral-900 block">Base de Datos:</strong>
                    <span>{modalProject.technicalDetails.dataset}</span>
                  </div>
                  <div>
                    <strong className="text-neutral-900 block">Rigor de Ingeniería:</strong>
                    <span>{modalProject.technicalDetails.engineeringFocus}</span>
                  </div>
                </div>
              </div>

              {/* Galería de Vistas y Entregables de Planta */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-neutral-600" />
                  <span>Vistas y Módulos de la Plataforma en Producción</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {modalProject.views.map((v, vIdx) => (
                    <div
                      key={vIdx}
                      className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2 group"
                    >
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-neutral-900 border border-neutral-200">
                        <Image
                          src={v.img}
                          alt={v.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-xs text-neutral-900">
                          {v.title}
                        </h5>
                        <p className="text-[11px] text-neutral-600 leading-relaxed mt-0.5">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Banner de Enlace a la App en Vivo */}
              <div className="p-6 bg-neutral-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase flex items-center gap-1.5 justify-center sm:justify-start">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Servidor en la nube activo
                  </span>
                  <h4 className="text-lg font-bold">
                    ¿Quieres interactuar con los datos y setpoints en tiempo real?
                  </h4>
                  <p className="text-xs text-neutral-400">
                    La aplicación corre en vivo en Railway Cloud con todos sus módulos operativos.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={modalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold rounded-xl shadow-md flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>ABRIR EN PANTALLA COMPLETA</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Pie del Modal */}
            <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-500">
                Portafolio Oficial del Ing. Angelo Apolo
              </span>
              <button
                onClick={() => setModalProject(null)}
                className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-mono font-medium rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
