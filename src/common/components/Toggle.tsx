"use client";

import React, { useState } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.body; // Reference the document body
    if (!isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  };


  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <div className="w-20 h-10 bg-breakerDay-200 rounded-full dark:bg-gray-700 relative">
          <div
            className={`absolute top-[1.8px] left-0.5 w-9 h-9 rounded-full shadow transform transition-transform duration-300 flex items-center justify-center ${
              isDarkMode ? "translate-x-10 bg-gray-600" : "bg-breakerDay-100"
            }`}
          >
            {/* <IoMoon className={`text-white ${isDarkMode ? 'block' : 'hidden'}`} size={24} />
            <MdSunny className={`text-white ${isDarkMode ? 'hidden' : 'block'}`} size={24} /> */}
          </div>
          <IoMoon
            className={`absolute right-[8px] top-[8.5px] ${
              isDarkMode ? "text-breakerDay-600 " : "text-gray-100"
            }`}
            size={24}
          />
          <MdSunny
            className={`absolute left-[7px] top-[9px] ${
              isDarkMode ? "text-white" : "text-orange-500"
            } dark:text-gray-300`}
            size={24}
          />
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
