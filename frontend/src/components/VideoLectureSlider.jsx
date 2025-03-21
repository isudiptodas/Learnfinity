import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from "../context/ThemeContext";

function VideoLectureSlider() {

    const { dark } = useTheme();
    
    return (
        <>
            <div className={`${dark ? "text-black" : "text-white"} h-24 sm:h-28 md:h-32 lg:h-auto py-7 lg:py-5 w-full font-light flex justify-between items-center overflow-x-auto overflow-y-hidden gap-10 text-sm whitespace-nowrap lg:justify-start ${dark ? "border-b-2 border-black" : "border-b-2 border-white"}`}>
                <NavLink to="/video-lectures/web-development" className={({ isActive }) => `cursor-pointer px-4 py-2 rounded-md ${isActive ? "bg-cyan-600 text-white" : "font-normal"} ${dark ? "text-black" : "text-white"}`}>Web Development</NavLink>
                <NavLink to="/video-lectures/app-development" className={({ isActive }) => `cursor-pointer  px-4 py-2 rounded-md ${isActive ? "bg-cyan-600 text-white" : "font-normal"} ${dark ? "text-black" : "text-white"}`}>App Development</NavLink>
                <NavLink to="/video-lectures/devops" className={({ isActive }) => `cursor-pointer  px-4 py-2 rounded-md ${isActive ? "bg-cyan-600 text-white" : "font-normal"} ${dark ? "text-black" : "text-white"}`}>DevOps</NavLink>
                <NavLink to="/video-lectures/design" className={({ isActive }) => `cursor-pointer  px-4 py-2 rounded-md ${isActive ? "bg-cyan-600 text-white" : "font-normal"} ${dark ? "text-black" : "text-white"}`}>Design</NavLink>
            </div>
        </>
    )
}

export default VideoLectureSlider
