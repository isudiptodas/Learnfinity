import React, { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { bubbleSort, insertionSort, selectionSort, mergeSortCode } from '../pages/sorting.js';;

function Sorting() {

    const languages = [
        'C++',
        'Java',
        'Python'
    ];

    const { dark } = useTheme();
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    const [sorting, setSorting] = useState(false);
    const [sortedIndex, setSortedIndex] = useState(null);
    const [current, setCurrent] = useState(null);
    const [comparing, setComparing] = useState([]);
    const [currentMin, setCurrentMin] = useState(null);
    const [merged, setMerged] = useState([]);
    const [subArrays, setSubArrays] = useState([]);
    const [mergedArray, setMergedArray] = useState([]);

    const [array, setArray] = useState([]);
    const [lang, setLang] = useState(bubbleSort[0].lang);
    const [code, setCode] = useState(bubbleSort[0].code);
    const [code2, setCode2] = useState(selectionSort[0].code);
    const [code3, setCode3] = useState(insertionSort[0].code);
    const [code4, setCode4] = useState(mergeSortCode[0].code);
    const [size, setSize] = useState(0);
    const [running, setRunning] = useState(false);
    const [option, setOption] = useState('');

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const mergeSort = async (arr, l, r) => {
        if (l >= r) return;
        let mid = Math.floor((l + r) / 2);

        // Store subarrays at each breakdown
        setSubArrays(prev => [...prev, arr.slice(l, r + 1)]);
        await new Promise(resolve => setTimeout(resolve, 500));

        await mergeSort(arr, l, mid);
        await mergeSort(arr, mid + 1, r);
        await merge(arr, l, mid, r);
    };

    const merge = async (arr, l, mid, r) => {
        let left = arr.slice(l, mid + 1), right = arr.slice(mid + 1, r + 1);
        let i = 0, j = 0, k = l;

        setMergedArray([...left, ...right]); // Show merging phase
        await new Promise(resolve => setTimeout(resolve, 500));

        while (i < left.length && j < right.length) {
            setCurrent([l + i, mid + 1 + j]);
            await new Promise(resolve => setTimeout(resolve, 500));

            if (left[i] <= right[j]) arr[k++] = left[i++];
            else arr[k++] = right[j++];
        }
        while (i < left.length) arr[k++] = left[i++];
        while (j < right.length) arr[k++] = right[j++];

        setArray([...arr]);
        setMerged([...merged, ...Array.from({ length: r - l + 1 }, (_, index) => l + index)]);
    };

    const startMergeSort = () => {
        let arr = [...array];
        setMerged([]);
        setSubArrays([]);
        setMergedArray([]);
        mergeSort(arr, 0, arr.length - 1);
    };

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
        setSortedIndex(null);
        toast.success(`Array created of size ${newArray.length}`);
    };

    const bubbleSortArray = async () => {
        setSorting(true);
        let arr = [...array];
        let n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                setComparing([j, j + 1]);
                setCurrent(j);

                await new Promise((resolve) => setTimeout(resolve, 500));

                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    setArray([...arr]);
                }
            }
            setSortedIndex(n - i - 1);
        }

        setSorting(false);
        setComparing([]);
        setSortedIndex(0);
    };

    const selectionSortArray = async () => {
        setSorting(true);
        let arr = [...array];
        let n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            setCurrentMin(i);

            for (let j = i + 1; j < n; j++) {
                setComparing([minIndex, j]);
                await new Promise((resolve) => setTimeout(resolve, 300));

                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                    setCurrentMin(j);
                }
            }

            if (minIndex !== i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
                setArray([...arr]);
            }

            setSortedIndex(i);
        }

        setSortedIndex(n - 1);
        setSorting(false);
        setComparing([]);
        setCurrentMin(null);
    };

    const insertionSortArray = async () => {
        setRunning(true);
        let tempArray = [...array];

        for (let i = 1; i < tempArray.length; i++) {
            let key = tempArray[i], j = i - 1;
            setCurrent(i);
            await new Promise((resolve) => setTimeout(resolve, 500));

            while (j >= 0 && tempArray[j] > key) {
                setComparing([j, j + 1]);
                tempArray[j + 1] = tempArray[j];
                j--;
                setArray([...tempArray]);
                await new Promise((resolve) => setTimeout(resolve, 500));
            }

            tempArray[j + 1] = key;
            setSortedIndex(i);
            setArray([...tempArray]);
            await new Promise((resolve) => setTimeout(resolve, 500));
        }

        setRunning(false);
    };


    const copyToClipboard = () => {
        if (option === 'bubble') {
            navigator.clipboard.writeText(code);
        }
        else if (option === 'selection') {
            navigator.clipboard.writeText(code2);
        }
        else if (option === 'merge') {
            navigator.clipboard.writeText(code4);
        }
        else {
            navigator.clipboard.writeText(code3);
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

                    <h1 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-3xl font-bold duration-200 ease-in-out font-Titillium`}>Sorting Algorithms</h1>

                    <hr className='w-full h-[1px] bg-zinc-600' />

                    {/* bubble sort */}
                    <div className={`w-full h-auto ${option === 'bubble' ? "block" : "hidden"} flex justify-center items-center`}>
                        <div className={`w-full md:w-[80%] rounded-md h-auto ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out px-10 py-5 flex flex-col justify-start items-center gap-3`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-lg md:text-xl font-semibold`}>Bubble Sort</p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Bubble sort is a simple sorting algorithm that repeatedly steps through a list of elements, comparing adjacent elements and swapping them if they are in the wrong order. This process continues until the list is sorted, with the largest elements "bubbling" to the end of the list. Bubble sort has a time complexity of O(n^2), making it less efficient for large datasets.</p>

                            <hr className='w-full h-[1px] bg-zinc-600 opacity-55 lg:opacity-80' />

                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Time Complexity : <span className='font-bold'>O(n^2)</span> </p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Space Complexity : <span className='font-bold'>O(1)</span> </p>

                            <div className={`w-full ${array.length > 0 ? "hidden" : "block"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <input onChange={(e) => setSize(e.target.value)} type="number" className={` h-auto ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out px-3 w-[50%] py-1 lg:py-2 rounded-md outline-none`} placeholder='Enter array size (maximum 7)' />
                                <button className={`bg-teal-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={generateArray}>Generate Array</button>
                            </div>

                            <div className={`w-full px-2 py-5 flex justify-center items-center gap-2 ${option === 'bubble' ? "block" : "hidden"}`}>
                                {array.length > 0 && array.map((elem, index) => {
                                    return <span key={index} className={`${dark ? "bg-black text-white" : "bg-white text-black"} ${current === index ? "bg-yellow-400 -translate-y-3" : ""} duration-200 ease-in-out p-2 lg:p-4 relative hover:-translate-y-3 cursor-pointer rounded-md`} style={{ height: `${elem * 3}px` }}> <span className={`absolute text-[5px] lg:text-[8px] top-1 left-1 lg:left-2`}>{index}</span> {elem}</span>
                                })}
                            </div>

                            <div className={`w-full ${array.length > 0 ? "block" : "hidden"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={bubbleSortArray}>{sorting ? "Sorting..." : "Start Sorting"}</button>
                            </div>

                            <div className={`w-full h-auto flex flex-wrap justify-start py-2 px-3 items-center gap-3`}>
                                {languages.map((lang, index) => {
                                    return <span className={`border-2 ${dark ? "text-black border-black" : "text-white border-white"} px-3 py-1 rounded-md cursor-pointer`} onClick={() => { setLang(lang); setCode(bubbleSort[index].code) }}>{lang}</span>
                                })}
                            </div>

                            <div className={`w-full rounded-md py-3 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out`}>
                                <pre className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-mono overflow-x-auto`}>{code}</pre>
                            </div>

                            <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={copyToClipboard}>Copy to Clipboard</button>
                        </div>
                    </div>

                    {/* selection sort */}
                    <div className={`w-full h-auto ${option === 'selection' ? "block" : "hidden"} flex justify-center items-center`}>
                        <div className={`w-full md:w-[80%] rounded-md h-auto ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out px-10 py-5 flex flex-col justify-start items-center gap-3`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-lg md:text-xl font-semibold`}>Selection Sort</p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the list and swapping it with the first unsorted element. This process continues until the entire list is sorted.</p>

                            <hr className='w-full h-[1px] bg-zinc-600 opacity-55 lg:opacity-80' />

                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Time Complexity : <span className='font-bold'>O(n^2)</span> </p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Space Complexity : <span className='font-bold'>O(1)</span> </p>

                            <div className={`w-full ${array.length > 0 ? "hidden" : "block"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <input onChange={(e) => setSize(e.target.value)} type="number" className={` h-auto ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out px-3 w-[50%] py-1 lg:py-2 rounded-md outline-none`} placeholder='Enter array size (maximum 7)' />
                                <button className={`bg-teal-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={generateArray}>Generate Array</button>
                            </div>

                            <div className={`w-auto px-4 py-2 ${array.length > 0 ? "block" : "hidden"} rounded-md ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out flex flex-col lg:flex-row justify-center items-center gap-3`}>
                                <p className={`text-sm `}>🟡 Current minimum element </p>
                                <p className={`text-sm `}>🔴 Elements being swapped</p>
                                <p className={`text-sm `}>🟢 Sorted elements</p>
                            </div>

                            <div className={`w-full px-2 py-5 flex justify-center items-center gap-2 ${option === 'selection' ? "block" : "hidden"}`}>
                                {array.length > 0 && array.map((elem, index) => {
                                    return <span key={index} className={`${dark ? "bg-black text-white" : "bg-white text-black"} ${currentMin === index ? "bg-blue-500" : ""} ${comparing.includes(index) ? "bg-red-500" : ""}  ${index <= sortedIndex ? "bg-green-500" : ""} duration-200 ease-in-out p-2 lg:p-4 lg:py-7 relative hover:-translate-y-3 cursor-pointer rounded-md`} style={{ height: `${elem * 3}px` }}> <span className="absolute text-[5px] lg:text-[8px] top-1 left-1 lg:left-2">{index}</span> {elem}
                                    </span>
                                })}

                            </div>

                            <div className={`w-full ${array.length > 0 ? "block" : "hidden"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={selectionSortArray}>{sorting ? "Sorting..." : "Start Sorting"}</button>
                            </div>

                            <div className={`w-full h-auto flex flex-wrap justify-start py-2 px-3 items-center gap-3`}>
                                {languages.map((lang, index) => {
                                    return <span className={`border-2 ${dark ? "text-black border-black" : "text-white border-white"} px-3 py-1 rounded-md cursor-pointer`} onClick={() => { setLang(lang); setCode2(selectionSort[index].code) }}>{lang}</span>
                                })}
                            </div>

                            <div className={`w-full rounded-md py-3 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out`}>
                                <pre className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-mono overflow-x-auto`}>{code2}</pre>
                            </div>

                            <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={copyToClipboard}>Copy to Clipboard</button>
                        </div>
                    </div>

                    {/* insertion sort */}
                    <div className={`w-full h-auto ${option === 'insertion' ? "block" : "hidden"} flex justify-center items-center`}>
                        <div className={`w-full md:w-[80%] rounded-md h-auto ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out px-10 py-5 flex flex-col justify-start items-center gap-3`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-lg md:text-xl font-semibold`}>Insertion Sort</p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Insertion sort is a simple sorting algorithm that works by iterating through the list one element at a time, inserting each element into its proper position within the previously sorted portion of the list.  </p>

                            <hr className='w-full h-[1px] bg-zinc-600 opacity-55 lg:opacity-80' />

                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Time Complexity : <span className='font-bold'>O(n^2)</span> </p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Space Complexity : <span className='font-bold'>O(1)</span> </p>

                            <div className={`w-full ${array.length > 0 ? "hidden" : "block"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <input onChange={(e) => setSize(e.target.value)} type="number" className={` h-auto ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out px-3 w-[50%] py-1 lg:py-2 rounded-md outline-none`} placeholder='Enter array size (maximum 7)' />
                                <button className={`bg-teal-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={generateArray}>Generate Array</button>
                            </div>

                            <div className={`w-auto px-4 py-2 ${array.length > 0 ? "block" : "hidden"} rounded-md ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out flex flex-col lg:flex-row justify-center items-center gap-3`}>
                                <p className={`text-sm `}>🟡 Current element being inserted</p>
                                <p className={`text-sm `}>🔴 Elements being shifted</p>
                                <p className={`text-sm `}>🟢 Sorted elements</p>
                            </div>

                            <div className={`w-full px-2 py-5 flex justify-center items-center gap-2 ${option === 'insertion' ? "block" : "hidden"}`}>
                                {array.length > 0 && array.map((elem, index) => {
                                    return <span key={index} className={`${dark ? "bg-black text-white" : "bg-white text-black"} ${current === index ? "bg-yellow-400" : ""} ${comparing.includes(index) ? "bg-red-500" : ""} ${index <= sortedIndex ? "bg-green-500" : ""} duration-200 ease-in-out p-2 lg:p-4 relative hover:-translate-y-3 cursor-pointer rounded-md`} style={{ height: `${elem * 3}px` }}> <span className="absolute text-[5px] lg:text-[8px] top-1 left-1 lg:left-2">{index}</span> {elem}
                                    </span>;
                                })}

                            </div>

                            <div className={`w-full ${array.length > 0 ? "block" : "hidden"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={insertionSortArray}>{sorting ? "Sorting..." : "Start Sorting"}</button>
                            </div>

                            <div className={`w-full h-auto flex flex-wrap justify-start py-2 px-3 items-center gap-3`}>
                                {languages.map((lang, index) => {
                                    return <span className={`border-2 ${dark ? "text-black border-black" : "text-white border-white"} px-3 py-1 rounded-md cursor-pointer`} onClick={() => { setLang(lang); setCode3(insertionSort[index].code) }}>{lang}</span>
                                })}
                            </div>

                            <div className={`w-full rounded-md py-3 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out`}>
                                <pre className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-mono overflow-x-auto`}>{code3}</pre>
                            </div>

                            <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={copyToClipboard}>Copy to Clipboard</button>
                        </div>
                    </div>

                    {/* merge sort */}
                    <div className={`w-full h-auto ${option === 'merge' ? "block" : "hidden"} flex justify-center items-center`}>
                        <div className={`w-full md:w-[80%] rounded-md h-auto ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out px-10 py-5 flex flex-col justify-start items-center gap-3`}>
                            <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-lg md:text-xl font-semibold`}>Merge Sort</p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Merge sort is a popular and efficient sorting algorithm that uses a divide-and-conquer approach to sort a list of elements. It is a stable sort, meaning that the order of equal elements is preserved, and it has a time complexity of O(n log n), making it suitable for large datasets. </p>

                            <hr className='w-full h-[1px] bg-zinc-600 opacity-55 lg:opacity-80' />

                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Time Complexity : <span className='font-bold'>O(n log n)</span> </p>
                            <p className={`${dark ? "text-black" : "text-white"} md:text-start duration-200 ease-in-out text-[10px] w-full text-center`}>Space Complexity : <span className='font-bold'>O(n)</span> </p>

                            <div className={`w-full ${array.length > 0 ? "hidden" : "block"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <input onChange={(e) => setSize(e.target.value)} type="number" className={` h-auto ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out px-3 w-[50%] py-1 lg:py-2 rounded-md outline-none`} placeholder='Enter array size (maximum 7)' />
                                <button className={`bg-teal-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={generateArray}>Generate Array</button>
                            </div>

                            <div className={`w-auto px-4 py-2 ${array.length > 0 ? "block" : "hidden"} rounded-md ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out flex flex-col lg:flex-row justify-center items-center gap-3`}>
                                <p className={`text-sm `}>🟡 The elements currently selected for merging.</p>
                                <p className={`text-sm `}>🔴 The elements actively being compared before merging.</p>
                                <p className={`text-sm `}>🟢 The elements that have been successfully merged</p>
                                <p className={`text-sm `}>🔵 The current elements being processed</p>
                            </div>

                            <div className={`w-full px-2 py-5 flex flex-col justify-center overflow-hidden items-center gap-2 ${option === 'merge' ? "block" : "hidden"}`}>

                                {subArrays.length > 0 && (
                                    <div className="w-full flex flex-wrap justify-center gap-4">
                                        {subArrays.map((sub, i) => (
                                            <div key={i} className="flex gap-2 border p-2 rounded-md">
                                                {sub.map((num, idx) => (
                                                    <span key={idx} className="p-3 bg-blue-400 text-white rounded-md">{num}</span>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {mergedArray.length > 0 && (
                                    <div className="w-full flex justify-center gap-2">
                                        {mergedArray.map((num, index) => (
                                            <span key={index} className="p-3 bg-red-500 text-white rounded-md">{num}</span>
                                        ))}
                                    </div>
                                )}

                                <div className={`w-full flex justify-center items-center gap-5`}>
                                    {array.map((num, index) => (
                                        <span key={index} className={`p-3 rounded-md text-white ${merged.includes(index) ? "bg-green-500" :
                                            (Array.isArray(current) && current.includes(index)) ? "bg-yellow-400" : "bg-gray-600"}`}
                                            style={{ height: `${num * 3}px` }}>
                                            {num}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            <div className={`w-full ${array.length > 0 ? "block" : "hidden"} h-auto flex flex-col justify-start items-center gap-3`}>
                                <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={startMergeSort}>{sorting ? "Sorting..." : "Start Sorting"}</button>
                            </div>

                            <div className={`w-full h-auto flex flex-wrap justify-start py-2 px-3 items-center gap-3`}>
                                {languages.map((lang, index) => {
                                    return <span className={`border-2 ${dark ? "text-black border-black" : "text-white border-white"} px-3 py-1 rounded-md cursor-pointer`} onClick={() => { setLang(lang); setCode4(mergeSortCode[index].code) }}>{lang}</span>
                                })}
                            </div>

                            <div className={`w-full rounded-md py-3 px-4 ${dark ? "bg-gray-200" : "bg-zinc-800"} duration-200 ease-in-out`}>
                                <pre className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-mono overflow-x-auto`}>{code4}</pre>
                            </div>

                            <button className={`bg-cyan-500 rounded-md ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-1 cursor-pointer hover:opacity-75`} onClick={copyToClipboard}>Copy to Clipboard</button>
                        </div>
                    </div>


                    <div className={`w-full rounded-md h-auto py-4 px-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3 sm:gap-8`}>
                        <div className={`w-full cursor-pointer hover:shadow-md hover:-translate-y-4 rounded-md h-44 ${dark ? "bg-white" : "bg-black"} px-5 py-3 duration-200 ease-in-out flex flex-col justify-evenly items-center gap-3`} onClick={() => setOption('bubble')}>
                            <h3 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-xl sm:text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Bubble Sort</h3>
                            <p className={`w-full text-center ${dark ? "text-black" : "text-white"} opacity-55 duration-200 ease-in-out text-sm`}>Bubble sort implementation with arrays</p>
                        </div>
                        <div className={`w-full cursor-pointer hover:shadow-md hover:-translate-y-4 rounded-md h-44 ${dark ? "bg-white" : "bg-black"} px-5 py-3 duration-200 ease-in-out flex flex-col justify-evenly items-center gap-3`} onClick={() => setOption('selection')}>
                            <h3 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-xl sm:text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Selection Sort</h3>
                            <p className={`w-full text-center ${dark ? "text-black" : "text-white"} opacity-55 duration-200 ease-in-out text-sm`}>Selection sort implementation with arrays.</p>
                        </div>
                        <div className={`w-full cursor-pointer hover:shadow-md hover:-translate-y-4 rounded-md h-44 ${dark ? "bg-white" : "bg-black"} px-5 py-3 duration-200 ease-in-out flex flex-col justify-evenly items-center gap-3`} onClick={() => setOption('insertion')}>
                            <h3 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-xl sm:text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Insertion Sort</h3>
                            <p className={`w-full text-center ${dark ? "text-black" : "text-white"} opacity-55 duration-200 ease-in-out text-sm`}>Insertion sort implementation with arrays.</p>
                        </div>
                        <div className={`w-full cursor-pointer hover:shadow-md hover:-translate-y-4 rounded-md h-44 ${dark ? "bg-white" : "bg-black"} px-5 py-3 duration-200 ease-in-out flex flex-col justify-evenly items-center gap-3`} onClick={() => setOption('merge')}>
                            <h3 className={`text-center w-full ${dark ? "text-black" : "text-white"} text-xl sm:text-2xl font-semibold duration-200 ease-in-out font-Titillium`}>Merge Sort</h3>
                            <p className={`w-full text-center ${dark ? "text-black" : "text-white"} opacity-55 duration-200 ease-in-out text-sm`}>Insertion sort implementation with arrays.</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Sorting;
