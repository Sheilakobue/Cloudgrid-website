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
    <footer className="bg-blue50 w-full shadow text-blue950 py-2 mr-1 md:mr-1 text-xs md:text-sm dark:bg-stone-700 dark:border-b dark:border-stone-400 ">
      
      <div className="container mx-auto px-4 dark:text-neutral-100">
        <hr className="boder-t border-sky-300 mb-6" />
        <div className="flex flex-wrap justify-between items-top">
          {/* Quick Links */}
          <div className="w-full md:w-auto mb-2 md:mb-0 ">
           
            <ul className="text-blue950 text-xs md:text-sm flex flex-wrap items-center dark:text-neutral-100">
             
              <li className="mr-4 mb-2">
               
                <Link
                  href="/"
                  className="hover:text-amber-500 flex items-center"
                >
                  <FaHome className="mr-1 md:mr-2 text-xs md:text-sm" />{" "}
                  <span className="hidden md:inline">Home</span>{" "}
                
                </Link>
              </li>
              <li className="mr-4 mb-2">
               
                <Link
                  href="/about"
                  className="hover:text-amber-500 flex items-center"
                >
                  <FaInfoCircle className="mr-1 md:mr-2 text-xs md:text-sm" />{" "}
                  <span className="hidden md:inline">About Us</span>{" "}
          
                </Link>
              </li>
              <li className="mr-4 mb-2">
                
                <Link
                  href="/solutions"
                  className="hover:text-amber-500 flex items-center"
                >
                  <FaCogs className="mr-1 md:mr-2 text-xs md:text-sm" />{" "}
                  <span className="hidden md:inline">Solutions</span>{" "}
                 
                </Link>
              </li>
              <li className="mb-2">
              
                <Link
                  href="/contact"
                  className="hover:text-amber-500 flex items-center"
                >
                  <FaEnvelope className="mr-1 md:mr-2 text-xs md:text-sm" />{" "}
                  <span className="hidden md:inline">Contact</span>{" "}
                 
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4">
            <h2 className="text-amber-500 text-s font-bold mb-2">
              We are here
            </h2>
            <div className="flex items-center mb-1">
              
              <FaMapMarkerAlt className="mr-2" />
              <p className="text-blue950 text-xs md:text-xs  dark:text-neutral-100">
                2 Foreman Road, Spartan ext 3, Kempton Park, South Africa
              </p>
            </div>
            <div className="flex items-center mb-1">
              
              <FaEnvelope className="mr-2" />
              <p className="text-blue950 text-xs md:text-xs  dark:text-neutral-100">
                support@cloudgrid.co.za
              </p>
            </div>
            <div className="flex items-center mb-1">
              
              <FaPhone className="mr-2" />
              <p className="text-blue950 text-xs md:text-xs  dark:text-neutral-100">
                (011) 392 8744
              </p>
            </div>
            <div className="flex items-center mb-1">
              
              <FaMobileAlt className="mr-2" />
              <p className="text-blue950 text-xs md:text-xs  dark:text-neutral-100">
                (+27)82 445 2706
              </p>
            </div>
            <div className="flex items-center mb-1">
              
              <FaWhatsapp className="mr-2" />
              <p className="text-blue950 text-xs md:text-xs  dark:text-neutral-100">
                (+27)83 216 7285
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center text-sky-300 text-xs md:text-base">
          
          &copy; {new Date().getFullYear()} IT Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
