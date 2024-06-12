import React from "react";

export default function About() {
  return (
    <section className=" dark:text-neutral-100 dark:bg-gray-800">   
      <div className="my-5 pb-5 md:pt-2 md:pb-0">
        <h1 className="text-center text-4xl font-bold mb-4 text-amber500">
          About Us
          <hr className="w-6 h-1 mx-auto m-4 bg-sky-300 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-5 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 p-4 md:space-y-0 md:space-x-10">
        <div className=" md:w-1/2 text-xs">
          <p>
            We are a proudly South African company, committed to empowering
            local businesses and driving economic progress. Our mission is to
            provide cutting-edge IT solutions, support, and services that help
            our clients succeed and thrive in an ever-changing technology
            landscape.
          </p>
          </div>
          <div className="md:w-1/2 text-xs ">
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
      </div>
    </section>
  );
}
