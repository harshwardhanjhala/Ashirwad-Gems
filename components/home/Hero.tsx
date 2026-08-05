export default function Hero() {
  return (
    <section
      className="relative h-[100vh] bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/hero/hero-bg.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        {/* <div className="text-center text-white">
          <h1 className="font-serif text-6xl font-semibold">
            Natural Gemstones
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Authentic • Certified • Trusted Since 1978
          </p>

          <button className="mt-10 rounded-full border border-[#D4AF37] px-8 py-3 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black">
            Explore Collection
          </button>
        </div> */}
      </div>
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}