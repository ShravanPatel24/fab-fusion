"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductLoader from "./ProductLoader";

interface Product {
  _id: string;
  images: string[];
  name: string;
  description: string;
  price: number;
}

function ProductSection({ title }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize as loading

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
          <Image src="/Rectangle.png" width={28} height={40} alt="rectangle" />
          <p className="text-base text-red-500 ml-4">All Products</p>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="mt-2 font-semibold text-4xl mb-12">{title}</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product._id} className="relative h-64">
                <Image
                  src={product.images[0]}
                  alt="products images"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-gray-800 text-white">
                  <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                  <p className="text-gray-100 text-center">
                    {product.description}
                  </p>
                  <p className="text-blue-500 font-semibold mt-2">{`₹${product.price}`}</p>
                  <Link
                    href={`/auth/dashboard/products/${product._id}`}
                    className="text-blue-500 hover:underline mt-2"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductSection;
