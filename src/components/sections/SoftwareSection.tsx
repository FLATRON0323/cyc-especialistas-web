"use client";
import { useState } from "react";
import { CheckCircle2, ArrowRight, Play, Sparkles, Layers, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import VideoModal from "@/components/ui/VideoModal";

export default function SoftwareSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="software" className="py-28 bg-brand-dark relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5 mix-blend-screen"></div>
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-brand-blue/20 via-transparent to-transparent opacity-80 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-accent/10 via-transparent to-transparent opacity-60 z-0 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-white">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white font-black text-xs tracking-[0.2em] backdrop-blur-md mb-4 uppercase border border-white/20 shadow-lg">
            Ecosistema Digital Propio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Nuestros Desarrollos de Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">SaaS Especializado</span>
          </h2>
          <p className="mt-4 text-white/80 text-base md:text-lg">
            Tecnología desarrollada por C&amp;C Especialistas para optimizar procesos comerciales, control de talleres y centros de producción gráfica.
          </p>
        </div>

        {/* 2 Software Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: C&C Manager */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-8 flex flex-col justify-between hover:border-yellow-400/50 transition-all shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} className="text-brand-accent" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} /> Gestión de Servicio Técnico
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                C&amp;C Manager
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Plataforma inteligente diseñada especialmente para <b>talleres de celulares, computadores y servicio técnico de impresoras</b>. Control absoluto de garantías, inventarios, tickets de reparación automáticos y seguimiento web en tiempo real para el cliente.
              </p>

              <ul className="space-y-3 text-sm text-slate-200 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-accent shrink-0" size={18} />
                  <span>Tickets de servicio con código QR para el cliente</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-accent shrink-0" size={18} />
                  <span>Control de garantías, repuestos y alertas por WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-accent shrink-0" size={18} />
                  <span>Arqueos de caja, reportes financieros y estados de orden</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 flex flex-wrap gap-3 pt-4 border-t border-slate-800">
              <a 
                href={SITE_CONFIG.ccmanagerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-brand-accent to-yellow-400 text-slate-900 px-6 py-3.5 rounded-xl font-black text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20"
              >
                <span>Conocer C&amp;C Manager</span>
                <ArrowRight size={16} />
              </a>
              <a 
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20deseo%20una%20demo%20de%20CC%20Manager%20para%20talleres`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all"
              >
                Pedir Demo
              </a>
            </div>
          </div>

          {/* Card 2: PaperFlow */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-400/50 transition-all shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layers size={120} className="text-blue-400" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} /> Papelería Creativa &amp; Producción
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                PaperFlow
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Software especializado para <b>papelería creativa, centros de copiado, sublimación y diseño gráfico</b>. Automatiza la cotización de proyectos, cálculo de gramajes de papel, consumo de tintas y flujo de pedidos de clientes en un solo panel.
              </p>

              <ul className="space-y-3 text-sm text-slate-200 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-400 shrink-0" size={18} />
                  <span>Calculadora de costos de papel, vinilo y tintas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-400 shrink-0" size={18} />
                  <span>Gestión de pedidos personalizados y fechas de entrega</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-400 shrink-0" size={18} />
                  <span>Panel interactivo para cotizaciones rápidas al instante</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 flex flex-wrap gap-3 pt-4 border-t border-slate-800">
              <a 
                href={SITE_CONFIG.paperflowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-black text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <span>Explorar PaperFlow</span>
                <ArrowRight size={16} />
              </a>
              <a 
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20quiero%20información%20sobre%20el%20software%20PaperFlow%20para%20papelería%20creativa`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all"
              >
                Pedir Demo
              </a>
            </div>
          </div>

        </div>

      </div>
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoUrl="https://www.youtube.com/embed/RfScIWMNDn4?autoplay=1" />
    </section>
  );
}
