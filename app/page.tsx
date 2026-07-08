import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ProductsTeaser from "@/components/home/ProductsTeaser";
import WhyRivicon from "@/components/home/WhyRivicon";
import Certifications from "@/components/home/Certifications";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductsTeaser />
      <WhyRivicon />
      <Certifications />
      <CTABanner />
    </>
  );
}
