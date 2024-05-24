//"use client"; // This directive indicates that this code should be run on the client side

import Link from "next/link"; // Importing the Link component from Next.js for navigation
import { useState } from "react"; // Importing useState hook from React for managing state
import { FiMenu } from "react-icons/fi"; // Importing the FiMenu icon from react-icons library
import { MdClose } from "react-icons/md"; // Importing the MdClose icon from react-icons library
import Image from "next/image"; // Importing the Image component from Next.js for optimized image rendering
import { RiMoonFill, RiSunLine } from "react-icons/ri"; // Importing icons for theme toggle
import { useTheme } from "next-themes"; // Importing useTheme hook from next-themes for theme management

// Defining the interface for navigation items
interface NavItem {
  label: string; // Label of the navigation item
  page: string; // Route of the navigation item
}

// Defining the navigation links
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },

  {
    label: "About Us",
    page: "about",
  },
  {
    label: "Solutions",
    page: "solutions",
  },
  {
    label: "Contact",
    page: "Contact",
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
    <header className="w-full mx-auto px-4 bg-blue-200 shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="md:py-5 md:block">
            {/* Logo link */}
            <Link href="/">
              <Image src="/logo 2.jpg" alt="Logo" width={150} height={50} />
            </Link>
          </div>
        </div>
        <div className = " md:flex md:space-x-6">
          {NAV_ITEMS.map((item, idx) => {
            return <a key={idx}>{item.label}</a>;
          })}
           {/* Theme toggle button */}
       {currentTheme === "dark" ? (
          <button onClick={() => setTheme("light")} className="bg-slate-100 p-2 rounded-xl">
            <RiSunLine size={15} color="black"/>
          </button>
        ) : (
          <button onClick={() => setTheme("dark")} className="bg-slate-100 p-2 rounded-xl">
            <RiMoonFill size={15}/>
          </button>
        )}
        </div>
      </div>
    </header>
  );
}
