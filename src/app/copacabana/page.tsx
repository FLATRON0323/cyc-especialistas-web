import type { Metadata } from 'next';
import MunicipalityPageTemplate from '@/components/templates/MunicipalityPageTemplate';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Mantenimiento y Reparación de Impresoras y Computadores en Copacabana | C&C Especialistas",
  description:
    "Servicio técnico especializado en impresoras Epson, Canon, HP, Brother y computadores en Copacabana (Parque Principal, Machado y Norte del Valle de Aburrá). WhatsApp 305 456 8996.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/copacabana`,
  },
  openGraph: {
    title: "Mantenimiento de Impresoras y Computadores en Copacabana | C&C Especialistas",
    description:
      "Reparación de impresoras Epson, Canon, HP, Brother y mantenimiento de computadores en Copacabana con recogida programada y taller en Santa Cruz.",
    url: `${SITE_CONFIG.domainUrl}/copacabana`,
  },
};

export default function CopacabanaPage() {
  return (
    <MunicipalityPageTemplate
      slug="/copacabana"
      city="Copacabana"
      badgeText="Servicio Técnico en Copacabana y Norte del Valle de Aburrá"
      h1Highlight="Copacabana (Antioquia)"
      introText="Atención técnica para empresas, comercios, instituciones educativas y hogares en Copacabana (Parque Principal, Machado y corredores de la Autopista Norte). Servicio con recogida programada y taller central en Cl. 102 #49C-53 Int. 301, Santa Cruz, Medellín."
      areaServedName="Copacabana, Antioquia"
      serviceDescription="Servicio técnico especializado en reparación de impresoras Epson, Canon, HP, Brother y mantenimiento de computadores en Copacabana."
      whatsappText="Hola, necesito servicio técnico de impresoras o computadores en Copacabana"
      whatsappButtonLabel="Solicitar Servicio en Copacabana"
      localHighlightBadge="Cobertura en el Norte Metropolitano"
      localHighlightTitle="Recogida Programada y Soporte Técnico en Copacabana"
      localHighlightBody="Cubrimos el casco urbano de Copacabana, Machado y el corredor industrial de la Autopista Norte con diagnóstico técnico en taller, lavado ultrasónico de cabezales, reseteo de almohadillas, mantenimiento láser y repotenciación de computadores con SSD y RAM."
      pickupTitle="Atención y Recogida Programada en Copacabana:"
      pickupSubtitle={SITE_CONFIG.schedule.display}
      faqs={[
        {
          question: "¿Prestan servicio de recogida de impresoras en Copacabana?",
          answer:
            "Sí, contamos con ruta programada para recoger y entregar impresoras y computadores en Copacabana (Parque Principal, Machado y zonas cercanas) o recepción directa en nuestro taller en Santa Cruz, Medellín.",
        },
        {
          question: "¿Qué marcas de impresoras atienden para clientes de Copacabana?",
          answer:
            "Trabajamos con Epson EcoTank, Canon MegaTank, HP Ink Tank y LaserJet, Brother, Kyocera, Ricoh y Samsung, tanto en mantenimiento preventivo como correctivo.",
        },
        {
          question: "¿Cómo solicito una cotización o diagnóstico técnico?",
          answer:
            "Puedes escribirnos directamente por WhatsApp al 305 456 8996 indicando la marca, el modelo y la falla de tu impresora o computador.",
        },
      ]}
      internalLinks={[
        { label: "Taller Central Medellín →", href: "/medellin" },
        { label: "Servicio en Bello →", href: "/bello", colorClass: "text-emerald-400 hover:text-emerald-300" },
        { label: "Servicio en Girardota →", href: "/girardota", colorClass: "text-cyan-400 hover:text-cyan-300" },
        { label: "Destape de Cabezales →", href: "/destape-cabezales-impresoras", colorClass: "text-amber-400 hover:text-amber-300" },
      ]}
    />
  );
}

