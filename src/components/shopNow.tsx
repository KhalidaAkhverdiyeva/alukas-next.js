import React from "react";
import HeroCard from "./herotriplecard";

const ShopNow = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1360px] mx-auto gap-[20px] md:gap-[30px] my-[30px] md:my-[50px] px-4 md:px-0">
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
