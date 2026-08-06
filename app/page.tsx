import Header from "@/components/layout/header/Header";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import FeaturedGemstones from "@/components/home/FeaturedGemstones";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <AboutSection />

       {/* Black → Navy transition */}
        <div className="h-48 bg-gradient-to-b from-black via-[#05080F] via-40% to-[#0B1120]" />

      <FeaturedGemstones />

      <section className="min-h-screen bg-white"></section>
    </>
  );
}