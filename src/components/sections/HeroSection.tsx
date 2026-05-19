"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Search, Play, ShieldCheck, TrendingUp, PlayCircle, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import VideoModal from "@/components/ui/VideoModal";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  return (
    <>
    <section className="relative bg-white pt-12 pb-24 overflow-hidden border-b border-gray-100">
      {/* Background accents (Dynamic glow) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl mix-blend-multiply opacity-60 animate-glow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl mix-blend-multiply opacity-60 animate-glow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 text-center lg:text-left pt-8 lg:pt-0">
          
          {/* Social Proof Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full mb-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10"></div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <Image key={i} className="w-6 h-6 rounded-full border-2 border-white relative z-0" src={`https://i.pravatar.cc/100?img=${i}`} alt="Cliente" width={24} height={24} />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-700">⭐ Más de <strong className="text-brand-blue">46.000 clientes</strong> confían en nosotros</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold mt-2 leading-[1.2] text-slate-900 tracking-tight"
          >
            Soluciones tecnológicas profesionales para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-600">impresoras y computadores</span> en Medellín y toda Colombia
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            Más de 17 años ayudando a empresas y hogares a mantener sus equipos funcionando sin fallas, con servicio técnico especializado, repuestos originales y atención inmediata.
          </motion.p>
          
          {/* Trust Micro Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6 mb-8 text-[0.8rem] font-bold text-slate-700"
          >
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-brand-blue" /> +17 años de experiencia</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-green-600" /> Empresa legalmente constituida</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-brand-blue" /> Facturación electrónica</span>
            <span className="flex items-center gap-1.5"><MapPin size={16} className="text-orange-500" /> Atención en Medellín y cobertura nacional</span>
            <span className="flex items-center gap-1.5"><PlayCircle size={16} className="text-red-500" /> Canal educativo (+ miles de seguidores)</span>
          </motion.div>

          {/* Brands Support */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4 mb-8 text-xs font-bold text-gray-500 uppercase tracking-widest"
          >
            Expertos en: <span className="text-brand-blue">Epson</span> • <span className="text-brand-blue">Canon</span> • <span className="text-brand-blue">HP</span> • <span className="text-brand-blue">Samsung</span> • <span className="text-brand-blue">Kyocera</span> • <span className="text-brand-blue">Ricoh</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href={`${SITE_CONFIG.whatsappBaseUrl}`} className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-brand-dark/20 hover:bg-black hover:scale-105 transition-all overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-purple-500 to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Calendar className="relative z-10 group-hover:animate-bounce" /> 
              <span className="relative z-10">Agendar Diagnóstico</span>
            </a>
            <a href="#soluciones" className="bg-white border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:border-brand-blue hover:text-brand-blue hover:bg-blue-50 transition-all">
              <Search size={18} /> Ver Soluciones
            </a>
          </motion.div>
        </div>
        
        {/* Visual / Image Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 mt-16 lg:mt-0 relative w-full flex justify-center lg:justify-end"
        >
          <div className="relative z-10 w-full max-w-md lg:max-w-lg">
            
            <div className="rounded-3xl shadow-2xl overflow-hidden border-8 border-white relative bg-gray-100 group">
              <Image 
                src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80" 
                alt="Mantenimiento de Impresoras" 
                width={800} 
                height={600} 
                priority
                className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              
              {/* Play button overlay (simulating video popup) */}
              <div 
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-center justify-center cursor-pointer transition-all"
              >
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-brand-blue shadow-2xl hover:scale-110 transition-transform backdrop-blur-sm group-hover:bg-brand-blue group-hover:text-white">
                  <Play size={32} className="ml-2" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg drop-shadow-md flex items-center justify-between">
                    Ver video de la empresa <TrendingUp className="text-brand-accent" />
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 hidden sm:flex items-center gap-4 z-20"
            >
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Garantía Real</p>
                <p className="text-base font-extrabold text-slate-800 border-b-2 border-green-500 inline-block">Servicio 100% Asegurado</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoUrl={SITE_CONFIG.videoDemoUrl} />
    </>
  );
}
