import { useTheme } from "../context/ThemeContext";
import { useState, useRef, useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import { FaCopy } from "react-icons/fa";
import { useNavigate, useLocation, useParams, Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { Editor } from '@monaco-editor/react';
import ChooseLanguage from '../components/ChooseLanguage';
import { languageVersions, languageTemplates } from '../languageTemplate';
import { socketInit } from "../socket";
import { CgLogOut } from "react-icons/cg";
import { Actions } from "../Actions";
import { FaArrowDown } from "react-icons/fa";

function CodeCollabRoom() {

  const [allClients, setAllClients] = useState([]);
  const socketRef = useRef(null);
  const location = useLocation();
  const { roomID } = useParams();

  const [selectedLang, setSelectedLang] = useState(languageVersions[0]);
  const [value, setValue] = useState(languageTemplates[selectedLang]);
  const ref = useRef();
  const [isListVisible, setIsListVisible] = useState(false);

  const { dark } = useTheme();

  const { isSideBarVisible, toggleSidebar } = useSidebar(false);

  const navigate = useNavigate();

  const predefinedColors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1"];

  useEffect(() => {

    const init = async () => {
      const handleError = (err) => {
        toast.error("Connection failed! Please try again.");
        navigate('/code-collab');
      };

      socketRef.current = await socketInit();
      socketRef.current.on('connect_error', handleError);
      socketRef.current.on('connect_failed', handleError);

      socketRef.current.emit(Actions.JOIN, {
        roomID,
        username: location.state?.username,
      });

      socketRef.current.on(Actions.JOINED, ({ clients, username, socketId }) => {
        // Ensure no duplicate users are added
        setAllClients(() => {
          const uniqueClients = Array.from(new Map(
            clients.map((client) => [client.socketId, client])
          ).values());
          return uniqueClients;
        });

        if (username !== location.state?.username) {
          toast.success(`${username} joined the room.`);
        }
      });

      socketRef.current.on(Actions.DISCONNECTED, ({ socketId, username }) => {
        setAllClients((prev) => prev.filter(client => client.socketId !== socketId));
        if (username !== location.state?.username) {
          toast.warn(`${username} left the room.`);
        }
      });

      socketRef.current.on(Actions.LANGUAGE_CHANGED, ({ language, code }) => {
        setSelectedLang(language);
        setValue(code);
      });

      socketRef.current.on(Actions.CODE_CHANGE, ({ code, username }) => {
        if (username !== location.state?.username && code !== value) {
          setValue(code);
        }
      });
    };

    init();

    return () => {
      if (socketRef.current) {
        socketRef.current?.off('connect_error');
        socketRef.current?.off('connect_failed');
        socketRef.current?.off(Actions.JOINED);
        socketRef.current?.off(Actions.DISCONNECTED);
        socketRef.current?.off(Actions.LANGUAGE_CHANGED);
        socketRef.current?.off(Actions.CODE_CHANGE);

        socketRef.current.disconnect();
      }
    };
  }, [roomID, location.state?.username, navigate]);

  const handleMount = (editor) => {
    ref.current = editor;
    editor.focus();
  };

  const handleLanguageSelect = (language) => {
    setSelectedLang(language);
    const updatedValue = languageTemplates[language.language];
    setValue(updatedValue);

    socketRef.current.emit(Actions.LANGUAGE_CHANGED, {
      roomID,
      language,
      code: updatedValue,
    });
  };

  const copyToClipboard = () => {
    if (value) {
      navigator.clipboard.writeText(value);
      toast.success(`${selectedLang.language} code copied to clipboard`);
    }
    else {
      toast.error('Editor is empty');
    }
  }

  const copyRoomID = () => {
    navigator.clipboard.writeText(roomID);
    toast.success("Room ID copied to clipboard");
  }

  const leaveRoom = () => {
    socketRef.current.emit(Actions.LEAVE, {
      roomID,
      username: location.state?.username,
    });
    toast("Room disconnected", {
      style: {
        backgroundColor: 'red',
        color: 'white',
      },
    });
    setTimeout(() => {
      navigate('/code-collab')
    }, 2000);
  }

  const handleEditorChange = (value) => {
    setValue(value);

    socketRef.current.emit(Actions.CODE_CHANGE, {
      roomID,
      code: value,
      username: location.state?.username,
    });

  }

  return (

    <div className={`h-[95vh] lg:py-5 overflow-x-hidden overflow-y-hidden lg:h-auto w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

      {/* sidebar section */}

      <Sidebar />
      <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
      <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

      {/* main content section */}

      <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:min-h-96 lg:py-7 px-10 rounded-xl md:py-5 content overflow-auto flex flex-col lg:flex-row justify-start lg:justify-evenly items-center gap-4 lg:gap-2`}>

        <section className={`${dark ? "bg-white" : "bg-black"} ${isListVisible ? "h-auto py-5" : ""} w-full lg:w-[20%] lg:h-full rounded-lg flex flex-col ${isListVisible ? "justify-between" : "justify-center"} items-start py-4 px-5 overflow-auto`}>
          
          <div className={`${isListVisible ? "hidden" : "block"} ${dark ? "text-black" : "text-white"} lg:hidden flex justify-center w-full pr-5`} onClick={() => setIsListVisible(!isListVisible)}>
            <p className="w-full flex-shrink-0">Show List </p>
            <p className="w-full cursor-pointer"><FaArrowDown /> </p>
          </div>

          <div className={`${isListVisible ? "block" : "hidden"} lg:block h-56 lg:h-[75%] overflow-auto w-full`}>
            {allClients.length > 0 ? (
              allClients.map((client) => (
                <li key={client.socketId} className={`${dark ? "text-black" : "text-white"}`}>{client.username}</li>
              ))
            ) : (
              <li>No users in the room</li>
            )}
          </div>
          <div className={`${isListVisible ? "block" : "hidden"} lg:block w-full flex flex-col h-auto py-4 gap-2`}>
            <button className="w-full text-center py-2 rounded-md bg-teal-700 hover:bg-teal-800 cursor-pointer flex justify-center items-center gap-5 lg:mb-2 font-bold text-white text-s md:text-sm" onClick={copyRoomID}><FaCopy /> Copy Room ID</button>
            <button className="w-full text-center py-2 rounded-md bg-red-600 hover:bg-red-800 cursor-pointer flex justify-center items-center gap-5 lg:mb-2 font-bold text-white text-s md:text-sm" onClick={leaveRoom}> <CgLogOut /> Leave Room</button>
            <button className={`w-full text-center py-2 rounded-md bg-transparent ${dark ? "text-black border-2 border-black" : "text-white border-2 border-white"} lg:hidden cursor-pointer flex justify-center items-center gap-5 font-bold text-s md:text-sm`} onClick={() => setIsListVisible(!isListVisible)}> Close List</button>
          </div>
        </section>

        <section className={`${dark ? "bg-white" : "bg-black"} h-full w-full lg:w-[75%] lg:h-full rounded-lg py-4 px-3 flex flex-col justify-start items-center overflow-hidden gap-3`}>
          <div className='h-auto flex justify-start items-center gap-3 px-10 py-4 text-s lg:text-lg'>
            <p className={`${dark ? "text-black" : "text-white"} font-Titillium`}><ChooseLanguage onSelectLanguage={handleLanguageSelect} selectedLang={selectedLang} /></p>
          </div>
          <button className={`${dark ? "bg-black hover:bg-zinc-600 text-white" : "bg-white hover:bg-gray-300 text-black"} duration-300 ease-in-out w-auto px-8 cursor-pointer py-3 rounded-md flex justify-center items-center gap-5`} onClick={copyToClipboard}>
            Copy to clipboard <FaCopy />
          </button>
          <Toaster />
          <Editor
            height="100%"
            width="100%"
            language={selectedLang}
            theme={`${dark ? "vs-light" : "vs-dark"}`}
            value={value}
            onChange={handleEditorChange}
            onMount={handleMount}
          />
        </section>

      </div>
    </div>
  )
}

export default CodeCollabRoom
