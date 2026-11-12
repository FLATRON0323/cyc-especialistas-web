import type { Metadata } from 'next';
import GuidePageTemplate from '@/components/templates/GuidePageTemplate';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Mi Impresora No Reconoce el Cartucho de Tinta: Causas y Soluciones | C&C Especialistas",
  description:
    "¿Tu impresora HP, Canon, Epson o Brother no reconoce el cartucho o muestra error de tinta? Conoce las causas más comunes, pasos seguros de revisión y cuándo acudir al taller.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/impresora-no-reconoce-cartucho-tinta`,
  },
  openGraph: {
    title: "Impresora No Reconoce Cartucho de Tinta | Guía Técnica C&C Especialistas",
    description:
      "Causas y soluciones cuando la impresora no detecta el cartucho de tinta, muestra error de chip o solicita reemplazo tras instalar uno nuevo.",
    url: `${SITE_CONFIG.domainUrl}/impresora-no-reconoce-cartucho-tinta`,
  },
};

export default function ImpresoraNoReconoceCartuchoPage() {
  return (
    <GuidePageTemplate
      slug="/impresora-no-reconoce-cartucho-tinta"
      badgeText="Guía Técnica de Cartuchos y Chips"
      h1Title="Impresora no reconoce el"
      h1Highlight="cartucho de tinta: causas y soluciones"
      directAnswer="Cuando una impresora no reconoce un cartucho de tinta, suele deberse a suciedad en los contactos metálicos del chip, un cartucho mal asentado, cinta protectora sin retirar, chip defectuoso o falla en los pines lectores del carro de impresión. Si tras limpiar suavemente los contactos y reiniciar el equipo el error continúa, conviene revisar el carro lector en taller."
      articleHeadline="Por qué una impresora no reconoce el cartucho de tinta: causas y soluciones seguras"
      articleDescription="Guía práctica sobre errores de reconocimiento de cartuchos en impresoras HP, Canon, Epson y Brother y cuándo revisar el lector de chips en taller."
      serviceName="Diagnóstico de Carro Lector y Reconocimiento de Cartuchos"
      serviceDescription="Revisión técnica de pines lectores, carro de impresión, sensores y cartuchos en impresoras de inyección de tinta."
      whatsappText="Hola, mi impresora no reconoce el cartucho de tinta (indicar marca y modelo)"
      whatsappButtonLabel="Consultar Error de Cartucho por WhatsApp"
      stepsSectionBadge="Revisión Segura"
      stepsSectionTitle="Causas habituales y pasos iniciales antes de forzar el carro"
      stepsSectionSubtitle="Evita doblar los pines del carro lector o usar líquidos abrasivos sobre los circuitos del cartucho."
      steps={[
        {
          title: "1. Retira sellos y verifica el encaje físico",
          description:
            "Asegúrate de haber retirado por completo la cinta protectora plástica del cartucho nuevo y colócalo hasta escuchar el clic de ajuste en la ranura correspondiente (negro o tricolor).",
        },
        {
          title: "2. Limpia contactos sin tocar con los dedos",
          description:
            "Con la impresora apagada y desconectada, revisa si hay residuos de tinta seca en los contactos dorados del cartucho y límpialos suavemente con un paño seco que no deje pelusa.",
        },
        {
          title: "3. Verifica chip, compatibilidad y reinicio",
          description:
            "Confirma que la referencia del cartucho corresponda exactamente al modelo de tu impresora, desconecta el equipo un minuto y vuelve a encenderlo para que realice una nueva lectura.",
        },
      ]}
      workshopTitle="¿Cuándo traer tu impresora al taller?"
      workshopItems={[
        "El error persiste incluso probando con un cartucho nuevo original.",
        "Notas pines doblados, hundidos o sulfatados dentro del carro porta-cartuchos.",
        "Hubo derrame de tinta sobre la tarjeta del carro o la cinta flex.",
        "La impresora indica error de cabezal o fallo del sistema de tinta en pantalla.",
      ]}
      faqs={[
        {
          question: "¿Por qué falla el reconocimiento justo después de cambiar el cartucho?",
          answer:
            "Puede quedar mal asentado, conservar parte del sello protector, tener el chip sucio o no corresponder a la referencia exacta del equipo.",
        },
        {
          question: "¿Se puede dañar el carro lector al forzar un cartucho?",
          answer:
            "Sí. Empujar con fuerza o usar objetos metálicos puede doblar los pines de contacto del carro y requerir reparación o reemplazo del conjunto.",
        },
        {
          question: "¿También revisan impresoras de sistema continuo con error de chip o caja de mantenimiento?",
          answer:
            "Sí, en C&C Especialistas diagnosticamos errores de sensores, cajas de mantenimiento con chip y sistemas de tinta en Medellín y el Valle de Aburrá.",
        },
      ]}
      internalLinks={[
        { label: "Impresora No Imprime Color →", href: "/impresora-no-imprime-color" },
        { label: "Destape de Cabezales →", href: "/destape-cabezales-impresoras", colorClass: "text-cyan-400 hover:text-cyan-300" },
        { label: "Servicio en Medellín →", href: "/medellin", colorClass: "text-emerald-400 hover:text-emerald-300" },
        { label: "Inicio C&C Especialistas →", href: "/", colorClass: "text-amber-400 hover:text-amber-300" },
      ]}
    />
  );
}

