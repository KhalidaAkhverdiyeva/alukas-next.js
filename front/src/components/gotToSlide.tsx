import { GotToSlideProps } from "@/type/gotoslides";
import React, { FC } from "react";

const GotToSlide: FC<GotToSlideProps> = ({
  products,
  currentIndex,
  setCurrentIndex,
}) => {
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="absolute bottom-[-30px] left-0 right-0 flex justify-center z-10">
      {products.slice(0, 5).map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-[6px] h-[6px] rounded-full mx-2 transition-all duration-300 ${
            currentIndex === index
              ? "bg-black"
              : "bg-transparent border-solid border-black border-[1px]"
          }`}
        ></button>
      ))}
    </div>
  );
};

export default GotToSlide;
