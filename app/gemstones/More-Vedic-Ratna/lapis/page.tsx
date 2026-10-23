"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function LapisPage() {
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
      title: "About Lapis",
      paragraphs: [
        "Lapis Lazuli is a rock rather than a single mineral. Its blue colour comes mainly from lazurite, and it commonly includes white calcite and golden flecks of pyrite.",

        "The finest lapis has long been associated with the mines of Afghanistan, and other sources include Chile and Russia. It has been used since ancient times for jewellery, carvings and the pigment ultramarine.",

        "The appearance and value of Lapis depend on several characteristics, including colour, clarity, cut, carat weight, origin, treatment, and overall quality.",
      ],
    },

    BENEFITS: {
      title: "Benefits of Lapis",
      paragraphs: [
        "Lapis Lazuli is not part of the classical Navratna. In popular practice it is sometimes linked with Saturn or Jupiter, but views vary and any association is a matter of belief.",

        "Lapis has a Mohs hardness of about 5 to 5.5 and is relatively soft and porous, so it suits cabochons, beads and pendants better than rings worn every day.",

        "Astrological and metaphysical effects are matters of traditional belief and personal faith. They should not be considered guaranteed outcomes or substitutes for professional advice.",
      ],
    },

    "WHO SHOULD WEAR": {
      title: "Who Should Wear Lapis?",
      paragraphs: [
        "Anyone who appreciates the colour and character of Lapis may choose it as fine jewellery.",

        "Where a gemstone is chosen for astrological reasons, traditional practice is to have the individual birth chart examined by a qualified astrologer, since suitability can vary from person to person.",

        "For jewellery purposes, anyone who appreciates the look and character of Lapis may choose it without wearing it for astrological reasons.",
      ],
    },

    "HOW TO WEAR": {
      title: "How to Wear Lapis",
      paragraphs: [
        "Lapis is commonly set in rings, pendants, earrings and bracelets in gold, silver or platinum, depending on the design. A secure setting protects the stone while allowing light to reach it.",

        "For astrological use, traditional practices may specify the metal, finger, day, and method of wearing a gemstone. These recommendations vary with the individual's birth chart and astrological tradition.",

        "If you are purchasing Lapis specifically for astrological purposes, it is advisable to follow the guidance of a qualified practitioner rather than relying on a general recommendation.",
      ],
    },

    "QUALITY FACTORS": {
      title: "Lapis Quality Factors",
      paragraphs: [
        "Intense, even, deep blue with minimal white calcite and small, attractive golden pyrite is most desirable. Too much white or grey lowers value.",

        "As an opaque stone it is judged by colour, evenness and polish. Large calcite patches and cracks reduce quality.",

        "Some lapis is dyed, waxed or stabilised to improve its colour, which should be disclosed. Colour matters more than size or origin.",
      ],
    },

    "CARE & CLEANING": {
      title: "Lapis Care & Cleaning",
      paragraphs: [
        "Avoid acids, harsh chemicals, perfume, heat and prolonged water exposure, and clean only with a soft damp cloth. Store separately to avoid scratches.",

        "When not being worn, store Lapis jewellery separately in a soft pouch to reduce the possibility of scratches or damage to other pieces. Periodic checks of the setting by a jeweller are also advisable.",

        "If the stone has undergone any treatment, follow the specific care recommendations provided by the seller or a gemological professional.",
      ],
    },

    "PRICE GUIDE": {
      title: "Lapis Price Guide",
      paragraphs: [
        "Fine, deep blue lapis with golden pyrite is valued, while pale or heavily calcite-marked stones are inexpensive. Price depends on colour, evenness and size.",

        "There is no single fixed price for Lapis. When comparing prices, compare stones with similar characteristics, treatment status and certification.",

        "A very low price should be evaluated carefully, particularly when the gemstone is claimed to be natural, untreated, or from a specific origin.",
      ],
    },

    "BUYER BEWARE": {
      title: "Lapis Buyer Beware",
      paragraphs: [
        "Dyed jasper, reconstituted material and synthetic imitations of lapis exist. Ask whether the stone is natural, treated or dyed, especially if the colour looks unusually uniform.",

        "A reputable seller should be able to explain the gemstone's treatment status and provide appropriate documentation or certification when available.",

        "Be careful with unsupported claims about guaranteed astrological results, extremely rare origins, or unusually high value. A professional gemological report can provide useful information about identity and characteristics.",
      ],
    },

    "FAQ'S": {
      title: "Frequently Asked Questions",
      paragraphs: [
        "What is Lapis? Lapis lazuli is a deep blue stone often flecked with golden pyrite, treasured for thousands of years in jewellery, art and carving.",

        "Is Lapis associated with any planet in astrology? Lapis Lazuli is not part of the classical Navratna. In popular practice it is sometimes linked with Saturn or Jupiter, but views vary and any association is a matter of belief.",

        "Is Lapis durable? Lapis has a Mohs hardness of about 5 to 5.5 and is relatively soft and porous, so it suits cabochons, beads and pendants better than rings worn every day.",

        "Is pyrite in lapis normal? Yes. Golden flecks of pyrite are a natural feature and are often prized, though excessive amounts can change the stone's look.",

        "How can I tell if lapis is dyed? A gemmological test can help, as colour concentrated in cracks or coming off on a swab may suggest dyeing. Ask the seller for disclosure.",

        "How can I verify Lapis? A reputable gemological laboratory certificate can help identify the gemstone and provide information about characteristics such as whether it is natural or synthetic and whether treatment has been detected.",
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
          LAPIS INTRO
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
              Lapis Lazuli (Lajward)
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
                Looking for a deep blue stone with golden flecks and thousands
                of years of history?
                Discover{" "}
                <span className="font-semibold text-white">
                  Lapis
                </span>{" "}
                today and explore a stone treasured since antiquity.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Lapis lazuli is a deep blue stone often flecked with golden
                pyrite, treasured for thousands of years in jewellery, art and
                carving.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — LAPIS / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Lapis Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-blue-700/10
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


            {/* Lapis Video */}

            <div
              className="relative z-10 overflow-hidden"
              style={{
                width: "560px",
                height: "340px",
              }}
            >
              <video
                src="/videos/gemstones/lapis.mp4"
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
          LAPIS SECTION NAVIGATION
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
              Lapis
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