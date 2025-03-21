import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

function Preparation() {


  const { dark } = useTheme();

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const { isSideBarVisible, toggleSidebar } = useSidebar(false);

  const toggleVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <>
      <Toaster />
      <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

        {/* sidebar section */}

        <Sidebar />
        <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
        <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

        {/* main content section */}

        <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 content overflow-y-auto flex flex-col justify-start items-center gap-2 lg:gap-5 relative`}>

         <h1 className={`text-center ${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-Titillium text-2xl lg:text-4xl font-bold`}>Be the best at every possible way</h1>
         <p className={`text-center ${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-Titillium text-sm`}>We will help you land your best interview experience with our structured preparation guide</p>

         <div className="w-full h-auto px-2 py-2 mt-5 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5 lg:gap-10">
            
            <div className={`h-44 w-full bg-gradient-to-br from-blue-400 via-pink-600 to-purple-600 rounded-lg overflow-hidden p-1`}>
              <div className={`w-full h-full ${dark ? "bg-white" : "bg-black"} rounded-lg flex flex-col px-3 py-5 justify-between items-center gap-2`}>
                <p className={`${dark ? "text-black" : "text-white"} text-2xl font-Titillium`}>DSA Preparation</p>
                <p className={`${dark ? "text-black" : "text-white"} px-5 text-[10px] md:text-sm text-center font-Titillium`}>Get started with company wise DSA questions, DSA practice sheets and more.</p>
                <Link to='/preparation/dsa' className={`w-full h-auto py-2 rounded-full flex justify-center items-center gap-2 cursor-pointer hover:opacity-85 duration-200 ease-in-out hover:gap-6 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>Start <IoIosArrowRoundForward />  </Link>
              </div>
            </div>

            <div className={`h-44 w-full bg-gradient-to-br from-blue-400 via-pink-600 to-purple-600 rounded-lg overflow-hidden p-1`}>
              <div className={`w-full h-full ${dark ? "bg-white" : "bg-black"} rounded-lg flex flex-col px-3 py-5 justify-between items-center gap-2`}>
                <p className={`${dark ? "text-black" : "text-white"} text-2xl font-Titillium`}>Interview Preparation</p>
                <p className={`${dark ? "text-black" : "text-white"} px-5 text-[10px] md:text-sm text-center font-Titillium`}>Ace your next interview with our interview preparation guide and questions.</p>
                <Link to='/preparation/interview' className={`w-full h-auto py-2 rounded-full flex justify-center items-center gap-2 cursor-pointer hover:opacity-85 duration-200 ease-in-out hover:gap-6 ${dark ? "bg-black text-white" : "bg-white text-black"}`}>Start <IoIosArrowRoundForward />  </Link>
              </div>
            </div>

         </div>

        </div>
      </div>
    </>
  )
}

export default Preparation
