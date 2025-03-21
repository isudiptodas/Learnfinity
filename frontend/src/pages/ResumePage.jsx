import React, { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ResumeBox from '../components/ResumeBox.jsx';

function ResumePage() {

    const { dark } = useTheme();
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [boxOpen, setBoxOpen] = useState(false);
    const [creating, setCreating] = useState(false);
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [resumeList, setResumeList] = useState([]);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);
    const navigate = useNavigate();

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const data = {
        title, userId
    };

    const createResume = async () => {
        if (!title) {
            toast.error("Please enter a title for resume ");
            return;
        }

        if (title.length > 15) {
            toast.error("Title should be less than 15 characters");
            return;
        }

        try {

            setCreating(true);
            const token = localStorage.getItem("token");

            if (!token) {
                return;
            }

            const res = await axios.get(`https://learnfinity-mzah.onrender.com/get/resume-titles`, {
                params: {
                    title,
                }, headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            if (res.status === 400) {
                toast.error("Resume with same title already exists");
                setCreating(false);
                return;
            }
            else if (res.status === 200) {
                toast.success("Resume created");
                setCreating(false);
            }

            setTimeout(() => {
                navigate(`/resume/${title}`, { state: data });
            }, 2000);


        }
        catch (err) {
            //console.log(err.message);
            setCreating(false);
            setTitle('');
            toast.error("Resume with same name already exists");
        }
        finally{
        
        }

    }

    const edit = (resume) => {
        navigate(`/resume/${resume.title}`, { state: resume });
    }

    const deleteResume = async (id) => {
        try{
            const res = await axios.delete(`https://learnfinity-mzah.onrender.com/delete/resume/${id}`);

            if(res.status === 201){
                toast.success("Resume Deleted");
            }
        }
        catch(err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`https://learnfinity-mzah.onrender.com/user/details`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (res.data.success) {
                    //console.log(res.data.exist._id);
                    setUserId(res.data.exist._id);

                }
            } catch (err) {
                console.log(err.response?.data?.message);
            }
        }

        const fetchAllResume = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`https://learnfinity-mzah.onrender.com/get/all-resume`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (res.data.success) {
                    //console.log(res.data.found);
                    setResumeList(res.data.found);
                }
            } catch (err) {
                console.log(err.response?.data?.message);
            }
        }

        fetchUserData();
        fetchAllResume();
    }, []);


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
                    <h1 className={`text-center ${dark ? "text-black" : "text-white"} duration-200 ease-in-out text-2xl sm:text-4xl sm:mt-5 font-bold font-Titillium`}>Build your stunning resume and land your dream job</h1>

                    <div className={`${dark ? "bg-white" : "bg-black"} ${boxOpen ? "hidden" : "block"} duration-200 ease-in-out h-[297px] w-[210px] flex flex-col justify-center items-center hover:shadow-lg cursor-pointer`} onClick={() => setBoxOpen(!boxOpen)}>
                        <p className={`${dark ? "text-gray-500" : "text-zinc-600"} duration-200 ease-in-out text-7xl`}>+</p>
                        <p className={`${dark ? "text-gray-500" : "text-zinc-600"} duration-200 ease-in-out text-xl`}>Create</p>
                    </div>

                    <div className={`w-full sm:w-[70%] md:w-[50%] ${boxOpen ? "block" : "hidden"} py-5 px-2 bg-transparent flex flex-col justify-center items-center gap-5 rounded-md`}>
                        <input type="text" className={`w-full outline-none rounded-md ${dark ? "bg-white text-black" : "bg-black text-white"} duration-200 ease-in-out py-2 px-3`} value={title} placeholder='Enter resume title' onChange={(e) => setTitle(e.target.value)} />
                        <div className='w-full flex justify-between items-center gap-3'>
                            <p className={`text-center cursor-pointer ${dark ? "text-black border-2 border-black" : "border-2 border-white text-white"} rounded-md w-full py-2 px-3`} onClick={() => setBoxOpen(!boxOpen)}>Cancel</p>
                            <p className={`cursor-pointer ${dark ? "bg-cyan-400 text-white" : "bg-cyan-500 text-black"} w-full rounded-md py-2 px-3 text-center`} onClick={createResume}>{creating ? "Creating ..." : "Create"}</p>
                        </div>
                    </div>

                    <hr className='w-full sm:w-[70%] md:w-[50%] bg-black' />

                    <div className={`w-full px-3 py-5 grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-4`}>
                        {resumeList.length > 0 && resumeList.map((resume, index) => {
                            return <ResumeBox key={index} textClassName={`${dark ? "text-black" : "text-white"}`} className={`${dark ? "bg-white" : "bg-black"} rounded-md duration-200 ease-in-out w-full py-3 px-3 flex justify-between items-center gap-2`} title={resume.title} edit={() => edit(resume)} onDelete={() => deleteResume(resume._id)} />
                        })}
                    </div>

                </div>

            </div>
        </>
    );
}

export default ResumePage;
