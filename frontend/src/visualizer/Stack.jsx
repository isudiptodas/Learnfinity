import React, { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { stack } from '../pages/stack.js';

function Stack() {

    const languages = [
        'C++',
        'Java',
        'Python'
    ];

    const { dark } = useTheme();
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    const [array, setArray] = useState([]);
    const [size, setSize] = useState(0);
    const [lang, setLang] = useState(stack[0].lang);
    const [code, setCode] = useState(stack[0].code);
    const [created, setCreated] = useState(false);
    const [element, setElement] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const createStack = () => {
        if (!size) {
            toast.error("Enter stack size");
            return;
        }

        if (size > 7) {
            toast.error("Size should be not greater than 7");
            return;
        }

        setCreated(true);
        toast.success("Stack created");
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        toast.success("Code copied to clipboard");
    }

    const pushElement = () => {
        if (array.length > size-1) {
            toast.error("STACK OVERFLOW");
            return;
        }

        if (!element) {
            toast.error("Please enter element");
            return;
        }

        setArray([...array, element]);
        setMessages([...messages, `${element} pushed in stack`]);
        toast.success(`${element} pushed in stack`);
        setElement(null);
    }

    const popElement = () => {
        if(array.length === 0){
            toast.error("STACK IS EMPTY");
            return;
        }

        setArray([...array.slice(0, -1)]);
        setMessages([...messages, 'Element popped from stack']);
    }

    const navigate = useNavigate();

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden py-5 lg:h-auto lg:py-6 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Toaster />

                {/* Sidebar section */}
                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* Main content section */}
                <div className={`z-20 relative ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[100vh] lg:h-auto overflow-auto lg:py-5 px-8 rounded-xl md:py-5 content flex justify-start lg:justify-start items-center lg:items-start flex-col gap-5 lg:gap-5 relative`}>

                    <span onClick={() => navigate('/visualizer')} className={`absolute top-5 left-5 z-50 ${dark ? "text-black" : "text-white"} cursor-pointer`}><IoIosArrowRoundBack className={` z-30 text-2xl`} /></span>

                    <h1 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-3xl font-bold duration-200 ease-in-out font-Titillium`}>Stack Data Structure</h1>

                    <hr className='w-full h-[1px] bg-zinc-600' />


                    {/* stack */}
                    <div className={`w-full h-auto flex justify-center items-center`}>
                        <div className={`w-full md:w-[80%] rounded-md h-auto ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out px-10 py-5 flex flex-col justify-start items-center gap-3`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-lg md:text-xl font-semibold`}>Stack</p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, meaning the last element added to the stack will be the first one to be removed.<br /><br />

                                Key Operations: <br />

                                1. Push: Add an element to the top of the stack. <br />
                                2. Pop: Remove the top element from the stack. <br />
                                3. Peek: Return the top element without removing it. <br /><br />

                                Characteristics: <br />

                                1. LIFO order: Elements are added and removed in reverse order. <br />
                                2. No random access: Elements can only be accessed from the top. <br />
                                3. Efficient insertion and deletion: O(1) time complexity for push and pop operations. <br />
                            </p>

                            <hr className='w-full h-[1px] bg-zinc-600 opacity-55 lg:opacity-80' />

                            <div className={`w-full px-2 py-5 flex flex-col justify-center items-center gap-2 ${created ? "hidden" : "block"}`}>
                                <input type="number" className={`w-[70%] lg:w-[40%] ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out px-3 py-1 rounded-md outline-none`} placeholder='Enter stack size (maximum 7)' onChange={(e) => setSize(e.target.value)} />
                                <button className={`bg-teal-500 text-white rounded-md py-1 px-4 cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={createStack}>Create Stack</button>
                            </div>

                            <div className={`w-full ${created ? "block" : "hidden"} py-2 lg:py-5 rounded-md px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out h-auto flex flex-col justify-center items-center lg:flex-row gap-5`}>
                                <div className='w-full h-auto py-2 flex flex-col justify-around items-center lg:h-full lg:w-1/2'>
                                    <div className='w-full py-3 h-full flex flex-col justify-center items-center gap-2'>
                                        <input type="number" className={`w-full sm:w-[60%] md:w-[40%] lg:w-[60%] ${dark ? "bg-white text-black" : "bg-black text-white"} duration-200 ease-in-out px-3 py-1 outline-none rounded-md`} value={element} placeholder='Enter element' onChange={(e) => setElement(e.target.value)} />
                                        <div className='w-full flex justify-center items-center gap-2'>
                                            <button className={`bg-cyan-500 text-white rounded-md py-1 px-4 cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={pushElement}>Push Element</button>
                                            <button className={`bg-red-500 text-white rounded-md py-1 px-4 cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={popElement}>Pop Element</button>
                                        </div>
                                    </div>

                                    <div className={`w-full py-3 flex flex-col justify-center items-center gap-2 overflow-y-auto content`}>
                                        {messages.length > 0 && messages.map((msg, index)=> {
                                            return <p key={index} className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-sm`}>{msg}</p>
                                        })}
                                    </div>
                                </div>

                                <div className='w-full h-auto py-2 flex flex-col justify-center items-center lg:h-full lg:w-1/2'>
                                    <div className={`h-auto px-1 py-2 w-1/3 border-b-2 border-r-2 border-l-2 ${dark ? "border-black" : "border-white"} duration-200 ease-in-out flex flex-col justify-end items-center gap-2`}>
                                        {array.length > 0 && array.map((elem, index)=> {
                                            return <span key={index} className={`${dark ? "bg-black text-white" : "bg-white text-black"} duration-200 ease-in-out w-full rounded-md py-2 px-2 text-center`}>{elem}</span>
                                        }).reverse()}
                                    </div>
                                </div>
                            </div>

                            <div className={`w-full h-auto flex flex-wrap justify-start py-2 px-3 items-center gap-3`}>
                                {languages.map((lang, index) => {
                                    return <span className={`border-2 ${dark ? "text-black border-black" : "text-white border-white"} px-3 py-1 rounded-md cursor-pointer`} onClick={() => { setLang(lang); setCode(stack[index].code) }}>{lang}</span>
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

export default Stack;
