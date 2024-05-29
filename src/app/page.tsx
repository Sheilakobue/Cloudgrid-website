import React from "react";
import Hero from "../components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className=' dark:text-neutral-100 text-blue950 '>
      <h3>Who We Are</h3>
      <p className="text-xs">Coming soon </p>
      <Link href="/solutions">
      <button className="text-xs px-1 py-1 bg-blue950 bg-opacity-50 text-white  hover:text-amber-500 transition duration-300 ease-in-out">Learn more</button>

      </Link>
      </div>
    </div>
  );
}
