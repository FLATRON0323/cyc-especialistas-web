import type { Metadata } from 'next';
import GuidePageTemplate from '@/components/templates/GuidePageTemplate';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: "Impresora Láser Imprime Manchas o Rayas: Causas (Fusor, Tóner, Rodillos) | C&C Especialistas",
  description:
    "¿Tu impresora láser HP, Brother, Kyocera o Samsung imprime con manchas, rayas negras o tóner suelto? Conoce cuándo es el cartucho de tóner, el tambor o la unidad fusora.",
  alternates: {
    canonical: `${SITE_CONFIG.domainUrl}/impresora-laser-imprime-manchas-rayas`,
  },
  openGraph: {
    title: "Impresora Láser Imprime con Manchas o Rayas | Guía Técnica C&C Especialistas",
    description:
      "Identifica si las manchas o rayas en tu impresora láser vienen del tóner, el tambor de imagen, los rodillos o la unidad fusora.",
    url: `${SITE_CONFIG.domainUrl}/impresora-laser-imprime-manchas-rayas`,
  },
};

export default function ImpresoraLaserManchasRayasPage() {
  return (
    <GuidePageTemplate
      slug="/impresora-laser-imprime-manchas-rayas"
      badgeText="Guía Técnica de Impresión Láser"
      h1Title="Impresora láser imprime con"
      h1Highlight="manchas o rayas: causas y cuándo traerla al taller"
      directAnswer="Cuando una impresora láser imprime con manchas repetitivas, fondo gris, rayas verticales o tóner que se borra al pasar el dedo, la falla suele estar en el cartucho de tóner, la unidad de tambor (drum), residuos en los rodillos o desgaste en la unidad fusora (filmina y rodillo de presión). Si el defecto continúa tras revisar o cambiar el tóner, requiere mantenimiento técnico en taller."
      articleHeadline="Por qué una impresora láser imprime con manchas o rayas: tóner, tambor, rodillos y unidad fusora"
      articleDescription="Guía técnica sobre defectos de impresión en equipos láser HP, Brother, Kyocera, Ricoh y Samsung: causas comunes y cuándo realizar mantenimiento de fusor o rodillos."
      serviceName="Mantenimiento y Reparación de Impresoras Láser (Fusor, Tóner y Rodillos)"
      serviceDescription="Diagnóstico técnico de impresoras láser por manchas, rayas, fijación deficiente de tóner, desgaste de filmina fusora y rodillos."
      whatsappText="Hola, mi impresora láser imprime con manchas o rayas (indicar marca y modelo)"
      whatsappButtonLabel="Consultar Falla Láser por WhatsApp"
      stepsSectionBadge="Diagnóstico por Componente"
      stepsSectionTitle="Cómo identificar si la falla viene del tóner, rodillos o unidad fusora"
      stepsSectionSubtitle="No toques la superficie fotosensible del tambor ni intentes raspar la filmina del fusor."
      steps={[
        {
          title: "1. Cartucho de tóner o tambor de imagen (drum)",
          description:
            "Rayas verticales finas, puntos que se repiten a la misma distancia o polvo suelto suelen deberse a desgaste de la cuchilla dosificadora, cilindro OPC rayado o tóner agotado/defectuoso.",
        },
        {
          title: "2. Rodillos y ruta del papel contaminados",
          description:
            "Acumulación de polvo de tóner, restos de etiquetas adhesivas o pelusa en los rodillos de transferencia y arrastre generan manchas irregulares en el frente o reverso de la hoja.",
        },
        {
          title: "3. Desgaste en la unidad fusora",
          description:
            "Si el tóner no queda bien adherido al papel, salen marcas arrugadas o manchas negras intensas en un borde, suele haber daño en la filmina de teflón, el rodillo de presión o el thermistor del fusor.",
        },
      ]}
      workshopTitle="¿Cuándo traer tu impresora láser al taller?"
      workshopItems={[
        "El tóner se desprende al tocar la hoja recién impresa (falla de fijación térmica).",
        "Escuchas ruidos metálicos, chirridos o atascamientos frecuentes en la parte trasera.",
        "Las manchas o rayas persisten después de probar un cartucho de tóner en buen estado.",
        "El equipo muestra errores de temperatura o falla de fusor en el panel.",
      ]}
      faqs={[
        {
          question: "¿Qué diferencia hay entre una falla de tóner y una falla de fusor?",
          answer:
            "Una falla de tóner o tambor suele producir líneas o puntos repetitivos sin afectar la fijación; cuando falla el fusor, el tóner puede verse corrido, poco adherido o acompañado de atascos y arrugas.",
        },
        {
          question: "¿Se puede reparar la unidad fusora sin cambiar toda la impresora?",
          answer:
            "Sí. En taller revisamos el estado de la filmina, el rodillo de presión, los bujes y sensores térmicos para reemplazar los componentes desgastados.",
        },
        {
          question: "¿Qué marcas de impresoras láser atienden en Medellín y el Valle de Aburrá?",
          answer:
            "Atendemos HP LaserJet, Brother, Kyocera, Ricoh y Samsung, además de contar con cartuchos de tóner y repuestos para mantenimiento.",
        },
      ]}
      internalLinks={[
        { label: "Servicio en Medellín →", href: "/medellin" },
        { label: "Servicio en Envigado →", href: "/envigado", colorClass: "text-cyan-400 hover:text-cyan-300" },
        { label: "Servicio en Itagüí & Sabaneta →", href: "/itagui-sabaneta", colorClass: "text-purple-400 hover:text-purple-300" },
        { label: "Inicio C&C Especialistas →", href: "/", colorClass: "text-emerald-400 hover:text-emerald-300" },
      ]}
    />
  );
}

