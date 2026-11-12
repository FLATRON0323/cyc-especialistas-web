import type { Metadata } from 'next';
import GuidePageTemplate from '@/components/templates/GuidePageTemplate';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Mi Impresora No Imprime Color (Cian, Magenta o Amarillo): Causas y Solución | C&C Especialistas",
  description:
    "¿Tu impresora Epson, Canon o HP no imprime cian, magenta o amarillo? Conoce por qué ocurre, qué revisar primero y cuándo requiere destape ultrasónico o cambio de cabezal en Medellín.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/impresora-no-imprime-color`,
  },
  openGraph: {
    title: "Por Qué Mi Impresora No Imprime Color | Guía Técnica C&C Especialistas",
    description:
      "Causas por las que faltan el cian, magenta o amarillo en impresoras de tinta continua y cuándo acudir al taller para destape ultrasónico o cambio de cabezal.",
    url: `${SITE_CONFIG.domainUrl}/impresora-no-imprime-color`,
  },
};

export default function ImpresoraNoImprimeColorPage() {
  return (
    <GuidePageTemplate
      slug="/impresora-no-imprime-color"
      badgeText="Guía Técnica de Impresión"
      h1Title="¿Por qué mi impresora no imprime"
      h1Highlight="cian, magenta o amarillo?"
      directAnswer="Cuando una impresora de inyección o tanque continuo deja de imprimir uno o varios colores (cian, magenta o amarillo), la causa suele ser tinta seca en las boquillas del cabezal, aire en las mangueras o dampers, tinta en mal estado o daño eléctrico en los inyectores. Si tras una limpieza básica el patrón de prueba sigue incompleto, requiere destape ultrasónico o evaluación para cambio de cabezal."
      articleHeadline="Por qué una impresora no imprime color (cian, magenta o amarillo) y cuándo requiere destape o cambio de cabezal"
      articleDescription="Guía técnica sobre fallas de color en impresoras Epson, Canon, HP y Brother: aire en mangueras, obstrucción de inyectores, destape ultrasónico y cambio de cabezal."
      serviceName="Diagnóstico y Destape de Cabezales por Falta de Color"
      serviceDescription="Servicio técnico especializado para recuperar los colores cian, magenta y amarillo mediante purga de aire, lavado ultrasónico de inyectores o reemplazo de cabezal."
      whatsappText="Hola, mi impresora no imprime un color (indicar marca, modelo y qué color falla)"
      whatsappButtonLabel="Consultar Falla de Color por WhatsApp"
      stepsSectionBadge="Diagnóstico Paso a Paso"
      stepsSectionTitle="Qué revisar y cuándo es destape ultrasónico o cambio de cabezal"
      stepsSectionSubtitle="Evita repetir limpiezas automáticas consecutivas: consumen tinta y pueden llenar las almohadillas sin destapar el cabezal."
      steps={[
        {
          title: "1. Verifica niveles, respiraderos y patrón de inyectores",
          description:
            "Confirma que los tanques tengan tinta suficiente y que las válvulas o tapas de aire estén abiertas según el modelo. Imprime un test de inyectores para identificar exactamente qué canal (cian, magenta o amarillo) está interrumpido.",
        },
        {
          title: "2. Cuándo requiere purga y destape ultrasónico",
          description:
            "Si las líneas del color faltan de forma parcial o hay burbujas en las mangueras tras semanas sin uso, la tinta suele estar espesada en los dampers o boquillas. En laboratorio se realiza purga controlada y lavado ultrasónico con solventes específicos.",
        },
        {
          title: "3. Cuándo es cambio de cabezal",
          description:
            "Si el canal no responde en absoluto tras pruebas electrónicas, presenta mezcla interna de colores o las bobinas del cabezal están en corto (por ejemplo, tras intentos agresivos con jeringas o líquidos inadecuados), es necesario reemplazar el cabezal.",
        },
      ]}
      workshopTitle="¿Cuándo traer tu impresora al taller en Medellín?"
      workshopItems={[
        "El test de inyectores sigue saliendo en blanco en cian, magenta o amarillo después de una o dos limpiezas normales.",
        "Observas mangueras vacías, aire en el sistema o colores mezclados en las impresiones.",
        "La impresora lleva varios meses apagada o se usó tinta incompatible o vencida.",
        "El equipo arroja error general o se apaga al intentar imprimir.",
      ]}
      faqs={[
        {
          question: "¿Sirve hacer muchas limpiezas de cabezal desde el computador?",
          answer:
            "No es recomendable repetir limpiezas seguidas: si hay tinta cristalizada o aire en las mangueras, las limpiezas en serie desperdician tinta y saturan rápidamente las almohadillas.",
        },
        {
          question: "¿Se puede recuperar un cabezal que dejó de imprimir un color por desuso?",
          answer:
            "En muchos casos sí, mediante lavado ultrasónico y presurización profesional, siempre que el cabezal no tenga daño eléctrico o ruptura interna.",
        },
        {
          question: "¿Qué pasa si el cabezal ya no tiene reparación?",
          answer:
            "En nuestro taller en Santa Cruz, Medellín, evaluamos el estado electrónico del equipo y te cotizamos la instalación de un cabezal nuevo cuando el modelo lo permite.",
        },
      ]}
      internalLinks={[
        { label: "Destape de Cabezales →", href: "/destape-cabezales-impresoras" },
        { label: "Reset Almohadillas Epson →", href: "/reset-almohadillas-epson", colorClass: "text-orange-400 hover:text-orange-300" },
        { label: "Servicio en Medellín →", href: "/medellin", colorClass: "text-emerald-400 hover:text-emerald-300" },
        { label: "Inicio C&C Especialistas →", href: "/", colorClass: "text-cyan-400 hover:text-cyan-300" },
      ]}
    />
  );
}

