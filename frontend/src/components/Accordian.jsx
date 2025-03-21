import React, {useState} from 'react'
import { useTheme } from "../context/ThemeContext";
import { FaChevronUp } from "react-icons/fa";

function Accordian({topic, detail, key}) {

    const[isVisible, setIsVisible] = useState(false);

    const handleVisibility = ()=>{
        setIsVisible(!isVisible);
    }

    const { dark } = useTheme();

  return (
    <>
      <div className={`${dark ? "bg-white text-black" : "bg-black text-white"} w-full h-auto rounded-lg shadow-lg hover:shadow-2xl flex flex-col gap-3 justify-center items-start px-5 py-3`}>
        <div className='flex h-auto py-5 w-full justify-between items-center'> 
            <h2 className={`${isVisible ? "text-cyan-600" : ""} font-bold text-lg duration-200 ease-in-out`}>{topic}</h2>
            <FaChevronUp className={`${isVisible ? "rotate-0" : "rotate-180"} duration-300 ease-in-out cursor-pointer`} onClick={handleVisibility} />
        </div>
        <div className={`text-s ${isVisible ? "block " : "hidden "} ease-in-out duration-300 lg:text-sm h-auto text-start`}>{detail}</div>
      </div>
    </>
  )
}

export default Accordian
