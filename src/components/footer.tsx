import Image from "next/image";
import React, { useState } from "react";
import { IoHeadsetSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    about: false,
    company: false,
    store: false,
    follow: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const shippingItems = [
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/free-shipping.jpg?v=1712656231",
      title: "Free Shipping",
      description: "For all Orders Over $100",
      alt: "Free Shipping",
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/returns.jpg?v=1712656231",
      title: "Free Returns",
      description: "30 Days Return Policy",
      alt: "Returns",
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/secured-payment.jpg?v=1712656231",
      title: "Secured Payment",
      description: "100% Secure Payment",
      alt: "Secured Payment",
    },
    {
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/support.jpg?v=1712656037",
      title: "24/7 Support",
      description: "Dedicated Support",
      alt: "Support",
    },
  ];

  return (
    <div>
      {/* Top Section with Icons */}
      <div className="flex justify-center border-b-solid border-b-[1px] border-b-gray-300 py-[10px] md:py-[30px]">
        <div className="w-full max-w-[1360px] px-4">
          {/* Mobile Swiper */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="shipping-swiper"
            >
              {shippingItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center pb-8">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={38}
                      height={38}
                    />
                    <h4 className="text-[18px] font-[500] mt-2">
                      {item.title}
                    </h4>
                    <p className="text-[#555]">{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
            {shippingItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image src={item.image} alt={item.alt} width={38} height={38} />
                <h4 className="text-[18px] font-[500] mt-2">{item.title}</h4>
                <p className="text-[#555]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="flex justify-center border-b-solid border-b-[1px] border-b-gray-300 py-[40px] md:py-[80px]">
        <div className="w-full max-w-[1360px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-8">
            {/* Logo Section */}
            <div className="flex flex-col items-center">
              <Image
                src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_logo_footer.png?v=1714702294"
                alt="Alukas Logo"
                width={175}
                height={21}
                className="pb-[16px]"
              />
              <p className="text-[#555]">Gold & Diamonds</p>
            </div>

            {/* About Section */}
            <div>
              <button
                onClick={() => toggleSection("about")}
                className="w-full flex justify-between items-center gap-2 font-[500] pb-[10px] md:pb-[20px]"
              >
                About Alukas
                <IoIosArrowDown
                  className={`w-4 h-4 transition-transform duration-300 md:hidden ${
                    openSections.about ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`space-y-4 overflow-hidden transition-all duration-300 ${
                  openSections.about
                    ? "max-h-[500px]"
                    : "max-h-0 md:max-h-[500px]"
                }`}
              >
                <p className="text-[#555]">About Us</p>
                <p className="text-[#555]">Core Values</p>
                <p className="text-[#555]">Careers</p>
                <p className="text-[#555]">Press Releases</p>
                <p className="text-[#555]">Blog</p>
                <p className="text-[#555]">Sitemap</p>
              </div>
            </div>

            {/* Company Section */}
            <div>
              <button
                onClick={() => toggleSection("company")}
                className="w-full flex justify-between items-center gap-2 font-[500] pb-[10px] md:pb-[20px]"
              >
                Our Company
                <IoIosArrowDown
                  className={`w-4 h-4 transition-transform duration-300 md:hidden ${
                    openSections.company ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`space-y-4 overflow-hidden transition-all duration-300 ${
                  openSections.company
                    ? "max-h-[500px]"
                    : "max-h-0 md:max-h-[500px]"
                }`}
              >
                <p className="text-[#555]">Shopping App</p>
                <p className="text-[#555]">Be an Affiliate</p>
                <p className="text-[#555]">Advertise Your Product</p>
                <p className="text-[#555]">Media Enquires</p>
                <p className="text-[#555]">Other Services</p>
              </div>
            </div>

            {/* Store Details */}
            <div>
              <button
                onClick={() => toggleSection("store")}
                className="w-full flex justify-between items-center gap-2 font-[500] pb-[10px] md:pb-[20px]"
              >
                Store Details
                <IoIosArrowDown
                  className={`w-4 h-4 transition-transform duration-300 md:hidden ${
                    openSections.store ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`space-y-4 overflow-hidden transition-all duration-300 ${
                  openSections.store
                    ? "max-h-[500px]"
                    : "max-h-0 md:max-h-[500px]"
                }`}
              >
                <div className="flex flex-col">
                  <div className="text-[#555] pb-[16px] flex gap-[10px] items-center">
                    <div className="bg-[#C6C6C6] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                      <IoHeadsetSharp className="text-white w-[26px] h-[26px]" />
                    </div>
                    <div>
                      <p>Need Any Help?</p>
                      <p className="text-[22px] text-black">(+800) 1234 56</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#555]">Address: 502 New Design Str,</p>
                    <p className="text-[#555]">Melbourne, Australia</p>
                    <p className="text-[#555]">Email: alukas@domain.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <button
                onClick={() => toggleSection("follow")}
                className="w-full flex justify-between items-center gap-2 font-[500] pb-[10px] md:pb-[20px]"
              >
                Follow Us
                <IoIosArrowDown
                  className={`w-4 h-4 transition-transform duration-300 md:hidden ${
                    openSections.follow ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`space-y-4 overflow-hidden transition-all duration-300 ${
                  openSections.follow
                    ? "max-h-[500px]"
                    : "max-h-0 md:max-h-[500px]"
                }`}
              >
                <div className="flex gap-[20px]">
                  <FaInstagram className="w-[22px] h-[22px] cursor-pointer hover:text-gray-600" />
                  <FaTiktok className="w-[22px] h-[22px] cursor-pointer hover:text-gray-600" />
                  <IoLogoYoutube className="w-[22px] h-[22px] cursor-pointer hover:text-gray-600" />
                  <FaXTwitter className="w-[22px] h-[22px] cursor-pointer hover:text-gray-600" />
                  <FaFacebookF className="w-[22px] h-[22px] cursor-pointer hover:text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center border-b-solid border-b-[1px] border-b-gray-300 py-[30px] px-4">
        <div className="mb-4">
          <Image
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_payment.png?v=1711955031"
            alt="Payment Methods"
            width={190}
            height={30}
          />
        </div>
        <div className="text-[#555] text-center">
          Copyright © Alukas all rights reserved. Powered by Bersky.
        </div>
      </div>
    </div>
  );
};

export default Footer;
