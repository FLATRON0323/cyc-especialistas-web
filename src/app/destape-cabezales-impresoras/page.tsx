import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/config/site';
import { Wrench, CheckCircle2, ShieldCheck, Sparkles, Clock, Phone, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Destape y Lavado de Cabezales de Impresoras en Medellín | C&C Especialistas",
  description: "Servicio técnico especializado en destape ultrasónico de cabezales e inyectores para Epson EcoTank y Canon MegaTank. Solución a líneas blancas, rayas y colores faltantes. WhatsApp +57 305 456 8996.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/destape-cabezales-impresoras`,
  },
  openGraph: {
    title: "Destape de Cabezales Epson y Canon en Medellín | C&C Especialistas",
    description: "Recupera la calidad de impresión de tu equipo. Lavado ultrasónico de inyectores con químicos especiales y prueba de calidad.",
    url: `${SITE_CONFIG.domainUrl}/destape-cabezales-impresoras`,
  },
};

export default function DestapeCabezalesPage() {
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
          "name": "Destape de Cabezales de Impresoras",
          "item": `${SITE_CONFIG.domainUrl}/destape-cabezales-impresoras`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Destape y Lavado Ultrasónico de Cabezales de Impresión",
      "serviceType": "Mantenimiento Técnico Especializado de Impresoras",
      "provider": {
        "@type": "LocalBusiness",
        "name": SITE_CONFIG.name,
        "telephone": `+${SITE_CONFIG.phoneRaw}`,
        "url": SITE_CONFIG.domainUrl,
      },
      "areaServed": SITE_CONFIG.coverage,
      "description": "Limpieza y desobstrucción ultrasónica de inyectores microscópicos para impresoras Epson EcoTank, Canon MegaTank y Brother.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Por qué mi impresora imprime con rayas blancas o no sale el color negro?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ocurre cuando la tinta se seca dentro de las boquillas microscópicas del cabezal debido a períodos de inactividad, uso de tintas genéricas de baja densidad o ingreso de burbujas de aire a los dampers. Las limpiezas automáticas reiteradas gastan tinta y pueden saturar las almohadillas sin resolver la obstrucción."
          }
        },
        {
          "@type": "Question",
          "name": "¿En qué consiste el lavado ultrasónico de cabezales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El cabezal se retira con precisión y se sumerge en una cuba ultrasónica con solventes desincrustantes térmicos que disuelven la tinta cristalizada sin dañar los cristales piezoeléctricos microscópicos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si el cabezal está quemado eléctricamente?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En C&C Especialistas contamos con stock de cabezales originales nuevos para Epson L3110, L3150, L3210, L3250, L4150, L805 y Canon con instalación profesional y garantía."
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
        
        {/* Hero */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800">
          <div className="max-w-5xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} className="text-brand-accent animate-pulse" /> Laboratorio Técnico de Precisión
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Destape y Lavado Ultrasónico de Cabezales en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Medellín y Valle de Aburrá</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              ¿Tus impresiones salen con <b>rayas blancas, textos borrosos, fotos descoloridas o las hojas salen en blanco</b> a pesar de tener tinta en los tanques? En <b>C&amp;C Especialistas</b> revivimos cabezales e inyectores tapados mediante lavado ultrasónico profesional y presurización de mangueras.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <a 
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20necesito%20destape%20de%20cabezal%20para%20mi%20impresora%20(indicar%20marca%20y%20modelo)`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <Phone size={18} /> Agendar Destape de Cabezal por WhatsApp
              </a>
              <Link 
                href="/#cotizador"
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl border border-slate-700 transition"
              >
                Diagnóstico en Línea
              </Link>
            </div>
          </div>
        </section>

        {/* Fases del Mantenimiento */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Protocolo de Laboratorio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">¿Cómo recuperamos un cabezal tapado en C&amp;C Especialistas?</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              No inyectamos jeringas con alcohol que puedan romper las membranas piezoeléctricas. Aplicamos el método avalado por fabricantes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Wrench size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">1. Desarme y Test Electrónico</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Medición de impedancia y estado de las bobinas del cabezal para verificar que no exista corto circuito en los inyectores.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                <Sparkles size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">2. Cuba Ultrasónica</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Vibración ultrasónica combinada con solventes térmicos especiales que desprenden la tinta seca sin contacto mecánico agresivo.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">3. Purga y Alineación</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Presurización de dampers, purga de mangueras de tinta y prueba de impresión con patrón de inyectores al 100%.
              </p>
            </div>
          </div>

          {/* Marcas */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-white">Especialistas en Cabezales de Tanque Continuo:</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Atendemos Epson EcoTank (series L, M y Workforce), Canon MegaTank (series G y GX), HP Smart Tank e impresoras Brother InkBenefit. Además contamos con venta de cabezales nuevos con instalación inmediata en Medellín.
            </p>
          </div>

          {/* Interlinking */}
          <div className="border-t border-slate-800 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Soluciones complementarias:
            </span>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="text-xs text-blue-400 hover:text-blue-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition">
                ← Inicio Taller Central
              </Link>
              <Link href="/reset-almohadillas-epson" className="text-xs text-orange-400 hover:text-orange-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition">
                Reset de Almohadillas Epson →
              </Link>
              <Link href="/#productos" className="text-xs text-emerald-400 hover:text-emerald-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition">
                Comprar Tintas Originales →
              </Link>
            </div>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}
