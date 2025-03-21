import React, { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function DSAVisualizer() {

    const { dark } = useTheme();
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const navigate = useNavigate();

    const openPage = (link) => {
        navigate(link);
    }

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden py-5 lg:h-auto lg:py-6 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Toaster />

                {/* Sidebar section */}
                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* Main content section */}
                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[100vh] lg:h-auto overflow-auto lg:py-5 px-8 rounded-xl md:py-5 content flex justify-start lg:justify-start items-center lg:items-start flex-col gap-5 lg:gap-5 relative`}>

                    <h1 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-3xl font-bold duration-200 ease-in-out font-Titillium`}>Visualize Concepts</h1>
                    <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-sm text-center w-full`}>A visual representation of some of the famous data structures and algorithms</p>

                    <hr className='w-full h-[1px] bg-zinc-600' />

                    {/* Algorithms section */}
                    <h1 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Algorithms</h1>


                    <div className={`w-full rounded-md h-auto py-4 px-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3 sm:gap-8`}>
                        <div className={`w-full cursor-pointer hover:shadow-md hover:-translate-y-4 rounded-md h-44 ${dark ? "bg-white" : "bg-black"} px-5 py-3 duration-200 ease-in-out flex flex-col justify-evenly items-center gap-3`} onClick={() => openPage('/visualizer/searching')}>
                            <h3 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-xl sm:text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Searching Algorithms</h3>
                            <p className={`w-full text-center ${dark ? "text-black" : "text-white"} opacity-55 duration-200 ease-in-out text-sm`}>(Binary Search, Linear Search)</p>
                        </div>
                        <div className={`w-full cursor-pointer hover:shadow-md hover:-translate-y-4 rounded-md h-44 ${dark ? "bg-white" : "bg-black"} px-5 py-3 duration-200 ease-in-out flex flex-col justify-evenly items-center gap-3`} onClick={() => openPage('/visualizer/sorting')}>
                            <h3 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-xl sm:text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Sorting Algorithms</h3>
                            <p className={`w-full text-center ${dark ? "text-black" : "text-white"} opacity-55 duration-200 ease-in-out text-sm`}>(Bubble Sort, Insertion Sort, Selection Sort)</p>
                        </div>
                    </div>

                    {/* data structures section */}
                    <h1 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Data Structures</h1>


                    <div className={`w-full rounded-md h-auto py-4 px-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3 sm:gap-8`}>
                        <div className={`w-full cursor-pointer hover:shadow-md hover:-translate-y-4 rounded-md h-44 ${dark ? "bg-white" : "bg-black"} px-5 py-3 duration-200 ease-in-out flex flex-col justify-evenly items-center gap-3`} onClick={() => openPage('/visualizer/stack')}>
                            <h3 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-xl sm:text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Stack</h3>
                            <p className={`w-full text-center ${dark ? "text-black" : "text-white"} opacity-55 duration-200 ease-in-out text-sm`}>Stack operations with array</p>
                        </div>
                        <div className={`w-full cursor-pointer hover:shadow-md hover:-translate-y-4 rounded-md h-44 ${dark ? "bg-white" : "bg-black"} px-5 py-3 duration-200 ease-in-out flex flex-col justify-evenly items-center gap-3`} onClick={() => openPage('/visualizer/linked-list')}>
                            <h3 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-xl sm:text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Linked List</h3>
                            <p className={`w-full text-center ${dark ? "text-black" : "text-white"} opacity-55 duration-200 ease-in-out text-sm`}>LinkedList operations with practical implementations</p>
                        </div>
                        <div className={`w-full cursor-pointer hover:shadow-md hover:-translate-y-4 rounded-md h-44 ${dark ? "bg-white" : "bg-black"} px-5 py-3 duration-200 ease-in-out flex flex-col justify-evenly items-center gap-3`} onClick={() => openPage('/visualizer/queue')}>
                            <h3 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-xl sm:text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Queue</h3>
                            <p className={`w-full text-center ${dark ? "text-black" : "text-white"} opacity-55 duration-200 ease-in-out text-sm`}>Queue operations with practical implementations</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default DSAVisualizer;
