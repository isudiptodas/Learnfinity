import React, { useState } from 'react';
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import FormData from 'form-data';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

function DocumentSummarize() {

    const { dark } = useTheme();
    const { isSideBarVisible } = useSidebar(false);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [summarizedText, setSummarizedText] = useState('');
    const [isUploaded, setIsUploaded] = useState(false);
    const [summarizing, setSummarizing] = useState(false);

    const apiKey = import.meta.env.VITE_APYHUB_API;
    const api = import.meta.env.VITE_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`;

    const handleUpload = (e) => {

        if (e.target.files[0].type !== "application/pdf") {
            toast.error("Please enter a valid file format");
            return;
        }

        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        //console.log(e.target.files[0], e.target.files[0].name);
    }

    const removeUpload = () => {
        setFile(null);
        setFileName('');
    }

    const summarize = async () => {

        const form = new FormData();
        form.append("file", file);

        try {
            setSummarizing(true);

            const response = await axios.post('https://api.apyhub.com/extract/text/pdf-file', form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "apy-token": apiKey,
                },
            });

            if (response.data) {
                //console.log(response.data.data);

                const input = `Summarize and explain me in detail whats written here : ${response.data?.data}. And note that give me this in text format, no underline, no bold, no italics, just proper text.`;

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
                
                if(res.data){
                    console.log(res.data.candidates[0]?.content.parts[0]?.text);
                    setSummarizedText(res.data.candidates[0]?.content.parts[0]?.text);
                }
            }

        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setSummarizing(false);
        }


    }

    const copyToClipboard = () => {
        if (translation !== '') {
            navigator.clipboard.writeText(summarizedText);
            toast.success("Summarized text copied to clipboard");
        }
    }

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-8 md:py-20 w-full h-[83vh] lg:h-auto px-10 rounded-xl lg:py-14 content overflow-auto flex flex-col justify-start items-center gap-10 lg:gap-16 relative`}>
                    <Toaster />

                    <div className={`w-full md:w-2/3 h-auto rounded-lg bg-transparent ${dark ? "bg-white shadow-lg" : "bg-black"} `}>
                        <div className={`w-full text-s py-3 lg:text-sm overflow-x-auto flex justify-start md:justify-evenly items-center px-5 gap-7 flex-shrink-0 content ${dark ? "text-black" : "text-white border-b-2 border-gray-500"}`}>
                            <Link to="/ai-studio/summarize" className='flex-shrink-0 text-center md:w-[20%]  cursor-pointer'>Summarize</Link>
                            <Link to="/ai-studio/text-generation" className='flex-shrink-0 text-center cursor-pointer rounded-md md:w-[20%] '>Text Generation</Link>
                            <Link to="/ai-studio/code-generation" className='flex-shrink-0 text-center cursor-pointer  md:w-[20%] '>Code Generation</Link>
                            <Link to="/ai-studio/document-translate" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Doc Translation</Link>
                            <Link to="/ai-studio/document-summarize" className='flex-shrink-0 text-center cursor-pointer md:w-[20%] hover:bg-cyan-700 duration-200 ease-in-out text-white bg-cyan-500 px-3 py-2 rounded-md'>Doc Summarize</Link>
                            <Link to="/ai-studio/code-translation" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Code Translation</Link>
                            <Link to="/ai-studio/pdf-qa" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Pdf Q&A</Link>
                        </div>
                    </div>

                    <div className={` w-full h-auto py-5 rounded-lg flex flex-col justify-start items-center gap-3`}>
                        <h1 className={`${dark ? "text-black" : "text-white"} sm:text-3xl font-Titillium font-semibold text-2xl text-center`}>Upload your pdf document for summarize</h1>

                        <p className={`${dark ? "text-black bg-white px-3 py-2 rounded-md" : "text-white bg-black px-3 py-2 rounded-md"} duration-200 ease-in-out font-Titillium text-center ${fileName === '' ? "hidden" : "block"} `}>{fileName}</p>

                        <p className={`bg-cyan-500 ${dark ? "text-white" : "text-black"} duration-200 ease-in-out px-5 py-2 rounded-md cursor-pointer ${file === null ? "block" : "hidden"} cursor-pointer relative`}>Choose File <input type="file" onChange={handleUpload} className='absolute top-0 left-0 inset-3 opacity-0' /></p>

                        <p className={`bg-red-500 ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-2 rounded-md cursor-pointer ${file === null ? "hidden" : "block"}`} onClick={removeUpload}>Remove</p>
                        <p className={`bg-cyan-500 ${dark ? "text-white" : "text-white"} duration-200 ease-in-out px-5 py-2 rounded-md cursor-pointer ${file === null ? "hidden" : "block"}`} onClick={summarize}>{summarizing ? (<>Generating ... please wait <Loading/></>) : "Start Summarizing"}</p>
                    </div>

                    <div className={`w-full ${summarizedText === '' ? "hidden" : "block"} h-auto py-4 px-4 flex flex-col justify-start items-center gap-3 ${dark ? "bg-gradient-to-b from-white to-transparent" : "bg-gradient-to-b from-black to-transparent"} ${summarizedText === '' ? "block" : "block"} duration-200 ease-in-out rounded-md`}>
                        <p className={`${dark ? "text-black" : "text-white"} w-full text-start text-sm`}>
                            <pre className='overflow-x-auto font-sans content'>
                            {summarizedText}
                            </pre>
                        </p>
                        <p className={`${dark ? "bg-white text-black" : "bg-zinc-700 text-white"} w-full text-center mt-3 py-2 rounded-md cursor-pointer duration-200 ease-in-out`}>Copy to clipboard</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DocumentSummarize;


