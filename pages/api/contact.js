import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { fullName, companyName, email, phone, message } = req.body;

  const user = process.env.EMAIL_USER; // Use descriptive environment variable names
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return res.status(500).json({ message: 'Email credentials not provided' });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.mmsdynamic.co.za",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "admin@mmsdynamic.co.za",
      replyTo: email,
      subject: `Contact form submission from ${fullName}`,
      html: `
        <p>Full Name: ${fullName}</p>
        <p>Company Name: ${companyName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent:", mail.messageId);
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Could not send the email. Your message was not sent." });
  }
}
