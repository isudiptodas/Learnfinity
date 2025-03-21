import React, { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import DocStudioBox from '../components/DocStudioBox';
import { FaDownload } from "react-icons/fa6";
import FileSaver, { saveAs } from 'file-saver';
import Loading from '../components/Loading.jsx';

function DocStudio() {

    const { dark } = useTheme();
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [fileSelected, setFileSelected] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [downloadedFile, setDownloadedFile] = useState(null);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    const optionList = [
        {
            option: 'Word to Pdf',
            optionLink: 'https://api.apyhub.com/convert/word-file/pdf-file'
        },
        {
            option: 'Powerpoint to Pdf',
            optionLink: 'https://api.apyhub.com/convert/presentation-file/pdf-file'
        },
        {
            option: 'Image to Pdf',
            optionLink: 'https://api.apyhub.com/convert/image-file/pdf-file'
        },
        {
            option: 'Excel to Pdf',
            optionLink: 'https://api.apyhub.com/convert/spreadsheet-file/pdf-file'
        },
        {
            option: 'Proofread',
            optionLink: 'https://api.apyhub.com/sharpapi/api/v1/content/proofread/job/status/job-id'
        },
        {
            option: 'Text To Speech',
            optionLink: 'https://api.apyhub.com/tts/file/url'
        },
        {
            option: 'Website Link Extractor',
            optionLink: 'https://api.apyhub.com/extract/links/url'
        },
        {
            option: 'Pdf to Word',
            optionLink: 'https://learnfinity-mzah.onrender.com/upload'
        },
        {
            option: 'Pdf to Excel',
            optionLink: 'https://learnfinity-mzah.onrender.com/upload'
        },
        {
            option: 'Pdf to Powerpoint',
            optionLink: 'https://learnfinity-mzah.onrender.com/upload'
        },

    ];

    const [option, setOption] = useState('');
    const [optionLink, setOptionLink] = useState('');
    const [file, setFile] = useState(null);
    const [input, setInput] = useState(null);
    const [proofread, setProofread] = useState('');
    const [gender, setGender] = useState('');
    const [downloadURl, setDownloadURL] = useState('');
    const [websiteLinks, setWebsiteLinks] = useState([]);
    const [inputLink, setInputLink] = useState('');
    const[convertFile, setConvertFile] = useState(false);

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleFileSelect = (e) => {

        if (option === 'Image to Pdf' && (e.target.files[0]?.type !== "image/jpeg" && e.target.files[0]?.type !== "image/png")) {
            toast.error("Please enter valid file");
            return;
        }
        //console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        setFileSelected(true);

    }

    const process = async () => {
        try {
            const API = import.meta.env.VITE_APYHUB_API;
            const API_second = import.meta.env.VITE_APYHUB_API_SECOND;
            const API_third = import.meta.env.VITE_APYHUB_API_THIRD;

            const formData = new FormData();

            if (!file) {
                return;
            }

            formData.append('file', file);

            if (option === 'Proofread') {
                if (!input) {
                    toast.error("Please enter text for proofreading");
                    return;
                }

                setProcessing(true);

                try {

                    const res = await axios.post(`https://api.apyhub.com/sharpapi/api/v1/content/proofread`, { content: input }, {
                        headers: {
                            'apy-token': API_third,
                            'Content-Type': 'application/json'
                        }
                    });

                    const jobId = res.data.job_id;

                    if (jobId) {
                        const response = await axios.get(`https://api.apyhub.com/sharpapi/api/v1/content/proofread/job/status/${jobId}`, {
                            headers: {
                                'apy-token': API_third,
                                'Content-Type': 'application/json'
                            }
                        });

                        //console.log(response.data.data.attributes.result.proofread);
                        setProofread(response.data.data.attributes.result.proofread);
                        toast.success("Proofreading Successfull");
                    }
                }
                catch (err) {
                    console.log(err.message);
                }

            }
            else if (option === 'Text To Speech') {
                if (!gender) {
                    toast.error("Please select output tone");
                    return;
                }

                formData.append('gender', gender);
                const link = optionLink;

                setProcessing(true);

                try {
                    const res = await axios.post(`${link}`, formData, {
                        headers: {
                            'apy-token': API,
                            'content-type': 'multipart/form-data'
                        }
                    });

                    //console.log(res.data.data);
                    setDownloadURL(res.data.data);
                }
                catch (err) {
                    console.log(err.message);
                }

            }
            else {
                setProcessing(true);
                try {

                    const res = await axios.post(`${optionLink}`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "apy-token": API_third,
                        }, responseType: "blob",
                    });

                    //console.log(res.data);

                    setDownloadedFile(res.data);
                }
                catch (err) {
                    console.log(err.message);
                }
            }

        }
        catch (err) {
            console.error(err.message);
        }
        finally {
            setProcessing(false);
        }
    }

    const extract = async () => {

        const API = import.meta.env.VITE_APYHUB_API;
        const API_second = import.meta.env.VITE_APYHUB_API_SECOND;
        const API_third = import.meta.env.VITE_APYHUB_API_THIRD;

        if (option === 'Website Link Extractor') {
            if (!inputLink) {
                toast.error("Please provide webiste URL");
                return;
            }

            const link = optionLink;

            try {

                setProcessing(true);
                const res = await axios.post(`${link}`,{url: inputLink}, {
                    headers: {
                        'apy-token': API_second,
                        'Content-Type': 'application/json'
                    },
                });

                //console.log(res.data);
                setWebsiteLinks(res.data.links);
            }
            catch (err) {
                console.log(err.message);
            }
            finally{
                setProcessing(false);
            }
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(proofread);
        toast.success("Copied");
    }

    const downloadFile = async () => {
        if (!downloadedFile) {
            toast.error("No file found for downloading");
            return;
        }

        try {

            const pdfBlob = new Blob([downloadedFile], { type: "application/pdf" });
            const pdfURL = URL.createObjectURL(pdfBlob);
            const link = document.createElement("a");
            link.href = pdfURL;
            link.download = "File.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(pdfURL);

            //const binaryData = new Uint8Array([...downloadedFile].map(char => char.charCodeAt(0)));
            //const blob = new Blob([binaryData], { type: "application/pdf" });
            //FileSaver.saveAs(blob, "File.pdf");
            // const res = await axios.get(downloadedFile, {responseType: 'blob'});
            // console.log(res);
            // const blob = new Blob([res.data], {type: "application/pdf"});
            // FileSaver.saveAs(blob, 'File.pdf');
            toast.success("Download started");
        }
        catch (err) {
            console.log(err.message);
        }

    }

    const openLink = () => {
        if (!downloadURl) {
            return;
        }

        window.open(downloadURl, '_blank');
    }

    const websiteLink = (link) => {
        window.open(link, '_blank');
    }

    // const download = async () => {
    //     try {
    //         const res = await axios.post(`${optionLink}`)
    //     }
    //     catch (err) {

    //     }
    // }

    const handleConvertFileUpload = (e) => {
        if(e.target.files[0].type !== 'application/pdf'){
            toast.error("Please select a PDF file");
            return;
        }

        setFile(e.target.files[0]);
        setFileSelected(true);
    }

    const convert = async () => {
        if(!file){
            toast.error("File required");
            return;
        }

        try{

            setProcessing(true);
            const link = optionLink;
            let outputFormat = '';

            if(option === 'Pdf to Word'){
                outputFormat = 'docx';
            }
            if(option === 'Pdf to Powerpoint'){
                outputFormat = 'pptx';
            }
            if(option === 'Pdf to Excel'){
                outputFormat = 'xlsx';
            }

            const formData = new FormData();

            formData.append('file', file);
            formData.append('outputFormat', outputFormat);

            const res = await axios.post(`${link}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(res);

            if(res.status === 200){
                console.log(res.data);
                toast.success("File converted");
            }
        }
        catch(err){
            console.log(err.message);
        }
        finally{
            setProcessing(false);
        }
    }


    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-6 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >
                {/* Sidebar section */}
                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* Main content section */}
                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[100vh] lg:h-auto overflow-auto lg:py-5 px-10 rounded-xl md:py-5 content flex justify-start items-center flex-col gap-10 lg:gap-5`}>
                    <Toaster />
                    <h1 className={`text-center ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-4xl sm:mt-5 font-bold font-Titillium`}>Your everyday document tools, all at one place</h1>

                    <hr className='w-full bg-gray-800 h-[1px]' />

                    <div className={`w-full h-auto py-4 px-5 ${dark ? "bg-white" : "bg-black"} ${option === '' && optionLink === '' ? "hidden" : "block"} duration-200 ease-in-out rounded-md flex flex-col justify-start items-center gap-4`}>
                        <p className={`${dark ? "text-black" : "text-white"} font-semibold text-xl text-center md:text-2xl ${option === '' && optionLink === '' ? "hidden" : "block"}`}>{option}</p>

                        <p className={`${dark ? "text-black bg-gray-200" : "text-white bg-zinc-800"} ${option === 'Text To Speech' ? "block" : "hidden"} text-[12px] text-center duration-200 ease-in-out px-3 py-1 rounded-md md:text-sm`}>File formats supported are : <br /> <span className="font-bold text-black"> pdf, docx, doc, ppt, html, xml, jpg, png </span></p>

                        <p className={`${dark ? "text-black bg-gray-200" : "text-white bg-zinc-800"} ${file === null ? "hidden" : "block"} font-semibold text-[12px] text-center duration-200 ease-in-out px-3 py-1 rounded-md md:text-sm`}>{file?.name}</p>

                        <div className={` h-auto py-2 px-4 w-full flex flex-col justify-center items-center ${option === 'Text To Speech' ? "block" : "hidden"} gap-4`}>
                            <p className={`${dark ? "text-black " : "text-white"} text-sm lg:text-lg`}>Select Output Voice : </p>
                            <div className='w-full flex justify-center items-center gap-3'>
                                <p className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} px-4 py-1 duration-200 ease-in-out rounded-md ${gender === 'male' ? "border-2 border-blue-500 bg-blue-300" : ""} hover:opacity-85 cursor-pointer`} onClick={() => setGender('male')}>Male</p>
                                <p className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} px-4 py-1 duration-200 ease-in-out rounded-md ${gender === 'female' ? "border-2 border-blue-500 bg-blue-300" : ""} hover:opacity-85 cursor-pointer`} onClick={() => setGender('female')}>Female</p>
                            </div>
                        </div>

                        <p className={`bg-cyan-500 ${option === '' && optionLink === '' ? "hidden" : "block"} ${dark ? "text-white" : "text-white"} ${option === 'Proofread' ? "hidden" : "block"} ${option === 'Pdf to Word' || option === 'Pdf to Excel' || option === 'Pdf to Powerpoint' ? "hidden" : "block"} ${option === 'Website Link Extractor' ? "hidden" : "block"} px-5 py-2 rounded-md cursor-pointer hover:scale-95 duration-200 ease-in-out relative ${fileSelected ? "hidden" : "block"}`} onChange={handleFileSelect}>Choose File <input type="file" className='absolute cursor-pointer top-0 left-5 inset-2 opacity-0' /></p>
                        <p className={`bg-cyan-500 ${option === '' && optionLink === '' ? "hidden" : "block"} ${dark ? "text-white" : "text-white"} ${option === 'Pdf to Word' || option === 'Pdf to Excel' || option === 'Pdf to Powerpoint' ? "block" : "hidden"} px-5 py-2 rounded-md cursor-pointer hover:scale-95 duration-200 ease-in-out relative ${fileSelected ? "hidden" : "block"}`} onChange={handleConvertFileUpload}>Choose File <input type="file" className='absolute cursor-pointer top-0 left-5 inset-2 opacity-0' /></p>

                        <input type="text" className={`w-full md:w-[60%] rounded-md py-2 px-3 ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} outline-none duration-200 ease-in-out ${option === 'Website Link Extractor' ? "block" : "hidden"}`} placeholder='Enter website URL' onChange={(e) => setInputLink(e.target.value)}/>
                        <p className={`${dark ? "text-white" : "text-black"} duration-200 ease-in-out px-7 py-1 cursor-pointer hover:opacity-70 rounded-md bg-cyan-500 ${option === 'Website Link Extractor' ? "block" : "hidden"}`} onClick={extract}>{processing ? "Extracting ... Please Wait" : "Extract"}</p>

                        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out ${websiteLinks.length > 0 ? "block" : "hidden"}`}>Extracted Links : </p>

                        <div className={`${dark ? "bg-gray-200" : "bg-zinc-800"}  ${websiteLinks.length > 0 ? "block" : "hidden"} duration-200 ease-in-out py-2 px-4 rounded-md w-full flex flex-col justify-start items-center gap-2`}>
                            {websiteLinks.map((link, index)=> {
                                return <span key={index} className='text-blue-600 cursor-pointer text-[12px] text-start w-full lg:text-sm' onClick={() => websiteLink(link)}>{link}</span>
                            })}
                        </div>

                        <textarea className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} ${option === 'Proofread' ? "block" : "hidden"} outline-none w-full md:w-[60%] min-h-36 duration-200 ease-in-out px-3 py-3 rounded-md`} onChange={(e) => setInput(e.target.value)} placeholder='Enter text for proofreading + grammar check' />

                        <p className={`bg-red-500 ${dark ? "text-white" : "text-white"} px-5 py-2 rounded-md cursor-pointer hover:scale-95 duration-200 ease-in-out ${fileSelected ? "block" : "hidden"} `} onClick={() => { setFileSelected(false); setFile(null); setDownloadURL(''); }}>Remove</p>

                        <p className={`bg-cyan-500 ${dark ? "text-white" : "text-white"} px-5 py-2 rounded-md cursor-pointer hover:scale-95 duration-200 ease-in-out ${fileSelected && (option === 'Pdf to Word' || option === 'Pdf to Excel' || option === 'Pdf to Powerpoint') ? "hidden" : "block"} ${fileSelected || option === 'Proofread' ? "block" : "hidden"} flex justify-center items-center gap-2 `} onClick={process}>{processing ? (<>Processing... Please Wait <Loading /></>) : "Start Processing"} </p>
                        <p className={`bg-cyan-500 ${dark ? "text-white" : "text-white"} px-5 py-2 rounded-md cursor-pointer hover:scale-95 duration-200 ease-in-out ${fileSelected && (option === 'Pdf to Word' || option === 'Pdf to Excel' || option === 'Pdf to Powerpoint') ? "block" : "hidden"} flex justify-center items-center gap-2 `} onClick={convert}>{processing ? (<>Converting... Please Wait <Loading /></>) : "Start Converting"} </p>
                        <p className={`bg-emerald-500 ${dark ? "text-white" : "text-white"} px-5 py-2 rounded-md cursor-pointer hover:scale-95 duration-200 ease-in-out ${downloadedFile === null ? "hidden" : "block"} flex justify-center items-center gap-2 `} onClick={downloadFile}>Download <FaDownload /></p>
                        <p className={`bg-emerald-500 ${dark ? "text-white" : "text-white"} px-5 py-2 rounded-md cursor-pointer hover:scale-95 duration-200 ease-in-out ${downloadURl === '' ? "hidden" : "block"} flex justify-center items-center gap-2 `} onClick={openLink}>Open</p>

                        <p className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"}  ${proofread !== '' ? "block" : "hidden"} text-[12px] lg:text-sm py-3 px-5 w-full md:w-[60%] h-auto text-start rounded-md`}>
                            {proofread}
                        </p>
                        <p className={`bg-emerald-500 ${dark ? "text-white" : "text-white"} px-5 py-2 rounded-md cursor-pointer hover:scale-95 duration-200 ease-in-out ${proofread !== '' ? "block" : "hidden"} flex justify-center items-center gap-2 `} onClick={copyToClipboard}>Copy To Clipboard </p>
                    </div>

                    <hr className={`${option === '' && optionLink === '' ? "hidden" : "block"} w-full bg-gray-800 h-[1px]`} />

                    <div className={`w-full h-auto grid grid-cols-2 md:grid-cols-3 justify-items-center gap-5`}>
                        {optionList.map((option, index) => {
                            return <DocStudioBox onClick={() => { setOption(option.option); setOptionLink(option.optionLink) }} key={index} className={`w-full px-8 py-5 h-36 rounded-md ${dark ? "bg-white" : "bg-black"} flex flex-col justify-evenly items-center duration-200 ease-in-out gap-2`} textClassName={` ${dark ? "text-black" : "text-white"} lg:text-2xl duration-200 ease-in-out`} buttonClass={`w-full py-1 lg:py-2 rounded-full text-center ${dark ? "text-white bg-black" : "text-black bg-white"} duration-200 ease-in-out cursor-pointer `} title={option.option} />
                        })}
                    </div>

                </div>

            </div>
        </>
    );
}

export default DocStudio;
