import React, { useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import { LuSparkles } from "react-icons/lu";
import { Link } from 'react-router-dom';

function AIStudio() {

    const { dark } = useTheme();
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-[80vh] lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-10 w-full h-[83vh] lg:h-[70vh] px-10 rounded-xl md:py-5 lg:py-10 content overflow-y-auto flex flex-col lg:flex-row justify-start items-center gap-10 md:gap-5 lg:gap-10 relative`}>

                    <div className={`w-full md:w-[55%] lg:w-[30%] h-auto p-1 bg-gradient-to-r from-cyan-600 via-yellow-50 to-white rounded-xl`}>
                        <div className={`${dark ? "bg-white text-black" : "bg-black text-white"} h-full w-full py-7 px-5 rounded-xl flex flex-col justify-center items-center gap-4`}>
                            <h1 className={`font-Josefin text-2xl`}>Summarize</h1>
                            <button className={`${dark ? "bg-black text-white" : "bg-white text-black"} hover:opacity-75 duration-300 ease-in-out w-full py-2 rounded-lg cursor-pointer`}><Link to="/ai-studio/summarize"><p className='flex justify-center items-center gap-2 text-xl'>Try <LuSparkles /></p></Link></button>
                        </div>
                    </div>

                    <div className={`w-full md:w-[55%] lg:w-[30%] h-auto p-1 bg-gradient-to-r from-cyan-600 via-yellow-50 to-white rounded-xl`}>
                        <div className={`${dark ? "bg-white text-black" : "bg-black text-white"} h-full w-full py-7 px-5 rounded-xl flex flex-col justify-center items-center gap-4`}>
                            <h1 className={`font-Josefin text-2xl`}>Code Generation</h1>
                            <button className={`${dark ? "bg-black text-white" : "bg-white text-black"} hover:opacity-75 duration-300 ease-in-out w-full py-2 rounded-lg cursor-pointer`}><Link to="/ai-studio/code-generation"><p className='flex justify-center items-center gap-2 text-xl'>Try <LuSparkles /></p></Link></button>
                        </div>
                    </div>

                    <div className={`w-full md:w-[55%] lg:w-[30%] h-auto p-1 bg-gradient-to-r from-cyan-600 via-yellow-50 to-white rounded-xl`}>
                        <div className={`${dark ? "bg-white text-black" : "bg-black text-white"} h-full w-full py-7 px-5 rounded-xl flex flex-col justify-center items-center gap-4`}>
                            <h1 className={`font-Josefin text-2xl`}>Text Generation</h1>
                            <button className={`${dark ? "bg-black text-white" : "bg-white text-black"} hover:opacity-75 duration-300 ease-in-out w-full py-2 rounded-lg cursor-pointer`}><Link to="/ai-studio/text-generation"><p className='flex justify-center items-center gap-2 text-xl'>Try <LuSparkles /></p></Link></button>
                        </div>
                    </div>

                    <div className={`w-full md:w-[55%] lg:w-[30%] h-auto p-1 bg-gradient-to-r from-cyan-600 via-yellow-50 to-white rounded-xl`}>
                        <div className={`${dark ? "bg-white text-black" : "bg-black text-white"} h-full w-full py-7 px-5 rounded-xl flex flex-col justify-center items-center gap-4`}>
                            <h1 className={`font-Josefin text-2xl text-center`}>Doc Translation</h1>
                            <button className={`${dark ? "bg-black text-white" : "bg-white text-black"} hover:opacity-75 duration-300 ease-in-out w-full py-2 rounded-lg cursor-pointer`}><Link to="/ai-studio/document-translate"><p className='flex justify-center items-center gap-2 text-xl'>Try <LuSparkles /></p></Link></button>
                        </div>
                    </div>

                    {/* <div className={`w-full sm:w-1/2 md:w-72 h-auto p-1 bg-gradient-to-r from-cyan-600 via-yellow-50 to-white rounded-xl`}>
                        <div className={`${dark ? "bg-white text-black" : "bg-black text-white"} h-full w-full py-7 px-5 rounded-xl flex flex-col justify-center items-center gap-4`}>
                            <h1 className={`font-Josefin text-2xl`}>Word to pdf Convert</h1>
                            <button className={`${dark ? "bg-black text-white" : "bg-white text-black"} hover:opacity-75 duration-300 ease-in-out w-full py-2 rounded-lg cursor-pointer`}><Link to="/ai-studio/summarize"><p className='flex justify-center items-center gap-2 text-xl'>Try <LuSparkles /></p></Link></button>
                        </div>
                    </div>

                    <div className={`w-full sm:w-1/2 md:w-72 h-auto p-1 bg-gradient-to-r from-cyan-600 via-yellow-50 to-white rounded-xl`}>
                        <div className={`${dark ? "bg-white text-black" : "bg-black text-white"} h-full w-full py-7 px-5 rounded-xl flex flex-col justify-center items-center gap-4`}>
                            <h1 className={`font-Josefin text-2xl`}>Text Extraction</h1>
                            <button className={`${dark ? "bg-black text-white" : "bg-white text-black"} hover:opacity-75 duration-300 ease-in-out w-full py-2 rounded-lg cursor-pointer`}><Link to="/ai-studio/summarize"><p className='flex justify-center items-center gap-2 text-xl'>Try <LuSparkles /></p></Link></button>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default AIStudio
