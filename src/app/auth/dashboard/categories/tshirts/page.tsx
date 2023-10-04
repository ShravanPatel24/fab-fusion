"use client";

import ProductLoader from "@/app/components/ProductLoader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CartItem, useCart } from "@/app/CartContext";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";
interface Posts {
  productName: string;
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  brand: string;
  color: string;
}

function Tshirts() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize as loading
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState<{
    [productId: string]: boolean;
  }>({});

  useEffect(() => {
    fetch("/api/products/tshirts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading to false on error as well
      });
  }, []);

  const handleAddToCart = (item: Posts) => {
    // Create a copy of the addedToCart state to avoid directly mutating it
    const updatedAddedToCart = { ...addedToCart };

    // Mark the product as added to the cart
    updatedAddedToCart[item._id] = true;

    // Update the state
    setAddedToCart(updatedAddedToCart);

    const productToAdd: CartItem = {
      id: item._id,
      brand: item.brand,
      productName: item.productName,
      price: item.price,
      quantity: 1,
      user: "",
      cartItems: [],
      totalPrice: 0,
      cartStatus: "",
    };

    addToCart(productToAdd);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto py-8 flex-grow ">
        <h1 className="text-3xl font-semibold mb-4">Tshirts Collection</h1>

        {/* Render loading state if isLoading is true */}
        {isLoading ? (
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-blue-500">
              <ProductLoader />
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {posts.map((post) => (
              <div key={post._id} className="bg-white p-4 rounded shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={post.images[0]}
                    alt={post.brand}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <p className="text-lg font-semibold mt-2">
                  {post.brand} - {post.color}
                </p>
                <p className="text-gray-600">{post.description}</p>
                <p className="text-blue-600 font-semibold mt-2">
                  ₹{post.price}
                </p>
                <div className="flex flex-col sm:flex-row items-center">
                  {addedToCart[post._id] ? (
                    <>
                      <button
                        disabled
                        className="bg-green-500 text-white rounded-full px-4 py-2 mt-2 sm:mt-0 sm:mr-4 opacity-70 cursor-not-allowed"
                      >
                        Added to Cart
                      </button>
                      <Link href="/auth/dashboard/cart">
                        <button className="bg-blue-500 text-white rounded-full px-4 py-2 mt-2 sm:mt-0 hover:bg-blue-600 transition duration-300 flex items-center">
                          <MdShoppingCart className="text-xl mr-2" /> Go to Cart
                        </button>
                      </Link>
                    </>
                  ) : (
                    <button
                      className="bg-blue-500 text-white rounded-full px-4 py-2 mt-4 sm:mt-0 sm:mr-4 hover:bg-blue-600 transition duration-300 flex items-center"
                      onClick={() => handleAddToCart(post)}
                    >
                      <MdShoppingCart className="text-xl mr-2" /> Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Tshirts;
