"use client";
import { Product } from "@/type/product";
import React, { FC } from "react";
import OverImageNav from "./overimageNav";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const productId = product._id;

  return (
    <div className="text-center group over" key={product.id}>
      <Link href={`/${product.title}`}>
        <div className="relative group overflow-hidden">
          <div className="absolute top-[15px] left-[15px] z-20 flex flex-col space-y-2">
            {product.soldOut && (
              <div className="font-[600] uppercase bg-[#414040] text-white text-xs py-[2px] px-[10px]">
                Sold Out
              </div>
            )}
            {product.discountPercent && (
              <div className="font-[600] uppercase bg-[#D73F0F] text-white text-xs py-[2px] px-[10px]">
                -{product.discountPercent}%
              </div>
            )}
            {product.isNewProduct && (
              <div className="font-[600] uppercase bg-[#156C8C] text-white text-xs py-[2px] px-[10px]">
                New
              </div>
            )}
          </div>
          <div>
            <img
              src={product.smallCardImage}
              alt={product.title}
              className="w-full h-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <img
              src={product.smallCardHoverImage}
              alt={`${product.title} - Hover`}
              className="absolute inset-0 aspect-square w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110 transform"
            />
          </div>
          <OverImageNav productId={productId} />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center mt-[15px] relative">
        <p className="uppercase text-gray-500">{product.name}</p>
        <p className="text-[18px] my-[6px] text-[#222]">{product.title}</p>
        <div className="relative w-full">
          <div className="flex justify-center items-center gap-[5px] transition-transform duration-300 group-hover:translate-y-5 group-hover:opacity-0">
            <div className="text-[18px] text-[#222]">
              ${product.newPrice}.00
            </div>
            {product.oldPrice && (
              <div className="text-gray-400 text-[16px] text-end line-through font-[300]">
                ${product.oldPrice}.00
              </div>
            )}
          </div>
          <button className="absolute font-[500] uppercase w-[130px] flex justify-self-center border-b-solid border-b-[2px] border-b-black inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 px-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
