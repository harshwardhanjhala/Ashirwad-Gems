"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function BlueSapphirePage() {
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
          BLUE SAPPHIRE INTRO
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
              ONE CONTENT BLOCK
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
              Blue Sapphire (Neelam Stone)
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
                Looking for the most powerful gemstone? Buy{" "}
                <span className="font-semibold text-white">
                  Blue Sapphire
                </span>{" "}
                today and experience an unmatched transformation.
                Referred to as Neelam stone in Hindi, it is a gemstone
                for Shani or Saturn. It is the best remedy for Shani
                sade sati, weak Shani, relationship, and career issues.
                For those seeking more than just an astrological gem,
                it is your stone of interest.
              </p>


              <p
                className="text-white/80"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.75",
                }}
              >
                Owing to its strong significance and captivating hue,
                the blue sapphire stone is widely used as jewelry,
                celebrating special moments in life.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT — BLUE SAPPHIRE / 360 BLOCK
          ================================================= */}

          <div
            className="relative flex items-center justify-center"
            style={{
              minHeight: "380px",
            }}
          >

            {/* Blue Glow */}

            <div
              className="
                absolute
                rounded-full
                bg-blue-500/10
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


            {/* Blue Sapphire */}

            <img
              src="/images/gemstones/blue-sapphire.png"
              alt="Blue Sapphire"
              style={{
                position: "relative",
                zIndex: 10,
                width: "460px",
                objectFit: "contain",
              }}
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          BLUE SAPPHIRE SECTION NAVIGATION
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
          KEEPING THIS EXACTLY AS IT IS FOR NOW
      ===================================================== */}

      {activeSection && (

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

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Blue Sapphire
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              {activeSection}
            </h2>

            <p className="mt-6 max-w-3xl text-[17px] leading-8 text-white/60">
              Detailed content for {activeSection.toLowerCase()} will
              be added here later.
            </p>

          </div>

        </section>

      )}

    </main>
  );
}