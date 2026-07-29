import {
  Search,
  User,
  Heart,
  ShoppingCart,
} from "lucide-react";

const actions = [
  {
    icon: Search,
    label: "Search",
  },
  {
    icon: User,
    label: "Account",
  },
  {
    icon: Heart,
    label: "Wishlist",
  },
  {
    icon: ShoppingCart,
    label: "Cart",
  },
];

export default function MainHeader() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        {/* Logo */}
        <div>
          <h1 className="text-5xl font-bold tracking-wide text-[#D4AF37]">
            ASHIRWAD GEMS
          </h1>

          <p className="mt-2 text-lg text-gray-500">
            Natural Certified Gemstones
          </p>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-10">
          {actions.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className="group flex flex-col items-center text-gray-700 transition-all duration-300 hover:text-[#D4AF37]"
              >
                <Icon
                  size={28}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="mt-2 text-sm">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}