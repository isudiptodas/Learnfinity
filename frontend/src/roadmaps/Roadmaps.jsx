import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import Accordian from "../components/Accordian";
import { roadmaps } from '../roadmps.js';

function Roadmaps() {

  const { dark } = useTheme();

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const {isSideBarVisible, toggleSidebar} = useSidebar(false);

  const toggleVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <>
      <div className={`h-[95vh] lg:h-auto lg:py-3 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative overflow-x-hidden overflow-y-hidden lg:px-10 gap-5`} >

        {/* sidebar section */}

        <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
        <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

        <Sidebar/>

        {/* main content section */}

        <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-10 content overflow-auto flex flex-col justify-start items-center gap-10 lg:gap-5`}>

          {roadmaps.map((roadmap) => {
            return <Accordian 
            key={roadmap.id} 
            topic={roadmap.title} 
            detail={
              roadmap.description.split('\n').map((line, index) => (
                <p key={index} style={{ marginBottom: '1.5rem' }}>{line}</p>
              ))
            }
            />
          })}
        </div>
      </div>
    </>
  )
}

export default Roadmaps
