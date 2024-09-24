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
        `http://localhost:3000/api/product/all?collectionName=${categoryEndpointMap[category]}`
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
  }, []);

  const handleCategoryChange = async (category: string) => {
    setTransitioning(true);
    await fetchProducts(category);
    setActiveCategory(category);
    setTransitioning(false);
  };

  return (
    <div className="relative mb-[60px]">
      <div
        className="relative w-[1360px] flex flex-col items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h3 className="text-4xl pt-16">Feautured Products</h3>
        <div className="py-8 text-[20px] flex gap-[20px]">
          {["New Arrivals", "Featured", "Best Sellers"].map((category) => (
            <div
              key={category}
              className={`cursor-pointer ${
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
            className={`flex transition-all duration-500 ${
              transitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{
              transform: `translateY(${
                transitioning ? "30px" : "0"
              }) translateX(-${(currentIndex * 100) / 4}%)`,
            }}
          >
            {products.map((item) => (
              <div
                key={item.id}
                className="w-[25%] flex-shrink-0 flex-grow-0 p-2"
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
