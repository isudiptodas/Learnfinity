import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import Sidebar from "../components/Sidebar";
import vl from '../assets/vl.jpg'
import notes from '../assets/notes.jpg'
import ide from '../assets/ide.jpg'
import news from '../assets/news.jpg'
import ai from '../assets/ai.jpg'
import playground from '../assets/playground.jpg'
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import FetchedVideo from "../components/FetchedVideo";
import FetchedDoc from "../components/FetchedDoc";
import { IoIosArrowDown } from "react-icons/io";
import art from '../assets/art.jpeg';
import artLand from '../assets/art-landscape.jpeg';
import space from '../assets/space.jpeg';
import spaceLand from '../assets/spaceLand.jpeg';
import digital from '../assets/digital.jpg';
import soft from '../assets/softSkill.jpg';
import mental from '../assets/mental.jpg';

function Dashboard() {

  const { dark } = useTheme();

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [displayName, setDisplayName] = useState('');
  const [userImage, setUserImage] = useState('');
  const [isDocListVisisble, setIsDocListVisisble] = useState(false);
  const [isVideoListVisisble, setIsVideoListVisisble] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const [docList, setDocList] = useState([]);

  const toggleVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:5000/user/details`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.success) {
          // console.log(res.data.exist);
          // console.log(res.data.exist.displayname);
          setDisplayName(res.data.exist.displayname);
          setUserImage(res.data.exist.profilePic);

        }
      } catch (err) {
        console.log(err.response?.data?.message);
      }
    }

    fetchUserData();

  }, []);

  const handleVideoDelete = async (video) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(`http://localhost:5000/delete/video/${video._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if (res.data.success) {
        // console.log(res.data.allVideos);
        setVideoList(res.data.allVideos);
      }
    }
    catch (err) {
      console.error(err.mesage);
    }
  }

  const handleDocDelete = async (doc) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(`http://localhost:5000/delete/doc/${doc._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if (res.data.success) {
        // console.log(res.data.allVideos);
        setDocList(res.data.allDoc);
      }
    }
    catch (err) {
      console.error(err.mesage);
    }
  }

  useEffect(() => {
    const fetchSavedVideos = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get('http://localhost:5000/get/saved/videos', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        if (res.data.success) {
          // console.log(res.data.savedVideos);
          setVideoList(res.data.savedVideos);
        }
      }
      catch (err) {
        console.log(err.message);
      }
    }

    const fetchSavedDoc = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get('http://localhost:5000/get/saved/doc', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        if (res.data.success) {
          // console.log(res.data);
          setDocList(res.data.allDoc);
        }
      }
      catch (err) {
        console.log(err.message);
      }
    }

    fetchSavedVideos();
    fetchSavedDoc();
  }, [])

  return (
    <>
      {/* <div className=" animate-revolve h-96 absolute left-1/2 transform -translate-x-1/2 z-10 w-96 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl opacity-55"></div> */}
      <div className={`h-[95vh] lg:h-auto lg:py-5 py:2 z-20 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative overflow-x-hidden overflow-y-hidden lg:px-10 gap-5`} >

        <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
        <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

        {/* sidebar section */}

        <Sidebar />

        {/* main content section */}

        <div className={` ${dark ? "bg-transparent duration-200 ease-in-out" : "bg-transparent duration-200 ease-in-out"} ${dark ? "lg:bg-gray-200" : "lg:bg-zinc-900"}   z-20 py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-5 content overflow-auto flex flex-col lg:gap-2 overflow-x-hidden relative`}>

          {/* <div className={` h-auto w-full rounded-xl flex flex-col justify-center items-center gap-5 md:flex-wrap py-10`}>

            <div className={` h-auto py-2 px-5 lg:px-10 gap-5 lg:gap-20 w-full flex flex-col lg:flex-row justify-center items-center lg:justify-start ${dark ? "bg-white" : "bg-black"} rounded-xl`}>

              <div className={`border-b-2 w-full flex flex-col justify-center items-center lg:items-start ${dark ? "text-black" : "text-white"} ease-in-out py-5 duration-200`}>
                <h2 className="font-Josefin text-xl font-bold lg:text-4xl">Welcome {displayName}</h2>
                <p className="text-sm text-center lg:text-lg">It's a great day to start something new !</p>
              </div>
              <Calender className={`${dark ? "bg-white text-black" : "bg-zinc-800 text-white"} ease-in-out duration-200 h-auto`} />

            </div>
          </div> */}

          <div className={`${dark ? "bg-white" : "bg-black"} z-20 w-full pr-5 flex flex-row justify-between items-center lg:items-center ${dark ? "text-black" : "text-white"} ease-in-out py-5 lg:py-10 lg:px-10 duration-300 rounded-lg shadow-lg`}>
            <div className=" flex flex-col justify-between items-start w-auto h-auto px-5">
              <h2 className="font-Josefin text-[17px] font-bold lg:text-4xl">Welcome {displayName}</h2>
              <p className="text-[10px] text-start md:text-center lg:text-lg">It's a great day to start something new !</p>
            </div>

            <div className="px-5 w-auto h-auto py-1 flex flex-col gap-3 text-center">
              <div className="bg-cyan-500 p-6 sm:p-10 relative rounded-full overflow-hidden">
                <img src={userImage} className="h-full absolute top-0 left-0 w-full object-cover" />
              </div>
              <NavLink to="/settings" className={` ${dark ? "text-cyan-700" : "text-cyan-500"} cursor-pointer text-[10px] sm:text-[12px]`}>Update Profile</NavLink>
            </div>
          </div>

          <div className={`z-20 h-auto w-full flex flex-col gap-3 justify-start items-start py-2`}>

            <div className={`${videoList.length >= 1 ? "block" : "hidden"} ${docList.length === 0 ? "lg:w-full" : ""} overflow-y-hidden w-full h-auto flex flex-col justify-center lg:py-10 items-center lg:items-start text-2xl px-5 lg:pl-10 py-5 rounded-lg ${dark ? "bg-white" : "bg-black"}`}>
              <div className="flex justify-between items-center w-full pr-10 h-auto">
                <h1 className={`text-xl md:text-2xl font-Titillium font-semibold ${dark ? "text-black" : "text-white"}`}>Saved Videos</h1>
                <IoIosArrowDown className={`${dark ? "text-black" : "text-white"} ${isVideoListVisisble ? "rotate-180" : "rotate-0"} duration-300 ease-in-out text-3xl cursor-pointer`} onClick={() => setIsVideoListVisisble(!isVideoListVisisble)} />
              </div>

              <div className={`h-auto ${isVideoListVisisble ? "block" : "hidden"} duration-300 content ease-in-out w-full flex flex-row overflow-x-auto py-10 gap-7 ${docList.length === 0 ? "" : ""}`}>
                {videoList.map((video) => {
                  return <div className="flex-shrink-0"><FetchedVideo key={video._id} children={video.title} desc={video.desc} link={video.link} handleDelete={() => handleVideoDelete(video)} /></div>
                })}
              </div>
            </div>

            <div className={`${docList.length >= 1 ? "block" : "hidden"} ${videoList.length === 0 ? "lg:w-full" : ""} overflow-y-hidden w-full h-auto flex flex-col justify-center lg:py-10 items-center lg:items-start text-2xl px-5 lg:pl-10 py-5 rounded-lg ${dark ? "bg-white" : "bg-black"}`}>
              <div className="flex justify-between items-center w-full pr-10 h-auto">
                <h1 className={`text-xl md:text-2xl font-Titillium font-semibold ${dark ? "text-black" : "text-white"}`}>Saved Documentation</h1>
                <IoIosArrowDown className={`${dark ? "text-black" : "text-white"} ${isDocListVisisble ? "rotate-180" : "rotate-0"} duration-300 ease-in-out text-3xl cursor-pointer`} onClick={() => setIsDocListVisisble(!isDocListVisisble)} />
              </div>

              <div className={`h-auto ${isDocListVisisble ? "block" : "hidden"} content duration-300 ease-in-out w-full flex flex-row overflow-x-auto py-10 gap-7 ${docList.length === 0 ? "" : ""}`}>
                {docList.map((doc) => {
                  return <div className="flex-shrink-0"><FetchedDoc key={doc._id} children={doc.title} desc={doc.desc} link={doc.link} handleDelete={() => handleDocDelete(doc)} /></div>
                })}
              </div>
            </div>
          </div>

          <h1 className={`capitalize w-full py-10 md:text-3xl font-Titillium text-center text-2xl ${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-semibold`}>Try out other domains that match your career</h1>
          <hr className={`w-full h-[1px] bg-gray-600 mb-10`} />

          <div className={`h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-3 lg:gap-5`}>
            {/* <div className={`w-full lg:hidden h-[500px] bg-transparent duration-200 ease-in-out flex flex-col justify-end items-center rounded-md relative`}>
              <div className={`bg-gradient-to-b from-transparent to-black absolute bottom-0 rounded-md z-30 h-1/2 w-full`}></div>
              <div className={`absolute px-5 pb-10 bottom-0 h-full w-full bg-transparent flex flex-col justify-end items-center gap-3`}>
                <h2 className={` text-white z-30 font-Titillium text-2xl md:text-3xl w-full text-center capitalize`}>Explore Indian art and design</h2>
                <p className={`px-6 py-2 rounded-full bg-white text-black text-sm z-30 cursor-pointer active:scale-95 duration-200 ease-in-out hover:opacity-75`}>Coming Soon</p>
              </div>
              <img src={art} className={`h-full w-full object-cover rounded-md z-20`} />
            </div> */}

            <div className={`w-full lg:block h-[400px] bg-transparent duration-200 ease-in-out flex-col justify-end items-center rounded-md relative`}>
              <div className={`bg-gradient-to-b from-transparent to-black absolute bottom-0 rounded-md z-30 h-1/2 w-full`}></div>
              <div className={`absolute px-5 pb-10 bottom-0 h-full w-full bg-transparent flex flex-col justify-end items-center gap-3`}>
                <h2 className={` text-white z-30 font-Titillium text-2xl w-full text-center capitalize`}>Indian art and design</h2>
                <p className={`px-6 py-2 rounded-full bg-white text-black text-sm z-30 cursor-pointer active:scale-95 duration-200 ease-in-out hover:opacity-75`}>Coming Soon</p>
              </div>
              <img src={artLand} className={`h-full w-full object-cover rounded-md z-20`} />
            </div>

            <div className={`w-full lg:block h-[400px] bg-transparent duration-200 ease-in-out flex-col justify-end items-center rounded-md relative`}>
              <div className={`bg-gradient-to-b from-transparent to-black absolute bottom-0 rounded-md z-30 h-1/2 w-full`}></div>
              <div className={`absolute px-5 pb-10 bottom-0 h-full w-full bg-transparent flex flex-col justify-end items-center gap-3`}>
                <h2 className={` text-white z-30 font-Titillium text-2xl w-full text-center capitalize`}>space technology</h2>
                <Link to='/domain/space-technology' className={`px-6 py-2 rounded-full bg-white text-black text-sm z-30 cursor-pointer active:scale-95 duration-200 ease-in-out hover:opacity-75`}>Visit</Link>
              </div>
              <img src={space} className={`h-full w-full object-cover rounded-md z-20`} />
            </div>

            {/* <div className={`w-full lg:hidden mt-6 h-[400px] bg-transparent duration-200 ease-in-out flex-col justify-end items-center rounded-md relative`}>
              <div className={`bg-gradient-to-b from-transparent to-black absolute bottom-0 rounded-md z-30 h-1/2 w-full`}></div>
              <div className={`absolute px-5 pb-10 bottom-0 h-full w-full bg-transparent flex flex-col justify-end items-center gap-3`}>
                <h2 className={` text-white z-30 font-Titillium text-2xl w-full text-center capitalize`}>Explore space technology</h2>
                <Link to='/domain/space-technology' className={`px-6 py-2 rounded-full bg-white text-black text-sm z-30 cursor-pointer active:scale-95 duration-200 ease-in-out hover:opacity-75`}>Visit</Link>
              </div>
              <img src={spaceLand} className={`h-full w-full object-cover rounded-md z-20`} />
            </div> */}

            <div className={`w-full h-[400px] bg-transparent duration-200 ease-in-out flex-col justify-end items-center rounded-md relative`}>
              <div className={`bg-gradient-to-b from-transparent to-black absolute bottom-0 rounded-md z-30 h-1/2 w-full`}></div>
              <div className={`absolute px-5 pb-10 bottom-0 h-full w-full bg-transparent flex flex-col justify-end items-center gap-3`}>
                <h2 className={` text-white z-30 font-Titillium text-2xl w-full text-center capitalize`}>digital marketing</h2>
                <Link to='/domain/digital-marketing' className={`px-6 py-2 rounded-full bg-white text-black text-sm z-30 cursor-pointer active:scale-95 duration-200 ease-in-out hover:opacity-75`}>Visit</Link>
              </div>
              <img src={digital} className={`h-full w-full object-cover rounded-md z-20`} />
            </div>

            <div className={`w-full h-[400px] bg-transparent duration-200 ease-in-out flex-col justify-end items-center rounded-md relative`}>
              <div className={`bg-gradient-to-b from-transparent to-black absolute bottom-0 rounded-md z-30 h-1/2 w-full`}></div>
              <div className={`absolute px-5 pb-10 bottom-0 h-full w-full bg-transparent flex flex-col justify-end items-center gap-3`}>
                <h2 className={` text-white z-30 font-Titillium text-2xl w-full text-center capitalize`}>Soft Skill Development</h2>
                <Link to='/domain/soft-skill' className={`px-6 py-2 rounded-full bg-white text-black text-sm z-30 cursor-pointer active:scale-95 duration-200 ease-in-out hover:opacity-75`}>Visit</Link>
              </div>
              <img src={soft} className={`h-full w-full object-cover rounded-md z-20`} />
            </div>

            <div className={`w-full h-[400px] bg-transparent duration-200 ease-in-out flex-col justify-end items-center rounded-md relative`}>
              <div className={`bg-gradient-to-b from-transparent to-black absolute bottom-0 rounded-md z-30 h-1/2 w-full`}></div>
              <div className={`absolute px-5 pb-10 bottom-0 h-full w-full bg-transparent flex flex-col justify-end items-center gap-3`}>
                <h2 className={` text-white z-30 font-Titillium text-2xl w-full text-center capitalize`}>Mental Health</h2>
                <p className={`px-6 py-2 rounded-full bg-white text-black text-sm z-30 cursor-pointer active:scale-95 duration-200 ease-in-out hover:opacity-75`}>Coming Soon</p>
              </div>
              <img src={mental} className={`h-full w-full object-cover rounded-md z-20`} />
            </div>
          </div>

          <h1 className={`capitalize w-full py-10 md:text-3xl font-Titillium text-center text-2xl ${dark ? "text-black" : "text-white"} duration-200 ease-in-out font-semibold`}>Or try out our out of the box features</h1>
          <hr className={`w-full h-[1.5px] bg-gray-600 mb-4`} />

          <div className="z-20 flex flex-wrap justify-center md:justify-between lg:justify-start items-start gap-5 h-auto w-full lg:gap-10 py-5">
            <div className={`relative overflow-hidden h-64 sm:h-80 md:h-64 lg:h-60 w-full md:w-[40%] lg:w-[30%] rounded-xl ${dark ? "bg-white" : "bg-black"} shadow-lg hover:shadow-2xl`}>
              <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent bottom-0 z-20"></div>
              <img src={vl} className="object-cover absolute h-full w-full rounded-b-xl hover:opacity-80 ease-in-out duration-300 z-10" />
              <div className=" h-1/3 flex justify-center items-center flex-col px-5 gap-3 md:gap-2 text-center lg:px-5 absolute bottom-5 left-0 right-0 z-20">
                <p className={`text-white font-Titillium sm:text-xl font-bold`}>Explore limitless tech</p>
                <NavLink to='/video-lectures/web-development'><button className={`bg-white text-black hover:scale-95 ease-in-out duration-300 px-5 sm:px-16 sm:py-3 sm:text-xl md:px-10 md:py-2 font-bold rounded-full hover:opacity-90`}>Explore</button></NavLink>
              </div>
            </div>

            <div className={`relative overflow-hidden h-64 sm:h-80 md:h-64 lg:h-60 w-full md:w-[40%] lg:w-[30%] rounded-xl ${dark ? "bg-white" : "bg-black"} shadow-lg hover:shadow-2xl`}>
              <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent bottom-0 z-20"></div>
              <img src={ide} className="object-cover absolute h-full w-full rounded-b-xl hover:opacity-80 ease-in-out duration-300" />
              <div className=" h-1/3 flex justify-center items-center flex-col px-5 gap-3 md:gap-2 text-center lg:px-5 absolute left-0 right-0 bottom-5 z-20">
                <p className={`text-white font-Titillium sm:text-xl font-bold`}>Implement on the way</p>
                <NavLink to='/ide'><button className={`bg-white text-black px-5 sm:px-16 sm:py-3 sm:text-xl md:px-10 md:py-2 font-bold rounded-full hover:opacity-90 hover:scale-95 ease-in-out duration-300`}>code</button></NavLink>
              </div>
            </div>

            <div className={`relative overflow-hidden h-64 sm:h-80 md:h-64 lg:h-60 w-full md:w-[40%] lg:w-[30%] rounded-xl ${dark ? "bg-white" : "bg-black"} shadow-lg hover:shadow-2xl`}>
              <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent bottom-0 z-20"></div>
              <img src={ai} className="object-cover absolute h-full w-full rounded-b-xl hover:opacity-80 ease-in-out duration-300" />
              <div className=" h-1/3 flex justify-center items-center flex-col px-5 gap-3 md:gap-2 text-center absolute bottom-5 left-0 right-0 z-20">
                <p className={`text-white font-Titillium sm:text-xl font-bold`}>AI on the go</p>
                <NavLink to='/ai-studio/summarize'><button className={`bg-white text-black px-5 sm:px-16 sm:py-3 sm:text-xl md:px-10 md:py-2 font-bold rounded-full hover:opacity-90  hover:scale-95 ease-in-out duration-300`}>AI Studio</button></NavLink>
              </div>
            </div>

            <div className={`relative overflow-hidden h-64 sm:h-80 md:h-64 lg:h-60 w-full md:w-[40%] lg:w-[30%] rounded-xl ${dark ? "bg-white" : "bg-black"} shadow-lg hover:shadow-2xl`}>
              <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent bottom-0 z-20"></div>
              <img src={news} className="object-cover absolute h-full w-full rounded-b-xl hover:opacity-80 ease-in-out duration-300" />
              <div className=" h-1/3 flex justify-center items-center flex-col px-5 gap-3 md:gap-2 text-center lg:px-5 absolute bottom-5 left-0 right-0 z-20">
                <p className={`text-white font-Titillium sm:text-xl font-bold`}>Be industry updated</p>
                <NavLink to='/news'><button className={`bg-white text-black px-5 sm:px-16 sm:py-3 sm:text-xl md:px-10 md:py-2 font-bold rounded-full hover:opacity-90  hover:scale-95 ease-in-out duration-300`}>Get updates</button></NavLink>
              </div>
            </div>

            <div className={`relative overflow-hidden h-64 sm:h-80 md:h-64 lg:h-60 w-full md:w-[40%] lg:w-[30%] rounded-xl ${dark ? "bg-white" : "bg-black"} shadow-lg hover:shadow-2xl`}>
              <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent bottom-0 z-20"></div>
              <img src={notes} className="object-cover absolute h-full w-full rounded-b-xl hover:opacity-80 ease-in-out duration-300" />
              <div className=" h-1/3 flex justify-center items-center flex-col px-5 gap-3 md:gap-2 text-center lg:px-5 absolute bottom-5 left-0 right-0 z-20">
                <p className={`text-white font-Titillium sm:text-xl font-bold`}>Organizing made easy</p>
                <NavLink to='/notes/personal'><button className={`bg-white text-black px-5 sm:px-16 sm:py-3 sm:text-xl md:px-10 md:py-2 font-bold rounded-full hover:opacity-90  hover:scale-95 ease-in-out duration-300`}>organize</button></NavLink>
              </div>
            </div>

            <div className={`relative overflow-hidden h-64 sm:h-80 md:h-64 lg:h-60 w-full md:w-[40%] lg:w-[30%] rounded-xl ${dark ? "bg-white" : "bg-black"} shadow-lg hover:shadow-2xl`}>
              <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent bottom-0 z-20"></div>
              <img src={playground} className="object-cover absolute h-full w-full rounded-b-xl hover:opacity-80 ease-in-out duration-300" />
              <div className=" h-1/3 flex justify-center items-center flex-col px-5 gap-3 md:gap-2 text-center lg:px-5 absolute bottom-5 left-0 right-0 z-20">
                <p className={`text-white font-Titillium sm:text-xl font-bold`}>Play in playground</p>
                <NavLink to='/playground'><button className={`bg-white text-black px-5 sm:px-16 sm:py-3 sm:text-xl md:px-10 md:py-2 font-bold rounded-full hover:opacity-90  hover:scale-95 ease-in-out duration-300`}>Play</button></NavLink>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard
