import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/config/site';
import { MapPin, Phone, ShieldCheck, CheckCircle2, Clock, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Mantenimiento y Reparación de Impresoras y Computadores en Bello | C&C Especialistas",
  description: "Servicio técnico especializado en impresoras Epson, Canon, HP, Brother y computadores en Bello, Niquía, Cabañas, Navarra y Parque de Bello. Domicilio empresarial y taller central. WhatsApp +57 305 456 8996.",
  alternates: {
    canonical: "/bello",
  },
};

export default function BelloPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-slate-100">
        
        {/* Hero Bello */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
          <div className="max-w-5xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <MapPin size={14} /> Servicio Técnico en Bello y Norte del Valle de Aburrá
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Mantenimiento y Reparación de Impresoras y Computadores en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Bello (Antioquia)</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              Atención rápida para empresas, consultorios, notarías y hogares en <b>Niquía, Parque de Bello, Cabañas, Navarra, Alcalá, Zamora, Copacabana y Girardota</b>. Servicio con recogida programada y taller físico central en Santa Cruz a solo minutos.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <a 
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20necesito%20servicio%20técnico%20en%20Bello`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <Phone size={18} /> Solicitar Servicio en Bello
              </a>
              <Link 
                href="/#servicios"
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl border border-slate-700 transition"
              >
                Ver Catálogo de Servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Casos y Servicios Bello */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Wrench size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Destape Cabezales Epson y Canon</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Recuperación ultrasónica de inyectores tapados por tintas secas o falta de uso en series EcoTank L y Canon G.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Reset Almohadillas Bloqueadas</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reinicio de contador de impresión y cambio físico de almohadillas por bloqueo de luces rojas intermitentes.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Repotenciación SSD y RAM</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instalación de discos de estado sólido NVMe/SATA y ampliación de memoria para laptops lentos en Bello.
              </p>
            </div>
          </div>

          {/* Caso Real en Bello */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Caso de Éxito Técnico en Bello
            </span>
            <h2 className="text-2xl font-extrabold text-white">
              Recuperación de 3 Impresoras Epson L3250 en Consultorio Médico de Niquía
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              El cliente presentaba atascos continuos y error de fin de vida útil de almohadillas que impedían expedir órdenes médicas. Nuestro mensajero recogió los tres equipos en el sector Niquía, se realizó lavado ultrasónico de cabezales, cambio de almohadillas y entrega en menos de 24 horas con factura electrónica y garantía de 3 meses.
            </p>
          </div>

          {/* Tiempos de recogida */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="text-brand-accent shrink-0" size={24} />
              <div>
                <p className="text-white font-bold text-sm">Tiempo de Recogida Programada en Bello:</p>
                <p className="text-slate-400 text-xs">Mismo día o máximo 2 horas para emergencias empresariales.</p>
              </div>
            </div>
            <a 
              href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20quiero%20agendar%20recogida%20en%20Bello`}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-6 py-3 rounded-xl transition"
            >
              Agendar Recogida por WhatsApp
            </a>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}
