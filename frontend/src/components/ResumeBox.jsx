import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

function ResumeBox({className, textClassName, title, edit, onDelete}) {
  return (
    <>
      <div className={`${className}`}>
        <p className={`${textClassName} w-auto flex justify-center items-center gap-2 duration-200 ease-in-out`}><IoDocumentTextOutline className={`${textClassName}`}/>{title}</p>
        <div className='w-auto flex justify-center items-center gap-2'>
            <span className='px-4 bg-cyan-400 text-black py-2 rounded-md cursor-pointer hover:bg-cyan-700 duration-200 ease-in-out' onClick={edit}><CiEdit className=''/></span>
            <span className='px-4 bg-red-400 text-white py-2 rounded-md cursor-pointer hover:bg-red-700 duration-200 ease-in-out' onClick={onDelete}><FaTrash className=''/></span>
        </div>
      </div>
    </>
  )
}

export default ResumeBox
