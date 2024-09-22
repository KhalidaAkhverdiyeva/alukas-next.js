import { Products } from "@/type/productsarray";
import { FC } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

const SliderButton: FC<Products> = ({
  products,
  currentIndex,
  setCurrentIndex,
}) => {
  const hovered = true;
  const nextSlide = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className={`absolute group left-[25px] top-[350px] cursor-pointer transform -translate-y-1/2 transition-all duration-300 rounded-full 
          ${hovered ? "opacity-100" : "opacity-0"} 
          ${
            currentIndex === 0
              ? "pointer-events-none bg-gray-200"
              : "bg-white hover:bg-black transition-colors duration-300"
          } 
          p-2`}
      >
        <HiOutlineChevronLeft
          className={`transition-colors duration-300 ${
            currentIndex === 0
              ? "text-gray-500"
              : "text-black group-hover:text-white"
          }`}
          size={24}
        />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentIndex >= products.length - 4}
        className={`absolute group right-[25px] top-[350px] cursor-pointer transform -translate-y-1/2 transition-all duration-300 rounded-full 
          ${hovered ? "opacity-100" : "opacity-0"} 
          ${
            currentIndex >= products.length - 4
              ? "pointer-events-none bg-gray-200"
              : "bg-white hover:bg-black transition-colors duration-300"
          } 
          p-2`}
      >
        <HiOutlineChevronRight
          className={`transition-colors duration-300 ${
            currentIndex >= products.length - 4
              ? "text-gray-500"
              : "text-black group-hover:text-white"
          }`}
          size={24}
        />
      </button>
    </div>
  );
};

export default SliderButton;
