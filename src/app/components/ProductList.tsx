import Image from "next/image";
import React, { useState } from "react";

function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <div className="flex justify-center items-center">
            {" "}
            <Image
              width={200}
              height={200}
              src={product.images[0]}
              alt={product.productName}
            />
          </div>
          <p className="text-lg font-semibold mt-2">{product.productName}</p>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
          {/* Style the "Add to Cart" button as a button */}
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white rounded-full px-4 py-2 mt-2 hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
