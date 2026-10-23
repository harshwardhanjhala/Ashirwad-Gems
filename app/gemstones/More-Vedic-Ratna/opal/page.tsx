"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function OpalPage() {
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
      title: "About Opal",
      paragraphs: [
        "Opal is hydrated amorphous silica containing some water. Precious opal shows play of colour caused by the diffraction of light by tiny silica spheres, while common opal does not.",

        "Major sources include Australia, Ethiopia, Mexico and Brazil. Types include white, black, boulder, crystal and fire opal, each with its own look and value.",

        "The appearance and value of Opal depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Opal",
      paragraphs: [
        "In Indian tradition, Opal is regarded as an Upratna and is often offered as an alternative to Diamond in connection with Venus or Shukra. This is a matter of belief and tradition.",

        "Opal has a Mohs hardness of about 5.5 to 6.5 and is softer than most gemstones, so it can scratch or crack and is best suited to protected settings and careful wear.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Opal?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Opal may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Opal may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Opal",
      paragraphs: [
        "Opal is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Opal specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Opal Quality Factors",
      paragraphs: [
        "Brightness, pattern and range of play of colour are the main factors, with red flashes being the rarest. Body tone also matters, since dark body tones show colours more strongly.",

        "Cracks, sand inclusions and crazing reduce value. Most opals are cut as cabochons, and a good shape and dome improve beauty.",

        "Origin and type influence price, and the stone may be solid, a doublet or a triplet. Opals can be treated by smoking, dyeing or impregnation, and this should be disclosed.",
      ],
    },

    "CARE & CLEANING": {
      title: "Opal Care & Cleaning",
      paragraphs: [
        "Avoid hard knocks, sudden temperature changes, prolonged dryness, harsh chemicals and ultrasonic cleaners. Clean with a soft damp cloth. Some hydrophane opal can absorb water and change appearance temporarily.",

        "When not being worn, store Opal jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Opal Price Guide",
      paragraphs: [
        "Prices vary widely: fine black opal with bright play of colour is the most valuable, while light white or common opal is more accessible. Brightness, pattern, size and type determine value.",

        "There is no single fixed price for Opal. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Opal Buyer Beware",
      paragraphs: [
        "Doublets, triplets, synthetic opal and treated or dyed stones may be sold as solid natural opal. Ask exactly what the stone is and request disclosure.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Opal? Opal is a hydrated silica gemstone famous for its play of colour, with flashes of the spectrum that move as the stone is turned.",

        "Is Opal associated with any planet in astrology? In Indian tradition, Opal is regarded as an Upratna and is often offered as an alternative to Diamond in connection with Venus or Shukra. This is a matter of belief and tradition.",

        "Is Opal durable? Opal has a Mohs hardness of about 5.5 to 6.5 and is softer than most gemstones, so it can scratch or crack and is best suited to protected settings and careful wear.",

        "What is the difference between solid opal, doublet and triplet? A solid opal is a single piece of natural opal. Doublets and triplets are thin slices of opal bonded to a backing, and sometimes a cap, and are valued lower.",

        "Can opal crack? Yes. Opal can crack with impact or rapid temperature changes, so care is needed in storage and wear.",

        "How can I verify Opal? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          OPAL INTRO
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
              Opal
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
                Looking for a gemstone with flashes of rainbow colour?
                Discover{" "}
                <span className="font-semibold text-white">
                  Opal
                </span>{" "}
                today and explore a gemstone famous for its play of colour.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Opal is a hydrated silica gemstone famous for its play of
                colour, with flashes of the spectrum that move as the stone is
                turned.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — OPAL / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Opal Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-fuchsia-500/10
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


            {/* Opal Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/opal.mp4"
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
          OPAL SECTION NAVIGATION
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
              Opal
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