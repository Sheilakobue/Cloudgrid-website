"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(false);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-7 h-3 flex items-center dark:bg-gray-600 bg-yellow-500 cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={10} />
      <div className="absolute bg-white dark:bg-meduim w-3 h-3 rounded-full shadow-md transform transition-transform duration-300"
      style={darkMode? {left:'2px'} : {right: '2px'}
    }
      ></div>
      <BsSunFill className='ml-auto text-yellow-500' size={10}/>
    </div>
  );
}
