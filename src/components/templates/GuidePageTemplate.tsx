import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/config/site';
import {
  Wrench,
  CheckCircle2,
  Sparkles,
  Phone,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';

export interface GuideStep {
  title: string;
  description: string;
  accent?: string;
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface GuidePageProps {
  slug: string;
  badgeText: string;
  h1Title: string;
  h1Highlight: string;
  directAnswer: string;
  articleHeadline: string;
  articleDescription: string;
  serviceName: string;
  serviceDescription: string;
  whatsappText: string;
  whatsappButtonLabel: string;
  stepsSectionBadge: string;
  stepsSectionTitle: string;
  stepsSectionSubtitle: string;
  steps: GuideStep[];
  workshopTitle: string;
  workshopItems: string[];
  faqs: GuideFAQ[];
  internalLinks: { label: string; href: string; colorClass?: string }[];
}

export default function GuidePageTemplate(props: GuidePageProps) {
  const {
    slug,
    badgeText,
    h1Title,
    h1Highlight,
    directAnswer,
    articleHeadline,
    articleDescription,
    serviceName,
    serviceDescription,
    whatsappText,
    whatsappButtonLabel,
    stepsSectionBadge,
    stepsSectionTitle,
    stepsSectionSubtitle,
    steps,
    workshopTitle,
    workshopItems,
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
          "name": articleHeadline,
          "item": pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": articleHeadline,
      "description": articleDescription,
      "url": pageUrl,
      "inLanguage": "es-CO",
      "author": {
        "@type": "Organization",
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.domainUrl,
      },
      "publisher": {
        "@type": "Organization",
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.domainUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_CONFIG.domainUrl}/logo.webp`,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "serviceType": "Mantenimiento Técnico Especializado de Impresoras",
      "url": pageUrl,
      "provider": {
        "@type": "LocalBusiness",
        "name": SITE_CONFIG.name,
        "telephone": `+${SITE_CONFIG.phoneRaw}`,
        "url": SITE_CONFIG.domainUrl,
      },
      "areaServed": SITE_CONFIG.coverage,
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

  const stepIcons = [Wrench, Sparkles, CheckCircle2];
  const stepColors = [
    "bg-blue-500/10 text-blue-400",
    "bg-cyan-500/10 text-cyan-400",
    "bg-emerald-500/10 text-emerald-400",
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
              <BookOpen size={14} className="text-brand-accent" /> {badgeText}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              {h1Title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                {h1Highlight}
              </span>
            </h1>

            {/* Respuesta directa citable por IA */}
            <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-5 md:p-6 text-left">
              <p className="text-xs font-black uppercase tracking-wider text-blue-400 mb-2">
                Respuesta Técnica Directa
              </p>
              <p className="text-slate-200 text-base md:text-lg leading-relaxed">
                {directAnswer}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <a
                href={`${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
              >
                <Phone size={18} /> {whatsappButtonLabel}
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

        {/* Pasos / Causas */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              {stepsSectionBadge}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              {stepsSectionTitle}
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              {stepsSectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              const color = step.accent || stepColors[index % stepColors.length];
              return (
                <div
                  key={step.title}
                  className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3"
                >
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center font-bold`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-white text-lg">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Cuándo traerla al taller */}
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-3">
              <AlertCircle size={22} className="text-amber-400 shrink-0" />
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {workshopTitle}
              </h2>
            </div>
            <ul className="space-y-2.5 text-slate-300 text-sm md:text-base leading-relaxed list-disc pl-5">
              {workshopItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
              Taller principal: {SITE_CONFIG.address} · WhatsApp directo: {SITE_CONFIG.phoneDisplay}
            </p>
          </div>

          {/* Preguntas Frecuentes */}
          <div className="border-t border-slate-800 pt-12 space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Preguntas Frecuentes
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

          {/* Interlinking */}
          <div className="border-t border-slate-800 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Servicios relacionados:
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

