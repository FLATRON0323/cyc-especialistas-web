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
  return (
    <>
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
