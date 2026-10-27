import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/config/site';
import { AlertTriangle, CheckCircle2, ShieldCheck, Wrench, Clock, Phone, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Reset de Almohadillas Epson en Medellín y Valle de Aburrá | C&C Especialistas",
  description: "Solución inmediata al error 'Una almohadilla de tinta de la impresora está al final de su vida útil' para Epson EcoTank L3110, L3250, L4150, L4260, L5190, L805. Reseteo oficial y cambio físico. WhatsApp +57 305 456 8996.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/reset-almohadillas-epson`,
  },
  openGraph: {
    title: "Reset de Almohadillas Epson en Medellín | Desbloqueo Inmediato",
    description: "Elimina el error de almohadillas fin de vida útil en impresoras Epson EcoTank. Servicio en taller Santa Cruz o atención a domicilio empresarial.",
    url: `${SITE_CONFIG.domainUrl}/reset-almohadillas-epson`,
  },
};

export default function ResetAlmohadillasPage() {
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
          "name": "Reset Almohadillas Epson",
          "item": `${SITE_CONFIG.domainUrl}/reset-almohadillas-epson`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Reset y Cambio de Almohadillas de Tinta Epson",
      "serviceType": "Desbloqueo y Mantenimiento de Impresoras",
      "provider": {
        "@type": "LocalBusiness",
        "name": SITE_CONFIG.name,
        "telephone": `+${SITE_CONFIG.phoneRaw}`,
        "url": SITE_CONFIG.domainUrl,
      },
      "areaServed": SITE_CONFIG.coverage,
      "description": "Desbloqueo de contadores EEPROM mediante firmware oficial de servicio técnico y reemplazo de esponjas receptoras para impresoras Epson EcoTank.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Por qué mi impresora Epson dice que las almohadillas llegaron al final de su vida útil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Las impresoras Epson cuentan con un contador interno programado de fábrica que calcula las limpiezas de cabezal y las impresiones realizadas. Cuando el contador llega al 100%, la máquina se bloquea automáticamente por seguridad para evitar que la tinta residual se desborde y dañe la tarjeta lógica."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tarda el reseteo y cambio de almohadillas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El reseteo y mantenimiento físico de almohadillas se realiza normalmente en menos de 2 horas en nuestro taller en Santa Cruz (Medellín) o el mismo día con recogida programada."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué modelos de impresoras Epson pueden resetear?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atendemos todas las series Epson EcoTank: L1110, L3110, L3150, L3210, L3250, L3251, L4150, L4160, L4260, L5190, L5290, L6161, L6171, L6270, L805, L8050, L1800, Workforce y más."
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
        
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800">
          <div className="max-w-5xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle size={14} className="animate-pulse" /> Solución Inmediata al Bloqueo de Almohadillas
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Reset y Cambio de Almohadillas Epson en <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">Medellín y Valle de Aburrá</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              ¿Tu impresora Epson parpadea con luces roja y verde o muestra el mensaje <b>"Una almohadilla de tinta de la impresora está al final de su vida útil"</b>? En <b>C&amp;C Especialistas</b> desbloqueamos el contador electrónico EEPROM y cambiamos las esponjas físicas para que tu equipo vuelva a imprimir sin riesgos de derrame interno.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <a 
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola,%20mi%20impresora%20Epson%20está%20bloqueada%20por%20almohadillas%20(indicar%20modelo)`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <Phone size={18} /> Desbloquear mi Impresora por WhatsApp
              </a>
              <Link 
                href="/#precios"
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl border border-slate-700 transition"
              >
                Ver Tarifas Claras
              </Link>
            </div>
          </div>
        </section>

        {/* Proceso Técnico */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Procedimiento Profesional C&amp;C
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">¿Por qué nunca debes resetear solo con programas piratas sin cambiar las almohadillas?</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Muchas personas usan programas descargados de internet que reinician el contador a cero pero dejan las esponjas llenas de tinta. Al poco tiempo, la tinta se desborda, entra en la tarjeta lógica y causa un cortocircuito irreversible que quema la placa madre. En nuestro laboratorio realizamos el procedimiento completo:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Wrench size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">1. Reseteo Lógico Seguro</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reinicio de los contadores internos con software oficial Epson Adjustment Program certificado para tu modelo específico.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">2. Cambio Físico de Esponjas</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Extracción de la caja de mantenimiento, limpieza del depósito y reemplazo por almohadillas absorbentes nuevas de alta densidad.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">3. Prueba de Impresión y Test</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Test de inyectores, alineación de cabezal y entrega con informe técnico garantizado por escrito.
              </p>
            </div>
          </div>

          {/* Modelos soportados */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-white">Modelos Epson Atendidos en Medellín, Bello y Envigado:</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Epson L3110", "Epson L3150", "Epson L3210", "Epson L3250", "Epson L3251", "Epson L4150", "Epson L4160", "Epson L4260", "Epson L5190", "Epson L5290", "Epson L6171", "Epson L6270", "Epson L805", "Epson L8050", "Epson L1800", "Epson M1120", "Epson M2140", "Epson M3170"].map((model, idx) => (
                <span key={idx} className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
                  {model}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="border-t border-slate-800 pt-10 space-y-6">
            <h3 className="text-2xl font-bold text-white">Preguntas Frecuentes sobre Almohadillas Epson</h3>
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
                <h4 className="font-bold text-white text-base">¿Puedo llevar la impresora a su local o la recogen?</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Puedes traerla directamente a nuestro taller central en Santa Cruz (Cl. 102 #49C-53 Int. 301, Medellín) o solicitar nuestro servicio de recogida empresarial en Medellín, Bello, Envigado e Itagüí.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
                <h4 className="font-bold text-white text-base">¿Se pierden las tintas o mis configuraciones de red Wi-Fi?</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  No, el reseteo solo limpia el contador de tinta residual de desecho. Tus niveles de tinta en los tanques y tus conexiones Wi-Fi permanecen intactos.
                </p>
              </div>
            </div>
          </div>

          {/* Interlinking */}
          <div className="border-t border-slate-800 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Otros servicios especializados:
            </span>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="text-xs text-blue-400 hover:text-blue-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition">
                ← Inicio Taller Central
              </Link>
              <Link href="/destape-cabezales-impresoras" className="text-xs text-amber-400 hover:text-amber-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition">
                Destape de Cabezales e Inyectores →
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
