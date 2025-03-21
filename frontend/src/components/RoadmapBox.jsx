import React  from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";
import { FaExternalLinkAlt } from "react-icons/fa";

function RoadmapBox({ children, page, desc }) {

  const { dark } = useTheme();
  const navigate = useNavigate();

  const openLink = () => {
    if (page) {
       navigate(page);
    }
    else {
      alert("No link available");
    }

  }

  return (
    <>
      <div className={`card bg-base-100 w-full sm:w-56 shadow-xl overflow-hidden mb-5 ${dark ? "bg-slate-50 text-black" : "bg-black"} md:py-5`}>
        
        <div className=" card-body h-52 lg:h-44 w-full flex justify-center items-center text-center">
        <h2 className={`card-title font-bold text-lg ${dark ? "text-black" : "text-white"}`}>{children}</h2>
        <p className='text-sm lg:text-s'>{desc}</p>
          <div className=" card-actions w-full flex justify-center items-center">
            <button className={`btn ${dark ? "bg-black text-white" : "bg-white text-black"} w-full text-center`} onClick={openLink}>Open <FaExternalLinkAlt /></button>
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

export default RoadmapBox
