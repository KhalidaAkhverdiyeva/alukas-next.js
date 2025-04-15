import { Journal } from "@/type/jorunalProps";
import Image from "next/image";
import React from "react";

const JournalCard: React.FC<Journal> = ({ image, title }) => {
  return (
    <div className="py-[20px]">
      <div className="relative ">
        <Image src={image} alt="" className="relative" width={930} height={604} />
        <p className="uppercase bg-[#222] absolute top-4 left-4 text-white text-[14px] font-[500] px-[8px]">
          Accessories
        </p>
      </div>
      <div className="py-[20px]">
        <div className="flex gap-[20px]">
          <div className="uppercase pb-[10px]">post by alukas shopify</div>
          <div className="text-[#757575]">Mar 06 2024</div>
        </div>
        <h4 className="text-[26px] text-[#222] font-[500] mb-[10px] ">
          {title}
        </h4>
        <div className="border-b-solid  border-b-[2px] border-b-black w-[140px] text-[18px] cursor-pointer">
          Continue Reading
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
