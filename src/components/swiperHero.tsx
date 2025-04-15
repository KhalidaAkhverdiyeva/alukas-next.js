"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const SwiperComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperImages = [
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/save_web_slide1_resize.jpg?v=1711681053&width=1920",
      title: "Introducing The <br /> Lost Day Collection",
      desc: "Ring, Occasion Pieces, Pandora & more collection",
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/alk_s3.jpg?v=1710139620&width=2880",
      title: "A Minimalistic <br /> Design Masculine",
      desc: "Awesome products for the dynamic urban lifestyle",
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/alk_s2.jpg?v=1710139621&width=2880",
      title: "New S/S 2024 <br /> Amazing collections",
      desc: "A symbol of love and a modern take on gold.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % swiperImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + swiperImages.length) % swiperImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden group">
      {swiperImages.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-10 max-w-[1360px] mx-auto z-10">
            <h1
              className={`text-[50px] transition-all duration-1000 ease-in-out ${
                currentIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-[10px]"
              } delay-[500ms]`}
              dangerouslySetInnerHTML={{ __html: slide.title }}
            />
            <h2
              className={`py-6 text-[24px] text-[rgb(85, 85, 85)] transition-all duration-1000 ease-in-out ${
                currentIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-[10px]"
              } delay-[800ms]`}
            >
              {slide.desc}
            </h2>
            <button
              className={`border-2 bg-transparent hover:bg-black border-black text-black px-10 py-3 transition-all duration-1000 ease-in-out hover:bg-main hover:text-white ${
                currentIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-[10px]"
              } delay-[1000ms]`}
            >
              SHOP NOW
            </button>
          </div>
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover z-0"
            width={1800}
            height={563}


          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute text-3xl transition opacity-0 z-[1] group-hover:opacity-65 duration-500 group-hover:translate-x-0 translate-x-[20px] left-5 rounded-full flex items-center justify-center top-1/2 transform -translate-y-1/2 p-2 text-black"
      >
        <TfiAngleLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute text-3xl transition opacity-0 z-[1] group-hover:opacity-65 duration-500 group-hover:translate-x-0 -translate-x-[20px] right-5 rounded-full flex items-center justify-center top-1/2 transform -translate-y-1/2 p-2 text-black"
      >
        <TfiAngleRight />
      </button>

      <div className="absolute bottom-[30px] left-0 right-0 flex justify-center z-10">
        {swiperImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full mx-2 transition-all duration-300 ${
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

export default SwiperComponent;
