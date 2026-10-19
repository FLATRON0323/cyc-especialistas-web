"use client";
import { useState } from "react";
import { Wrench, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function QuickDiagnosticSection() {
  const [device, setDevice] = useState("impresora_tinta");
  const [issue, setIssue] = useState("cabezal");
  const [location, setLocation] = useState("Medellín");

  const issuesByDevice: Record<string, { id: string; label: string; solution: string; time: string }[]> = {
    impresora_tinta: [
      { id: "cabezal", label: "Líneas blancas / Cabezal tapado", solution: "Lavado ultrasónico de inyectores y presurización de mangueras de tinta continua.", time: "24 a 48 horas" },
      { id: "almohadillas", label: "Bloqueo por fin de vida de almohadillas", solution: "Cambio físico de esponjas receptoras y reseteo digital de firmware EEPROM.", time: "Mismo día / 24 horas" },
      { id: "atasco", label: "Atasco constante de papel / No jala hojas", solution: "Mantenimiento y cambio de rodillos de arrastre (pickup roller) y sensor óptico.", time: "24 horas" },
      { id: "luces", label: "Luces parpadean / Error general", solution: "Diagnóstico electrónico de placa lógica, encoders y motor de carro.", time: "24 a 48 horas" }
    ],
    impresora_laser: [
      { id: "manchas", label: "Hojas salen manchadas o con rayas negras", solution: "Mantenimiento de unidad fusora, cambio de película de teflón y rodillo de presión.", time: "24 a 48 horas" },
      { id: "atasco_laser", label: "Papel se queda atascado en el fusor", solution: "Reemplazo de piñonería, engranajes y sensores térmicos de fusión.", time: "24 horas" },
      { id: "toner", label: "No reconoce tóner / Impresión muy clara", solution: "Revisión de contactos de polarización de alta tensión y rodillo magnético.", time: "24 horas" }
    ],
    computador: [
      { id: "lento", label: "Extremadamente lento para abrir programas", solution: "Repotenciación con Disco de Estado Sólido (SSD NVMe) + Clonación / SO limpio.", time: "Mismo día / 24 horas" },
      { id: "apaga", label: "Se sobrecalienta o se apaga trabajando", solution: "Mantenimiento térmico profundo, cambio de pasta térmica de alta conductividad.", time: "Mismo día / 24 horas" },
      { id: "no_enciende", label: "No enciende / Pantalla negra", solution: "Diagnóstico electrónico de placa madre, chip de carga y fuente de poder.", time: "24 a 48 horas" },
      { id: "pantalla", label: "Pantalla rota / Bisagras quebradas", solution: "Reconstrucción estructural de bisagras o cambio de panel LED de alta definición.", time: "24 a 48 horas" }
    ]
  };

  const currentIssues = issuesByDevice[device] || issuesByDevice.impresora_tinta;
  const selectedIssueData = currentIssues.find(i => i.id === issue) || currentIssues[0];

  const deviceNames: Record<string, string> = {
    impresora_tinta: "Impresora Tinta Continua (Epson / Canon / HP)",
    impresora_laser: "Impresora Láser (HP / Brother / Kyocera)",
    computador: "Computador o Portátil"
  };

  const whatsappMessage = `Hola C&C Especialistas, usé el cotizador web:%0A- Equipo: ${deviceNames[device]}%0A- Síntoma: ${selectedIssueData.label}%0A- Municipio: ${location}%0ADeseo agendar la revisión técnica ($40.000 COP).`;

  return (
    <section id="cotizador" className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} className="text-brand-accent animate-pulse" /> Cotizador y Diagnóstico Preliminar
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Descubre la solución y cotiza en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-400">segundos</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base md:text-lg">
            Selecciona tu tipo de equipo y la falla que presenta para conocer el procedimiento técnico recomendado y tiempos estimados.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Step 1: Device */}
          <div className="mb-8">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
              1. Selecciona tu Tipo de Equipo:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "impresora_tinta", label: "Impresora Tinta Continua (Epson/Canon/HP)" },
                { id: "impresora_laser", label: "Impresora Láser (HP/Brother/Kyocera)" },
                { id: "computador", label: "Computador o Portátil" }
              ].map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setDevice(opt.id);
                    setIssue(issuesByDevice[opt.id][0].id);
                  }}
                  className={`p-4 rounded-2xl text-left border text-sm font-bold transition-all ${
                    device === opt.id
                      ? "bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/50"
                      : "bg-slate-900/60 text-slate-300 border-slate-700 hover:border-slate-600"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Issue */}
          <div className="mb-8">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
              2. ¿Cuál es el síntoma principal?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentIssues.map(iss => (
                <button
                  key={iss.id}
                  type="button"
                  onClick={() => setIssue(iss.id)}
                  className={`p-4 rounded-2xl text-left border text-sm font-semibold transition-all ${
                    issue === iss.id
                      ? "bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-600/20 ring-2 ring-emerald-400/50"
                      : "bg-slate-900/60 text-slate-300 border-slate-700 hover:border-slate-600"
                  }`}
                >
                  {iss.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Location */}
          <div className="mb-10">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
              3. Tu Municipio / Zona de Atención:
            </label>
            <div className="flex flex-wrap gap-2">
              {["Medellín", "Bello", "Envigado", "Itagüí", "Sabaneta", "Copacabana", "Girardota", "Otra ciudad (Envío Nacional)"].map(mun => (
                <button
                  key={mun}
                  type="button"
                  onClick={() => setLocation(mun)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    location === mun
                      ? "bg-brand-accent text-slate-950 border-brand-accent shadow"
                      : "bg-slate-900/80 text-slate-400 border-slate-700 hover:text-white"
                  }`}
                >
                  {mun}
                </button>
              ))}
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-slate-900 border border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400">
                <CheckCircle2 size={16} /> Procedimiento Técnico Recomendado:
              </div>
              <p className="text-white text-base sm:text-lg font-bold leading-snug">
                {selectedIssueData.solution}
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
                <span>⏱️ <b>Tiempo estimado:</b> {selectedIssueData.time}</span>
                <span>💵 <b>Revisión técnica en taller:</b> $40.000 COP</span>
                <span>🛡️ <b>Garantía:</b> Escrita de servicio</span>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-green-600/20 hover:scale-105 transition-all text-sm uppercase tracking-wider"
              >
                <MessageCircle size={18} />
                <span>Agendar por WhatsApp</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
