"use client";

import { useState } from "react";
import { CheckCircle2, Award, Building2, Sparkles, Filter } from "lucide-react";

type Category = "all" | "processes" | "plant" | "data" | "hse" | "quality";

interface ElementData {
  number: number;
  symbol: string;
  name: string;
  category: Category;
  categoryName: string;
  categoryColor: string;
  categoryBg: string;
  categoryBorder: string;
  description: string;
  experience: string;
  certification?: string;
  tags: string[];
}

const elements: ElementData[] = [
  // Química & Procesos
  {
    number: 1,
    symbol: "Pt",
    name: "PTAR Efluentes",
    category: "processes",
    categoryName: "Química & Procesos",
    categoryColor: "text-blue-700",
    categoryBg: "bg-blue-50/80 hover:bg-blue-100/90",
    categoryBorder: "border-blue-200",
    description: "Operación de sistemas continuos de tratamiento de efluentes industriales, remoción fisicoquímica y clarificación biológica.",
    experience: "Incarpalm (Técnico de PTAR) y Symrise AG (Monitoreo efluentes).",
    certification: "Ingeniería de Detalle en PTAR — Waterxpert",
    tags: ["DBO", "DQO", "SST", "pH", "OD", "Caudal"],
  },
  {
    number: 2,
    symbol: "Df",
    name: "Sistema DAF",
    category: "processes",
    categoryName: "Química & Procesos",
    categoryColor: "text-blue-700",
    categoryBg: "bg-blue-50/80 hover:bg-blue-100/90",
    categoryBorder: "border-blue-200",
    description: "Flotación por Aire Disuelto: presurización, microburbujas, dosificación de reactivos y desnate superficial continuo.",
    experience: "Incarpalm: Optimización y estabilización diaria de clarificación DAF.",
    tags: ["Microburbujas", "Desnate", "Presurización", "Clarificación"],
  },
  {
    number: 3,
    symbol: "Bm",
    name: "Balances de Masa",
    category: "processes",
    categoryName: "Química & Procesos",
    categoryColor: "text-blue-700",
    categoryBg: "bg-blue-50/80 hover:bg-blue-100/90",
    categoryBorder: "border-blue-200",
    description: "Cálculo estequiométrico y balances dinámicos de entrada y salida para dosificación de coagulantes y floculantes.",
    experience: "Incarpalm: Pruebas de sedimentación (Jar Test) y reducción de reactivos.",
    tags: ["Jar Test", "Balances", "Estequiometría", "Mermas"],
  },
  {
    number: 4,
    symbol: "Rb",
    name: "Reactores Biológicos",
    category: "processes",
    categoryName: "Química & Procesos",
    categoryColor: "text-blue-700",
    categoryBg: "bg-blue-50/80 hover:bg-blue-100/90",
    categoryBorder: "border-blue-200",
    description: "Control de biomasa, edad de lodos, relación F/M y tiempos de retención hidráulica en digestión aerobia.",
    experience: "Incarpalm: Monitoreo microbiológico y ciclos de purga.",
    tags: ["Biomasa", "Lodos Activos", "F/M", "Aireación"],
  },
  {
    number: 5,
    symbol: "Hy",
    name: "Aspen HYSYS",
    category: "processes",
    categoryName: "Química & Procesos",
    categoryColor: "text-blue-700",
    categoryBg: "bg-blue-50/80 hover:bg-blue-100/90",
    categoryBorder: "border-blue-200",
    description: "Modelado termodinámico, simulación estacionaria de operaciones unitarias y diagramas PFD.",
    experience: "Facultad de Ingeniería Química — UTMACH.",
    certification: "Simulación de Procesos Químicos — UTMACH",
    tags: ["Termodinámica", "PFD", "Simulación", "Operaciones Unitarias"],
  },
  {
    number: 6,
    symbol: "Cp",
    name: "Control Fisicoquímico",
    category: "processes",
    categoryName: "Química & Procesos",
    categoryColor: "text-blue-700",
    categoryBg: "bg-blue-50/80 hover:bg-blue-100/90",
    categoryBorder: "border-blue-200",
    description: "Ensayos de turbidez, conductividad, cloro residual, sólidos totales e índices de sedimentabilidad.",
    experience: "Agua Azul Ec. (Laboratorio) e Incarpalm (Planta).",
    tags: ["Turbidímetro", "pHmetro", "Conductímetro", "Muestreo"],
  },

  // Planta & Mantenimiento
  {
    number: 7,
    symbol: "Sp",
    name: "SAP PM",
    category: "plant",
    categoryName: "Planta & Mantenimiento",
    categoryColor: "text-violet-700",
    categoryBg: "bg-violet-50/80 hover:bg-violet-100/90",
    categoryBorder: "border-violet-200",
    description: "Reporte, seguimiento y cierre de avisos técnicos y órdenes de trabajo (OT) preventivas y correctivas en planta.",
    experience: "Incarpalm: Coordinación directa con el departamento de Mantenimiento.",
    tags: ["Avisos", "Órdenes de Trabajo", "Preventivo", "Disponibilidad"],
  },
  {
    number: 8,
    symbol: "Sc",
    name: "SCADA / HMI",
    category: "plant",
    categoryName: "Planta & Mantenimiento",
    categoryColor: "text-violet-700",
    categoryBg: "bg-violet-50/80 hover:bg-violet-100/90",
    categoryBorder: "border-violet-200",
    description: "Supervisión en tiempo real de instrumentación industrial, lazos de control PID, alarmas y pantallas Weintek.",
    experience: "Incarpalm: Monitoreo operativo de efluentes y bombas.",
    tags: ["HMI Weintek", "Telemetría", "Lazos PID", "Alarmas"],
  },
  {
    number: 9,
    symbol: "Bc",
    name: "Bombas Centrífugas",
    category: "plant",
    categoryName: "Planta & Mantenimiento",
    categoryColor: "text-violet-700",
    categoryBg: "bg-violet-50/80 hover:bg-violet-100/90",
    categoryBorder: "border-violet-200",
    description: "Inspección de sello mecánico, caudal, cebado, curvas de operación y verificación de cavitación.",
    experience: "Incarpalm: Mantenimiento operativo y disponibilidad de impulsión.",
    tags: ["Sellos Mecánicos", "Cavitación", "Impulsores", "Presión"],
  },
  {
    number: 10,
    symbol: "Bd",
    name: "Bombas Dosificadoras",
    category: "plant",
    categoryName: "Planta & Mantenimiento",
    categoryColor: "text-violet-700",
    categoryBg: "bg-violet-50/80 hover:bg-violet-100/90",
    categoryBorder: "border-violet-200",
    description: "Calibración de diafragmas y ajuste de carrera/frecuencia para inyección milimétrica de polímeros y soda cáustica.",
    experience: "Incarpalm: Dosificación precisa en sistema DAF.",
    tags: ["Diafragmas", "Carrera", "PPM", "Químicos"],
  },
  {
    number: 11,
    symbol: "So",
    name: "Sopladores & Válvulas",
    category: "plant",
    categoryName: "Planta & Mantenimiento",
    categoryColor: "text-violet-700",
    categoryBg: "bg-violet-50/80 hover:bg-violet-100/90",
    categoryBorder: "border-violet-200",
    description: "Inspección de sopladores Roots de aireación, lubricación, tensión de correas y maniobra de válvulas de mariposa y retención.",
    experience: "Incarpalm: Aireación continua de reactores biológicos.",
    tags: ["Sopladores Roots", "Aireación", "Válvulas", "Correas"],
  },
  {
    number: 12,
    symbol: "Dl",
    name: "Deshidratador Lodos",
    category: "plant",
    categoryName: "Planta & Mantenimiento",
    categoryColor: "text-violet-700",
    categoryBg: "bg-violet-50/80 hover:bg-violet-100/90",
    categoryBorder: "border-violet-200",
    description: "Operación de filtro prensa / deshidratador tornillo: acondicionamiento de lodo con floculante catiónico y ciclo de secado.",
    experience: "Incarpalm: Evacuación y reducción de humedad en torta de lodos.",
    tags: ["Filtro Prensa", "Torta de Lodo", "Polímero", "Purga"],
  },

  // Datos & Automatización
  {
    number: 13,
    symbol: "Py",
    name: "Python Procesos",
    category: "data",
    categoryName: "Datos & Automatización",
    categoryColor: "text-emerald-700",
    categoryBg: "bg-emerald-50/80 hover:bg-emerald-100/90",
    categoryBorder: "border-emerald-200",
    description: "Desarrollo de scripts analíticos en Pandas, NumPy y SciPy para simulación de balances químicos y Gemelos Digitales.",
    experience: "Proyecto Portafolio: Simulador SCADA en Streamlit & DuckDB.",
    certification: "Fundamentos de Programación en Python — Platzi",
    tags: ["Pandas", "NumPy", "SciPy", "Streamlit", "Algoritmos"],
  },
  {
    number: 14,
    symbol: "Bi",
    name: "Power BI & DAX",
    category: "data",
    categoryName: "Datos & Automatización",
    categoryColor: "text-emerald-700",
    categoryBg: "bg-emerald-50/80 hover:bg-emerald-100/90",
    categoryBorder: "border-emerald-200",
    description: "Modelado de datos en estrella, métricas calculadas con DAX avanzado y tableros de control operacional en tiempo real.",
    experience: "Incarpalm: Dashboard de remoción de carga contaminante y consumos.",
    certification: "Power BI Aplicado a Procesos — iSE",
    tags: ["DAX", "Power Query", "KPIs", "Modelado Estrella"],
  },
  {
    number: 15,
    symbol: "Dt",
    name: "Gemelos Digitales",
    category: "data",
    categoryName: "Datos & Automatización",
    categoryColor: "text-emerald-700",
    categoryBg: "bg-emerald-50/80 hover:bg-emerald-100/90",
    categoryBorder: "border-emerald-200",
    description: "Réplica matemática virtual de plantas industriales para predecir no conformidades y optimizar puntos de consigna (setpoints).",
    experience: "Gemelo Digital SCADA: Optimización predictiva de OPEX químico.",
    tags: ["Simulación Dinámica", "Setpoints", "OPEX", "Predicción"],
  },
  {
    number: 16,
    symbol: "Xl",
    name: "Excel VBA & Macros",
    category: "data",
    categoryName: "Datos & Automatización",
    categoryColor: "text-emerald-700",
    categoryBg: "bg-emerald-50/80 hover:bg-emerald-100/90",
    categoryBorder: "border-emerald-200",
    description: "Automatización completa de bitácoras de laboratorio y reportes de planta mediante macros en Visual Basic for Applications.",
    experience: "Agua Azul Ec.: Reducción del 20% en tiempo de emisión de certificados.",
    certification: "Excel Avanzado con Macros y Power Query — Platzi",
    tags: ["VBA", "Power Query", "Automatización", "Certificados"],
  },
  {
    number: 17,
    symbol: "Sq",
    name: "SQL & DuckDB",
    category: "data",
    categoryName: "Datos & Automatización",
    categoryColor: "text-emerald-700",
    categoryBg: "bg-emerald-50/80 hover:bg-emerald-100/90",
    categoryBorder: "border-emerald-200",
    description: "Consultas analíticas OLAP para telemetría industrial de series de tiempo con millones de registros por segundo.",
    experience: "Proyecto Portafolio: Pipeline analítico DuckDB para variables de PTAR.",
    tags: ["SQL", "DuckDB", "Series Temporales", "ETL"],
  },
  {
    number: 18,
    symbol: "Ai",
    name: "IA Aplicada",
    category: "data",
    categoryName: "Datos & Automatización",
    categoryColor: "text-emerald-700",
    categoryBg: "bg-emerald-50/80 hover:bg-emerald-100/90",
    categoryBorder: "border-emerald-200",
    description: "Implementación de modelos analíticos asistidos por IA para optimización de flujos de trabajo e inferencia predictiva.",
    experience: "Certificación oficial y aplicaciones en automatización industrial.",
    certification: "IA Aplicada: Flujos y Decisiones — Universidad de Míchigan",
    tags: ["Machine Learning", "Flujos", "Decisiones", "Michigan"],
  },

  // Seguridad & HSE
  {
    number: 19,
    symbol: "Lt",
    name: "Protocolo LOTO",
    category: "hse",
    categoryName: "Seguridad & HSE",
    categoryColor: "text-amber-700",
    categoryBg: "bg-amber-50/80 hover:bg-amber-100/90",
    categoryBorder: "border-amber-200",
    description: "Bloqueo y etiquetado de fuentes de energía peligrosa (eléctrica, hidráulica, neumática) previo a intervenciones mecánicas.",
    experience: "Symrise AG: Levantamiento y validación de matrices LOTO en planta.",
    certification: "Prevención de Riesgos Laborales — Barrazueta & Asociados",
    tags: ["Cero Energía", "Candados", "Tarjetas", "Intervenciones"],
  },
  {
    number: 20,
    symbol: "Ms",
    name: "Machine Security",
    category: "hse",
    categoryName: "Seguridad & HSE",
    categoryColor: "text-amber-700",
    categoryBg: "bg-amber-50/80 hover:bg-amber-100/90",
    categoryBorder: "border-amber-200",
    description: "Diagnóstico, inspección técnica y adecuación de resguardos mecánicos y paradas de emergencia en maquinaria industrial crítica.",
    experience: "Symrise AG: Proyecto de resguardos en más de 25 equipos críticos.",
    tags: ["Resguardos", "Paradas de Emergencia", "Norma ISO 13849", "Plantas"],
  },
  {
    number: 21,
    symbol: "Ip",
    name: "Matriz IPER",
    category: "hse",
    categoryName: "Seguridad & HSE",
    categoryColor: "text-amber-700",
    categoryBg: "bg-amber-50/80 hover:bg-amber-100/90",
    categoryBorder: "border-amber-200",
    description: "Identificación de Peligros, Evaluación de Riesgos y determinación de controles jerárquicos operacionales en terreno.",
    experience: "Symrise AG e Incarpalm: Actualización de matrices de puesto.",
    tags: ["Peligros", "Riesgos", "Controles", "Jerarquía"],
  },
  {
    number: 22,
    symbol: "Tu",
    name: "TULSMA Libro VI",
    category: "hse",
    categoryName: "Seguridad & HSE",
    categoryColor: "text-amber-700",
    categoryBg: "bg-amber-50/80 hover:bg-amber-100/90",
    categoryBorder: "border-amber-200",
    description: "Normativa ambiental ecuatoriana para límites máximos permisibles de descarga de efluentes a cuerpos de agua receptores.",
    experience: "MAATE (Fiscalización ambiental) e Incarpalm (100% cumplimiento).",
    tags: ["Anexo 1", "Límites Permisibles", "MAATE", "Auditorías"],
  },
  {
    number: 23,
    symbol: "Sg",
    name: "SGA & Residuos",
    category: "hse",
    categoryName: "Seguridad & HSE",
    categoryColor: "text-amber-700",
    categoryBg: "bg-amber-50/80 hover:bg-amber-100/90",
    categoryBorder: "border-amber-200",
    description: "Sistema Globalmente Armonizado: clasificación, pesaje, almacenamiento seguro y hojas FDS/MSDS de químicos peligrosos.",
    experience: "Symrise AG: Gestión integral de bodega y manifiestos de retiro.",
    certification: "Gestión Ambiental ISO 14001 — Certiprof",
    tags: ["FDS", "MSDS", "Residuos Peligrosos", "Etiquetado"],
  },
  {
    number: 24,
    symbol: "Pa",
    name: "Permisos de Alto Riesgo",
    category: "hse",
    categoryName: "Seguridad & HSE",
    categoryColor: "text-amber-700",
    categoryBg: "bg-amber-50/80 hover:bg-amber-100/90",
    categoryBorder: "border-amber-200",
    description: "Acompañamiento y firmas de permisos para trabajo en altura, espacios confinados, trabajos en caliente e izajes.",
    experience: "Symrise AG: Checklist riguroso en campo previo a liberación.",
    certification: "Brigadas Integrales para Emergencias — CEFD - GIR",
    tags: ["Altura", "Espacios Confinados", "Caliente", "Inspección"],
  },

  // Gestión & Calidad
  {
    number: 25,
    symbol: "Ls",
    name: "Lean Six Sigma",
    category: "quality",
    categoryName: "Gestión & Calidad",
    categoryColor: "text-rose-700",
    categoryBg: "bg-rose-50/80 hover:bg-rose-100/90",
    categoryBorder: "border-rose-200",
    description: "Metodología DMAIC para reducción de variabilidad de procesos, cálculo de capacidad Cp/Cpk y eliminación de desperdicios.",
    experience: "Proyectos de mejora de procesos y reducción de costos de no calidad.",
    certification: "Lean Six Sigma Green Belt — Six Sigma Academy Amsterdam",
    tags: ["DMAIC", "Cp / Cpk", "Variabilidad", "Green Belt"],
  },
  {
    number: 26,
    symbol: "Bp",
    name: "BPMN 2.0 & POEs",
    category: "quality",
    categoryName: "Gestión & Calidad",
    categoryColor: "text-rose-700",
    categoryBg: "bg-rose-50/80 hover:bg-rose-100/90",
    categoryBorder: "border-rose-200",
    description: "Mapeo formal de flujos de valor en Bizagi Modeler y redacción de Procedimientos Operativos Estandarizados (POEs).",
    experience: "Incarpalm y Symrise AG: Estandarización de maniobras operativas.",
    certification: "Experto en Mapeo y Mejora de Procesos — Six Sigma Academy Amsterdam",
    tags: ["Bizagi", "POEs", "Flujos", "Estandarización"],
  },
  {
    number: 27,
    symbol: "In",
    name: "Normas NTE INEN",
    category: "quality",
    categoryName: "Gestión & Calidad",
    categoryColor: "text-rose-700",
    categoryBg: "bg-rose-50/80 hover:bg-rose-100/90",
    categoryBorder: "border-rose-200",
    description: "Control de calidad microbiológico y fisicoquímico para liberación de lotes comerciales de alimentos y bebidas.",
    experience: "Agua Azul Ec.: Liberación de lotes e inspección ARCSA.",
    certification: "Sistema de Gestión de Calidad ISO 9001:2015 — Quality Guru's",
    tags: ["BPM", "ARCSA", "Inocuidad", "Liberación de Lotes"],
  },
  {
    number: 28,
    symbol: "Ca",
    name: "CAPA / Ishikawa 8D",
    category: "quality",
    categoryName: "Gestión & Calidad",
    categoryColor: "text-rose-700",
    categoryBg: "bg-rose-50/80 hover:bg-rose-100/90",
    categoryBorder: "border-rose-200",
    description: "Análisis sistemático de causa raíz con diagramas de Espina de Pescado (6M), 5 Porqués y planes de acción correctiva/preventiva.",
    experience: "Symrise AG y Agua Azul Ec.: Cierre de no conformidades analíticas.",
    certification: "Análisis de Causa Raíz 8D / CAPA — Udemy",
    tags: ["8D", "Ishikawa", "5 Porqués", "No Conformidades"],
  },
  {
    number: 29,
    symbol: "5s",
    name: "Metodología 5S",
    category: "quality",
    categoryName: "Gestión & Calidad",
    categoryColor: "text-rose-700",
    categoryBg: "bg-rose-50/80 hover:bg-rose-100/90",
    categoryBorder: "border-rose-200",
    description: "Clasificación, orden, limpieza, estandarización y disciplina operativa en bodegas de reactivos y áreas de planta.",
    experience: "Incarpalm: Organización de bodega química y sala de tableros.",
    tags: ["Seiri", "Seiton", "Seiso", "Seiketsu", "Shitsuke"],
  },
  {
    number: 30,
    symbol: "Mn",
    name: "Minitab & SPC",
    category: "quality",
    categoryName: "Gestión & Calidad",
    categoryColor: "text-rose-700",
    categoryBg: "bg-rose-50/80 hover:bg-rose-100/90",
    categoryBorder: "border-rose-200",
    description: "Control Estadístico de Procesos (SPC), gráficos de control X-bar R, histogramas de distribución y análisis de capacidad.",
    experience: "Análisis de datos de laboratorio y variabilidad de planta.",
    certification: "Control Estadístico de Procesos en Minitab — iSE",
    tags: ["SPC", "Gráficos de Control", "X-bar", "Minitab"],
  },
];

