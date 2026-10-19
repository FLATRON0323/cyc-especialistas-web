"use client";
import { useState } from "react";
import Image from "next/image";
import { BotMessageSquare, X, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-40 right-4 sm:right-6 left-4 sm:left-auto w-[calc(100vw-2rem)] sm:w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden z-[100] flex flex-col"
            style={{ maxHeight: '400px', height: '100%' }}
          >
            <div className="bg-gradient-to-r from-brand-blue to-purple-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-brand-accent animate-pulse" />
                <span className="font-bold text-sm">Asistente IA (Beta)</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
                <X size={18} />
              </button>
            </div>
            <div className="flex-grow p-6 flex flex-col items-center justify-center text-center bg-gray-50">
              <BotMessageSquare size={48} className="text-gray-300 mb-4" />
              <h3 className="font-bold text-gray-700 mb-2">¡Hola! Estoy aprendiendo...</h3>
              <p className="text-xs text-gray-500 mb-4">
                Próximamente podré diagnosticar tu equipo automáticamente y conectarte con un técnico mediante IA.
              </p>
              <a href={SITE_CONFIG.whatsappBaseUrl} className="text-sm bg-brand-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition w-full">
                Hablar con un humano ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 bg-gradient-to-r from-brand-blue to-purple-600 text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center z-[100] group"
      >
        <Sparkles size={24} className="group-hover:animate-spin" />
      </button>

      {/* Legacy WhatsApp Button */}
      <a
        href={SITE_CONFIG.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center z-[100]"
      >
        <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </>
  );
}
