
"use client"; // Required because we use useState
 
import React, { useState } from "react";
import Image from "next/image";

export default function ImageCarousel(props) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const media = props.mediaArray || []; // fallback to empty array if no media prop is passed

  // Will not render if no media
  if (media.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Media */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {media.map((src, index) => (
            <div    
              key={index} 
              className="w-full flex-shrink-0 relative aspect-square" //can change to aspect-3/4 for 3:4 ratio
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
              
            </div>
          ))}
        </div>
      </div>

      {/* Nav arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        onClick={nextSlide}
      >
        &#8594;
      </button>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 gap-2">
        {media.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
