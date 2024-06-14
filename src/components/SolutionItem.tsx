import React from "react";
import Link from "next/link";
import Image from "next/image";

const SolutionItem = ({ href, imageSrc, imageAlt, title, description }) => (
  <div className="relative flex flex-col items-center text-center bg-blue950 border-0 bg-opacity-50 dark:bg-gray-900 p-4 rounded-lg shadow-md">
    <Link href={href} passHref legacyBehavior>
      <a className="relative mb-4 cursor-pointer">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={200}
          height={180}
          className="w-full h-full object-cover cursor-pointer"
           loading="lazy"
        />
      </a>
    </Link>
    <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-l hover:opacity-75">
          {title}
        </span>
    <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
  </div>
);

export default SolutionItem;
