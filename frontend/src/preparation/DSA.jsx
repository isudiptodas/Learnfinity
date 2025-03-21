import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaCopy } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import Loading from "../components/Loading.jsx";

function DSA() {

    const Topics = [
        'Arrays',
        'Strings',
        'Linked List',
        'Stack',
        'Queue',
        'Dynamic Programming',
        'Backtracking',
        'Recursion',
        'Binary Search',
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'Graphs',
        'Heap',
        'Hashing',
        'Trie',
        'STL',
        'Binary Trees',
        'AVL Trees',
        'Merge Sort',
        'Quick Sort',
        'Hash Tables',
        'Segment Tree',
        'Greedy Algorithm',
        'Bit Manipulation',
        'Divide and Conquer',
    ];

    const { dark } = useTheme();
    const navigate = useNavigate();

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [generating, setGenerating] = useState(false);
    const [linkGenerating, setLinkGenerating] = useState(false);
    const [companyType, setCompanyType] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [number, setNumber] = useState('');
    const [generatedQuestions, setGeneratedQuestions] = useState('');
    const [generatedLinks, setgeneratedLinks] = useState([]);
    const [topics, setTopics] = useState([]);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    //   useEffect(()=> {
    //     console.log(topics);
    //   }, [topics]);

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    const addTopics = (topic) => {
        setTopics([...topics, topic]);
    }

    const generateQuestions = async () => {

        if (!companyType || !difficulty || !topics || !number) {
            toast.error("All fields are required");
            return;
        }

        const input = `I am aiming for ${companyType} and for that I want do practice some ${difficulty} level questions on topics ${topics}. So give me ${number} practice questions. Note that give me these questions in simple text form and no italics or bold or underline or heading or anything, simple text.`;

        const api = import.meta.env.VITE_GEMINI_API_KEY;
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`;

        const data = {
            contents: [
                {
                    parts: [
                        {
                            text: input,
                        },
                    ],
                },
            ],
        };


        const headers = {
            'Content-Type': 'application/json',
        }

        try {
            setGenerating(true);
            const res = await axios.post(url, data, { headers });
            //console.log(res.data.candidates[0]?.content.parts[0]?.text);
            setGeneratedQuestions(res.data.candidates[0]?.content.parts[0]?.text);

        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setGenerating(false);
        }
    }

    const generateLinks = async () => {
        const questionInput = `Here are the questions : ${generatedQuestions} give me practice links from gfg or leetcode or hackerrank and dont add numbers instead just give links which starts with https. And also please note that provide me the links in proper question wise like the questions i will give you, you have to return the links in the same order and with the exact question link not different. Dont write any extra information or i dont want response in any bold, italics, underlined or heading, just give me in simple text format and only the links `;

        const api = import.meta.env.VITE_GEMINI_API_KEY;
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`;

        const linksData = {
            contents: [
                {
                    parts: [
                        {
                            text: questionInput,
                        },
                    ],
                },
            ],
        };

        const headers = {
            'Content-Type': 'application/json',
        }

        try {

            setLinkGenerating(true);
            const links = await axios.post(url, linksData, { headers });
            //console.log(links.data.candidates[0]?.content.parts[0]?.text);

            const urlRegex = /(https?:\/\/[^\s]+)/g;

            const text = links.data.candidates[0]?.content.parts[0]?.text;
            const linksArray = text.match(urlRegex) || [];

            setgeneratedLinks(linksArray);

            toast.success("Practice links generated");
        }
        catch (err) {
            console.log(err.message);
        }
        finally{
            setLinkGenerating(false);
        }

    }

    const openQuestionLink = (link) => {
        if (link) {
            if (link.startsWith('https')) {
                window.open(link, '_blank');
            }
        }
        else {
            toast.error("Invalid Link !");
        }

    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedQuestions);
        toast.success("Questions copied to clipboard");
    }

    const openLink = (link) => {
        window.open(link, '_blank');
    }

    return (
        <>
            <Toaster />
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                {/* sidebar section */}

                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 content overflow-y-auto flex flex-col justify-start items-center gap-2 lg:gap-5 relative`}>

                    <h1 className={`text-center ${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-Titillium text-2xl lg:text-4xl font-bold`}>Start your DSA preparation with our structured guidance</h1>

                    <div className={`${dark ? "bg-white" : "bg-black"} rounded-lg w-full h-auto mt-5 py-5 px-5 flex flex-col justify-start items-center gap-3`}>
                        <p className={`w-full  ${dark ? "text-black" : "text-white"} font-Titillium text-lg text-center`}>Some famous DSA Sheet to practice from : </p>

                        <div className="w-full h-auto flex flex-wrap justify-center items-center gap-5">
                            <p className={` ${dark ? "text-black" : "text-white"} font-Titillium flex justify-center items-center gap-3 bg-cyan-500 px-4 py-1 rounded-full cursor-pointer hover:opacity-70 duration-200 ease-in-out`} onClick={() => openLink('https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view')}>Love Babbar DSA Sheet <IoIosArrowRoundForward /></p>
                            <p className={` ${dark ? "text-black" : "text-white"} font-Titillium flex justify-center items-center gap-3 bg-cyan-500 px-4 py-1 rounded-full cursor-pointer hover:opacity-70 duration-200 ease-in-out`} onClick={() => openLink('https://docs.google.com/spreadsheets/u/0/d/1-wKcV99KtO91dXdPkwmXGTdtyxAfk1mbPXQg81R9sFE/htmlview')}>Fraz DSA Sheet <IoIosArrowRoundForward /></p>
                            <p className={` ${dark ? "text-black" : "text-white"} font-Titillium flex justify-center items-center gap-3 bg-cyan-500 px-4 py-1 rounded-full cursor-pointer hover:opacity-70 duration-200 ease-in-out`} onClick={() => openLink('https://docs.google.com/spreadsheets/u/0/d/1hXserPuxVoWMG9Hs7y8wVdRCJTcj3xMBAEYUOXQ5Xag/htmlview')}>Apna College DSA Sheet <IoIosArrowRoundForward /></p>
                            <p className={` ${dark ? "text-black" : "text-white"} font-Titillium flex justify-center items-center gap-3 bg-cyan-500 px-4 py-1 rounded-full cursor-pointer hover:opacity-70 duration-200 ease-in-out`} onClick={() => openLink('https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/')}>Striver DSA Sheet <IoIosArrowRoundForward /></p>
                            <p className={` ${dark ? "text-black" : "text-white"} font-Titillium flex justify-center items-center gap-3 bg-cyan-500 px-4 py-1 rounded-full cursor-pointer hover:opacity-70 duration-200 ease-in-out`} onClick={() => openLink('https://docs.google.com/document/u/0/d/1RxKKXJtErQFJjMfAh1kV-DyQsZoiESayimFx6PPIhVE/mobilebasic')}>The Code Skool DSA Sheet <IoIosArrowRoundForward /></p>
                        </div>

                    </div>

                    <div className={`${dark ? "bg-white" : "bg-black"} rounded-lg w-full h-auto px-5 py-5 mt-5 flex flex-col justify-start items-center gap-5`}>

                        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out w-full text-start text-lg`}>You are aiming for : </p>

                        <div className="w-full h-auto grid grid-cols-3 justify-items-center gap-5 lg:gap-10">
                            <div className={`h-32 w-full border-2 hover:shadow-lg rounded-lg flex flex-col justify-between items-center px-5 py-5 ${companyType === 'product-based' ? "border-4 border-blue-500 bg-blue-300" : "border-2"}`} onClick={() => setCompanyType('product-based')}>
                                <FaDollarSign className={`${dark ? "text-black" : "text-white"} text-xl md:text-2xl duration-200 ease-in-out`} />
                                <p className={`text-center text-[10px] md:text-sm lg:text-lg ${dark ? "text-black" : "text-white"} duration-200 ease-in-out`}>Product-Based Companies</p>
                            </div>

                            <div className={`h-32 w-full border-2 hover:shadow-lg rounded-lg flex flex-col justify-between items-center px-5 py-5 ${companyType === 'service-based' ? "border-4 border-blue-500 bg-blue-300" : "border-2"}`} onClick={() => setCompanyType('service-based')}>
                                <HiOutlineBuildingOffice2 className={`${dark ? "text-black" : "text-white"} text-xl md:text-2xl duration-200 ease-in-out`} />
                                <p className={`text-center text-[10px] md:text-sm lg:text-lg ${dark ? "text-black" : "text-white"} duration-200 ease-in-out`}>Service-Based Companies</p>
                            </div>

                            <div className={`h-32 w-full border-2 hover:shadow-lg rounded-lg flex flex-col justify-between items-center px-5 py-5 ${companyType === 'startup-based' ? "border-4 border-blue-500 bg-blue-300" : "border-2"}`} onClick={() => setCompanyType('startup-based')}>
                                <GoGraph className={`${dark ? "text-black" : "text-white"} text-xl md:text-2xl duration-200 ease-in-out`} />
                                <p className={`text-center text-[10px] md:text-sm lg:text-lg ${dark ? "text-black" : "text-white"} duration-200 ease-in-out`}>Startups</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${dark ? "bg-white" : "bg-black"} rounded-lg w-full h-auto px-5 py-5 mt-5 flex flex-col justify-start items-center gap-5`}>

                        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out w-full text-start text-lg`}>Choose difficulty level : </p>

                        <div className="w-full h-auto grid grid-cols-3 justify-items-center gap-10">
                            <div className={`h-32 w-full border-2 hover:shadow-lg rounded-lg flex flex-col justify-center items-center px-5 py-5 ${difficulty === 'easy' ? "border-4 border-blue-500 bg-blue-300" : "border-2"}`} onClick={() => setDifficulty('easy')}>
                                <p className={`text-center text-sm sm:text-lg lg:text-xl ${dark ? "text-black" : "text-white"} duration-200 ease-in-out`}>Easy</p>
                            </div>

                            <div className={`h-32 w-full border-2 hover:shadow-lg rounded-lg flex flex-col justify-center items-center px-5 py-5 ${difficulty === 'medium' ? "border-4 border-blue-500 bg-blue-300" : "border-2"}`} onClick={() => setDifficulty('medium')}>
                                <p className={`text-center text-sm sm:text-lg lg:text-xl ${dark ? "text-black" : "text-white"} duration-200 ease-in-out`}>Medium</p>
                            </div>

                            <div className={`h-32 w-full border-2 hover:shadow-lg rounded-lg flex flex-col justify-center items-center px-5 py-5 ${difficulty === 'hard' ? "border-4 border-blue-500 bg-blue-300" : "border-2"}`} onClick={() => setDifficulty('hard')}>
                                <p className={`text-center text-sm sm:text-lg lg:text-xl ${dark ? "text-black" : "text-white"} duration-200 ease-in-out`}>Hard</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${dark ? "bg-white" : "bg-black"} rounded-lg w-full h-auto px-5 py-5 mt-5 flex flex-col justify-start items-center gap-5`}>

                        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out w-full text-start text-lg`}>Choose topics : </p>
                        <div className="w-full h-auto flex flex-wrap justify-start items-start gap-4">
                            {Topics.map((topic, index) => {
                                return <span key={index} className={`${dark ? "bg-gray-300 text-black" : "bg-zinc-800 text-white"} cursor-pointer hover:shadow-lg px-4 py-2 rounded-md ${topics.includes(topic) ? "border-2 border-blue-600 bg-blue-200 text-black" : ""}`} onClick={() => addTopics(topic)}>{topic}</span>
                            })}
                        </div>

                    </div>

                    <div className={`${dark ? "bg-white" : "bg-black"} rounded-lg w-full h-auto px-5 py-5 mt-5 flex flex-col justify-start items-center gap-5`}>

                        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out w-full text-start text-lg`}>Choose number of questions : </p>
                        <input onChange={(e) => setNumber(e.target.value)} type="text" className={`w-full h-auto py-3 px-3 rounded-md ${dark ? "bg-gray-300 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out outline-none`} placeholder="For example : 75" />

                    </div>

                    <button className={`bg-cyan-500 text-white w-full py-3 rounded-md hover:bg-cyan-800 cursor-pointer duration-200 ease-in-out mt-5`} onClick={generateQuestions}>{generating ? (<>Generating ... please wait <Loading/></>) : "Generate Questions"}</button>
                    <button className={`bg-emerald-500 ${generatedQuestions.length > 0 ? "block" : "hidden"} text-white w-full py-3 rounded-md hover:bg-emerald-800 cursor-pointer duration-200 ease-in-out`} onClick={generateLinks}>{linkGenerating ? (<>Generating ... please wait <Loading/></>) : "Generate Links"}</button>

                    <div className={`w-full h-auto py-10 px-10 ${generatedQuestions === '' ? "hidden" : "block"} ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out mt-5 relative`}>
                        <p className={`${dark ? "text-black" : "text-white"} font-Titillium text-[10px] md:text-sm lg:text-lg`}>
                            <p className={`text-2xl md:text-4xl md:mb-7 font-bold mb-3`}>All Questions : </p>
                            <pre className="overflow-x-auto font-sans content">
                                {generatedQuestions}
                            </pre>
                        </p>
                        <span onClick={copyToClipboard} className={`${dark ? "bg-black text-white" : "bg-white text-black"} flex justify-center items-center gap-3 w-full py-2 mt-5 rounded-md cursor-pointer hover:opacity-75 duration-200 ease-in-out`}>Copy to clipboard <FaCopy /></span>
                    </div>

                    <div className={`w-full h-auto py-10 px-10 ${generatedLinks.length === 0 ? "hidden" : "block"} ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out mt-5 relative`}>
                        <p className={`${dark ? "text-black" : "text-white"} font-Titillium text-[10px] md:text-sm lg:text-lg`}>
                            <p className={`text-2xl md:text-4xl md:mb-7 font-bold mb-3`}>Practice Links : </p>
                            <pre className="overflow-x-auto font-sans text-blue-400 content">
                                {generatedLinks.map((link, index) => {
                                    return <p key={index} className="cursor-pointer" onClick={() => openQuestionLink(link)}>{link}</p>
                                })}
                            </pre>
                        </p>
                        <span onClick={copyToClipboard} className={`${dark ? "bg-black text-white" : "bg-white text-black"} flex justify-center items-center gap-3 w-full py-2 mt-5 rounded-md cursor-pointer hover:opacity-75 duration-200 ease-in-out`}>Copy to clipboard <FaCopy /></span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DSA
