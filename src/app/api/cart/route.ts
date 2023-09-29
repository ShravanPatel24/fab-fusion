import connect from "@/utils/connections/db";
import { NextResponse } from "next/server";
import Cart from "@/utils/model/Cart";

export const GET = async (request) => {
  try {
    await connect();
    const cart = await Cart.find();
    return new NextResponse(JSON.stringify(cart), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching Cart" + error, {
      status: 500,
    });
  }
};
