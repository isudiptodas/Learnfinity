import React from 'react'
import { IoReturnUpBack } from "react-icons/io5";
import {Link} from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <>
      <div className='h-44 md:h-60 w-full bg-black flex justify-center items-center relative'>
      <Link to="/"><p className='font-Titillium absolute left-20 font-bold text-xl md:text-2xl text-white'><IoReturnUpBack /></p></Link>
        <h2 className='text-white font-Josefin text-3xl md:text-5xl'>Privacy Policy</h2>
      </div>

      <div className='h-auto w-full px-10 py-10 sm:py-24 sm:px-16 lg:px-28 lg:py-28 text-center font-Titillium bg-white text-black'>
        <p className="text-s md:text-lg">We at Learnfinity value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services</p><br></br>
        
        <br/>
        <h3 className='text-2xl font-semibold'>Information We Collect</h3>
        <p className="text-s md:text-lg"><span className='font-bold'>Personal Information:</span> Name, email address, and password (hashed).</p>
        <p className="text-s md:text-lg"><span className='font-bold'>User-Generated Content:</span> Notes that users save.</p>
        
        <br />

        <h3 className='text-2xl font-semibold'> How We Use Your Information</h3>
        <p className="text-s md:text-lg"> To provide access to our services (tech roadmaps, tools, and collaborative features).</p>
        <p className="text-s md:text-lg"> To improve our services and user experience.</p> 
        <p className="text-s md:text-lg"> To communicate updates, newsletters (if opted-in), and service notifications.</p> 
       
        <br />

        <h3 className='text-2xl font-semibold'> Data Security</h3>
        <p className="text-s md:text-lg"> We use industry-standard practices to secure your personal information. Passwords are encrypted using hashing techniques, and sensitive data is protected against unauthorized access. However, no system is 100% secure, and we encourage users to safeguard their credentials.</p>
        
        <br />

        <h3 className='text-2xl font-semibold'> Sharing and Disclosure</h3>
        <p className="text-s md:text-lg">We do not sell or share your personal data with third parties, except in cases where it’s necessary for legal compliance or to improve our services (e.g., using analytics or payment processors).</p>
        
        <br />

        <h3 className='text-2xl font-semibold'>User Rights</h3>
        <p className="text-s md:text-lg">You can access, edit your data through your account.</p>
        <p className="text-s md:text-lg">In case you want to delete your account contact us on learnfinity1224@gmail.com and we will help you out with it.</p>
        
        <br />

        <h3 className='text-2xl font-semibold'>Changes to the Policy</h3>
        <p className="text-s md:text-lg">We may update this Privacy Policy from time to time. Significant changes will be communicated to users via email or website notifications.</p>
        
      
      </div>
    </>
  )
}

export default PrivacyPolicy
