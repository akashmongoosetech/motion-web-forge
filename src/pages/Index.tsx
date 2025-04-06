
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutPreview from "@/components/home/AboutPreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import BlogPreview from "@/components/home/BlogPreview";
import StatsSection from "@/components/home/StatsSection";
import FAQSection from "@/components/home/FAQSection";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <StatsSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <BlogPreview />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
