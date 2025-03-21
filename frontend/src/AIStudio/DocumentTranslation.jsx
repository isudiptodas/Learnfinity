import React, { useState } from 'react';
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import Loading from '../components/Loading';
import FormData from 'form-data';
import { Link } from 'react-router-dom';

function DocumentTranslation() {

    const { dark } = useTheme();
    const { isSideBarVisible } = useSidebar(false);
    const [file, setFile] = useState('');
    const [language, setLanguage] = useState('');
    const [translation, setTranslation] = useState('');
    const [isTranslating, setIsTranslating] = useState(false);
    const [isTranslated, setIsTranslated] = useState(false);

    const apiKey = import.meta.env.VITE_APYHUB_API;

    function formatBytes(bytes) {
        if (isNaN(bytes) || bytes < 0) {
            return "Invalid size";
        }

        const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        let unitIndex = 0;

        // Ensure bytes is treated as a number
        bytes = Number(bytes);

        while (bytes >= 1024 && unitIndex < units.length - 1) {
            bytes /= 1024;
            unitIndex++;
        }

        return `${bytes.toFixed(2)} ${units[unitIndex]}`;
    }

    const handleTranslate = async (e) => {
        e.preventDefault();

        if (language === '') {
            toast.error("Please select a language");
            return;
        }

        try {
            const form = new FormData();
            form.append('file', file);
            form.append('language', language);

            setIsTranslating(true);

            const res = await axios.post('https://api.apyhub.com//translate/file',
                form, {
                headers: {
                    // ...form.getHeaders(),
                    'Content-Type': 'multipart/form-data',
                    'apy-token': apiKey
                }
            }
            );

            if (res.data) {
                toast.success("Document translated successfully !");
                setTranslation(res.data.translation);
                console.log(res.data);
            }
        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setIsTranslating(false);
        }
    }

    const copyToClipboard = () => {
        if (translation !== '') {
            navigator.clipboard.writeText(translation);
            toast.success("Translated document copied to clipboard");
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
                            <Link to="/ai-studio/document-translate" className='flex-shrink-0 text-center cursor-pointer md:w-[20%] hover:bg-cyan-700 duration-200 ease-in-out text-white bg-cyan-500 px-3 py-2 rounded-md'>Doc Translation</Link>
                            <Link to="/ai-studio/document-summarize" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Doc Summarize</Link>
                            <Link to="/ai-studio/code-translation" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Code Translation</Link>
                              <Link to="/ai-studio/pdf-qa" className='flex-shrink-0 text-center cursor-pointer md:w-[20%]'>Pdf Q&A</Link>
                        </div>
                    </div>

                    <div className={`${dark ? "text-black" : "text-white"} font-Titillium py-24 px-10 w-[80%] rounded-xl border-dashed border-4 border-cyan-500 flex flex-col justify-center items-center gap-5 relative`}>
                        <div className={`w-full flex flex-col h-auto py-5 gap-2 ${file === '' ? "block" : "hidden"}`}>
                            <h1 className={`md:text-3xl text-center`}>Upload a document to translate</h1>
                            <button className={`w-full rounded-lg bg-cyan-600 hover:bg-cyan-700 cursor-pointer duration-300 ease-in-out py-3 ${dark ? "text-white" : "text-white"}`}><input type="file" className='absolute inset-28 opacity-0' onChange={(e) => setFile(e.target.files[0])} />Upload</button>
                        </div>

                        <div className={`w-full ${file === '' ? "hidden" : "block"} ${isTranslated === true ? "hidden" : "block"} flex flex-col justify-center items-center`}>
                            <p onClick={() => console.log(language)}><span className='font-semibold'>File Name : </span>{file.name}</p>
                            <p><span className='font-semibold'>File Type : </span>{file.type}</p>
                            <p><span className='font-semibold'>File Size : </span>{formatBytes(file.size)}</p>
                            <button className='w-full py-2 bg-red-500 rounded-lg text-white mt-5 hover:bg-red-700 cursor-pointer' onClick={() => setFile('')}>Delete</button>

                            <div className='w-full h-auto px-1 py-2 flex flex-col justify-center items-center gap-3 mt-6 text-center'>
                                <label htmlFor="lang">Choose a translation language : </label>
                                <select name="lang" className={`w-full rounded-md bg-gradient-to-r from-cyan-400 text-center text-white to-cyan-600 px-3 py-2 appearance-none outline-none cursor-pointer hover:opacity-80 duration-200 ease-in-out`} onChange={(e) => setLanguage(e.target.value)}>
                                    <option className={`${dark ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 duration-200 ease-in-out cursor-pointer w-1/2`} value="en">English</option>
                                    <option className={`${dark ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 duration-200 ease-in-out cursor-pointer w-1/2`} value="ar">Arabic</option>
                                    <option className={`${dark ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 duration-200 ease-in-out cursor-pointer w-1/2`} value="bn">Bengali</option>
                                    <option className={`${dark ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 duration-200 ease-in-out cursor-pointer w-1/2`} value="gu">Gujrati</option>
                                    <option className={`${dark ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 duration-200 ease-in-out cursor-pointer w-1/2`} value="hi">Hindi</option>
                                    <option className={`${dark ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 duration-200 ease-in-out cursor-pointer w-1/2`} value="kn">Kannada</option>
                                    <option className={`${dark ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 duration-200 ease-in-out cursor-pointer w-1/2`} value="ml">Malayalam</option>
                                    <option className={`${dark ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 duration-200 ease-in-out cursor-pointer w-1/2`} value="mr">Marathi</option>
                                    <option className={`${dark ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 duration-200 ease-in-out cursor-pointer w-1/2`} value="ta">Tamil</option>
                                    <option className={`${dark ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 duration-200 ease-in-out cursor-pointer w-1/2`} value="te">Telugu</option>
                                    <option className={`${dark ? "bg-white text-black" : "bg-black text-white"} hover:opacity-80 duration-200 ease-in-out cursor-pointer w-1/2`} value="ur">Urdu</option>
                                </select>
                            </div>

                            <button className='w-full py-2 bg-emerald-600 rounded-md mt-2 hover:bg-emerald-700 ease-in-out duration-200 flex justify-center items-center text-white gap-2' onClick={handleTranslate}>{isTranslating ? (<>Translating, Please wait <Loading /></>) : "Translate Document"}</button>
                        </div>
                    </div>

                    <div className={`${translation === '' ? "hidden" : "block"} text-s flex flex-col justify-start items-center gap-3 px-10 lg:px-16 rounded-lg py-5 ${dark ? "bg-gradient-to-b from-gray-400 to-transparent text-black" : "bg-gradient-to-b from-zinc-700 text-white to-transparent"} relative`}>
                        <span className='absolute top-5 right-7 cursor-pointer text-red-600' onClick={() => setTranslation('')}>Delete X</span>
                        <p className='text-2xl text-center'>Translated Document</p>
                        
                        {translation}

                        <button className={`${dark ? "bg-white" : "bg-black"} px-3 py-2 rounded-md cursor-pointer hover:opacity-80`} onClick={copyToClipboard}>Copy translated document</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DocumentTranslation;


