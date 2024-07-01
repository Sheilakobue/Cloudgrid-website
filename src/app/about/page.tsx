import React from "react";
import aboutPicture from "../../../public/aboutPicture.png";
import Image from "next/image";

/**
 * About component
 * Renders the About Us section with information about the company.
 * @returns {JSX.Element} The About component JSX
 */
export default function About(): JSX.Element {
  return (
    <section className="dark:text-neutral-100 dark:bg-gray-800">   
      <div className="my-5 pb-5 md:pt-2 md:pb-0">
        <p className="text-center text-4xl font-bold mb-4 text-amber-500">
          About Us
          <hr className="w-6 h-1 mx-auto m-4 bg-sky-300 border-0 rounded" />
        </p>
        <div className="flex flex-col space-y-5 md:text-base text-xs text-blue-950 dark:text-neutral-100 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 p-4 md:space-y-0 md:space-x-10">
          
          {/* First Text Section */}
          <div className="md:w-1/2">
            <p className="md:text-base text-xs">
              We are a proudly South African company, committed to empowering
              local businesses and driving economic progress. Our mission is to
              provide cutting-edge IT solutions, support, and services that help
              our clients succeed and thrive in an ever-changing technology
              landscape.
            </p>
          </div>
          
          {/* Second Text Section */}
          <div className="md:w-1/2">
            <p className="md:text-base text-xs">
              At CloudGrid, we prioritize your business needs, offering flexible
              support options, including onsite and remote assistance. We ensure
              transparency and affordability, providing competitive pricing,
              accurate feedback, and detailed reports. Our expertise includes
              thorough software audits and preventative maintenance, ensuring
              optimal system performance. With a proven track record, {"we're"} a
              trusted partner dedicated to helping your business thrive.
            </p>
          </div>   
        </div>
        
        {/* About Picture section */}
        <div className="md:mt-4 p-8 flex justify-center">
          <Image
            src={aboutPicture}
            alt="about"
            width={1000}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
