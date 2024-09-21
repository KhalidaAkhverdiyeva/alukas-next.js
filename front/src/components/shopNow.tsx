import React from "react";
import HeroCard from "./herotriplecard";

const ShopNow = () => {
  return (
    <div className="flex justify-center items-center w-[1360px] gap-[30px] my-[50px]">
      <HeroCard
        imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_4.jpg?v=1710149492"
        title="New Bangles Collection"
        subtitle="Catch the highlight in the roof"
        buttonText="SHOP NOW"
      />
      <HeroCard
        imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_5.jpg?v=1710149492"
        title="New Bangles Collection"
        subtitle="Catch the highlight in the roof"
        buttonText="SHOP NOW"
      />
    </div>
  );
};

export default ShopNow;
