import Image from "next/image";
import React from "react";
import { heroImage, logo } from "../../../public";

export default function Hero() {
  return (
    <div className="w-full h-[310px] flex items-center overflow-hidden relative">
      <div className="w-full h-full  m-auto flex justify-center items-center relative">
        <div className="object-cover">
          <Image src={heroImage} height="100" width="1400" alt="banner" />
        </div>
        <div className="absolute mt-[255px]">
          <Image src={logo} height="30" width="200" alt="Logo" />
        </div>
      </div>
    </div>
  );
}
