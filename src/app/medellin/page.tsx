import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/config/site';
import { MapPin, Phone, ShieldCheck, CheckCircle2, Clock, Wrench } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Mantenimiento y Reparación de Impresoras y Computadores en Medellín | C&C Especialistas",
  description: "Servicio técnico especializado en impresoras Epson, Canon, HP, Brother y Kyocera, y computadores en Medellín: Santa Cruz, El Poblado, Laureles, Belén, Centro, Robledo y Castilla. WhatsApp +57 305 456 8996.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/medellin`,
  },
  openGraph: {
    title: "Mantenimiento de Impresoras y Computadores en Medellín | C&C Especialistas",
    description: "Taller central en Santa Cruz y servicio a domicilio en El Poblado, Laureles, Belén, Centro, Robledo y todo Medellín.",
    url: `${SITE_CONFIG.domainUrl}/medellin`,
  },
};

export default function MedellinPage() {
  const schemasJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": SITE_CONFIG.domainUrl,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Mantenimiento en Medellín",
          "item": `${SITE_CONFIG.domainUrl}/medellin`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mantenimiento y Reparación de Impresoras y Computadores en Medellín",
      "serviceType": "Reparación y Mantenimiento Técnico",
      "provider": {
        "@type": "LocalBusiness",
        "name": SITE_CONFIG.name,
        "telephone": `+${SITE_CONFIG.phoneRaw}`,
        "url": SITE_CONFIG.domainUrl,
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Medellín, Antioquia",
      },
      "description": "Servicio técnico especializado en impresoras Epson, Canon, HP, Brother, Kyocera y mantenimiento de computadores en Medellín (Santa Cruz, El Poblado, Laureles, Belén, La Candelaria, Robledo y Castilla).",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Dónde queda el taller central de C&C Especialistas en Medellín?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestra sede principal está ubicada en Cl. 102 #49C-53 Int. 301, Santa Cruz, Medellín, y contamos con ruta diaria de recogida y entrega a domicilio en El Poblado, Laureles, Belén, Centro, Robledo, Castilla y Aranjuez."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué servicios técnicos realizan en Medellín para impresoras y computadores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Realizamos destape ultrasónico de cabezales Epson y Canon, reseteo y cambio físico de almohadillas, reparación de unidades fusoras láser HP, Brother y Kyocera, y repotenciación de computadores con SSD y memoria RAM."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tarda el diagnóstico técnico en Medellín?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El diagnóstico técnico en taller tarda entre 4 y 24 horas hábiles. Los mantenimientos preventivos, recargas y cambios de consumibles se entregan generalmente el mismo día."
          }
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemasJsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-slate-100">

        {/* Hero Medellín */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
          <div className="max-w-5xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <MapPin size={14} /> Taller Central Santa Cruz y Domicilio en Medellín
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Mantenimiento y Reparación de Impresoras y Computadores en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Medellín (Antioquia)</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              Atención especializada para empresas, oficinas, consultorios y hogares en <b>El Poblado, Laureles - Estadio, Belén, La Candelaria (Centro), Robledo, Castilla, Aranjuez, Buenos Aires, Guayabal y Santa Cruz</b>. Más de 18 años de experiencia con garantía directa.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <a
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20necesito%20servicio%20técnico%20en%20Medellín`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <Phone size={18} /> Solicitar Servicio en Medellín
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

        {/* Casos y Servicios Medellín */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Wrench size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Destape Cabezales Epson y Canon</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Recuperación ultrasónica de inyectores tapados por tintas secas o falta de uso en series EcoTank L y Canon MegaTank.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Reset Almohadillas Bloqueadas</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reinicio de contador de impresión EEPROM y cambio físico de almohadillas por bloqueo de luces rojas intermitentes.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Repotenciación SSD y RAM</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instalación de unidades de estado sólido NVMe/SATA y ampliación de memoria para computadores y portátiles en Medellín.
              </p>
            </div>
          </div>

          {/* Sede Central */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Sede Principal en Medellín
            </span>
            <h2 className="text-2xl font-extrabold text-white">
              Taller Especializado en Santa Cruz con Recogida en Todo Medellín
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Visítanos en <b>{SITE_CONFIG.address}</b> o solicita nuestra ruta diaria de recogida y entrega en El Poblado, Laureles, Belén, Centro, Guayabal, Robledo y Castilla. Trabajamos con factura electrónica, repuestos originales y garantía por escrito.
            </p>
          </div>

          {/* Tiempos de recogida */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="text-brand-accent shrink-0" size={24} />
              <div>
                <p className="text-white font-bold text-sm">Horario de Atención en Medellín:</p>
                <p className="text-slate-400 text-xs">{SITE_CONFIG.schedule.display}</p>
              </div>
            </div>
            <a
              href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20quiero%20agendar%20servicio%20en%20Medellín`}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-6 py-3 rounded-xl transition"
            >
              Agendar Servicio por WhatsApp
            </a>
          </div>

          {/* Preguntas Frecuentes Locales en Medellín */}
          <div className="border-t border-slate-800 pt-12 space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Preguntas Frecuentes sobre Servicio Técnico en Medellín
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2">
                <h3 className="font-semibold text-white text-base">¿Dónde queda el taller en Medellín?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  En Cl. 102 #49C-53 Int. 301, Santa Cruz, Medellín. También recogemos equipos en El Poblado, Laureles, Belén y el Centro.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2">
                <h3 className="font-semibold text-white text-base">¿Qué marcas de impresoras reparan?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Epson EcoTank, Canon MegaTank, HP Ink Tank/LaserJet, Brother, Kyocera, Ricoh y Samsung con repuestos originales.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2">
                <h3 className="font-semibold text-white text-base">¿Cuánto tarda el diagnóstico técnico?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Entre 4 y 24 horas hábiles. Si apruebas la reparación, el costo del diagnóstico se abona al valor total del servicio.
                </p>
              </div>
            </div>
          </div>

          {/* Otras Zonas de Cobertura en el Valle de Aburrá */}
          <div className="border-t border-slate-800 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Otras zonas con servicio técnico directo:
            </span>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="text-xs text-blue-400 hover:text-blue-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition">
                Inicio C&amp;C Especialistas →
              </Link>
              <Link href="/bello" className="text-xs text-emerald-400 hover:text-emerald-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition">
                Servicio en Bello →
              </Link>
              <Link href="/envigado" className="text-xs text-blue-400 hover:text-blue-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition">
                Servicio en Envigado →
              </Link>
              <Link href="/itagui-sabaneta" className="text-xs text-purple-400 hover:text-purple-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition">
                Servicio en Itagüí &amp; Sabaneta →
              </Link>
            </div>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}

