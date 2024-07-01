import React from "react";
import Hero from "../components/Hero";
import Link from "next/link";
import Image from "next/image";
import Picture4 from "../../public/Picture4.png";
import { HiArrowCircleDown } from "react-icons/hi";

/**
 * Home component
 * Renders the home page with a hero section, an information section, and a link to solutions.
 * @returns {JSX.Element} The Home component JSX
 */
export default function Home(): JSX.Element {
  return (
    <div>
      {/* Hero section */}
      <Hero />
      <div className="dark:text-neutral-100 text-blue-950 dark:bg-gray-800 flex flex-col space-y-10 place-items-stretch justify-center align-top md:flex-row md:text-left md:p-4 p-4 text-center md:space-y-0 md:space-x-10">
        
        {/* Text section */}
        <div className="md:mt-0 md:w-1/2">
          <p className="text-lg font-bold text-amber-500 mt-0 md:text-left text-bold">Who We Are</p>
          <p className="mb-6 mt-4 md:mt-4 md:text-left">
            Welcome to CloudGrid, a proud Level 1 B-BBEE contributor committed
            to delivering exceptional IT support services tailored to your
            business needs. As a registered Microsoft partner, we specialize in
            providing and supporting office software solutions ideal for small
            and medium-sized enterprises.
          </p>

          {/* Arrow section */}
          <div className="flex flex-row justify-center md:mt-8 mt-2 cursor-pointer hover:text-amber-500">
            <Link href="/about">
              <HiArrowCircleDown size={35} className="animate-bounce" />
            </Link>
          </div>
        </div>
        
        {/* Image Button section */}
        <div className="md:mt-0 pb-10 mt-4 md:w-1/2 relative flex items-center justify-center">
          <Link href="/solutions">
            <div className="relative cursor-pointer">
              <Image
                src={Picture4}
                alt="solutions"
                width={200}
                height={100}
                className="w-full h-full object-cover"
              />
              <span className="absolute text-xs top-2 left-0 w-full h-full flex items-center justify-center text-white font-bold hover:text-amber-500">
                Solutions
              </span>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
}
