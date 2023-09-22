import React from "react";
import Cart from "../../../components/Cart";

const page = () => {
  const sampleCartItems = [
    {
      id: 1,
      productName: "Product 1",
      price: 200,
      quantity: 2,
    },
    {
      id: 2,
      productName: "Product 2",
      price: 300,
      quantity: 1,
    },
    // Add more items as needed
  ];

  return (
    <div>
      <Cart cartItems={sampleCartItems} />
    </div>
  );
};

export default page;
