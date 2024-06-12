"use client";
import React from 'react'

export default function ContactForm() {
    
  async function handleSubmit(event:any){
    event.preventDefault();
    const data={
      firstName:String(event.target.name.value),
      lastName:String(event.target.lastName.value),
      companyName:String(event.target.companyName.value),
      email:String(event.target.email.value),
      phone:String(event.target.phone.value),
      message:String(event.target.message.value),
    }
    const response=await fetch('/api/contact',{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data),
    })

    if(response.ok){
      alert("Message sent successfully!");
      console.log("Message sent successfully")
    }
    if(!response.ok){
      alert("Message not sent!");
      console.log("Error sending message")
    }
  }
  return (
   
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col my-4">
          <label htmlFor="firstName">
            First Name <span className="text-xs">(required)</span>
          </label>
          <input
            className="p-0 bg-blue-200 border border-blue-400"
            type="text"
            minLength={3}
            maxLength={150}
            required
            autoComplete="off"
            id="firstName"
            name="firstName"
          />
        </div>

        <div className="w-full flex flex-col my-4">
          <label htmlFor="lastName">
            Last Name <span className="text-xs">(required)</span>
          </label>
          <input
            className="p-0 bg-blue-200 border border-blue-400"
            type="text"
            minLength={3}
            maxLength={150}
            required
            id="lastName"
            name="lastName"
          />
        </div>

        <div className="w-full flex flex-col my-4">
          <label htmlFor="companyName">
            Company Name <span className="text-xs">(required)</span>
          </label>
          <input
            className="p-0 bg-blue-200 border border-blue-400"
            type="text"
            minLength={3}
            maxLength={150}
            required
            id="companyName"
            name="companyName"
          />
        </div>

        <div className="w-full flex flex-col my-4">
          <label  htmlFor="email">
            Email <span className="text-xs">(required)</span>
          </label>
          <input
            className="p-0 bg-blue-200 border border-blue-400"
            type="email"
            minLength={5}
            maxLength={150}
            required
            id="email"
            name="email"
          />
        </div>

        <div className="w-full flex flex-col my-4">
          <label htmlFor="phone">
            Phone <span className="text-xs">(required)</span>
          </label>
          <input
            className="p-0 bg-blue-200 border border-blue-400"
            type="tel"
            required
            minLength={10}
            maxLength={500}
            id="phone"
            name="phone"
          />
        </div>

        <div className="w-full flex flex-col my-4">
          <label htmlFor="message">
            How Can We Help? <span className="text-xs">(required)</span>
          </label>
          <textarea
            rows={4}
            id="message"
            name="message"
            className="w-full p-2 bg-blue-200 border border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="px-2 py-2 w-30 bg-amber-500 text-xs text-blue-200 mt-2 rounded-xl"
        >
          Send Message
        </button>
      </form>
    
  )
}
