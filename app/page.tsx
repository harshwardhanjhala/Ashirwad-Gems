import Header from "@/components/layout/header/Header";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <AboutSection />

      <section className="min-h-screen bg-white">
        {/* <div className="mx-auto max-w-7xl py-32 text-center">
          <h2 className="text-5xl font-bold">
            Featured Gemstones
          </h2>
        </div> */}
      </section>
    </>
  );
}