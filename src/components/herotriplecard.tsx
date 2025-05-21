import { HeroCardProps } from "@/type/herocardprops";
import Image from "next/image";
import React from "react";

const HeroCard: React.FC<HeroCardProps> = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex-1 relative group overflow-hidden aspect-[4/3] md:aspect-[16/9]">
      <Image
        width={436}
        height={300}
        src={imageUrl}
        alt={title}
        className="relative w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute top-[20px] md:top-[40px] left-[20px] md:left-[40px] text-white transition-opacity duration-300 group-hover:opacity-100 opacity-80">
        <h2 className="text-[12px] md:text-[14px]">{title}</h2>
        <h4 className="text-[20px] md:text-[32px] mb-[5px] md:mb-[10px]">
          {subtitle}
        </h4>
        <p
          className="border-b-solid border-b-[2px] md:border-b-[3px] w-[80px] md:w-[90px] border-b-white cursor-pointer text-[12px] md:text-[14px]"
          onClick={onButtonClick}
        >
          {buttonText}
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
