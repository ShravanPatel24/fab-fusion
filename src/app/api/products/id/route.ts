// pages/api/products/id/index.ts

import Product from "@/utils/model/Product";
import connect from "@/utils/connections/db";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  // Get the product ID from the params
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  

  

  try {
    // Connect to the database
    await connect();

    // Find the product by ID
    const product = await Product.findOne({ _id: id });

    // Return a 404 error if the product does not exist
    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    // Return the product as JSON
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    // Return a 500 error if something goes wrong
    return new NextResponse("Error in fetching product" + error, {
      status: 500,
    });
  }
};
