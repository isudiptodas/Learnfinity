import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import VideoBox from "../components/VideoBox";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useSidebar } from "../context/SidebarContext";
import VideoLectureSlider from '../components/VideoLectureSlider'
import Sidebar from "../components/Sidebar";
import { devOpsVideo } from "../videoLectures";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function VideoDevops() {

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
            {/* <VideoBox link="https://www.youtube.com/live/bz0ZCUv5rYo?si=4tYrXeo9g1FA4WOO" img={linux} desc="Open-source operating system based on UNIX.">Linux</VideoBox>
            <VideoBox link="https://youtu.be/k1RI5locZE4?si=HVpLgBhIXE9u3DH0" img={aws} desc="Cloud platform for computing and storage.">AWS</VideoBox>
            <VideoBox link="https://www.youtube.com/live/IUU6OR8yHCc?si=3mq_wDh6-_cy3SLd" img={gcp} desc="Google’s cloud platform for storage and computing.">GCP</VideoBox>
            <VideoBox link="https://youtu.be/tDuruX7XSac?si=-FS3uK3eFJnV22L6" img={azure} desc="Microsoft’s cloud services platform.">Microsoft Azure</VideoBox>
            <VideoBox link="https://youtu.be/6YZvp2GwT0A?si=Eg6QWUUFqho9w7DB" img={jenkins} desc="Automates builds and deployments.">Jenkins</VideoBox>
            <VideoBox link="https://youtube.com/playlist?list=PLT98CRl2KxKEUHie1m24-wkyHpEsa4Y70&si=8VOR5Gs4xdAeWyqw" img={ansible} desc="Manages and automates IT configurations.">Ansible</VideoBox>
            <VideoBox link="https://youtu.be/qP8kir2GUgo?si=NDQ2gKCNzLGwze0R" img={gitlab} desc="Tool for code management and CI/CD.">Gitlab CI/CD</VideoBox>
            <VideoBox link="https://youtu.be/3c-iBn73dDE?si=4dQ9eSLAKG8SUsLa" img={docker} desc="Runs containerized applications.">Docker</VideoBox>
            <VideoBox link="https://youtu.be/X48VuDVv0do?si=1zYRmCOrixhfkgsU" img={k8s} desc="Container orchestration tool that manages containers.">Kubernetes</VideoBox>
            <VideoBox link="https://youtu.be/YcJ9IeukJL8?si=kz-qj6Ga0-opCmOg" img={teraform} desc="Automates cloud infrastructure setup.">Terraform</VideoBox> */}

            {devOpsVideo.map((video) => {
              return <VideoBox key={video._id} children={video.title} desc={video.description} link={video.link} handleVideoSave={() => handleSaveVideo(video)} />
            })}
          </div>


        </div>
      </div>
    </>
  )
}

export default VideoDevops
