"use client";
import React, { useEffect, useState, useCallback } from "react";
import { GoChevronDown } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { PiHeartThin } from "react-icons/pi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Drawer, IconButton } from "@mui/material";
import DropdownMenu from "./dropdown";

import Link from "next/link";
import { useUser } from "@/Context/userContext";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { wishlist } = useUser();

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;

    if (scrollTop > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    setIsHeaderVisible(scrollTop <= 200 || isSticky);
  }, [isSticky]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`w-full z-50 transition-all duration-300 ease-in-out ${
        isSticky ? "sticky top-0 bg-white shadow-lg" : "relative"
      } ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Top Bar - Hidden on Mobile */}
      <div className="text-white bg-[#222222] hidden md:flex justify-center">
        <div className="w-full max-w-[1360px] flex justify-between py-[8px] px-4">
          <div className="flex gap-[30px]">
            <div className="flex items-center">
              English <GoChevronDown />
            </div>
            <div className="flex items-center">
              United States(USD $)
              <GoChevronDown />
            </div>
            <div className="flex gap-[6px]">
              <div>Summer Sale 15% off!</div>
              <a href="" className="underline">
                Shop Now!
              </a>
            </div>
          </div>
          <div className="flex gap-[25px]">
            <div>Store Location</div>
            <div>Contact</div>
            <div>About</div>
            <div>Gift Cards</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-[25px] flex justify-center bg-white">
        <div className="w-full max-w-[1360px] flex justify-between items-center px-4">
          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:block">
            <div className="flex items-center border py-[10px] pl-[20px] pr-[20px] gap-[50px] w-[290px] justify-between">
              <input
                type="text"
                placeholder="Search Products"
                className="text-black outline-none placeholder-black"
              />
              <IoSearchOutline className="text-[#484848] w-[20px] h-[20px]" />
            </div>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden"
            aria-label="Toggle mobile menu"
          >
            <RiMenu3Line className="w-[28px] h-[28px] text-black" />
          </button>

          {/* Logo */}
          <div className="flex-1 md:flex-none flex justify-center">
            <svg
              width="210"
              height="27"
              viewBox="0 0 210 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[150px] md:w-[210px]"
            >
              <path
                d="M19.152 26H22.104L11.34 0.835998L0.288 26H3.24L6.12 19.232H16.344L19.152 26ZM7.164 16.712L11.268 7.1L15.3 16.712H7.164ZM25.4905 1.988V26H34.7785V23.48H28.1545V1.988H25.4905ZM41.0569 1.988H38.3929V17.432C38.3929 19.448 38.6089 21.392 39.9049 23.192C41.3449 25.172 43.8649 26.432 46.9249 26.432C49.9849 26.432 52.5049 25.172 53.9449 23.192C55.2409 21.392 55.4569 19.448 55.4569 17.432V1.988H52.7929V16.712C52.7929 18.728 52.7929 20.924 50.8849 22.544C49.9129 23.372 48.2569 23.912 46.9249 23.912C45.5929 23.912 43.9369 23.372 42.9649 22.544C41.0569 20.924 41.0569 18.728 41.0569 16.712V1.988ZM64.3303 1.988H61.6663V26H64.3303V15.668L65.0143 14.984L74.8423 26H78.5143L66.9223 13.184L78.1543 1.988H74.5543L64.3303 12.284V1.988ZM98.1833 26H101.135L90.3713 0.835998L79.3193 26H82.2713L85.1513 19.232H95.3753L98.1833 26ZM86.1953 16.712L90.2993 7.1L94.3313 16.712H86.1953ZM116.987 5.336C116.447 4.292 115.619 3.32 114.647 2.672C113.459 1.88 112.271 1.592 110.795 1.592C106.907 1.592 104.063 4.076 104.063 7.784C104.063 9.584 104.675 10.7 105.719 11.708C106.799 12.752 107.987 13.256 108.923 13.688L111.083 14.696C112.343 15.272 113.279 15.704 113.963 16.352C114.827 17.144 115.151 18.08 115.151 19.16C115.151 21.572 113.603 23.912 110.327 23.912C109.103 23.912 107.915 23.624 106.871 22.58C106.187 21.86 105.611 20.78 105.431 19.52L102.839 20.24C103.163 21.68 103.883 23.336 105.071 24.488C106.727 26.108 108.707 26.432 110.291 26.432C114.611 26.432 117.887 23.48 117.887 19.052C117.887 17.324 117.383 15.92 116.159 14.696C115.151 13.688 113.855 13.04 112.451 12.428L110.147 11.42C109.247 11.024 108.347 10.628 107.627 9.908C106.979 9.296 106.727 8.756 106.727 7.82C106.727 5.588 108.383 4.112 110.759 4.112C112.127 4.112 112.991 4.58 113.459 4.94C113.999 5.372 114.539 6.092 114.863 6.74L116.987 5.336ZM147.694 15.596C147.01 16.532 146.254 17.396 144.958 18.764L139.954 12.32C141.502 11.024 141.286 11.312 141.898 10.772C143.806 9.116 144.13 7.532 144.13 6.416C144.13 4.004 142.402 1.592 139.054 1.592C135.598 1.592 133.834 4.148 133.834 6.668C133.834 8.288 134.59 9.728 136.21 11.816C135.706 12.14 133.438 13.544 132.178 14.804C131.386 15.596 130.018 17.18 130.018 19.772C130.018 23.588 133.042 26.432 136.966 26.432C139.702 26.432 142.618 24.74 144.706 22.652L147.298 26H150.61L146.578 20.78C148.054 19.268 148.99 18.116 149.638 17.216L147.694 15.596ZM143.086 20.672C142.186 21.536 139.486 23.984 136.93 23.984C134.446 23.984 132.682 22.112 132.682 19.736C132.682 17.864 133.69 16.892 134.374 16.28C135.058 15.668 135.994 14.876 137.758 13.796L143.086 20.672ZM137.326 8.9C136.858 8.252 136.354 7.568 136.354 6.524C136.354 5.012 137.542 3.896 139.018 3.896C140.278 3.896 141.61 4.688 141.61 6.38C141.61 7.208 141.358 8.072 139.99 9.152L138.406 10.376L137.326 8.9ZM180.819 3.968C177.939 1.772 175.167 1.592 173.727 1.592C166.527 1.592 161.163 6.92 161.163 14.084C161.163 21.032 166.455 26.432 173.583 26.432C175.383 26.432 178.155 26 180.819 24.092V20.78C180.387 21.212 179.415 22.112 178.047 22.796C176.787 23.444 175.203 23.912 173.583 23.912C169.191 23.912 163.899 20.636 163.899 14.12C163.899 8.576 168.003 4.112 173.547 4.112C174.951 4.112 176.427 4.472 177.687 5.048C178.911 5.624 180.063 6.524 180.819 7.28V3.968ZM196.929 26.432C203.877 26.432 209.421 21.14 209.421 14.012C209.421 6.848 203.841 1.592 196.929 1.592C190.017 1.592 184.437 6.848 184.437 14.012C184.437 21.14 189.981 26.432 196.929 26.432ZM196.929 4.112C202.329 4.112 206.685 8.504 206.685 14.012C206.685 19.52 202.329 23.912 196.929 23.912C191.529 23.912 187.173 19.52 187.173 14.012C187.173 8.504 191.529 4.112 196.929 4.112Z"
                fill="#222222"
              ></path>
            </svg>
          </div>

          {/* Icons Section - Only show cart on mobile */}
          <div className="flex gap-[10px] items-center">
            {/* Desktop Icons */}
            <div className="hidden md:flex gap-[10px] items-center">
              <div className="relative group inline-block">
                <Link href="/dashboard">
                  <CiUser className="w-[28px] h-[28px] text-black" />
                </Link>
                <span className="absolute top-[35px] left-1/2 transform -translate-x-1/2 -translate-y-[5px] whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  Admin
                  <span className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-[5px] border-x-transparent border-b-[5px] border-b-black"></span>
                </span>
              </div>

              <div className="relative group inline-block">
                <Link href="/wishlist">
                  <PiHeartThin className="w-[28px] h-[28px] text-black" />
                  <span className="absolute top-[-5px] right-[-5px] flex items-center justify-center w-[15px] h-[15px] bg-black text-white text-xs rounded-full">
                    {wishlist.length}
                  </span>
                </Link>
                <span className="absolute top-[35px] left-1/2 transform -translate-x-1/2 -translate-y-[5px] whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  Wishlist
                  <span className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-[5px] border-x-transparent border-b-[5px] border-b-black"></span>
                </span>
              </div>
            </div>

            {/* Cart Icon - Visible on all screens */}
            <div className="relative group inline-block">
              <PiShoppingCartSimpleLight className="w-[28px] h-[28px] text-[#3c3b3b]" />
              <span className="absolute top-[-5px] right-[-5px] flex items-center justify-center w-[15px] h-[15px] bg-black text-white text-xs rounded-full">
                0
              </span>
              <span className="absolute top-[35px] left-1/2 transform -translate-x-1/2 -translate-y-[5px] whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                Cart
                <span className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-[5px] border-x-transparent border-b-[5px] border-b-black"></span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="hidden md:flex bg-white px-[100px] justify-between border-b-solid border-b-[1px] border-b-gray-200 border-t-solid border-t-[1px] border-t-gray-200">
        <div className="flex items-center font-[500] text-[#222] gap-[5px] cursor-pointer">
          BROWSE CATEGORIES
          <BsChevronDown className="text-[#969595] w-[13px] h-[13px]" />
        </div>
        <ul className="flex list-none gap-[20px] font-[500] text-[#222]">
          <Link href="/">
            <li className="flex gap-[5px] items-center cursor-pointer py-[18px]">
              <span className="hover-effect">HOME</span>
              <BsChevronDown className="text-[#969595] w-[13px] h-[13px]" />
            </li>
          </Link>
          <Link href="shop">
            <li className="flex gap-[5px] items-center cursor-pointer  py-[18px]">
              <span className="hover-effect">SHOP</span>
              <BsChevronDown className="text-[#969595] w-[13px] h-[13px]" />
            </li>
          </Link>
          <li className="flex gap-[5px] items-center cursor-pointer">
            <span className="hover-effect">PRODUCT</span>
            <BsChevronDown className="text-[#969595] w-[13px] h-[13px]" />
          </li>
          <li className="flex gap-[5px] items-center cursor-pointer">
            <span className="hover-effect">PAGES</span>
            <BsChevronDown className="text-[#969595] w-[13px] h-[13px]" />
          </li>

          <DropdownMenu
            label="BLOGS"
            items={[
              "Grid 2 columns",
              "Grid 3 columns",
              "Grid 4 columns",
              "Post left sidebar ",
              "Post right sidebar ",
            ]}
          />
          <li className="flex items-center">
            <span className="hover-effect cursor-pointer">BUT ALUKAS!</span>
          </li>
        </ul>

        <div className="flex gap-[25px]">
          <div className="flex items-center gap-[5px]  text-[18px] text-[#222]">
            <BsTelephone className="w-[20px] h-[20px] text-[#464545] " />
            (+800) 1234 56
          </div>
          <div className="flex items-center gap-[5px]  text-[#222] text-[18px]">
            <IoLocationOutline className="w-[20px] h-[20px] text-[#464545]" />
            Our Stores
          </div>
        </div>
      </div>

      {/* MUI Drawer for Mobile Menu */}
      <Drawer
        anchor="left"
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "400px",
          },
        }}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <IconButton
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
            >
              <IoClose className="w-[28px] h-[28px] text-black" />
            </IconButton>
          </div>

          {/* Mobile Search */}
          <div className="mb-6">
            <div className="flex items-center border py-[10px] px-[20px] gap-[10px] w-full">
              <input
                type="text"
                placeholder="Search Products"
                className="text-black outline-none placeholder-black w-full"
              />
              <IoSearchOutline className="text-[#484848] w-[20px] h-[20px]" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-4">
            <div className="font-[500] text-[#222] py-2 border-b">
              BROWSE CATEGORIES
            </div>
            <Link href="/" className="block py-2">
              HOME
            </Link>
            <Link href="/shop" className="block py-2">
              SHOP
            </Link>
            <div className="py-2">PRODUCT</div>
            <div className="py-2">PAGES</div>
            <div className="py-2">BLOGS</div>
            <div className="py-2">BUT ALUKAS!</div>
          </nav>

          {/* Mobile Contact Info */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-[5px] text-[#222]">
              <BsTelephone className="w-[20px] h-[20px] text-[#464545]" />
              (+800) 1234 56
            </div>
            <div className="flex items-center gap-[5px] text-[#222]">
              <IoLocationOutline className="w-[20px] h-[20px] text-[#464545]" />
              Our Stores
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
