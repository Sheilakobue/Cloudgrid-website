"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import { IoMdClose, IoMdMenu } from "react-icons/io";

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

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-700 dark:border-b dark:border-stone-400">
      <div className="justify-between md:items-center md:flex">
        <div className="flex items-center justify-between md:py-3">
          <div className="md:py-5 md:block">
            <Link href="/" className="flex items-center">
              <Image src="/logo 2.jpg" alt="Logo" width={100} height={50} />
            </Link>
          </div>
          <div className="md:hidden text-blue-900 hover:text-yellow-500">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div className={`md:hidden ${navbar ? "block" : "hidden"}`}>
            <div className="flex flex-col items-center space-y-3 pb-3 mt-8">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.page}
                  className="block text-blue-900 hover:text-yellow-500 dark:text-neutral-100"
                  onClick={() => setNavbar(false)}
                >
                  {item.label}
                </Link>
              ))}
               <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
