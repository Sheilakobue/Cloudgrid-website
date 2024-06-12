"use client";

import Image from "next/image";
import React from "react";
import { heroImage, logo } from "../../public";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

/**
 * Hero component
 * Renders the hero section with a background image, logo, and animated text.
 * @returns {JSX.Element} The Hero component JSX
 */
export default function Hero(): JSX.Element {
  // Variants for the animation of the logo using framer-motion
  const variants = {
    hidden: { x: 0, y: 70, opacity: 0.25 },
    visible: {
      x: 0,
      y: 10,
      opacity: 1,
      transition: { delay: 0.05 },
    },
  };

  return (
    <div className="w-full h-[250px] md:h-[350px] lg:h-[450px] flex items-center overflow-hidden relative">
      <div className="w-full h-full m-auto flex justify-center items-center relative">
        <div className="w-full h-full relative">
          {/* Background Image */}
          <Image
            src={heroImage}
            alt="banner"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-4">
            <div className="mb-4">
              {/* Logo with animation */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <Image src={logo} height={20} width={100} alt="Logo" />
              </motion.div>
            </div>
            {/* Animated text */}
            <TypeAnimation
              sequence={[
                "Empowering businesses through cutting-edge technology solutions for streamlined operations and enhanced productivity",
                1000,
              ]}
              wrapper="span"
              speed={20}
              className="text-blue-950 text-sm sm:text-sm"
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
