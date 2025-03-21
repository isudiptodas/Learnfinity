import React, { useEffect, useState } from 'react'
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from '../components/Sidebar';
import Dropdown from '../components/Dropdown'
import { Editor } from '@monaco-editor/react';
import toast, { Toaster } from 'react-hot-toast';
import { FaCopy } from "react-icons/fa";
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";
import JSZip from 'jszip';
import { FaDownload } from "react-icons/fa6";
import PlaygroundDropdown from '../components/PlaygroundDropdown';
import { FaCheck } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";

function WebPlayground() {

    const { dark } = useTheme();
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);
    const [showAllFiles, setShowAllFiles] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [allFiles, setAllFiles] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("html");
    const [htmlValue, setHTMLValue] = useState("");
    const [cssValue, setCSSValue] = useState("");
    const [jsValue, setJSValue] = useState("");
    const [srcDoc, setSrcDoc] = useState("");
    const [projectTitle, setProjectTitle] = useState("");

    const handleEditorChange = (value) => {
        if (selectedLanguage === "html") {
            setHTMLValue(value);
        } else if (selectedLanguage === "css") {
            setCSSValue(value);
        } else if (selectedLanguage === "js") {
            setJSValue(value);
        }
    };

    const downloadAsZip = () => {

        const zip = new JSZip();
        zip.file("index.html", htmlValue);
        zip.file("style.css", cssValue);
        zip.file("script.js", jsValue);

        zip.generateAsync({ type: "blob" }).then((content) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(content);
            link.download = "Learnfinity_Project.zip";
            link.click();
        });

    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            const combinedSrcDoc = `
            <html>
              <head>
                <style>${cssValue}</style>
              </head>
              <body>
                ${htmlValue}
                <script>${jsValue}</script>
              </body>
            </html>
          `;
            setSrcDoc(combinedSrcDoc);
        }, 250);

        return () => clearTimeout(timeout);
    }, [htmlValue, cssValue, jsValue]);

    const copyToClipboard = () => {
        if (selectedLanguage === 'html' && htmlValue !== '') {
            navigator.clipboard.writeText(htmlValue);
            toast.success(`HTML code copied to clipboard`);
        }
        else if (selectedLanguage === 'css' && cssValue !== '') {
            navigator.clipboard.writeText(cssValue);
            toast.success(`CSS code copied to clipboard`);
        }
        else if (selectedLanguage === 'js' && jsValue !== '') {
            navigator.clipboard.writeText(jsValue);
            toast.success(`JS code copied to clipboard`);
        }
        else {
            toast.error('Editor is empty');
        }
    }

    const handleShowFiles = () => {
        setShowAllFiles(!showAllFiles);
    }

    const handleModalOpen = () => {

        if (htmlValue === '' && cssValue === '') {
            toast.error("Project must contain atleast html & css files");
            return;
        }

        setIsModalOpen(!isModalOpen);
    }

    const saveProject = async (e) => {
        e.preventDefault();

        if (projectTitle === '') {
            toast.error("project Title is required");
            return;
        }

        if (htmlValue === '' || cssValue === '') {
            toast.error("It seems your html or css file in empty");
            return;
        }

        try {

            const token = localStorage.getItem("token");

            const res = await axios.post(`https://learnfinity-mzah.onrender.com/save/projects`, {
                projectTitle, htmlValue, cssValue, jsValue
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (res.data.success) {
                toast.success("Project saved");
            }
            else {
                toast.error("Failed to save project ! Please try again later");
            }
        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setIsModalOpen(false);
        }
    }

    const deleteProject = async (projectId) => {

        try {
            const res = await axios.delete(`https://learnfinity-mzah.onrender.com/delete/projects/${projectId}`);

            if (res.data.success) {
                toast.success("Project deleted successfully ");
                fetchAllProjects();
                return;
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }

    const fetchAllProjects = async () => {

        // handleShowFiles();

        // e.preventDefault();

        const token = localStorage.getItem("token");

        try {
            const res = await axios.get(`https://learnfinity-mzah.onrender.com/all/projects`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (res.data.success) {
                // console.log(res.data.allProjects);
                setAllFiles(res.data.allProjects);
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        fetchAllProjects();
    }, []);

    const loadProject = (project) => {
        setHTMLValue(project.htmlValue);
        setCSSValue(project.cssValue);
        setJSValue(project.jsValue);
    }

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Sidebar />
                <Toaster />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>


                {/* main content section */}

                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 flex flex-col justify-start items-center lg:justify-between gap-10 lg:gap-5 overflow-auto relative`}>

                    <div className={`${isModalOpen ? "block" : "hidden"} h-full w-full absolute left-0 top-0 ${dark ? "bg-white" : "bg-black"} z-40 flex justify-center items-start py-24`} onClick={() => setIsModalOpen(!isModalOpen)}>
                        <form className={`border-2 ${dark ? "border-black" : "border-white"} px-4 py-5 w-1/2 rounded-lg flex flex-col justify-center gap-3`} onSubmit={saveProject} onClick={(e) => e.stopPropagation()} >
                            <div className={`flex flex-col justify-center items-start gap-2 ${dark ? "text-black" : "text-white"}`}>
                                <label htmlFor="projectTitle">Project Title</label>
                                <input type="text" className={`w-full ${dark ? "bg-gray-300" : "bg-zinc-700"} px-2 py-2 rounded-md`} placeholder='Enter project title' onChange={(e) => setProjectTitle(e.target.value)} />
                            </div>
                            <button className='bg-emerald-500 hover:bg-emerald-800 ease-in-out duration-200 w-full text-white py-2 rounded-lg' type='submit' onClick={saveProject}>Save ✓</button>
                            <p className='bg-red-500 hover:bg-red-800 text-center ease-in-out duration-200 w-full text-white py-2 rounded-lg' onClick={() => setIsModalOpen(false)}>Cancel X</p>

                        </form>
                    </div>

                    <div className={`${dark ? "bg-white" : "bg-transparent"} duration-300 ease-in-out h-auto w-full lg:w-[50%] rounded-xl overflow-y-auto flex flex-col justify-start gap-4 relative`}>

                        <div className={` ${showAllFiles === true ? "block" : "hidden"} z-50 h-auto w-full px-10 py-10 flex flex-col gap-4 justify-start items-center ${dark ? "bg-white" : "bg-black"}`}>
                            <button className={`w-full bg-red-500 text-white rounded-md hover:bg-red-700 cursor-pointer py-2 duration-300 ease-in-out`} onClick={() => setShowAllFiles(!showAllFiles)}>Close X</button>
                            <div className={`h-[1px] w-full ${dark ? "bg-black" : "bg-white"}`}></div>
                            <div className="overflow-y-auto w-full flex flex-col items-center gap-5">
                                {allFiles.length > 0 ? (
                                    allFiles.map((project) => (
                                        <div key={project._id} className={`w-full h-auto py-2 rounded-md px-5 ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-300 ease-in-out flex justify-between items-center`}>
                                            <p>{project.projectTitle}</p>
                                            <div className='flex justify-center items-center gap-3'>
                                                <button className='cursor-pointer text-yellow-500' onClick={() => loadProject(project)}><MdOutlineElectricBolt /></button>
                                                <button className='cursor-pointer text-red-600' onClick={() => deleteProject(project._id)}><FaTrashAlt /></button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No files saved yet.</p>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className={`${showAllFiles === true ? "hidden" : "block"} ${dark ? "md:bg-white bg-transparent md:shadow-lg" : "bg-transparent border-b-2 border-gray-500"} px-2 py-4 rounded-lg w-full lg:w-[80%] h-auto flex flex-col md:flex-row justify-evenly items-center gap-2 `}>

                        <button className={`${dark ? " text-black bg-white shadow-lg" : " text-white bg-black"} md:w-[20%] w-full  duration-300 ease-in-out text-s md:text-sm cursor-pointer py-2 px-2 sm:px-5 lg:px-2 rounded-lg flex justify-center items-center gap-5`} onClick={copyToClipboard}>
                            Copy <FaCopy />
                        </button>
                        <button className={`${dark ? " text-black bg-white shadow-lg" : " text-white bg-black"} md:w-[20%] w-full  duration-300 ease-in-out text-s md:text-sm cursor-pointer py-2 px-2 sm:px-5 lg:px-2 rounded-lg flex justify-center items-center gap-5`} onClick={() => setShowAllFiles(!showAllFiles)}>
                            View Saved Files <IoIosSave />
                        </button>
                        <button className={`${dark ? " text-black bg-white shadow-lg" : " text-white bg-black"} md:w-[20%] w-full  duration-300 ease-in-out text-s md:text-sm cursor-pointer py-2 px-2 sm:px-5 lg:px-2 rounded-lg flex justify-center items-center gap-5`} onClick={handleModalOpen}>
                            Save <FaCheck />
                        </button>
                        <button className={`${dark ? " text-black bg-white shadow-lg" : " text-white bg-black"} md:w-[20%] w-full  duration-300 ease-in-out text-s md:text-sm cursor-pointer py-2 px-2 sm:px-5 lg:px-2 rounded-lg flex justify-center items-center gap-2`} onClick={downloadAsZip}>
                            Download <FaDownload />
                        </button>

                    </div>

                    <div className={`w-full h-auto py-2 flex justify-center items-center ${showAllFiles === true ? "hidden" : "block"}`}>
                        <PlaygroundDropdown onSelect={(value) => setSelectedLanguage(value)} />
                    </div>

                    <div className={`${showAllFiles === true ? "hidden" : "block"} w-full h-auto flex py-5 gap-2 lg:gap-5 flex-col md:flex-row`}>

                        <div className='h-auto w-full md:w-1/2 rounded-lg overflow-hidden'>
                            {selectedLanguage === "html" && (<>

                                <Editor
                                    language="html"
                                    value={htmlValue}
                                    onChange={(value) => handleEditorChange(value)}
                                    className="h-96 w-full md:w-1/2"
                                    theme={dark ? "vs-light" : "vs-dark"}
                                />
                            </>
                            )}

                            {selectedLanguage === "css" && (<>

                                <Editor
                                    language="css"
                                    value={cssValue}
                                    onChange={(value) => handleEditorChange(value)}
                                    className="h-96 w-full md:w-1/2"
                                    theme={dark ? "vs-light" : "vs-dark"}
                                />
                            </>
                            )}

                            {selectedLanguage === "js" && (<>

                                <Editor
                                    language="javascript"
                                    value={jsValue}
                                    onChange={(value) => handleEditorChange(value)}
                                    className="h-96 w-full md:w-1/2"
                                    theme={dark ? "vs-light" : "vs-dark"}
                                />
                            </>
                            )}

                        </div>
                        <div className={`${dark ? "bg-white" : "bg-black"} duration-300 ease-in-out h-96 w-full md:w-1/2 rounded-xl overflow-auto`}>
                            <iframe title='output' sandbox='allow-scripts' style={{ border: "none" }} width="100%" height="100%" srcDoc={srcDoc} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WebPlayground
