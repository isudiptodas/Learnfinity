import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import VideoBox from "../components/VideoBox";
import { useSidebar } from "../context/SidebarContext";
import VideoLectureSlider from '../components/VideoLectureSlider'
import Sidebar from "../components/Sidebar";
import { designVideo } from "../videoLectures";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function VideoDesign() {

  const { dark } = useTheme();

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const { isSideBarVisible, toggleSidebar } = useSidebar(false);

  const toggleVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const handleSaveVideo = async (video) => {

    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(`https://learnfinity-mzah.onrender.com/save/video`, {
        title: video.title,
        desc: video.description,
        link: video.link
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if (res.data.success) {
        toast.success("Video Saved");
        // console.log(res.data);
      }

    }
    catch (err) {
      console.error(err.response?.data?.message);
    }
  }

  return (
    <>
      <div className={`h-[95vh] overflow-x-hidden overflow-y-hidden lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

        {/* sidebar section */}

        <Sidebar />
        <Toaster/>
        <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
        <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

        {/* main content section */}

        <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-[83vh] lg:h-auto px-10 rounded-xl md:py-5 lg:py-10 content overflow-auto flex flex-col gap-10 lg:gap-2 `}>

          <VideoLectureSlider />

          <div className={`h-auto w-full flex flex-wrap justify-start items-center gap-4 lg:py-4 overflow-auto`}>
            {/* <VideoBox link="https://youtu.be/znbCa4Rr054?si=nhSR3JDBshqzx9sK" img={framerMotion} desc="Animation library for React to create fluid interactive animations.">Framer Motion</VideoBox>
            <VideoBox link="https://youtube.com/playlist?list=PLjiHFwhbHYlEmPhn68XdG2p2k4X47XR-8&si=N94yad2lM2kzw-UY" img={figma} desc="A collaborative design tool for UI/UX design and prototyping.">Figma</VideoBox>
            <VideoBox link="https://youtu.be/P5H7zs0RsUM?si=2M6gMAAf1ALvwXQp" img={framer} desc="Creates interactive design prototypes.">Framer</VideoBox>
            <VideoBox link="https://youtu.be/ZbvLJ5XtPpA?si=yYUQMZIrByikqRKA" img={photoshop} desc="Edits photos and creates digital art.">Adobe Photoshop</VideoBox>
            <VideoBox link="https://youtu.be/Ib8UBwu3yGA?si=ef8TkKXltOe2yEe1" img={illustrator} desc="Designs logos and vector graphics.">Adobe Illustrator</VideoBox> */}

            {designVideo.map((video) => {
              return <VideoBox key={video._id} children={video.title} desc={video.description} link={video.link} handleVideoSave={() => handleSaveVideo(video)} />
            })}
          </div>


        </div>
      </div>
    </>
  )
}

export default VideoDesign
