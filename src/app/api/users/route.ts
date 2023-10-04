import User from "@/utils/model/User";
import connect from "@/utils/connections/db";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

export const GET = async (request) => {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json("You are not logged in.");
  }
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching users" + error, { status: 500 });
  }
};
