import React from "react";

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b py-2"
          >
            <div>
              <span className="text-lg font-semibold">{item.name}</span>
              <p className="text-gray-500">${item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
