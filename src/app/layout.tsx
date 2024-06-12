import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import './styles/globals.css';

// Load Roboto font with specified subsets and weights
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

// Define metadata for the page
export const metadata: Metadata = {
  title: "CLOUDGRID",
  description: "Empowering businesses through cutting-edge technology solutions for streamlined operations and enhanced productivity",
};

/**
 * Root layout component
 * @param {Object} props - Properties passed to the component
 * @param {React.ReactNode} props.children - Child nodes to be rendered within the layout
 * @returns {JSX.Element} - Root layout JSX element
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-blue-950 border-0 bg-opacity-50 text-neutral-800 dark:border-b dark:border-stone-400`}>
        <section className="relative w-full h-screen">
          <Providers>
            <Navbar />
            {children}
          </Providers>
          <Footer />
        </section>
      </body>
    </html>
  );
}
