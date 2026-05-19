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
        className="fixed bottom-6 right-6 bg-brand-whatsapp text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center z-[100] bg-[#25D366]"
      >
        <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width={32} height={32} className="filter brightness-0 invert" />
      </a>
    </>
  );
}
