import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/home/HeroSlider";
import ServiceCategories from "@/components/home/ServiceCategories";
import PromoPackages from "@/components/home/PromoPackages";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OutletLocation from "@/components/home/OutletLocation";
import StatsCounter from "@/components/home/StatsCounter";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <ServiceCategories />
        <PromoPackages />
        <WhyChooseUs />
        <StatsCounter />
        <OutletLocation />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
