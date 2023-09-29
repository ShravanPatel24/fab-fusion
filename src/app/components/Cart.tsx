"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../CartContext";

const Cart = ({ cartItems }) => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    const itemSubtotal =
      item.price * (isNaN(item.quantity) ? 0 : item.quantity);
    return total + itemSubtotal;
  }, 0);

  const handleQuantityChange = (itemId: any, newQuantity: number) => {
    // Find the item in the cart and update its quantity
    updateCartItemQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    // Call removeFromCart to remove the item from the cart
    removeFromCart(itemId);
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
            <th className="py-2">Brand</th>
            <th className="py-2">Price</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="py-2 text-center">{item.productName}</td>
              <td className="py-2 text-center">{item.brand}</td>
              <td className="py-2 text-center">₹{item.price}</td>
              <td className="py-2 text-center">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    className="text-sm px-3 py-1 bg-blue-500 text-white rounded-l hover:bg-blue-600 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span className="px-3 py-1 bg-gray-200 text-sm font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    className="text-sm px-3 py-1 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="py-2 text-center">
                ₹{item.price * item.quantity}
              </td>
              <td className="py-2 text-center">
                <button
                  onClick={() => handleRemoveItem(item.id)} // Call handleRemoveItem to remove the item
                  className="text-red-500 hover:text-red-800"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="my-12" />
      <div className="mt-12 m-32 flex justify-center">
        <Link href="/">
          <button className="bg-red-500 hover:bg-red-800  text-white py-2 px-4 rounded ">
            Return to Shop
          </button>
        </Link>
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
        <button className="bg-green-500 hover:bg-green-800 text-white mt-4 py-2 px-4 rounded w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
