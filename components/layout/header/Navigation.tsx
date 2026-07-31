import { ChevronDown } from "lucide-react";
import Container from "@/components/common/Container";

const navLinks = [
  { name: "HOME", dropdown: false },
  { name: "GEMSTONES", dropdown: true },
  { name: "BIRTHSTONES", dropdown: true },
  { name: "GEM SUGGESTIONS", dropdown: false },
  { name: "ABOUT US", dropdown: false },
  { name: "CONTACT", dropdown: false },
];

export default function Navigation() {
  return (
    <nav className=" bg-#020617">
      <Container className="flex h-14 items-center justify-center gap-10">
        {navLinks.map((item) => (
          <button
            key={item.name}
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
        ))}
      </Container>
    </nav>
  );
}