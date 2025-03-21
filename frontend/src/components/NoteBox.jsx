import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaEye } from "react-icons/fa";
import { PiEyeClosedLight } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";

function NoteBox({ title, desc, onEditClick, onDelete, noteId, isNoteVisible, time }) {

    const { dark } = useTheme();
    let newTitle = '';

    if(title && title.length > 10){
        newTitle = title.substr(1, 10) + '...';
    }
    else{
        newTitle = title;
    }

    return (
        <div className={`overflow-y-auto flex justify-center items-center content w-full sm:w-72 sm:py-12 md:w-64 mb-4 p-4 rounded-lg border cursor-pointer hover:-translate-y-3 duration-200 ease-in-out hover:opacity-80 shadow-lg hover:shadow-xl ${dark ? "border-gray-300 bg-white text-gray-900" : "border-gray-800 bg-zinc-800 text-white"} transition-all duration-300`} onClick={isNoteVisible}>
            {/* Header */}
            <div className="flex flex-col items-center justify-center ">
                <h2 className="text-lg w-full px-5 font-bold text-center flex justify-center items-center">{newTitle}</h2>
                <p className={`text-center ${dark ? "text-gray-400" : "text-zinc-400"}`}>{time}</p>
            </div>
        </div>
    )
}

export default NoteBox
