import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/config/site';
import { MapPin, Phone, ShieldCheck, CheckCircle2, Clock, Wrench } from 'lucide-react';
import Link from 'next/link';

export interface MunicipalityFAQ {
  question: string;
  answer: string;
}

export interface MunicipalityPageProps {
  slug: string;
  city: string;
  badgeText: string;
  h1Highlight: string;
  introText: string;
  areaServedName: string;
  serviceDescription: string;
  whatsappText: string;
  whatsappButtonLabel: string;
  localHighlightBadge: string;
  localHighlightTitle: string;
  localHighlightBody: string;
  pickupTitle: string;
  pickupSubtitle: string;
  faqs: MunicipalityFAQ[];
  internalLinks: { label: string; href: string; colorClass?: string }[];
}

export default function MunicipalityPageTemplate(props: MunicipalityPageProps) {
  const {
    slug,
    city,
    badgeText,
    h1Highlight,
    introText,
    areaServedName,
    serviceDescription,
    whatsappText,
    whatsappButtonLabel,
    localHighlightBadge,
    localHighlightTitle,
    localHighlightBody,
    pickupTitle,
    pickupSubtitle,
    faqs,
    internalLinks,
  } = props;

  const pageUrl = `${SITE_CONFIG.domainUrl}${slug}`;

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
          "name": `Mantenimiento en ${city}`,
          "item": pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Mantenimiento y Reparación de Impresoras y Computadores en ${city}`,
      "serviceType": "Reparación y Mantenimiento Técnico",
      "url": pageUrl,
      "provider": {
        "@type": "LocalBusiness",
        "name": SITE_CONFIG.name,
        "telephone": `+${SITE_CONFIG.phoneRaw}`,
        "url": SITE_CONFIG.domainUrl,
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": areaServedName,
      },
      "description": serviceDescription,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
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
        <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
          <div className="max-w-5xl mx-auto space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <MapPin size={14} /> {badgeText}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Mantenimiento y Reparación de Impresoras y Computadores en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {h1Highlight}
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              {introText}
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <a
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <Phone size={18} /> {whatsappButtonLabel}
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

        {/* Casos y Servicios */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Wrench size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Destape Cabezales Epson y Canon</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Recuperación ultrasónica de inyectores tapados por tintas secas o falta de uso en series EcoTank y MegaTank.
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
                Instalación de unidades de estado sólido NVMe/SATA y ampliación de memoria para computadores y portátiles lentos.
              </p>
            </div>
          </div>

          {/* Cobertura Local */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              {localHighlightBadge}
            </span>
            <h2 className="text-2xl font-extrabold text-white">{localHighlightTitle}</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {localHighlightBody}
            </p>
          </div>

          {/* Tiempos de recogida */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Clock className="text-brand-accent shrink-0" size={24} />
              <div>
                <p className="text-white font-bold text-sm">{pickupTitle}</p>
                <p className="text-slate-400 text-xs">{pickupSubtitle}</p>
              </div>
            </div>
            <a
              href={`${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(`Hola, quiero agendar recogida o servicio en ${city}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-6 py-3 rounded-xl transition"
            >
              Agendar por WhatsApp ({SITE_CONFIG.phoneDisplay})
            </a>
          </div>

          {/* Preguntas Frecuentes */}
          <div className="border-t border-slate-800 pt-12 space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Preguntas Frecuentes sobre Servicio Técnico en {city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-2"
                >
                  <h3 className="font-semibold text-white text-base">{faq.question}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enlaces internos */}
          <div className="border-t border-slate-800 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Otras zonas y servicios técnicos:
            </span>
            <div className="flex flex-wrap gap-3">
              {internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs ${link.colorClass || "text-blue-400 hover:text-blue-300"} font-bold bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

