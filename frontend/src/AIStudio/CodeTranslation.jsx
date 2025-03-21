import React, { useState } from 'react';
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

function CodeTranslation() {

    const { dark } = useTheme();
    const { isSideBarVisible } = useSidebar(false);
    const[sourceCode, setSourceCode] = useState('');
    const[translatedCode, setTranslatedCode] = useState('');
    const[translating, setTranslating] = useState(false);
    const[optionVisible, setOptionVisible] = useState(false);
    const[targetLanguage, setTargetLanguage] = useState('language');

    const api = import.meta.env.VITE_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`;

    const translateCode = async () => {

        if(!sourceCode){
            toast.error("Please enter source code");
            return;
        }

        if(targetLanguage === 'language'){
            toast.error("Please select a target language");
            return;
        }

        try {

            setTranslating(true);

            const input = `${sourceCode} Here is the source code now translate this in ${targetLanguage} code without any error. And in response give me the exact same thing but in ${targetLanguage} code and nothing extra. No extra information or bullets or headings or underlines or anything.`;

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
            setTranslatedCode(res.data.candidates[0]?.content.parts[0]?.text);

            toast.success("Code Translated");
        }
        catch (err) {
            console.log(err.message);
        }
        finally{
            setTranslating(false);
        } 
    }

    const options = [
        'c++',
        'java',
        'rust',
        'python',
        'go',
        'javascript',
        'ruby',
        'c#',
        'c',
    ];

    const copyToClipboard = () => {

        if(translatedCode === ''){
            toast.error("No code available to copy");
            return;
        }
        navigator.clipboard.writeText(translatedCode);
        toast.success("Copied to clipboard");
    }


    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-8 md:py-20 w-full h-[83vh] lg:h-auto px-5 rounded-xl lg:py-14 content overflow-auto flex flex-col justify-start items-center gap-5 lg:gap-7 relative`}>
                    <Toaster />

                    <div className={`w-full md:w-2/3 h-auto rounded-lg bg-transparent ${dark ? "bg-white shadow-lg" : "bg-black"} `}>
                        <div className={`w-full text-s py-3 lg:text-sm overflow-x-auto flex justify-start md:justify-evenly items-center px-5 gap-7 flex-shrink-0 content ${dark ? "text-black" : "text-white border-b-2 border-gray-500"}`}>
                            <Link to="/ai-studio/summarize" className='flex-shrink-0 text-center md:w-[20%]  cursor-pointer'>Summarize</Link>
                            <Link to="/ai-studio/text-generation" className='flex-shrink-0 text-center cursor-pointer rounded-md md:w-[20%] '>Text Generation</Link>
                            <Link to="/ai-studio/code-generation" className='flex-shrink-0 text-center cursor-pointer  md:w-[20%] '>Code Generation</Link>
                            <Link to="/ai-studio/document-translate" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Doc Translation</Link>
                            <Link to="/ai-studio/document-summarize" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Doc Summarize</Link>
                            <Link to="/ai-studio/code-translation" className='flex-shrink-0 text-center cursor-pointer md:w-[20%] hover:bg-cyan-700 duration-200 ease-in-out text-white bg-cyan-500 px-3 py-2 rounded-md'>Code Translation</Link>
                            <Link to="/ai-studio/pdf-qa" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Pdf Q&A</Link>
                        </div>
                    </div>

                    <div className='w-auto py-2 px-3 flex flex-col justify-start items-start gap-3 relative'>
                        <h1 className={`${dark ? "text-black" : "text-white"} font-semibold font-Titillium text-lg flex justify-center items-center gap-3`}>Choose Output Language : <span className={`px-4 py-1 rounded-md ${dark ? "border-2 border-black hover:bg-white" : "border-2 border-white hover:bg-black"}  font-normal duration-200 ease-in-out cursor-pointer`} onClick={() => setOptionVisible(!optionVisible)}>{targetLanguage}</span> </h1>
                        <div className={`flex shadow-lg w-auto ${dark ? "bg-white text-black" : "bg-zinc-800 text-white"} ${optionVisible ? "block" : "hidden"} duration-200 ease-in-out px-1 py-2 absolute top-12 right-4 flex-col justify-start items-start gap-2`}>
                            {options.map((lang, index)=> {
                                return <p key={index} className={`py-2 px-3 rounded-md ${dark ? "hover:bg-gray-200" : "hover:bg-black"} w-full cursor-pointer`} onClick={() => setTargetLanguage(lang)}>{lang}</p>
                            })}
                        </div>

                        <p className={`w-full flex justify-center items-center gap-2 cursor-pointer hover:opacity-65 duration-200 ease-in-out rounded-md py-1 lg:py-2 text-center bg-cyan-500  text-white`} onClick={translateCode}>{translating ? (<>Translating... Please Wait <Loading/></>) : "Translate Code"}</p>
                        <p className={`w-full flex justify-center items-center gap-2 cursor-pointer hover:opacity-65 duration-200 ease-in-out rounded-md py-1 lg:py-2 text-center bg-teal-500  text-white ${translatedCode === '' ? "hidden" : "block"}`} onClick={copyToClipboard}>Copy To Clipboard</p>
                    </div>

                    <div className={`w-full h-full flex flex-col lg:flex-row justify-start items-center gap-3`}>
                        <textarea className={`w-full rounded-md ${dark ? "bg-white text-black" : "bg-black text-white"} font-mono px-4 py-3 min-h-72 lg:h-96 outline-none duration-200 ease-in-out`} placeholder='Enter your source code' onChange={(e) => setSourceCode(e.target.value)} />
                        <pre className={`${dark ? "bg-white text-black" : "bg-black text-white"} overflow-y-auto content overflow-x-auto duration-200 ease-in-out px-4 py-3 w-full rounded-md min-h-72 lg:h-96 text-start`}>{translatedCode}</pre>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CodeTranslation;


