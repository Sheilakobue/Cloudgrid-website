import React from "react";

export default function About() {
  return (
    <section className="relative w-full h-screen dark:text-neutral-100 dark:bg-gray-800">
      <div className="my-4 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center text-4xl font-bold mb-4 text-amber500">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md: text-left md:p-4  md:space-y-0 md:space-x-10"></div>
        <div className="text-xs mb-4 md:w-1/2">
          <p>
            We are a proudly South African company, committed to empowering
            local businesses and driving economic progress. Our mission is to
            provide cutting-edge IT solutions, support, and services that help
            our clients succeed and thrive in an ever-changing technology
            landscape.
          </p>
          </div>
          <div className="text-xs mb-4 md:w-1/2">
          <p>
            At CloudGrid, we prioritize your business needs, offering flexible
            support options, including onsite and remote assistance. We ensure
            transparency and affordability, providing competitive pricing,
            accurate feedback, and detailed reports. Our expertise includes
            thorough software audits and preventative maintenance, ensuring
            optimal system performance. With a proven track record, we're a
            trusted partner dedicated to helping your business thrive.
          </p>
          </div>
      </div>
    </section>
  );
}
