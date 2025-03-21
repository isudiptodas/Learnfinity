import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from "../context/ThemeContext";

function DocumentationSlider() {

  const { dark } = useTheme();

  return (
    <>
      <div className={`${dark ? "text-black" : "text-white"} h-24 sm:h-28 md:h-32 py-8 lg:h-auto lg:py-4 w-full font-light flex justify-start lg:justify-start items-center overflow-x-auto overflow-y-hidden gap-10 text-sm whitespace-nowrap ${dark ? "border-b-2 border-black" : "border-b-2 border-white"}`}>
        <NavLink to="/documentation/web-development" className={({ isActive }) => `cursor-pointer  px-4 py-2 rounded-md ${isActive ? "bg-cyan-600 text-white" : "font-normal"} ${dark ? "text-black" : "text-white"}`}>Web Development</NavLink>
        <NavLink to="/documentation/app-development" className={({ isActive }) => `cursor-pointer  px-4 py-2 rounded-md ${isActive ? "bg-cyan-600 text-white" : "font-normal"} ${dark ? "text-black" : "text-white"}`}>App Development</NavLink>
        <NavLink to="/documentation/devops" className={({ isActive }) => `cursor-pointer  px-4 py-2 rounded-md ${isActive ? "bg-cyan-600 text-white" : "font-normal"} ${dark ? "text-black" : "text-white"}`}>DevOps</NavLink>
      </div>
    </>
  )
}

export default DocumentationSlider
