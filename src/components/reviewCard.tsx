import { Review } from "@/type/reviewtype";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ReviewCard: React.FC<Review> = ({ title, review, user }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="flex-1 bg-white p-[20px] md:p-[40px]">
      <div>
        <div className="bg-[#222] w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center">
          <ImQuotesLeft className="text-white w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
        </div>
        <div className="text-[16px] md:text-[18px] font-[500] mt-[10px] md:mt-[15px]">
          {title}
        </div>
      </div>
      <p className="text-[#555] text-[14px] md:text-[18px] my-[15px] md:my-[20px]">
        {review}
      </p>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
        <h6 className="font-[500] text-[14px] md:text-[16px]">- {user} -</h6>
        <div className="flex">
          {stars.map((_, index) => (
            <svg
              key={index}
              className="w-3 h-3 md:w-4 md:h-4 text-[#F68773]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15.27L16.18 19 14.54 12.97 20 8.64 13.81 8.34 10 2 6.19 8.34 0 8.64 5.46 12.97 3.82 19z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
