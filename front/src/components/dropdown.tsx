"use client";

import { useState, useRef } from "react";

interface DropdownMenuProps {
  items: string[];
  label: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const parentRef = useRef<HTMLLIElement>(null);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => {
    setTimeout(() => {
      if (
        !parentRef.current?.contains(document.activeElement) &&
        !dropdownRef.current?.contains(document.activeElement)
      ) {
        setIsOpen(false);
      }
    }, 100);
  };

  return (
    <li
      className="relative flex gap-2 items-center cursor-pointer z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={parentRef}
    >
      <span className="hover-effect">{label}</span>
      <svg
        className={`w-4 h-4 text-gray-500 transition-transform duration-300 ease-in-out ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>

      <ul
        className={`absolute left-0 top-full w-40 bg-white shadow-lg rounded-md transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ transform: isOpen ? "translateY(0)" : "translateY(10px)" }}
        ref={dropdownRef}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropdownMenu;
