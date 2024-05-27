import Image from "next/image";
import Link from "next/link";
import React from "react";
import { heroImage, logo } from "../../public";

export default function Hero() {
  return (
    <div className="w-full h-[350px] flex items-center overflow-hidden">
      <div className="w-full h-full  m-auto flex justify-center items-center relative">
        <div className="object-cover">
          <Image 
              src={heroImage} 
              height="100" 
              width="1400" 
              alt="banner" 
              />
        </div>
        <div className="absolute mt-[245px]">
           {/* Logo link */}
        <Link href="/" className="flex items-center">
        <Image 
              src={logo} 
              height="30" 
              width="200" 
              alt="Logo" 
              />
        </Link>
          
        </div>
      </div>
    </div>
  );
}
