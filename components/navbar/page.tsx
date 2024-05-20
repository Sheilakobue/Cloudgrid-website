"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import './page.css';

const navLinks = [
  { id: 1, name: "Home", route: "/" },
  { id: 2, name: "About Us", route: "/about" },
  { id: 3, name: "Solutions", route: "/solutions" },
  { id: 4, name: "Contact", route: "/contact" },
];

export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav>
      <div className="container">
        <Link href="/">
          <Image 
            src="/logo.jpg" 
            alt="Logo" 
            width={300} 
            height={100} 
          />
        </Link>

        <ul className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.route}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-icon" onClick={handleOpenMobileMenu}>
          {openMobileMenu ? <MdClose size={24} /> : <FiMenu size={24} />}
        </div>

        {openMobileMenu && (
          <div className={`mobile-menu ${openMobileMenu ? 'open' : ''}`}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id} onClick={handleOpenMobileMenu}>
                  <Link href={link.route}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
