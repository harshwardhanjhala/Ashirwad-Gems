import GemstoneCard from "./GemstoneCard";

const gemstones = [
  {
    name: "Blue Sapphire",
    image: "/images/gemstones/blue-sapphire.png",
    href: "/gemstones/blue-sapphire",
  },
  {
    name: "Cat's Eye",
    image: "/images/gemstones/cats-eye.png",
    href: "/gemstones/cats-eye",
  },
  {
    name: "Coral",
    image: "/images/gemstones/coral.png",
    href: "/gemstones/coral",
  },
  {
    name: "Diamond",
    image: "/images/gemstones/diamond.png",
    href: "/gemstones/diamond",
  },
  {
    name: "Emerald",
    image: "/images/gemstones/emerald.png",
    href: "/gemstones/emerald",
  },
  {
    name: "Hessonite",
    image: "/images/gemstones/hessonite.png",
    href: "/gemstones/hessonite",
  },
  {
    name: "Pearl",
    image: "/images/gemstones/pearl.png",
    href: "/gemstones/pearl",
  },
  {
    name: "Ruby",
    image: "/images/gemstones/ruby.png",
    href: "/gemstones/ruby",
  },
  {
    name: "Yellow Sapphire",
    image: "/images/gemstones/yellow-sapphire.png",
    href: "/gemstones/yellow-sapphire",
  },
];

const firstRow = gemstones.slice(0, 5);
const secondRow = gemstones.slice(5);

export default function GemstoneGrid() {
  return (
    <div className="mx-auto w-full space-y-20">

      {/* First Row */}
      <div className="flex justify-between px-8">
        {firstRow.map((stone) => (
          <div key={stone.name} className="w-[220px] flex-shrink-0">
            <GemstoneCard {...stone} />
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex justify-center gap-20">
        {secondRow.map((stone) => (
          <div key={stone.name} className="w-[220px] flex-shrink-0">
            <GemstoneCard {...stone} />
          </div>
        ))}
      </div>

    </div>
  );
}