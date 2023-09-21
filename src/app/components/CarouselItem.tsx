import Image from "next/image";
import React from "react";

const CarouselItem = ({ imageUrl, isActive }) => {
  return (
    <div
      className={`carousel-item ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-90 hidden"
      } flex items-center justify-center`}
    >
      <Image
        src={imageUrl}
        alt="Clothing Item"
        width={300}
        height={300}
        className={`max-w-200 max-h-200 rounded-3xl ${
          isActive ? "shadow-md" : ""
        }`}
      />
    </div>
  );
};

export default CarouselItem;
