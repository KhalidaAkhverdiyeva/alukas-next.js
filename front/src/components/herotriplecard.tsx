import { HeroCardProps } from "@/type/herocardprops";
import React from "react";

const HeroCard: React.FC<HeroCardProps> = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex-1 relative group overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="relative w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute top-[40px] left-[40px] text-white transition-opacity duration-300 group-hover:opacity-100 opacity-80">
        <h2 className="text-[14px]">{title}</h2>
        <h4 className="text-[32px] mb-[10px]">{subtitle}</h4>
        <p
          className="border-b-solid border-b-[3px] w-[90px] border-b-white cursor-pointer"
          onClick={onButtonClick}
        >
          {buttonText}
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
