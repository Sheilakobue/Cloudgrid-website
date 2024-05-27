// navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";

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
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="flex justify-between items-center py-3">
        <Link href="/" className="flex items-center">
          <Image src="/logo 2.jpg" alt="Logo" width={100} height={50} />
        </Link>
        <div className="md:hidden">
          <button onClick={handleOpenMobileMenu}>
            {openMobileMenu ? <MdClose size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item, idx) => (
            <Link key={idx} href={item.page} className="block text-blue-900 hover:text-yellow-500 dark:text-neutral-100">
              {item.label}
            </Link>
          ))}
          {currentTheme === "dark" ? (
            <button onClick={() => setTheme("light")} className="bg-slate-100 p-2 rounded-xl">
              <RiSunLine size={15} color="black" />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")} className="bg-slate-100 p-2 rounded-xl">
              <RiMoonFill size={15} />
            </button>
          )}
        </div>
      </div>
      <div className={`md:hidden ${openMobileMenu ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center space-y-3 pb-3 mt-8">
          {NAV_ITEMS.map((item, idx) => (
            <Link key={idx} href={item.page} className="block text-blue-900 hover:text-yellow-500 dark:text-neutral-100" onClick={() => setOpenMobileMenu(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
