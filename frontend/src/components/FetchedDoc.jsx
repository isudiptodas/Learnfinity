import React from 'react'
import { useTheme } from "../context/ThemeContext";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

function FetchedDoc({ children, link, desc, img, handleDelete }) {

  const { dark } = useTheme();
  const navigate = useNavigate();

   const handleDownload = () => {
      if(link){
        saveAs(link, children);
        // const downloadLink = `${link}?dl=1`;
        // const anchor = document.createElement("a");
        // anchor.href = downloadLink;
        // anchor.download = '';
        // anchor.target = "_self";
        // document.body.appendChild(anchor);
        // anchor.click();
        // document.body.removeChild(anchor);
      }
    }

  return (
    <>
      <div className={`card bg-base-100 w-full sm:w-56 shadow-lg hover:shadow-2xl overflow-hidden flex flex-col justify-center items-center mb-5 py-5 ${dark ? "bg-gray-300 text-black" : "bg-zinc-800"}`}>
        <div className=' h-[20%] w-1/2 overflow-hidden'>
          <img src={img} className="cursor-pointer h-full w-full" />
        </div>
        <div className=" card-body h-52 lg:h-44 w-full flex justify-center items-center text-center">
          <h2 className={`card-title font-bold text-3xl ${dark ? "text-black" : "text-white"}`}>{children}</h2>
          <p className='text-sm lg:text-s'>{desc}</p>
          <div className=" card-actions w-full flex justify-center items-center">
            <button className={`btn ${dark ? "bg-black text-white" : "bg-white text-black"} w-full text-center`} onClick={handleDownload}>Download <FaDownload /></button>
            <button className={`btn bg-red-600 text-white w-full text-center`} onClick={handleDelete}>Remove <FaTrash className='text-lg' /></button>
          </div>
        </div>
      </div>

    </>
  )
}

export default FetchedDoc
