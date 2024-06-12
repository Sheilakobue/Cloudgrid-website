"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      fullName: event.target.fullName.value,
      companyName: event.target.companyName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        console.log("Message sent successfully");
        event.target.reset();  // Reset the form
      } else {
        console.log("Error sending message");
        alert("Error sending message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Full Name Input */}
      <div className="w-full flex flex-col my-4">
        <label htmlFor="fullName">Full Names</label>
        <input
          className="p-0 text-black bg-blue-200 border border-blue-400"
          type="text"
          minLength={3}
          maxLength={150}
          required
          autoComplete="off"
          id="fullName"
          name="fullName"
        />
      </div>

      {/* Company Name Input */}
      <div className="w-full flex flex-col my-4">
        <label htmlFor="companyName">Company Name <span className="text-xs">(required)</span></label>
        <input
          className="p-0 text-black bg-blue-200 border border-blue-400"
          type="text"
          minLength={3}
          maxLength={150}
          required
          id="companyName"
          name="companyName"
        />
      </div>

      {/* Email Input */}
      <div className="w-full flex flex-col my-4">
        <label htmlFor="email">Email</label>
        <input
          className="p-0 text-black bg-blue-200 border border-blue-400"
          type="email"
          minLength={5}
          maxLength={150}
          required
          id="email"
          name="email"
        />
      </div>

      {/* Phone Input */}
      <div className="w-full flex flex-col my-4">
        <label htmlFor="phone">Phone</label>
        <input
          className="p-0 text-black bg-blue-200 border border-blue-400"
          type="tel"
          required
          minLength={10}
          maxLength={500}
          id="phone"
          name="phone"
        />
      </div>

      {/* Message Textarea */}
      <div className="w-full flex flex-col my-4">
        <label htmlFor="message">How Can We Help?</label>
        <textarea
          rows={4}
          required
          minLength={5}
          maxLength={500}
          id="message"
          name="message"
          className="w-full p-2 text-black bg-blue-200 border border-blue-400"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="px-2 py-2 w-30 bg-amber-500 text-xs text-blue-200 mt-2 rounded-xl"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
