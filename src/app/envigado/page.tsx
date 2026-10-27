import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/config/site';
import { MapPin, Phone, ShieldCheck, CheckCircle2, Clock, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Mantenimiento de Impresoras y Computadores en Envigado | C&C Especialistas",
  description: "Servicio técnico para empresas, notarías y consultorios en Envigado. Reparación de impresoras láser HP, Brother, Kyocera y portátiles. Atención a domicilio. WhatsApp +57 305 456 8996.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/envigado`,
  },
  openGraph: {
    title: "Mantenimiento de Impresoras y Computadores en Envigado | C&C Especialistas",
    description: "Servicio técnico para empresas, notarías y consultorios en Envigado. Reparación de impresoras láser HP, Brother, Kyocera y portátiles.",
    url: `${SITE_CONFIG.domainUrl}/envigado`,
  },
};

export default function EnvigadoPage() {
  const breadcrumbJsonLd = {
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
        "name": "Mantenimiento en Envigado",
        "item": `${SITE_CONFIG.domainUrl}/envigado`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-slate-100">
        
        {/* Hero Envigado */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
          <div className="max-w-5xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <MapPin size={14} /> Soporte Corporativo en Envigado
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Mantenimiento de Impresoras y Computadores en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Envigado (Antioquia)</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              Atención presencial y a domicilio para oficinas, firmas contables y comercios en <b>El Dorado, Zúñiga, Otraparte, Jardines, Alcalá y Parque de Envigado</b>. Mantenimiento preventivo, reparación de unidades fusoras láser y soporte de servidores.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <a 
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20necesito%20servicio%20técnico%20en%20Envigado`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <Phone size={18} /> Solicitar Soporte en Envigado
              </a>
              <Link 
                href="/#precios"
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl border border-slate-700 transition"
              >
                Ver Tarifas Transparentes
              </Link>
            </div>
          </div>
        </section>

        {/* Casos y Servicios Envigado */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Wrench size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Fusores Láser HP y Kyocera</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cambio de filmina térmica, rodillos de presión y thermistores para impresoras monocromo y color de alto volumen.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Contratos Preventivos PYME</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Planes mensuales de revisión para que las empresas de Envigado nunca detengan su facturación electrónica.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Mantenimiento Térmico PC</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Limpieza profunda, cambio de pasta térmica de alto rendimiento (Artic MX-4) y optimización de Windows y Mac.
              </p>
            </div>
          </div>

          {/* Caso Real en Envigado */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Caso de Éxito Técnico en Envigado
            </span>
            <h2 className="text-2xl font-extrabold text-white">
              Reparación de Unidad Fusora HP LaserJet M404 en Empresa de Logística de Zúñiga
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              La máquina arrugaba las hojas y manchaba el tóner por desgaste de filmina y rodillo inferior. El equipo fue diagnosticado en visita técnica, se instaló unidad fusora original en menos de 4 horas y se entregó informe técnico con garantía directa de C&C Especialistas.
            </p>
          </div>

          {/* Tiempos de visita */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="text-brand-accent shrink-0" size={24} />
              <div>
                <p className="text-white font-bold text-sm">Visita Empresarial en Envigado:</p>
                <p className="text-slate-400 text-xs">Atención programada de lunes a viernes o recogida para taller.</p>
              </div>
            </div>
            <a 
              href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20quiero%20cotizar%20visita%20empresarial%20en%20Envigado`}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-6 py-3 rounded-xl transition"
            >
              Agendar Visita por WhatsApp
            </a>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}
