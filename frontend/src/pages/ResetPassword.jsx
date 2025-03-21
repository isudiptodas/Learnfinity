import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import resetpassword from '../assets/resetpassword.jpg';

function ResetPassword() {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (confirmPassword === '') {
      toast.error("Confirm password is empty");
      return;
    }

    if (password === '') {
      toast.error("Confirm password is empty");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password and confirm password do not match");
      return;
    }

    try {
      const res = await axios.post('https://learnfinity-mzah.onrender.com/reset-password', {
        password, email
      });

      if (res.data.success) {
        toast.success("New password set successfully, redirecting to login");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    }
    catch (err) {
      toast.error(err.response?.data?.message);
    }
  }

  return (
    <>
      <div className='min-h-[100vh] bg-white w-full flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-8 relative'>
        <Toaster />

        <div className='absolute top-0 h-1/3 w-full lg:h-full lg:w-1/2 lg:left-0 flex justify-center items-center'>
          <img src={resetpassword} className='h-full w-full lg:h-1/2' />
        </div>

        <div className='w-full sm:w-[80%] md:w-[70%] lg:w-1/2 z-30 mt-20 lg:mt-0 h-auto py-5 px-10 flex flex-col justify-center items-center gap-8'>
          <div className='z-20 text-4xl flex flex-col justify-center items-center text-black font-Titillium'>
            <h1>Now create your</h1>
            <h1><span className='font-bold font-Ranga bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent'>new</span> password</h1>
          </div>

          <form className='h-auto w-full border-2 border-cyan-700 rounded-lg py-5 lg:py-12 px-7 flex flex-col gap-2'>
            <div className='text-black w-full py-3 flex flex-col justify-center items-start gap-2'>
              <label htmlFor="password">New Password</label>
              <input type="password" name="password" className='w-full bg-gray-300 rounded-md text-black px-3 py-2' placeholder='Enter new password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='text-black w-full py-3 flex flex-col justify-center items-start gap-2'>
              <label htmlFor="password">Confirm New Password</label>
              <input type="password" name="password" className='w-full bg-gray-300 rounded-md text-black px-3 py-2' placeholder='Enter password again' onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button className='bg-black w-full text-white cursor-pointer hover:bg-zinc-700 duration-200 ease-in-out rounded-md py-2' onClick={handleSubmit}>Submit</button>
            <Link to="/forgot-password"><button className='bg-red-500 w-full text-white cursor-pointer hover:bg-red-700 duration-200 ease-in-out rounded-md py-2' >Back to previous page</button></Link>
          </form>
        </div>

      </div>
    </>
  )
}

export default ResetPassword
