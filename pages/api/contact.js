import React from 'react'
import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
    const { firstName, lastName, companyName, email, phone, message} = req.body

    const data= { firstName, lastName, companyName, email, phone, message

    } 
    const transporter = nodemailer.createTransport({
        host: "smtp.mmsdynamic.co.za",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "admin@mmsdynamic.co.za",
          pass: "1707@Kobue!",
        },
      });
  return res.status(200).json({message:"success"})

}
