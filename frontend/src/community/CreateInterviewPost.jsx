import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import Sidebar from '../components/Sidebar';
import formData from 'form-data';
import Tag from '../components/Tag';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import Loading from '../components/Loading.jsx';

function CreateInterviewPost() {

  const { dark } = useTheme();
  const [postImage, setPostImage] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagName, setTagname] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();

  // useEffect(()=>{
  //   console.log(postImage);
  // },[postImage]);

  const handleSetImage = (e) => {
    setPostImage(e.target.files[0]);
    setIsImageSelected(true);
  }

  const handleDeleteImage = () => {
    setPostImage(null);
    setIsImageSelected(false);
  }

  const handleDeleteTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  }

  const handleTagName = (e) => {
    setTagname(e.target.value);
  }

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagName === '') {
      toast.error("Field is empty");
      return;
    }
    setTags((prev) => [...prev, tagName]);
    setTagname('');
  }

  const createPost = async (e) => {
    e.preventDefault();

    if (title === '') {
      toast.error("Title is empty");
      return;
    }

    if (desc === '') {
      toast.error("Description is empty");
      return;
    }

    if (title.length > 40) {
      toast.error("Post title must be less than 30 characters");
    }

    const token = localStorage.getItem('token');
    const CLOUDINARY_CLOUD_NAME = 'dogrrh0ce';

    try {

      setIsAddingPost(true);

      let cloudImageUrl = '';

      if (postImage !== null) {
        const formData = new FormData();
        formData.append('file', postImage);
        formData.append('upload_preset', 'Learnfinity-interview-post');
        formData.append('folder', 'Interview post image');

        const cloudRes = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );
        //console.log(cloudRes.data.secure_url);
        cloudImageUrl = cloudRes.data.secure_url;
      }

      const currentDate = new Date();

        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const date = currentDate.toLocaleDateString('en-US', options);

      const res = await axios.post(`https://learnfinity-mzah.onrender.com/api/create/interview/post`, {
        title, desc, tags, postImage: cloudImageUrl || '', date
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if (res.data.success) {
        toast.success("Post uploaded");
        // console.log(res.data);
        setTimeout(() => {
          navigate('/community/interview-channel');
        }, 3000);
      }
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      setIsAddingPost(false);
    }

  }

  return (
    <>
      <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

        <Sidebar />
        <Toaster />

        <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
        <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>


        {/* main content section */}

        <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto lg:py-5 px-10 rounded-xl md:py-5 content overflow-auto flex flex-col justify-start items-center gap-10 relative lg:gap-6`}>

          <Link to="/community/blog-channel" className='w-full'><div className='w-full flex justify-start items-center gap-2'>
            <p className={`${dark ? "text-black" : "text-white"} w-auto flex justify-start items-start h-auto cursor-pointer`}><FaArrowLeft /></p>
            <p className={`${dark ? "text-black" : "text-white"} w-auto flex justify-start items-start h-auto cursor-pointer`}>Go Back</p>
          </div></Link>

          <form className={`h-auto w-full md:w-[70%] lg:w-[50%] px-5 py-5 flex flex-col justify-start items-center lg:items-start gap-5`}>

            <div className={`${isImageSelected ? "hidden" : "block"} w-full flex flex-col justify-center items-center relative`}>
              <button className={`${dark ? "text-white" : "text-white"} py-3 px-4 w-full bg-gradient-to-br from-cyan-400 to-cyan-700 rounded-md flex justify-center items-center `}><input type="file" onChange={handleSetImage} className={`absolute opacity-0 w-full ${dark ? "text-black" : "text-white"}`} />Upload post image</button>
            </div>

            <div className={`${isImageSelected ? "block" : "hidden"} h-40 w-full rounded-md overflow-hidden`}>
              <img src={postImage} className={` h-full w-full object-cover`} />
            </div>
            <p className={`text-white mt-5 bg-red-500 w-full lg:w-1/3 text-center py-2 rounded-md hover:bg-red-600 duration-300 ease-in-out cursor-pointer font-semibold ${isImageSelected ? "block" : "hidden"}`} onClick={handleDeleteImage}>Delete X</p>

            <div className='w-full pr-3 py-4 flex flex-col justify-center items-start gap-3'>
              <label htmlFor="title" className={`${dark ? "text-black" : "text-white"}`}>Title : </label>
              <input type="text" className={`outline-none w-full rounded-md px-5 h-auto py-2 ${dark ? "bg-white text-black" : "bg-black text-white"} duration-300 ease-in-out`} placeholder='Enter post title' onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className='w-full pr-3 py-4 flex flex-col justify-center items-start gap-3'>
              <label htmlFor="desc" className={`${dark ? "text-black" : "text-white"}`}>Description : </label>
              <textarea className={`w-full outline-none rounded-md px-5 py-4 min-h-40 lg:min-h-60 ${dark ? "bg-white text-black" : "bg-black text-white"} duration-300 ease-in-out`} placeholder='Enter post description' onChange={(e) => setDesc(e.target.value)} />
            </div>

            <div className='w-full pr-3 py-4 flex flex-col justify-center items-start gap-3'>
              <label htmlFor="tags" className={`${dark ? "text-black" : "text-white"}`}>Tags : </label>
              <input type="text" className={`outline-none w-full rounded-md px-5 py-4 ${dark ? "bg-white text-black" : "bg-black text-white"} duration-300 ease-in-out`} placeholder='Add tag name' onChange={handleTagName} value={tagName} />
              <button className={`w-full ${dark ? "bg-black text-white" : "bg-white text-black"} py-2 rounded-md mt-3 cursor-pointer hover:opacity-85 duration-300 ease-in-out`} onClick={handleAddTag}>Add +</button>
              <div className={`${tags.length > 0 ? "block" : "hidden"} w-full content flex flex-col justify-start gap-4 h-auto px-4 py-5 max-h-72 overflow-y-auto ${dark ? "bg-white" : "bg-black"} rounded-md`}>
                {tags.map((tag, index) => {
                  return <Tag tagName={tag} key={index} handleDelete={() => handleDeleteTag(index)} />
                })}
              </div>
              <button className={`w-full mt-12 py-3 px-4 bg-gradient-to-br from-cyan-400 to-cyan-700 text-white font-bold cursor-pointer flex justify-center items-center gap-2 rounded-md`} onClick={createPost}>{isAddingPost ? (<div>Adding post ... <Loading /></div>) : (<div>Add post</div>)}</button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default CreateInterviewPost
