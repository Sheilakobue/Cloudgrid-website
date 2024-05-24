/**
 * This page serves as the root layout for client-side rendering.
 * It imports the necessary components and sets up metadata.
 */

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientLayout from "./clientLayout"; // Import the client-side layout
import './globals.css'

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

/**
 * RootLayout function component
 * @param children ReactNode - The children elements to be rendered within the layout
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Render the client-side layout component */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
