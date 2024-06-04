import React from "react";
import Hero from "../components/Hero";
import Link from "next/link";
import Image from "next/image";
import Picture4 from "../../public/Picture4.png";
import { HiArrowCircleDown } from "react-icons/hi";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="dark:text-neutral-100 text-blue-950 dark:bg-gray-800 flex flex-col text-center justify-center my-1 py-8 sm:py-10 md:flex-row md:space-x-4 md:py-30">
        {/* Text section */}
        <div className="md:mt-2 md:w-3/5">
          <h3 className="text-lg font-bold text-amber-500 mt-0 md:text-left">Who We Are</h3>
          <p className="text-xs mb-6 md:text-mt-2 md:text-left">
            Welcome to CloudGrid, a proud Level 1 B-BBEE contributor committed
            to delivering exceptional IT support services tailored to your
            business needs. As a registered Microsoft partner, we specialize in
            providing and supporting office software solutions ideal for small
            and medium-sized enterprises.
          </p>
        </div>
        {/* Image Button section */}
        <div className="md:mt-8 mt-6 md:w-3/5 relative top-50  flex items-center justify-center">
          <a href="/solutions" className="relative">
            <Image
              src={Picture4}
              alt="solutions"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-xs">
              solutions
            </span>
          </a>
        </div>
         {/* Arrow.section */}
        <div  className="flex flex-row justify-center md:mt-8 mt-6">
          <Link href="/about" passHref>
            <HiArrowCircleDown size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
}