export default function PeriodicTable() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [activeElement, setActiveElement] = useState<ElementData>(elements[0]);

  const filteredElements =
    selectedCategory === "all"
      ? elements
      : elements.filter((el) => el.category === selectedCategory);

  return (
    <section id="stack" className="py-24 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase">
                02 — SKILLS ARCHITECTURE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
              The periodic table of my stack.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-normal">
              30 competencias técnicas de ingeniería industrial y de datos agrupadas en familias químicas. 
              Haz clic en cualquier elemento para inspeccionar su aplicación real en planta.
            </p>
          </div>

          {/* Filtros de Categorías */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-100/90 rounded-xl border border-neutral-200/80 text-xs font-mono">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === "all"
                  ? "bg-neutral-900 text-white font-medium shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("processes")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === "processes"
                  ? "bg-blue-600 text-white font-medium shadow-sm"
                  : "text-neutral-600 hover:text-blue-700 hover:bg-blue-50"
              }`}
            >
              Química & Procesos
            </button>
            <button
              onClick={() => setSelectedCategory("plant")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === "plant"
                  ? "bg-violet-600 text-white font-medium shadow-sm"
                  : "text-neutral-600 hover:text-violet-700 hover:bg-violet-50"
              }`}
            >
              Planta & Mant.
            </button>
            <button
              onClick={() => setSelectedCategory("data")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === "data"
                  ? "bg-emerald-600 text-white font-medium shadow-sm"
                  : "text-neutral-600 hover:text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              Datos & IA
            </button>
            <button
              onClick={() => setSelectedCategory("hse")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === "hse"
                  ? "bg-amber-600 text-white font-medium shadow-sm"
                  : "text-neutral-600 hover:text-amber-700 hover:bg-amber-50"
              }`}
            >
              Seguridad & HSE
            </button>
            <button
              onClick={() => setSelectedCategory("quality")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === "quality"
                  ? "bg-rose-600 text-white font-medium shadow-sm"
                  : "text-neutral-600 hover:text-rose-700 hover:bg-rose-50"
              }`}
            >
              Gestión & Calidad
            </button>
          </div>
        </div>

        {/* Layout Principal: Cuadrícula Periódica (Izq) + Tarjeta de Detalle en Vivo (Der) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cuadrícula de Elementos de la Tabla Periódica */}
          <div className="lg:col-span-8 bg-neutral-50/70 p-6 rounded-2xl border border-neutral-200">
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2.5 sm:gap-3">
              {filteredElements.map((el) => {
                const isSelected = activeElement.symbol === el.symbol;

                return (
                  <button
                    key={el.symbol}
                    onClick={() => setActiveElement(el)}
                    className={`relative aspect-square rounded-xl p-2.5 flex flex-col justify-between transition-all duration-200 text-left border ${
                      isSelected
                        ? "ring-2 ring-neutral-900 bg-neutral-900 text-white border-neutral-900 shadow-lg scale-105 z-10"
                        : `${el.categoryBg} ${el.categoryBorder} hover:scale-102 hover:shadow-md`
                    }`}
                  >
                    {/* Número Atómico */}
                    <div className="flex justify-between items-start w-full">
                      <span
                        className={`text-[10px] font-mono leading-none ${
                          isSelected ? "text-neutral-400" : "text-neutral-500"
                        }`}
                      >
                        {String(el.number).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Símbolo Químico */}
                    <div className="my-auto text-center w-full">
                      <span
                        className={`text-xl sm:text-2xl font-mono font-bold tracking-tight block ${
                          isSelected ? "text-white" : el.categoryColor
                        }`}
                      >
                        {el.symbol}
                      </span>
                    </div>

                    {/* Nombre Técnico */}
                    <div className="w-full truncate text-center">
                      <span
                        className={`text-[10px] sm:text-[11px] font-sans font-medium truncate block leading-tight ${
                          isSelected ? "text-neutral-200" : "text-neutral-800"
                        }`}
                      >
                        {el.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Leyenda de la tabla periódica */}
            <div className="mt-6 pt-4 border-t border-neutral-200/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-500 gap-3">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Procesos
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-500"></span> Planta & Mant.
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Datos & IA
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Seguridad & HSE
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Calidad & Lean
              </span>
            </div>
          </div>

          {/* Tarjeta Lateral de Detalle Interactivo (Exacta a dataconale.com en el video) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-7 shadow-xl shadow-neutral-100 transition-all">
              
              {/* Encabezado del Elemento */}
              <div className="flex items-start justify-between pb-6 border-b border-neutral-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-white flex flex-col items-center justify-center font-mono shadow-md">
                    <span className="text-[10px] text-neutral-400 leading-none">
                      #{String(activeElement.number).padStart(2, "0")}
                    </span>
                    <span className="text-2xl font-bold leading-tight">
                      {activeElement.symbol}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block">
                      {activeElement.categoryName}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                      {activeElement.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Descripción de Aplicación en Planta */}
              <div className="py-5 space-y-4 text-sm">
                <div>
                  <h4 className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider mb-1.5">
                    Definición Técnica & Alcance
                  </h4>
                  <p className="text-neutral-700 leading-relaxed font-normal">
                    {activeElement.description}
                  </p>
                </div>

                {/* Experiencia Real Asociada */}
                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-800">
                    <Building2 className="w-3.5 h-3.5 text-neutral-600" />
                    <span>Aplicación en Terreno</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {activeElement.experience}
                  </p>
                </div>

                {/* Certificación Oficial si aplica */}
                {activeElement.certification && (
                  <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-900">
                      <Award className="w-3.5 h-3.5 text-amber-700" />
                      <span>Certificación Verificada</span>
                    </div>
                    <p className="text-xs text-amber-800 leading-relaxed font-medium">
                      {activeElement.certification}
                    </p>
                  </div>
                )}

                {/* Etiquetas / Parámetros */}
                <div>
                  <h4 className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider mb-2">
                    Variables & Palabras Clave
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeElement.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-neutral-100 text-neutral-700 font-mono text-[11px] rounded-md border border-neutral-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pie de la tarjeta */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>VERIFICADO EN PLANTA</span>
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Activo
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
