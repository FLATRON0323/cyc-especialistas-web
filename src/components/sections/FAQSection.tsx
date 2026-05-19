"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "¿Dónde está ubicado el local de C&C Especialistas en Impresoras?",
      answer: "Nuestro centro de servicio especializado principal está ubicado en Medellín, Antioquia. Prestamos servicio a domicilio y cobertura presencial directa en zonas como El Poblado, Laureles, Envigado, Sabaneta, Bello e Itagüí. Además, recibimos y despachamos equipos reparados a nivel local y departamental."
    },
    {
      question: "¿Cómo funciona el servicio técnico de reparación si estoy fuera de Medellín o de Antioquia?",
      answer: "Somos un referente nacional en reparación. Si te encuentras en Bogotá, Cali, Barranquilla, Bucaramanga o cualquier otro municipio de Colombia, puedes enviarnos tu impresora o computador de forma segura a través de empresas transportadoras aliadas (como Servientrega, Deprisa o Interrapidísimo). Diagnosticamos tu equipo en nuestro taller centralizado en Medellín y te lo devolvemos completamente reparado con todas las garantías de envío."
    },
    {
      question: "¿Cuánto cuesta el diagnóstico técnico de mi impresora o computador?",
      answer: "La revisión y diagnóstico detallado en nuestro local físico tiene un costo base de $40.000 COP. En este proceso, un técnico certificado desarma el equipo, detecta la falla física o de firmware y te entrega una cotización formal. Si apruebas la reparación, el costo del diagnóstico se abona al valor final del servicio técnico."
    },
    {
      question: "¿Qué marcas de impresoras reparan y qué garantía ofrecen?",
      answer: "Somos especialistas multimarca con amplia trayectoria en Epson, Canon, HP, Brother, Samsung, Ricoh y Kyocera, tanto en tecnologías de inyección de tinta (EcoTank/Smart Tank), láser monocromáticas y color, como en impresoras térmicas de etiquetas y POS. Todas nuestras reparaciones incluyen una garantía real escrita de soporte y repuestos originales."
    },
    {
      question: "¿Ofrecen servicio de mantenimiento a domicilio para empresas y hogares?",
      answer: "Sí, prestamos servicio técnico a domicilio en Medellín y el Área Metropolitana para mantenimientos preventivos y configuraciones de red. Si el equipo presenta una falla física compleja que requiera herramientas de precisión (como lavado ultrasónico de cabezales o soldaduras electrónicas), nuestro mensajero lo retira de forma segura y lo traslada a nuestro laboratorio central para ser intervenido."
    },
    {
      question: "¿Cómo me puedo comunicar para agendar una cita o pedir información?",
      answer: "El canal más rápido y cercano es nuestro WhatsApp de soporte directo (+57 305 456 8996), donde un asesor humano resolverá tus dudas preliminares de inmediato. También puedes escribirnos a nuestro correo oficial mantenimientoimpresorass@gmail.com o visitar nuestros canales en redes sociales."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative border-t border-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl mix-blend-multiply opacity-50 -ml-20 -mb-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="bg-blue-100 text-brand-blue px-4 py-1.5 text-xs font-black rounded-full uppercase tracking-widest mb-4 inline-block">
            Resolviendo Dudas
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Todo lo que necesitas saber sobre nuestro servicio técnico en Medellín y envíos nacionales.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:text-brand-blue transition-colors gap-4"
                >
                  <span className="flex items-center gap-3 text-base md:text-lg">
                    <HelpCircle className="text-brand-blue shrink-0" size={20} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 shrink-0 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-blue" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-slate-50 text-slate-600 text-sm md:text-base leading-relaxed bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium mb-4">¿Tienes otra consulta o prefieres hablar directamente con un técnico?</p>
          <a
            href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20tengo%20una%20pregunta%20sobre%20el%20servicio%20técnico`}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-whatsapp to-green-500 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-green-500/20 hover:scale-105 hover:shadow-2xl transition-all"
          >
            <MessageCircle size={22} />
            Consultar por WhatsApp gratis
          </a>
        </div>
      </div>
    </section>
  );
}
