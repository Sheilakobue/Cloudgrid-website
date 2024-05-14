"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const navLinks = [
  { id: 1, name: "Home", route: "#home" },
  { id: 2, name: "About Us", route: "#aboutUs" },
  { id: 3, name: "Solutions", route: "#solutions" },
  { id: 4, name: "Contact", route: "contact" },
];

export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav className="w-full top-0 z-[99999] py-6 relative">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center w-[91%]">
        <Link href={"Home"}>
            
          <img
            src="../../../public/logo 2.png"
            alt="CloudGrid Logo"
            className="h-12"
          />
          
        </Link>
      </div>
    </nav>
  );
}
