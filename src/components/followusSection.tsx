import Image from "next/image";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";

const FollowUsSection = () => {
  return (
    <div className="flex flex-col items-center my-[80px]">
      <h4 className="text-[40px]">Follow Us on Instagram</h4>
      <p className="text-[#555] text-[20px]">@bersky</p>
      <div className="flex w-[1360px] gap-[18px] py-[40px]">
        <div className="flex-1 relative overflow-hidden group">
          <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-105">
            <Image
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i1.jpg?v=1711684513"
              alt=""
              className="w-full h-full object-cover"
              width={287}
              height={216}
            />
            <div className="bg-white w-[45px] h-[45px] z-30 absolute rounded-full flex justify-center items-center top-[77px] left-[77px] opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105">
              <IoLogoInstagram className="text-[20px] text-[#555]" />
            </div>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden group">
          <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-105">
            <Image
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i2.jpg?v=1711684491"
              alt=""
              className="w-full h-full object-cover "
              width={287}
              height={216}
            />
            <div className="bg-white w-[45px] h-[45px] z-30 absolute rounded-full flex justify-center items-center top-[77px] left-[77px] opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105">
              <IoLogoInstagram className="text-[20px] text-[#555]" />
            </div>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden group">
          <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-105">
            <Image
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i3.jpg?v=1711684606"
              alt=""
              className="w-full h-full object-cover "
              width={287}
              height={216}
            />
            <div className="bg-white w-[45px] h-[45px] z-30 absolute rounded-full flex justify-center items-center top-[77px] left-[77px] opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105">
              <IoLogoInstagram className="text-[20px] text-[#555]" />
            </div>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden group">
          <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-105">
            <Image
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i4.jpg?v=1711684578"
              alt=""
              className="w-full h-full object-cover "
              width={287}
              height={216}
            />
            <div className="bg-white w-[45px] h-[45px] z-30 absolute rounded-full flex justify-center items-center top-[77px] left-[77px] opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105">
              <IoLogoInstagram className="text-[20px] text-[#555]" />
            </div>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden group">
          <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-105">
            <Image
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i5.jpg?v=1712894690"
              alt=""
              className="w-full h-full object-cover "
              width={287}
              height={216}
            />
            <div className="bg-white w-[45px] h-[45px] z-30 absolute rounded-full flex justify-center items-center top-[77px] left-[77px] opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105">
              <IoLogoInstagram className="text-[20px] text-[#555]" />
            </div>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden group">
          <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-105">
            <Image
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_i6.jpg?v=1711684593"
              alt=""
              className="w-full h-full object-cover "
              width={287}
              height={216}
            />
            <div className="bg-white w-[45px] h-[45px] z-30 absolute rounded-full flex justify-center items-center top-[77px] left-[77px] opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105">
              <IoLogoInstagram className="text-[20px] text-[#555]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUsSection;
