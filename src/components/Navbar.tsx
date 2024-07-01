"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import logo from '../../public/logo 2.png' 
import logoa from '../../public/logo2.jpg' 

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "/" },
  { label: "About Us", page: "/about" },
  { label: "Solutions", page: "/solutions" },
  { label: "Contact", page: "/contact" },
];

/**
 * Navbar component
 * Renders the navigation bar with menu items and theme switcher.
 * @returns {JSX.Element} The Navbar component JSX
 */
export default function Navbar(): JSX.Element {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 bg-blue-100 shadow top-0 z-50 sm:px-20 dark:bg-gray-800 dark:border-b dark:border-stone-400">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            {/* Logo section */}
            <div className="md:py-5 md:block">
              <Link href="/" className="flex items-center">
                <Image src={logo} alt="Logo" width={220}  />
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden text-blue-950 hover:text-amber-500 dark:text-neutral-100">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* Navigation menu */}
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
            <div className="items-center justify-center space-y-3 md:flex md:space-x-4 md:space-y-0 text-blue-950 dark:text-amber-500">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.page}
                  className="block md:inline-block hover:text-amber-500 dark:text-neutral-100"
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Theme switcher */}
              <div className="flex items-center justify-between">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
