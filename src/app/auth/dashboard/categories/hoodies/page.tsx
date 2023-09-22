"use client";

import ProductLoader from "@/app/components/ProductLoader";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Posts {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  brand: string;
  color: string;
}

function Hoodies() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize as loading

  useEffect(() => {
    fetch("/api/products/hoodies")
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

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto py-8 flex-grow">
        <h1 className="text-3xl font-semibold mb-4">Hoodies Collection</h1>

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
                <button className="bg-blue-500 text-white rounded-full px-4 py-2 mt-2 hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hoodies;
