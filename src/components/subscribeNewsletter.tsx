import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-[#F5F5F5] w-full flex flex-col items-center justify-center py-[50px]">
      <h4 className="text-[40px]">Subscribe Newsletter</h4>
      <p className="text-[20px] text-[#555]">
        Sign up to our Newsletter and get the discount code.
      </p>
      <div className="py-[50px] w-[670px] flex gap-[10px]">
        <input
          type="text"
          className="w-[75%] bg-transparent border-2 border-black placeholder:text-gray-700 px-[20px] h-[50px] focus:outline-none focus:ring-0"
          placeholder="Your email address..."
        />
        <button className="bg-black text-white w-[25%] px-[40px] h-[50px] font-[500]">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
