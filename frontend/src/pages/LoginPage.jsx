import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import login1 from '../assets/login1.jpg'
import login2 from '../assets/login2.jpg'
import login3 from '../assets/login3.jpg'

function LoginPage() {

    const [isVisible, setIsvisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [logging, setLogging] = useState(false);
    const navigate = useNavigate();

    const toggleVisibility = () => {
        setIsvisible(!isVisible);
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            toast.error("Both email and passwords are required");
            return;
        }

        try {

            setLogging(true);
            const res = await axios.post("https://learnfinity-mzah.onrender.com/auth/login", { email, password, isChecked });
            // console.log(res.data);

            if(res.status === 404){
                toast.error("No user found with this email");
                return;
            }

            if(res.status === 400){
                toast.error("Invalid Password");
                return;
            }

            if (res.status === 200) {
                const token = res.data.token;
                localStorage.setItem("token", token);

                navigate("/dashboard");
                // console.log(res.data.exist);
                
            }
        }
        catch (err) {
            console.error(err.message);

            if (err.response.data.message) {
                toast.error(err.response.data.message);
            }
        }
        finally{
            setLogging(false);
        }

    };

    return (
        <>
            <div className='min-h-[100vh] w-full bg-white flex flex-col lg:flex-row gap-10 items-center justify-center relative overflow-y-auto py-24 lg:py-5 '>
                <Toaster />
                <div className='h-10 w-[80%] absolute top-20 z-20 flex items-center gap-3 font-bold text-black font-Josefin text-lg md:text-xl lg:text-2xl'>
                    <BsArrowLeft />
                    <NavLink to="/">Back</NavLink>
                </div>

                {/* <div className='hidden lg:block h-full w-[50%] absolute bg-gradient-to-l from-white via-transparent to-transparent left-0 right-0'></div> */}

                <div className="h-1/2 lg:h-full lg:w-1/2 left-0 absolute top-0 carousel rounded-b-xl -mt-20 lg:-mt-0 z-10 w-full">

                    <div className="carousel-item w-full relative">
                        <div className='h-full w-full top-0 z-30 absolute bg-gradient-to-b from-transparent via-transparent to-white lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white'></div>
                        <img
                            src={login1}
                            className="w-full h-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full relative">
                        <div className='h-full w-full top-0 z-30 absolute bg-gradient-to-b from-transparent via-transparent to-white lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white'></div>
                        <img
                            src={login2}
                            className="w-full h-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full relative">
                        <div className='h-full w-full top-0 z-30 absolute bg-gradient-to-b from-transparent via-transparent to-white lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white'></div>
                        <img
                            src={login3}
                            className="w-full h-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full relative">
                        <div className='h-full w-full top-0 z-30 absolute bg-gradient-to-b from-transparent via-transparent to-white lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white'></div>
                        <img
                            src={login1}
                            className="w-full h-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full relative">
                        <div className='h-full w-full top-0 z-30 absolute bg-gradient-to-b from-transparent via-transparent to-white lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white'></div>
                        <img
                            src={login2}
                            className="w-full h-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full relative">
                        <div className='h-full w-full top-0 z-30 absolute bg-gradient-to-b from-transparent via-transparent to-white lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white'></div>
                        <img
                            src={login3}
                            className="w-full h-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                </div>

                <div className='border-2 border-cyan-600 w-[80%] sm:w-[60%] lg:w-1/3 py-10 z-50 h-auto rounded-3xl mt-[500px] sm:mt-[500px] md:mt-[550px] lg:mt-0 lg:absolute lg:right-24'>

                    <div className=' w-full h-auto py-2 z-40 flex flex-col justify-center items-center'>
                        <h1 className='text-black text-3xl md:text-4xl font-Titillium font-bold'>Discover more</h1>
                        <h1 className='text-black text-3xl md:text-4xl font-Titillium font-bold'><span className='font-Ranga mr-5 bg-gradient-to-r from-cyan-400 to-teal-700 bg-clip-text text-transparent'>Login</span>now</h1>
                    </div>

                    <form className=' h-full w-full px-10 flex flex-col justify-center items-start gap-5 text-black' onSubmit={handleLogin}>

                        <div className='flex flex-col w-full'>
                            <label htmlFor="email">Email address</label>
                            <input type="email" placeholder='Enter email' className='w-full rounded-md bg-gray-200 text-black px-5 py-2' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='flex flex-col w-full'>
                            <label htmlFor="password">Password</label>
                            <div className='flex relative w-full'>
                                <span className='opacity-40 absolute top-1/3 right-5 transform cursor-pointer' onClick={toggleVisibility}>{isVisible ? <FaEye /> : <FaEyeSlash />}</span>
                                <input type={isVisible ? "text" : "password"} placeholder='Enter password' className='w-full rounded-md bg-gray-200 text-black px-5 py-2' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className='flex justify-between items-center w-full'>

                            <div className='flex gap-2'>
                                <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(!isChecked)} />
                                {/* {console.log(isChecked)} */}
                                <p className='text-[10px] lg:text-sm'>Remember me</p>
                            </div>

                            <Link to="/forgot-password" className='text-blue-600 text-[10px] lg:text-sm hover:underline cursor-pointer'>Forgot Password ?</Link>
                        </div>


                        <button type='submit' className='w-full py-2 text-sm lg:text-lg bg-black text-white hover:bg-zinc-700 duration-200 ease-in-out'>{logging ? "Logging ... please wait" : "Login"}</button>
                    </form>
                </div>

                {/* <div className='hidden lg:block h-20 xl:h-3 z-50 w-full bg-black absolute bottom-0'></div> */}


            </div>
        </>
    )
}

export default LoginPage
