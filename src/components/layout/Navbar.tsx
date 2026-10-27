"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
              <MapPin size={14} className="text-brand-accent" /> Cl. 102 #49C-53 Int. 301, Santa Cruz, Medellín
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-brand-accent" /> {SITE_CONFIG.schedule.display}
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
          <Link href="/" className="flex items-center gap-3 group py-1">
            <div className="relative w-12 h-10 sm:w-16 sm:h-12 flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="C&C Especialistas en Impresión y Computadores" 
                fill 
                priority 
                sizes="(max-width: 768px) 48px, 64px" 
                className="object-contain transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-base sm:text-xl tracking-tight text-slate-900 leading-none group-hover:text-brand-blue transition-colors">
                C&amp;C Especialistas
              </span>
              <span className="text-[0.6rem] sm:text-[0.7rem] uppercase font-bold tracking-[0.16em] text-brand-blue mt-1 leading-none">
                En Impresión y Computadores
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 font-semibold text-sm text-gray-600">
            {[
              { label: "Diagnóstico", href: "/#cotizador" },
              { label: "Servicios", href: "/#servicios" },
              { label: "Repuestos & Tintas", href: "/#productos" },
              { label: "Cobertura", href: "/#cobertura" },
              { label: "Software", href: "/#software" },
              { label: "FAQ", href: "/#faq" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="hover:text-brand-blue relative transition-colors group">
                {item.label}
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href={SITE_CONFIG.whatsappBaseUrl} className="hidden sm:flex bg-gradient-to-r from-brand-whatsapp to-green-500 text-white px-6 py-2.5 rounded-full font-bold items-center gap-2 hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all">
              <MessageCircle size={18} /> Hablar ahora
            </a>
            
            <button className="lg:hidden text-slate-800 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú de navegación">
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
            className="fixed top-[70px] left-0 w-full bg-white shadow-2xl z-40 border-t border-gray-100 lg:hidden flex flex-col p-6 gap-5"
          >
            {[
              { label: "Diagnóstico Rápido", href: "/#cotizador" },
              { label: "Catálogo de Servicios", href: "/#servicios" },
              { label: "Repuestos y Tintas en Stock", href: "/#productos" },
              { label: "Zonas de Cobertura Valle de Aburrá", href: "/#cobertura" },
              { label: "Software C&C Manager", href: "/#software" },
              { label: "Preguntas Frecuentes", href: "/#faq" },
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setMenuOpen(false)}
                className="text-lg font-bold text-slate-800 hover:text-brand-blue"
              >
                {item.label}
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
