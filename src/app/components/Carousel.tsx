"use client";

import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";

const images = [
  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80",
  "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
]; // Add your image URLs here
const imageDisplayDuration = 3000;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, imageDisplayDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeIndex]);

  return (
    <div className="carousel-container relative overflow-hidden h-80">
      {images.map((image, index) => (
        <CarouselItem
          key={index}
          imageUrl={image}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
};

export default Carousel;
