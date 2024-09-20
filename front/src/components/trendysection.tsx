"use client";
import React, { useState } from "react";
import {
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
  HiOutlineArrowPath,
} from "react-icons/hi2";
import { PiHeartThin } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

const TrendySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const swiperImages = [
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=360",
      hoverimage:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2.jpg?v=1709714257&width=360",
      name: "ALUKAS",
      title: "Blue Stripes & Stone Earrings",
      newPrice: "$129.00",
      oldPrice: "$170.00",
      isNew: true,
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=360",
      hoverimage:
        "https://demo-alukas.myshopify.com/cdn/shop/files/2.jpg?v=1709714257&width=360",
      name: "ALUKAS",
      title: "Blue Stripes & Stone Earrings",
      newPrice: "$129.00",
      oldPrice: "$170.00",
      isNew: false,
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

        <div className="overflow-hidden ">
          <div
            className="flex transition-transform duration-500 cursor-pointer overflow-hidden"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {swiperImages.map((item, index) => (
              <div className="min-w-[25%] p-4 text-center group" key={index}>
                <div className="relative group overflow-hidden">
                  {item.isNew && (
                    <div className="absolute top-[15px] z-20 font-[600] uppercase left-[15px] bg-[#156C8C] text-white text-xs py-[2px] px-1">
                      New
                    </div>
                  )}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[320px] h-[320px] transition-transform duration-300 group-hover:scale-105"
                  />

                  <img
                    src={item.hoverimage}
                    alt={`${item.title} - Hover`}
                    className="absolute inset-0 w-[320px] h-[320px] transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110 transform"
                  />

                  <div className="absolute top-2 right-[-50px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-[-60px] transition-all duration-1000">
                    <div className="relative bg-white rounded-full p-2 cursor-pointer group">
                      <PiHeartThin className="text-black" size={20} />
                      <span className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-0 hover:opacity-100 transition-all duration-300">
                        Add to Wishlist
                      </span>
                    </div>

                    <div className="relative bg-white rounded-full p-2 cursor-pointer group">
                      <IoSearchOutline className="text-black" size={20} />
                      <span className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-0 hover:opacity-100 transition-all duration-300">
                        Quick View
                      </span>
                    </div>

                    <div className="relative bg-white rounded-full p-2 cursor-pointer group">
                      <HiOutlineArrowPath className="text-black" size={20} />
                      <span className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-0 hover:opacity-100 transition-all duration-300">
                        Compare
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-[15px] relative">
                  <p className="uppercase text-gray-500">{item.name}</p>
                  <p className="text-[18px] my-[6px]">{item.title}</p>

                  <div className="relative w-full">
                    <div className="flex justify-center items-center gap-[5px] transition-transform duration-300 group-hover:translate-y-5 group-hover:opacity-0">
                      <div className="text-[18px]">{item.newPrice}</div>
                      <div className="text-gray-400 text-[16px] text-end line-through font-[300]">
                        {item.oldPrice}
                      </div>
                    </div>

                    <button className="absolute font-[500] uppercase w-[130px] flex justify-self-center  border-b-solid border-b-[2px] border-b-black  inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100  px-3 ">
                      Add to Cart
                    </button>
                  </div>
                </div>
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
