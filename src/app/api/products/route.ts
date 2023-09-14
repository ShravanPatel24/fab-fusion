import Product from "@/utils/model/Product";
import connect from "../../../../db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching products" + error, {
      status: 500,
    });
  }
};
