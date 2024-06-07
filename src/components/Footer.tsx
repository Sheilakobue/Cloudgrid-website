import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl bg-blue950 border-0 bg-opacity-50 dark:bg-gray-800">
      <hr className="w-full h-0.5 mx-auto mt-4 border-0 border-sky-300 dark:border-gray-600 mb-0"></hr>
      <div className="mx-auto p-0 flex-col md:flex-row md:justify-between text-blue950 dark:text-gray-100 ">
        <div className="flex flex-row items-center space-x-2 mb-1 ">
          <h4 className="text-blue950 dark:text-gray-100 font-bold text-xs ">
            Quick<span className="text-amber500">Links</span>
          </h4>
          <Link href="/">
            <FaHome className="text-xs text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
          </Link>

          <Link href="/about">
            <FaInfoCircle className="text-xs text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
          </Link>

          <Link href="/solutions">
            <FaCogs className="text-xs text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
          </Link>

          <Link href="/contact">
            <FaEnvelope className="text-xs text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-5 items-stretch justify-center align-top md:flex-row md:p-4 md:space-y-0 md:space-x-5">
        <div className="md:w-1/2 ">
          <h4 className="text-amber500 text-s md:text-xs dark:text-neutral-100">Contacts</h4>
          <ul>
            <li className="text-blue950 dark:text-gray-100 text-md pb-1 text-xs md:text-xs flex items-center">
              <FaEnvelope className="mr-2" />
              support@cloudgrid.co.za
            </li>
            <li className="text-blue950 dark:text-gray-100 text-md pb-1 text-xs md:text-xs flex items-center">
              <FaPhone className="mr-2" />
              (011) 392 8744
            </li>
            <li className="text-blue950 dark:text-gray-100 text-md pb-1 text-xs md:text-xs flex items-center">
              <FaWhatsapp className="mr-2" />
              (+27)83 216 7285
            </li>
          </ul>
        </div>
      
          <div className="md:w-1/2 md:text-right">
            <h4 className="text-amber500 text-s pb-2 md:text-xs dark:text-neutral-100">
            <FaMapMarkerAlt className="mr-2 " />
              We are here</h4>
            <ul>
              <li className="text-blue950 dark:text-gray-100 text-md pb-0 text-xs">2 Foreman Road, Spartan ext 3</li>
              <li className="text-blue950 dark:text-gray-100 text-md pb-0 text-xs">Kempton Park</li>
              <li className="text-blue950 dark:text-gray-100 text-md pb-0 text-xs">South Africa</li>
            </ul>
          </div>
      
      </div>
      
      <div className=" text-sky-300 dark:text-gray-400 text-center text-xs">
        &copy; {new Date().getFullYear()} CLOUDGRID. All rights reserved.
      </div>
      
    </footer>
  );
}
