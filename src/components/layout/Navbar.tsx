"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X, MapPin, Clock, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar (Contact Info) */}
      <div className="bg-brand-dark text-white py-2 text-xs md:text-sm hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-accent" /> Medellín, Colombia (Atención Nacional)
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-brand-accent" /> Lunes a Sábado - Horario de Oficina
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-300">¿Emergencia técnica?</span>
            <a href={SITE_CONFIG.whatsappBaseUrl} className="text-brand-accent font-bold hover:underline flex items-center gap-1">
              <Phone size={14} /> {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3" : "bg-white py-5 shadow-sm"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center justify-center relative group w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]">
              <Image src="/logo.png" alt="C&C Logo" fill sizes="(max-width: 768px) 70px, 100px" className="object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            </a>
            <div className="hidden sm:block">
              <span className="font-bold text-xl tracking-tight text-slate-900 block leading-none">Especialistas</span>
              <span className="text-[0.65rem] uppercase font-black tracking-[0.2em] text-brand-blue">En Impresoras</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 font-semibold text-sm text-gray-600">
            {['Soluciones', 'Proceso', 'Resultados', 'Testimonios', 'Software', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-blue relative transition-colors group">
                {item}
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href={SITE_CONFIG.whatsappBaseUrl} className="hidden sm:flex bg-gradient-to-r from-brand-whatsapp to-green-500 text-white px-6 py-2.5 rounded-full font-bold items-center gap-2 hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all">
              <MessageCircle size={18} /> Hablar ahora
            </a>
            
            <button className="lg:hidden text-slate-800 p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[70px] left-0 w-full bg-white shadow-2xl z-40 border-t border-gray-100 lg:hidden flex flex-col p-6 gap-6"
          >
            {['Soluciones', 'Proceso', 'Resultados', 'Testimonios', 'Software', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setMenuOpen(false)}
                className="text-xl font-bold text-slate-800 hover:text-brand-blue"
              >
                {item}
              </a>
            ))}
            <a href={SITE_CONFIG.whatsappBaseUrl} className="bg-brand-whatsapp text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg">
              <MessageCircle /> Agendar Servicio Ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
