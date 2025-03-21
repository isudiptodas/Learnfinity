import React, { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { linearSearching, binarySearching } from '../pages/searching.js';;

function Searching() {

    const languages = [
        'C++',
        'Java',
        'Python'
    ];

    const { dark } = useTheme();
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    const [array, setArray] = useState([]);
    const [lang, setLang] = useState(linearSearching[0].lang);
    const [code, setCode] = useState(linearSearching[0].code);
    const [code2, setCode2] = useState(binarySearching[0].code);
    const [size, setSize] = useState(0);
    const [target, setTarget] = useState(-1);
    const [searchIndex, setSearchIndex] = useState(-1);
    const [found, setFound] = useState(false);
    const [running, setRunning] = useState(false);
    const [ispresent, setPresent] = useState(false);
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(-1);
    const [mid, setMid] = useState(-1);

    const generateArray = () => {

        if (size === 0) {
            toast.error("Array size should be minimum 5 and maximum 7");
            return;
        }

        if (size > 7) {
            toast.error("Array size should be not more than 7");
            return;
        }

        const newArray = Array.from({ length: size }, () =>
            Math.floor(Math.random() * 100)
        );
        setArray(newArray);
        setSearchIndex(-1);
        setFound(false);
        toast.success(`Array created of size ${newArray.length}`);
    };

    const generateSortedArray = () => {

        if (size === 0) {
            toast.error("Array size should be minimum 5 and maximum 7");
            return;
        }

        if (size > 7) {
            toast.error("Array size should be not more than 7");
            return;
        }

        const newArray = Array.from({ length: size }, () =>
            Math.floor(Math.random() * 100)
        ).sort((a, b) => a - b);
        setArray(newArray);
        setLow(0);
        setHigh(newArray.length - 1);
        setMid(-1);
        setFound(false);
    };

    const startBinarySearch = async () => {
        setRunning(true);
        setFound(false);
        let l = 0, h = array.length - 1;

        while (l <= h) {
            let m = Math.floor((l + h) / 2);
            setMid(m);
            await new Promise((resolve) => setTimeout(resolve, 800));

            if (array[m] === target) {
                setFound(true);
                setSearchIndex(m);
                setRunning(false);
                return;
            } else if (array[m] < target) {
                l = m + 1;
            } else {
                h = m - 1;
            }

            setLow(l);
            setHigh(h);
        }

        toast.error("Element not present");
        setRunning(false);
    };

    const startSearch = async () => {
        setRunning(true);
        setFound(false);
        setSearchIndex(-1);

        for (let i = 0; i < array.length; i++) {
            setSearchIndex(i);
            await new Promise((resolve) => setTimeout(resolve, 500));
            if (array[i] === Number(target)) {
                setFound(true);
                setRunning(false);
                setPresent(true);
                return;
            }
        }

        toast.error("Element not present");
        setPresent(false);
        setRunning(false);
    };

    const [option, setOption] = useState('');

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const copyToClipboard = () => {
        if (option === 'linear') {
            navigator.clipboard.writeText(code);
        }
        else {
            navigator.clipboard.writeText(code2);
        }

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

                    <h1 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-3xl font-bold duration-200 ease-in-out font-Titillium`}>Searching Algorithms</h1>

                    <hr className='w-full h-[1px] bg-zinc-600' />

                    {/* linear search */}
                    <div className={`w-full h-auto ${option === 'linear' ? "block" : "hidden"} flex justify-center items-center`}>
                        <div className={`w-full md:w-[80%] rounded-md h-auto ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out px-10 py-5 flex flex-col justify-start items-center gap-3`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-lg md:text-xl font-semibold`}>Linear Search</p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Linear Search is a fundamental searching algorithm used to find a specific element within a list or array. It works by iterating through each element in the list, one by one, until it finds the desired element or reaches the end of the list. This straightforward approach makes Linear Search easy to implement and understand, but it can be less efficient for large datasets compared to other searching algorithms. Despite this, Linear Search remains a valuable algorithm in computer science, particularly for small to medium-sized datasets or situations where simplicity is more important than speed.</p>

                            <hr className='w-full h-[1px] bg-zinc-600 opacity-55 lg:opacity-80' />

                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Time Complexity : <span className='font-bold'>O(n)</span> </p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Space Complexity : <span className='font-bold'>O(1)</span> </p>

                            <div className={`w-full ${array.length > 0 ? "hidden" : "block"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <input onChange={(e) => setSize(e.target.value)} type="number" className={` h-auto ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out px-3 w-[50%] py-1 lg:py-2 rounded-md outline-none`} placeholder='Enter array size (maximum 7)' />
                                <button className={`bg-teal-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={generateArray}>Generate Array</button>
                            </div>

                            <div className='w-full px-2 py-5 flex justify-center items-center gap-2'>
                                {array.length > 0 && array.map((elem, index) => {
                                    return <span key={index} className={`${dark ? "bg-black text-white" : "bg-white text-black"} ${searchIndex === index ? "bg-yellow-400 -translate-y-3" : ""} ${found && searchIndex === index ? "bg-emerald-600" : ""} duration-200 ease-in-out p-2 lg:p-4 relative hover:-translate-y-3 cursor-pointer rounded-md`}> <span className={`absolute text-[5px] lg:text-[8px] top-1 left-1 lg:left-2`}>{index}</span> {elem}</span>
                                })}
                            </div>

                            <div className={`w-full ${array.length > 0 ? "block" : "hidden"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <input onChange={(e) => setTarget(e.target.value)} type="number" className={` h-auto ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out px-3 w-[50%] py-1 lg:py-2 rounded-md outline-none`} placeholder='Enter target element' />
                                <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={startSearch}>{running ? "Searching..." : "Start Search"}</button>
                            </div>

                            <p className={`text-green-500 duration-200 ease-in-out text-lg md:text-xl font-semibold ${found ? "block" : "hidden"}`}>{`Element found at index ${searchIndex} 🎉`}</p>

                            <div className={`w-full h-auto flex flex-wrap justify-start py-2 px-3 items-center gap-3`}>
                                {languages.map((lang, index) => {
                                    return <span className={`border-2 ${dark ? "text-black border-black" : "text-white border-white"} px-3 py-1 rounded-md cursor-pointer`} onClick={() => { setLang(lang); setCode(linearSearching[index].code) }}>{lang}</span>
                                })}
                            </div>

                            <div className={`w-full rounded-md py-3 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out`}>
                                <pre className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-mono overflow-x-auto`}>{code}</pre>
                            </div>

                            <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={copyToClipboard}>Copy to Clipboard</button>
                        </div>
                    </div>

                    {/* binary search */}
                    <div className={`w-full h-auto ${option === 'binary' ? "block" : "hidden"} flex justify-center items-center`}>
                        <div className={`w-full md:w-[80%] rounded-md h-auto ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out px-10 py-5 flex flex-col justify-start items-center gap-3`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-lg md:text-xl font-semibold`}>Binary Search</p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Binary Search is an efficient searching algorithm used to find an element in a sorted array. It works by dividing the array into two halves and comparing the target element with the middle element. If the target element is less than the middle element, the search continues in the left half; otherwise, it continues in the right half. This process is repeated until the target element is found or the array is exhausted. </p>

                            <hr className='w-full h-[1px] bg-zinc-600 opacity-55 lg:opacity-80' />

                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Time Complexity : <span className='font-bold'>O(log n)</span> </p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Space Complexity : <span className='font-bold'>O(1)</span> </p>

                            <div className={`w-full ${array.length > 0 ? "hidden" : "block"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <input onChange={(e) => setSize(e.target.value)} type="number" className={` h-auto ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out px-3 w-[50%] py-1 lg:py-2 rounded-md outline-none`} placeholder='Enter array size (maximum 7)' />
                                <button className={`bg-teal-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={generateSortedArray}>Generate Array</button>
                            </div>

                            <div className='w-full px-2 py-5 flex justify-center items-center gap-2'>
                                {array.length > 0 && array.map((elem, index) => {
                                    return <span key={index} className={`${dark ? "bg-black text-white" : "bg-white text-black"} ${mid === index ? "bg-yellow-400 -translate-y-3" : ""} ${found && searchIndex === index ? "bg-emerald-600" : ""} duration-200 ease-in-out p-2 lg:p-4 relative hover:-translate-y-3 cursor-pointer rounded-md`}> <span className={`absolute text-[5px] lg:text-[8px] top-1 left-1 lg:left-2`}>{index}</span> {elem}</span>
                                })}
                            </div>

                            <div className={`w-full ${array.length > 0 ? "block" : "hidden"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <input onChange={(e) => setTarget(e.target.value)} type="number" className={` h-auto ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out px-3 w-[50%] py-1 lg:py-2 rounded-md outline-none`} placeholder='Enter target element' />
                                <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={startBinarySearch}>{running ? "Searching..." : "Start Search"}</button>
                            </div>

                            <p className={`text-green-500 duration-200 ease-in-out text-lg md:text-xl font-semibold ${found ? "block" : "hidden"}`}>{`Element found at index ${searchIndex} 🎉`}</p>

                            <div className={`w-full h-auto flex flex-wrap justify-start py-2 px-3 items-center gap-3`}>
                                {languages.map((lang, index) => {
                                    return <span className={`border-2 ${dark ? "text-black border-black" : "text-white border-white"} px-3 py-1 rounded-md cursor-pointer`} onClick={() => { setLang(lang); setCode2(binarySearching[index].code) }}>{lang}</span>
                                })}
                            </div>

                            <div className={`w-full rounded-md py-3 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out`}>
                                <pre className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-mono overflow-x-auto`}>{code2}</pre>
                            </div>

                            <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={copyToClipboard}>Copy to Clipboard</button>
                        </div>
                    </div>

                    <div className={`w-full rounded-md h-auto py-4 px-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3 sm:gap-8`}>
                        <div className={`w-full cursor-pointer hover:shadow-md hover:-translate-y-4 rounded-md h-44 ${dark ? "bg-white" : "bg-black"} px-5 py-3 duration-200 ease-in-out flex flex-col justify-evenly items-center gap-3`} onClick={() => setOption('binary')}>
                            <h3 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-xl sm:text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Binary Search</h3>
                            <p className={`w-full text-center ${dark ? "text-black" : "text-white"} opacity-55 duration-200 ease-in-out text-sm`}>Binary search implementation with arrays</p>
                        </div>
                        <div className={`w-full cursor-pointer hover:shadow-md hover:-translate-y-4 rounded-md h-44 ${dark ? "bg-white" : "bg-black"} px-5 py-3 duration-200 ease-in-out flex flex-col justify-evenly items-center gap-3`} onClick={() => setOption('linear')}>
                            <h3 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-xl sm:text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Linear Search</h3>
                            <p className={`w-full text-center ${dark ? "text-black" : "text-white"} opacity-55 duration-200 ease-in-out text-sm`}>Linear Search implementation with arrays.</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Searching;
