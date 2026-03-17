import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AuthoritySection from "@/components/AuthoritySection";
import ValueStack from "@/components/ValueStack";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <UrgencyBanner />
    <HeroSection />
    <ProblemSection />
    <AuthoritySection />
    <ValueStack />
    <TestimonialsSection />
    <GuaranteeSection />
    <FaqSection />
    <FinalCta />
    <Footer />
  </div>
);

export default Index;
