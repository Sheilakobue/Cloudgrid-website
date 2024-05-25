import Image from "next/image";
import React from "react";
import { heroImage } from "../../public";

export default function Hero() {
  return (
    <div className="w-full h-[600px] flex items-center">
      <div className="h-full md:max-w-[1024px] max-w-[600px] m-auto flex justify-center items-center">
        <div className="object-cover">
          <Image 
          src={heroImage} 
          height="100" 
          width="1400" 
          alt="banner" />
        </div>
      </div>
    </div>
  );
}
