import React, { useState, useEffect, useRef } from 'react';
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

function LiveResume() {

    const themes = [
        {
            theme: 'Charcoal',
            color: 'bg-black',
            text: 'text-black'
        },
        {
            theme: 'Lime',
            color: 'bg-yellow-500',
            text: 'text-yellow-500'
        },
        {
            theme: 'Life',
            color: 'bg-blue-500',
            text: 'text-blue-500'
        },
        {
            theme: 'Nature',
            color: 'bg-emerald-600',
            text: 'text-emerald-600'
        },
        {
            theme: 'Lavender',
            color: 'bg-purple-600',
            text: 'text-purple-600'
        },
    ];

    const { dark } = useTheme();
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [themeVisible, setThemeVisible] = useState(false);
    const [theme, setTheme] = useState(themes[0].theme);
    const [color, setColor] = useState(themes[0].color);
    const [text, setText] = useState(themes[0].text);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);
    const location = useLocation();

    const divRef = useRef(null);

    const { title, userId } = location.state;
    const resume = location.state;

    useEffect(() => {
        if (resume) {
            setName(resume.name);
            setEmail(resume.email);
            setContact(resume.contact);
            setLink1(resume.social1);
            setLink2(resume.social2);
            setEdu1(resume.edu1);
            setEdu1start(resume.edu1start);
            setEdu1end(resume.edu1end);
            setEdu1grade(resume.edu1grade);
            setEdu2(resume.edu2);
            setEdu2start(resume.edu2start);
            setEdu2end(resume.edu2end);
            setEdu2grade(resume.edu2grade);
            setExp1(resume.exp1);
            setExpdetail1(resume.exp1detail);
            setExp2(resume.exp2);
            setExpdetail2(resume.exp2detail);
            setSkill1(resume.skill1);
            setSkill2(resume.skill2);
            setSkill3(resume.skill3);
            setProject1(resume.project1);
            setProject1details(resume.project1detail);
            setProject2(resume.project2);
            setProject2details(resume.project2detail);
            setProject3(resume.project3);
            setProject3details(resume.project3detail);
        }
    }, []);

    //console.log(title, userId);
    //console.log(resume);

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');

    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');

    const [edu1, setEdu1] = useState('');
    const [edu2, setEdu2] = useState('');

    const [edu1start, setEdu1start] = useState('');
    const [edu1end, setEdu1end] = useState('');
    const [edu1grade, setEdu1grade] = useState('');

    const [edu2start, setEdu2start] = useState('');
    const [edu2end, setEdu2end] = useState('');
    const [edu2grade, setEdu2grade] = useState('');

    const [exp1, setExp1] = useState('');
    const [expDetail1, setExpdetail1] = useState('');

    const [exp2, setExp2] = useState('');
    const [expDetail2, setExpdetail2] = useState('');

    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');

    const [project1, setProject1] = useState('');
    const [project1Details, setProject1details] = useState('');

    const [project2, setProject2] = useState('');
    const [project2Details, setProject2details] = useState('');

    const [project3, setProject3] = useState('');
    const [project3Details, setProject3details] = useState('');

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const saveResume = async () => {
        if (!name || !email || !contact || !edu1 || !edu1start || !edu1end || !edu1grade || !skill1) {
            toast.error("Mandatory fields are required");
            return;
        }

        const token = localStorage.getItem('token');

        if (!token) {
            return;
        }

        try {
            const res = await axios.post(`https://learnfinity-mzah.onrender.com/save/resume`, {
                title, userId, name, email, contact, link1, link2, edu1, edu1start, edu1end, edu1grade, edu2, edu2start, edu2end, edu2grade, exp1, expDetail1, exp2, expDetail2, skill1, skill2, skill3, project1, project1Details, project2, project2Details, project3, project3Details
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            //console.log(res.data);

            if (res.status === 200) {
                toast.success("Resume saved");
                //console.log(res.data);
            }

            if (res.status === 201) {
                toast.success("Updated resume saved");
                //console.log(res.data);
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    const downloadResume = async () => {
        if (!divRef.current) return;
    
        try {
        
            divRef.current.querySelectorAll("*").forEach((el) => {
                const computedStyle = window.getComputedStyle(el);
                if (computedStyle.color.includes("oklch")) {
                    el.style.color = "black"; 
                }
            });
    
            const canvas = await html2canvas(divRef.current, { 
                scale: 2, 
                backgroundColor: null,
                useCORS: true,
            });
    
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
    
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
    
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    
            const imgX = (pdfWidth - imgWidth * ratio) / 2; 
            const imgY = 10; 
            const imgScaledWidth = imgWidth * ratio;
            const imgScaledHeight = imgHeight * ratio;
    
            pdf.addImage(imgData, "PNG", imgX, imgY, imgScaledWidth, imgScaledHeight);
            pdf.save(`${title}_Resume.pdf`);
        } catch (error) {
            console.error("Error while downloading resume:", error);
        }
    };
    
    

    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden py-5 lg:h-auto lg:py-6 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Toaster />

                {/* Sidebar section */}
                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* Main content section */}
                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[100vh] lg:h-auto overflow-auto lg:py-5 px-10 rounded-xl md:py-5 content flex justify-start lg:justify-evenly items-center flex-col lg:flex-row-reverse gap-10 lg:gap-5 relative`}>

                    <IoIosArrowRoundBack className={`${dark ? "text-black" : "text-white"} absolute left-7 top-2 lg:top-5 text-3xl`} onClick={() => navigate('/resume')} />

                    <div className={`w-auto h-auto px-5 lg:px-0 pt-4 pb-0 md:pb-4 flex justify-center items-center`}>

                        <div ref={divRef} className='bg-white overflow-hidden w-[210px] h-[297px] sm:w-[248px] sm:h-[350px] md:w-[380px] md:h-[532px] lg:w-[420px] lg:h-[595px] resume-container shadow-lg flex flex-col justify-start items-start'>
                            <p className={` text-[10px] sm:text-[12px] md:text-[17px] lg:text-[20px] ${text} font-bold`}>{name}</p>
                            <div className={`w-full flex flex-wrap gap-2 pt-1 h-auto`}>
                                <p className={`text-black text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] text-start`}>{contact}</p>
                                <p className={`text-black text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] text-start`}>{email}</p>
                                <p className={`text-black text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] text-start`}>{link1}</p>
                                <p className={`text-black text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] text-start`}>{link2}</p>
                            </div>

                            <div className='w-full flex flex-col justify-center items-start gap-2'>
                                <p className={`${edu1 === '' ? "hidden" : "block"} text-[10px] sm:text-[12px] ${text} md:text-[17px] lg:text-[20px] mt-2 font-bold`}>Education</p>
                                <div className={`${edu1 === '' ? "hidden" : "block"}  w-full flex justify-between h-auto -mt-2`}>
                                    <div className='w-auto flex flex-col justify-center items-start'>
                                        <p className={`text-black  text-[5px] sm:text-[7px] md:text-[10px] lg:text-[12px] font-semibold`}>{edu1}</p>
                                        <p className={`text-black  text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] italic`}>{edu1start} to {edu1end}</p>
                                    </div>
                                    <div className='flex justify-end items-start'>
                                        <p className={`text-black text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px]`}>Grade : {edu1grade}</p>
                                    </div>
                                </div>

                                <div className={`${edu2 === '' ? "hidden" : "block"}  w-full flex justify-between h-auto -mt-2 sm:-mt-0`}>
                                    <div className='w-auto flex flex-col justify-center items-start'>
                                        <p className={`text-black text-[5px] sm:text-[7px] md:text-[10px] lg:text-[12px] font-semibold`}>{edu2}</p>
                                        <p className={`text-black text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] italic`}>{edu2start} to {edu2end}</p>
                                    </div>
                                    <div className='flex justify-end items-start'>
                                        <p className={`text-black text-[3px] sm:text-[5px] lg:text-[10px] md:text-[7px]`}>Grade : {edu2grade}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex flex-col justify-center items-start gap-2'>
                                <p className={` ${exp1 === '' ? "hidden" : "block"}  text-[10px] sm:text-[12px] ${text} md:text-[17px] lg:text-[20px] mt-2 font-bold`}>Experience</p>
                                <div className={` w-full flex flex-col items-start gap-1 h-auto -mt-2`}>
                                    <div className={`${exp1 === '' ? "hidden" : "block"} w-auto flex flex-col justify-center items-start`}>
                                        <p className={`text-black text-[5px] sm:text-[7px] md:text-[10px] lg:text-[12px] font-semibold`}>{exp1}</p>
                                        <p className={`text-black text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] italic`}>{expDetail1}</p>
                                    </div>
                                    <div className={`${exp2 === '' ? "hidden" : "block"} w-auto flex flex-col justify-center items-start`}>
                                        <p className={`text-black text-[5px] sm:text-[7px] md:text-[10px] lg:text-[12px] font-semibold`}>{exp2}</p>
                                        <p className={`text-black text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] italic`}>{expDetail2}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`${skill1 === '' ? "hidden" : "block"} w-full flex flex-col justify-start items-start`}>
                                <p className={` text-[10px] sm:text-[12px] md:text-[17px] lg:text-[20px] ${text} mt-2 font-bold`}>Skills</p>
                                <span className='text-black text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px]'>{skill1}</span>
                                <span className='text-black text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px]'>{skill2}</span>
                                <span className='text-black text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px]'>{skill3}</span>
                            </div>

                            <div className='w-full flex flex-col justify-start items-start '>
                                <p className={`${project1 === '' ? "hidden" : "block"} text-[10px] sm:text-[12px] ${text} md:text-[17px] lg:text-[20px] mt-2 font-bold`}>Projects</p>
                                <div className={`${project1 === '' ? "hidden" : "block"} w-full flex flex-col justify-start items-start md:mb-1`}>
                                    <p className='text-[5px] sm:text-[7px] md:text-[10px] lg:text-[12px] text-black font-semibold'>{project1}</p>
                                    <p className='text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] text-black italic'>{project1Details}</p>
                                </div>
                                <div className={`${project2 === '' ? "hidden" : "block"} w-full flex flex-col justify-start items-start md:mb-1`}>
                                    <p className='text-[5px] sm:text-[7px] md:text-[10px] lg:text-[12px] text-black font-semibold'>{project2}</p>
                                    <p className='text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] text-black italic'>{project2Details}</p>
                                </div>
                                <div className={`${project3 === '' ? "hidden" : "block"} w-full flex flex-col justify-start items-start md:mb-1`}>
                                    <p className='text-[5px] sm:text-[7px] md:text-[10px] lg:text-[12px] text-black font-semibold'>{project3}</p>
                                    <p className='text-[3px] sm:text-[5px] md:text-[7px] lg:text-[10px] text-black italic'>{project3Details}</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* edit box */}

                    <div className={`w-full md:w-[60%] h-[600px] content overflow-y-auto lg:h-[595px] pt-2 pb-4 flex flex-col justify-start items-center gap-3`}>
                        <h1 className={`${dark ? "text-black" : "text-white"} text-center text-3xl py-2`}>{title}</h1>

                        <div className='w-full lg:w-auto flex justify-center items-center gap-2'>
                            <p className={`px-3 py-2 lg:py-1 text-[10px] lg:text-[15px] bg-cyan-500 cursor-pointer hover:opacity-75 duration-200 ease-in-out rounded-md ${dark ? "text-white" : "text-white"}`} onClick={saveResume}>Save</p>
                            <p className={`px-3 py-2 lg:py-1 text-[10px] lg:text-[15px] bg-purple-500 cursor-pointer hover:opacity-75 duration-200 ease-in-out rounded-md ${dark ? "text-white" : "text-white"}`} onClick={downloadResume}>Download</p>
                        </div>

                        <hr className='w-full bg-black my-4' />

                        <div className='w-full flex flex-col justify-center items-center gap-3 relative'>
                            <div className='w-auto flex justify-center items-center gap-2'>
                                <p className={`${dark ? "text-black" : "text-white"} text-center text-lg capitalize py-2`}>Choose Theme : </p>
                                <p className={` text-center text-[10px] lg:text-[15px] capitalize py-1 ${color} text-white px-3 rounded-md cursor-pointer`} onClick={() => setThemeVisible(!themeVisible)}>{theme}</p>
                            </div>

                            <div className={`${dark ? "bg-white" : "bg-black"} ${themeVisible ? "block" : "hidden"} py-2 lg:py-1 px-1 w-full overflow-x-auto flex justify-start lg:justify-center items-start gap-2 rounded-md w-autoduration-200 ease-in-out`}>
                                {themes.map((theme, index) => {
                                    return <span key={index} className={`${dark ? "text-black hover:bg-gray-300 px-2 text-[12px] py-2 lg:py-1 rounded-md" : "text-white hover:bg-zinc-700 px-2 py-2 rounded-md"} cursor-pointer duration-200 ease-in-out`} onClick={() => {
                                        setTheme(theme.theme); setColor(theme.color);
                                        setText(theme.text)
                                    }}>{theme.theme}</span>
                                })}
                            </div>

                        </div>

                        {/* basic details box */}
                        <div className={`${dark ? "bg-white" : "bg-black"} w-full mt-2 mb-4 rounded-md duration-200 ease-in-out flex flex-col justify-center items-start gap-2 px-2 py-4`}>
                            <h1 className={`${dark ? "text-black" : "text-white"} text-xl font-bold ml-1`}>Basic Details</h1>

                            <input value={name} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Enter your name *' onChange={(e) => setName(e.target.value)} />
                            <input value={email} type="email" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Enter your email *' onChange={(e) => setEmail(e.target.value)} />
                            <input value={contact} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Enter your contact number *' onChange={(e) => setContact(e.target.value)} />
                        </div>

                        {/* social links box */}
                        <div className={`${dark ? "bg-white" : "bg-black"} w-full mt-2 mb-4 rounded-md duration-200 ease-in-out flex flex-col justify-center items-start gap-2 px-2 py-4`}>
                            <h1 className={`${dark ? "text-black" : "text-white"} text-xl font-bold ml-1`}>Social Links</h1>

                            <input value={link1} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add link 1' onChange={(e) => setLink1(e.target.value)} />
                            <input value={link2} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add link 2' onChange={(e) => setLink2(e.target.value)} />
                        </div>

                        {/* education box */}
                        <div className={`${dark ? "bg-white" : "bg-black"} w-full mt-2 mb-4 rounded-md duration-200 ease-in-out flex flex-col justify-center items-start gap-2 px-2 py-4`}>
                            <h1 className={`${dark ? "text-black" : "text-white"} text-xl font-bold ml-1`}>Educational Details</h1>

                            <div className='w-full h-auto flex flex-col '>
                                <input value={edu1} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add institution *' onChange={(e) => setEdu1(e.target.value)} />
                                <div className='w-full py-3 grid grid-cols-3 justify-items-center gap-3'>
                                    <input value={edu1start} type="text" className={`w-full rounded-md outline-none ${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} duration-200 ease-in-out px-2 py-2`} placeholder='Start M-Y *' onChange={(e) => setEdu1start(e.target.value)} />
                                    <input value={edu1end} type="text" className={`w-full rounded-md outline-none ${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} duration-200 ease-in-out px-2 py-2`} placeholder='End M-Y *' onChange={(e) => setEdu1end(e.target.value)} />
                                    <input value={edu1grade} type="text" className={`w-full rounded-md outline-none ${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} duration-200 ease-in-out px-2 py-2`} placeholder='Grade *' onChange={(e) => setEdu1grade(e.target.value)} />
                                </div>
                            </div>

                            <hr className='w-full bg-black my-4' />

                            <div className='w-full h-auto flex flex-col '>
                                <input value={edu2} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add institution' onChange={(e) => setEdu2(e.target.value)} />
                                <div className='w-full py-3 grid grid-cols-3 justify-items-center gap-3'>
                                    <input value={edu2start} type="text" className={`w-full rounded-md outline-none ${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} duration-200 ease-in-out px-2 py-2`} placeholder='Start M-Y' onChange={(e) => setEdu2start(e.target.value)} />
                                    <input value={edu2end} type="text" className={`w-full rounded-md outline-none ${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} duration-200 ease-in-out px-2 py-2`} placeholder='End M-Y' onChange={(e) => setEdu2end(e.target.value)} />
                                    <input value={edu2grade} type="text" className={`w-full rounded-md outline-none ${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} duration-200 ease-in-out px-2 py-2`} placeholder='Grade' onChange={(e) => setEdu2grade(e.target.value)} />
                                </div>
                            </div>

                        </div>

                        {/* experience box */}
                        <div className={`${dark ? "bg-white" : "bg-black"} w-full mt-2 mb-4 rounded-md duration-200 ease-in-out flex flex-col justify-center items-start gap-2 px-2 py-4`}>
                            <h1 className={`${dark ? "text-black" : "text-white"} text-xl font-bold ml-1`}>Experience Details</h1>

                            <div className='w-full h-auto flex flex-col gap-2'>
                                <input value={exp1} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add Experience' onChange={(e) => setExp1(e.target.value)} />
                                <textarea value={expDetail1} className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 h-36 px-3 outline-none`} placeholder='Add Experience Details' onChange={(e) => setExpdetail1(e.target.value)} />
                            </div>

                            <hr className='w-full bg-black my-4' />

                            <div className='w-full h-auto flex flex-col gap-2'>
                                <input value={exp2} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add Experience' onChange={(e) => setExp2(e.target.value)} />
                                <textarea value={expDetail2} className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 h-36 px-3 outline-none`} placeholder='Add Experience Details' onChange={(e) => setExpdetail2(e.target.value)} />
                            </div>

                        </div>

                        {/* skills box */}
                        <div className={`${dark ? "bg-white" : "bg-black"} w-full mt-2 mb-4 rounded-md duration-200 ease-in-out flex flex-col justify-center items-start gap-2 px-2 py-4`}>
                            <h1 className={`${dark ? "text-black" : "text-white"} text-xl font-bold ml-1`}>Skills</h1>

                            <input value={skill1} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add skills *' onChange={(e) => setSkill1(e.target.value)} />
                            <input value={skill2} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add additional skills' onChange={(e) => setSkill2(e.target.value)} />
                            <input value={skill3} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add additional skill' onChange={(e) => setSkill3(e.target.value)} />
                        </div>

                        {/* projects box */}
                        <div className={`${dark ? "bg-white" : "bg-black"} w-full mt-2 mb-4 rounded-md duration-200 ease-in-out flex flex-col justify-center items-start gap-2 px-2 py-4`}>
                            <h1 className={`${dark ? "text-black" : "text-white"} text-xl font-bold ml-1`}>Projects</h1>

                            <div className='w-full h-auto flex flex-col gap-2'>
                                <input value={project1} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add Project Name' onChange={(e) => setProject1(e.target.value)} />
                                <textarea value={project1Details} className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 h-36 px-3 outline-none`} placeholder='Add Project Details' onChange={(e) => setProject1details(e.target.value)} />
                            </div>

                            <hr className='w-full bg-black my-4' />

                            <div className='w-full h-auto flex flex-col gap-2'>
                                <input value={project2} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add Project Name' onChange={(e) => setProject2(e.target.value)} />
                                <textarea value={project2Details} className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 h-36 px-3 outline-none`} placeholder='Add Project Details' onChange={(e) => setProject2details(e.target.value)} />
                            </div>

                            <hr className='w-full bg-black my-4' />

                            <div className='w-full h-auto flex flex-col gap-2'>
                                <input value={project3} type="text" className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 px-3 outline-none`} placeholder='Add Project Name' onChange={(e) => setProject3(e.target.value)} />
                                <textarea value={project3Details} className={`${dark ? "bg-gray-200 text-black" : "bg-zinc-700 text-white"} w-full mt-2 rounded-md py-2 h-36 px-3 outline-none`} placeholder='Add Project Details' onChange={(e) => setProject3details(e.target.value)} />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default LiveResume;
