"use client";

import ProductLoader from "@/app/components/ProductLoader";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Product {
  _id: string;
  images: string[];
  name: string;
  description: string;
  price: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Fetch products from your API endpoint
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false); // Set loading to false on error as well
      });
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto max-custom">
        <div className="flex items-center">
          <p className="text-3xl mb-12 text-red-500 border-b-2 border-b-red-500 p-3 rounded-md">
            All Products
          </p>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
          </div>
        ) : (
          <>
            {products ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div key={product._id} className="relative">
                    <div className="bg-white p-4 shadow-md rounded-lg">
                      <div className="flex justify-center">
                        <Image
                          src={product.images[0]}
                          alt="products images"
                          width={300}
                          height={300}
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mt-4">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {product.description}
                      </p>
                      <Link
                        href={`/auth/dashboard/products/${product._id}`}
                        className="flex justify-center"
                      >
                        <button className="bg-blue-500 text-white rounded-2xl p-3 hover:bg-blue-700 mt-2">
                          View Product
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No Products Available</p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Products;
