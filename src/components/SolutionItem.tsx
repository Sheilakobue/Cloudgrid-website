import React from "react";
import Link from "next/link"; // Importing Link component from Next.js for client-side navigation
import Image from "next/image"; // Importing Image component from Next.js for optimized image handling

// SolutionItem component definition, receives props as destructured parameters
const SolutionItem = ({ href, imageSrc, imageAlt, title, description }) => (
  <div className="relative flex flex-col items-center text-center bg-blue-100 border-0 bg-opacity-50 dark:bg-gray-900 p-4 rounded-lg shadow-md p-8">
    
    {/* Container for the image */}
    <div className="relative mb-4">
      {/* Next.js Image component for optimized image loading */}
      <Image
        src={imageSrc} // Image source URL
        alt={imageAlt} // Alternative text for accessibility
        width={180} // Fixed width of the image
        height={150} // Fixed height of the image
        className="w-full h-full object-cover" // Styling for the image to cover its container
        loading="lazy" // Lazy loading the image for improved performance
      />
    </div>

    {/* Container for the title */}

    <p className="text-sm text-blue-950 dark:text-gray-300 mt-2 mb-10">
      {description}{" "} 
      <Link href={href} passHref>
        <span className="text-blue-800 hover:text-amber-300 text-xs">
          Learn More... 
        </span>
      </Link>
    </p>

    <span className="bg-blue950 text-white font-bold text-lg p-2 rounded-lg cursor-pointer hover:text-orange-200">
      {title} 
    </span>
  </div>
);

export default SolutionItem; // Exporting SolutionItem component as default
