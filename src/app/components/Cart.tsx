"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Cart = ({ cartItems }) => {
  const [cart, setCart] = useState(cartItems);

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleQuantityChange = (itemId: any, newQuantity: number) => {
    // Find the item in the cart and update its quantity
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto mt-10">
      <div>
        <h1 className="text-2xl font-semibold">Cart</h1>
        <Image
          src="https://img.freepik.com/premium-vector/quick-shopping-cart-icon_414847-513.jpg?w=2000"
          width={100}
          height={100}
          alt="cart"
        />
      </div>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="py-2">Product</th>
            <th className="py-2">Price</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="py-2 text-center">{item.productName}</td>
              <td className="py-2 text-center">₹{item.price}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  className="text-sm px-2"
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                  className="text-sm px-2"
                >
                  +
                </button>
              </td>
              <td className="py-2 text-center">
                ₹{item.price * item.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-12 flex justify-evenly m-16">
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-800  text-white py-2 px-4 rounded ">
            Return to Shop
          </button>
        </Link>
        <button className="bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded">
          Update Cart
        </button>
      </div>
      <div className="mb-32 p-4 bg-white rounded shadow-md w-64 self-end">
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Subtotal:</span>
          <span>₹{cartTotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Shipping:</span>
          <span>₹10</span> {/* You can replace with actual shipping cost */}
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Total:</span>
          <span>₹{cartTotal + 10}</span>
        </div>
        <button className="bg-red-500 hover:bg-red-800 text-white mt-4 py-2 px-4 rounded w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
