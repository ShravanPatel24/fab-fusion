import ProductCategory from "@/app/components/ProductCategory";
import ProductSection from "@/app/components/ProductSection";
import Services from "@/app/components/Services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <main>
      <ProductCategory title="Browse By Category" />
      <div className="flex justify-center">
        {" "}
        <hr className="border-gray-300 mt-8 w-3/4" />{" "}
      </div>
      <ProductSection title="Featured Product" />
      <div className="flex justify-center">
        {" "}
        <hr className="border-gray-300 mt-8 w-3/4" />{" "}
      </div>
      <Services />
    </main>
  );
};

export default Dashboard;
