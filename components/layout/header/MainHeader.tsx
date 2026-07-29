import {
  Search,
  User,
  Heart,
  ShoppingCart,
} from "lucide-react";

import Logo from "@/components/common/Logo";
import Container from "@/components/common/Container";

const actions = [
  { icon: Search, label: "Search" },
  { icon: User, label: "Account" },
  { icon: Heart, label: "Wishlist" },
  { icon: ShoppingCart, label: "Cart" },
];

export default function MainHeader() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <Container className="py-6">

        <div className="grid grid-cols-3 items-center">

          {/* Left */}
          <div className="flex justify-start">
            <Logo />
          </div>

          {/* Center */}
          <div />

          {/* Right */}
          <div className="flex justify-end gap-8">
            {actions.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className="group flex flex-col items-center text-gray-700 transition-all duration-300 hover:text-[#D4AF37]"
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

        </div>

      </Container>
    </div>
  );
}