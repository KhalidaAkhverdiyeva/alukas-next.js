import React from "react";
import ReviewCard from "./reviewCard";

const CustomerReviewSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[30px] md:py-[50px] customer-review-section w-full px-4">
      <h4 className="text-[28px] md:text-[40px] mb-[20px] md:mb-[40px] text-center">
        Customer Review
      </h4>
      <div className="w-full max-w-[1360px] text-[#222] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[40px] mb-[20px] md:mb-[30px]">
        <ReviewCard
          title="Alukas is my favorite store"
          review="Great products and designs and such great quality, they always wash up well no matter how many times I wash them."
          user="Donald Duckls"
        />
        <ReviewCard
          title="Beautiful products"
          review="Beautiful clothes. I always get complements. Good quality and items wash well. products and designs and such great"
          user="Niahm Oxley"
        />
        <ReviewCard
          title="Lovely products"
          review="Great products and designs and such great quality, they always wash up well no matter how many times I wash them."
          user="Mary Green"
        />
      </div>
    </div>
  );
};

export default CustomerReviewSection;
