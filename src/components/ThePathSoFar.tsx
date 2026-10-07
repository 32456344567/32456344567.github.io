"use client";

import { ArrowUpRight, Briefcase, GraduationCap, MapPin } from "lucide-react";

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const timeline: TimelineItem[] = [
  {
    period: "Oct. 2026 — En Cursado",
    role: "Máster Universitario en Organización y Dirección de Proyectos",
    company: "Universidad Europea",
    location: "Madrid, España (Online)",
    type: "Posgrado Oficial",
    description:
      "Especialización en dirección de operaciones industriales, ingeniería de la organización, optimización de cadenas de suministro y metodologías ágiles de proyectos.",
    achievements: [
      "Dirección estratégica de proyectos bajo estándares PMI y marcos Agile Scrum.",
      "Optimización de modelos productivos, gestión del cambio (MOC) y Lean Operations.",
    ],
    skills: ["Gestión de Proyectos", "Cadena de Suministro", "Lean Manufacturing", "Scrum"],
  },
  {
    period: "Dic. 2024 — Presente",
    role: "Técnico de PTAR",
    company: "Incarpalm",
    location: "Machala, El Oro, Ecuador",
    type: "Jornada completa",
    description:
      "Supervisión y control operativo continuo de la Planta de Tratamiento de Aguas Residuales industriales (PTAR continua y sistema DAF) en turnos rotativos 24/7.",
    achievements: [
      "Aseguré el 100% de cumplimiento normativo ambiental TULSMA Libro VI Anexo 1 en descarga continua.",
      "Optimizé la dosificación de coagulante y floculante en el sistema DAF mediante balances de materia y pruebas de sedimentación.",
      "Gestioné el reporte, seguimiento y cierre de avisos técnicos para bombas y sopladores en SAP PM, garantizando disponibilidad mecánica.",
      "Estandaricé Procedimientos Operativos (POEs) y diagramé flujos en BPMN 2.0 (Bizagi Modeler).",
    ],
    skills: ["Operación PTAR", "Sistema DAF", "SAP PM", "TULSMA Anexo 1", "Balances de Masa", "BPMN 2.0", "Metodología 5S"],
  },
  {
    period: "May. 2024 — Nov. 2024",
    role: "Pasante de Seguridad, Salud y Medio Ambiente (HSE)",
    company: "Symrise AG – Diana Food",
    location: "Pasaje, El Oro, Ecuador",
    type: "Contrato de formación",
    description:
      "Soporte técnico en ingeniería de seguridad de procesos, prevención de riesgos de maquinaria industrial y gestión ambiental de planta.",
    achievements: [
      "Ejecuté el levantamiento y diagnóstico técnico de resguardos mecánicos y paradas de emergencia en más de 25 equipos críticos (Proyecto Machine Security).",
      "Acompañé en campo la verificación de permisos de trabajo seguro de alto riesgo (altura, espacios confinados, caliente).",
      "Colaboré en la redacción de POEs de seguridad y en el levantamiento de puntos de bloqueo y etiquetado (LOTO).",
      "Gestión operativa de residuos peligrosos bajo normativas SGA e ISO 14001, y monitoreo de efluentes de planta.",
    ],
    skills: ["Machine Security", "Bloqueo LOTO", "Permisos de Alto Riesgo", "Matriz IPER", "SGA", "ISO 14001", "CAPA / 8D"],
  },
  {
    period: "Ago. 2023 — Ene. 2024",
    role: "Auxiliar de Control de Calidad",
    company: "Agua Azul Ec.",
    location: "Puerto Bolívar, El Oro, Ecuador",
    type: "Contrato de formación",
    description:
      "Ejecución de muestreos y análisis fisicoquímicos diarios en laboratorio para la liberación de lotes de producto terminado e insumos bajo normas NTE INEN.",
    achievements: [
      "Creé plantillas automatizadas en Excel (Macros VBA), reduciendo un 20% el tiempo de consolidación y emisión de certificados de conformidad.",
      "Ejecuté la calibración y verificación metrológica de instrumentos de medición de laboratorio (turbidímetro, pHmetro, conductímetro).",
      "Soporte técnico en el levantamiento de no conformidades analíticas y seguimiento a planes de acción correctiva (CAPA).",
      "Inspecciones de Buenas Prácticas de Manufactura (BPM) y condiciones higiénico-sanitarias para auditorías de ARCSA.",
    ],
    skills: ["Normas NTE INEN", "Excel VBA", "Buenas Prácticas BPM", "ARCSA", "Calibración", "CAPA / 8D"],
  },
  {
    period: "May. 2023 — Ago. 2023",
    role: "Pasante de Calidad",
    company: "Agua Azul Ec.",
    location: "Puerto Bolívar, El Oro, Ecuador",
    type: "Contrato de prácticas",
    description:
      "Apoyo en el laboratorio de control de calidad fisicoquímico y microbiológico en línea de embotellado y tratamiento de agua.",
    achievements: [
      "Realicé mediciones continuas de turbidez, pH, conductividad y cloro residual en producto en proceso.",
      "Consolidé bitácoras de muestreo y apoyé en la verificación del cumplimiento de parámetros de inocuidad en planta.",
    ],
    skills: ["Control Fisicoquímico", "Ensayos de Laboratorio", "Inocuidad", "Trazabilidad"],
  },
  {
    period: "Nov. 2022 — Mar. 2023",
    role: "Pasante de Calidad Ambiental",
    company: "Ministerio del Ambiente, Agua y Transición Ecológica (MAATE)",
    location: "Machala, El Oro, Ecuador",
    type: "Contrato de prácticas",
    description:
      "Acompañamiento técnico a inspectores de calidad ambiental en visitas de control y fiscalización a industrias y proyectos de la provincia de El Oro.",
    achievements: [
      "Verifiqué en terreno el cumplimiento de la normativa ambiental vigente para vertidos industriales (TULSMA Libro VI).",
      "Levanté matrices de hallazgos ambientales y redacté informes técnicos de cumplimiento para procesos administrativos.",
    ],
    skills: ["TULSMA Libro VI", "Fiscalización Ambiental", "Auditorías MAATE", "Informes Técnicos"],
  },
  {
    period: "Abr. 2022 — Sept. 2022",
    role: "Practicante de Producción Acuícola",
    company: "Camaronera Montealto",
    location: "Santa Rosa, El Oro, Ecuador",
    type: "Contrato de prácticas",
    description:
      "Monitoreo fisicoquímico diario de parámetros críticos en piscinas camaroneras y soporte al control de producción y biomasa.",
    achievements: [
      "Muestreo en campo de oxígeno disuelto, salinidad, pH, temperatura y transparencia de agua.",
      "Cálculo de tablas de alimentación y registro de biomasa estimada por piscina para soporte a la cosecha.",
      "Control y consolidación de bitácoras de insumos (fertilizantes, carbonatos y balanceado).",
    ],
    skills: ["Calidad de Agua", "Oxígeno Disuelto", "Control de Biomasa", "Bitácoras de Campo"],
  },
  {
    period: "2018 — 2024",
    role: "Grado en Ingeniería Química",
    company: "Universidad Técnica de Machala (UTMACH)",
    location: "Machala, Ecuador",
    type: "Grado Universitario Oficial",
    description:
      "Formación integral de 5 años en balances de materia y energía, cinética química, termodinámica, diseño de reactores, operaciones unitarias y tratamiento de efluentes.",
    achievements: [
      "Tesis y proyectos enfocados en simulación de procesos industriales y tratamiento biológico y fisicoquímico de aguas.",
    ],
    skills: ["Ingeniería Química", "Balances de Materia", "Termodinámica", "Diseño de Reactores", "Aspen HYSYS"],
  },
];

