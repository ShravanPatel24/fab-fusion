import Order from "@/utils/model/Order";
import connect from "../../../utils/connections/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const orders = await Order.find();
    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching orders" + error, {
      status: 500,
    });
  }
};
