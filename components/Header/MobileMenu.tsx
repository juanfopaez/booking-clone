import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

interface MobileMenuPros {
  handleOpenMenu: () => void;
}

export const MobileMenu = ({ handleOpenMenu }: MobileMenuPros) => {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-02.5 inline-flex items-center justify-center 
          rounded-md p-2.5 text-white"
        onClick={handleOpenMenu}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
