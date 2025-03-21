import React from 'react'
import { useTheme } from "../context/ThemeContext";

function Tag({tagName, handleDelete}) {

    const { dark } = useTheme();

  return (
    <>
      <div className={`h-auto w-auto py-2 flex justify-between items-center px-6 ${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} rounded-md`}>
        <p>{tagName}</p>
        <p className='text-red-500 font-bold cursor-pointer' onClick={handleDelete}>X</p>
      </div>
    </>
  )
}

export default Tag
