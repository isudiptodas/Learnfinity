import { BsArrowRight } from "react-icons/bs";
import { GoNorthStar } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import { BoxReveal } from "../components/BoxReveal";
import mockup from '../assets/mockup.png';
import CountUp from 'react-countup';
import { FaEarthAmericas } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";
import { RiGuideFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import Testimonial from "../components/Testimonial.jsx";
import Marquee from "react-fast-marquee";
import { FaExternalLinkAlt } from "react-icons/fa";

function LandingPage() {

  const testimonial = [
    {
      id: 1,
      name: "Debaleena Datta",
      profession: "Assistant Professor, Techno India",
      rating: "★★★★★",
      review: "For me Learnfinity is a new age platform for emerging developers and working professionals as it covers almost every aspect of tech. Although some areas are still in development but beside that this platform serves you with a mind blowing experience",
      image: "https://res.cloudinary.com/dogrrh0ce/image/upload/f_auto,q_auto/v1/Learnfinity%20(Testimonials)/yrhj8xwhzcsmdpsx0cfh"
    },
    {
      id: 2,
      name: "Argha Banik",
      profession: "Final year student, TMSL",
      rating: "★★★★",
      review: "As a coder, Learnfinity feels like a gem to me. It not only supports my coding journey but also provides AI-powered features that are essential for students like me. These tools make learning smoother, more efficient, and exciting. Learnfinity has kept its promise to make learning accessible, effective, and enjoyable for everyone. Highly recommended!",
      image: "https://res.cloudinary.com/dogrrh0ce/image/upload/f_auto,q_auto/v1/Learnfinity%20(Testimonials)/wthrx5yzczz0hafevq51"
    },
    {
      id: 3,
      name: "Argha Banik",
      profession: "Final year student, TMSL",
      rating: "★★★★",
      review: "As a coder, Learnfinity feels like a gem to me. It not only supports my coding journey but also provides AI-powered features that are essential for students like me. These tools make learning smoother, more efficient, and exciting. Learnfinity has kept its promise to make learning accessible, effective, and enjoyable for everyone. Highly recommended!",
      image: "https://res.cloudinary.com/dogrrh0ce/image/upload/f_auto,q_auto/v1/Learnfinity%20(Testimonials)/wthrx5yzczz0hafevq51"
    }
  ];

  const openLink = () => {
    window.open('https://shield-1-w26n.onrender.com', '_blank');
  }

  return (
    <>

    {/* <div className="h-auto py-5 px-7 flex flex-col lg:flex-row justify-center items-center gap-3 bg-black w-full">
      <p className="text-center bg-gradient-to-br from-emerald-300 via-green-500 to-white bg-clip-text text-transparent font-Titillium text-[15px]">Try our new and most secured 256-bit encryption Password Manager for free</p>
      <p className="text-center bg-gradient-to-br from-emerald-300 via-green-500 to-teal-700 flex justify-center items-center gap-2 px-5 py-1 hover:rounded-3xl duration-200 ease-in-out text-black font-Titillium text-[15px] cursor-pointer" onClick={openLink}>Check <FaExternalLinkAlt /> </p>
    </div> */}

      <header className="flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 via-[#fdf5e6] to-white h-80 sm:h-96 lg:h-120 w-full py-7">
        <div className=" w-[90%] h-10 md:h-14 lg:h-16 flex items-center justify-between border-b-2 border-black">
          <div className=" text-s cursor-pointer font-bold font-Titillium sm:text-xl lg:text-xl text-black">
            <Link to="/">LEARNFINITY</Link>
          </div>
          <div className=" flex items-center justify-evenly gap-8">
            <button
              type="button"
              className="text-s text-black cursor-pointer sm:text-xl lg:text-xl"
            >
              <NavLink to="/login">LOGIN</NavLink>
            </button>
            <button
              type="button"
              className="text-white bg-black text-s rounded-full px-4 md:px-7 md:py-1 cursor-pointer hover:scale-90 duration-300 ease-in-out sm:text-xl lg:text-xl"
            >
              <NavLink to="/register">REGISTER</NavLink>
            </button>
          </div>
        </div>
        <BoxReveal boxColor={'#111111'} duration={0.5}>
          <h1 className="text-black text-center mt-10 sm:mt-16 lg:mt-20 font-Titillium font-bold text-2xl px-4 sm:text-4xl md:px-8 lg:px-20 lg:text-6xl">
            YOUR QUEST FOR AN ALL IN ONE SOLUTION ENDS HERE
          </h1>
        </BoxReveal>
        <BoxReveal boxColor={"#111111"} duration={0.8}>
          <p className="text-s md:text-lg font-Josefin lg:text-xl text-black mt-4">
            Upskill your career with learnfinity.
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#111111"} duration={1}>
          <button type="button" className="text-white bg-black text-xs rounded-full px-4 py-1 text-center cursor-pointer hover:px-10 duration-300 ease-in-out mt-3 sm:mt-6 md:mt-10 lg:mt-7 flex items-center justify-center gap-2 md:text-sm lg:text-lg">
            <NavLink to='/register'>Try. It's free</NavLink>
            <span>
              <BsArrowRight />
            </span>{" "}
          </button>
        </BoxReveal>
      </header>

      <div className="bg-black h-14 flex items-center justify-evenly gap-10 w-full overflow-hidden">
        <div className="text-white text-s md:text-sm flex justify-between w-full px-5 items-center md:gap-6">

          <Marquee className="w-full" pauseOnHover={true} speed={70}>
            <p className="mr-5">ONLINE IDE</p>
            <GoNorthStar className="mr-5"/>
            <p className="mr-5">MULTIPLE TECH DOMAINS</p>
            <GoNorthStar className="mr-5"/>
            <p className="mr-5">AI STUDIO</p>
            <GoNorthStar className="mr-5" />
            <p className="mr-5">IN-APP NOTES</p>
            <GoNorthStar className="mr-5" />
            <p className="mr-5">COMMUNITY SUPPORT</p>
            <GoNorthStar className="mr-5" />
            <p className="mr-5">COLLABORATION SPACE</p>
          </Marquee>

        </div>
      </div>

      {/* <div className="h-48 sm:h-72 lg:h-52 w-full bg-white flex flex-wrap lg:justify-evenly">
        <div className=" h-1/2 w-1/2 lg:h-full lg:w-[20%]  flex flex-col font-Josefin text-black justify-center items-center">
          <CountUp start={0} end={25} duration={8} suffix="+" className="font-bold text-3xl sm:text-5xl " />
          <p className="sm:text-xl md:text-2xl">Free Videos</p>
        </div>
        <div className="h-1/2 w-1/2 lg:h-full lg:w-[20%]  flex flex-col font-Josefin text-black justify-center items-center">
          <CountUp start={0} end={15} duration={8} suffix="+" className="font-bold text-3xl sm:text-5xl " />
          <p className="sm:text-xl md:text-2xl">Tech Roadmaps</p>
        </div>
        <div className="h-1/2 w-1/2 lg:h-full lg:w-[20%]  flex flex-col font-Josefin text-black justify-center items-center">
          <CountUp start={0} end={20} duration={8} suffix="+" className="font-bold text-3xl sm:text-5xl " />
          <p className="sm:text-xl md:text-2xl">Documentations</p>
        </div>
        <div className="h-1/2 w-1/2 lg:h-full lg:w-[20%]  flex flex-col font-Josefin text-black justify-center items-center">
          <CountUp start={0} end={7} duration={5} className="font-bold text-3xl sm:text-5xl " />
          <p className="sm:text-xl md:text-2xl text-center">Unmatched Features</p>
        </div>
      </div> */}

      <div className="bg-white h-72 sm:h-96 lg:h-115 w-full flex flex-col justify-start items-center relative py-10">
        <div className=" text-2xl md:text-4xl  text-black font-Titillium font-bold w-full flex justify-center items-center gap-2">
          <h1><span className="bg-gradient-to-b from-cyan-400 to-teal-600 bg-clip-text text-transparent">Flawless </span>on any <span className="bg-gradient-to-b from-cyan-400 to-teal-600 bg-clip-text text-transparent"> Frame</span></h1>
        </div>

        <img src={mockup} className="h-[80%] sm:h-[70%] lg:h-[100%] absolute bottom-0" />

      </div>

      <div className="w-full bg-white h-96 md:h-80 flex flex-wrap text-center items-center justify-center gap-7 py-5 lg:py-14">

        <div className="h-[40%] w-[40%] hover:-translate-y-4 lg:h-full lg:w-[20%] text-black px-5 lg:px-10 bg-gray-300 rounded-xl shadow-lg flex flex-col justify-center items-center gap-3 hover:shadow-2xl hover:bg-gradient-to-br from-gray-300 to-cyan-500 duration-300 ease-in-out relative overflow-hidden">
          <FaEarthAmericas className="text-2xl" />
          <p className="text-s md:text-sm">Explore Community Channels</p>
        </div>
        <div className="h-[40%] w-[40%] hover:-translate-y-4 lg:h-full lg:w-[20%] px-5 lg:px-10 bg-gray-300 rounded-xl shadow-lg text-black flex flex-col justify-center items-center gap-3 hover:shadow-2xl hover:bg-gradient-to-br from-gray-300 to-cyan-500 duration-300 ease-in-out relative overflow-hidden">
          <IoSparkles className="text-2xl" />
          <p className="text-s md:text-sm">Test Our Everyday AI Tools</p>
        </div>
        <div className="h-[40%] w-[40%] hover:-translate-y-4 lg:h-full lg:w-[20%] px-5 lg:px-10 bg-gray-300 rounded-xl shadow-lg text-black flex flex-col justify-center items-center gap-3 hover:shadow-2xl hover:bg-gradient-to-br from-gray-300 to-cyan-500 duration-300 ease-in-out relative overflow-hidden">
          <RiGuideFill className="text-2xl" />
          <p className="text-s md:text-sm">Checkout Roadmaps Curated By Industry Professionals</p>
        </div>
        <div className="h-[40%] w-[40%] hover:-translate-y-4 lg:h-full lg:w-[20%] px-5 lg:px-10 bg-gray-300 rounded-xl shadow-lg text-black flex flex-col justify-center items-center gap-3 hover:shadow-2xl hover:bg-gradient-to-br from-gray-300 to-cyan-500 duration-300 ease-in-out relative overflow-hidden">
          <FaCode className="text-2xl" />
          <p className="text-s md:text-sm">Enhance Skills On Our Playground</p>
        </div>

      </div>


      <div className='h-auto bg-white py-5 px-10 w-full text-center font-Titillium flex flex-col justify-center items-center gap-5 text-black relative overflow-hidden'>

        <div className="absolute z-30 h-full w-[40%] bg-gradient-to-r from-white to-transparent left-0"></div>
        <div className="absolute z-30 h-full w-[40%] bg-gradient-to-l from-white to-transparent right-0"></div>

        <h1 className="text-2xl lg:text-4xl font-Josefin z-30 font-bold">Trusted by <span className="bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">Industry Professionals</span> and <span className="bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">Developers</span></h1>

        <div className="z-10 h-auto py-5 w-[80%] flex justify-evenly items-center gap-5 animate-leftScroll">
          {testimonial.map((d, index) => {
            return <Testimonial key={index} name={d.name} profession={d.profession} rating={d.rating} review={d.review} img={d.image} />
          })}
        </div>

        <div className="z-10 h-auto py-5 w-[80%] flex justify-evenly items-center gap-5 animate-rightScroll">
          {testimonial.map((d, index) => {
            return <Testimonial key={index} name={d.name} profession={d.profession} rating={d.rating} review={d.review} img={d.image} />
          })}
        </div>

      </div>

      {/* <div className="h-auto w-full py-5 bg-white flex justify-center items-center">
          <div className="h-52 w-[50%] bg-gradient-to-br from-cyan-200 via-purple-400 to-teal-500 rounded-full blur-2xl"></div>
      </div> */}

      <div className="w-full flex justify-center items-center h-auto py-5 pb-20 px-10 bg-white">
        <h1 className="text-black text-center text-2xl lg:text-4xl font-Titillium">Still need a reason to not choose us ? </h1>
      </div>


    </>
  );
}

export default LandingPage;
