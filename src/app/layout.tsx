import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientLayout from "./clientLayout";
import './globals.css';

// Define Poppins font configurations
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// Define metadata for the page
export const metadata: Metadata = {
  title: "CLOUDGRID",
  description: "Empowering businesses through cutting-edge technology solutions for streamlined operations and enhanced productivity",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
