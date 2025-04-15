import React from "react";
import ReviewCard from "./reviewCard";

const CustomerReviewSection = () => {
  return (
    <div className=" flex flex-col items-center justify-center py-[50px] customer-review-section w-[100%]">
      <h4 className="text-[40px] mb-[40px]">Customer Review </h4>
      <div className="w-[1360px] text-[#222] flex justify-center gap-[40px] mb-[30px]">
        <ReviewCard
          title="Alukas is my favorite store"
          review="Great products and designs and such great quality, they always wash up well no matter how many times I wash them.		"
          user="Donald Duckls"
        />
        <ReviewCard
          title="Beautiful products"
          review="Beautiful clothes. I always get complements. Good quality and items wash well. products and designs and such great"
          user="Niahm Oxley"
        />
        <ReviewCard
          title="Lovely products"
          review="Great products and designs and such great quality, they always wash up well no matter how many times I wash them.		"
          user="Mary Green"
        />
      </div>
    </div>
  );
};

export default CustomerReviewSection;
