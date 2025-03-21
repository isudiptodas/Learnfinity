import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import webdev from '../assets/webdev.png';
import programming from '../assets/programming.png';
import cs from '../assets/cs.png';
import db from '../assets/db.png';

function Quiz() {

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

                <h1 className={`text-center ${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-Titillium my-5 text-2xl lg:text-4xl font-bold`}>Test your knowledge in different categories</h1>

                    <div className="w-full h-auto py-2 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5">

                        <div onClick={() => openPage('/quiz/development')} className={`w-full h-52 rounded-md ${dark ? "bg-white" : "bg-black"} duration-200 overflow-hidden ease-in-out hover:shadow-lg flex justify-evenly px-5 items-center`}>
                            <img src={webdev} className={`h-1/2 w-1/2 object-contain ${dark ? "": "invert"} duration-200 ease-in-out opacity-60`} />
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-xl lg:text-2xl text-center`}>Development</p>
                        </div>

                        <div onClick={() => openPage('/quiz/programming')} className={`w-full h-52 rounded-md ${dark ? "bg-white" : "bg-black"} duration-200 overflow-hidden ease-in-out hover:shadow-lg flex justify-evenly px-5 items-center`}>
                            <img src={programming} className={`h-1/2 w-1/2 object-contain ${dark ? "": "invert"} duration-200 ease-in-out opacity-60`} />
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-xl lg:text-2xl text-center`}>Programming</p>
                        </div>
                        
                        <div onClick={() => openPage('/quiz/cs-topic')} className={`w-full h-52 rounded-md ${dark ? "bg-white" : "bg-black"} duration-200 overflow-hidden ease-in-out hover:shadow-lg flex justify-evenly px-5 items-center`}>
                            <img src={cs} className={`h-1/2 w-1/2 object-contain ${dark ? "": "invert"} duration-200 ease-in-out opacity-60`} />
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-xl lg:text-2xl text-center`}>CS Topics</p>
                        </div>

                        <div onClick={() => openPage('/quiz/database')} className={`w-full h-52 rounded-md ${dark ? "bg-white" : "bg-black"} duration-200 overflow-hidden ease-in-out hover:shadow-lg flex justify-evenly px-5 items-center`}>
                            <img src={db} className={`h-1/2 w-1/2 object-contain ${dark ? "": "invert"} duration-200 ease-in-out opacity-60`} />
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-xl lg:text-2xl text-center`}>Databases</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Quiz
