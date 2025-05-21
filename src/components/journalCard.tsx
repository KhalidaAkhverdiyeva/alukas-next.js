import { Journal } from "@/type/jorunalProps";
import Image from "next/image";
import React from "react";

const JournalCard: React.FC<Journal> = ({ image, title }) => {
  return (
    <div className="py-[10px] md:py-[20px]">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="relative w-full h-auto"
          width={930}
          height={604}
        />
        <p className="uppercase bg-[#222] absolute top-2 md:top-4 left-2 md:left-4 text-white text-[12px] md:text-[14px] font-[500] px-[6px] md:px-[8px]">
          Accessories
        </p>
      </div>
      <div className="py-[15px] md:py-[20px]">
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px]">
          <div className="uppercase text-[12px] md:text-[14px]">
            post by alukas shopify
          </div>
          <div className="text-[#757575] text-[12px] md:text-[14px]">
            Mar 06 2024
          </div>
        </div>
        <h4 className="text-[18px] md:text-[26px] text-[#222] font-[500] my-[10px]">
          {title}
        </h4>
        <div className="border-b-solid border-b-[2px] border-b-black w-[120px] md:w-[140px] text-[14px] md:text-[18px] cursor-pointer hover:opacity-70 transition-opacity duration-300">
          Continue Reading
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
