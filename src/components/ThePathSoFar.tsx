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
    period: "2026 — En Cursado",
    role: "Máster Universitario en Ingeniería de la Organización y Proyectos",
    company: "Universidad Europea",
    location: "Madrid, España (Online)",
    type: "Educación de Posgrado",
    description:
      "Especialización en dirección de operaciones industriales, gestión estratégica de proyectos, optimización de cadenas de suministro y metodologías ágiles.",
    achievements: [
      "Dirección de proyectos bajo estándares PMI y Agile Scrum.",
      "Optimización de modelos productivos y Lean Operations.",
    ],
    skills: ["Project Management", "Supply Chain", "Lean Manufacturing", "Scrum"],
  },
  {
    period: "Dic. 2024 — Presente",
    role: "Técnico de PTAR",
    company: "Incarpalm",
    location: "Machala, El Oro, Ecuador",
    type: "Jornada completa",
    description:
      "Supervisión y control operativo continuo de la Planta de Tratamiento de Aguas Residuales (PTAR continua y sistema DAF) en turnos rotativos 24/7.",
    achievements: [
      "Aseguré el 100% de cumplimiento normativo ambiental TULSMA Libro VI Anexo 1 en descarga continua.",
      "Optimizé la dosificación de coagulante y floculante en el sistema DAF mediante balances de materia y pruebas de sedimentación.",
      "Gestioné el reporte y cierre de avisos técnicos para bombas y sopladores en SAP PM, asegurando disponibilidad de equipos.",
      "Estandaricé Procedimientos Operativos (POEs) y flujos en BPMN 2.0 (Bizagi Modeler).",
    ],
    skills: ["PTAR", "Sistema DAF", "SAP PM", "TULSMA", "Balances de Masa", "BPMN 2.0", "5S"],
  },
  {
    period: "May. 2024 — Nov. 2024",
    role: "Pasante de Seguridad, Salud y Medio Ambiente (HSE)",
    company: "Symrise AG – Diana Food",
    location: "Pasaje, El Oro, Ecuador",
    type: "Contrato de formación",
    description:
      "Soporte técnico en ingeniería de seguridad de procesos, prevención de riesgos de maquinaria y gestión ambiental de planta.",
    achievements: [
      "Ejecuté el levantamiento y diagnóstico de resguardos mecánicos y paradas de emergencia en más de 25 equipos industriales críticos (Machine Security).",
      "Validé en campo permisos de trabajo seguro de alto riesgo (altura, espacios confinados, caliente).",
      "Colaboré en el levantamiento de puntos de bloqueo y etiquetado (LOTO) y gestión de residuos peligrosos (SGA).",
    ],
    skills: ["Machine Security", "LOTO", "Permisos Alto Riesgo", "IPER", "SGA", "ISO 14001"],
  },
  {
    period: "Ago. 2023 — Ene. 2024",
    role: "Auxiliar de Control de Calidad",
    company: "Agua Azul Ec.",
    location: "Puerto Bolívar, El Oro, Ecuador",
    type: "Contrato de formación",
    description:
      "Ejecución de ensayos fisicoquímicos diarios de laboratorio y liberación de lotes de producto terminado e insumos bajo normas NTE INEN.",
    achievements: [
      "Automaticé bitácoras analíticas con macros en Excel VBA, reduciendo un 20% el tiempo de consolidación de certificados.",
      "Ejecuté calibración y verificación metrológica de instrumentos de medición de laboratorio.",
      "Levanté planes de acción correctiva (CAPA) y no conformidades analíticas.",
    ],
    skills: ["NTE INEN", "Excel VBA", "BPM", "ARCSA", "Calibración", "CAPA"],
  },
  {
    period: "Nov. 2022 — Mar. 2023",
    role: "Pasante de Calidad Ambiental",
    company: "Ministerio del Ambiente, Agua y Transición Ecológica (MAATE)",
    location: "Machala, El Oro, Ecuador",
    type: "Contrato de prácticas",
    description:
      "Acompañamiento a inspectores técnicos en fiscalización ambiental y revisión de planes de manejo ambiental.",
    achievements: [
      "Verificación en sitio de normativas de vertidos industriales (TULSMA Libro VI).",
      "Redacción de matrices de hallazgos y reportes técnicos ambientales.",
    ],
    skills: ["TULSMA", "Fiscalización Ambiental", "Auditorías", "Informes Técnicos"],
  },
  {
    period: "2018 — 2024",
    role: "Grado en Ingeniería Química",
    company: "Universidad Técnica de Machala (UTMACH)",
    location: "Machala, Ecuador",
    type: "Grado Universitario",
    description:
      "Formación integral en termodinámica, cinética química, balances de materia y energía, simulación de procesos y diseño de reactores.",
    achievements: [
      "Graduado con enfoque en ingeniería de procesos industriales y tratamiento de efluentes.",
    ],
    skills: ["Ingeniería Química", "Balances de Materia", "Termodinámica", "HYSYS"],
  },
];

export default function ThePathSoFar() {
  return (
    <section id="experience" className="py-24 border-b border-neutral-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial */}
        <div className="space-y-3 mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase">
            04 — CHRONOLOGY & ROLES
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            The path so far.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-normal">
            Trayectoria laboral oficial verificada en planta industrial, aseguramiento de calidad 
            y gestión ambiental. 100% sincronizada con mi perfil profesional.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-12 border-b border-neutral-100 last:border-b-0 items-start group"
            >
              {/* Año / Periodo */}
              <div className="md:col-span-3">
                <span className="text-lg font-mono font-bold text-neutral-900 block">
                  {item.period}
                </span>
                <span className="text-xs font-mono text-neutral-400 block mt-1">
                  {item.type}
                </span>
              </div>

              {/* Contenido / Rol & Empresa */}
              <div className="md:col-span-9 space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-sm font-medium text-neutral-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
                  <Briefcase className="w-4 h-4 text-neutral-500" />
                  <span>{item.company}</span>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Logros Clave */}
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

                {/* Habilidades aplicadas */}
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

          {/* Tarjeta Final: "Next: ¿Tu equipo de planta?" (Como en el video dataconale.com) */}
          <div className="pt-6">
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                  NEXT STEP
                </span>
                <h3 className="text-2xl font-serif font-bold text-neutral-900">
                  ¿Tu equipo de planta o proyectos?
                </h3>
                <p className="text-sm text-neutral-600">
                  Disponible para roles de Ingeniería de Procesos, Supervisión de Turno, Calidad o HSE en Guayaquil y zona industrial.
                </p>
              </div>

              <a
                href="https://wa.me/593969763084?text=Hola%20Ing.%20Angelo%20Apolo,%20revisamos%20su%20portafolio%20y%20nos%20gustar%C3%ADa%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 text-white font-medium text-sm rounded-xl hover:bg-neutral-800 transition-all shadow-sm"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
