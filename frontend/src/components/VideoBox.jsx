import React from 'react'
import { useTheme } from "../context/ThemeContext";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { CgPentagonDown } from "react-icons/cg";

function VideoBox({ children, link, desc, img,  handleVideoSave }) {

  const { dark } = useTheme();
  const navigate = useNavigate();

  const openPage = () => {
    if (link) {
      navigate("/video-lectures/videopage", {state: {videoUrl: link}});
    }
    else {
      alert("No link available");
    }

  }

  return (
    <>
      <div className={`card bg-base-100 w-full sm:w-56 shadow-lg hover:shadow-2xl overflow-hidden flex flex-col justify-center items-center mb-5 py-5 ${dark ? "bg-slate-50 text-black" : "bg-black"}`}>
        <div className=' h-[20%] w-1/2 overflow-hidden'>
          <img src={img} className="cursor-pointer h-full w-full" />
        </div>
        <div className=" card-body h-52 lg:h-44 w-full flex justify-center items-center text-center">
          <h2 className={`card-title font-bold text-3xl ${dark ? "text-black" : "text-white"}`}>{children}</h2>
          <p className='text-sm lg:text-s'>{desc}</p>
          <div className=" card-actions w-full flex justify-center items-center">
            <button className={`btn ${dark ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black hover:bg-gray-300"} w-full text-center`} onClick={openPage}>Open video <FaPlay /></button>
            <button className={`btn ${dark ? "bg-white hover:bg-gray-200 text-black border-2 border-black" : "bg-black hover:bg-zinc-800 text-white border-2 border-white"} w-full text-center`} onClick={handleVideoSave}>Save <CgPentagonDown className='text-3xl' /></button>
          </div>
        </div>
      </div>


      {/* <div className={`${dark ? "text-black border-2 border-black duration-200 ease-in-out" : "bg-gradient-to-br from-cyan-500 to-cyan-700 text-black duration-200 ease-in-out"}  h-36 w-full sm:h-44 sm:w-[45%] md:h-40 md:w-44 lg:h-36 xl:h-56 flex flex-col justify-center items-center gap-3 rounded-2xl hover:shadow-xl`}>
        <p className='font-Josefin font-bold text-center'>{children}</p>
        <button className='bg-black text-white px-16 py-2 sm:px-12 md:px-8 flex justify-center items-center gap-2 rounded-full ease-in-out duration-200 hover:bg-blue-800 hover:scale-95' onClick={openLink}>Open <MdArrowOutward /></button>
      </div> */}
    </>
  )
}

export default VideoBox
