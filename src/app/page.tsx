import Header from '@/components/landingPage/Header';
import HeroSection from '@/components/landingPage/HeroSection';
import FeaturesSection from '@/components/landingPage/FeaturesSection';
import ProgramsSection from '@/components/landingPage/ProgramsSection';
import TestimonialSection from '@/components/landingPage/TestimonialSection';
import CTASection from '@/components/landingPage/CTASection';
import Footer from '@/components/landingPage/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProgramsSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
