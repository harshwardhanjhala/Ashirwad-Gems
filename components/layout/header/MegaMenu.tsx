import Link from "next/link";
import { gemstoneMenu } from "./megaMenuData";

interface MegaMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MegaMenu({
  isOpen,
  setIsOpen,
}: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-1/2 top-full z-50 w-[92%] max-w-[1400px] -translate-x-1/2 rounded-md border border-gray-200 bg-white shadow-xl"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="px-8 py-8">
        <div className="grid grid-cols-5 gap-12">
          {gemstoneMenu.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-base font-semibold text-black">
                {column.title}
              </h3>

              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-gray-700 hover:text-[#D4AF37]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}