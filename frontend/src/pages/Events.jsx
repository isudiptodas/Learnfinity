import React, { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

function Events() {

    const { dark } = useTheme();
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const { isSideBarVisible, toggleSidebar } = useSidebar(false);

    const [eventTitle, setEventTitle] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [newEvent, setnewEvent] = useState(false);
    const [updateEvent, setUpdateEvent] = useState(false);
    const [creating, setCreating] = useState(false);
    const [updating, setUpdating] = useState(false);
    const [allEvents, setAllEvents] = useState([]);
    const[eventId, setEventId] = useState('');
    const[eventDate, setEventDate] = useState('');

    const today = new Date();

    const [currentDate, setCurrentDate] = useState(today.toISOString().split("T")[0].replace(/-/g, " - "));

    const toggleVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const selectDate = (date) => {
        const formatDate = date.toISOString().split("T")[0];
        setCurrentDate(formatDate);
        //console.log(formatDate);
    }

    const addEvent = async () => {
        if (!eventDesc || !eventTitle) {
            toast.error("Both title and description needed");
            return;
        }

        if (eventTitle.length > 20) {
            toast.error("Title should be less than 20 characters");
            return;
        }

        const token = localStorage.getItem('token');

        if (!token) {
            return;
        }

        try {
            setCreating(true);

            const res = await axios.post(`https://learnfinity-mzah.onrender.com/add/event`, { currentDate, eventDesc, eventTitle }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.status === 200) {
                toast.success("Event Added");
                setEventDesc('');
                setEventTitle('');
                setnewEvent(false);
                //console.log(res.data);
            }

            if (res.status === 205) {
                toast.error("Event Already Exists");
            }

        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setCreating(false);
        }
    }

    const updateExistingEvent = async () => {
        if (!eventDesc || !eventTitle) {
            toast.error("Both title and description needed");
            return;
        }

        if (eventTitle.length > 20) {
            toast.error("Title should be less than 20 characters");
            return;
        }

        try{
            setUpdating(true);
            const res = await axios.put(`https://learnfinity-mzah.onrender.com/update/event/${eventId}`, {
                 eventDesc, eventTitle
            });

            if(res.status === 201){
                toast.success("Event Updated");
                setUpdateEvent(false);
            }

            //console.log(res.data);
        }
        catch(err){
            console.log(err.message);
        }
        finally{
            setUpdating(false);
        }
    }

    const deleteEvent = async (id) => {
        try{
            const res = await axios.delete(`https://learnfinity-mzah.onrender.com/delete/event/${id}`);

            if(res.status === 200){
                toast.success("Event deleted");
            }
        }
        catch(err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await axios.get(`https://learnfinity-mzah.onrender.com/fetch/events`, {
                    params: {
                        date: currentDate
                    }
                });
                //console.log(res.data.found);
                if (res.data.found.length > 0) {
                    setAllEvents(res.data.found);
                }
                else{
                    setAllEvents([]);
                }
            }
            catch (err) {

            }
        }

        fetchEvent();
    }, [currentDate]);


    return (
        <>
            <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden py-5 lg:h-auto lg:py-6 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

                <Toaster />

                {/* Sidebar section */}
                <Sidebar />
                <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
                <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

                {/* Main content section */}
                <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[100vh] lg:h-auto overflow-auto lg:py-5 px-5 rounded-xl md:py-5 content flex justify-start lg:justify-evenly items-center lg:items-start flex-col lg:flex-row gap-10 lg:gap-5 relative`}>

                    <div className={`w-full lg:w-1/2 lg:py-0 py-2 h-auto flex flex-col justify-center items-center`}>
                        <Calendar className={`text-black rounded-md py-5 px-4 shadow-lg ${newEvent || updateEvent ? "hidden" : "block"}`} onChange={selectDate} />

                        <div className={`${dark ? "bg-white" : "bg-black"} ${newEvent ? "block" : "hidden"} duration-200 ease-in-out w-full rounded-md h-auto py-3 lg:py-5 px-3 flex flex-col justify-start items-center gap-3`}>
                            <p className={`${dark ? "text-black" : "text-white"} opacity-60 text-sm duration-200 ease-in-out`}>{currentDate}</p>
                            <input type="text" className={`w-full py-2 px-4 rounded-md ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out outline-none`} placeholder='Enter Event Title' value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
                            <textarea className={`w-full min-h-48 py-2 px-4 rounded-md ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out outline-none`} placeholder='Enter Event Title' value={eventDesc} onChange={(e) => setEventDesc(e.target.value)} />
                            <p className={`${dark ? "text-white" : "text-black"} w-full bg-cyan-500 rounded-md py-2 text-center cursor-pointer hover:bg-cyan-700 duration-200 ease-in-out text-sm font-Titillium `} onClick={addEvent}>{creating ? "Adding Event ..." : "Create a New Event"}</p>
                            <p className={`${dark ? "text-white" : "text-white"} w-full bg-red-500 rounded-md py-2 text-center cursor-pointer hover:bg-red-700 duration-200 ease-in-out text-sm font-Titillium `} onClick={() => { setnewEvent(false); setEventDesc(''); setEventTitle(''); }}>Cancel</p>
                        </div>

                        <div className={`${dark ? "bg-white" : "bg-black"} ${updateEvent ? "block" : "hidden"} duration-200 ease-in-out w-full rounded-md h-auto py-3 lg:py-5 px-3 flex flex-col justify-start items-center gap-3`}>
                            <p className={`${dark ? "text-black" : "text-white"} opacity-60 text-sm duration-200 ease-in-out`}>{eventDate || null}</p>
                            <input type="text" className={`w-full py-2 px-4 rounded-md ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out outline-none`} placeholder='Enter Event Title' value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
                            <textarea className={`w-full min-h-48 py-2 px-4 rounded-md ${dark ? "bg-gray-200 text-black" : "bg-zinc-800 text-white"} duration-200 ease-in-out outline-none`} placeholder='Enter Event Title' value={eventDesc} onChange={(e) => setEventDesc(e.target.value)} />
                            <p className={`${dark ? "text-white" : "text-black"} w-full bg-cyan-500 rounded-md py-2 text-center cursor-pointer hover:bg-cyan-700 duration-200 ease-in-out text-sm font-Titillium `} onClick={updateExistingEvent}>{creating ? "Updating Event ..." : "Update Event"}</p>
                            <p className={`${dark ? "text-white" : "text-white"} w-full bg-red-500 rounded-md py-2 text-center cursor-pointer hover:bg-red-700 duration-200 ease-in-out text-sm font-Titillium `} onClick={() => { setUpdateEvent(false); setEventDesc(''); setEventTitle(''); }}>Cancel</p>
                        </div>
                    </div>

                    <div className={`w-full rounded-md md:w-[60%] py-4 px-4 ${dark ? "bg-white" : "bg-black"} duration-200 ease-in-out flex flex-col justify-start items-center gap-4`}>
                        <p className={`${dark ? "text-white" : "text-black"} w-full bg-cyan-500 rounded-md py-2 text-center cursor-pointer hover:bg-cyan-700 duration-200 ease-in-out text-sm font-Titillium `} onClick={() => setnewEvent(true)}>Create a New Event</p>
                        <h1 className={`${dark ? "text-black" : "text-white"} font-Titillium duration-200 ease-in-out text-lg font-bold`}>Your Events For <span className='bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-800 bg-clip-text text-transparent'>{currentDate}</span></h1>

                        <div className={`w-full rounded-md bg-transparent ${allEvents.length > 0 ? "block" : "hidden"} duration-200 ease-in-out flex flex-col justify-start items-center gap-4`}>
                            {allEvents.map((event) => {
                                return <div key={event._id} className={`h-auto px-2 py-2 w-full flex flex-col justify-start items-start gap-2 rounded-md ${dark ? "bg-gray-200" : "bg-zinc-800"}`}>
                                    <div className={`w-full h-auto flex justify-between items-center text-lg text ${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-semibold`}>
                                        <p className={`${dark ? "text-black" : "text-white"} pr-10`}>{event.title}</p>
                                        <div className='w-auto flex justify-center items-center gap-3'>
                                            <CiEdit className={`cursor-pointer`} onClick={() => {setUpdateEvent(true); setEventId(event._id); setEventDate(event.date) ; setEventDesc(event.description); setEventTitle(event.title);}}/>
                                            <FaTrash className={`text-red-600 cursor-pointer text-sm`} onClick={() => deleteEvent(event._id)}/>
                                        </div>
                                    </div>

                                    <hr className='h-[1px] bg-black opacity-30 w-full'/>

                                    <div className='w-full flex justify-start items-center'>
                                        <p className={`${dark ? "text-black" : "text-white"} text-start text-sm break-words`}>{event.description}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
}

export default Events;
