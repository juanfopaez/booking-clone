"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { StaysPopover } from "./StaysPopover";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center
         justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <Image
              className="h-6 w-auto"
              src="/booking.svg"
              width={1}
              height={1}
              alt="Booking Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-02.5 inline-flex items-center justify-center 
            rounded-md p-2.5 text-white"
            onClick={handleOpenMenu}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <StaysPopover />
      </nav>
    </header>
  );
}
export default Header;
