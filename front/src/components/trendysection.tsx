"use client";
import React, { useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";

const TrendySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false); // State to manage hover effect

  const swiperImages = [
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=360",
      title: "Introducing The <br /> Lost Day Collection",
      desc: "Ring, Occasion Pieces, Pandora & more collection",
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=360",
      title: "A Minimalistic <br /> Design Masculine",
      desc: "Awesome products for the dynamic urban lifestyle",
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=360",
      title: "New S/S 2024 <br /> Amazing collections",
      desc: "A symbol of love and a modern take on gold.",
    },
    // Additional cards...
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=360",
      title: "Card 4 Title",
      desc: "Description for Card 4",
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=360",
      title: "Card 5 Title",
      desc: "Description for Card 5",
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=360",
      title: "Card 6 Title",
      desc: "Description for Card 6",
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=360",
      title: "Card 7 Title",
      desc: "Description for Card 7",
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=360",
      title: "Card 8 Title",
      desc: "Description for Card 8",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < swiperImages.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mb-[60px]">
      <div
        className="relative w-[1360px] flex flex-col items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h3 className="text-4xl pt-16">Trendy Collection</h3>
        <h4 className="pb-8 text-lg text-gray-600">
          Collect your loves with our newest arrivals.
        </h4>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {swiperImages.map((item, index) => (
              <div className="min-w-[25%] p-4 text-center" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-lg"
                />
                <h3
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-[25px] top-[350px] cursor-pointer transform -translate-y-1/2 transition-opacity duration-300 rounded-full 
  ${hovered ? "opacity-100" : "opacity-0"} 
  ${
    currentIndex === 0
      ? "pointer-events-none bg-gray-200"
      : "bg-white transition-colors duration-300 hover:bg-black"
  } 
  p-2`}
        >
          <HiOutlineChevronLeft
            className={`transition-colors duration-300 ${
              currentIndex === 0
                ? "text-gray-500"
                : "text-black hover:text-white"
            }`}
            size={24}
          />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex >= swiperImages.length - 4}
          className={`absolute right-[25px] top-[350px] cursor-pointer transform -translate-y-1/2 transition-opacity duration-300 rounded-full 
  ${hovered ? "opacity-100" : "opacity-0"} 
  ${
    currentIndex >= swiperImages.length - 4
      ? "pointer-events-none bg-gray-200"
      : "bg-white transition-colors duration-300 hover:bg-black"
  } 
  p-2`}
        >
          <HiOutlineChevronRight
            className={`transition-colors duration-300 ${
              currentIndex >= swiperImages.length - 4
                ? "text-gray-500"
                : "text-black hover:text-white"
            }`}
            size={24}
          />
        </button>
      </div>
      <div className="absolute bottom-[-30px] left-0 right-0 flex justify-center z-10">
        {swiperImages.slice(0, 5).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-[6px] h-[6px] rounded-full mx-2 transition-all duration-300 ${
              currentIndex === index
                ? "bg-black"
                : "bg-transparent border-solid border-black border-[1px]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TrendySection;
