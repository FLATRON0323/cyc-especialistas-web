import type { NextPage } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemsSection from '@/components/sections/ProblemsSection';
import WorkProcessSection from '@/components/sections/WorkProcessSection';
import ResultsSection from '@/components/sections/ResultsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import ProductsSection from '@/components/sections/ProductsSection';
import YoutubeSection from '@/components/sections/YoutubeSection';
import SoftwareSection from '@/components/sections/SoftwareSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
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
