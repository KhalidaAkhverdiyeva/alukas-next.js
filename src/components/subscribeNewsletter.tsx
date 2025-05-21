import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-[#F5F5F5] w-full flex flex-col items-center justify-center py-[30px] md:py-[50px] px-4">
      <h4 className="text-[28px] md:text-[40px] text-center">
        Subscribe Newsletter
      </h4>
      <p className="text-[16px] md:text-[20px] text-[#555] text-center mt-2">
        Sign up to our Newsletter and get the discount code.
      </p>
      <div className="py-[30px] md:py-[50px] w-full max-w-[670px] flex flex-col md:flex-row gap-[10px]">
        <input
          type="text"
          className="w-full md:w-[75%] bg-transparent border-2 border-black placeholder:text-gray-700 px-[20px] h-[50px] focus:outline-none focus:ring-0"
          placeholder="Your email address..."
        />
        <button className="w-full md:w-[25%] bg-black text-white px-[20px] md:px-[40px] h-[50px] font-[500] hover:bg-gray-800 transition-colors duration-300">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
