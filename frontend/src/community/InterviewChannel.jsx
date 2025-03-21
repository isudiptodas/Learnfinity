import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Post from '../components/ExplorePost';

function InterviewChannel() {

    const { dark } = useTheme();

    const[allPost, setAllPost] = useState([]);
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    useEffect(()=> {

        const fetchInterviewPost = async () => {
            const token = localStorage.getItem('token');
    
            try{
                const res = await axios.get(`https://learnfinity-mzah.onrender.com/get/posts/interview`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
    
                if(res.data.success){
                    // console.log(res.data);
                    setAllPost(res.data.found);
                }
            }
            catch(err){
                console.log(err.message);
            }
        }
    
        fetchInterviewPost();
    }, []);


    return (
        <>
            <div className={`overflow-x-hidden overflow-y-hidden h-[95vh] lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />


                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto lg:py-5 px-10 rounded-xl md:py-5 content overflow-auto flex flex-col justify-start items-center gap-10 lg:gap-5`}>

                    <div className={`w-full h-auto px-5 py-2 md:py-5 flex justify-start items-center ${dark ? "text-black" : "text-white"}`}>
                        <Link to="/community/channels" className='flex justify-center items-center gap-3 cursor-pointer'><FaArrowLeft /> Go Back</Link>
                    </div>

                    <div className={`w-full md:w-[60%] px-3 md:px-0 py-5 h-auto flex flex-col justify-center items-center gap-5 border-b-2 ${dark ? "border-gray-400" : "border-zinc-600"}`}>
                        <h1 className={`${dark ? "text-black" : "text-white"} font-Josefin text-2xl md:text-3xl lg:text-5xl text-center`}>Share experiences, grow together</h1>
                        <input type="text" className={`${dark ? "bg-white text-black" : "bg-black text-white"} w-full rounded-md py-2 px-5`} placeholder='Enter a search term' />
                        <button className={`w-full bg-cyan-600 hover:bg-cyan-800 duration-200 ease-in-out cursor-pointer text-white flex justify-center items-center gap-3 py-2 rounded-md`}>Search <FaSearch /></button>
                    </div>

                    <div className='w-full h-auto md:w-[60%]'>
                        <Link to="/community/interview/create/post"><button className={`${dark ? "bg-black text-white" : "bg-white text-black"} w-full py-2 rounded-md hover:opacity-85 cursor-pointer duration-200 ease-in-out`}>Share a new interview story +</button></Link>
                    </div>

                    <div className='h-auto py-5 w-full flex flex-col justify-center items-center gap-5'>
                        {allPost.length > 0 ? <div className='w-full h-auto flex flex-col gap-5'>
                            {allPost.slice().reverse().map((post) => {
                                return <Post key={post._id} postId={post._id} title={post.postTitle} desc={post.postDescription} img={post.postImage} author={post.postAuthor} link="/community/interview/post" tags={post.postTags} time={post.postTime}/>
                            })}
                        </div> : <div>No post available</div>}
                    </div>


                </div>
            </div>
        </>
    )
}

export default InterviewChannel
