"use client";

import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2, Calendar } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  type: string;
  statusBadge: string;
  badgeColor: string;
  description: string;
  highlights: string[];
  competencies: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Máster Universitario en Ingeniería de la Organización, Dirección de Proyectos y Empresas",
    institution: "Universidad Europea",
    location: "Madrid, España (Modalidad Online)",
    period: "Oct. 2026 — En Cursado",
    type: "Posgrado Oficial",
    statusBadge: "En Cursado",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
    description:
      "Formación avanzada de posgrado orientada a la dirección estratégica de operaciones industriales, ingeniería de la organización, optimización de cadenas de suministro globales y liderazgo de proyectos bajo estándares internacionales.",
    highlights: [
      "Dirección y control de proyectos complejos bajo estándares PMI y metodologías ágiles Agile Scrum.",
      "Optimización de modelos productivos, gestión del cambio tecnológico (MOC) y Lean Operations.",
      "Diseño y simulación de cadenas de suministro, logística industrial y toma de decisiones operativas.",
    ],
    competencies: [
      "Dirección de Proyectos",
      "Cadena de Suministro",
      "Lean Operations",
      "Agile Scrum",
      "Ingeniería de la Organización",
      "Gestión del Cambio",
    ],
  },
  {
    degree: "Grado en Ingeniería Química",
    institution: "Universidad Técnica de Machala (UTMACH)",
    location: "Machala, El Oro, Ecuador",
    period: "2018 — 2024",
    type: "Grado Universitario Oficial (Acreditado)",
    statusBadge: "Titulado Oficial",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    description:
      "Formación integral de 5 años en ciencias de la ingeniería química: balances rigurosos de materia y energía, cinética química, termodinámica de procesos, diseño y modelado de reactores, operaciones unitarias y tecnología de tratamiento de efluentes.",
    highlights: [
      "Simulación de procesos y balances de masa continuos utilizando software especializado como Aspen HYSYS.",
      "Diseño, optimización y control operacional de sistemas biológicos y fisicoquímicos de depuración de aguas.",
      "Manejo de técnicas analíticas instrumentales de laboratorio para control fisicoquímico de calidad.",
    ],
    competencies: [
      "Balances de Materia & Energía",
      "Cinética y Reactores",
      "Termodinámica",
      "Operaciones Unitarias",
      "Aspen HYSYS",
      "Tratamiento de Aguas",
    ],
  },
];

const academicSpecializations = [
  {
    title: "Inteligencia Artificial Aplicada",
    institution: "Universidad de Míchigan",
    focus: "Análisis de Datos, Flujos de Trabajo y Toma de Decisiones",
    year: "Certificación Oficial",
  },
  {
    title: "Lean Six Sigma Green Belt",
    institution: "Six Sigma Academy Amsterdam",
    focus: "Metodología DMAIC, Reducción de Variabilidad y Control Estadístico",
    year: "Certificación Oficial",
  },
  {
    title: "Certificado Profesional de Análisis de Datos",
    institution: "Google",
    focus: "Limpieza de Datos, SQL, Visualización y Análisis Estadístico",
    year: "En Cursado",
  },
  {
    title: "Gestión de Proyectos Agile Scrum",
    institution: "Six Sigma Academy Amsterdam",
    focus: "Sprints, Backlog, Ceremonias Ágiles y Entrega Continua de Valor",
    year: "Certificación Oficial",
  },
  {
    title: "Toma de Decisiones Basada en Datos",
    institution: "Universidad de Buffalo",
    focus: "Modelado Cuantitativo y Analítica de Negocio",
    year: "Certificación Oficial",
  },
  {
    title: "Ingeniería de Detalle en PTAR",
    institution: "Waterxpert",
    focus: "Cálculo Hidráulico, Sedimentadores, DAF y Lodos Activados",
    year: "Certificación Oficial",
  },
];

export default function EducationSection() {
  return (
    <section id="educacion" className="py-24 border-b border-neutral-200 bg-[#F9F9F8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial en Español - Jerarquía Estandarizada */}
        <div className="space-y-3 mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase block">
            05 — FORMACIÓN ACADÉMICA & ESPECIALIZACIONES
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Formación académica y posgrado.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Bases científicas de la ingeniería química combinadas con posgrado internacional en dirección estratégica de operaciones, gestión de proyectos y analítica avanzada.
          </p>
        </div>

        {/* Bloque Principal de Títulos Universitarios */}
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all space-y-6 group"
            >
              
              {/* Encabezado del Título: Grado / Máster */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-neutral-100 pb-5">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                      {item.type}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.statusBadge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {item.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-neutral-600 pt-1">
                    <span className="font-semibold text-neutral-800 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-neutral-500" />
                      {item.institution}
                    </span>
                    <span className="flex items-center gap-1 text-neutral-500 text-xs sm:text-sm">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Período */}
                <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 rounded-xl border border-neutral-200/80 text-xs font-mono text-neutral-700">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="font-semibold">{item.period}</span>
                </div>
              </div>

              {/* Descripción Académica */}
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Subtema: Hitos & Enfoque Académico */}
              <div>
                <h4 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                  Hitos & Enfoque Académico
                </h4>
                <ul className="space-y-1.5">
                  {item.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-sm text-neutral-700 leading-relaxed flex items-start gap-2 before:content-['—'] before:text-neutral-400 before:font-bold"
                    >
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subtema: Competencias Técnicas Adquiridas */}
              <div>
                <h4 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                  Competencias Académicas & Técnicas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="px-2.5 py-1 bg-neutral-100 text-neutral-700 text-xs font-mono rounded-md border border-neutral-200/60"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Sub-Sección: Especializaciones Universitarias & Certificaciones de Rigor */}
        <div className="mt-14 pt-12 border-t border-neutral-200">
          <div className="space-y-2 mb-8">
            <span className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider block">
              ACREDITACIONES UNIVERSITARIAS & ACADÉMICAS
            </span>
            <h3 className="text-2xl font-serif font-bold text-neutral-900">
              Especializaciones complementarias.
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Programas de rigor emitidos por universidades e instituciones de estándares internacionales en analítica, mejora de procesos y gestión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {academicSpecializations.map((spec, sIdx) => (
              <div
                key={sIdx}
                className="p-5 bg-white rounded-xl border border-neutral-200/90 shadow-sm flex items-start gap-3.5 group hover:border-neutral-300 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                  <Award className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-sm text-neutral-900">
                      {spec.title}
                    </h4>
                    <span className="text-[11px] font-mono font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded shrink-0">
                      {spec.year}
                    </span>
                  </div>
                  <p className="text-xs font-mono font-semibold text-neutral-600">
                    {spec.institution}
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed pt-0.5">
                    {spec.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
