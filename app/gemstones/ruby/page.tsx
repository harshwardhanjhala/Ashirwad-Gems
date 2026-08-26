"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function RubyPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    "ABOUT",
    "BENEFITS",
    "WHO SHOULD WEAR",
    "HOW TO WEAR",
    "QUALITY FACTORS",
    "CARE & CLEANING",
    "PRICE GUIDE",
    "BUYER BEWARE",
    "FAQ'S",
  ];

  const sectionContent: Record<
    string,
    {
      title: string;
      paragraphs: string[];
    }
  > = {
    ABOUT: {
      title: "About Ruby",
      paragraphs: [
        "Ruby is one of the most highly valued varieties of the mineral corundum and is recognised for its striking red colour, brilliance, durability, and rarity.",

        "The name Ruby is derived from the Latin word 'ruber', meaning red. The gemstone has been admired for centuries and has been associated with royalty, power, passion, and prosperity across different cultures.",

        "In Indian astrology, Ruby is traditionally associated with the Sun or Surya and is considered an important astrological gemstone. Apart from its astrological significance, Ruby is also widely used in fine jewellery because of its distinctive colour and durability.",

        "The appearance and value of a Ruby depend on several characteristics including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Ruby",
      paragraphs: [
        "Ruby has a strong place in traditional Indian gemstone and astrological practices. It is traditionally associated with the Sun or Surya and is believed to represent qualities such as confidence, leadership, vitality, courage, and authority.",

        "People interested in Ruby often choose it because of its traditional astrological significance as well as its intense red colour and premium appearance.",

        "Ruby is also a durable gemstone, making it suitable for rings, pendants, earrings, bracelets, and other forms of jewellery.",

        "Astrological effects and benefits are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Ruby?",
      paragraphs: [
        "Traditionally, Ruby is associated with the Sun or Surya in Vedic astrology. Whether a person should wear Ruby for astrological purposes is generally determined by examining their individual birth chart.",

        "People interested in wearing Ruby as an astrological gemstone often consult a qualified astrologer before choosing the gemstone. The suitability of the gemstone can vary from person to person according to traditional astrological practices.",

        "For jewellery purposes, anyone who appreciates the colour, beauty, rarity, and durability of Ruby may choose it without necessarily wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Ruby",
      paragraphs: [
        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing Ruby. These recommendations can vary according to an individual's birth chart and astrological tradition.",

        "Ruby is commonly set in rings, pendants, earrings, bracelets, and other jewellery designs. A secure setting is important to protect the gemstone while allowing sufficient light to reach the stone.",

        "If you are purchasing Ruby specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Ruby Quality Factors",
      paragraphs: [
        "The quality and value of a Ruby depend on several important characteristics. Colour is generally one of the most significant factors. Rich, vivid, and well-saturated red colours are particularly desirable.",

        "Clarity is another important consideration. Natural Rubies commonly contain inclusions, and some inclusions can even help indicate that a gemstone is natural. However, excessive or prominent inclusions may negatively affect transparency, appearance, and durability.",

        "Cut influences the brilliance, proportions, symmetry, and overall appearance of the Ruby. Carat weight, origin, treatment status, and laboratory certification can also have a significant impact on its value.",

        "The presence of a desirable red colour combined with good transparency, attractive cutting, and appropriate certification can make a Ruby particularly valuable.",
      ],
    },

    "CARE & CLEANING": {
      title: "Ruby Care & Cleaning",
      paragraphs: [
        "Ruby is a durable gemstone and is suitable for regular jewellery use. However, proper care can help maintain its appearance and protect the gemstone and its jewellery setting.",

        "For routine cleaning, gently clean the gemstone using lukewarm water, mild soap, and a soft brush. Rinse it thoroughly and dry it with a soft, lint-free cloth.",

        "Avoid exposing Ruby jewellery to harsh chemicals, strong cleaning solutions, or unnecessary impacts. When not being worn, store the jewellery separately to reduce the possibility of scratches or damage to other jewellery pieces.",

        "If the Ruby has undergone a treatment such as fracture filling, additional care may be required. In such cases, follow the care recommendations provided by the seller or gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Ruby Price Guide",
      paragraphs: [
        "The price of Ruby can vary significantly depending on its quality and characteristics. There is no single fixed price for all Rubies.",

        "Important factors affecting price include colour, clarity, cut, carat weight, origin, treatment status, and the availability of a reliable gemological certificate.",

        "Fine-quality Rubies with exceptional colour, transparency, rarity, and desirable origin can command very high prices.",

        "When comparing Ruby prices, it is important to compare gemstones with similar characteristics and certification. A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Ruby Buyer Beware",
      paragraphs: [
        "When purchasing a Ruby, always ask whether the gemstone is natural, treated, or synthetic. These characteristics can have a major effect on the gemstone's value.",

        "Rubies may undergo treatments to improve their colour, clarity, or overall appearance. Treatment information should therefore be clearly disclosed before purchase.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about the gemstone's identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Ruby? Ruby is the red variety of the mineral corundum and is one of the most recognised and valuable coloured gemstones.",

        "Is Ruby associated with any planet in astrology? Yes. In traditional Vedic astrology, Ruby is associated with the Sun or Surya.",

        "Is every Ruby suitable for astrology? Traditional astrological practices generally consider an individual's birth chart before recommending a gemstone. Therefore, a general recommendation may not be suitable for everyone.",

        "Is Ruby durable? Yes. Ruby is a variety of corundum and is a durable gemstone that is commonly used in jewellery.",

        "Can Ruby be treated? Yes. Rubies can undergo different treatments to improve their appearance. Treatment status is therefore an important factor to consider when purchasing one.",

        "How can I verify a Ruby? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
      ],
    },
  };

  const toggleSection = (section: string) => {
    setActiveSection(
      activeSection === section ? null : section
    );
  };

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">

      {/* =====================================================
          MAIN WEBSITE HEADER
      ===================================================== */}

      <Header />

      {/* SPACE BELOW MAIN HEADER */}

      <div style={{ height: "65px" }} />


      {/* =====================================================
          RUBY INTRO
      ===================================================== */}

      <section
        style={{
          width: "calc(100% - 320px)",
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >

        <div
          className="grid grid-cols-1 items-center lg:grid-cols-[1.15fr_0.85fr]"
          style={{
            minHeight: "430px",
            columnGap: "40px",
          }}
        >

          {/* =================================================
              LEFT — HEADING + DESCRIPTION
          ================================================= */}

          <div
            style={{
              maxWidth: "650px",
            }}
          >

            <h1
              className="font-semibold leading-tight tracking-tight"
              style={{
                fontSize: "32px",
              }}
            >
              Ruby (Manik Stone)
            </h1>


            <div
              className="space-y-1"
              style={{
                marginTop: "12px",
              }}
            >

              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Looking for a gemstone with a powerful red colour and
                timeless beauty? Discover{" "}
                <span className="font-semibold text-white">
                  Ruby
                </span>{" "}
                today and experience the beauty of one of the world's
                most admired gemstones. Known as Manik or Manikya in
                traditional Indian gemstone practices, Ruby is
                traditionally associated with the Sun or Surya.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Admired for its vivid red colour, brilliance, durability,
                and rarity, Ruby has been treasured for centuries and
                continues to be one of the most desirable gemstones for
                fine jewellery.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — RUBY / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Ruby Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-red-500/10
                blur-[100px]
              "
              style={{
                width: "360px",
                height: "360px",
              }}
            />


            {/* Outer Circle */}

            <div
              className="
                absolute
                rounded-full
                border
                border-[#D4AF37]/10
              "
              style={{
                width: "360px",
                height: "360px",
              }}
            />


            {/* Inner Circle */}

            <div
              className="
                absolute
                rounded-full
                border
                border-[#D4AF37]/10
              "
              style={{
                width: "280px",
                height: "280px",
              }}
            />


            {/* Ruby Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/ruby.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "scale(1.12)",
                }}
              />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RUBY SECTION NAVIGATION
      ===================================================== */}

      <section
        className="border-t border-white/10"
        style={{
          marginTop: "10px",
        }}
      >

        <div
          style={{
            width: "calc(100% - 320px)",
            maxWidth: "1320px",
            margin: "0 auto",
          }}
        >

          <nav
            className="
              flex
              items-center
              justify-between
              overflow-x-auto
            "
            style={{
              minHeight: "72px",
              gap: "25px",
            }}
          >

            {sections.map((section) => (

              <button
                key={section}
                onClick={() => toggleSection(section)}
                className={`
                  whitespace-nowrap
                  text-[13px]
                  font-medium
                  transition
                  ${
                    activeSection === section
                      ? "text-[#D4AF37]"
                      : "text-white/80 hover:text-[#D4AF37]"
                  }
                `}
              >
                {section}
              </button>

            ))}

          </nav>

        </div>

      </section>


      {/* =====================================================
          ACTIVE SECTION CONTENT
      ===================================================== */}

      {activeSection && sectionContent[activeSection] && (

        <section className="border-t border-white/10 bg-[#0D1424]">

          <div
            style={{
              width: "calc(100% - 320px)",
              maxWidth: "1100px",
              margin: "0 auto",
              paddingTop: "70px",
              paddingBottom: "70px",
            }}
          >

            {/* Small Label */}

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Ruby
            </p>


            {/* Section Heading */}

            <h2 className="mt-4 text-3xl font-semibold">
              {sectionContent[activeSection].title}
            </h2>


            {/* Section Content */}

            <div className="mt-6 max-w-4xl space-y-5">

              {sectionContent[activeSection].paragraphs.map(
                (paragraph, index) => (

                  <p
                    key={index}
                    className="text-[17px] leading-8 text-white/60"
                  >
                    {paragraph}
                  </p>

                )
              )}

            </div>

          </div>

        </section>

      )}

    </main>
  );
}