import React from "react";
import CircleCard from "./circlecard";

const PopularSection = () => {
  return (
    <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center px-4 md:px-0">
      <h3 className="text-2xl md:text-[40px] pt-8 md:pt-[60px] pb-4 md:pb-[30px] text-center">
        Popular Categories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 w-full">
        <CircleCard
          imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t1.jpg?v=1710145653&width=165"
          description="necklaces"
        />
        <CircleCard
          imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t2.jpg?v=1710145652&width=165"
          description="rings"
        />
        <CircleCard
          imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t3.jpg?v=1710145652&width=165"
          description="bracelets"
        />
        <CircleCard
          imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t4.jpg?v=1710145653&width=165"
          description="earnings"
        />
        <CircleCard
          imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t5.jpg?v=1710145653&width=165"
          description="charm & dangles"
        />
        <CircleCard
          imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t6.jpg?v=1710145653&width=165"
          description="gift ideas"
        />
      </div>
    </div>
  );
};

export default PopularSection;
