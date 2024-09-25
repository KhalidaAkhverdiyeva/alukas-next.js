import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="animate-pulse w-full h-64 bg-gray-200 rounded-md mb-4"></div>

      <div className="flex justify-center w-full mb-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center mx-2">
            <div className="animate-pulse w-[180px] h-[180px] bg-gray-200 rounded-full mb-4"></div>
            <div className="animate-pulse w-24 h-6 bg-gray-200 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
