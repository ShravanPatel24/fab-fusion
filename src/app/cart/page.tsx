"use client";

import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";

// Define the Product type based on your interface
interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  size: string;
  color: string;
  images: string[];
  stockQuantity: number;
  reviews: string[];
}

const CartPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products/hoodies")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-3xl mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-4">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
          <div className="md:w-1/2">
            <ProductList products={products} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
