import connect from "@/utils/connections/db";
import { NextResponse } from "next/server";
import Cart from "@/utils/model/Cart";
import { currentUser } from "@clerk/nextjs";

export const GET = async (request) => {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json("You are not logged in.");
  }
  try {
    await connect();
    const cart = await Cart.find();
    return new NextResponse(JSON.stringify(cart), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching orders" + error, {
      status: 500,
    });
  }
};
