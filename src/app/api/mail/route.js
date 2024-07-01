import main from "../../util/send-mail.js/contact"
import { NextResponse } from "next/server";

export async function POST(request){
  const data = await request.json();

  const res = main(data)

  return NextResponse.json({
    message: 'success',
    data
  })
}