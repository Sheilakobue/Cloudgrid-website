import React from 'react'


export default function ContactUs() {
  return (
    
    <form className="p-4 bg-white dark:bg-gray-800">
    
      <h1 className="text-center text-4xl font-bold mb-8 text-amber-500">
        Contact Us
        <hr className="w-6 h-1 mx-auto m-4 bg-sky-300 border-0 rounded"></hr>
      </h1>
    <input type="text" placeholder='First Name'/>
    <input type="text" placeholder='Last Name'/>
    <input type="text" placeholder='Company Name'/>
    <input type="text" placeholder='Email'/>
    <input type="text" placeholder='Phone'/>
    <textarea></textarea>
    </form>   
  )

}
