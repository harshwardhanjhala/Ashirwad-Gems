import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo/logo-v2.png"
      alt="Ashirwad Gems"
      width={150}
      height={75}
      priority
      className="h-auto w-auto"
    />
  );
}