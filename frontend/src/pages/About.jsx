import React from 'react'
import Footer from '../components/Footer'
import { IoReturnUpBack } from "react-icons/io5";
import {Link} from 'react-router-dom';

function About() {
  return (
    <>
      <div className='h-44 md:h-60 w-full bg-black flex justify-center items-center relative'>
        <Link to="/"><p className='font-Titillium absolute left-20 font-bold text-xl md:text-2xl text-white'><IoReturnUpBack /></p></Link>
        <h2 className='text-white font-Josefin text-3xl md:text-5xl'>About Us</h2>
      </div>

      <div className='h-auto w-full px-10 py-10 sm:py-24 sm:px-16 lg:px-28 lg:py-28 text-center font-Titillium bg-white text-black'>
        <p className="text-s md:text-lg">Welcome to LEARNFINITY - your one-stop destination for developers and tech enthusiasts! We are dedicated to empowering the developer community with accessible resources, innovative tools, and the latest industry insights. Our mission is to simplify your learning journey, provide collaborative opportunities, and keep you ahead in the ever-evolving tech landscape.</p><br></br>
        <p className="text-s md:text-lg">At LEARNFINITY, we understand the challenges of navigating the vast world of technology. That’s why we’ve created a platform that bridges the gap between learning and application. Whether you’re a beginner taking your first steps into coding or a seasoned developer refining your skills, our website is designed to cater to your needs.</p><br></br>
        <p className="text-s md:text-lg">We are more than just a resource hub; we are a community-driven platform committed to supporting developers in achieving their goals. With features like personalized note-taking, collaborative tools, and curated content, we aim to be the partner you need to thrive in the tech world.</p><br></br><br></br>

        <h3 className='text-2xl font-semibold'>Our Mission</h3>
        <p className="text-s md:text-lg">To provide a comprehensive and collaborative platform where developers can learn, build, and stay updated with cutting-edge tools and resources.</p> <br></br>
      
        <h3 className='text-2xl font-semibold'>Our Vision</h3>
        <p className="text-s md:text-lg">To create an inclusive environment where knowledge and innovation empower developers to make a lasting impact in the tech industry.</p> <br></br>
      
      </div>


    </>
  )
}

export default About