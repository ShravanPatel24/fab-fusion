import Image from "next/image";
import React from "react";
import Services from "../components/Services";

const AboutSection = () => {
  return (
    <div>
      <section className="bg-light py-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Fab Fusion is your destination for creating custom designs on
                your favorite products. We believe in the power of
                personalization and the joy it brings to people when they
                receive products that are uniquely their own.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our mission is to provide a platform where you can easily design
                and customize a wide range of products, from clothing to
                accessories, and express your individuality.
              </p>
              <p className="text-lg text-gray-600">
                At Fab Fusion, we are passionate about creativity and
                self-expression. Whether you&apos;re looking to create custom
                apparel for your team or unique gifts for your loved ones, our
                easy-to-use design tools make it simple to bring your ideas to
                life.
              </p>
              <h3 className="text-xl font-semibold mt-16 mb-2">Contact Us</h3>
              <p className="text-lg text-gray-600">
                Have questions or need assistance? Feel free to reach out to us
                at{" "}
                <a
                  href="mailto:contact@fabfusion.com"
                  className="text-blue-600 underline"
                >
                  contact@fabfusion.com
                </a>{" "}
                or call us at{" "}
                <a href="tel:+917742026070" className="text-blue-600 underline">
                  +91 7742026070
                </a>
                .
              </p>
            </div>
            <div className="">
              <Image
                src="/about-img.png"
                width={600}
                height={0}
                alt="logo"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      <Services />
    </div>
  );
};

export default AboutSection;
