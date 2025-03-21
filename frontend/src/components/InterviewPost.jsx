import React from 'react'
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from 'react-router-dom';

function InterviewPost({ postId}) {

  const { dark } = useTheme();
  const navigate = useNavigate();

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + " . . .";
    }
    return text;
  };

  const handleClick = () => {
    if(postId){
      navigate(`/community/interview/post/${postId}`);
    }
  }

  return (
    <>
      <div className={`h-auto w-full flex justify-between items-center py-3 lg:py-10 px-3 lg:px-8 cursor-pointer rounded-lg lg:rounded-3xl ${dark ? "bg-white shadow-lg hover:shadow-xl duration-150 ease-in-out" : "bg-black"} `} onClick={handleClick}>
        <div className='w-[70%] px-3 py-5 h-full flex flex-col justify-start items-start'>
          <h1 className={`${dark ? "text-black" : "text-white"} md:text-xl font-bold`}>{truncateText("hi", 50)}</h1>
          <p className={`${dark ? "text-black" : "text-white"} text-s md:text-sm`}>
            {truncateText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt cumque dignissimos tempora exercitationem dolorem adipisci voluptate veniam. Voluptate, adipisci! Sequi quibusdam consequuntur eos quaerat, ab voluptate perferendis nihil ea.", 300)}
          </p>
        </div>
      </div>
    </>
  )
}

export default InterviewPost
