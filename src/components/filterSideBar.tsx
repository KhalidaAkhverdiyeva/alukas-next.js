import React, { FC, useEffect, useRef, useState } from "react";
import { Range } from "react-range";
import { GoChevronUp } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange: (filterType: string, value: string) => void;
  price: [number, number];
  onPriceChange: (values: [number, number]) => void;
}
const Sidebar: FC<SidebarProps> = ({
  isOpen,
  onClose,
  onFilterChange,
  price,
  onPriceChange,
}) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [openSections, setOpenSections] = useState<string[]>([
    "collections",
    "price",
    "material",
    "colors",
    "size",
    "availability",
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handlePriceChange = (values: number[]) => {
    if (values.length === 2) {
      const newPrice: [number, number] = [values[0], values[1]];
      onPriceChange(newPrice);
    }
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-[50]" />}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen px-[25px] bg-white text-black transition-transform sidebar duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-[370px]"
        } w-[370px] z-50 overflow-y-auto`}
      >
        <div className="flex justify-between py-[30px]">
          <div className=" text-[24px] font-[500]">Filter</div>
          <TfiClose
            className="text-black text-2xl cursor-pointer w-[35px] h-[35px] p-[8px]"
            onClick={onClose}
          />
        </div>

        <div className="border-b border-gray-300 ">
          <div
            className="flex text-[24px] justify-between items-center   cursor-pointer"
            onClick={() => toggleSection("collections")}
          >
            <span>Collections</span>
            <div
              className={`transition-transform duration-500 ${
                openSections.includes("collections") ? "rotate-180" : "rotate-0"
              }`}
            >
              <GoChevronUp />
            </div>
          </div>

          <div
            className={` pb-[10px] overflow-hidden  text-[#555] text-[18px] transition-all duration-500 ease-in-out ${
              openSections.includes("collections")
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div
              className="cursor-pointer py-[5px]"
              onClick={() => onFilterChange("collectionName", "")}
            >
              All Collection
            </div>
            <div
              onClick={() => onFilterChange("collectionName", "Royal Love")}
              className="cursor-pointer"
            >
              Royal Love
            </div>
            <div
              className="cursor-pointer pb-[5px] "
              onClick={() => onFilterChange("collectionName", "Morden")}
            >
              Morden
            </div>
            <div
              className="cursor-pointer pb-[5px]"
              onClick={() =>
                onFilterChange("collectionName", "Middle of North")
              }
            >
              Middle of North
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300">
          <div
            className="flex text-[24px] justify-between items-center  py-[5px] cursor-pointer"
            onClick={() => toggleSection("price")}
          >
            <span>Price</span>
            <div
              className={`transition-transform duration-500 ${
                openSections.includes("price") ? "rotate-180" : "rotate-0"
              }`}
            >
              <GoChevronUp />
            </div>
          </div>
          <div
            className={`pb-[10px] overflow-hidden px-[20px] py-[10px] h-[100px] text-[#555] text-[18px] transition-all duration-500 ease-in-out ${
              openSections.includes("price")
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="mb-4">
              Price: ${price[0].toFixed(2)} - ${price[1].toFixed(2)}
            </div>

            <Range
              step={10}
              min={0}
              max={1500}
              values={price}
              onChange={handlePriceChange}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="w-full h-2 bg-gray-300 rounded-full "
                  style={{ position: "relative" }}
                >
                  <div
                    className="absolute top-0 h-full bg-black rounded-full"
                    style={{
                      left: `${(price[0] / 1500) * 100}%`,
                      width: `${((price[1] - price[0]) / 1500) * 100}%`,
                    }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="h-5 w-5 bg-white border-black border-[5px] rounded-full cursor-pointer"
                  style={{ position: "relative" }}
                />
              )}
            />
          </div>
        </div>
        <div className="border-b border-gray-300">
          <div
            className="flex text-[24px] justify-between items-center  py-[5px] cursor-pointer"
            onClick={() => toggleSection("material")}
          >
            <span>Material</span>
            <div
              className={`transition-transform duration-500 ${
                openSections.includes("material") ? "rotate-180" : "rotate-0"
              }`}
            >
              <GoChevronUp />
            </div>
          </div>
          <div
            className={`pb-[10px] overflow-hidden  text-[#555] text-[18px] transition-all duration-500 ease-in-out ${
              openSections.includes("material")
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2">
              {["bronze", "gold", "silver", "wool", "cotton"].map(
                (material) => (
                  <label
                    key={material}
                    className="flex items-center capitalize"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={material}
                      onChange={() => onFilterChange("material", `${material}`)}
                    />
                    {material}
                  </label>
                )
              )}
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300">
          <div
            className="flex text-[24px] justify-between items-center  py-[5px] cursor-pointer"
            onClick={() => toggleSection("colors")}
          >
            <span>Colors</span>
            <div
              className={`transition-transform duration-500 ${
                openSections.includes("colors") ? "rotate-180" : "rotate-0"
              }`}
            >
              <GoChevronUp />
            </div>
          </div>
          <div
            className={`pb-[10px] overflow-hidden  text-[#555] text-[18px] transition-all duration-500 ease-in-out ${
              openSections.includes("colors")
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex gap-[10px] flex-wrap">
              {[
                "#000000",
                "#3F8AD1",
                "#FFD700",
                "#7ABDB5",
                "#CE2E2E",
                "#C0C0C0",
                "#E2C28F",
              ].map((color) => (
                <div
                  key={color}
                  onClick={() => onFilterChange("color", `${color}`)}
                  className={`w-8 h-8 rounded-full cursor-pointer border-[1px] border-gray-400 p-[2px] 
                //   selectedColor === color
                //     ? "border-black"
                //     : "border-transparent"}`}
                  style={{
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300">
          <div
            className="flex text-[24px] justify-between items-center  py-[5px] cursor-pointer"
            onClick={() => toggleSection("size")}
          >
            <span>Size</span>
            <div
              className={`transition-transform duration-500 ${
                openSections.includes("size") ? "rotate-180" : "rotate-0"
              }`}
            >
              <GoChevronUp />
            </div>
          </div>
          <div
            className={`pb-[10px] overflow-hidden  text-[#555] text-[18px] transition-all duration-500 ease-in-out ${
              openSections.includes("size")
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex gap-[10px] flex-wrap">
              {["S", "M", "L", "XL", "12", "14", "16"].map((size) => (
                <div
                  key={size}
                  onClick={() => onFilterChange("size", `${size}`)}
                  className={
                    "w-[45px] h-[35px] flex items-center justify-center cursor-pointer border-2  border-gray-300"
                  }
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
