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

export default function GemstoneGrid() {
  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {gemstones.map((stone) => (
        <GemstoneCard key={stone.name} {...stone} />
      ))}
    </div>
  );
}