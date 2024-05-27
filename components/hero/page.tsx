import Image from "next/image";
import React from "react";
import { heroImage, logo } from "../../public";

export default function Hero() {
  return (
    <div className="w-full h-[450px] flex items-center">
      <div className="h-full md:max-w-[1024px] max-w-[600px] m-auto flex justify-center items-center relative">
        <div className="object-cover">
          <Image 
              src={heroImage} 
              height="100" 
              width="1400" 
              alt="banner" 
              />
        </div>
        <div className="absolute mt-[322px]">
          <Image 
              src={logo} 
              height="50" 
              width="400" 
              alt="Logo" 
              />
        </div>
      </div>
    </div>
  );
}
