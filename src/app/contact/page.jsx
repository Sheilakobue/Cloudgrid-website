import React from "react";
import ContactForm from "./ContactForm";
import bgContact from "../../../public/bgContact.jpg";

/**
 * ContactUs component
 * Renders the contact us page with a background image and contact form.
 * @returns {JSX.Element} The ContactUs component JSX
 */
export default function ContactUs() {
  return (
    <div
      className="dark:bg-gray-800 dark:text-gray-100 min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgContact.src})` }}
    >
      {/* Contact heading section */}
      <div className="text-center w-full max-w-screen-lg mx-auto p-4">
        <p className="text-4xl font-bold mb-0 text-amber-500">Contacts Us</p>
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-300 border-0 rounded" />
        <p className="text-2xl font-bold mb-8 text-sky-300 dark:text-sky-300">
          {"Let's Chat."}
        </p>
      </div>

      {/* Contact form and information section */}
      <div className="flex flex-col space-y-5 items-stretch justify-center align-top md:flex-row md:text-left p-4 md:space-y-0 md:space-x-10 w-full max-w-screen-lg mx-auto">
        {/* Contact form */}
        <div style={{ width: '100%'}} className="mx-auto text-sm max-w-2xl p-2 text-blue-200 bg-blue-950 bg-opacity-50 rounded-lg shadow-md">
          <ContactForm />
        </div>

        {/* Contact information */}
        <div style={{ width: '100%'}} className="bg-blue-950 bg-opacity-80 rounded-lg shadow-md p-4">
          {/* Personalized quote */}
          <p className="text-center text-lg font-bold mt-8 text-amber-500 ">
            Contact us for a personalized quote
          </p>
          <p className="text-sm text-blue-200">
            Every business is unique, and your rate will depend on the specific needs of your business. To receive a personalized quote, please complete the form with your business details, and our team will get back to you promptly with a tailored rate.
          </p>
          {/* Book an appointment */}
          <p className="text-center text-lg font-bold mt-8 text-amber-500 ">
            Book an appointment
          </p>
          <p className="text-sm text-blue-200">
            Use the form below to tell us about your business inquiry, and we’ll call you back to schedule an appointment. Please be as detailed as possible, including the industry you need service for and any specific document requests. To help us best serve your inquiry, we recommend describing the issue you’re experiencing before outlining your desired outcome. Alternatively, you may email or call us to make an appointment. Our general response time is one business day.
          </p>
        </div>
      </div>
    </div>
  );
}
