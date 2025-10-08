import {
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from 'flowbite-react';
import { Sidebar } from './Sidebar';

export const Navbar = () => {
  return (
    <FlowbiteNavbar fluid rounded className="relative z-100">
      <NavbarBrand href="#">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {import.meta.env.VITE_BRAND_NAME}
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="h-full [&>ul]:mt-2">
        <Sidebar className="w-full md:hidden border-t border-gray-200 dark:border-gray-700 fixed h-auto -left-[1px]" />
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
};
