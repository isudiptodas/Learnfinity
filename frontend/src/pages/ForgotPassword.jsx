import React, { useState } from 'react'
import forgotpassword from '../assets/forgotpassword.jpg'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import OtpInput from 'react-otp-input';

function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [generatedOTP, setGeneratedOTP] = useState(0);
    const [inputOTP, setInputOTP] = useState('');
    const [isMailVerified, setIsMailVerified] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === '') {
            toast.error("Email is required");
            return;
        }

        try {
            const res = await axios.post('https://learnfinity-mzah.onrender.com/verify/email', { email });

            if (res.data.success) {
                const otp = generateOTP();
                setGeneratedOTP(otp);

                const sendOTP = await axios.post('https://learnfinity-mzah.onrender.com/forgot-password/send-otp', {
                    email, generatedOTP: otp
                });

                if(sendOTP.data.success){
                    setIsMailVerified(true);
                    toast.success("OTP has been sent to your email address");
                }
            }
        }
        catch (err) {
            toast.error(err.response?.data?.message);
        }
    }

    const generateOTP = () => {
        let otp = Math.floor(100000 + Math.random() * 900000);
        return otp;
    }

    const resendOTP = async (e) => {
        e.preventDefault();

        const newOtp = generateOTP();
        setGeneratedOTP(newOtp);

        try{
            const res = await axios.post("https://learnfinity-mzah.onrender.com/forgot-password/send-otp", {
                email, generatedOTP: newOtp
            });

            if(res.data.success){
                toast.success("OTP sent successfully");
            }
        }
        catch(err){
            toast.error(err.response?.data?.message);
        }
    }

    const verifyOTP = (e) => {
        e.preventDefault();

        if(inputOTP === ''){
            toast.error("Please enter OTP to verify");
            return;
        }

        if(inputOTP !== generatedOTP.toString()){
            toast.error("Invalid OTP");
            return;
        }

        if(inputOTP === generatedOTP.toString()){
            toast.success("OTP verified, Redirecting to password recovery page");
            
            setTimeout(()=>{
                navigate("/reset-password", {state: {email}});
            },3000);
        }
    }

    return (
        <>
            <div className='min-h-[100vh] bg-white w-full flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-8 relative'>
                <Toaster />
                <div className=' w-full h-1/3 lg:w-1/2 lg:h-full absolute top-0 lg:left-0 z-10 flex justify-center items-center'>
                    <img src={forgotpassword} className='h-full w-full lg:h-1/2' />
                </div>


                <div className='h-full w-full lg:w-1/2 mt-32 lg:mt-0 flex flex-col justify-center items-center gap-10'>

                    <div className='text-black text-4xl z-30 bg-transparent flex flex-col font-Titillium justify-center items-center'>
                        <h2>We will help you</h2>
                        <h2><span className='font-Ranga font-bold bg-gradient-to-r from-cyan-500 to-teal-700 bg-clip-text text-transparent'>Recover</span> your password</h2>
                    </div>

                    <form className='h-auto w-2/3 rounded-xl py-10 px-5 border-2 border-cyan-500 flex flex-col justify-center items-center gap-4 lg:z-40'>

                        {isMailVerified ? (<div className='flex flex-col gap-5'>
                            <h2 className='text-2xl text-black'>Enter OTP here</h2>
                            <OtpInput
                                onChange={setInputOTP}
                                value={inputOTP}
                                numInputs={6}
                                renderInput={(props) => <input {...props} />}
                                renderSeparator={<span> - </span>}
                                inputStyle={{
                                    backgroundColor: 'white',
                                    border: '2px solid black',
                                    width: '100%',
                                    height: '50px',
                                    color: '#000',
                                    outline: 'none'
                                }}
                            />  </div>) : (<div className='flex flex-col justify-center items-start gap-2 w-full text-black'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder='Enter your email' className='w-full py-2 px-2 rounded-md bg-gray-300 text-black' onChange={(e) => setEmail(e.target.value)} />
                            </div>)}

                        <button className={`w-full bg-black text-white hover:bg-zinc-700 duration-200 ease-in-out cursor-pointer py-2 rounded-lg ${isMailVerified ? "block" : "hidden"}`} onClick={verifyOTP}>Verify OTP</button>
                        <button className={`w-full bg-emerald-600 text-white hover:bg-emerald-700 duration-200 ease-in-out cursor-pointer py-2 rounded-lg ${isMailVerified ? "block" : "hidden"}`} onClick={resendOTP}>Resend OTP</button>
                        <button className={`w-full bg-black text-white hover:bg-zinc-700 duration-200 ease-in-out cursor-pointer py-2 rounded-lg ${isMailVerified ? "hidden" : "block"}`} onClick={handleSubmit}>Send OTP</button>
                        <Link to="/login" className='w-full bg-red-500 text-white py-2 flex justify-center items-center rounded-lg cursor-pointer hover:bg-red-700 duration-200 ease-in-out'>Back to login page</Link>


                    </form>
                </div>

            </div>
        </>
    )
}

export default ForgotPassword
