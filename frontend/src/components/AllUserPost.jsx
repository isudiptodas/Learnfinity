import React from 'react'
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from 'react-router-dom';
import { FaTrash } from "react-icons/fa6";

function AllUserPost({ img, title, desc, postId, author, tags, link, deletePost, userData, userId }) {

  const { dark } = useTheme();
  const navigate = useNavigate();

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + " . . .";
    }
    return text;
  };

  const postData = {
    title,
    desc,
    img,
    postId,
    author,
    tags
  }

  const handleClick = () => {
    if (postId) {
      navigate(`${link}/${postId}`, { state: postData });
    }
  }

  return (
    <>
      <div className={`h-auto w-full flex justify-between items-center py-3 lg:py-10 px-3 lg:px-8 cursor-pointer rounded-lg lg:rounded-3xl ${dark ? "bg-white shadow-lg hover:shadow-xl duration-150 ease-in-out" : "bg-black"} `} onClick={handleClick}>
        <div className='h-32 lg:h-48 w-[30%] rounded-md lg:rounded-2xl overflow-hidden'>
          <img src={img} className='h-full w-full object-cover' />
        </div>
        <div className='w-[70%] px-3 py-5 h-full flex flex-col justify-start items-start lg:gap-4 relative'>
          <FaTrash className={`absolute top-2 right-5 z-50 text-red-500 text-xl lg:text-2xl cursor-pointer ${userData?._id === userId ? "block" : "hidden"}`} title='Delete post' onClick={(e) => {e.stopPropagation(); deletePost(); }} />

          <p className={`${dark ? "text-black" : "text-white"} text-s lg:text-sm`}>@{author}</p>
          <h1 className={`${dark ? "text-black" : "text-white"} md:text-xl lg:text-3xl font-bold`}>{truncateText(title, 50)}</h1>
          <p className={`${dark ? "text-black" : "text-white"} text-s md:text-sm w-full break-words lg:text-lg`}>
            {truncateText(desc, 300)}
          </p>
        </div>
      </div>
    </>
  )
}

export default AllUserPost
