import React from "react";
import CircleCard from "./circlecard";

const PopularSection = () => {
  return (
    <div className="w-[1360px] flex flex-col items-center">
      <h3 className="text-[40px] pt-[60px] pb-[30px]">Popular Categories</h3>
      <div className="flex justify-between w-full">
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
