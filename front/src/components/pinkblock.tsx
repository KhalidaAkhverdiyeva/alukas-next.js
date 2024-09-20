import React from "react";
import { SlHome } from "react-icons/sl";

const PinkBlock = () => {
  return (
    <div className="w-[1360px] bg-[#F9EBF9] flex justify-center text-[#222] items-center py-[30px] px-[20px] gap-[20px]">
      <div>
        <SlHome size={30} />
      </div>
      <div className="text-[28px] ">Find Shops Near You</div>
      <div className="border-[2px] border-[#222] py-[5px] px-[30px] text-[18px]">
        Find Store
      </div>
    </div>
  );
};

export default PinkBlock;
