import React  from 'react'
import { useTheme } from "../context/ThemeContext";
import { FaDownload } from "react-icons/fa6";
import { saveAs } from 'file-saver';
import { CgPentagonDown } from "react-icons/cg";

function VideoBox({ children, desc, img, link, handleSave }) {

  const { dark } = useTheme();

  const handleDownload = () => {
    if(link){
      window.open(link, '_blank');
      // saveAs(link, children);
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
      <div className={`card bg-base-100 w-full sm:w-56 shadow-xl overflow-hidden mb-5 ${dark ? "bg-slate-50 text-black" : "bg-black"} md:py-5`}>
        <figure className="px-10 pt-10">
          <img src={img}  className="cursor-pointer h-full w-full" />
        </figure>
        <div className=" card-body h-52 lg:h-44 w-full flex justify-center items-center text-center">
        <h2 className={`card-title font-bold text-3xl ${dark ? "text-black" : "text-white"}`}>{children}</h2>
        <p className={`${dark ? "text-black" : "text-white"} text-sm lg:text-s `}>{desc}</p>
          <div className=" card-actions w-full flex justify-center items-center">
            <button className={`btn ${dark ? "bg-black text-white" : "bg-white hover:bg-gray-400 text-black"} w-full text-center`} onClick={handleDownload}>Download <FaDownload /></button>
            <button className={`btn ${dark ? "bg-white hover:bg-gray-200 text-black border-2 border-black" : "bg-black hover:bg-zinc-800 text-white border-2 border-white"} w-full text-center`} onClick={handleSave}>Save <CgPentagonDown className='text-3xl' /></button>
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
