import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/config/site';
import {
  Globe,
  Share2,
  Search,
  MapPin,
  Megaphone,
  Phone,
  Sparkles,
  Building2,
  Wrench,
  ArrowRight,
  ExternalLink,
  Code2,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Diseño Web Medellín, Software Personalizado, Redes Sociales y SEO | C&C Software Studio",
  description:
    "C&C Software Studio (C&C Especialistas): creación de páginas web Medellín, diseño web Medellín, software personalizado para diversos rubros, gestión de redes sociales Medellín y posicionamiento SEO Medellín.",
  keywords: [
    "diseño web Medellín",
    "creación de páginas web Medellín",
    "posicionamiento SEO Medellín",
    "gestión de redes sociales Medellín",
    "software personalizado Medellín",
    "personalización de software para empresas",
    "posicionamiento GEO",
    "Google Business Profile Medellín",
    "C&C Software Studio",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/servicios-web`,
  },
  openGraph: {
    title: "Páginas Web, Redes Sociales y Posicionamiento SEO en Medellín | C&C Software Studio",
    description:
      "Diseño web Medellín, creación de páginas web Medellín, gestión de redes sociales Medellín y posicionamiento SEO Medellín para empresas y emprendimientos del Valle de Aburrá.",
    url: `${SITE_CONFIG.domainUrl}/servicios-web`,
    siteName: SITE_CONFIG.name,
    locale: "es_CO",
    type: "website",
  },
};

export default function ServiciosWebPage() {
  const whatsappUrl = `${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(
    "Hola, quiero pedir una cotización por WhatsApp para servicios web, redes sociales y posicionamiento SEO con C&C Software Studio."
  )}`;

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
          "name": "Servicios Web - C&C Software Studio",
          "item": `${SITE_CONFIG.domainUrl}/servicios-web`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "C&C Software Studio — Diseño Web, Software Personalizado, Redes Sociales y Posicionamiento SEO y GEO en Medellín",
      "serviceType": "Diseño Web, Software Personalizado para Diversos Rubros, Gestión de Redes Sociales, Posicionamiento SEO y GEO, Google Business Profile y Exposición de Marca",
      "url": `${SITE_CONFIG.domainUrl}/servicios-web`,
      "provider": {
        "@type": "LocalBusiness",
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.domainUrl,
        "telephone": `+${SITE_CONFIG.phoneRaw}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Cl. 102 #49C-53 Int. 301, Santa Cruz",
          "addressLocality": "Medellín",
          "addressRegion": "Antioquia",
          "postalCode": "050003",
          "addressCountry": "CO",
        },
      },
      "areaServed": SITE_CONFIG.coverage,
      "description":
        "Creación y personalización de páginas web, desarrollo y personalización de software a la medida para diversos rubros, creación y gestión de redes sociales, posicionamiento SEO y GEO (Google, ChatGPT, Perplexity, Gemini), fichas de Google Business Profile y directorios, y exposición de marca para empresas, negocios y emprendimientos de Medellín y el Valle de Aburrá.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué incluye el servicio de diseño web y SEO de C&C Software Studio en Medellín?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Incluye creación y personalización de páginas web, gestión de redes sociales, posicionamiento SEO en Google y GEO para buscadores de IA (ChatGPT, Perplexity, Gemini), optimización de Google Business Profile, exposición de marca y desarrollo o personalización de software para diversos rubros."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo se cotiza una página web, redes sociales o software personalizado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cada proyecto se cotiza de forma personalizada según los objetivos y alcance de tu negocio. Escríbenos por WhatsApp al 305 456 8996 para recibir tu cotización."
          }
        },
        {
          "@type": "Question",
          "name": "¿Para qué tipo de negocios trabajan en Medellín y el Valle de Aburrá?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trabajamos con empresas, negocios locales y emprendimientos de Medellín, Bello, Envigado, Itagüí, Sabaneta, Copacabana, La Estrella, Caldas y el Valle de Aburrá."
          }
        }
      ]
    },
  ];

  const services = [
    {
      number: "01",
      title: "Creación y personalización de páginas web",
      description:
        "Diseño web Medellín y desarrollo de sitios rápidos, claros y optimizados para convertir visitas en contactos reales por WhatsApp, adaptados a la identidad de tu negocio.",
      icon: Globe,
      accent: "text-blue-400 bg-blue-500/10",
    },
    {
      number: "02",
      title: "Creación y gestión de redes sociales",
      description:
        "Estructuración, optimización y gestión de redes sociales Medellín con contenido constante y coherente para fortalecer la presencia digital de tu marca.",
      icon: Share2,
      accent: "text-cyan-400 bg-cyan-500/10",
    },
    {
      number: "03",
      title: "Posicionamiento SEO y GEO",
      description:
        "Posicionamiento SEO Medellín en Google y optimización GEO para que tu empresa aparezca recomendada en motores de IA como ChatGPT, Perplexity y Gemini.",
      icon: Search,
      accent: "text-emerald-400 bg-emerald-500/10",
    },
    {
      number: "04",
      title: "Fichas de Google Business Profile y directorios",
      description:
        "Creación, verificación, optimización y mantenimiento de fichas de Google Business Profile y directorios locales para captar búsquedas en mapa y llamadas directas.",
      icon: MapPin,
      accent: "text-purple-400 bg-purple-500/10",
    },
    {
      number: "05",
      title: "Exposición de marca",
      description:
        "Estrategias de visibilidad digital integradas para que tu negocio gane autoridad, confianza y recordación frente a clientes locales en todo el Valle de Aburrá.",
      icon: Megaphone,
      accent: "text-amber-400 bg-amber-500/10",
    },
    {
      number: "06",
      title: "Software personalizado para diversos rubros",
      description:
        "Desarrollo a la medida y personalización de software de gestión, inventarios, órdenes de servicio, reservas o flujos internos adaptado a las necesidades de cada sector.",
      icon: Code2,
      accent: "text-indigo-400 bg-indigo-500/10",
    },
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
              <Sparkles size={14} className="text-brand-accent animate-pulse" /> C&amp;C Software Studio · Servicios Web y SEO
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Páginas web, redes sociales y posicionamiento SEO para empresas en Medellín
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              <b>C&amp;C Software Studio</b> es la línea de servicios web y software a la medida de{" "}
              <b>C&amp;C Especialistas</b>, respaldada por más de{" "}
              <b>18+ años de experiencia técnica</b> ayudando a negocios reales de diversos rubros a crecer con tecnología práctica, software personalizado, presencia digital sólida y visibilidad en buscadores e inteligencia artificial.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <Phone size={18} /> Pide tu cotización por WhatsApp
              </a>
              <a
                href="#servicios-studio"
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-4 rounded-xl border border-slate-700 transition"
              >
                Ver los servicios
              </a>
            </div>
          </div>
        </section>

        {/* Los 5 Servicios */}
        <section id="servicios-studio" className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Portafolio C&amp;C Software Studio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Soluciones de diseño web, redes sociales y posicionamiento SEO en Medellín
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Cada proyecto se construye con enfoque comercial y técnico para que tus clientes te encuentren en Google, mapas e inteligencias artificiales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-blue-500/40 transition"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl ${service.accent} flex items-center justify-center font-bold`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-black text-slate-500 tracking-widest">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-lg">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Para quién */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Building2 size={20} />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                ¿Para quién es este servicio?
              </h2>
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Trabajamos con <b>empresas, negocios y emprendimientos de Medellín y el Valle de Aburrá</b> (Bello, Envigado, Itagüí, Sabaneta, Copacabana, La Estrella y alrededores) que necesitan una presencia digital profesional, posicionamiento local efectivo y acompañamiento directo sin intermediarios.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800 pt-4">
              Además del desarrollo web, creamos{" "}
              <a
                href="https://ccmanager-app.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 underline"
              >
                CC Manager <ExternalLink size={12} />
              </a>
              , nuestro propio sistema para talleres de reparación.
            </p>
          </div>

          {/* CTA y Datos de Contacto */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-extrabold text-white">
                ¿Listo para impulsar tu negocio en Medellín?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>{SITE_CONFIG.name}</b> · {SITE_CONFIG.addressShort} · Teléfono y WhatsApp:{" "}
                <span className="text-emerald-400 font-bold">{SITE_CONFIG.phoneDisplay}</span>
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-2 whitespace-nowrap"
            >
              <Phone size={18} /> Pide tu cotización por WhatsApp
            </a>
          </div>

          {/* Preguntas Frecuentes */}
          <div className="border-t border-slate-800 pt-12 space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Preguntas Frecuentes sobre Servicios Web, SEO y Software
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2">
                <h3 className="font-semibold text-white text-base">
                  ¿Qué incluye el servicio de diseño web y SEO en Medellín?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Creación y personalización de páginas web, gestión de redes sociales, posicionamiento SEO y GEO, fichas de Google Business Profile, exposición de marca y software personalizado para diversos rubros.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2">
                <h3 className="font-semibold text-white text-base">
                  ¿Cómo solicito una cotización para mi empresa?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Escríbenos directamente por WhatsApp al 305 456 8996 contándonos qué necesita tu negocio para preparar una propuesta a la medida.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2">
                <h3 className="font-semibold text-white text-base">
                  ¿Atienden emprendimientos y empresas del Valle de Aburrá?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Sí, acompañamos empresas, comercios y emprendimientos en Medellín, Bello, Envigado, Itagüí, Sabaneta y todo el Valle de Aburrá.
                </p>
              </div>
            </div>
          </div>

          {/* Enlaces internos a páginas de reparación */}
          <div className="border-t border-slate-800 pt-10 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-wider">
              <Wrench size={14} className="text-brand-accent" />
              Nuestras páginas de servicio técnico y reparación en el Valle de Aburrá:
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="text-xs text-blue-400 hover:text-blue-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition inline-flex items-center gap-1"
              >
                Reparación de Impresoras y Computadores en Medellín <ArrowRight size={12} />
              </Link>
              <Link
                href="/bello"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition inline-flex items-center gap-1"
              >
                Servicio Técnico en Bello <ArrowRight size={12} />
              </Link>
              <Link
                href="/envigado"
                className="text-xs text-cyan-400 hover:text-cyan-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition inline-flex items-center gap-1"
              >
                Servicio Técnico en Envigado <ArrowRight size={12} />
              </Link>
              <Link
                href="/itagui-sabaneta"
                className="text-xs text-purple-400 hover:text-purple-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition inline-flex items-center gap-1"
              >
                Servicio Técnico en Itagüí y Sabaneta <ArrowRight size={12} />
              </Link>
              <Link
                href="/destape-cabezales-impresoras"
                className="text-xs text-amber-400 hover:text-amber-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition inline-flex items-center gap-1"
              >
                Destape de Cabezales <ArrowRight size={12} />
              </Link>
              <Link
                href="/reset-almohadillas-epson"
                className="text-xs text-orange-400 hover:text-orange-300 font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition inline-flex items-center gap-1"
              >
                Reset de Almohadillas Epson <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

