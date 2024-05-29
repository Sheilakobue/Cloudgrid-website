import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue50 shadow text-blue950 py-6 mr-1 md:mr-2 text-xs md:text-sm">
      {" "}
      {/* Reduced py-10 to py-6 */}
      <div className="container mx-auto px-4">
        <hr className="boder-t border-sky-300 mb-6" />
        <div className="flex flex-wrap justify-between items-top">
          {/* Quick Links */}
          <div className="w-full md:w-auto mb-2 md:mb-0">
            {" "}
            {/* Reduced mb-4 to mb-2 */}
            <ul className="text-blue950 text-xs md:text-sm flex flex-wrap items-center">
              {" "}
              {/* Reduced text-sm to text-xs */}
              <li className="mr-4 mb-2">
                {" "}
                {/* Adjusted margin here */}
                <Link
                  href="/"
                  className="hover:text-amber-500 flex items-center"
                >
                  <FaHome className="mr-1 md:mr-2 text-xs md:text-sm" />{" "}
                  <span className="hidden md:inline">Home</span>{" "}
                  {/* Reduced text-sm to text-xs */}
                </Link>
              </li>
              <li className="mr-4 mb-2">
                {" "}
                {/* Adjusted margin here */}
                <Link
                  href="/about"
                  className="hover:text-amber-500 flex items-center"
                >
                  <FaInfoCircle className="mr-1 md:mr-2 text-xs md:text-sm" />{" "}
                  <span className="hidden md:inline">About Us</span>{" "}
                  {/* Reduced text-sm to text-xs */}
                </Link>
              </li>
              <li className="mr-4 mb-2">
                {" "}
                {/* Adjusted margin here */}
                <Link
                  href="/solutions"
                  className="hover:text-amber-500 flex items-center"
                >
                  <FaCogs className="mr-1 md:mr-2 text-xs md:text-sm" />{" "}
                  <span className="hidden md:inline">Solutions</span>{" "}
                  {/* Reduced text-sm to text-xs */}
                </Link>
              </li>
              <li className="mb-2">
                {" "}
                {/* Removed unnecessary margin here */}
                <Link
                  href="/contact"
                  className="hover:text-amber-500 flex items-center"
                >
                  <FaEnvelope className="mr-1 md:mr-2 text-xs md:text-sm" />{" "}
                  <span className="hidden md:inline">Contact</span>{" "}
                  {/* Reduced text-sm to text-xs */}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4">
            <h2 className="text-amber-500 text-s font-bold mb-2">
              We are here
            </h2>{" "}
            {/* Reduced font size from text-base to text-s */}
            <div className="flex items-center mb-1">
              {" "}
              {/* Reduced margin here */}
              <FaMapMarkerAlt className="mr-2" />
              <p className="text-blue950 text-xs md:text-xs">
                2 Foreman Road, Spartan ext 3, Kempton Park, South Africa
              </p>{" "}
              {/* Reduced text-sm to text-xs */}
            </div>
            <div className="flex items-center mb-1">
              {" "}
              {/* Reduced margin here */}
              <FaEnvelope className="mr-2" />
              <p className="text-blue950 text-xs md:text-xs">
                support@cloudgrid.co.za
              </p>{" "}
              {/* Reduced text-sm to text-xs */}
            </div>
            <div className="flex items-center mb-1">
              {" "}
              {/* Reduced margin here */}
              <FaPhone className="mr-2" />
              <p className="text-blue950 text-xs md:text-xs">
                (011) 392 8744
              </p>{" "}
              {/* Reduced text-sm to text-xs */}
            </div>
            <div className="flex items-center mb-1">
              {" "}
              {/* Reduced margin here */}
              <FaMobileAlt className="mr-2" />
              <p className="text-blue950 text-xs md:text-xs">
                (+27)82 445 2706
              </p>{" "}
              {/* Reduced text-sm to text-xs */}
            </div>
            <div className="flex items-center mb-1">
              {" "}
              {/* Reduced margin here */}
              <FaWhatsapp className="mr-2" />
              <p className="text-blue950 text-xs md:text-xs">
                (+27)83 216 7285
              </p>{" "}
              {/* Reduced text-sm to text-xs */}
            </div>
          </div>
        </div>
        <div className="mt-2 text-center text-sky-300 text-xs md:text-base">
          {" "}
          {/* Reduced mt-10 to mt-6 and text-xs to text-xxs */}
          &copy; {new Date().getFullYear()} IT Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
