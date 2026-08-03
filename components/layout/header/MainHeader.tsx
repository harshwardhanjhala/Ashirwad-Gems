"use client";

import { useState } from "react";

import {
  Search,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";

import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";
import MegaMenu from "@/components/layout/header/MegaMenu";

const actions = [
  { icon: Search, label: "Search" },
  { icon: User, label: "Account" },
  { icon: Heart, label: "Wishlist" },
  { icon: ShoppingCart, label: "Cart" },
];

const navLinks = [
  { name: "HOME", dropdown: false },
  { name: "GEMSTONES", dropdown: true },
  { name: "BIRTHSTONES", dropdown: true },
  { name: "GEM SUGGESTIONS", dropdown: false },
  { name: "ABOUT US", dropdown: false },
  { name: "CONTACT", dropdown: false },
];

export default function MainHeader() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  return (
    <div
      className="absolute top-0 left-0 w-full z-50"
      onMouseLeave={() => setShowMegaMenu(false)}
    >
      <Container className="flex items-center justify-between py-5">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Navigation */}
        <nav
          className="mx-auto flex justify-center"
        >
          <div className="flex items-center gap-10">
            {navLinks.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (item.name === "GEMSTONES") {
                    setShowMegaMenu(true);
                  }
                }}
              >
                <button
                  className="group flex items-center gap-1 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:text-[#D4AF37]"
                >
                  {item.name}
        
                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </button>
        
                {/* {item.name === "GEMSTONES" && (
                  <MegaMenu
                    isOpen={showMegaMenu}
                    setIsOpen={setShowMegaMenu}
                  />
                )} */}

              </div>
            ))}
          </div>
        </nav>

        {/* Icons */}
        <div className="ml-16 flex flex-shrink-0 items-center gap-8">
          {actions.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className="group flex flex-col items-center text-white transition-all duration-300 hover:text-[#D4AF37]"
              >
                <Icon
                  size={22}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="mt-1 text-xs font-medium tracking-wide">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

      </Container>

      <MegaMenu
        isOpen={showMegaMenu}
        setIsOpen={setShowMegaMenu}
      />

    </div>
  );
}