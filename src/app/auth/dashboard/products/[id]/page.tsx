// pages/products/id/index.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import ProductLoader from "@/app/components/ProductLoader";
import { CartItem, useCart } from "@/app/CartContext";

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

const ProductDetails = ({ params }) => {
  const [posts, setPosts] = useState<Posts | null>(null);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState<{
    [productId: string]: boolean;
  }>({});

  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const result = await fetch(`/api/products/id?id=${params.id}`);
      const productData = await result.json();
      setPosts(productData);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params.id]);

  const handleAddToCart = (item: Posts) => {
    // Create a copy of the addedToCart state to avoid directly mutating it
    const updatedAddedToCart = { ...addedToCart };

    // Mark the product as added to the cart
    updatedAddedToCart[item._id] = true;

    // Update the state
    setAddedToCart(updatedAddedToCart);

    const productToAdd: CartItem = {
      id: item._id,
      productName: item.productName,
      price: item.price,
      quantity: 1,
      user: "",
      cartItems: [],
      totalPrice: 0,
      cartStatus: "",
      brand: item.brand,
    };

    addToCart(productToAdd);
  };

  return (
    <div className="container mx-auto p-4 flex items-center justify-center h-screen">
      {loading ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            <ProductLoader />
          </h1>
        </div>
      ) : (
        <>
          {posts ? (
            <div className="w-full max-w-md p-4 bg-white rounded shadow-lg">
              <div className="mb-4">
                {/* Render product images */}
                {posts.images && Array.isArray(posts.images) ? (
                  <div className="flex justify-center">
                    {posts.images.map((imageUrl, index) => (
                      <div
                        key={index}
                        className="w-32 h-42 p-1 border rounded-lg m-2"
                      >
                        <Image
                          src={imageUrl}
                          width={120}
                          height={120}
                          alt={`Product Image ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No images available</p>
                )}
              </div>
              <h2 className="text-xl font-semibold mb-2">{posts.name}</h2>
              <p className="text-gray-700 mb-2">{posts.description}</p>
              <p className="text-blue-600 font-semibold">
                Price: ₹{posts.price}
              </p>
              <div className="flex flex-col sm:flex-row items-center">
                {addedToCart[posts._id] ? (
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
                    onClick={() => handleAddToCart(posts)}
                  >
                    <MdShoppingCart className="text-xl mr-2" /> Add to Cart
                  </button>
                )}
              </div>

              <Link
                href="/auth/dashboard/"
                className="block text-blue-500 hover:text-blue-600 mt-4"
              >
                Back to Products
              </Link>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-semibold">No products found</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
