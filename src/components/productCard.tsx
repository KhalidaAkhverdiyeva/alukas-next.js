"use client";
import { Product } from "@/type/product";
import React, { FC } from "react";
import OverImageNav from "./overimageNav";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  isInWishlist?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({ product, isInWishlist }) => {
  const productId = product._id;

  return (
    <div
      className="text-center group over max-w-[280px] md:max-w-none mx-auto"
      key={product.id}
    >
      <div className="relative group overflow-hidden">
        <div className="absolute top-[8px] left-[8px] z-20 flex flex-col space-y-1 md:space-y-2">
          {product.soldOut && (
            <div className="font-[600] uppercase bg-[#414040] text-white text-[9px] md:text-xs py-[1px] md:py-[2px] px-[4px] md:px-[8px]">
              Sold Out
            </div>
          )}
          {product.discountPercent && (
            <div className="font-[600] uppercase bg-[#D73F0F] text-white text-[9px] md:text-xs py-[1px] md:py-[2px] px-[4px] md:px-[8px]">
              -{product.discountPercent}%
            </div>
          )}
          {product.isNewProduct && (
            <div className="font-[600] uppercase bg-[#156C8C] text-white text-[9px] md:text-xs py-[1px] md:py-[2px] px-[4px] md:px-[8px]">
              New
            </div>
          )}
        </div>
        <div className="aspect-square w-full">
          <Image
            width={300}
            height={300}
            src={product.smallCardImage}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Image
            width={300}
            height={300}
            src={product.smallCardHoverImage}
            alt={`${product.title} - Hover`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110 transform"
          />
        </div>
        <OverImageNav productId={productId} isInWishlistPage={isInWishlist} />
      </div>

      <div className="flex flex-col items-center justify-center mt-[10px] md:mt-[15px] relative">
        <p className="uppercase text-gray-500 text-sm md:text-base">
          {product.name}
        </p>
        <Link href={`/${product.title}`}>
          <p className="text-[14px] md:text-[18px] my-[4px] md:my-[6px] text-[#222]">
            {product.title}
          </p>
        </Link>

        <div className="relative w-full">
          <div className="flex justify-center items-center gap-[5px] transition-transform duration-300 group-hover:translate-y-5 group-hover:opacity-0">
            <div className="text-[14px] md:text-[18px] text-[#222]">
              ${product.newPrice}.00
            </div>
            {product.oldPrice && (
              <div className="text-gray-400 text-[12px] md:text-[16px] text-end line-through font-[300]">
                ${product.oldPrice}.00
              </div>
            )}
          </div>
          <button className="absolute font-[500] uppercase w-[110px] md:w-[130px] flex justify-self-center border-b-solid border-b-[2px] border-b-black inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 px-2 md:px-3 text-sm md:text-base">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
