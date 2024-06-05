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
    <div className=" bg-blue950 bg-opacity-50 dark:bg-gray-800 w-full flex flex-col justify-around items-start p-2 ">
      <div className="container mx-auto px-2 text-neutral-800 dark:text-neutral-100">
        <hr className="border-t border-sky-300 dark:border-gray-600 mb-0" />

        <div className="flex flex-col md:flex-row justify-between mb-0">
          <div className="p-2 w-full md:w-1/2">
            <h4 className="text-blue950 dark:text-gray-100 font-bold text-sm pb-2">
              Quick<span className="text-amber500">Links</span>
            </h4>
            <ul className="flex flex-wrap gap-2 pb-1">
              <li>
                <Link href="/">
                  <FaHome className="text-xs text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <FaInfoCircle className="text-xs text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <FaCogs className="text-xs text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <FaEnvelope className="text-xs text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-0 w-full md:w-1/2">
          <h4 className="text-amber500 text-s pb-1 md:text-xs dark:text-neutral-100">Contacts</h4>
          <ul>
            <li className="text-blue950 dark:text-gray-100 text-md pb-1 text-xs md:inline md:text-xs flex items-center">
              <FaEnvelope className="mr-2" />
              support@cloudgrid.co.za
            </li>
            <li className="text-blue950 dark:text-gray-100 text-md pb-1 text-xs md:inline md:text-xs flex items-center">
              <FaPhone className="mr-2" />
              (011) 392 8744
            </li>
            <li className="text-blue950 dark:text-gray-100 text-md pb-1 text-xs md:inline md:text-xs flex items-center">
              <FaWhatsapp className="mr-2" />
              (+27)83 216 7285
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-0">
          <div className="p-0 w-full md:w-1/2">
            <h4 className="text-amber500 text-s pb-2 md:text-xs dark:text-neutral-100">We are here</h4>
            <ul>
              <li className="text-blue950 dark:text-gray-100 text-md pb-0 text-xs flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                2 Foreman Road, Spartan ext 3
              </li>
              <li className="text-blue950 dark:text-gray-100 text-md pb-0 text-xs">Kempton Park</li>
              <li className="text-blue950 dark:text-gray-100 text-md pb-0 text-xs">South Africa</li>
            </ul>
          </div>
        </div>
        <div className="mt-2 text-center text-sky-300 dark:text-gray-400 text-xs md:text-base w-full">
          &copy; {new Date().getFullYear()} CLOUDGRID. All rights reserved.
        </div>
      </div>
    </div>
  );
}
