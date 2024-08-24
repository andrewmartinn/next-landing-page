import Banner from "@/components/banner";
import FAQsSection from "@/components/faqs-section";
import Features from "@/components/features";
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
    </>
  );
}
