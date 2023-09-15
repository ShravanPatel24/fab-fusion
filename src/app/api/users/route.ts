import User from "@/utils/model/User";
import connect from "../../../utils/connections/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching users" + error, { status: 500 });
  }
};
