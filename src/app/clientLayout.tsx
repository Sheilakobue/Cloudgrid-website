"use client"; // This directive indicates that this code should be run on the client side

import { ThemeProvider } from "@emotion/react";
import Navbar from "../../components/navbar/page"; // Adjust the import path as needed

export default function ClientLayout({ 
  children 
}:{ 
  children: React.ReactNode 
}) {
  
    return (
      <ThemeProvider theme={{}} enableSystem={true} attribute="class">
        <div>
          <Navbar />
          {children}
        </div>
      </ThemeProvider>
    );
  }

