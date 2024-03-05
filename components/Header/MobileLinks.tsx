import { Dialog, Disclosure } from "@headlessui/react";
import { Logo } from "./Logo";

import { callActions, products, links } from "@/constants";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";

interface MobileLinksProps {
  handleOnClose: () => void;
}

export const MobileLinks = ({ handleOnClose }: MobileLinksProps) => {
  return (
    <Dialog.Panel
      className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto
      bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
    >
      <div className="flex items-center justify-between">
        <Logo className="block sm:hidden h-5 w-auto" />
        <button
          type="button"
          className="-m-02.5 inline-flex items-center justify-center 
          rounded-md p-2.5 text-white"
          onClick={handleOnClose}
        >
          <span className="sr-only">Close main menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 pt-6">
            <Disclosure as="div" className="-mx-3">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className="flex w-full items-center justify-between
                   rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold
                    leading-7 text-white hover:bg-blue-800"
                  >
                    Stays
                    <ChevronDownIcon
                      className={cn(
                        open ? "rotate-180" : "",
                        "h-5 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 pb-4">
                    {[...products, ...callActions].map(({ name, href }) => (
                      <Disclosure.Button
                        key={name}
                        as="a"
                        href={href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm
                         font-semibold leading-7 text-white hover:bg-blue-800"
                      >
                        {name}
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          {links.map(({ href, name }) => (
            <a
              key={name}
              href={href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base
               font-semibold leading-7 text-white hover:bg-blue-800"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </Dialog.Panel>
  );
};
