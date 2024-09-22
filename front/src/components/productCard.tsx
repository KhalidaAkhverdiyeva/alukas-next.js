import { Product } from "@/type/product";
import React, { FC } from "react";
import OverImageNav from "./overimageNav";
import Link from "next/link";

interface ProductCardProps {
  products: Product[];
}

const ProductCard: FC<ProductCardProps> = ({ products }) => {
  return (
    <>
      {products.map((item, index) => (
        <div className="min-w-[25%] p-4 text-center group over" key={index}>
          <Link href={`/${item.title}`}>
            <div className="relative group overflow-hidden">
              {item.soldOut && (
                <div className="absolute top-[40px] z-20 font-[600] uppercase left-[15px] bg-[#414040] text-white text-xs py-[2px] px-3">
                  Sold Out
                </div>
              )}
              {item.discountPercent && (
                <div className="absolute top-[40px] z-20 font-[600] uppercase left-[15px] bg-[#D73F0F] text-white text-xs py-[2px] px-3">
                  -{item.discountPercent}%
                </div>
              )}
              {item.isNewProduct && (
                <div className="absolute top-[15px] z-20 font-[600] uppercase left-[15px] bg-[#156C8C] text-white text-xs py-[2px] px-3">
                  New
                </div>
              )}
              <img
                src={item.smallCardImage}
                alt={item.title}
                className="w-[320px] h-[320px] transition-transform duration-300 group-hover:scale-105"
              />
              <img
                src={item.smallCardHoverImage}
                alt={`${item.title} - Hover`}
                className="absolute inset-0 w-[320px] h-[320px] transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110 transform"
              />
              <OverImageNav />
            </div>
          </Link>

          <div className="flex flex-col items-center justify-center mt-[15px] relative">
            <p className="uppercase text-gray-500">{item.name}</p>
            <p className="text-[18px] my-[6px] text-[#222]">{item.title}</p>

            <div className="relative w-full">
              <div className="flex justify-center items-center gap-[5px] transition-transform duration-300 group-hover:translate-y-5 group-hover:opacity-0">
                <div className="text-[18px] text-[#222]">
                  ${item.newPrice}.00
                </div>
                {item.oldPrice && (
                  <div className="text-gray-400 text-[16px] text-end line-through font-[300]">
                    ${item.oldPrice}.00
                  </div>
                )}
              </div>

              <button className="absolute font-[500] uppercase w-[130px] flex justify-self-center border-b-solid border-b-[2px] border-b-black inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 px-3">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
