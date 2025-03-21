import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function NoteDropdown({ onSelect }) {
  const { dark } = useTheme(); // Access the current theme
  const [selectedValue, setSelectedValue] = useState("personal");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "work", label: "Work" },
    { value: "tech", label: "Tech" },
    { value: "personal", label: "Personal" },
    { value: "everyday", label: "Everyday" },
  ];

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    onSelect(value); // Notify the parent about the selected value
  };

  return (
    <div
      className={`w-full space-y-2 relative ${
        dark ? "text-black" : "text-white"
      } shadow-lg cursor-pointer`}
    >
      <div
        className={`w-full cursor-pointer border rounded-md ${
          dark
            ? " focus-within:ring-gray-500"
            : " focus-within:ring-pink-500"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          id="dropdown"
          className={`outline-none flex items-center justify-between px-3 py-2 duration-300 ease-in-out ${
            dark ? "" : "bg-black"
          }`}
        >
          {options.find((option) => option.value === selectedValue)?.label ||
            "Select a category"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <ul
          className={`absolute z-10 w-full mt-1 border rounded-md shadow-lg ${
            dark ? "text-black bg-white" : "bg-black text-white"
          } duration-300 ease-in-out`}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-3 py-2 ${
                dark
                  ? "hover:bg-gray-500 hover:text-white"
                  : "hover:bg-zinc-600"
              } cursor-pointer`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
