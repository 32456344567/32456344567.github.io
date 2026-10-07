"use client";

import { ShieldCheck, Clock, Award, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";

interface Metric {
  value: string;
  unit?: string;
  label: string;
  context: string;
  icon: any;
  highlight?: boolean;
}

const metrics: Metric[] = [
  {
    value: "100%",
    label: "Cumplimiento TULSMA",
    context: "Límites máximos permisibles de vertido ambiental asegurados en descarga continua (Incarpalm).",
    icon: ShieldCheck,
    highlight: true,
  },
  {
    value: "-20%",
    label: "Tiempo en Certificados",
    context: "Automatización de bitácoras y certificados fisicoquímicos mediante macros VBA en Excel (Agua Azul).",
    icon: Clock,
  },
  {
    value: "25+",
    label: "Equipos en Machine Security",
    context: "Diagnóstico técnico de resguardos mecánicos y paradas de emergencia en maquinaria crítica (Symrise AG).",
    icon: ShieldCheck,
  },
  {
    value: "0",
    label: "Accidentes en Turno",
    context: "Operatividad segura bajo matrices IPER, cultura de prevención activa y protocolos LOTO rigurosos.",
    icon: AlertTriangle,
    highlight: true,
  },
  {
    value: "18",
    label: "Certificaciones Oficiales",
    context: "Especializaciones verificables en Lean Six Sigma Green Belt, IA Aplicada, Análisis de Datos y PTAR.",
    icon: Award,
  },
  {
    value: "98%",
    label: "Estabilidad de Clarificación",
    context: "Optimización de dosificación de floculante y balances estequiométricos de masa en sistema DAF.",
    icon: TrendingUp,
  },
];

export default function ProofInNumbers() {
  return (
    <section id="metricas" className="py-24 border-b border-neutral-200 bg-[#F9F9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Editorial en Español */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase block">
              05 — IMPACTO CUANTIFICABLE
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
              Resultados en cifras reales.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Resultados concretos de rigor técnico, reducción de mermas y disciplina en planta. 
              Métricas auditadas que respaldan cada proyecto.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            <span>DATOS AUDITADOS EN PLANTA</span>
          </div>
        </div>

        {/* Carrusel / Grid de Tarjetas de Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="text-xs font-mono font-semibold">
                      #{String(idx + 1).padStart(2, "0")} // MÉTRICA
                    </span>
                    <Icon className="w-5 h-5 text-neutral-500 group-hover:text-neutral-900 transition-colors" />
                  </div>

                  {/* Cifra Gigante */}
                  <div>
                    <span className="text-5xl sm:text-6xl font-mono font-bold tracking-tight text-neutral-900 block leading-none">
                      {m.value}
                    </span>
                    <h3 className="text-base font-bold text-neutral-800 mt-2">
                      {m.label}
                    </h3>
                  </div>
                </div>

                {/* Explicación de Negocio Estandarizada */}
                <div className="pt-6 mt-6 border-t border-neutral-100">
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {m.context}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
