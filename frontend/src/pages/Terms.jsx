import React from 'react'
import { IoReturnUpBack } from "react-icons/io5";
import {Link} from 'react-router-dom';

function Terms() {
  return (
    <>
      <div className='h-44 md:h-60 w-full bg-black flex justify-center items-center relative'>
      <Link to="/"><p className='font-Titillium absolute left-20 font-bold text-xl md:text-2xl text-white'><IoReturnUpBack /></p></Link>
        <h2 className='text-white font-Josefin text-3xl md:text-5xl'>Terms & Conditions</h2>
      </div>

      <div className='h-auto w-full px-10 py-10 sm:py-24 sm:px-16 lg:px-28 lg:py-28 text-center font-Titillium bg-white text-black'>
        <p className="text-s md:text-lg">To outline rules, responsibilities, and user rights when accessing your services.By using Learnfinity, you agree to abide by these Terms and Conditions.</p><br></br>
        
        <br/>
        <h3 className='text-2xl font-semibold'>User Responsibilities</h3>
        <p className="text-s md:text-lg"> Users must provide accurate information during registration.</p>
        <p className="text-s md:text-lg">Users are responsible for maintaining the confidentiality of their account credentials.</p>
        <p className="text-s md:text-lg">Users agree not to misuse services (e.g., using collaborative tools for harmful purposes).</p>
        
        <br />

        <h3 className='text-2xl font-semibold'> User-Generated Content</h3>
        <p className="text-s md:text-lg"> Users retain ownership of their notes and projects but grant us permission to store and display them for service functionality.</p>
        <p className="text-s md:text-lg"> We do not claim ownership of your data, but inappropriate content may be removed at our discretion.</p> 
       
        <br />

        <h3 className='text-2xl font-semibold'> Prohibited Activities</h3>
        <p className="text-s md:text-lg"> Attempting to hack, disrupt, or harm the website or its services.</p>
        <p className="text-s md:text-lg"> Attempting to hack, disrupt, or harm the website or its services.</p>
        
        <br />

        <h3 className='text-2xl font-semibold'> Liability Disclaimer</h3>
        <p className="text-s md:text-lg">Learnfinity is not liable for data loss due to technical issues, user errors, or unauthorized access caused by third-party attacks.</p>
        
        <br />

        <h3 className='text-2xl font-semibold'> Modifications to Terms</h3>
        <p className="text-s md:text-lg">We reserve the right to modify these Terms at any time. Continued use of the website constitutes acceptance of the revised Terms.</p>
        
        <br />

        <h3 className='text-2xl font-semibold'>Changes to the Policy</h3>
        <p className="text-s md:text-lg">We may update this Privacy Policy from time to time. Significant changes will be communicated to users via email or website notifications.</p>
        
      
      </div>
    </>
  )
}

export default Terms
