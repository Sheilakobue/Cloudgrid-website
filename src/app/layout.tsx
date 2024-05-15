import {useClient} from "use/client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./navbar/page";


useClient();

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cloudgrid",
  description:
    "Empowering businesses through cutting-edge technology solutions for streamlined operations and enhanced productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg+xml" href="/public/logo.jpg" />
     
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
