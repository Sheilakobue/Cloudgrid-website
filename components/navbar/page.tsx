"use client"; // This directive indicates that this code should be run on the client side

import Link from "next/link"; // Importing the Link component from Next.js for navigation
import { useState } from "react"; // Importing useState hook from React for managing state
import { FiMenu } from "react-icons/fi"; // Importing the FiMenu icon from react-icons library
import { MdClose } from "react-icons/md"; // Importing the MdClose icon from react-icons library
import Image from "next/image"; // Importing the Image component from Next.js for optimized image rendering
import { RiMoonFill, RiSunLine } from "react-icons/ri"; // Importing icons for theme toggle
import { useTheme, ThemeProvider } from "next-themes"; // Importing useTheme hook from next-themes for theme management

// Defining the interface for navigation items
interface NavItem {
  label: string; // Label of the navigation item
  page: string; // Route of the navigation item
}

// Defining the navigation links
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "/home",
  },
  {
    label: "About Us",
    page: "/about",
  },
  {
    label: "Solutions",
    page: "/solutions",
  },
  {
    label: "Contact",
    page: "/contact",
  },
];

// Navbar component
export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme(); // Using the useTheme hook to manage theme
  const currentTheme = theme === "system" ? systemTheme : theme; // Checking if the current theme is the system theme
  // State to manage the mobile menu's open/close state
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  // Function to handle opening/closing the mobile menu
  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="flex justify-between items-center py-3">
        {/* Logo link */}
        <Link href="/" className="flex items-center">
          <Image src="/logo 2.jpg" alt="Logo" width={100} height={50} />
        </Link>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={handleOpenMobileMenu}>
            {openMobileMenu ? <MdClose size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.page}
              className="block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
            >
              {item.label}
            </Link>
          ))}
          {/* Theme toggle button */}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={15} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={15} />
            </button>
          )}
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${openMobileMenu ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center space-y-8 pb-3 mt-8">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.page}
              className="block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
