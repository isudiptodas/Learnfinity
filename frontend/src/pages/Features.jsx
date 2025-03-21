import React from 'react'
import Footer from '../components/Footer'
import { IoReturnUpBack } from "react-icons/io5";
import {Link} from 'react-router-dom';

function Features() {
  return (
    <>
      <div className='h-44 md:h-60 w-full bg-black flex justify-center items-center relative'>
      <Link to="/"><p className='font-Titillium absolute left-20 font-bold text-xl md:text-2xl text-white'><IoReturnUpBack /></p></Link>
        <h2 className='text-white font-Josefin text-3xl md:text-5xl'>Our Features</h2>
      </div>

      <div className='h-auto w-full px-10 py-10 sm:px-20 sm:py-20 md:px-28 md:py-28 font-Titillium lg:px-32 bg-white text-black'>
        <p className="text-s md:text-lg">Explore the cutting-edge tools and resources we offer to accelerate your development journey: </p><br></br>< br/>
        <p className="text-s md:text-lg"><span className='font-bold text-lg'>Comprehensive Tech Roadmaps :</span><br></br>
        Get clear, step-by-step guidance on how to navigate different tech domains, from web development to AI and beyond. Our expertly curated roadmaps help you stay focused and achieve your goals efficiently.</p><br/>
      
        <p className="text-s md:text-lg"><span className='font-bold text-lg'>Free video lectures & documentation :</span><br></br>
        Access high-quality, free video tutorials and documentation for a variety of programming languages, frameworks, and technologies. Learn at your own pace with resources designed for both beginners and advanced learners.</p><br/>
      
        <p className="text-s md:text-lg"><span className='font-bold text-lg'>Online IDE :</span><br></br>
        Code, compile, and run your programs directly from our platform without the need for external tools. Experience a seamless coding environment built for productivity and ease.</p><br/>
      
        <p className="text-s md:text-lg"><span className='font-bold text-lg'>Collaborative code editor :</span><br></br>
        Collaborate with teammates or fellow developers in real time using our built-in collaborative code editor. Write, debug, and share code seamlessly, fostering teamwork and innovation.</p><br/>
      
        <p className="text-s md:text-lg"><span className='font-bold text-lg'>AI Powered search feature :</span><br></br>
        Utilize our AI search tool to quickly find answers to your tech queries. From debugging solutions to conceptual explanations, our AI is here to guide you.</p><br/>
      
        <p className="text-s md:text-lg"><span className='font-bold text-lg'>Tech industry news section :</span><br></br>
        Stay informed with the latest news and trends in the tech industry. Our curated news section keeps you updated on breakthroughs, events, and key insights shaping the world of technology.</p><br/>
      
        <p className="text-s md:text-lg"><span className='font-bold text-lg'>Personalized note-taking :</span><br></br>
        Save important notes, ideas, or snippets of code directly on our platform. With your notes securely stored and easily accessible, staying organized has never been easier.</p><br/>

        <div className='h-auto w-full flex flex-col gap-2 text-start font-Titillium text-black'>

        <h3 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-800 bg-clip-text text-transparent'>Why choose us ?</h3>
        <p className="text-s md:text-lg">User-Centric Design: Simplified navigation and intuitive interfaces.</p>
        <p className="text-s md:text-lg">Diverse Resources: From beginners to experts, there’s something for everyone.</p>
        <p className="text-s md:text-lg">Always Free: Our core resources are free because we believe in accessible education.</p>
        <p className="text-s md:text-lg">Future-Ready Tools: Stay ahead with tools and features designed for modern development.</p>

      </div>
      </div>

    </>
  )
}

export default Features