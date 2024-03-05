import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Booking.com</span>
      <Image
        className={className}
        src="/booking.svg"
        width={1}
        height={1}
        alt="Booking Logo"
      />
    </Link>
  );
};
