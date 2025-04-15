import { Review } from "@/type/reviewtype";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ReviewCard: React.FC<Review> = ({ title, review, user }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="flex-1 bg-white p-[40px]">
      <div>
        <div className="bg-[#222] w-[50px] h-[50px] rounded-full flex justify-center items-center">
          <ImQuotesLeft className="text-white" />
        </div>
        <div className="text-[18px] font-[500] mt-[15px]">{title}</div>
      </div>
      <p className="text-[#555] text-[18px] my-[20px]">{review}</p>
      <div className="flex justify-between">
        <h6 className="font-[500]">- {user} -</h6>
        <div className="flex ml-2">
          {stars.map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-[#F68773]"
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
