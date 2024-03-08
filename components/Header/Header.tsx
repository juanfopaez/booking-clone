"use client";

import { useState } from "react";

import { Dialog } from "@headlessui/react";
import { DesktopLinks } from "./DesktopLinks";
import { MobileMenu } from "./MobileMenu";
import { MobileLinks } from "./MobileLinks";
import { Logo } from "./Logo";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMobileMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <header className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center
         justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Logo className="h-5 w-auto" />
        </div>
        <DesktopLinks />
        <MobileMenu handleOpenMenu={handleOpenMenu} />
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={handleCloseMenu}
      >
        <div className="fixed inset-0 z-10" />
        <MobileLinks handleOnClose={handleCloseMenu} />
      </Dialog>
    </header>
  );
};
export default Header;
