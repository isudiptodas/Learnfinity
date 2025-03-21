import React from 'react'
import { useTheme } from "../context/ThemeContext";
import { useNavigate, useLocation } from 'react-router-dom';

function BlogPost({img, title, desc, postId, author}) {

  const { dark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

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
    author
  }

  const handleClick = () => {
    if(postId){
      navigate(`/community/blog/post/${postId}`, {state: postData});
    }
  }

  return (
    <>
      <div className={`h-auto w-full flex justify-between items-center py-3 lg:py-10 px-3 lg:px-8 cursor-pointer rounded-lg lg:rounded-3xl ${dark ? "bg-white shadow-lg hover:shadow-xl duration-150 ease-in-out" : "bg-black"} `} onClick={handleClick}>
        <div className='h-32 lg:h-48 w-[30%] rounded-md lg:rounded-2xl overflow-hidden'>
          <img src={img} className='h-full w-full object-cover' />
        </div>
        <div className='w-[70%] px-3 py-5 h-full flex flex-col justify-start items-start lg:gap-5'>
        <p className={`${dark ? "text-black" : "text-white"} text-s lg:text-sm`}>@{author}</p>
          <h1 className={`${dark ? "text-black" : "text-white"} md:text-xl font-bold`}>{truncateText(title, 20)}</h1>
          <p className={`${dark ? "text-black" : "text-white"} text-s md:text-sm`}>
            {truncateText(desc, 50)}
          </p>
        </div>
      </div>
    </>
  )
}

export default BlogPost
