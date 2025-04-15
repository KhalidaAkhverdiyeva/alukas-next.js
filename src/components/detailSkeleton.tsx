import React from "react";

const DetailSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col items-center justify-center py-[20px]">
      <div className="w-[1360px] justify-center flex flex-col items-between pb-[100px]">
        <div className="flex gap-[80px]">
          <div className="flex gap-[15px] sticky top-[210px] h-full">
            <div className="flex flex-col gap-[10px]">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="w-[80px] h-[80px] bg-gray-300 rounded"
                ></div>
              ))}
            </div>

            <div className="w-[555px] h-[555px] bg-gray-300 rounded"></div>
          </div>

          <div className="flex-1 overflow-auto h-full">
            <div className="border-b-[1px] border-b-gray-300 border-b-solid py-[10px]">
              <div className="h-[20px] w-[200px] bg-gray-300 mb-[10px] rounded"></div>
              <div className="w-[60px] h-[20px] bg-gray-300 mb-[5px] rounded"></div>
              <div className="h-[30px] w-[250px] bg-gray-300 mb-[10px] rounded"></div>

              <div className="flex text-[18px] pb-[15px] pt-[5px] ml-[70px] gap-[10px] items-center">
                <div className="h-[18px] w-[100px] bg-gray-300 rounded"></div>
                <div className="h-[18px] w-[60px] bg-gray-300 rounded"></div>
              </div>

              <div className="flex items-center gap-[10px] py-[10px]">
                <div className="h-[20px] w-[80px] bg-gray-300 rounded"></div>
                <div className="h-[16px] w-[60px] bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="py-[20px]">
              <div className="h-[20px] w-[250px] bg-gray-300 rounded mb-[10px]"></div>
              <div className="space-y-[5px]">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="h-[16px] w-full bg-gray-300 rounded"
                  ></div>
                ))}
              </div>
            </div>

            <div className="h-[50px] w-full bg-gray-300 rounded my-[20px]"></div>
            <div className="h-[50px] w-full bg-gray-300 rounded my-[10px]"></div>

            <div className="py-[10px] border-t-solid border-t-[1px] border-t-gray-300">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[10px] py-[5px]"
                >
                  <div className="h-[20px] w-[80px] bg-gray-300 rounded"></div>
                  <div className="h-[20px] w-[150px] bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
