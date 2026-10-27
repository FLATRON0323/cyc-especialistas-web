import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/config/site';
import { MapPin, Phone, ShieldCheck, CheckCircle2, Clock, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Mantenimiento de Impresoras y Computadores en Itagüí y Sabaneta | C&C Especialistas",
  description: "Servicio técnico multimarca en Itagüí y Sabaneta. Mantenimiento y reparación de impresoras Epson, HP, Canon, Brother y computadores. Soporte a industrias y comercios. WhatsApp +57 305 456 8996.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/itagui-sabaneta`,
  },
  openGraph: {
    title: "Mantenimiento de Impresoras y Computadores en Itagüí y Sabaneta | C&C Especialistas",
    description: "Servicio técnico multimarca en Itagüí y Sabaneta. Mantenimiento de impresoras Epson, HP, Canon, Brother y computadores para industrias y comercios.",
    url: `${SITE_CONFIG.domainUrl}/itagui-sabaneta`,
  },
};

export default function ItaguiSabanetaPage() {
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
          "name": "Mantenimiento en Itagüí y Sabaneta",
          "item": `${SITE_CONFIG.domainUrl}/itagui-sabaneta`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mantenimiento Técnico de Impresoras y Computadores en Itagüí y Sabaneta",
      "serviceType": "Soporte Técnico Industrial y Comercial",
      "provider": {
        "@type": "LocalBusiness",
        "name": SITE_CONFIG.name,
        "telephone": `+${SITE_CONFIG.phoneRaw}`,
        "url": SITE_CONFIG.domainUrl,
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Itagüí, Antioquia",
        },
        {
          "@type": "AdministrativeArea",
          "name": "Sabaneta, Antioquia",
        },
      ],
      "description": "Soporte preventivo y correctivo para impresoras térmicas, láser, multifuncionales y computadores en industrias y comercios de Itagüí y Sabaneta.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Prestan servicio en bodegas y zonas industriales de Itagüí?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, atendemos empresas en San Fernando, Ditaires, Santa María, Autopista Sur y parques industriales con visita presencial o recogida rápida."
          }
        },
        {
          "@type": "Question",
          "name": "¿Reparan impresoras de etiquetas térmicas y multifuncionales de oficina?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atendemos impresoras Zebra, Xprinter, Epson, Canon y láser HP, Brother y Kyocera para puntos de venta, despachos y centros de distribución."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuentan con servicio en Sabaneta (Las Lomitas, Calle Larga, Parque)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, disponemos de cobertura completa en todo Sabaneta para empresas, consultorios y particulares con recogida programada en el mismo día."
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
        
        {/* Hero Itagüí y Sabaneta */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
          <div className="max-w-5xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <MapPin size={14} /> Cobertura Industrial y Comercial en Itagüí &amp; Sabaneta
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Mantenimiento de Impresoras y Cómputo en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Itagüí y Sabaneta</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              Soporte técnico para el sector industrial, centros comerciales y oficinas en <b>Ditaires, Santa María, Centro de Itagüí, San José, Parque de Sabaneta y Las Lomitas</b>. Recogida programada y diagnóstico certero con repuestos originales.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <a 
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20necesito%20servicio%20técnico%20en%20Itagüí%20o%20Sabaneta`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <Phone size={18} /> Solicitar Soporte en Itagüí / Sabaneta
              </a>
              <Link 
                href="/#servicios"
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl border border-slate-700 transition"
              >
                Ver Servicios Técnicos
              </Link>
            </div>
          </div>
        </section>

        {/* Casos y Servicios */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Wrench size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Impresoras Térmicas y POS</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reparación de impresoras térmicas de recibos y códigos de barras (Zebra, Epson TM-T20) para locales comerciales.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Mantenimiento Epson, Brother &amp; HP</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Corrección de falta de color, rayas blancas, cambio de almohadillas y rodillos de toma de papel gastados.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Formateo y Recuperación de Datos</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instalación limpia de sistemas operativos con respaldo de información crítica contable y facturación.
              </p>
            </div>
          </div>

          {/* Caso Real */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Caso de Éxito Técnico en Sabaneta
            </span>
            <h2 className="text-2xl font-extrabold text-white">
              Repotenciación de 5 Computadores All-in-One y Mantenimiento de Impresora Brother en Fábrica de Calzado
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Equipos con tiempos de encendido superiores a 7 minutos que trababan el despacho de mercancía. Se reemplazaron discos mecánicos por SSD NVMe de 500GB, mantenimiento térmico exhaustivo y cambio de rodillos de arrastre en impresora Brother multifuncional. Los equipos quedaron operativos y volando en menos de 48 horas.
            </p>
          </div>

          {/* Contacto */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="text-brand-accent shrink-0" size={24} />
              <div>
                <p className="text-white font-bold text-sm">Recogida y Soporte en Itagüí y Sabaneta:</p>
                <p className="text-slate-400 text-xs">Ruta diaria de mensajería técnica en el Sur del Valle de Aburrá.</p>
              </div>
            </div>
            <a 
              href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20quiero%20coordinar%20soporte%20en%20Itagüí%20o%20Sabaneta`}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-6 py-3 rounded-xl transition"
            >
              Contactar Asesor Técnico
            </a>
          </div>

          {/* Preguntas Frecuentes Locales en Itagüí y Sabaneta */}
          <div className="border-t border-slate-800 pt-12 space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Preguntas Frecuentes sobre Servicio Técnico en Itagüí y Sabaneta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2">
                <h3 className="font-semibold text-white text-base">¿Atienden bodegas y fábricas en Itagüí?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Sí, atendemos zonas industriales de Itagüí, San Fernando, Ditaires y Autopista Sur con atención presencial y recogida express.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2">
                <h3 className="font-semibold text-white text-base">¿Reparan impresoras térmicas y de etiquetas?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Damos mantenimiento a impresoras térmicas Zebra, Xprinter, Epson y Brother para logística, comercio y puntos de venta.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2">
                <h3 className="font-semibold text-white text-base">¿Tienen servicio a domicilio en Sabaneta?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Contamos con cobertura diaria en Sabaneta (Calle Larga, Las Lomitas, Parque) para recogida y entrega de computadores e impresoras.
                </p>
              </div>
            </div>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}
