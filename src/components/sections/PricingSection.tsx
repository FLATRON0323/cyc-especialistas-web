"use client";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";

export default function PricingSection() {
  const prices = [
    { service: "Revisión y Diagnóstico en Local", price: "$40.000", action: "Agendar revisión" },
    { service: "Mantenimiento Preventivo", price: "Cotizar por WhatsApp", action: "Cotizar preventivo" },
    { خدمت: "Formateo e Instalación de SO", price: "Cotizar por WhatsApp", action: "Cotizar formateo" },
    { service: "Upgrade de Disco Duro a SSD", price: "Cotizar por WhatsApp", action: "Cotizar SSD" },
    { service: "Servicio a Domicilio", price: "Cotizar por WhatsApp", action: "Solicitar visita" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <span className="text-brand-blue font-black tracking-widest text-sm uppercase bg-blue-100 px-4 py-1 rounded-full">Transparencia Total</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mt-6 tracking-tight leading-tight">
              Precios claros y honestidad <span className="text-brand-blue">brutal</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
              Creemos firmemente en el trabajo ético. Si determinamos que la reparación de tu equipo cuesta más que uno nuevo, te lo diremos sin rodeos para que no pierdas tu inversión.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-green-500" /> Diagnóstico certero presencial</li>
              <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-green-500" /> Repuestos 100% originales</li>
              <li className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle2 className="text-green-500" /> Sin precios ocultos ni recargos sorpresa</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 w-full"
          >
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-2xl relative">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="py-4 px-4 text-slate-500 uppercase text-xs font-black tracking-widest w-1/2">Servicio</th>
                      <th className="py-4 px-4 text-slate-500 uppercase text-xs font-black tracking-widest border-l border-slate-200">Precio (COP)</th>
                      <th className="py-4 px-4 text-slate-500 uppercase text-xs font-black tracking-widest border-l border-slate-200 text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices.map((item, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-white transition-colors">
                        <td className="py-5 px-4 font-bold text-slate-800 text-sm md:text-base">
                          {item.service || item.خدمت}
                        </td>
                        <td className="py-5 px-4 font-extrabold text-brand-blue border-l border-slate-100 whitespace-nowrap">
                          {item.price}
                        </td>
                        <td className="py-5 px-4 border-l border-slate-100 text-center">
                          <a 
                            href={`https://wa.me/573054568996?text=Hola,%20quisiera%20${item.action.toLowerCase()}`}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-whatsapp/10 text-whatsapp hover:bg-whatsapp hover:text-white transition-colors mx-auto"
                            title={item.action}
                          >
                            <MessageCircle size={16} />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-xs text-slate-400 font-medium text-center">
                * Los precios son una guía base y no incluyen el costo de repuestos adicionales de hardware. ¡Cotiza gratis por WhatsApp para un precio exacto para tu modelo!
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
