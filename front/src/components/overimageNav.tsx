import React from "react";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { PiHeartThin } from "react-icons/pi";

const OverImageNav = () => {
  return (
    <>
      <div className="absolute top-2 right-[-50px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-[-60px] transition-all duration-1000">
        <div className="relative bg-white rounded-full p-2 cursor-pointer group">
          <PiHeartThin className="text-black" size={20} />
          <span className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-0 hover:opacity-100 transition-all duration-300">
            Add to Wishlist
          </span>
        </div>

        <div className="relative bg-white rounded-full p-2 cursor-pointer group">
          <IoSearchOutline className="text-black" size={20} />
          <span className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-0 hover:opacity-100 transition-all duration-300">
            Quick View
          </span>
        </div>

        <div className="relative bg-white rounded-full p-2 cursor-pointer group">
          <HiOutlineArrowPath className="text-black" size={20} />
          <span className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-0 hover:opacity-100 transition-all duration-300">
            Compare
          </span>
        </div>
      </div>
    </>
  );
};

export default OverImageNav;
