"use client";
import { useState } from "react";
import { BotMessageSquare, X, Sparkles, MessageCircle, ChevronRight, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const quickAnswers: Record<string, { title: string; answer: string; waText: string }> = {
    cabezal: {
      title: "Cabezal Tapado / Líneas en Blanco",
      answer: "Realizamos lavado ultrasónico de inyectores con químicos especiales para Epson y Canon. Diagnóstico rápido de 4 a 24 horas.",
      waText: "Hola, necesito destape de cabezales para mi impresora Epson/Canon",
    },
    almohadillas: {
      title: "Error de Almohadillas / Fin de Vida Útil",
      answer: "Hacemos el reseteo digital de firmware EEPROM oficial y reemplazo físico de esponjas receptoras para evitar derrames.",
      waText: "Hola, tengo la impresora bloqueada por error de almohadillas",
    },
    tintas_toner: {
      title: "Cotizar Tintas, Tóner o Repuestos",
      answer: "Disponemos de tintas Epson EcoTank (544, 504, 664), Canon, tóner HP y Brother con entrega el mismo día en el Valle de Aburrá.",
      waText: "Hola, quiero cotizar tintas o tóner para mi impresora",
    },
    computador: {
      title: "Computador Lento / Repotenciación SSD",
      answer: "Instalamos discos de estado sólido NVMe y ampliamos memoria RAM, acelerando tu computador hasta 10 veces sin perder archivos.",
      waText: "Hola, quiero repotenciar mi computador con disco sólido SSD",
    },
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-4 sm:right-6 left-4 sm:left-auto w-[calc(100vw-2rem)] sm:w-96 bg-white shadow-2xl rounded-3xl border border-gray-100 overflow-hidden z-[100] flex flex-col"
            style={{ maxHeight: "480px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-4 text-white flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-blue/30 border border-brand-accent/50 flex items-center justify-center">
                  <Sparkles size={16} className="text-brand-accent animate-pulse" />
                </div>
                <div>
                  <span className="font-bold text-sm block leading-tight">Asistente Técnico C&amp;C</span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> En línea en Medellín
                  </span>
                </div>
              </div>
              <button 
                onClick={() => { setIsOpen(false); setSelectedTopic(null); }} 
                className="hover:bg-white/10 p-1.5 rounded-full transition text-slate-300 hover:text-white"
                aria-label="Cerrar Asistente"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-5 overflow-y-auto space-y-4 bg-slate-50/50">
              {!selectedTopic ? (
                <>
                  <p className="text-xs text-slate-600 font-medium">
                    👋 ¡Hola! ¿Qué problema presenta tu equipo hoy? Selecciona una opción para darte solución inmediata:
                  </p>
                  <div className="space-y-2">
                    {Object.entries(quickAnswers).map(([key, item]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedTopic(key)}
                        className="w-full text-left p-3 rounded-xl bg-white border border-gray-200/80 hover:border-brand-blue hover:shadow-md transition-all flex items-center justify-between group"
                      >
                        <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue">
                          {item.title}
                        </span>
                        <ChevronRight size={14} className="text-slate-400 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-3 bg-white p-4 rounded-2xl border border-blue-100 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-brand-blue flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-emerald-500" /> Solución Recomendada:
                    </span>
                    <button
                      onClick={() => setSelectedTopic(null)}
                      className="text-[11px] text-slate-500 hover:text-slate-800 font-bold underline"
                    >
                      ← Volver
                    </button>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {quickAnswers[selectedTopic].title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {quickAnswers[selectedTopic].answer}
                  </p>
                  <a
                    href={`${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(quickAnswers[selectedTopic].waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
                  >
                    <MessageCircle size={15} /> Consultar por WhatsApp
                  </a>
                </div>
              )}

              <div className="pt-2 border-t border-slate-200/60 text-center">
                <a
                  href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20necesito%20hablar%20con%20un%20técnico%20de%20C%26C`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-brand-blue hover:underline font-bold flex items-center justify-center gap-1"
                >
                  <MessageCircle size={12} /> O habla directamente con un técnico humano →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir asistente técnico de diagnóstico"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-slate-950 via-brand-blue to-blue-700 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2.5 z-[100] border-2 border-white/20 group hover:shadow-brand-blue/40"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <Sparkles size={18} className="text-brand-accent group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">Diagnóstico Rápido</span>
      </button>
    </>
  );
}
