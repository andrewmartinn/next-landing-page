import Banner from "@/components/banner";
import CallToAction from "@/components/call-to-action";
import FAQsSection from "@/components/faqs-section";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoTicker from "@/components/logo-ticker";
import Navbar from "@/components/navbar";
import ProductShowcase from "@/components/product-showcase";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQsSection />
      <CallToAction />
      <Footer />
    </>
  );
}
