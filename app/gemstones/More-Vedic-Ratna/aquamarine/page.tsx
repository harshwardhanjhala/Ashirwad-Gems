"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function AquamarinePage() {
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
      title: "About Aquamarine",
      paragraphs: [
        "Aquamarine is the blue to greenish-blue variety of beryl, coloured mainly by iron. It is closely related to emerald, which is also beryl but coloured by chromium or vanadium.",

        "Its name comes from Latin words meaning sea water. Sources include Brazil, Pakistan, Nigeria, Mozambique and Madagascar, among others, and it often forms in large, clean crystals.",

        "The appearance and value of Aquamarine depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Aquamarine",
      paragraphs: [
        "Aquamarine is not part of the classical Navratna. Some practitioners consider it an Upratna or associate it with Venus or other planets, but traditions vary and any association is a matter of belief.",

        "Aquamarine has a Mohs hardness of about 7.5 to 8 and is generally eye-clean, making it a good all-round jewellery stone, though hard knocks should be avoided.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Aquamarine?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Aquamarine may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Aquamarine may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Aquamarine",
      paragraphs: [
        "Aquamarine is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Aquamarine specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Aquamarine Quality Factors",
      paragraphs: [
        "A clear, evenly saturated blue to slightly greenish blue is most valued, with deeper blue shades generally more prized. Deep blue stones, sometimes marketed as Santa Maria, are especially sought after.",

        "High clarity is expected, and eye-clean stones are the norm. Cutting should show brilliance and avoid washed-out areas.",

        "Most aquamarine on the market is heated to remove greenish tones and improve the blue, which is widely accepted. Origin, size and colour affect price.",
      ],
    },

    "CARE & CLEANING": {
      title: "Aquamarine Care & Cleaning",
      paragraphs: [
        "Clean with lukewarm soapy water and a soft brush. Avoid sudden temperature changes and harsh chemicals, and store apart from harder stones.",

        "When not being worn, store Aquamarine jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Aquamarine Price Guide",
      paragraphs: [
        "Prices depend mainly on colour depth, clarity and size, with deeper blue stones of larger size commanding higher prices.",

        "There is no single fixed price for Aquamarine. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Aquamarine Buyer Beware",
      paragraphs: [
        "Aquamarine is imitated by blue topaz, glass and synthetic stones. Ask for treatment disclosure and, for important purchases, a laboratory report.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Aquamarine? Aquamarine is a blue to blue-green variety of beryl admired for its clarity, soft sea-like colour and wearability.",

        "Is Aquamarine associated with any planet in astrology? Aquamarine is not part of the classical Navratna. Some practitioners consider it an Upratna or associate it with Venus or other planets, but traditions vary and any association is a matter of belief.",

        "Is Aquamarine durable? Aquamarine has a Mohs hardness of about 7.5 to 8 and is generally eye-clean, making it a good all-round jewellery stone, though hard knocks should be avoided.",

        "How is aquamarine different from blue topaz? Aquamarine is beryl and blue topaz is topaz. Blue topaz is usually treated to achieve its colour, and the two differ in properties and value.",

        "Is aquamarine heat treated? Often yes. Gentle heating is commonly used to remove green tones and is widely accepted when disclosed.",

        "How can I verify Aquamarine? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          AQUAMARINE INTRO
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
              Aquamarine (Beruj)
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
                Looking for a gemstone with the clear blue of calm seas?
                Discover{" "}
                <span className="font-semibold text-white">
                  Aquamarine
                </span>{" "}
                today and explore a beautiful, transparent blue beryl.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Aquamarine is a blue to blue-green variety of beryl admired
                for its clarity, soft sea-like colour and wearability.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — AQUAMARINE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Aquamarine Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-cyan-500/10
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


            {/* Aquamarine Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/aquamarine.mp4"
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
          AQUAMARINE SECTION NAVIGATION
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
              Aquamarine
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