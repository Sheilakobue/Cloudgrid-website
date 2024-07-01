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
    <footer className="w-full bg-blue-200  dark:bg-gray-800">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl bg-blue-200 dark:bg-gray-800">
        <hr className="w-6 h-1 mx-auto m-4 bg-sky-300 border-0 rounded" />
        <div className="mx-auto p-0 flex-col md:flex-row md:justify-between text-blue950 dark:text-gray-100 ">
          <div className="flex flex-row items-center space-x-2 mb-1 ">
            <h4 className="text-blue950 dark:text-gray-100 font-bold">
              Quick<span className="text-amber500">Links</span>
            </h4>
            <Link href="/">
              <FaHome className=" text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
            </Link>

            <Link href="/about">
              <FaInfoCircle className=" text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
            </Link>

            <Link href="/solutions">
              <FaCogs className=" text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
            </Link>

            <Link href="/contact">
              <FaEnvelope className=" text-blue950 dark:text-gray-100 cursor-pointer hover:text-amber500" />
            </Link>
          </div>
        </div>

        <div className="flex flex-row justify-between flex-wrap">
          <div className="md:w-1/2 ">
            <p className="text-amber500 dark:text-neutral-100 text-bold text-md">
              Contacts
            </p>
            <ul>
              <li className="text-blue950 dark:text-gray-100 pb-1 flex items-center">
                <FaEnvelope className="mr-2" />
                support@cloudgrid.co.za
              </li>
              <li className="text-blue950 dark:text-gray-100 text-md pb-1 flex items-center">
                <FaPhone className="mr-2" />
                (011) 392 8744
              </li>
              <li className="text-blue950 dark:text-gray-100 text-md pb-1 flex items-center">
                <FaWhatsapp className="mr-2" />
                (+27)83 216 7285
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <div className="flex justify-end">
              <FaMapMarkerAlt className="mr-2 " />
            </div>
            <p className="text-amber500 pb-2 dark:text-neutral-100 font-bold text-lg">
              We are here
            </p>
            <ul>
              <li className="text-blue950 dark:text-gray-100 pb-0 ">
                2 Foreman Road, Spartan ext 3
              </li>
              <li className="text-blue950 dark:text-gray-100 pb-0 ">
                Kempton Park
              </li>
              <li className="text-blue950 dark:text-gray-100 pb-0 ">
                South Africa
              </li>
            </ul>
          </div>
        </div>

        <div className=" dark:text-gray-400 text-center ">
          &copy; {new Date().getFullYear()} CLOUDGRID. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
