import React, { useEffect, useState, useRef } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast'
import Loading from '../components/Loading'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import voiceDark from '../assets/voice-dark.gif';
import voiceLight from '../assets/voice-light.gif';
import { MdKeyboardVoice } from "react-icons/md";
import { FaStop } from "react-icons/fa";

function Summarize() {

    const { dark } = useTheme();

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);
    const [summary, setSummary] = useState('');
    const [count, setCount] = useState('');
    const [text, setText] = useState('');
    const [summarizing, setSummarizing] = useState(false);
    const [listening, setListening] = useState(false);
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);
    const [history, setHistory] = useState([]);
    const [finalText, setFinalText] = useState("");

    const recognitionRef = useRef(null);

    const handleChange = (e) => {
        setText(e.target.value);
        console.log(text);
    };

    const startRecording = () => {
        try {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

            if (!SpeechRecognition) {
                toast.error("Your browser does not support speech recognition.");
                return;
            }

            const recognition = new SpeechRecognition();
            recognition.lang = "en-US";
            recognition.interimResults = false;
            recognition.continuous = false;

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setFinalText(transcript);
                setText(transcript);
            };

            recognition.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
            };

            recognitionRef.current = recognition;
            recognition.start();
        } catch (error) {
            console.error("Error starting speech recognition:", error);
        }
    };

    const stopRecording = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
    };

    const input = `summarize the following content in ${count} words : ${text} `;

    // const edenAPI = import.meta.env.VITE_EDEN_AI_API;
    // const edenURL = "https://api.edenai.run/v2/text/summarize";

    const handleSummarize = async () => {
        try {
            if (!text || !count) {
                toast.error("Please complete all the fields");
                return;
            }

            setSummarizing(true);

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

            const res = await axios.post(url, data, { headers });
            //console.log(res.data.candidates[0]?.content.parts[0]?.text);
            setSummary(res.data.candidates[0]?.content.parts[0]?.text);

            // const res = await axios.post(edenURL, {
            //     text: text,
            //     providers: ["anthropic"],
            //     response_as_dict: true,
            //     attributes_as_list: false,
            //     show_base_64: true,
            //     show_original_response: false,
            //     output_sentences: 1,
            // }, {
            //     headers: {
            //         Authorization: `Bearer ${edenAPI}`,
            //         "Content-Type": "application/json",
            //     },
            // });

            // const summaryText = res.data["anthropic/claude-3-5-sonnet-20240620"]?.result;
            // setSummary(summaryText);
            // console.log(summaryText);
            toast.success("Text summarized !");
        }
        catch (err) {
            console.error(err.message);
            toast.error("Error summarizing text. Please try again later");
        }
        finally {
            setSummarizing(false);
        }
    }

    const copyToClipboard = () => {
        if (summary !== '') {
            navigator.clipboard.writeText(summary);
            toast.success("Summary copied to clipboard");
        }
    }

    const saveHistory = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        try {
            const res = await axios.post('http://localhost:5000/save/summary', {
                text, summary
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (res.data.success) {
                toast.success("Summary saved");
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }

    const fetchHistory = async (e) => {

        e.preventDefault();

        setIsHistoryVisible(!isHistoryVisible);

        try {

            const token = localStorage.getItem("token");

            const res = await axios.get('http://localhost:5000/history/summarize', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.data.success) {
                // console.log(res.data.history);
                setHistory(res.data.history);
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }

    const fetchSideHistory = async (e) => {

        e.preventDefault();

        // setIsHistoryVisible(!isHistoryVisible);

        try {

            const token = localStorage.getItem("token");

            const res = await axios.get('http://localhost:5000/history/summarize', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.data.success) {
                // console.log(res.data.history);
                setHistory(res.data.history);
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + " . . .";
        }
        return text;
    };

    const deleteHistory = async (summary) => {
        try {
            const res = await axios.delete('http://localhost:5000/delete/summary', {
                params: {
                    id: summary._id,
                },
            });

            if (res.data.success) {
                toast.success("History deleted successfully");
                fetchHistory();
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }

    const loadSummary = (summary) => {
        setText(summary.query);
        setSummary(summary.summary);
    }

    useEffect(() => {
        fetchHistory();
    }, [])

    return (

        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 content overflow-auto flex flex-col justify-start items-center gap-10 lg:gap-16 relative`}>

                    <Toaster />
                    <div className={`w-full md:w-2/3 h-auto rounded-lg bg-transparent ${dark ? "bg-white shadow-lg" : "bg-black "} `}>
                        <div className={`py-3 w-full text-s lg:text-sm overflow-x-auto flex justify-start md:justify-evenly items-center px-5 gap-7 flex-shrink-0 content ${dark ? "text-black" : "text-white border-b-2 border-gray-500"}`}>
                            <Link to="/ai-studio/summarize" className='flex-shrink-0 text-center md:w-[20%] bg-cyan-500 px-3 py-2 rounded-md cursor-pointer hover:bg-cyan-700 duration-200 ease-in-out text-white'>Summarize</Link>
                            <Link to="/ai-studio/text-generation" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Text Generation</Link>
                            <Link to="/ai-studio/code-generation" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Code Generation</Link>
                            <Link to="/ai-studio/document-translate" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Doc Translation</Link>
                            <Link to="/ai-studio/document-summarize" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Doc Summarize</Link>
                            <Link to="/ai-studio/code-translation" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Code Translation</Link>
                            <Link to="/ai-studio/pdf-qa" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Pdf Q&A</Link>
                        </div>
                    </div>

                    <span className={`w-12 z-20 h-12 flex justify-center items-center rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white text-2xl cursor-pointer active:scale-95 ${listening ? "hidden" : "block"} duration-200 ease-in-out fixed bottom-20 right-14`} onClick={() => { setListening(true); startRecording(); }}><MdKeyboardVoice /></span>
                    <span className={`w-12 z-20 h-12 flex justify-center items-center rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white text-2xl cursor-pointer active:scale-95 duration-200  ${listening ? "block" : "hidden"} ease-in-out fixed bottom-20 right-14`} onClick={() => { setListening(false); stopRecording(); }}><FaStop className='text-sm' /></span>
                    <div className={`w-32 z-20 ${listening ? "block" : "hidden"} h-32 overflow-hidden px-1 py-2 rounded-md flex flex-col gap-2 ${dark ? "bg-white" : "bg-black"} justify-center items-center cursor-pointer active:scale-95 duration-200 ease-in-out fixed bottom-36 right-14`}>
                        <img src={dark ? voiceLight : voiceDark} className={`h-full rounded-md w-full object-cover duration-200 ease-in-out`} />
                        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Listening ...</p>
                    </div>

                    <div className='w-full h-auto flex items-start gap-5 border-t-[1px] border-gray-400 py-5'>

                        <div className={`hidden lg:block w-[25%] px-5 py-5 h-125 ${dark ? "bg-gray-300" : "bg-black"} overflow-y-auto content flex flex-col justify-start items-center rounded-lg`}>
                            <button className={`w-full py-2 ${dark ? "bg-black text-white" : "bg-white text-black"} rounded-md hover:opacity-85 duration-300 ease-in-out cursor-pointer`} onClick={fetchSideHistory}>Refresh</button>

                            {history.length !== 0 ? (history.map((data) => (
                                <div key={data._id} className={`w-full text-s mb-5 mt-5 rounded-lg py-5 ${dark ? "bg-white text-black" : "bg-zinc-700 text-white"} flex justify-between items-center duration-300 ease-in-out px-5 h-auto cursor-pointer`} onClick={() => loadSummary(data)}>
                                    {truncateText(data.query, 40)} <FaTrashAlt className='text-red-500 cursor-pointer text-xl' onClick={() => deleteHistory(data)} />
                                </div>
                            ))) : (<p className='text-center mt-5'>No history found</p>)}
                        </div>

                        <div className='h-auto py-2 w-full flex flex-col justify-center items-center'>

                            <textarea className={`${dark ? "bg-white text-black" : "bg-black text-white"} rounded-md w-full py-3 px-5 h-44 md:py-4 md:px-7 text-s sm:text-sm`} placeholder='Enter text to summarize' value={text} onChange={handleChange} />
                            <input type='text' className={`${dark ? "bg-white text-black" : "bg-black text-white"} rounded-md w-full py-3 px-5 mt-4 md:py-4 md:px-7 text-s sm:text-sm`} placeholder='Enter summarize count : For example : 100' value={count} onChange={(e) => setCount(e.target.value)} />

                            <div className='w-full h-auto flex justify-center items-center gap-5 lg:gap-10'>
                                <button className='w-1/2 lg:w-full flex justify-center items-center gap-4 bg-cyan-600 text-white py-2 md:py-4 mt-5 mb-10 cursor-pointer duration-300 rounded-md ease-in-out font-Titillium font-semibold' onClick={handleSummarize}>{summarizing ? (<>Summarizing, please wait... <Loading /></>) : (<>Summarize </>)} </button>
                                <button className={`lg:hidden  w-1/2 flex justify-center items-center gap-4 py-2 md:py-4 mt-5 mb-10 rounded-md text-white cursor-pointer duration-300 ease-in-out font-Titillium font-semibold ${isHistoryVisible ? "bg-red-500" : "bg-teal-500"} hover:opacity-85`} onClick={fetchHistory}>{isHistoryVisible ? "Close X" : "View History"}</button>
                                <button className={`w-1/2 flex justify-center items-center gap-4 py-2 md:py-4 mt-5 mb-10 rounded-md text-white bg-emerald-600 cursor-pointer duration-300 ease-in-out font-Titillium font-semibold hover:opacity-85 ${summary === '' ? "hidden" : "block"}`} onClick={saveHistory}>Save ✓</button>
                            </div>
                            <div className={`${isHistoryVisible ? "hidden" : "block"} flex flex-col gap-5 ${dark ? "bg-gradient-to-b from-gray-400 to-transparent text-black" : "bg-gradient-to-b from-zinc-700 to-transparent text-white"} h-auto py-3 px-4 text-black w-full rounded-t-xl text-s md:text-sm text-start ${summary === '' ? "hidden" : "block"} relative overflow-hidden`}>
                                {summary}
                                <button className={`w-full py-2 mb-5 ${dark ? "bg-white text-black" : "bg-black text-white"} rounded-md hover:opacity-85 cursor-pointer`} onClick={copyToClipboard}>Copy to clipboard</button>
                            </div>
                            <div className={`${isHistoryVisible ? "block" : "hidden"} w-full h-auto py-5 px-5 overflow-y-auto ${dark ? "bg-gradient-to-b from-white to-transparent" : "bg-gradient-to-b from-black to-transparent"} rounded-lg flex flex-col justify-start items-center gap-5`}>
                                {history.length > 0 ? (history.map((data) => (
                                    <div key={data._id} className={`w-full text-s md:text-sm rounded-lg py-5 ${dark ? "bg-gray-300 text-black" : "bg-zinc-700 text-white"} flex justify-between items-center duration-300 ease-in-out px-5 h-auto cursor-pointer`} onClick={() => loadSummary(data)}>
                                        {truncateText(data.query, 70)} <FaTrashAlt className='text-red-500 cursor-pointer text-sm' onClick={() => deleteHistory(data)} />
                                    </div>
                                ))) : (<p>No history found</p>)}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summarize
