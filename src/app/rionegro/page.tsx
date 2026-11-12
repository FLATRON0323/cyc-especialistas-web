import type { Metadata } from 'next';
import MunicipalityPageTemplate from '@/components/templates/MunicipalityPageTemplate';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Mantenimiento y Reparación de Impresoras y Computadores en Rionegro | C&C Especialistas",
  description:
    "Servicio técnico especializado en impresoras Epson, Canon, HP, Brother y Kyocera, y computadores en Rionegro y Oriente Antioqueño (San Antonio de Pereira, Llanogrande, El Porvenir). WhatsApp 305 456 8996.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/rionegro`,
  },
  openGraph: {
    title: "Mantenimiento de Impresoras y Computadores en Rionegro | C&C Especialistas",
    description:
      "Soporte técnico en impresoras y computadores para empresas y hogares de Rionegro, San Antonio de Pereira y Llanogrande.",
    url: `${SITE_CONFIG.domainUrl}/rionegro`,
  },
};

export default function RionegroPage() {
  return (
    <MunicipalityPageTemplate
      slug="/rionegro"
      city="Rionegro"
      badgeText="Servicio Técnico para Rionegro y Oriente Antioqueño"
      h1Highlight="Rionegro (Oriente Antioqueño)"
      introText="Soporte técnico especializado en impresoras Epson, Canon, HP, Brother, Kyocera y computadores para empresas, clínicas, oficinas y hogares en Rionegro (Parque Principal, San Antonio de Pereira, Llanogrande y El Porvenir), con respaldo de nuestro taller central en Medellín."
      areaServedName="Rionegro, Antioquia"
      serviceDescription="Servicio técnico especializado en reparación de impresoras Epson, Canon, HP, Brother, Kyocera y mantenimiento de computadores para Rionegro y el Oriente Antioqueño."
      whatsappText="Hola, necesito servicio técnico de impresoras o computadores en Rionegro"
      whatsappButtonLabel="Solicitar Servicio en Rionegro"
      localHighlightBadge="Atención Especializada Oriente Antioqueño"
      localHighlightTitle="Soluciones en Impresión, Repuestos y Cómputo para Rionegro"
      localHighlightBody="Atendemos requerimientos técnicos de empresas y usuarios de Rionegro mediante coordinación previa por WhatsApp, recepción en taller central (Cl. 102 #49C-53 Int. 301, Santa Cruz, Medellín) y despacho de tintas originales, tóner y repuestos para impresoras."
      pickupTitle="Coordinación Técnica para Rionegro:"
      pickupSubtitle={SITE_CONFIG.schedule.display}
      faqs={[
        {
          question: "¿Cómo funciona el servicio técnico para clientes de Rionegro?",
          answer:
            "Coordinamos por WhatsApp al 305 456 8996 la recepción en nuestro taller central en Medellín o el envío seguro de equipos, así como el despacho de suministros y repuestos hacia Rionegro.",
        },
        {
          question: "¿Venden tintas, tóner y repuestos con envío a Rionegro?",
          answer:
            "Sí, despachamos tintas originales Epson, Canon, HP y Brother, cartuchos de tóner láser, cabezales, almohadillas y rodillos hacia Rionegro y el Oriente Antioqueño.",
        },
        {
          question: "¿Reparan impresoras láser empresariales Kyocera, HP y Brother?",
          answer:
            "Sí, realizamos mantenimiento preventivo y correctivo de impresoras láser monocromáticas y a color, incluyendo revisión de unidad fusora, rodillos de arrastre y calidad de impresión.",
        },
      ]}
      internalLinks={[
        { label: "Taller Central Medellín →", href: "/medellin" },
        { label: "Servicio en Envigado →", href: "/envigado", colorClass: "text-cyan-400 hover:text-cyan-300" },
        { label: "Destape de Cabezales →", href: "/destape-cabezales-impresoras", colorClass: "text-amber-400 hover:text-amber-300" },
        { label: "Impresora Láser con Manchas →", href: "/impresora-laser-imprime-manchas-rayas", colorClass: "text-purple-400 hover:text-purple-300" },
      ]}
    />
  );
}

