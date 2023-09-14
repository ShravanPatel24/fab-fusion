import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-light py-5">
      <div className="container mx-auto">
        {" "}
        {/* Added mx-auto for centering */}
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-4xl font-weight-bold mb-4">About Us</h2>
            <p className="text-lg">
              Fab Fusion is your destination for creating custom designs on your
              favorite products. We believe in the power of personalization and
              the joy it brings to people when they receive products that are
              uniquely their own.
            </p>
            <p className="text-lg">
              Our mission is to provide a platform where you can easily design
              and customize a wide range of products, from clothing to
              accessories, and express your individuality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
