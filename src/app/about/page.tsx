import React from 'react'

export default function About() {
  return (
    <section className="relative w-full h-screen">
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-blue950  dark:text-neutral-100 dark:bg-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber500">About Us</h1>
      <p className="text-xs mb-4">
            We are a proudly South African company, committed to empowering local businesses and driving economic progress. Our mission is to provide cutting-edge IT solutions, support, and services that help our clients succeed and thrive in an ever-changing technology landscape.
          </p>
          <p className="text-xs mb-4">
            At CloudGrid, we prioritize your business needs, offering flexible support options, including onsite and remote assistance. We ensure transparency and affordability, providing competitive pricing, accurate feedback, and detailed reports. Our expertise includes thorough software audits and preventative maintenance, ensuring optimal system performance. With a proven track record, we're a trusted partner dedicated to helping your business thrive.
          </p>
      </div>
      </section>
    
  )
}
