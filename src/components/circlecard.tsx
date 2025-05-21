import Image from "next/image";
import React from "react";
import { CircleCardProps } from "../type/circlecardtype";

const CircleCard: React.FC<CircleCardProps> = ({ imageUrl, description }) => {
  return (
    <div className="flex flex-col items-center justify-center group">
      <div className="overflow-hidden rounded-full w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]">
        <Image
          src={imageUrl}
          alt=""
          width={180}
          height={180}
          className="rounded-full w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <p className="uppercase mt-4 md:mt-[32px] text-sm md:text-base font-[500] border-b-solid border-b-gray-300 border-b-[1px] text-center">
        {description}
      </p>
    </div>
  );
};

export default CircleCard;
