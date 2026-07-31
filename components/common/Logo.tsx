import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo/logo-v2.png"
      alt="Ashirwad Gems"
      width={200}
      height={100}
      priority
      className="h-auto w-auto"
    />
  );
}