/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../type/product";
import GotToSlide from "./gotToSlide";
import SliderButton from "./sliderButtons";
import ProductCard from "./productCard";

const FeauturedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("New Arrivals");
  const [transitioning, setTransitioning] = useState(false);

  const fetchProducts = async (category: string) => {
    try {
      const categoryEndpointMap: { [key: string]: string } = {
        Featured: "Royal%20Love",
        "Best Sellers": "Middle%20of%20North",
        "New Arrivals": "Morden",
      };

      const response = await fetch(
        `https://alukas-back.onrender.com/api/product/all?collectionName=${categoryEndpointMap[category]}`
      );
      const data = await response.json();
      setProducts(data.products);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const initialFetch = async () => {
      setTransitioning(true);
      await fetchProducts(activeCategory);
      setTransitioning(false);
    };

    initialFetch();
  }, [activeCategory]);

  const handleCategoryChange = async (category: string) => {
    setTransitioning(true);
    await fetchProducts(category);
    setActiveCategory(category);
    setTransitioning(false);
  };

  return (
    <div className="relative w-full mb-[60px] px-2 md:px-4">
      <div
        className="relative w-full md:max-w-[1360px] md:mx-auto flex flex-col items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h3 className="text-xl md:text-4xl pt-6 md:pt-16 text-center">
          Featured Products
        </h3>
        <div className="py-3 md:py-8 text-[14px] md:text-[20px] flex flex-wrap justify-center gap-[8px] md:gap-[20px]">
          {["New Arrivals", "Featured", "Best Sellers"].map((category) => (
            <div
              key={category}
              className={`cursor-pointer whitespace-nowrap ${
                activeCategory === category
                  ? "border-b-[2px] border-b-black text-black"
                  : "border-b-transparent text-gray-500"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </div>
          ))}
        </div>

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
                className="w-full md:w-1/2 lg:w-1/4  flex-shrink-0 flex-grow-0 p-1 md:p-2 "
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

export default FeauturedSection;
