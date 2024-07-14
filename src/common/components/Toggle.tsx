"use client";

import React, { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  ); // Initialize with "light" if no theme is set in localStorage

  // Effect to apply dark mode based on initial theme setting
  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const newTheme = isDarkMode ? "light" : "dark"; // Toggle between light and dark mode
    localStorage.setItem("theme", newTheme); // Update localStorage with new theme
    setTheme(newTheme); // Update state with new theme
  };

  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={theme === "dark"}
          onChange={toggleDarkMode}
        />
        <div className="w-20 h-10 bg-breakerDay-200 rounded-full dark:bg-gray-700 relative">
          <div
            className={`absolute top-[1.8px] left-0.5 w-9 h-9 rounded-full shadow transform transition-transform duration-300 flex items-center justify-center ${
              theme === "dark" ? "translate-x-10 bg-gray-600" : "bg-breakerDay-100"
            }`}
          ></div>
          <IoMoon
            className={`absolute right-[8px] top-[8.5px] ${
              theme === "dark" ? "text-breakerDay-600 " : "text-gray-100"
            }`}
            size={24}
          />
          <MdSunny
            className={`absolute left-[7px] top-[9px] ${
              theme === "dark" ? "text-white" : "text-orange-500"
            } dark:text-gray-300`}
            size={24}
          />
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
