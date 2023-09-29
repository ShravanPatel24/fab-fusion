"use client";

import React from "react";
import Cart from "@/app/components/Cart";
import { useCart } from "@/app/CartContext";

const Page = () => {
  const { cart } = useCart(); // Get cart items from context

  console.log("cart", cart);

  return (
    <div>
      <Cart cartItems={cart} />
    </div>
  );
};

export default Page;
