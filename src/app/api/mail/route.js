import main from "../../util/send-mail.js/contact"
import { NextResponse } from "next/server";

// export default async function POST(request) {

//   // if (req.method === 'POST') {

//   //   const { username, email, password, image, verificationCode } = req.body

//   //   try {
//   //     await signUp(username, email, password, image, verificationCode, res )
//   //   } catch (error) {
//   //     res.status(500).json({ message: error || 'failed attempt!'})
//   //   }
//   // }

//   const data = await request.json()
//   const res = main()
//   return NextResponse.json({
//     res
//   })
// }

export async function POST(request){
  const data = await request.json();

  // const { fullname, clientEmail, message, company, phone } = data;

  const res = main(data)

  return NextResponse.json({
    message: 'success',
    data
  })
}