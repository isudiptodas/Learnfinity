import React, { useState, useRef, useEffect, version } from 'react';
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import { Editor } from '@monaco-editor/react';
import axios from 'axios'
import { languageVersions, languageTemplates } from '../languageTemplate';
import { FaCopy } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { FaDownload } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import IdeDropdown from '../components/IdeDropdown';

function IDE() {

  const { dark } = useTheme();
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const { isSideBarVisible, toggleSidebar } = useSidebar(false);
  const [selectedLang, setSelectedLang] = useState(languageVersions[0]);
  const [value, setValue] = useState(languageTemplates[selectedLang]);
  const [output, setOutput] = useState('');
  const [userInput, setUserInput] = useState("");
  const [executed, setexecuted] = useState(false);
  const ref = useRef();

  const handleMount = (editor) => {
    ref.current = editor;
    editor.focus();
  };

  const toggleVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const pistonURL = "https://emkc.org/api/v2/piston/execute";

  const handleLanguageSelect = (language) => {
    if (languageTemplates[language]) {
      setSelectedLang(language);
      setValue(languageTemplates[language]);
    } else {
      console.error(`No template found for language: ${language}`);
    }
  };

  const runCode = async () => {
    setexecuted(true);
    try {
      const requestData = {
        language: selectedLang,
        version: languageVersions.find(lang => lang.language === selectedLang).version,
        files: [
          {
            name: "main",
            content: value
          }
        ],
        stdin: userInput
      };

      console.log("Request data from pistopn API :", requestData);

      const res = await axios.post(pistonURL, requestData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Data received from piston API :", res.data.run);
      setOutput(res.data.run.output);

    } catch (err) {
      console.error("Error during API request:", err.message);
    }
    finally {
      setexecuted(false);
    }
  }

  const copyToClipboard = () => {
    if (value) {
      navigator.clipboard.writeText(value);
      toast.success(`${selectedLang} code copied to clipboard`);
    }
    else {
      toast.error('Editor is empty');
    }
  }

  const downloadCode = () => {
    if (!value) {
      toast.error("Editor is empty");
      return;
    }

    const languageExtensions = {
      c: ".c",
      cpp: ".cpp",
      java: ".java",
      python: ".py",
      javascript: ".js",
      typescript: ".ts",
      rust: ".rs",
      go: ".go",
      php: ".php",
      csharp: ".cs",
    };

    const extension = languageExtensions[selectedLang] || ".txt";

    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `code${extension}`;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(`Code downloaded`);
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

          <div className={` w-full lg:w-[80%] bg-transparent ${dark ? "md:bg-white md:shadow-lg" : "bg-transparent border-b-2 border-gray-500"} h-auto flex flex-col md:flex-row justify-evenly items-center gap-2 py-5 px-2 rounded-lg`}>

            <p className={`${dark ? "text-black" : "text-white"} md:w-[20%] font-Titillium`}><IdeDropdown onSelectLanguage={handleLanguageSelect} /></p>

            <button className={` text-s md:text-sm duration-200 ease-in-out ${dark ? " text-black bg-white shadow-lg" : " text-white bg-black"} duration-300 ease-in-out md:w-[20%] w-full cursor-pointer py-3 rounded-md flex justify-center items-center gap-5`} onClick={copyToClipboard}>
              Copy<FaCopy />
            </button>

            <button className={` text-s md:text-sm duration-200 ease-in-out ${dark ? " text-black bg-white shadow-lg" : " text-white bg-black"} duration-300 ease-in-out md:w-[20%] w-full cursor-pointer py-3 rounded-md flex justify-center items-center gap-5`} onClick={downloadCode}>
              Download <FaDownload />
            </button>

            <button className={` text-s md:text-sm duration-200 ease-in-out ${dark ? "text-black bg-white shadow-lg" : "text-white bg-black"} px-4 py-3 md:w-[20%] w-full flex justify-center items-center gap-3 rounded-md`} onClick={runCode}>{executed ? "Executing code please wait ..." : <>Run Code <FaPlay /></>}</button>
          </div>

          <div className='h-auto w-full flex flex-col lg:flex-row gap-5'>
            <section className={` ${dark ? "bg-white" : "bg-[#1e1e1e] border-2 border-black"} h-64 w-full lg:h-auto lg:w-1/2 rounded-xl overflow-auto flex flex-col gap-3 justify-evenly items-center shadow-lg`}>

              <div className='h-auto w-full flex justify-center items-center gap-5 py-3 px-5'>

              </div>

              <Toaster />
              <Editor
                height="90%"
                width="100%"
                language={selectedLang}
                theme={`${dark ? "vs-light" : "vs-dark"}`}
                value={value}
                onChange={(value) => setValue(value)}
                onMount={handleMount}
              />
            </section>


            <div className=' flex flex-col w-full lg:w-1/2 gap-3 h-auto'>
              <section className={`${dark ? "bg-white" : "bg-[#1e1e1e] border-2 border-black"} h-auto lg:h-1/2 px-5 w-full rounded-xl flex flex-col justify-start lg:items-start lg:px-7 items-center py-10 gap-5 shadow-lg`}>

                <p className={`${dark ? "text-black" : "text-white"}`}>Output will show here : </p>
                <div className={`${dark ? "bg-gray-200" : "bg-black"} font-mono h-32 w-full ${dark ? "text-black" : "text-white"} rounded-md px-5 py-5 text-s md:text-lg overflow-auto`}>
                  <pre>{String(output)}</pre>
                </div>
              </section>

              <section className={` ${dark ? "bg-white" : "bg-[#1e1e1e] border-2 border-black"} h-auto px-5 w-full lg:h-1/2 rounded-xl flex flex-col justify-evenly lg:items-start lg:px-7 items-center py-10 gap-5 shadow-lg`}>
                <p className={`${dark ? "text-black" : "text-white"}`}>Enter input here : </p>
               <textarea className={`w-full rounded-md ${dark ? "bg-gray-200 text-black" : "bg-black text-white"} px-3 py-2 outline-none`}></textarea>
              </section>

            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default IDE;
