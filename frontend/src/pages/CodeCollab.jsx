import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import { FaCopy } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import {v4 as uuid} from 'uuid';
import { Navigate, useNavigate } from "react-router-dom";

function CodeCollab() {


  const { dark } = useTheme();

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const { isSideBarVisible, toggleSidebar } = useSidebar(false);
  const[roomID, setRoomID] = useState('');
  const[username, setUsername] = useState('');
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const generateRoomID = (e) => {
      e.preventDefault();
      const id = uuid();
      setRoomID(id);
      toast.success("Room ID generated");
  }

  const copyRoomID = ()=>{
    if(roomID === ''){
      toast.error("Room ID is empty")
    }
    else{
      navigator.clipboard.writeText(roomID);
      toast.success("Room ID copied to clipboard")
    }
  }

  const joinRoom = (e) => {
      e.preventDefault();
      if(roomID === ''){
        toast.error("Enter room ID to join room")
        return;
      }
      else if(username === ''){
        toast.error("Enter username to join room")
        return;
      }
      else if(roomID.length < 6){
        toast.error("Room ID should have more than 6 digits ")
        return;
      }
      else if(!/[a-zA-Z]/.test(username.trim())){
        toast.error("Enter valid username ")
        return;
      }
      else{
        navigate(`/code-collab/room/${roomID}`, {
          state: { username },
        });
        
      }
  }


  return (
    <>
      <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-[80vh] w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

        {/* sidebar section */}

        <Sidebar />
        <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
        <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

        {/* main content section */}

        <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-[70vh] px-10 rounded-xl md:py-5 lg:py-10 content overflow-auto flex flex-col justify-center items-center lg:gap-2`}>
          
        <div className={`h-auto py-5 ${dark ? "bg-white" : "bg-black"} w-full sm:w-2/3 lg:w-1/2 rounded-lg px-5 flex flex-col justify-center items-center gap-5 duration-300 ease-in-out md:py-10`}>
            <input type="text" placeholder="Enter room ID" className={`w-full py-3 px-3 ${dark ? "bg-gray-200 text-black" : "bg-zinc-700"} duration-300 ease-in-out rounded-md`} required  onChange={(e) => setRoomID(e.target.value)} value={roomID} />
            <input type="text" placeholder="Enter username" className={`w-full py-3 px-3 ${dark ? "bg-gray-200 text-black" : "bg-zinc-700"} duration-300 ease-in-out rounded-md`} required onChange={(e) => setUsername(e.target.value)} value={username}/>
            <button className={`${dark ? "bg-black text-white hover:bg-zinc-700" : "bg-white text-black hover:bg-gray-300"} duration-300 ease-in-out w-full py-2 rounded-md cursor-pointer`} onClick={joinRoom}>Join Room</button>
           <div className="w-full py-2 flex flex-col justify-center items-center">
              <p className={`${dark ? "text-black" : "text-white"} text-s sm:text-sm font-Titillium`}>Create a new room. <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent cursor-pointer" onClick={generateRoomID}>Generate room ID</span></p>
              <p className={`${dark ? "text-black" : "text-white"} text-s sm:text-sm font-Titillium`}>Want to share ? <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer" onClick={copyRoomID}>Copy room ID</span></p>
           </div>
           <Toaster/>
        </div>

          

        </div>
      </div>
    </>
  )
}

export default CodeCollab
