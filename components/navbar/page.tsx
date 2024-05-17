"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import './page.css';

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
    <nav>
    <div className="container">
      
    <Link href={"#home"}>
          <Image 
            src="/public/favicon transp.png" 
            alt="Logo" 
            width={150} // Adjust the width as needed
            height={50} // Adjust the height as needed
          />
        </Link>

      <ul className="desktop-menu">
        {navLinks.map((link) => (
          <Link href={link.route} key={link.id}>
            <li>{link.name}</li>
          </Link>
        ))}
      </ul>
      <div className="mobile-menu-icon" onClick={handleOpenMobileMenu}>
        {openMobileMenu ? <MdClose size={24} /> : <FiMenu size={24} />}
      </div>
      {openMobileMenu && (
        <div className={`mobile-menu ${openMobileMenu ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <Link href={link.route} key={link.id}>
                <li onClick={handleOpenMobileMenu}>{link.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  </nav>
  );
}
