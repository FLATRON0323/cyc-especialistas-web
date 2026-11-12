import type { NextPage, Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_CONFIG.domainUrl,
  },
};
import HeroSection from '@/components/sections/HeroSection';
import QuickDiagnosticSection from '@/components/sections/QuickDiagnosticSection';
import ProblemsSection from '@/components/sections/ProblemsSection';
import WorkProcessSection from '@/components/sections/WorkProcessSection';
import ResultsSection from '@/components/sections/ResultsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import ProductsSection from '@/components/sections/ProductsSection';
import YoutubeSection from '@/components/sections/YoutubeSection';
import SoftwareSection from '@/components/sections/SoftwareSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CoverageSection from '@/components/sections/CoverageSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';

const Home: NextPage = () => {
  const homeFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_CONFIG.domainUrl}/#faq`,
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Realizan mantenimiento de impresoras a domicilio en Medellín, Bello y Envigado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, en C&C Especialistas en Impresión y Computadores atendemos en nuestro taller en Santa Cruz (Medellín) y ofrecemos servicio a domicilio y recogida programada para empresas, oficinas y consultorios en Medellín, Bello, Envigado, Itagüí, Sabaneta y todo el Valle de Aburrá."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué marcas de impresoras reparan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Somos especialistas multimarca en impresoras de inyección de tinta continua y láser: Epson, Canon, HP, Brother, Kyocera, Ricoh y Samsung. Realizamos destape de cabezales, cambio y reset de almohadillas, reparación de unidades fusoras y venta de tóner y tintas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta el diagnóstico técnico de mi impresora o computador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El diagnóstico y servicio básico en nuestro taller en Santa Cruz inicia desde $40.000 COP. El servicio a domicilio oscila entre $90.000 y $120.000 COP según la complejidad, tipo y condición del equipo, proceso a realizar y ubicación. El precio final se confirma por WhatsApp tras evaluar tu caso."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <QuickDiagnosticSection />
        <ServicesSection />
        <CoverageSection />
        <ProblemsSection />
        <WorkProcessSection />
        <ResultsSection />
        <PricingSection />
        <TestimonialSection />
        <ProductsSection />
        <YoutubeSection />
        <SoftwareSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
