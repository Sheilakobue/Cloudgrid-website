import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";
import './styles/globals.css';
// Define Poppins font configurations
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
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
      <body className={poppins.className}>
      <section className="relative w-full h-screen bg-blue-100 dark:bg-stone-900">
        <Providers>
          <Navbar/>
          {children}
          </Providers>
          </section>
      </body>
    </html>
  );
}
