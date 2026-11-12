import type { Metadata } from 'next';
import MunicipalityPageTemplate from '@/components/templates/MunicipalityPageTemplate';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Mantenimiento y Reparación de Impresoras y Computadores en La Estrella | C&C Especialistas",
  description:
    "Servicio técnico especializado en impresoras Epson, Canon, HP, Brother y computadores en La Estrella, Antioquia (Parque Principal, Pueblo Viejo, La Tablaza). WhatsApp 305 456 8996.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/la-estrella`,
  },
  openGraph: {
    title: "Mantenimiento de Impresoras y Computadores en La Estrella | C&C Especialistas",
    description:
      "Reparación de impresoras Epson, Canon, HP, Brother y mantenimiento de computadores en La Estrella con recogida programada.",
    url: `${SITE_CONFIG.domainUrl}/la-estrella`,
  },
};

export default function LaEstrellaPage() {
  return (
    <MunicipalityPageTemplate
      slug="/la-estrella"
      city="La Estrella"
      badgeText="Servicio Técnico en La Estrella y Sur del Valle de Aburrá"
      h1Highlight="La Estrella (Antioquia)"
      introText="Servicio técnico especializado en reparación de impresoras y mantenimiento de computadores para empresas, bodegas, consultorios y hogares en La Estrella (Parque Principal, Pueblo Viejo, La Tablaza y corredor sur)."
      areaServedName="La Estrella, Antioquia"
      serviceDescription="Servicio técnico especializado en reparación de impresoras Epson, Canon, HP, Brother y mantenimiento de computadores en La Estrella, Antioquia."
      whatsappText="Hola, necesito servicio técnico de impresoras o computadores en La Estrella"
      whatsappButtonLabel="Solicitar Servicio en La Estrella"
      localHighlightBadge="Cobertura Sur del Valle de Aburrá"
      localHighlightTitle="Mantenimiento de Impresoras y Cómputo en La Estrella"
      localHighlightBody="Atendemos equipos de impresión y cómputo en La Estrella con recogida programada y laboratorio especializado en Santa Cruz, Medellín. Realizamos destape ultrasónico de inyectores, reseteo de almohadillas, mantenimiento láser y repotenciación con SSD y RAM."
      pickupTitle="Atención y Recogida Programada en La Estrella:"
      pickupSubtitle={SITE_CONFIG.schedule.display}
      faqs={[
        {
          question: "¿Recogen impresoras y computadores en La Estrella?",
          answer:
            "Sí, coordinamos ruta de recogida y entrega en La Estrella (Parque Principal, Pueblo Viejo y La Tablaza) o atención directa en nuestro taller en Cl. 102 #49C-53 Int. 301, Santa Cruz, Medellín.",
        },
        {
          question: "¿Qué hacer si mi impresora Epson no imprime algún color en La Estrella?",
          answer:
            "Evita repetir limpiezas de cabezal seguidas para no saturar las almohadillas. Podemos diagnosticar si requiere destape ultrasónico o revisión del cabezal.",
        },
        {
          question: "¿Atienden impresoras láser empresariales?",
          answer:
            "Sí, reparamos impresoras láser HP, Brother, Kyocera, Ricoh y Samsung, incluyendo problemas de manchas, rayas, atascos y desgaste de fusor.",
        },
      ]}
      internalLinks={[
        { label: "Servicio en Sabaneta →", href: "/sabaneta" },
        { label: "Servicio en Caldas →", href: "/caldas", colorClass: "text-emerald-400 hover:text-emerald-300" },
        { label: "Servicio en Itagüí & Sabaneta →", href: "/itagui-sabaneta", colorClass: "text-purple-400 hover:text-purple-300" },
        { label: "Impresora No Imprime Color →", href: "/impresora-no-imprime-color", colorClass: "text-amber-400 hover:text-amber-300" },
      ]}
    />
  );
}

