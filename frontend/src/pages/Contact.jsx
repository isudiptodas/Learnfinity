import React, {useState} from 'react'
import {toast, Toaster} from 'react-hot-toast'
import axios from 'axios'
import { IoReturnUpBack } from "react-icons/io5";
import {Link} from 'react-router-dom';

function Contact() {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[query, setQuery] = useState('');
  const[desc, setDesc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(name === '' || email === '' || query === '' || desc === ''){
      toast.error("All fields are required");
      return;
    }

    try{
      const res = await axios.post('https://learnfinity-mzah.onrender.com/contact', {
          name, email, query, desc
      });

      if(res.data.success){
        toast.success("Message sent successfully");
        setName('');
        setEmail('');
        setQuery('');
        setDesc('');
      }
    }
    catch(err){
      console.log(err.response?.data?.message);
    }
  }

  const openMail = () => {
    window.open(`mailto:learnfinity1224@gmail.com`, '_blank');
  }
 
  return (
    <>
      <div className='h-44 md:h-60 w-full bg-black flex justify-center items-center relative'>
      <Link to="/"><p className='font-Titillium absolute left-20 font-bold text-xl md:text-2xl text-white'><IoReturnUpBack /></p></Link>
        <h2 className='text-white font-Josefin text-3xl md:text-5xl'>Contact Us</h2>
      </div>

      <Toaster/>

      <div className='min-h-[100vh] w-full px-10 py-10 sm:py-24 sm:px-16 lg:px-28 lg:py-28 text-center font-Titillium bg-white text-black flex flex-col justify-center items-center gap-2'>
        <h3 className='text-2xl font-semibold'>We’d love to hear from you!</h3>
        <p className="text-s md:text-lg">Welcome to Learnfinity's Contact Us page. Whether you have a question, feedback, or just want to say hello, we're here to listen. Your input helps us grow and serve you better.</p>

        <br />

        <p className="text-s md:text-lg"> We aim to make connecting with us as seamless as possible. Here are the ways you can get in touch :</p>
        <p className="text-s md:text-lg"> <span className='font-bold'>Email Us:</span> Have questions or need support? Drop us an email at <b className='cursor-pointer' onClick={openMail}>learnfinity1224@gmail.com</b>. We typically respond within 24 hours.</p>

        <br />

        <p className="text-s md:text-lg"> If you’d prefer, you can use our contact form to send us a direct message. Simply provide your details and let us know how we can help. Our team will review your message and respond promptly.</p><br />
        <h3 className='text-2xl font-semibold'>Send us a direct message</h3>
        <br />

        <form className='w-full md:w-[70%] lg:w-[50%] lg:rounded-2xl h-auto px-5 py-5 lg:py-10 lg:px-7 border-2 border-cyan-700 rounded-lg flex flex-col justify-center items-center gap-3'>

          <div className='w-full flex flex-col justify-center items-start gap-2'>
            <label htmlFor="name">Full Name *</label>
            <input type="text" placeholder='Enter your full name' value={name} className='w-full bg-gray-300 px-3 py-2 rounded-md' onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className='w-full flex flex-col justify-center items-start gap-2'>
            <label htmlFor="email">Email Address * </label>
            <input type="email" placeholder='Enter your email' value={email} className='w-full bg-gray-300 px-3 py-2 rounded-md' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='w-full flex flex-col justify-center items-start gap-2'>
            <label htmlFor="query">Query *</label>
            <input type="text" placeholder='Enter your query title' value={query} className='w-full bg-gray-300 px-3 py-2 rounded-md' onChange={(e) => setQuery(e.target.value)}/>
          </div>
          <div className='w-full flex flex-col justify-center items-start gap-2'>
            <label htmlFor="description">Description *</label>
            <textarea type="text" placeholder='Enter description' value={desc} className='w-full bg-gray-300 px-3 py-2 min-h-32 rounded-md break-words' onChange={(e) => setDesc(e.target.value)}/>
          </div>

          <button className='w-full bg-black text-white hover:bg-zinc-700 duration-200 ease-in-out py-2 rounded-lg cursor-pointer' onClick={handleSubmit}>Send</button>

        </form>
        <br/>
        <p className="text-s md:text-lg"> Your suggestions and feedback are the backbone of Learnfinity. Let us know how we’re doing and how we can improve your experience.</p><br />

      </div>
    </>
  )
}

export default Contact