import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConn";
import Contact from "@/models/contact";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnect();

    await Contact.create(body);
    return NextResponse.json(
      {
        message: "Message Sent Successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
