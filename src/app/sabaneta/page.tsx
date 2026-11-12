import type { Metadata } from 'next';
import MunicipalityPageTemplate from '@/components/templates/MunicipalityPageTemplate';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Mantenimiento y Reparación de Impresoras y Computadores en Sabaneta | C&C Especialistas",
  description:
    "Servicio técnico exclusivo para Sabaneta en impresoras Epson, Canon, HP, Brother y computadores (Parque de Sabaneta, Aves María, Mayorca, Las Lomitas, La Doctora). WhatsApp 305 456 8996.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/sabaneta`,
  },
  openGraph: {
    title: "Mantenimiento de Impresoras y Computadores en Sabaneta | C&C Especialistas",
    description:
      "Atención técnica dedicada en Sabaneta: Parque de Sabaneta, Aves María, Mayorca, Las Lomitas y La Doctora.",
    url: `${SITE_CONFIG.domainUrl}/sabaneta`,
  },
};

export default function SabanetaPage() {
  return (
    <MunicipalityPageTemplate
      slug="/sabaneta"
      city="Sabaneta"
      badgeText="Servicio Técnico Dedicado en Sabaneta, Antioquia"
      h1Highlight="Sabaneta (Antioquia)"
      introText="Atención técnica enfocada 100% en empresas, comercios, consultorios y conjuntos residenciales de Sabaneta: Parque de Sabaneta, Aves María, sector Mayorca, Las Lomitas, La Doctora y Holanda. Más de 18 años de experiencia en impresión y cómputo."
      areaServedName="Sabaneta, Antioquia"
      serviceDescription="Servicio técnico dedicado en Sabaneta para reparación de impresoras Epson, Canon, HP, Brother, Kyocera y mantenimiento de computadores en Parque de Sabaneta, Aves María, Mayorca y Las Lomitas."
      whatsappText="Hola, necesito servicio técnico de impresoras o computadores en Sabaneta"
      whatsappButtonLabel="Solicitar Servicio en Sabaneta"
      localHighlightBadge="Ruta Sur Exclusiva Sabaneta"
      localHighlightTitle="Soporte Técnico en Parque de Sabaneta, Aves María, Mayorca y La Doctora"
      localHighlightBody="Sabaneta concentra oficinas, comercio y trabajo remoto que no pueden detener su operación. Por eso ofrecemos ruta programada en Sabaneta y laboratorio técnico en Santa Cruz, Medellín, para destape de cabezales, reseteo de almohadillas, reparación láser y repotenciación de portátiles con SSD y RAM."
      pickupTitle="Atención y Recogida Programada en Sabaneta:"
      pickupSubtitle={SITE_CONFIG.schedule.display}
      faqs={[
        {
          question: "¿Cubren Aves María, Mayorca, Las Lomitas y La Doctora en Sabaneta?",
          answer:
            "Sí, atendemos solicitudes en todo el municipio de Sabaneta, incluyendo el Parque Principal, Aves María, inmediaciones de Mayorca, Las Lomitas y La Doctora.",
        },
        {
          question: "¿Qué fallas de impresoras resuelven con mayor frecuencia en Sabaneta?",
          answer:
            "Principalmente cabezales tapados por tintas secas en Epson y Canon, bloqueo por almohadillas al final de su vida útil, atascos de papel y manchas en impresoras láser HP y Brother.",
        },
        {
          question: "¿Cómo agendo mi servicio técnico desde Sabaneta?",
          answer:
            "Escríbenos por WhatsApp al 305 456 8996 con el modelo de tu equipo y tu ubicación en Sabaneta para coordinar la revisión.",
        },
      ]}
      internalLinks={[
        { label: "Servicio en Envigado →", href: "/envigado" },
        { label: "Servicio en La Estrella →", href: "/la-estrella", colorClass: "text-emerald-400 hover:text-emerald-300" },
        { label: "Servicio en Caldas →", href: "/caldas", colorClass: "text-cyan-400 hover:text-cyan-300" },
        { label: "Reset Almohadillas Epson →", href: "/reset-almohadillas-epson", colorClass: "text-orange-400 hover:text-orange-300" },
      ]}
    />
  );
}

