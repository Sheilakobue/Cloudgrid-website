"use client";
import Image from "next/image";
import React from "react";
import { heroImage, logo } from "../../../public";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const variants = {
    hidden: { x: 0, y: 70, opacity: 0.25 },
    visible: {
      x: 0, y: 10, opacity: 1, transition: { delay: 0.05 }
    },
  };

  return (
    <div className="w-full h-[350px] flex items-center overflow-hidden relative">
      <div className="w-full h-full m-auto flex justify-center items-center relative">
        <div className="w-full h-full relative">
          <Image
            src={heroImage}
            alt="banner"
            className="absolute top-0 left-0"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <TypeAnimation
              sequence={[
                'Empowering businesses through cutting-edge technology solutions for streamlined operations and enhanced productivity',
                1000,
              ]}
              wrapper="span"
              speed={20}
              className="text-blue-900 text-sm sm:text-lg"
              repeat={Infinity}
            />
          </div>
        </div>
       
        <div className="absolute mt-[130px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <Image
              src={logo}
              height={30}
              width={200}
              alt="Logo"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
