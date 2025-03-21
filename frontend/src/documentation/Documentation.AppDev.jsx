import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { PiHandWavingFill } from "react-icons/pi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useSidebar } from "../context/SidebarContext";
import DocumentationSlider from '../components/DocumentationSlider'
import Sidebar from "../components/Sidebar";
import SiteBox from '../components/SiteBox'
import { appDevDocumentation } from '../documentation.js';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function DocumentationAppDev() {

  const { dark } = useTheme();

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const { isSideBarVisible, toggleSidebar } = useSidebar(false);

  const toggleVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const handleSave = async (doc) => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post('https://learnfinity-mzah.onrender.com/save/doc', {
        title: doc.title,
        desc: doc.description,
        link: doc.download,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if (res.data.success) {
        // console.log(res.data.savedDoc);
        toast.success("Documentation saved");
      }
    }
    catch (err) {

    }
  }

  return (
    <>
      <div className={`overflow-x-hidden overflow-y-hidden h-[95vh] lg:h-auto lg:py-5 w-full ${dark ? "bg-white duration-200 ease-in-out" : "bg-black duration-200 ease-in-out"} flex flex-col justify-center items-center relative lg:px-10 gap-5`} >

        {/* sidebar section */}

        <Sidebar />
        <Toaster/>
        <div className=" animate-revolve opacity-55 h-1/2 w-1/2 absolute bottom-20 left-5 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>
        <div className="animate-revolve2 opacity-55  h-1/2 w-1/2 absolute left-5 top-0 z-10 bg-gradient-to-br from-teal-400 via-purple-500 to-cyan-500 blur-3xl"></div>

        {/* main content section */}

        <div className={`z-20 ${dark ? "bg-gray-200 duration-200 ease-in-out" : "bg-zinc-900 duration-200 ease-in-out"} py-5 w-full h-auto lg:py-5 lg:h-auto px-10 rounded-xl md:py-5 content overflow-auto flex flex-col gap-10 lg:gap-2`}>


          <DocumentationSlider />

          <div className={`h-auto py-5 w-full flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:py-4 overflow-auto`}>
            {/* <SiteBox img={java}>Java</SiteBox>
            <SiteBox img={kotlin}>Kotlin</SiteBox>
            <SiteBox img={flutter}>Flutter</SiteBox>
            <SiteBox img={dart}>Dart</SiteBox>
            <SiteBox img={reactNative}>React Native</SiteBox>
            <SiteBox img={swift}>Swift</SiteBox>
            <SiteBox img={xamarin}>Xamarin</SiteBox> */}

            {appDevDocumentation.map((doc) => {
              return <SiteBox key={doc.id} children={doc.title} desc={doc.description} link={doc.download} handleSave={() => handleSave(doc)} />
            })}
          </div>


        </div>
      </div>
    </>
  )
}

export default DocumentationAppDev
