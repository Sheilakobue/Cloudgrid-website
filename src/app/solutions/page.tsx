import React from "react";
import Link from "next/link";
import Image from "next/image";
import MicrosoftModernWork from "../../../public/MicrosoftModernWork.png";

export default function SolutionList() {
  return (
    <section className="p-4 bg-white dark:bg-gray-800">
      <h1 className="text-center text-4xl font-bold mb-8 text-amber-500">
        Our Solutions
        <hr className="w-6 h-1 mx-auto m-4 bg-sky-300 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/2">
           
          </div>
        </div>
      </div>
    </section>
  );
}
