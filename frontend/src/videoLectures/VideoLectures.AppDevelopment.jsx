import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import VideoBox from "../components/VideoBox";
import { useSidebar } from "../context/SidebarContext";
import VideoLectureSlider from '../components/VideoLectureSlider'
import Sidebar from "../components/Sidebar";
import { appDevVideo } from "../videoLectures";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function VideoAppDev() {

  const { dark } = useTheme();

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const {isSideBarVisible, toggleSidebar} = useSidebar(false);

  const toggleVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const handleSaveVideo = async (video) => {
    console.log(video);
   
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
      <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

        {/* sidebar section */}

        <Sidebar/>
        <Toaster/>
        <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
        <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

        {/* main content section */}

        <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 content overflow-auto flex flex-col gap-10 lg:gap-2`}>

        <VideoLectureSlider />

          <div className={`h-auto w-full flex flex-wrap justify-start items-center gap-4 lg:py-4 overflow-auto`}>
            {/* <VideoBox link='https://youtu.be/HD13eq_Pmp8?si=3dRtDizKfc-fffab' img={java} desc="Object-oriented language for cross-platform apps.">Java</VideoBox>
            <VideoBox link="https://youtu.be/F9UC9DY-vIU?si=AEWqph05TR1ACuHN" img={kotlin} desc="Modern language for Android apps.">Kotlin</VideoBox>
            <VideoBox link="https://youtu.be/CD1Y2DmL5JM?si=x4mjAnG6E-Bn1qEQ" img={flutter} desc="Builds cross-platform apps.">Flutter</VideoBox>
            <VideoBox link="https://youtu.be/Ej_Pcr4uC2Q?si=A3z6rP4xxByFuH3O" img={dart} desc="Programming language for Flutter apps.">Dart</VideoBox>
            <VideoBox link="https://youtu.be/ZBCUegTZF7M?si=TaTKdP6yeVpOD3ME" img={reactNative} desc="Builds cross-platform mobile apps.">React Native</VideoBox>
            <VideoBox link="https://youtu.be/8Xg7E9shq0U?si=wAYET4MACSOFNPrH" img={swift} desc="Language for iOS and macOS apps.">Swift</VideoBox>
            <VideoBox link="https://youtube.com/playlist?list=PLjiHFwhbHYlEmPhn68XdG2p2k4X47XR-8&si=N94yad2lM2kzw-UY" img={figma} desc="A collaborative design tool for UI/UX design and prototyping.">Figma</VideoBox> */}

            {appDevVideo.map((video)=>{
                return <VideoBox key={video._id} children={video.title} desc={video.description} link={video.link} handleVideoSave={()=> handleSaveVideo(video)}/>
            })}
          </div>


        </div>
      </div>
    </>
  )
}

export default VideoAppDev
