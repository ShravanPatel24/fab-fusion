import Product from "@/utils/model/Product";
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
    const products = await Product.find({ category: "T-shirts" });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching products" + error, {
      status: 500,
    });
  }
};
