import React from "react";
import { SlHome } from "react-icons/sl";

const PinkBlock = () => {
  return (
    <div className="w-full max-w-[1360px] mx-auto bg-[#F9EBF9] flex flex-col md:flex-row justify-center text-[#222] items-center py-[20px] md:py-[30px] px-[15px] md:px-[20px] gap-[10px] md:gap-[20px]">
      <div>
        <SlHome size={24} className="md:w-[30px] md:h-[30px]" />
      </div>
      <div className="text-[20px] md:text-[28px] text-center md:text-left">
        Find Shops Near You
      </div>
      <div className="border-[2px] border-[#222] py-[4px] md:py-[5px] px-[20px] md:px-[30px] text-[16px] md:text-[18px] cursor-pointer hover:bg-[#222] hover:text-white transition-colors duration-300">
        Find Store
      </div>
    </div>
  );
};

export default PinkBlock;
