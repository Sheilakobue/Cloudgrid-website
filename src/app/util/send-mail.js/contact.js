// import React, { useState } from "react";
// import {
//   Button,
//   Container,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Input,
//   Textarea,
//   useToast,
//   Text,
// } from "@chakra-ui/react";
// import { sendContactForm } from "../../../lib/api"; // Ensure this path is correct

// const initValues = {
//   fullName: "",
//   companyName: "",
//   email: "",
//   phone: "",
//   message: "",
// };

// const initState = { values: initValues, isLoading: false, error: "" };

// export function ContactForm() {
//   const toast = useToast();
//   const [state, setState] = useState(initState);
//   const [touched, setTouched] = useState({});

//   const { values, isLoading, error } = state;

//   const onBlur = ({ target }) =>
//     setTouched((prev) => ({ ...prev, [target.name]: true }));

//   const handleChange = ({ target }) =>
//     setState((prev) => ({
//       ...prev,
//       values: {
//         ...prev.values,
//         [target.name]: target.value,
//       },
//     }));

//   const onSubmit = async () => {
//     setState((prev) => ({
//       ...prev,
//       isLoading: true,
//     }));
//     try {
//       console.log("Submitting form with values:", values);
//       await sendContactForm(values);
//       setTouched({});
//       setState(initState);
//       toast({
//         title: "Message sent.",
//         status: "success",
//         duration: 2000,
//         position: "top",
//       });
//     } catch (error) {
//       setState((prev) => ({
//         ...prev,
//         isLoading: false,
//         error: error.message,
//       }));
//       toast({
//         title: "Failed to send message.",
//         description: error.message,
//         status: "error",
//         duration: 2000,
//         position: "top",
//       });
//     }
//   };

//   return (
//     <Container maxW="450px" mt={12}>
//       <FormControl isRequired isInvalid={touched.fullName && !values.fullName} mb={10}>
//         <FormLabel>Full Name</FormLabel>
//         <Input
//           type="text"
//           name="fullName"
//           minLength={5}
//           maxLength={150}
//           errorBorderColor="red.300"
//           value={values.fullName}
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>

//       <FormControl isRequired isInvalid={touched.companyName && !values.companyName} mb={10}>
//         <FormLabel>Company Name</FormLabel>
//         <Input
//           type="text"
//           minLength={5}
//           maxLength={150}
//           name="companyName"
//           errorBorderColor="red.300"
//           value={values.companyName}
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>

//       <FormControl isRequired isInvalid={touched.email && !values.email} mb={10}>
//         <FormLabel>Email</FormLabel>
//         <Input
//           type="email"
//           name="email"
//           minLength={5}
//           maxLength={150}
//           value={values.email}
//           errorBorderColor="red.300"
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>

//       <FormControl isRequired isInvalid={touched.phone && !values.phone} mb={10}>
//         <FormLabel>Phone</FormLabel>
//         <Input
//           type="tel"
//           name="phone"
//           value={values.phone}
//           errorBorderColor="red.300"
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>

//       <FormControl isRequired isInvalid={touched.message && !values.message} mb={10}>
//         <FormLabel>Message</FormLabel>
//         <Textarea
//           name="message"
//           minLength={10}
//           maxLength={500}
//           rows={4}
//           value={values.message}
//           errorBorderColor="red.300"
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>

//       {error && (
//         <Text color="red.500" mb={4}>
//           {error}
//         </Text>
//       )}

//       <Button
//         variant="outline"
//         colorScheme="blue"
//         isLoading={isLoading}
//         disabled={
//           !values.fullName ||
//           !values.companyName ||
//           !values.email ||
//           !values.phone ||
//           !values.message
//         }
//         onClick={onSubmit}
//       >
//         Submit
//       </Button>
//     </Container>
//   );
// }

// import { mailOptions, transporter } from "../../config/nodemailer";

// const CONTACT_MESSAGE_FIELDS = {
//   fullName: "Full Name",
//   companyName: "Company Name",
//   email: "Email",
//   phone: "Phone",
//   message: "Message",
// };

// const generateEmailContent = (data) => {
//   const stringData = Object.entries(data).reduce(
//     (str, [key, val]) =>
//       (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
//     ""
//   );
//   const htmlData = Object.entries(data).reduce((str, [key, val]) => {
//     return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
//   }, "");

//   return {
//     text: stringData,
//     html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
//   };
// };

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     const data = req.body;
//     if (!data || !data.fullName || !data.companyName || !data.email|| !data.phone ||!data.message) {
//       return res.status(400).send({ message: "Bad request" });
//     }

//     try {
//       await transporter.sendMail({
//         ...mailOptions,
//         ...generateEmailContent(data),
//         subject: data.subject,
//       });

//       return res.status(200).json({ success: true });
//     } catch (err) {
//       console.log(err);
//       return res.status(400).json({ message: err.message });
//     }
//   }
//   return res.status(400).json({ message: "Bad request" });
// };
// export default handler;

const nodemailer = require("nodemailer");

const password = process.env.PASSWORD;
const user = process.env.USER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: user,
    pass: password,
  },
});

export default async function main(data) {

  const { fullName, email, message, companyName, phone } = data
  const info = await transporter.sendMail({
    from: '"Cloud Grid"',
    to: "ditjoeneo03@gmail.com, neod@sedibelo.com, admin@mmsdynamic.co.za",
    subject: `New Inquiry from ${fullName} (${companyName})`,
    text: `You have received a new inquiry from ${fullName} (${companyName}).

      Message:
      ${message}

      Contact Details:
      Email: ${email}
      Phone: ${phone}`,
    html: ` 
      <h2 style="color: #333;">New Inquiry Received</h2>
      <p><strong>From:</strong> ${fullName} (${companyName})</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p><strong>Contact Details:</strong></p>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>
      `,
  });
}
