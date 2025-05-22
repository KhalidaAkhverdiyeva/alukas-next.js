import React from "react";

const DetailSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col items-center justify-center py-[20px] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1360px] justify-center flex flex-col items-between pb-[50px] md:pb-[100px]">
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px]">
          <div className="flex flex-col lg:flex-row gap-[15px] lg:sticky lg:top-[210px] h-full">
            <div className="flex flex-row lg:flex-col gap-[10px] overflow-x-auto lg:overflow-x-visible">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="w-[80px] h-[80px] bg-gray-300 rounded flex-shrink-0"
                ></div>
              ))}
            </div>

            <div className="w-full lg:w-[555px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[555px] bg-gray-300 rounded"></div>
          </div>

          <div className="flex-1 overflow-auto h-full w-full">
            <div className="border-b-[1px] border-b-gray-300 border-b-solid py-[10px]">
              <div className="h-[20px] w-[200px] bg-gray-300 mb-[10px] rounded"></div>
              <div className="w-[60px] h-[20px] bg-gray-300 mb-[5px] rounded"></div>
              <div className="h-[30px] w-[250px] bg-gray-300 mb-[10px] rounded"></div>

              <div className="flex flex-wrap text-[16px] sm:text-[18px] pb-[15px] pt-[5px] ml-0 sm:ml-[70px] gap-[10px] items-center">
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

            <div className="flex flex-col sm:flex-row gap-[10px] w-full h-auto sm:h-[50px]">
              <div className="flex flex-1 w-full border-solid border-[2px] border-gray-300">
                <div className="w-[50px] h-[50px] bg-gray-300"></div>
                <div className="flex-1 bg-gray-300"></div>
                <div className="w-[50px] h-[50px] bg-gray-300"></div>
              </div>

              <div className="w-full bg-gray-300 h-[50px]"></div>

              <div className="flex flex-1 w-full gap-[5px]">
                <div className="w-[50px] h-[50px] bg-gray-300"></div>
                <div className="w-[50px] h-[50px] bg-gray-300"></div>
              </div>
            </div>

            <div className="h-[50px] w-full bg-gray-300 rounded my-[20px]"></div>

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
