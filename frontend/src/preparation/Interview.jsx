import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaCopy } from "react-icons/fa";
import Loading from "../components/Loading.jsx";

function Interview() {

    const Careers = [
        'Frontend Developer',
        'Backend Developer',
        'Java Full Stack Developer',
        'MERN stack Developer',
        'AI/ML Engineer',
        'Python Developer',
        'Data Analyst',
        'Technical Lead',
        'System Engineer',
        'Cyber Security Engineer',
        'Software Engineer',
        'DevOps Engineer',
        'QA Tester',
        'Business Analyst',
        'Data Engineer',
        'AI Researcher',
        'Blockchain Engineer',
        'Quantum Computing Engineer',
        'Reliability Engineer',
        'Quality Engineer',
        'AR / VR Developer',
    ];

    const { dark } = useTheme();

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);
    const [companyType, setCompanyType] = useState('');
    const [experience, setExperience] = useState('');
    const [generatedQuestions, setGeneratedQuestions] = useState('');
    const [careers, setCareer] = useState('');
    const [generating, setGenerating] = useState(false);

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedQuestions);
        toast.success("Questions copied to clipboard");
    }

    const generateQuestions = async () => {

        if(!companyType || !experience || !careers){
            toast.error("All fields are required");
            return;
        }

        const input = `I am aiming for ${companyType} and a want a job as a ${careers} and my experience is ${experience} years. Now prepare me with all the possible questions that they may ask me in the interview and also with answers. Give around 20-30 question also with their answers. Note that give me these questions in simple text form and no italics or bold or underline or heading or anything, simple text. Give me proper qquestion answers following proper number format`;

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
        finally{
            setGenerating(false);
        }
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

                    <h1 className={`text-center ${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-Titillium text-2xl lg:text-4xl font-bold`}>Ace your next interview with our resources</h1>

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

                        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out w-full text-start text-lg`}>You want job as a : </p>
                        <div className="w-full h-auto flex flex-wrap justify-start items-start gap-4">
                            {Careers.map((career, index) => {
                                return <span key={index} className={`${dark ? "bg-gray-300 text-black" : "bg-zinc-800 text-white"} ${career === careers ? "bg-blue-300 border-4 border-blue-600" : ""} duration-200 ease-in-out cursor-pointer hover:shadow-lg px-4 py-2 rounded-md`} onClick={() => setCareer(career)}>{career}</span>
                            })}
                        </div>

                    </div>

                    <div className={`${dark ? "bg-white" : "bg-black"} rounded-lg w-full h-auto px-5 py-5 mt-5 flex flex-col justify-start items-center gap-5`}>

                        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out w-full text-start text-lg`}>Write your experience in years : </p>
                        <p className={`${dark ? "text-black" : "text-white"} duration-200 ease-in-out w-full text-start opacity-50 -mt-5 text-[12px]`}>(0 in case of no experience)</p>
                        <input type="text" className={`w-full ${dark ? "bg-gray-300 text-black" : "bg-zinc-800 text-white"} py-2 px-2 rounded-lg duration-200 ease-in-out outline-none`} placeholder="Enter experience" onChange={(e) => setExperience(e.target.value)} />

                    </div>

                    <button className={`bg-cyan-500 text-white w-full py-3 rounded-md hover:bg-cyan-800 cursor-pointer duration-200 ease-in-out mt-5`} onClick={generateQuestions}>{generating ? "Generating ... please wait" : "Generate Questions"}</button>

                    <div className={`w-full h-auto py-10 px-10 ${generatedQuestions === '' ? "hidden" : "block"} ${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out mt-5 relative`}>
                        <p className={`${dark ? "text-black" : "text-white"} font-Titillium text-[10px] md:text-sm lg:text-lg`}>
                            <pre className="overflow-x-auto px-10 font-sans content">
                                {generatedQuestions}
                            </pre>
                        </p>
                        <span onClick={copyToClipboard} className={`${dark ? "bg-black text-white" : "bg-white text-black"} flex justify-center items-center gap-3 w-full py-2 mt-5 rounded-md cursor-pointer hover:opacity-75 duration-200 ease-in-out`}>Copy to clipboard <FaCopy /></span>
                    </div>

                    <p className={`${generatedQuestions === '' ? "hidden" : "block"} ${dark ? "text-black" : "text-white"} font-Titillium mt-5 text-sm lg:text-lg`}>All the best for your interview. 😊</p>
                </div>
            </div>
        </>
    )
}

export default Interview
