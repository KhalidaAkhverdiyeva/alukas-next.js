import Image from "next/image";
import React from "react";
import { CircleCardProps } from "../type/circlecardtype";

const CircleCard: React.FC<CircleCardProps> = ({ imageUrl, description }) => {
  return (
    <div className="flex flex-col items-center justify-center group">
      <div className="overflow-hidden rounded-full w-[180px] h-[180px]">
        <Image
          src={imageUrl}
          alt=""
          width={180}
          height={180}
          className="rounded-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <p className="uppercase mt-[32px] font-[500] border-b-solid border-b-gray-300 border-b-[1px]">
        {description}
      </p>
    </div>
  );
};

export default CircleCard;
