// clientLayout.tsx
"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "../components/navbar/page";
import './globals.css';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <section className="relative w-full h-screen bg-blue-100 dark:bg-stone-900">
        <Navbar />
        {children}
      </section>
    </ThemeProvider>
  );
}
