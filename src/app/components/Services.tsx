import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <main>
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
            free delivery for all orders over ₹599{" "}
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
    </main>
  );
};

export default Services;
