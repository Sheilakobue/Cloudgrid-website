"use client"
import Image from "next/image";
import React from "react";
import { heroImage, logo } from "../../../public";
import { motion } from "framer-motion"

export default function Hero() {
  const variants = {
    hidden: { x: 0, y: 70, opacity: 0.25 },
    visible: { x: 0, y: 10, opacity: 1, transition: { delay: 0.05 }
    },
  };
  return (
    <div className="w-full h-[300px] flex items-center overflow-hidden relative">
      <div className="w-full h-full  m-auto flex justify-center items-center relative">
        <div className="object-cover">
          <Image 
              src={heroImage} 
              height="100" 
              width="1400" 
              alt="banner"
              className="absolute top-0 left-0"
              />
              
        </div>
        <div className="absolute mt-[194px]">
          <motion.div
          initial= 'hidden'
          animate= 'visible'
          variants={variants}
          >
          <Image 
              src={logo} 
              height="30" 
              width="200" 
              alt="Logo" 
              />
              </motion.div>
        </div>
      </div>
    </div>
  );
}
