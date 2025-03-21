import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

function Development() {

    const { dark } = useTheme();
    const navigate = useNavigate();

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    const openPage = (link) => {
        navigate(link);
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

                    <h1 className={`text-center ${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-Titillium text-2xl lg:text-4xl my-5 font-bold`}>Choose your section : </h1>

                    <div className="w-full h-auto py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-5">

                        <div on className={`w-full px-5 h-36 rounded-md ${dark ? "bg-white" : "bg-black"} duration-200 overflow-hidden ease-in-out hover:shadow-lg flex flex-col justify-evenly px-5 items-center`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-xl lg:text-2xl text-center`}>ReactJs</p>
                            <p className={`${dark ? "bg-black text-white" : "bg-white text-black"} px-5 md:px-8 cursor-pointer py-2 text-center duration-200 ease-in-out rounded-full text-[12px]`} onClick={() => openPage('/quiz/development/react')}>Start Quiz</p>
                        </div>

                        <div on className={`w-full px-5 h-36 rounded-md ${dark ? "bg-white" : "bg-black"} duration-200 overflow-hidden ease-in-out hover:shadow-lg flex flex-col justify-evenly px-5 items-center`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-xl lg:text-2xl text-center`}>HTML</p>
                            <p className={`${dark ? "bg-black text-white" : "bg-white text-black"} px-5 md:px-8 cursor-pointer py-2 text-center duration-200 ease-in-out rounded-full text-[12px]`} onClick={() => openPage('/quiz/development/html')}>Start Quiz</p>
                        </div>

                        <div className={`w-full px-5 h-36 rounded-md ${dark ? "bg-white" : "bg-black"} duration-200 overflow-hidden ease-in-out hover:shadow-lg flex flex-col justify-evenly px-5 items-center`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-xl lg:text-2xl text-center`}>CSS</p>
                            <p className={`${dark ? "bg-black text-white" : "bg-white text-black"} px-5 md:px-8 cursor-pointer py-2 text-center duration-200 ease-in-out rounded-full text-[12px]`} onClick={() => openPage('/quiz/development/css')}>Start Quiz</p>
                        </div>

                        <div className={`w-full px-5 h-36 rounded-md ${dark ? "bg-white" : "bg-black"} duration-200 overflow-hidden ease-in-out hover:shadow-lg flex flex-col justify-evenly px-5 items-center`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-xl lg:text-2xl text-center`}>JavaScript</p>
                            <p className={`${dark ? "bg-black text-white" : "bg-white text-black"} px-5 md:px-8 cursor-pointer py-2 text-center duration-200 ease-in-out rounded-full text-[12px]`} onClick={() => openPage('/quiz/development/js')}>Start Quiz</p>
                        </div>

                        <div className={`w-full px-5 h-36 rounded-md ${dark ? "bg-white" : "bg-black"} duration-200 overflow-hidden ease-in-out hover:shadow-lg flex flex-col justify-evenly px-5 items-center`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-xl lg:text-2xl text-center`}>TypeScript</p>
                            <p className={`${dark ? "bg-black text-white" : "bg-white text-black"} px-5 md:px-8 cursor-pointer py-2 text-center duration-200 ease-in-out rounded-full text-[12px]`} onClick={() => openPage('/quiz/development/ts')}>Start Quiz</p>
                        </div>

                        <div className={`w-full px-5 h-36 rounded-md ${dark ? "bg-white" : "bg-black"} duration-200 overflow-hidden ease-in-out hover:shadow-lg flex flex-col justify-evenly px-5 items-center`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-xl lg:text-2xl text-center`}>NodeJs</p>
                            <p className={`${dark ? "bg-black text-white" : "bg-white text-black"} px-5 md:px-8 cursor-pointer py-2 text-center duration-200 ease-in-out rounded-full text-[12px]`} onClick={() => openPage('/quiz/development/node')}>Start Quiz</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Development
