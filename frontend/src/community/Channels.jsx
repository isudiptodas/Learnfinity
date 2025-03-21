import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import blogb from '../assets/blog_black.png';
import blogw from '../assets/blog_white.png';
import intw from '../assets/interview_white.png';
import intb from '../assets/interview_black.png';

function Channels() {

    const { dark } = useTheme();

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);


    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 content overflow-auto flex flex-col justify-start items-center gap-10 lg:gap-8`}>

                    <div className={`w-full md:w-[60%] h-auto py-1 pr-1 pl-4 flex justify-between items-center gap-3 ${dark ? "bg-white shadow-lg" : "bg-black"} duration-300 ease-in-out rounded-lg`}>
                        <Link to="/community/all-posts" className={`${dark ? "text-black" : "text-white"} text-sm cursor-pointer w-1/3 text-center`}>Shared</Link>
                        <Link to="/community/explore" className={`${dark ? "text-black" : "text-white"} text-sm cursor-pointer w-1/3 text-center`}>Explore</Link>
                        <Link to="/community/channels" className={`px-10 py-2 rounded-lg ${dark ? "bg-cyan-500 text-black" : "text-white bg-cyan-700"} w-1/3 text-center text-sm cursor-pointer`}>Channels</Link>
                    </div>

                    <div className={`w-full duration-300 ease-in-out h-auto py-4 flex flex-col justify-between items-center gap-5`}>
                        <div className={`h-36 md:h-52 group w-full px-4 md:w-2/3 lg:w-[55%] flex rounded-xl hover:shadow-xl duration-300 ease-in-out ${dark ? "bg-gray-300" : "bg-black"}`}>
                            <div className={`group-hover:text-yellow-500 w-1/2 ${dark ? "text-black" : "text-white"} text-9xl font-bold flex justify-center items-center duration-500 ease-in-out relative overflow-hidden`}>
                                {/* IE */}
                                <img src={intb} className={`${dark ? "hidden" : "block"} object-cover duration-300 ease-in-out w-full h-full z-10`} />
                                <img src={intw} className={`${dark ? "block" : "hidden"} object-cover duration-300 ease-in-out w-full h-full z-10`} />
                            </div>

                            <div className={`${dark ? "text-black" : "text-white"} w-1/2 flex flex-col justify-center items-center gap-2`}>
                                <p>Interview Experience</p>
                                <Link to="/community/interview-channel"><button className={`${dark ? "bg-black text-white" : "bg-white text-black"} hover:opacity-65 px-5 py-2 rounded-full cursor-pointer duration-300 ease-in-out flex justify-center items-center gap-3 font-light`}>Enter Channel <FaArrowRight /></button></Link>
                            </div>
                        </div>

                        <div className={`h-36 md:h-52  group w-full px-4 md:w-2/3 lg:w-[55%] flex rounded-xl hover:shadow-xl duration-300 ease-in-out ${dark ? "bg-gray-300" : "bg-black"}`}>
                            <div className={`group-hover:text-blue-500 w-1/2 ${dark ? "text-black" : "text-white"} text-9xl font-bold flex justify-center items-center duration-500 ease-in-out relative overflow-hidden`}>
                                {/* BS */}
                                <img src={blogb} className={`${dark ? "hidden" : "block"} object-cover duration-300 ease-in-out w-full h-full z-10`} />
                                <img src={blogw} className={`${dark ? "block" : "hidden"} object-cover duration-300 ease-in-out w-full h-full z-10`} />
                            </div>

                            <div className={`${dark ? "text-black" : "text-white"} w-1/2 flex flex-col justify-center items-center gap-2 relative`}>
                                <p className='z-30'>Blog Section</p>
                                <Link to="/community/blog-channel"><button className={`z-30 ${dark ? "bg-black text-white" : "bg-white text-black"} hover:opacity-65 px-5 py-2 rounded-full cursor-pointer duration-300 ease-in-out flex justify-center items-center gap-3 font-light`}>Enter Channel <FaArrowRight /></button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Channels