export default function ThePathSoFar() {
  return (
    <section id="experiencia" className="py-24 border-b border-neutral-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial en Español */}
        <div className="space-y-3 mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase">
            04 — TRAYECTORIA & EXPERIENCIA PROFESIONAL
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Mi trayectoria profesional.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-normal">
            Historial oficial en planta industrial, pasantías y formación técnica. 
            Experiencia comprobada en turnos rotativos, fiscalización ambiental y laboratorios de calidad.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-12 border-b border-neutral-100 last:border-b-0 items-start group"
            >
              {/* Periodo y Tipo */}
              <div className="md:col-span-3">
                <span className="text-base sm:text-lg font-mono font-bold text-neutral-900 block">
                  {item.period}
                </span>
                <span className="text-xs font-mono text-neutral-400 block mt-1">
                  {item.type}
                </span>
              </div>

              {/* Rol, Empresa y Logros */}
              <div className="md:col-span-9 space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs sm:text-sm font-medium text-neutral-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
                  <Briefcase className="w-4 h-4 text-neutral-500" />
                  <span>{item.company}</span>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Viñetas de Logros */}
                <ul className="space-y-1.5 pt-1">
                  {item.achievements.map((ach, aIdx) => (
                    <li
                      key={aIdx}
                      className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2 before:content-['—'] before:text-neutral-400 before:font-bold"
                    >
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Habilidades Técnicas Aplicadas */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-neutral-100 text-neutral-600 text-[11px] font-mono rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Tarjeta Final: "Next Step" en Español */}
          <div className="pt-6">
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                  PRÓXIMO PASO
                </span>
                <h3 className="text-2xl font-serif font-bold text-neutral-900">
                  ¿Tu equipo de planta o proyectos?
                </h3>
                <p className="text-sm text-neutral-600">
                  Disponible para incorporación en roles de Ingeniería de Procesos, Supervisión de Turno, Calidad o HSE en Guayaquil y zona industrial.
                </p>
              </div>

              <a
                href="https://wa.me/593969763084?text=Hola%20Ing.%20Angelo%20Apolo,%20revisamos%20su%20portafolio%20y%20nos%20gustar%C3%ADa%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 text-white font-medium text-sm rounded-xl hover:bg-neutral-800 transition-all shadow-sm"
              >
                <span>Conversemos</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
