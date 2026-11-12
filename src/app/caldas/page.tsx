import type { Metadata } from 'next';
import MunicipalityPageTemplate from '@/components/templates/MunicipalityPageTemplate';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Mantenimiento y Reparación de Impresoras y Computadores en Caldas | C&C Especialistas",
  description:
    "Servicio técnico especializado en impresoras Epson, Canon, HP, Brother y computadores en Caldas, Antioquia (Parque Principal, La Tablaza y Sur del Valle de Aburrá). WhatsApp 305 456 8996.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/caldas`,
  },
  openGraph: {
    title: "Mantenimiento de Impresoras y Computadores en Caldas | C&C Especialistas",
    description:
      "Reparación de impresoras Epson, Canon, HP, Brother y mantenimiento de computadores en Caldas, Antioquia con recogida programada.",
    url: `${SITE_CONFIG.domainUrl}/caldas`,
  },
};

export default function CaldasPage() {
  return (
    <MunicipalityPageTemplate
      slug="/caldas"
      city="Caldas"
      badgeText="Servicio Técnico en Caldas y Sur del Valle de Aburrá"
      h1Highlight="Caldas (Antioquia)"
      introText="Soporte técnico profesional para empresas, oficinas, consultorios y hogares en Caldas (Parque Principal, La Tablaza y corredor sur). Más de 18 años de experiencia en mantenimiento de impresoras y computadores."
      areaServedName="Caldas, Antioquia"
      serviceDescription="Servicio técnico especializado en reparación de impresoras Epson, Canon, HP, Brother y mantenimiento de computadores en Caldas, Antioquia."
      whatsappText="Hola, necesito servicio técnico de impresoras o computadores en Caldas"
      whatsappButtonLabel="Solicitar Servicio en Caldas"
      localHighlightBadge="Cobertura en el Sur del Valle de Aburrá"
      localHighlightTitle="Servicio Técnico Especializado para Caldas y La Tablaza"
      localHighlightBody="Atendemos equipos de inyección de tinta continua y láser empresarial en Caldas con lavado ultrasónico de cabezales, reseteo de almohadillas Epson, cambio de rodillos, unidades fusoras y repotenciación de computadores con SSD y memoria RAM."
      pickupTitle="Atención y Ruta Programada en Caldas:"
      pickupSubtitle={SITE_CONFIG.schedule.display}
      faqs={[
        {
          question: "¿Atienden empresas y hogares en Caldas, Antioquia?",
          answer:
            "Sí, brindamos atención en nuestro taller central en Cl. 102 #49C-53 Int. 301, Santa Cruz, Medellín, y coordinamos recogida programada en Caldas y el corredor sur.",
        },
        {
          question: "¿Realizan destape de cabezales y reseteo de almohadillas en Caldas?",
          answer:
            "Sí, realizamos destape ultrasónico de inyectores para Epson y Canon, además de reseteo de contadores EEPROM y reemplazo físico de almohadillas.",
        },
        {
          question: "¿También reparan computadores y portátiles lentos?",
          answer:
            "Sí, instalamos discos de estado sólido SSD, ampliamos memoria RAM y realizamos mantenimiento térmico preventivo para laptops y PC de escritorio.",
        },
      ]}
      internalLinks={[
        { label: "Servicio en La Estrella →", href: "/la-estrella" },
        { label: "Servicio en Sabaneta →", href: "/sabaneta", colorClass: "text-emerald-400 hover:text-emerald-300" },
        { label: "Servicio en Itagüí & Sabaneta →", href: "/itagui-sabaneta", colorClass: "text-purple-400 hover:text-purple-300" },
        { label: "Reset Almohadillas Epson →", href: "/reset-almohadillas-epson", colorClass: "text-orange-400 hover:text-orange-300" },
      ]}
    />
  );
}

