import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import { IoMdArrowDropdown } from "react-icons/io";

function Sidebar() {

  const { dark } = useTheme();
  const { isSideBarVisible, toggleSidebar } = useSidebar(false);
  const [resourceVisible, setResourceVisible] = useState(false);
  const [practiceVisible, setPracticeVisible] = useState(false);
  const [realtimeVisible, setRealtimeVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const handleLogout = () => {

    localStorage.removeItem("token");
    //console.log("Token removed");
  }

  return (
    <>
      <div className={` ${dark ? "md:bg-gray-200 bg-transparent duration-300 ease-in-out" : "md:bg-zinc-900 bg-transparent duration-200 ease-in-out"} lg:rounded-xl md:border-none h-[5vh] md:h-[7vh] w-full lg:h-auto lg:py-3 lg:w-full flex justify-end lg:overflow-x-scroll items-center lg:justify-between lg:items-center px-10 lg:px-5 overflow-y-auto sidebar lg:gap-20 z-40`}>
        {/* <div className={`font-Josefin font-semibold ease-in-out duration-200 ${dark ? "text-black" : "text-white"} md:hidden`}>LEARNFINITY</div> */}
        <div className={` w-full hidden ease-in-out duration-200 md:flex gap-10 lg:gap-5 px-10 ${isSideBarVisible ? "lg:px-0" : "lg:px-10"} lg:text-lg ${dark ? "text-black" : "text-white"}`}>
          {/* <p className={`hidden lg:block lg:mb-10 cursor-pointer ease-in-out duration-500 font-bold`} onClick={toggleSidebar} title={isSideBarVisible ? "Tap to expand" : "Tap to collapse"}>{isSideBarVisible ? <HiOutlineMenuAlt4 className="text-2xl transition-transform"  /> : <RxCross1 className="text-2xl transition-transform"/> }</p> */}
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/dashboard" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> Dashboard</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/roadmaps" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> Roadmaps</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/system-design" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> System Design</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/preparation" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={`flex justify-center items-center gap-3 `}> Preparation <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/quiz" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={`flex justify-center items-center gap-3 `}> Quiz <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/documentation/web-development" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> Documentation</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/video-lectures/web-development" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> Video lectures</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/ai-studio/summarize" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> AI Studio</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/doc-studio" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` flex justify-center items-center gap-2`}> Doc Studio  <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/mindmap" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` flex justify-center items-center gap-2`}> Mind Map  <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/events" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` flex justify-center items-center gap-2`}> Events  <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/visualizer" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` flex justify-center items-center gap-2`}> Visualizer  <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/news" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> News</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/ide" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> IDE</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/playground" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> Playground</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/code-collab" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> Code Collab</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/notes/personal" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> Notes</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/resume" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={`flex justify-center items-center gap-3 `}> Resume <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/community/explore" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={`flex justify-center items-center gap-3 `}> Community <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>Beta</span></p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/settings" className={`cursor-pointer flex justify-start items-center gap-2`}><p className={` `}> Settings</p></NavLink></div>
          <div className=' px-5 text-nowrap flex justify-center items-center'><NavLink to="/" className={`cursor-pointer text-red-500 flex justify-start items-center gap-2`}><p className={` `} onClick={handleLogout}> Logout</p></NavLink></div>
        </div>

        <div className={`text-2xl md:text-4xl cursor-pointer ease-in-out duration-200 ${dark ? "text-black" : "text-white"} ${isMenuVisible ? "rotate-0 duration-300" : "rotate-45 duration-300"} md:hidden z-50`} onClick={toggleVisibility}><FaPlus /></div>

        {/* for phone */}
        <div className={`font-Josefin text-lg md:text-xl z-40 h-[100vh] w-full md:hidden ${dark ? "bg-white" : "bg-black"} absolute top-0 left-0 ${dark ? "bg-white text-black" : "bg-black text-white"} flex flex-col justify-center items-start gap-7 md:gap-10 ${isMenuVisible ? "-translate-y-[120vh] duration-500" : "translate-y-0 duration-500"}`}>
          <div className='w-full overflow-y-auto px-10 pt-16 gap-4 h-full flex flex-col justify-start items-start'>
            <NavLink to="/dashboard" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium`}>Dashboard</NavLink>
            <p className={`cursor-pointer font-Titillium flex justify-center items-center gap-2`} onClick={() => setResourceVisible(!resourceVisible)}>Resources <IoMdArrowDropdown className={`text-3xl ${resourceVisible ? "rotate-290deg" : "rotate-[270deg]"} transition-transform duration-200 ease-in-out `} /> </p>
            <div className={`w-full ${resourceVisible ? "block" : "hidden"} h-auto px-4 py-4 flex flex-col justify-center items-start ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out rounded-md`}>
              <NavLink to="/roadmaps" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200 text-[12px]"} font-Titillium`}>Roadmaps</NavLink>
              <NavLink to="/documentation/web-development" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200 text-[12px]"} font-Titillium`}>Documentation</NavLink>
              <NavLink to="/video-lectures/web-development" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200 text-[12px]"} font-Titillium`}>Video Lectures</NavLink>
              <NavLink to="/system-design" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200 text-[12px]"} font-Titillium`}>System Design</NavLink>
            </div>

            <p className={`cursor-pointer font-Titillium flex justify-center items-center gap-2`} onClick={() => setPracticeVisible(!practiceVisible)}>Practice <IoMdArrowDropdown className={`text-3xl ${practiceVisible ? "rotate-290deg" : "rotate-[270deg]"} transition-transform duration-200 ease-in-out `} /> </p>
            <div className={`w-full ${practiceVisible ? "block" : "hidden"} h-auto px-4 py-4 flex flex-col justify-center items-start ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out rounded-md`}>
              <NavLink to="/ide" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} text-[12px] font-Titillium`}>IDE</NavLink>
              <NavLink to="/playground" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} text-[12px] font-Titillium`}>Playground</NavLink>
              <NavLink to="/preparation" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} text-[12px] font-Titillium`}>Preparation <span className={` text-[10px] opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></NavLink>
              <NavLink to="/quiz" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} text-[12px] font-Titillium`}>Quiz <span className={` text-[10px] opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></NavLink>
            </div>

            <p className={`cursor-pointer font-Titillium flex justify-center items-center gap-2`} onClick={() => setRealtimeVisible(!realtimeVisible)}>Real Time <IoMdArrowDropdown className={`text-3xl ${realtimeVisible ? "rotate-290deg" : "rotate-[270deg]"} transition-transform duration-200 ease-in-out `} /> </p>
            <div className={`w-full ${realtimeVisible ? "block" : "hidden"} h-auto px-4 py-4 flex flex-col justify-center items-start ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out rounded-md`}>
            <NavLink to="/code-collab" className={`cursor-pointer font-Titillium ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} text-[12px]`}>Code Collab</NavLink>
            </div>

            <NavLink to="/ai-studio/summarize" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium`}>AI Studio</NavLink>
            <NavLink to="/doc-studio" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium`}>Doc Studio <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></NavLink>
            <NavLink to="/mindmap" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium`}>Mind Map <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></NavLink>
            <NavLink to="/events" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium`}>Events <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></NavLink>
            <NavLink to="/visualizer" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium`}>Visualizer <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></NavLink>
            <NavLink to="/news" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium`}>News</NavLink>

            <NavLink to="/notes/personal" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium`}>Notes</NavLink>
            <NavLink to="/resume" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium`}>Resume <span className={` text-[10px] opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>New</span></NavLink>
            <NavLink to="/community/explore" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium flex justify-center items-center gap-2`}>Community <span className={` text-sm opacity-50 border-[1px] ${dark ? "border-black" : "border-gray-400"} px-3 py-1 rounded-full`}>Beta</span></NavLink>
            <NavLink to="/settings" className={`cursor-pointer ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium`}>Settings</NavLink>
            <NavLink to="/" className={`cursor-pointer text-red-500 ${isSideBarVisible ? "hidden" : "block ease-in-out duration-200"} font-Titillium`} onClick={handleLogout}>Logout</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
