import type { Metadata } from "next";
import { Poppins,Roboto} from "next/font/google";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import './styles/globals.css';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

// Define metadata for the page
export const metadata: Metadata = {
  title: "CLOUDGRID",
  description:
    "Empowering businesses through cutting-edge technology solutions for streamlined operations and enhanced productivity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <section className="relative w-full h-screen bg-blue50 dark:bg-stone-900">
        <Providers>
          <Navbar/>
         
          {children}
          </Providers>
          <Footer/>
          </section>
      </body>
    </html>
  );
}
