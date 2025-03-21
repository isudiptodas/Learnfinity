import React from 'react'
import { useTheme } from "../context/ThemeContext";
import { FaTrash } from "react-icons/fa6";

function Comment({img, author, date, id, userId, comment, deleteComment}) {

    const { dark } = useTheme();

    return (
        <> 
            <div className={`w-full z-50 bg-transparent flex justify-start items-start gap-2 h-auto`}>
                <div className={`bg-gradient-to-br from-purple-400 to-pink-600 h-7 w-7 rounded-full overflow-hidden relative`}>
                    <img src={img} className='absolute top-0 left-0 h-full w-full'  />
                </div>
                <div className={`${dark ? "bg-white" : "bg-black"} duration-300 ease-in-out flex flex-col justify-center items-start gap-3 rounded-md w-full h-full px-4 py-4`}>
                    <div className='w-full h-auto flex flex-col relative'>
                        <FaTrash className={`text-red-500 absolute z-20 top-5 right-5 cursor-pointer ${id === userId ? "block" : "hidden"} `} title='Delete comment' onClick={deleteComment}/>
                        <h3 className={`${dark ? "text-black" : "text-white"} duration-300 ease-in-out font-bold font-Josefin`}>@{author}</h3>
                        <p className={`${dark ? "text-zinc-400" : "text-gray-400"} duration-300 ease-in-out text-s`}>{date}</p>
                    </div>
                    <p className={`w-full break-words text-sm lg:text-lg ${dark ? "text-black" : "text-white"} duration-300 ease-in-out`}>{comment}</p>
                </div>
            </div>
        </>
    )
}

export default Comment
