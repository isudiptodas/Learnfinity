import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import Post from '../components/ExplorePost';
import { Link } from 'react-router-dom';

function Explore() {

    const { dark } = useTheme();

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);
    const [tag, setTag] = useState('');

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />
               

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto lg:py-10 px-10 rounded-xl md:py-5 content overflow-auto flex flex-col justify-start items-center gap-10 lg:gap-6`}>

                    <div className={`w-full md:w-[60%] h-auto py-1 px-5 flex justify-between items-center gap-3 ${dark ? "bg-white shadow-lg" : "bg-black"} duration-300 ease-in-out rounded-md`}>
                        <Link to="/community/all-posts" className={`${dark ? "text-black" : "text-white"} text-sm cursor-pointer w-1/3 text-center`}>Shared</Link>
                        <Link className={`px-10 py-2 rounded-md ${dark ? "bg-cyan-500 text-black" : "text-white bg-cyan-700"} text-sm cursor-pointer w-1/3 text-center`}>Explore</Link>
                        <Link to="/community/channels" className={`${dark ? "text-black" : "text-white"} text-sm cursor-pointer w-1/3 text-center`}>Channels</Link>
                    </div>

                    <div className={`w-full md:w-[60%] px-3 md:px-0 py-8 h-auto flex flex-col justify-center items-center gap-5 border-b-2 ${dark ? "border-gray-400" : "border-zinc-600"}`}>
                        {/* <h1 className={`${dark ? "text-black" : "text-white"} font-Josefin text-2xl text-center`}>Explore posts from the community</h1> */}
                        <input type="text" className={`${dark ? "bg-white text-black" : "bg-black text-white"} w-full rounded-md py-2 px-5`} placeholder='Enter a search term' />
                        <button className={`w-full bg-cyan-600 hover:bg-cyan-800 duration-200 ease-in-out cursor-pointer text-white flex justify-center items-center gap-3 py-3 rounded-md`}>Search <FaSearch /></button>
                    </div>

                    <div className='h-auto py-5 w-full flex flex-col justify-center items-center gap-5'>
                        {/* <Post link="/community/explore/post" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s" postId="db53bd" title="Hellohgggggggggggggggg" desc="just some random text for examplecbkdshckewf ekdnskcike iewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbehls 3 o3reojfkl ielfhhhhhhhhhhhhhhhhhhhhhh   oewpfffffffffffffffffffffffffffffffffffffffffffffffffffffffff" author="isudiptodas"/>
                        <Post link="/community/explore/post" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s" postId="db53fdfd"  title="Hellohgggggggggggggggg" desc="just some random text for examplecbkdshckewf ekdnskcike iewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbehls 3 o3reojfkl ielfhhhhhhhhhhhhhhhhhhhhhh   oewpfffffffffffffffffffffffffffffffffffffffffffffffffffffffff" author="isudiptodas"/>
                        <Post link="/community/explore/post" img="https://i0.wp.com/picjumbo.com/wp-content/uploads/gorgeous-sunset-over-the-sea-free-image.jpeg?h=800&quality=80" postId="db53ere"  title="Hellohgggggggggggggggg" desc="just some random text for examplecbkdshckewf ekdnskcike iewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbehls 3 o3reojfkl ielfhhhhhhhhhhhhhhhhhhhhhh   oewpfffffffffffffffffffffffffffffffffffffffffffffffffffffffff" author="isudiptodas"/>
                        <Post link="/community/explore/post" img="https://i0.wp.com/picjumbo.com/wp-content/uploads/gorgeous-sunset-over-the-sea-free-image.jpeg?h=800&quality=80" postId="db" title="Hellohgggggggggggggggg" desc="just some random text for examplecbkdshckewf ekdnskcike iewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbehls 3 o3reojfkl ielfhhhhhhhhhhhhhhhhhhhhhh   oewpfffffffffffffffffffffffffffffffffffffffffffffffffffffffff" author="isudiptodas"/> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Explore
