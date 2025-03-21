import React, { useState, useRef } from 'react';
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import FormData from 'form-data';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { IoIosSend } from "react-icons/io";
import voiceDark from '../assets/voice-dark.gif';
import voiceLight from '../assets/voice-light.gif';
import { MdKeyboardVoice } from "react-icons/md";
import { FaStop } from "react-icons/fa";
import moja from '../assets/moja.gif';
import kutta from '../assets/kutta.gif';

function PdfQA() {

    const { dark } = useTheme();
    const { isSideBarVisible } = useSidebar(false);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [prompt, setPrompt] = useState('');
    const [data, setData] = useState('');
    const [isUploaded, setIsUploaded] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [chat, setChat] = useState(false);
    const [listening, setListening] = useState(false);
    const [allChats, setAllChats] = useState([{ role: 'gemini', text: "Start asking any question and I will answer it from the uploaded pdf 😊" }]);

    const apiKey = import.meta.env.VITE_APYHUB_API_SECOND;
    const api = import.meta.env.VITE_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`;

    const recognitionRef = useRef(null);

    const handleUpload = (e) => {

        if (e.target.files[0] && e.target.files[0].type !== "application/pdf") {
            toast.error("Please enter a valid file format");
            return;
        }

        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setIsUploaded(true);
        //console.log(e.target.files[0], e.target.files[0].name);
    }

    const removeUpload = () => {
        setFile(null);
        setFileName('');
        setIsUploaded(false);
    }

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
                setPrompt(transcript);
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

    const providePDF = async () => {
        const form = new FormData();
        form.append("file", file);

        try {
            setUploading(true);

            const res = await axios.post('https://api.apyhub.com/extract/text/pdf-file', form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "apy-token": apiKey,
                },
            });

            if (res.data) {
                //console.log(res.data.data);
                setData(res.data.data);
            }

            if (res) {
                try {
                    const input = `Below I am providing you a long text and from now whatever I will ask you, you have to give me answer in context of that pdf. ${res.data.data}`;

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

                    const response = await axios.post(url, data, { headers });

                    if (response.data) {
                        //console.log(res.data);
                    }
                }
                catch (err) {
                    console.log(err.message);
                }
            }

        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setUploading(false);
            setChat(true);
        }
    }

    const askGemini = async () => {

        if (!prompt) {
            toast.error("Please enter a question ");
            return;
        }

        const input = `${data} ${prompt}. Give me answers in only text, no underline, no bullet points, no italics, no bold. Only simple text`

        setAllChats(prevChats => [...prevChats, { role: 'user', text: prompt }]);

        setPrompt('');

        try {
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

            const response = await axios.post(url, data, { headers });

            //console.log(response.data.candidates[0]?.content?.parts[0]?.text);

            setAllChats(prevChats => [
                ...prevChats,
                { role: 'gemini', text: response.data.candidates[0]?.content?.parts[0]?.text }
            ]);
        }
        catch {
            console.log(err.message);
        }

    }

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-8 md:py-20 w-full h-[83vh] lg:h-auto px-10 rounded-xl lg:py-14 content overflow-auto flex flex-col justify-start items-center gap-10 lg:gap-8 relative`}>
                    <Toaster />

                    <div className={`w-full md:w-2/3 h-auto rounded-lg bg-transparent ${dark ? "bg-white shadow-lg" : "bg-black"} `}>
                        <div className={`w-full text-s py-3 lg:text-sm overflow-x-auto flex justify-start md:justify-evenly items-center px-5 gap-7 flex-shrink-0 content ${dark ? "text-black" : "text-white border-b-2 border-gray-500"}`}>
                            <Link to="/ai-studio/summarize" className='flex-shrink-0 text-center md:w-[20%]  cursor-pointer'>Summarize</Link>
                            <Link to="/ai-studio/text-generation" className='flex-shrink-0 text-center cursor-pointer rounded-md md:w-[20%] '>Text Generation</Link>
                            <Link to="/ai-studio/code-generation" className='flex-shrink-0 text-center cursor-pointer  md:w-[20%] '>Code Generation</Link>
                            <Link to="/ai-studio/document-translate" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Doc Translation</Link>
                            <Link to="/ai-studio/document-summarize" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Doc Summarize</Link>
                            <Link to="/ai-studio/code-translation" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Code Translation</Link>
                            <Link to="/ai-studio/pdf-qa" className='flex-shrink-0 text-center cursor-pointer md:w-[20%] hover:bg-cyan-700 duration-200 ease-in-out text-white bg-cyan-500 px-3 py-2 rounded-md'>Pdf Q&A</Link>
                        </div>
                    </div>

                    <p className={`font-Titillium ${dark ? "text-black" : "text-white"} duration-200 ease-in-out w-full text-center md:w-[70%] lg:w-[50%] text-[10px] md:text-sm opacity-50`}>We are not auto-saving your files so in case if you refresh the page then you may need to again re-upload the pdf and start chat again.</p>


                    <div className={`w-full ${chat ? "hidden" : "block"} h-auto rounded-md sm:w-[60%] md:w-[40%] border-2 ${dark ? "border-black" : "border-white"} duration-200 ease-in-out py-3 flex flex-col justify-start items-center gap-3`}>
                        <p className={`px-10 py-2 rounded-md bg-cyan-500 text-white active:scale-95 duration-200 ease-in-out hover:opacity-80 cursor-pointer relative ${isUploaded ? "hidden" : "block"}`}>Choose PDF <input type="file" onChange={handleUpload} className={`absolute inset-2 opacity-0`} /></p>
                        <p className={`px-10 py-2 rounded-md bg-red-500 text-white active:scale-95 duration-200 ease-in-out hover:opacity-80 cursor-pointer ${isUploaded ? "block" : "hidden"}`} onClick={removeUpload}>Remove </p>
                        <p className={`${isUploaded ? "block" : "hidden"} text-[12px] md:text-sm ${dark ? "text-black" : "text-white"} duration-200 ease-in-out`}>{fileName}</p>

                        <p className={`px-10 py-2 rounded-md bg-emerald-500 text-white active:scale-95 duration-200 ease-in-out hover:opacity-80 cursor-pointer flex justify-center items-center gap-2 ${isUploaded ? "block" : "hidden"}`} onClick={providePDF}>{uploading ? (<>Uploading...Please wait <Loading /></>) : "Upload"} </p>
                    </div>

                    <div className={`${chat ? "block" : "hidden"} h-auto w-full bg-transparent flex flex-col justify-start items-center gap-2`}>

                        <div className={`w-full h-[50vh] lg:px-4 pt-4 lg:h-[70vh] lg:rounded-lg sm:w-[60%] flex flex-col justify-start items-center relative py-2 ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out rounded-md overflow-y-auto`}>
                            {allChats.length !== 0 && allChats.map((chat, index) => {
                                return <div key={index} className={` rounded-md w-full h-auto py-2 px-2 flex ${chat.role === 'gemini' ? "justify-start items-start" : "justify-end"}`}>
                                    <p className={`rounded-md ${chat.role === 'gemini' ? "bg-cyan-500 text-black text-start" : " text-end "} ${dark && chat.role === 'user' ? "text-black" : "text-white"} duration-200 ease-in-out pl-4 w-[80%] py-2 text-[10px] md:text-sm`}>{chat.text}</p>
                                </div>
                            })}
                        </div>

                        <div className={`${dark ? "bg-white" : "bg-black"} px-2 py-1 duration-200 ease-in-out rounded-full sm:w-[60%] flex justify-between items-center gap-2 h-auto w-full relative`}>
                            <input type="text" className={`w-full ${dark ? "bg-white text-black" : "bg-black text-white"} duration-200 ease-in-out outline-none px-3 py-2`} value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder='Enter question' />
                            <span className={`w-auto p-2 rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 text-white cursor-pointer hover:opacity-75 active:scale-95 duration-200 ease-in-out text-lg`} onClick={askGemini}><IoIosSend /></span>
                            
                            <span className={` z-40 p-2 flex justify-center items-center rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white text-lg cursor-pointer active:scale-95 ${listening ? "hidden" : "block"} duration-200 ease-in-out `} onClick={() => { setListening(true); startRecording(); }}><MdKeyboardVoice /></span>
                            <span className={` z-20 p-2 flex justify-center items-center rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white text-lg cursor-pointer active:scale-95 duration-200  ${listening ? "block" : "hidden"} ease-in-out `} onClick={() => { setListening(false); stopRecording(); }}><FaStop className='text-sm' /></span>
                            <div className={`h-auto w-auto absolute bottom-16 right-5 z-20 ${listening ? "block" : "hidden"} overflow-hidden px-1 py-2 rounded-md flex flex-col gap-2 ${dark ? "bg-white" : "bg-black"} justify-start items-center cursor-pointer active:scale-95 duration-200 ease-in-out`}>
                                <img src={dark ? kutta : moja} className={`h-24 w-24 rounded-md object-top duration-200 ease-in-out`} />
                                <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-[12px]`}>Listening ...</p>
                                <p className={`${dark ? "text-white" : "text-white"} hover:bg-red-700 bg-red-500 w-full text-center rounded-md py-2 duration-200 ease-in-out text-[12px] flex justify-center items-center gap-2 cursor-pointer`} onClick={() => { setListening(false); stopRecording(); }}>Stop <FaStop className='text-sm' /></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PdfQA;


