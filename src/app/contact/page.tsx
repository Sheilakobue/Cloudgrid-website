import React from "react";
import ContactForm from "./ContactForm";
import bgContact from "../../../public/bgContact.jpg";

export default function ContactUs() {
  return (
    <div
      className="dark:bg-gray-800 dark:text-gray-100 min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgContact.src})` }}
    >
      <div className="text-center w-full max-w-screen-lg mx-auto p-4">
        <h1 className="text-4xl font-bold mb-0 text-amber-500">Contacts Us</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-300 border-0 rounded" />
        <h2 className="text-2xl font-bold mb-8 text-sky-300 dark:text-sky-300">
          Let's Chat.
        </h2>
      </div>

      <div className="flex flex-col space-y-5 items-stretch justify-center align-top md:flex-row md:text-left p-4 md:space-y-0 md:space-x-10 w-full max-w-screen-lg mx-auto">
        <div className="md:w-1/2 mx-auto text-sm max-w-2xl p-2 text-blue-200 bg-blue-950 bg-opacity-50 rounded-lg shadow-md">
          <ContactForm />
        </div>

        <div className="md:w-1/2 bg-blue-950 bg-opacity-50 rounded-lg shadow-md p-4">
          <h5 className="text-center text-lg font-bold mb-8 text-amber-500 dark:text-sky-300">
            Contact us for a personalized quote
          </h5>
          <p className="text-xs text-blue-200 ">
            Every business is unique, and your rate will depend on the specific needs of your business. To receive a personalized quote, please complete the form with your business details, and our team will get back to you promptly with a tailored rate.
          </p>
          <h5 className="text-center text-lg font-bold mb-8 text-amber-500 dark:text-sky-300">
            Book an appointment
          </h5>
          <p className="text-xs text-blue-200 ">
            Use the form below to tell us about your business inquiry, and we’ll call you back to schedule an appointment. Please be as detailed as possible, including the industry you need service for and any specific document requests. To help us best serve your inquiry, we recommend describing the issue you’re experiencing before outlining your desired outcome. Alternatively, you may email or call us to make an appointment. Our general response time is one business day.
          </p>
        </div>
      </div>
    </div>
  );
}
