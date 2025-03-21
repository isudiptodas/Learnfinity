import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { toast, Toaster } from 'react-hot-toast';
import Comment from '../components/Comment.jsx';

function ExplorePostPage() {

    const { dark } = useTheme();

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);
    const location = useLocation();

    const postData = location.state;

    const [img, setImg] = useState(postData.img || null);
    const [title, setTitle] = useState(postData.title || null);
    const [author, setAuthor] = useState(postData.author || null);
    const [desc, setDesc] = useState(postData.desc || null);
    const [tags, setTags] = useState(postData.tags || []);
    const [postTime, setPostTime] = useState(postData.time || '');
    const [postId, setPostId] = useState(postData.postId || '');
    const [comment, setComment] = useState('');
    const [userData, setUserData] = useState([]);
    const [allComments, setAllComments] = useState([]);

    // const { img } = location.state;
    // const { title } = location.state;
    // const { desc } = location.state;
    // const { postId } = location.state;

    // useEffect(() => {
    //     console.log(postData);
    // }, []);

    const addComment = async (e) => {
        e.preventDefault();

        if (comment === '') {
            toast.error("Comment box is empty");
            return;
        }

        const token = localStorage.getItem('token');

        const currentDate = new Date();

        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const date = currentDate.toLocaleDateString('en-US', options);

        try {
            const res = await axios.post(`https://learnfinity-mzah.onrender.com/add/comment`, {
                comment, date, postId
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (res.data.success) {
                toast.success("Comment added");
                setComment('');
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }

    const savePost = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        try {
            const res = await axios.post(`https://learnfinity-mzah.onrender.com/save/post`, {
                title, desc, author, tags, img
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.data.success) {
                toast.success("Post saved");
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        const fetchAllComments = async () => {
            try {

                const res = await axios.post(`https://learnfinity-mzah.onrender.com/fetch/comments`, {
                    postId
                });

                if (res.data.success) {
                    const fetchedComment = res.data.foundComment;
                    // console.log(fetchedComment);
                    setAllComments(fetchedComment);
                }
            }
            catch (err) {

            }
        }

        const fetchUserData = async () => {
            const token = localStorage.getItem('token');

            try {
                const res = await axios.get(`https://learnfinity-mzah.onrender.com/user/details`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (res.data.success) {
                    setUserData(res.data.exist);
                }
            }
            catch (err) {
                console.log(err.response?.data?.message);
            }
        }

        fetchUserData();
        setTimeout(() => {
            fetchAllComments(); 
        }, 1000);

        // setTimeout(() => {
        //     if(userData._id === allComments.userId){
        //         console.log(allComments.userId);
        //     }
        // },4000);
    }, []);

    const deleteComment = async (commentId) => {

        // console.log(commentId);

        try{
            const res = await axios.delete(`https://learnfinity-mzah.onrender.com/delete/comment/${commentId}`);

            if(res.data.success){
                setAllComments((prevComments) => 
                    prevComments.filter((comment) => comment._id !== commentId)
                );
                toast.success("Comment deleted");
            }
        }
        catch(err){
            console.log(err.message);
        }
    }

    return (
        <>
            <div className={` h-auto overflow-y-auto lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />
                <Toaster />


                {/* main content section */}

                <div className={` ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-auto lg:py-5 px-10 rounded-xl md:py-5 overflow-y-auto content flex flex-col justify-start items-center gap-10 lg:gap-6`}>

                    <Link to="/community/channels" className='w-full z-50'><div className='w-full flex justify-start items-center gap-2'>
                        <p className={`${dark ? "text-black" : "text-white"} w-auto flex justify-start items-start h-auto cursor-pointer`}><FaArrowLeft /></p>
                        <p className={`${dark ? "text-black" : "text-white"} w-auto flex justify-start items-start h-auto cursor-pointer`}>Go Back</p>
                    </div></Link>

                    <div className={`${img === null ? "hidden" : "block"} max-h-72 bg-teal-400 sm:h-125 lg:h-100 lg:w-[80%] w-full rounded-md overflow-hidden`}>
                        <img src={img} className={`z-30 h-full w-full hover:scale-110 duration-500 ease-in-out cursor-pointer object-cover `} />
                    </div>

                    <div className='w-full break-words flex flex-col px-10 sm:px-12 justify-center items-center text-center gap-5'>
                        <p className={`${dark ? "text-black" : "text-white"} border-2 border-cyan-500 rounded-full px-5 py-2 hover:bg-cyan-500 hover:text-black duration-200 ease-in-out cursor-pointer `}>@{author}</p>
                        <p>{postTime}</p>
                        <p className={`${dark ? "text-black" : "text-white"} w-full text-xl font-bold border-b-[1px] border-gray-500 py-4 px-5`}>{title}</p>
                        <button className={`w-auto px-10 py-2 bg-cyan-500 hover:bg-cyan-600 duration-200 ease-in-out cursor-pointer text-white rounded-md z-50`} onClick={savePost}>Save</button>
                    </div>

                    <div className={`${dark ? "text-black" : "text-white"} w-full text-start break-words font-extralight text-s`}>
                            <p className="w-full px-3 break-words">
                                {desc}
                            </p>
                    </div>

                    <p className={`text-start w-full px-5 text-sm py-3 border-b-[1px] border-gray-500 ${dark ? "text-black" : "text-white"}`}>Tags related to post :  </p>
                    <div className='w-full h-auto py-2 flex flex-col justify-start items-center gap-4'>
                        {tags.length > 0 ? <div className='px-5 break-words w-full h-auto flex gap-4'>
                            {tags.map((tag, index) => {
                                return <p key={index} className={`break-words ${dark ? "text-black bg-slate-400 px-4 py-2 text-center rounded-md" : "bg-slate-500 px-4 py-2 rounded-md text-white"} duration-300 ease-in-out`}>{tag}</p>
                            })}
                        </div> : <div>No tags available</div>}
                    </div>

                    <div className='w-full h-auto py-2 flex flex-col justify-start items-center gap-4 z-50'>
                        <textarea value={comment} name="comment" className={`${dark ? "bg-white text-black" : "bg-black text-white"} outline-none w-full rounded-md min-h-24 px-4 py-3`} placeholder='Enter your comment' onChange={(e) => setComment(e.target.value)}></textarea>
                        <button className={`w-full py-2 rounded-md bg-cyan-400 hover:bg-cyan-600 duration-200 ease-in-out ${dark ? "text-white" : "text-black"} font-bold`} onClick={addComment}>Add Comment</button>
                    </div>

                    <p className={`text-start w-full px-5 text-sm py-3 border-b-[1px] border-gray-500 ${dark ? "text-black" : "text-white"}`}>All Comments : </p>

                    <div className={`w-full z-50 pb-5 h-auto flex flex-col gap-5 bg-transparent`}>
                        {allComments.length > 0 ? <div className='w-full z-50 h-auto flex flex-col gap-5'>
                            {allComments.map((com) => {
                                return <Comment key={com._id} id={com.userId} userId={userData._id} img={com.commentPhoto} comment={com.comment} date={com.commentDate} author={com.authorName} deleteComment={() => deleteComment(com._id)}/>
                            })}
                        </div> : <div>No comments available</div>}
                    </div>

                </div>
            </div>
        </>
    )
}

export default ExplorePostPage
