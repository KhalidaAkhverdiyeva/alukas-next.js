import Image from "next/image";
import React from "react";
import { IoHeadsetSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center border-b-solid border-b-[1px] border-b-gray-300 py-[30px] ">
        <div className="w-[1360px]">
          <div className="flex justify-between px-[50px] py-[20px]">
            <div className="flex flex-col items-center">
              <Image
                src="https://demo-alukas.myshopify.com/cdn/shop/files/free-shipping.jpg?v=1712656231"
                alt=""
                width={38}
                height={38}
              />
              <h4 className="text-[18px] font-[500]">Free Shipping</h4>
              <p className="text-[#555]">For all Orders Over $100</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://demo-alukas.myshopify.com/cdn/shop/files/returns.jpg?v=1712656231"
                alt=""
                width={38}
                height={38}
              />
              <h4 className="text-[18px] font-[500]">Free Shipping</h4>
              <p>For all Orders Over $100</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://demo-alukas.myshopify.com/cdn/shop/files/secured-payment.jpg?v=1712656231"
                alt=""
                width={38}
                height={38}
              />
              <h4 className="text-[18px] font-[500]">Free Shipping</h4>
              <p>For all Orders Over $100</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://demo-alukas.myshopify.com/cdn/shop/files/support.jpg?v=1712656037"
                alt=""
                width={38}
                height={38}
              />
              <h4 className="text-[18px] font-[500]">Free Shipping</h4>
              <p>For all Orders Over $100</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-b-solid border-b-[1px] border-b-gray-300 py-[80px]">
        <div className="w-[1360px] flex  ">
          <div className="w-[280px]">
            <Image
              src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_logo_footer.png?v=1714702294"
              alt=""
              width={175}
              height={21}
              className="pb-[16px]"
            />
            <p className="text-[#555]">Gold & Diomonds</p>
          </div>
          <div className="w-[280px]">
            <h4 className="font-[500] pb-[20px]">About Alukas</h4>
            <p className="text-[#555] pb-[16px]">About Us</p>
            <p className="text-[#555] pb-[16px]">Core Values</p>
            <p className="text-[#555] pb-[16px]">Careers</p>
            <p className="text-[#555] pb-[16px]">Press Releases</p>
            <p className="text-[#555] pb-[16px]">Blog </p>
            <p className="text-[#555] pb-[16px]">Sitemap </p>
          </div>
          <div className="w-[280px]">
            <h4 className="font-[500] pb-[20px]">Our Company </h4>
            <p className="text-[#555] pb-[16px]">Shopping App </p>
            <p className="text-[#555] pb-[16px]">Be an Affiliate</p>
            <p className="text-[#555] pb-[16px]">Advertise Your Product</p>
            <p className="text-[#555] pb-[16px]">Media Enquires </p>
            <p className="text-[#555] pb-[16px]">Other Services </p>
          </div>
          <div className="w-[280px]">
            <h4 className="font-[500] pb-[20px]">Store Details</h4>
            <div className="text-[#555] pb-[16px] flex gap-[10px]">
              <div className="bg-[#C6C6C6] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                <IoHeadsetSharp className="text-white w-[26px] h-[26px]" />
              </div>
              <div>
                <p>Need Any Help?</p>
                <p className="text-[22px] text-black">(+800) 1234 56</p>
              </div>
            </div>
            <p className="text-[#555] pb-[8px]">Address: 502 New Design Str,</p>
            <p className="text-[#555] pb-[8px]">Melbourne, Australia</p>
            <p className="text-[#555] pb-[8px]">Email: alukas@domain.com </p>
          </div>
          <div className="w-[280px]">
            <h4 className="font-[500] pb-[20px]">Follow Us</h4>
            <div className="flex gap-[20px]">
              <div>
                <FaInstagram className="w-[22px] h-[22px]" />
              </div>
              <div>
                <FaTiktok className="w-[22px] h-[22px]" />
              </div>
              <div>
                <IoLogoYoutube className="w-[22px] h-[22px]" />
              </div>
              <div>
                <FaXTwitter className="w-[22px] h-[22px]" />
              </div>
              <div>
                <FaFacebookF className="w-[22px] h-[22px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center border-b-solid border-b-[1px] border-b-gray-300 py-[30px]">
        <div>
          <Image
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_payment.png?v=1711955031"
            alt=""
            width={190}
            height={30}
          />
        </div>
        <div className="text-[#555]">
          Copyright © Alukas all rights reserved. Powered by Bersky.
        </div>
      </div>
    </div>
  );
};

export default Footer;
