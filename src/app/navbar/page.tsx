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
        <Link href={"#home"}>
          <h1
            className="text-3xl
            text-yellow-500 font-bold "
          >
            CLOUDGRID
          </h1>
        </Link>
        <ul className="flex gap-10 max-mid:hidden text-black">
          {navLinks.map((link) => (
            <Link href={link.route} key={link.id}>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
