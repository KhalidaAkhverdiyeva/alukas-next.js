"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../type/product";
import SliderButton from "./sliderButtons";
import GotToSlide from "./gotToSlide";
import ProductCard from "./productCard";

const AutumnSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setTransitioning(true);
        const response = await fetch(
          "https://alukas-back.onrender.com/api/product/all?collectionName=Middle%20of%20North"
        );
        const data = await response.json();
        setProducts(data.products);
        setTransitioning(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setTransitioning(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="relative w-full mb-[60px] px-2 md:px-4">
      <div
        className="relative w-full md:max-w-[1360px] md:mx-auto flex flex-col items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h3 className="text-2xl md:text-4xl pt-8 md:pt-16 text-center">
          Autumn Collection
        </h3>
        <h4 className="pb-4 md:pb-8 text-base md:text-lg text-gray-600 text-center">
          Collect your loves with our newest arrivals.
        </h4>

        <div className="overflow-hidden w-full">
          <div
            className={`flex w-[300px] md:w-full transition-all duration-500 ${
              transitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{
              transform: `translateY(${
                transitioning ? "30px" : "0"
              }) translateX(-${
                (currentIndex * 100) /
                (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4)
              }%)`,
            }}
          >
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 flex-grow-0 p-1 md:p-2"
              >
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>
        <SliderButton
          products={products}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          hovered={hovered}
        />
      </div>

      <GotToSlide
        products={products}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default AutumnSection;
