import Image from "next/image";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";

const FollowUsSection = () => {
  return (
    <div className="flex flex-col items-center my-[40px] md:my-[80px] px-4">
      <h4 className="text-[28px] md:text-[40px] text-center">
        Follow Us on Instagram
      </h4>
      <p className="text-[#555] text-[16px] md:text-[20px] mt-2">@bersky</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-[18px] py-[20px] md:py-[40px] w-full max-w-[1360px]">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="relative overflow-hidden group aspect-[4/3]"
          >
            <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-105">
              <Image
                src={`https://demo-alukas.myshopify.com/cdn/shop/files/alk_i${item}.jpg?v=1711684513`}
                alt={`Instagram post ${item}`}
                className="w-full h-full object-cover"
                width={287}
                height={216}
              />
              <div className="bg-white w-[35px] h-[35px] md:w-[45px] md:h-[45px] z-30 absolute rounded-full flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105">
                <IoLogoInstagram className="text-[16px] md:text-[20px] text-[#555]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowUsSection;
