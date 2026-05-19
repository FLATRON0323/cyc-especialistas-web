"use client";
import { useState } from "react";
import Image from "next/image";
import { Youtube, Play } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";
import VideoModal from "@/components/ui/VideoModal";

export default function YoutubeSection() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const videos = [
    { 
      title: "Desarmado y Mantenimiento de Epson L", 
      desc: "Guía paso a paso para desarmar, limpiar y reparar la serie EcoTank de Epson de forma segura.", 
      img: "https://img.youtube.com/vi/OHjdy0eSbd4/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/OHjdy0eSbd4?autoplay=1"
    },
    { 
      title: "Cómo Solucionar Errores y Atascos de Papel", 
      desc: "Diagnóstico de fallas en sensores, rodillos y engranajes mecánicos internos paso a paso.", 
      img: "https://img.youtube.com/vi/J4V7T921ZFU/hqdefault.jpg",
      embedUrl: "https://www.youtube.com/embed/J4V7T921ZFU?autoplay=1" 
    },
    { 
      title: "Limpieza Correcta de Cabezales de Impresión", 
      desc: "Uso adecuado del líquido limpia-cabezales para destapar inyectores sin dañar componentes electrónicos.", 
      img: "https://img.youtube.com/vi/19qruBMxmlQ/hqdefault.jpg", 
      embedUrl: "https://www.youtube.com/embed/19qruBMxmlQ?autoplay=1",
      hideMobile: true 
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="max-w-2xl text-center md:text-left">
            <span className="bg-red-50 text-red-600 px-4 py-1.5 text-xs font-black rounded-full uppercase tracking-widest mb-4 inline-block border border-red-200">Educación Técnica Nivel 3</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">Aprende antes de reparar</h2>
            <p className="text-gray-600 mt-4 font-medium text-lg leading-relaxed">Compartimos nuestro conocimiento técnico abiertamente para que evites fallas costosas en tus equipos.</p>
          </div>
          <div className="mt-8 md:mt-0">
            <a href={SITE_CONFIG.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-red-600 hover:bg-red-700 hover:-translate-y-1 text-white px-8 py-4 rounded-xl font-extrabold transition-all shadow-xl shadow-red-200 uppercase tracking-widest text-sm text-center">
              <Youtube size={24} /> Visitar Canal
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              onClick={() => setActiveVideoUrl(vid.embedUrl)}
              className={`group cursor-pointer flex flex-col ${vid.hideMobile ? 'hidden lg:flex' : ''}`}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-slate-100 mb-6 shadow-lg outline outline-0 outline-offset-4 outline-red-500 group-hover:outline-[3px] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center group-hover:bg-black/40 transition-colors z-10">
                  <div className="w-20 h-20 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all shadow-2xl">
                    <Play className="ml-1" size={32} />
                  </div>
                </div>
                <Image 
                  src={vid.img} 
                  alt={vid.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 mix-blend-overlay z-0" 
                />
              </div>
              <h4 className="font-extrabold text-slate-800 text-xl group-hover:text-red-600 transition-colors leading-tight">{vid.title}</h4>
              <p className="text-sm font-medium text-gray-500 mt-2">{vid.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <VideoModal isOpen={!!activeVideoUrl} onClose={() => setActiveVideoUrl(null)} videoUrl={activeVideoUrl || ""} />
    </section>
  );
}
