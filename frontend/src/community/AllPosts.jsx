import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AllPostDropdown from '../components/AllPostDropdown';
import { toast, Toaster } from 'react-hot-toast';
import AllUserPost from '../components/AllUserPost';

function AllPost() {

    const { dark } = useTheme();

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);
    const[selectedValue, setSelectedValue] = useState('saved');
    const[fetchedPosts, setFetchedPosts] = useState([]);
    const[userData, setUserData] = useState();

    useEffect(() => {

        const fetchAllSavedPosts = async () => {
            const token = localStorage.getItem('token');

            let link = '';

            if(selectedValue === 'saved'){
                link = '/fetch/saved/posts';
            }
            if(selectedValue === 'blog_channel'){
                link = '/fetch/blog/posts';
            }
            if(selectedValue === 'interview_channel'){
                link = '/fetch/interview/posts';
            }

            try{
                const res = await axios.get(`https://learnfinity-mzah.onrender.com${link}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                if(res.data.success){
                    // console.log(res.data);
                    setFetchedPosts(res.data.found);
                }
            }
            catch(err){

            }
        }

        fetchAllSavedPosts();

    }, [selectedValue]);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`https://learnfinity-mzah.onrender.com/user/details`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
            if (res.data.success) {
            //   console.log(res.data.exist);
              setUserData(res.data.exist);
              // console.log(res.data.exist.displayname);
    
            }
          } catch (err) {
            console.log(err.response?.data?.message);
          }
        }
    
        fetchUserData();
    
      }, []);

    const deletePost = async (postId) => {
        const token = localStorage.getItem('token');

        let link = '';

        if(selectedValue === 'saved'){
            link = '/saved';
        }
        if(selectedValue === 'interview_channel'){
            link = '/interview';
        }
        if(selectedValue === 'blog_channel'){
            link = '/blog';
        }

        try{
            const res = await axios.delete(`https://learnfinity-mzah.onrender.com/delete${link}/post/${postId}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if(res.data.success){
                setFetchedPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
                toast.success("Post deleted");
            }
        }
        catch(err){

        }
    }

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center lg:px-10 gap-5`} >

                <Sidebar />
                <Toaster/>
                {/* <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div> */}

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 content overflow-auto flex flex-col justify-start items-center gap-10`}>

                    <div className={`w-full md:w-[60%] h-auto py-1 pl-1 pr-4 flex justify-between items-center gap-3 ${dark ? "bg-white shadow-lg" : "bg-black"} duration-300 ease-in-out rounded-lg`}>
                        <Link to="/community/all-posts" className={` w-1/3 px-10 py-2 rounded-lg text-center ${dark ? "bg-cyan-500 text-black" : "text-white bg-cyan-700"} text-sm cursor-pointer`}>Shared</Link>
                        <Link to="/community/explore" className={`w-1/3 ${dark ? "text-black" : "text-white"} text-sm cursor-pointer text-center`}>Explore</Link>
                        <Link to="/community/channels" className={`w-1/3 ${dark ? "text-black" : "text-white"} text-sm cursor-pointer text-center`}>Channels</Link>
                    </div>

                    <AllPostDropdown onSelect={(value) => setSelectedValue(value)}/>
                    
                    <div className={`w-full rounded-md ${selectedValue === 'saved' ? "block" : "hidden"} py-2 px-2 flex flex-col justify-start items-center gap-5`}>
                        {fetchedPosts.length > 0 ? <div className='w-full h-auto flex flex-col gap-5'>
                            {fetchedPosts.slice().reverse().map((post) => {
                                return <AllUserPost key={post._id} userId={post.userId} userData={userData} title={post.postTitle} desc={post.postDescription} author={post.postAuthor} tags={post.postTags} link="/community/saved/post" postId={post._id} deletePost={() => deletePost(post._id)} img={post.postImage}/>
                            })} 
                        </div> : <div>No post available</div>}
                    </div>

                    <div className={`w-full rounded-md ${selectedValue === 'interview_channel' ? "block" : "hidden"} py-2 px-2 flex flex-col justify-start items-center gap-5`}>
                        {fetchedPosts.length > 0 ? <div className='w-full h-auto flex flex-col gap-5'>
                            {fetchedPosts.slice().reverse().map((post) => {
                                return <AllUserPost key={post._id} userId={post.userId} userData={userData} title={post.postTitle} desc={post.postDescription} author={post.postAuthor} tags={post.postTags} link="/community/interview/post" postId={post._id} deletePost={() => deletePost(post._id)} img={post.postImage}/>
                            })}
                        </div> : <div>No post available</div>}
                    </div>

                    <div className={`w-full rounded-md ${selectedValue === 'blog_channel' ? "block" : "hidden"} py-2 px-2 flex flex-col justify-start items-center gap-5`}>
                        {fetchedPosts.length > 0 ? <div className='w-full h-auto flex flex-col gap-5'>
                            {fetchedPosts.slice().reverse().map((post) => {
                                return <AllUserPost key={post._id} userId={post.userId} userData={userData} title={post.postTitle} desc={post.postDescription} author={post.postAuthor} tags={post.postTags} link="/community/blog/post" postId={post._id} deletePost={() => deletePost(post._id)} img={post.postImage}/>
                            })}
                        </div> : <div>No post available</div>}
                    </div>

                </div>
            </div>
        </>
    )
}

export default AllPost
