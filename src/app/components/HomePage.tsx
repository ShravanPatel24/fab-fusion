import React from "react";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <main>
      <Header />
      <section className="mt-16">
        <div className="container mx-auto max-custom">
          <div className="flex items-center">
            <Image
              src="/Rectangle.png"
              width={28}
              height={40}
              alt="rectangle"
            />
            <p className="text-base text-red-500 ml-4">Categories</p>
          </div>
          <div className="mt-2 font-semibold text-4xl">Browse By Category</div>
        </div>
      </section>
      <section id="featured-products" className="bg-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Category 1 */}
            <div className="relative h-64">
              <Image
                src="https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="T-Shirts"
                layout="fill" // This sets the image to cover the entire container
                objectFit="cover" // This ensures the image covers the container without distortion
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-gray-800 text-white">
                <h3 className="text-xl font-semibold mt-4">T-Shirts</h3>
                <p className="text-gray-100 text-center">
                  Explore our collection of custom t-shirts.
                </p>
                <Link
                  href="/categories/t-shirts"
                  className="text-blue-500 hover:underline mt-2"
                >
                  View All T-Shirts
                </Link>
              </div>
            </div>

            {/* Featured Category 2 */}
            <div className="relative h-64">
              <Image
                src="https://plus.unsplash.com/premium_photo-1673356302169-574db56b52cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="T-Shirts"
                layout="fill" // This sets the image to cover the entire container
                objectFit="cover" // This ensures the image covers the container without distortion
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-gray-800 text-white">
                <h3 className="text-xl font-semibold mt-4">Hoodies</h3>
                <p className="text-gray-100 text-center">
                  Stay warm and stylish with our custom hoodies.
                </p>
                <Link
                  href="/categories/hoodies"
                  className="text-blue-500 hover:underline mt-2"
                >
                  View All Hoodies
                </Link>
              </div>
            </div>
            {/* Featured Category 3 */}
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="T-Shirts"
                layout="fill" // This sets the image to cover the entire container
                objectFit="cover" // This ensures the image covers the container without distortion
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-gray-800 text-white">
                <h3 className="text-xl font-semibold mt-4">Jackets</h3>
                <p className="text-gray-100 text-center">
                  Discover our collection of custom jackets for all seasons.
                </p>
                <Link
                  href="/categories/jackets"
                  className="text-blue-500 hover:underline mt-2"
                >
                  View All Jackets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center space-x-24 mt-32">
        <div className="relative text-center">
          <div className="relative flex justify-center">
            <Image
              src="/grp.png"
              width={80}
              height={80}
              alt="Circle"
              className="z-10"
            />
            <Image
              src="/id.png"
              width={40}
              height={40}
              alt="Delivery truck"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            />
          </div>
          <p className="text-xl uppercase mt-6">Free and Fast Delivery</p>
          <p className="text-xs uppercase">
            free delivery for all orders over ₹500{" "}
          </p>
        </div>
        <div className="relative text-center">
          <div className="relative flex justify-center">
            <Image
              src="/grp.png"
              width={80}
              height={80}
              alt="Circle"
              className="z-10"
            />
            <Image
              src="/ics.png"
              width={40}
              height={40}
              alt="Customer Support"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            />
          </div>
          <p className="text-xl uppercase mt-6">24/7 customer service</p>
          <p className="text-xs uppercase">friendly 24/7 customer support</p>
        </div>
        <div className="relative text-center">
          <div className="relative flex justify-center">
            <Image
              src="/grp.png"
              width={80}
              height={80}
              alt="Circle"
              className="z-10"
            />
            <Image
              src="/st.png"
              width={40}
              height={40}
              alt="Shield"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            />
          </div>
          <p className="text-xl uppercase mt-6">money back guarantee</p>
          <p className="text-xs uppercase mb-32">we return money 30 days</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
