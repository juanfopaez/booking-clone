import { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";

import { callActions, products, links } from "@/constants";

import { ChevronUpIcon } from "@heroicons/react/20/solid";

export const DesktopLinks = () => {
  return (
    <>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
          <Popover.Button
            className="flex items-center gap-x-1 text-sm
           font-semibold leading-6 text-white"
          >
            Stays
            <ChevronUpIcon
              className="h-5 w-5 flex-none text-white"
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen
              max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="p-4">
                {products.map(({ name, description, icon: Icon, href }) => (
                  <div
                    key={name}
                    className="group relative flex items-center gap-x-6 
                    rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div
                      className="flex h-11 w-11 flex-none items-center 
                    justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200"
                    >
                      <Icon
                        className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={href}
                        className="block font-semibold text-[#013B94]"
                      >
                        {name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-[#013B94]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="grid grid-cols-2 divide-x
               divide-gray-900/5 bg-gray-50"
              >
                {callActions.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm
                     font-semibold leading-6 text-[#013B94] hover:bg-gray-100"
                  >
                    <Icon
                      className="h-5 w-5 flex-none text-[#013B94]"
                      aria-hidden="true"
                    />
                    {name}
                  </a>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        {links.map(({ href, name }) => (
          <a
            key={name}
            href={href}
            className="text-white text-sm font-semibold leading-6"
          >
            {name}
          </a>
        ))}
      </Popover.Group>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Log In <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </>
  );
};
