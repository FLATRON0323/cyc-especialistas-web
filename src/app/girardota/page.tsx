import type { Metadata } from 'next';
import MunicipalityPageTemplate from '@/components/templates/MunicipalityPageTemplate';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Mantenimiento y Reparación de Impresoras y Computadores en Girardota | C&C Especialistas",
  description:
    "Servicio técnico especializado en impresoras Epson, Canon, HP, Brother y computadores en Girardota y Norte del Valle de Aburrá (Parque Principal, Hatillo). WhatsApp 305 456 8996.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/girardota`,
  },
  openGraph: {
    title: "Mantenimiento de Impresoras y Computadores en Girardota | C&C Especialistas",
    description:
      "Reparación de impresoras y computadores para empresas y hogares en Girardota, Antioquia.",
    url: `${SITE_CONFIG.domainUrl}/girardota`,
  },
};

export default function GirardotaPage() {
  return (
    <MunicipalityPageTemplate
      slug="/girardota"
      city="Girardota"
      badgeText="Servicio Técnico en Girardota y Norte del Valle de Aburrá"
      h1Highlight="Girardota (Antioquia)"
      introText="Mantenimiento preventivo y correctivo de impresoras y computadores para industrias, comercios, oficinas y hogares en Girardota (Parque Principal, sector Hatillo y corredor industrial norte), con respaldo del taller central en Santa Cruz, Medellín."
      areaServedName="Girardota, Antioquia"
      serviceDescription="Servicio técnico especializado en reparación de impresoras Epson, Canon, HP, Brother, Kyocera y mantenimiento de computadores en Girardota."
      whatsappText="Hola, necesito servicio técnico de impresoras o computadores en Girardota"
      whatsappButtonLabel="Solicitar Servicio en Girardota"
      localHighlightBadge="Cobertura Norte del Valle de Aburrá"
      localHighlightTitle="Soporte Técnico de Impresión y Cómputo para Girardota"
      localHighlightBody="Atendemos impresoras de tanque continuo, multifuncionales láser empresariales y equipos de cómputo en Girardota. Realizamos destape ultrasónico de cabezales, reseteo de almohadillas, cambio de rodillos, mantenimiento de fusor y actualización a SSD y RAM."
      pickupTitle="Atención y Coordinación en Girardota:"
      pickupSubtitle={SITE_CONFIG.schedule.display}
      faqs={[
        {
          question: "¿Cubren empresas e industrias ubicadas en Girardota?",
          answer:
            "Sí, atendemos plantas industriales, oficinas administrativas y usuarios particulares en Girardota mediante coordinación programada por WhatsApp al 305 456 8996.",
        },
        {
          question: "¿Solucionan atascos de papel y fallas en impresoras láser?",
          answer:
            "Sí, diagnosticamos y reparamos mecanismos de arrastre, pickup rollers, separadores y unidades fusoras en impresoras HP, Brother, Kyocera, Ricoh y Samsung.",
        },
        {
          question: "¿Dónde está ubicada la sede física de C&C Especialistas?",
          answer:
            "Nuestro taller central está en Cl. 102 #49C-53 Int. 301, Santa Cruz, Medellín, desde donde coordinamos atención para todo el norte del Valle de Aburrá.",
        },
      ]}
      internalLinks={[
        { label: "Servicio en Copacabana →", href: "/copacabana" },
        { label: "Servicio en Bello →", href: "/bello", colorClass: "text-emerald-400 hover:text-emerald-300" },
        { label: "Taller Central Medellín →", href: "/medellin", colorClass: "text-cyan-400 hover:text-cyan-300" },
        { label: "Destape de Cabezales →", href: "/destape-cabezales-impresoras", colorClass: "text-amber-400 hover:text-amber-300" },
      ]}
    />
  );
}

