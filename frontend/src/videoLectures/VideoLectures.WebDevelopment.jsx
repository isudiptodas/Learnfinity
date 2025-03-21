import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import VideoBox from "../components/VideoBox";
import { useSidebar } from "../context/SidebarContext";
import VideoLectureSlider from '../components/VideoLectureSlider'
import Sidebar from "../components/Sidebar";
import { webDevVideo } from "../videoLectures.js";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function VideoWebDev() {

  const { dark } = useTheme();

  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const handleSaveVideo = async (video) => {
   
     const token = localStorage.getItem("token");

     try{
        const res = await axios.post(`https://learnfinity-mzah.onrender.com/save/video`, {
          title: video.title,
          desc: video.description,
          link: video.link
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        if(res.data.success){
          toast.success("Video Saved");
          // console.log(res.data);
        }
        
     }
     catch(err){
        console.error(err.response?.data?.message);
      }
  }

  return (
    <>
      <div className={`h-[95vh] lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} overflow-x-hidden overflow-y-hidden flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

        {/* sidebar section */}

        <Sidebar/>
        <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
        <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

        {/* main content section */}

        <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 content overflow-auto flex flex-col gap-10 lg:gap-2`}>

        <VideoLectureSlider />
        <Toaster/>

          <div className={`h-auto w-full flex flex-wrap justify-start items-center gap-4 lg:py-4 overflow-auto`}>
            {/* <VideoBox link="https://youtu.be/HD13eq_Pmp8?si=sGRP220PR8zGgZ-y" img={html} desc="Markup language for structuring web pages">HTML</VideoBox>
            <VideoBox link="https://youtu.be/wRNinF7YQqQ?si=v1WgW56E7IpEecaV" img={css} desc="Style sheet language used for designing the web pages.">CSS</VideoBox>
            <VideoBox link="https://youtu.be/lfmg-EJ8gm4?si=jAKAH0Ht3BhvOdt9" img={js} desc=" A programming language for adding interactivity to web pages.">JavaScript</VideoBox>
            <VideoBox link="https://youtu.be/tS7upsfuxmo?si=CpiOocYeksdr0cl1" img={tailwind} desc="Markup language for structuring web pages">TailwindCSS</VideoBox>
            <VideoBox link="https://youtu.be/CgkZ7MvWUAA?si=RRfZiOJtp6tV9j9r" img={react} desc="Markup language for structuring web pages">ReactJS</VideoBox>
            <VideoBox link="https://youtu.be/RLtyhwFtXQA?si=gl5IUfucotownLGz" img={nodejs} desc="A runtime environment for javascript">NodeJS</VideoBox>
            <VideoBox link="https://youtu.be/30LWjhZzg50?si=obVMQIgi0BPcy8Hg" img={ts} desc="A superset of JavaScript that adds static typing.">TypeScript</VideoBox>
            <VideoBox link="https://youtu.be/5OdVJbNCSso?si=vauQt7TCpmfqpv-M" img={mysql} desc="Markup language for structuring web pages">SQL</VideoBox>
            <VideoBox link="https://youtu.be/c2M-rlkkT5o?si=ipMgn13XVYVcTxyR" img={mongodb} desc="A NoSQL database for storing data in a flexible, JSON-like format.">MongoDB</VideoBox>
            <VideoBox link="https://youtu.be/znbCa4Rr054?si=nhSR3JDBshqzx9sK" img={framerMotion} desc="Animation library for React to create fluid interactive animations.">Framer Motion</VideoBox>
            <VideoBox link="https://youtube.com/playlist?list=PLjiHFwhbHYlEmPhn68XdG2p2k4X47XR-8&si=N94yad2lM2kzw-UY" img={figma} desc="A collaborative design tool for UI/UX design and prototyping.">Figma</VideoBox> */}

            {webDevVideo.map((video)=> {
                return <VideoBox key={video._id} children={video.title} desc={video.description} link={video.link} handleVideoSave={()=> handleSaveVideo(video)}/>
            })}
          </div>


        </div>
      </div>
    </>
  )
}

export default VideoWebDev
