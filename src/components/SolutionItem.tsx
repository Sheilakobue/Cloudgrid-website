import React from "react";
import Link from "next/link";
import Image from "next/image";

const SolutionItem = ({ href, imageSrc, imageAlt, title, description }) => (
  <div className="relative flex flex-col items-center text-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md">
    <Link href={href} passHref legacyBehavior>
      <a className="relative w-full h-48 mb-4 cursor-pointer">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={100}
          height={100}
          className="w-full h-full object-cover cursor-pointer"
          
          loading="lazy"
        />
        <span className="absolute flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-xl rounded-lg transition-opacity duration-300 hover:opacity-75">
          {title}
        </span>
      </a>
    </Link>
    <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
  </div>
);

export default SolutionItem;
