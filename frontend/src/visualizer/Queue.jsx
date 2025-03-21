import React, { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { queue } from '../queue.js';

function Queue() {

    const languages = [
        'C++',
        'Java',
        'Python'
    ];

    const { dark } = useTheme();
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    const [array, setArray] = useState([]);
    const [lang, setLang] = useState(queue[0].lang);
    const [code, setCode] = useState(queue[0].code);
    const [element, setElement] = useState(null);
    const [messages, setMessages] = useState([]);

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        toast.success("Code copied to clipboard");
    }

    const enqueue = () => {
        if(!element){
            toast.error("Please enter element");
            return;
        }

        setArray([...array, element]);
        setMessages([...messages, `${element} pushed in queue`]);
        toast.success(`${element} pushed in queue`);
    }

    const dequeue = () => {
        if(array.length === 0){
            toast.error("QUEUE IS EMPTY");
            return;
        }

        setArray(array.slice(1));
        setMessages([...messages, `Element dequeued`]);
        toast.success(`Element dequeued`);
    }


    const navigate = useNavigate();

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden py-5 lg:h-auto lg:py-6 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                {/* Sidebar section */}
                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* Main content section */}
                <div className={`z-20 relative ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[100vh] lg:h-auto overflow-auto lg:py-5 px-8 rounded-xl md:py-5 content flex justify-start lg:justify-start items-center lg:items-start flex-col gap-5 lg:gap-5 relative`}>
                <Toaster />
                    <span onClick={() => navigate('/visualizer')} className={`absolute top-5 left-5 z-50 ${dark ? "text-black" : "text-white"} cursor-pointer`}><IoIosArrowRoundBack className={` z-30 text-2xl`} /></span>

                    <h1 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-3xl font-bold duration-200 ease-in-out font-Titillium`}>Queue Data Structure</h1>

                    <hr className='w-full h-[1px] bg-zinc-600' />


                    {/* linked list */}
                    <div className={`w-full h-auto flex justify-center items-center`}>
                        <div className={`w-full md:w-[80%] rounded-md h-auto ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out px-10 py-5 flex flex-col justify-start items-center gap-3`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-lg md:text-xl font-semibold`}>Queue</p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, meaning that the first element added to the queue is the first one to be removed. <br /><br />

                                Characteristics: <br />

                                1.  Order: Elements are added and removed in a specific order, with the oldest element being removed first. <br />
                                2.  Insertion: New elements are added to the end of the queue.  <br />
                                3.  Deletion: Elements are removed from the front of the queue.  <br />
                                4. Access: Only the front and rear elements are accessible.  <br /><br />

                                Key Operations:  <br />

                                1. Enqueue: Adding a new element to the end of the queue.  <br />
                                2. Dequeue: Removing an element from the front of the queue. <br />
                                3. Peek: Viewing the element at the front of the queue without  <br />
                                4. IsEmpty: Checking if the queue is empty. <br />
                            </p>

                            <hr className='w-full h-[1px] bg-zinc-600 opacity-55 lg:opacity-80' />

                            <div className={`w-full py-2 lg:py-5 rounded-md px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out h-auto flex flex-col justify-center items-center gap-5`}>
                                <div className='w-full h-auto py-2 flex flex-col justify-around items-center lg:h-full lg:w-1/2'>
                                    <div className='w-full py-3 h-full flex flex-col justify-center items-center gap-2'>
                                        <input type="number" className={`w-full sm:w-[60%] md:w-[40%] lg:w-[60%] ${dark ? "bg-white text-black" : "bg-black text-white"} duration-200 ease-in-out px-3 py-1 outline-none rounded-md`} value={element} placeholder='Enter element' onChange={(e) => setElement(e.target.value)} />
                                        <div className='w-full flex justify-center items-center gap-2'>
                                            <button className={`bg-cyan-500 text-white rounded-md py-1 px-4 cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={enqueue}>Enqueue</button>
                                            <button className={`bg-red-500 text-white rounded-md py-1 px-4 cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={dequeue}>Dequeue</button>
                                        </div>

                                        <hr className='w-full h-[1px] bg-zinc-600 my-2' />
                                    </div>

                                    <div className={`w-full py-3 ${messages.length === 0 ? "hidden" : "block"} flex flex-col justify-center items-center gap-2 overflow-y-auto content`}>
                                        {messages.length > 0 && messages.map((msg, index)=> {
                                            return <p key={index} className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-sm`}>{msg}</p>
                                        })}
                                    </div>
                                </div>

                                <div className='w-full h-auto py-2 flex justify-start overflow-x-auto content items-center lg:h-full lg:w-1/2 gap-2'>
                                    {array.length > 0 && array.map((elem, index)=> {
                                         return <span key={index} className={`py-2 px-3 rounded-md ${dark ? "bg-black text-white" : "bg-white text-black"} hover:-translate-y-3 duration-200 ease-in-out cursor-pointer`}>{elem}</span>
                                    })}
                                </div>
                            </div>

                            <div className={`w-full h-auto flex flex-wrap justify-start py-2 px-3 items-center gap-3`}>
                                {languages.map((lang, index) => {
                                    return <span className={`border-2 ${dark ? "text-black border-black" : "text-white border-white"} px-3 py-1 rounded-md cursor-pointer`} onClick={() => { setLang(lang); setCode(queue[index].code) }}>{lang}</span>
                                })}
                            </div>

                            <div className={`w-full rounded-md py-3 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out`}>
                                <pre className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-mono overflow-x-auto`}>{code}</pre>
                            </div>

                            <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={copyToClipboard}>Copy to Clipboard</button>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
}

export default Queue;
