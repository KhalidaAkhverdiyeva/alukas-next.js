import React, { FC, useEffect, useRef, useState } from "react";
import { Range } from "react-range";
import { GoChevronUp } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [openSections, setOpenSections] = useState<string[]>([
    "collections",
    "price",
    "material",
    "colors",
    "size",
    "availability",
  ]);
  const [price, setPrice] = useState([0, 1500]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [availability, setAvailability] = useState({
    inStock: false,
    outOfStock: false,
  });

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
  const handleMaterialChange = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  const handleAvailabilityChange = (type: "inStock" | "outOfStock") => {
    setAvailability((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-screen bg-white text-black transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-[370px]"
      } w-[370px] z-50 overflow-y-auto`}
    >
      <div className="flex justify-between p-[30px]">
        <div className=" text-[24px] font-[500]">Filter</div>
        <TfiClose
          className="text-black text-2xl cursor-pointer w-[35px] h-[35px] p-[8px]"
          onClick={onClose}
        />
      </div>

      <div className="border-b border-gray-300">
        <div
          className="flex text-[24px] justify-between items-center px-[30px] py-[5px] cursor-pointer"
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
          className={` pb-[10px] overflow-hidden  px-[30px] text-[#555] text-[18px] transition-all duration-500 ease-in-out ${
            openSections.includes("collections")
              ? "max-h-[200px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div>All Collection</div>
          <div>Royal Love</div>
          <div>Middle of North</div>
          <div>Morden</div>
          <div>Middle of North</div>
        </div>
      </div>
      <div className="border-b border-gray-300">
        {" "}
        <div
          className="flex text-[24px] justify-between items-center px-[30px] py-[5px] cursor-pointer"
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
          className={`pb-[10px] overflow-hidden px-[30px] h-[100px] text-[#555] text-[18px] transition-all duration-500 ease-in-out ${
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
            onChange={(values) => setPrice(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="w-full h-2 bg-gray-300 rounded-full"
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
                className="h-5 w-5 bg-white  border-black border-[5px] rounded-full cursor-pointer"
                style={{ position: "relative" }}
              />
            )}
          />
        </div>
      </div>
      <div className="border-b border-gray-300">
        <div
          className="flex text-[24px] justify-between items-center px-[30px] py-[5px] cursor-pointer"
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
          className={`pb-[10px] overflow-hidden px-[30px] text-[#555] text-[18px] transition-all duration-500 ease-in-out ${
            openSections.includes("material")
              ? "max-h-[200px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {["Bronze", "Gold", "Silver", "Wool", "Cotton"].map((material) => (
              <label key={material} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedMaterials.includes(material)}
                  onChange={() => handleMaterialChange(material)}
                />
                {material}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300">
        <div
          className="flex text-[24px] justify-between items-center px-[30px] py-[5px] cursor-pointer"
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
          className={`pb-[10px] overflow-hidden px-[30px] text-[#555] text-[18px] transition-all duration-500 ease-in-out ${
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
                onClick={() => handleColorSelect(color)}
                className={`w-8 h-8 rounded-full cursor-pointer border-[1px] border-gray-400 p-[2px] ${
                  selectedColor === color
                    ? "border-black"
                    : "border-transparent"
                }`}
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
          className="flex text-[24px] justify-between items-center px-[30px] py-[5px] cursor-pointer"
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
          className={`pb-[10px] overflow-hidden px-[30px] text-[#555] text-[18px] transition-all duration-500 ease-in-out ${
            openSections.includes("size")
              ? "max-h-[200px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex gap-[10px] flex-wrap">
            {["S", "M", "L", "XL", "12", "14", "16"].map((size) => (
              <div
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`w-[45px] h-[35px] flex items-center justify-center cursor-pointer border-2 ${
                  selectedSize === size ? "border-black" : "border-gray-300"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300">
        <div
          className="flex text-[24px] justify-between items-center px-[30px] py-[5px] cursor-pointer"
          onClick={() => toggleSection("availability")}
        >
          <span>Availability</span>
          <div
            className={`transition-transform duration-500 ${
              openSections.includes("availability") ? "rotate-180" : "rotate-0"
            }`}
          >
            <GoChevronUp />
          </div>
        </div>
        <div
          className={`pb-[10px] overflow-hidden px-[30px] text-[#555] text-[18px] transition-all duration-500 ease-in-out ${
            openSections.includes("availability")
              ? "max-h-[200px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            <label className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={availability.inStock}
                  onChange={() => handleAvailabilityChange("inStock")}
                />
                In Stock
              </div>
              <span>(10) </span>
            </label>
            <label className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={availability.outOfStock}
                  onChange={() => handleAvailabilityChange("outOfStock")}
                />
                Out of Stock
              </div>
              <span>(5) </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
