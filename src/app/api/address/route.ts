import connect from "@/utils/connections/db";
import AddressModel, { AddressData } from "@/utils/model/Address";
import { NextRequest, NextResponse } from "next/server";
import { useParams } from "next/navigation";

export async function POST(request) {
  try {
    const formData: AddressData = await request.json();
    await connect();
    await AddressModel.create(formData);
    return NextResponse.json({ message: "Address Added!" }, { status: 201 });
  } catch (error) {
    console.error("Error adding address:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connect();
    const address = await AddressModel.find();
    return new NextResponse(JSON.stringify(address), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching products" + error, {
      status: 500,
    });
  }
}
