import Banner from "@/components/banner";
import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import LogoTicker from "@/components/logo-ticker";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <LogoTicker />
      <Features />
    </>
  );
}
