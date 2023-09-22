// pages/products/id/index.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon from a library like react-icons
import ProductLoader from "@/app/components/ProductLoader";

interface ProductDetailsType {
  name: string;
  description: string;
  price: number;
  images: string[];
}

const ProductDetails = ({ params }) => {
  const [productDetails, setProductDetails] =
    useState<ProductDetailsType | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const result = await fetch(`/api/products/id?id=${params.id}`);
      const productData = await result.json();
      setProductDetails(productData);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductDetails();
  }, [params.id]);

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
          {productDetails ? (
            <div className="w-full max-w-md p-4 bg-white rounded shadow-lg">
              <div className="mb-4">
                {/* Render product images */}
                {productDetails.images &&
                Array.isArray(productDetails.images) ? (
                  <div className="flex justify-center">
                    {productDetails.images.map((imageUrl, index) => (
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
              <h2 className="text-xl font-semibold mb-2">
                {productDetails.name}
              </h2>
              <p className="text-gray-700 mb-2">{productDetails.description}</p>
              <p className="text-blue-600 font-semibold">
                Price: ₹{productDetails.price}
              </p>
              <button
                className="bg-blue-500 text-white rounded-full px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300 flex items-center"
                onClick={() => {
                  // Handle adding to cart here
                }}
              >
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
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
