import React, { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { linkedList } from '../linkedlist.js';

function LinkedList() {

    const languages = [
        'C++',
        'Java',
        'Python'
    ];

    const { dark } = useTheme();
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    const [array, setArray] = useState([]);
    const [lang, setLang] = useState(linkedList[0].lang);
    const [code, setCode] = useState(linkedList[0].code);
    const [element, setElement] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const[atIndex, setAtIndex] = useState(false);
    const[index, setIndex] = useState(-1);
    const[deleteIndex, setDeleteIndex] = useState(-1);

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    
    const pushAtFront = () => {
        if(!element){
            toast.error("Please enter element to insert");
            return;
        }

        setArray([element, ...array]);
        setMessages([...messages, `${element} pushed at front`]);
        toast.success(`${element} pushed at front`);
        setElement('');
    }

    const pushAtEnd = () => {
        if(!element){
            toast.error("Please enter element to insert");
            return;
        }

        setArray([...array, element]);
        setMessages([...messages, `${element} pushed at end`]);
        toast.success(`${element} pushed at end`);
        setElement('');
    }

    const deleteAtEnd = () => {
        if(array.length === 0){
            toast.error("LIST IS EMPTY");
            return;
        }

        const newArray = array.slice(0, -1);
        setArray(newArray);
        setMessages([...messages, `Last node deleted`]);
        toast.success(`Last node deleted`);
    }

    const deleteAtFront = () => {
        if(array.length === 0){
            toast.error("LIST IS EMPTY");
            return;
        }

        const newArray = array.slice(1);
        setArray(newArray);
        setMessages([...messages, `First node deleted`]);
        toast.success(`First node deleted`);
    }

    const insertAtPosition = () => {
        if(index === -1){
            toast.error("Index is required");
            return;
        }

        if(!element){
            toast.error("Element is required");
            return;
        }

        if(index > array.length){
            toast.error("Please enter valid index");
            return;
        }

        array.splice(index, 0, element);
        setArray([...array]);
        setMessages([...messages, `${element} pushed at index ${index}`]);
        toast.success(`${element} pushed at index ${index}`);
    }

    const deleteAtPosition = () => {
        if(deleteIndex === -1){
            toast.error("Index is required");
            return;
        }

        if(array.length === 0){
            toast.error("LIST IS EMPTY");
            return;
        }

        if(deleteIndex > array.length){
            toast.error("Enter valid index");
            return;
        }

        array.splice(deleteIndex, 1);
        setArray([...array]);
        setMessages([...messages, `Element deleted from index ${deleteIndex}`]);
        toast.success(`Element deleted from index ${deleteIndex}`);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        toast.success("Code copied to clipboard");
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

                    <h1 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-3xl font-bold duration-200 ease-in-out font-Titillium`}>Linked List Data Structure</h1>

                    <hr className='w-full h-[1px] bg-zinc-600' />


                    {/* linked list */}
                    <div className={`w-full h-auto flex justify-center items-center`}>
                        <div className={`w-full md:w-[80%] rounded-md h-auto ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out px-10 py-5 flex flex-col justify-start items-center gap-3`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-lg md:text-xl font-semibold`}>Linked List</p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>A linked list is a linear data structure in which elements are not stored at contiguous memory locations. Instead, each element, called a "node," points to the next node in the sequence, forming a chain-like structure.  <br /><br />

                                Characteristics: <br />

                                1. Dynamic Memory Allocation: Memory is allocated dynamically, allowing for efficient use of memory. <br />
                                2. Non-Contiguous Memory: Nodes are stored at non-contiguous memory locations <br />
                                3. Node Structure: Each node contains two primary components: data and a reference (or "link") to the next node.  <br />
                                4. Sequential Access: Nodes are accessed sequentially, one after the other<br /><br />

                                Key Operations:  <br />

                                1. Insertion: Adding a new node to the list.  <br />
                                2. Deletion: Removing a node from the list. <br />
                                3. Traversal: Iterating through the nodes in the list.<br />
                                4. Search: Finding a specific node in the list.  <br />
                                5. Update: Modifying the data of a node in the list. <br />
                            </p>

                            <hr className='w-full h-[1px] bg-zinc-600 opacity-55 lg:opacity-80' />

                            <div className={`w-full py-2 lg:py-5 rounded-md px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out h-auto flex flex-col justify-center items-center gap-5`}>
                                <div className='w-full h-auto py-2 flex flex-col justify-around items-center lg:h-full lg:w-1/2'>
                                    <div className='w-full py-3 h-full flex flex-col justify-center items-center gap-2'>
                                        <input type="number" className={`w-full sm:w-[60%] md:w-[40%] lg:w-[80%] ${dark ? "bg-white text-black" : "bg-black text-white"} duration-200 ease-in-out px-3 py-1 outline-none rounded-md`} value={element} placeholder='Enter element' onChange={(e) => setElement(e.target.value)} />
                                        <div className='w-full flex justify-center items-center gap-2'>
                                            <button className={`bg-cyan-500 text-white rounded-md py-1 px-4 lg:py-2 text-[12px] cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={pushAtFront}>Push At Front</button>
                                            <button className={`bg-purple-500 text-white rounded-md py-1 px-4 lg:py-2 text-[12px] cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={pushAtEnd}>Push At End</button>
                                            <button className={`bg-orange-400 text-white rounded-md py-1 px-4 lg:py-2 text-[12px] cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={insertAtPosition}>Push At Index</button>
                                        </div>

                                        <input type="number" className={`${dark ? "bg-white text-black" : "bg-black text-white"} duration-200 w-full sm:w-[60%] md:w-[40%] lg:w-[80%] ease-in-out px-2 py-1 lg:py-2 rounded-md outline-none`} placeholder='Enter insert index' onChange={(e) => setIndex(e.target.value)} />

                                        <hr className='w-full h-[1px] lg:h-[1.5px] bg-zinc-600 my-2' />

                                        <div className='w-full flex justify-center items-center gap-2'>
                                            <button className={`bg-red-400 text-white rounded-md py-1 px-4 lg:py-2 text-[12px] cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={deleteAtFront}>Delete At Front</button>
                                            <button className={`bg-red-600 text-white rounded-md py-1 px-4 lg:py-2 text-[12px] cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={deleteAtEnd}>Delete At End</button>
                                            <button className={`bg-red-800 text-white rounded-md py-1 px-4 lg:py-2 text-[12px] cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onClick={deleteAtPosition}>Delete At Index</button>
                                        </div>

                                        <input type="number" className={`${dark ? "bg-white text-black" : "bg-black text-white"} duration-200 w-full sm:w-[60%] md:w-[40%] lg:w-[80%] ease-in-out px-2 py-1 lg:py-2 rounded-md outline-none`} placeholder='Enter delete index' onChange={(e) => setDeleteIndex(e.target.value)} />
                                    </div>

                                    <div className={`w-full py-3 flex flex-col justify-center items-center gap-2 overflow-y-auto content`}>
                                        {messages.length > 0 && messages.map((msg, index)=> {
                                            return <p key={index} className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-sm`}>{msg}</p>
                                        })}
                                    </div>
                                </div>

                                <div className='w-full h-auto py-2 flex justify-start items-center lg:h-full lg:w-1/2 gap overflow-x-auto content'>
                                    {array.length > 0 && array.map((node, index)=> {
                                        return <div key={index} className={`w-auto flex justify-center items-center`}>
                                            <span className={`${dark ? "bg-black text-white" : "bg-white text-black"} py-2 px-3 rounded-md duration-200 ease-in-out cursor-pointer hover:-translate-y-3`}>{node}</span>
                                            <span className={`${dark ? " text-black" : " text-white"} rotate-180 text-lg duration-200 ease-in-out`}>{index !== array.length ? <IoIosArrowRoundBack/> : ""}</span>
                                        </div>
                                    })}
                                </div>
                            </div>

                            <div className={`w-full h-auto flex flex-wrap justify-start py-2 px-3 items-center gap-3`}>
                                {languages.map((lang, index) => {
                                    return <span className={`border-2 ${dark ? "text-black border-black" : "text-white border-white"} px-3 py-1 rounded-md cursor-pointer`} onClick={() => { setLang(lang); setCode(linkedList[index].code) }}>{lang}</span>
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

export default LinkedList;
