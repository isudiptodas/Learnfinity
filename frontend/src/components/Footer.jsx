import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="bg-black h-auto py-10 lg:py-24 flex flex-col justify-center items-center gap-5">
                <div className=" text-lg w-[80%] border-b-2 border-white text-center h-10 sm:h-14 bg-gradient-to-r from-cyan-500 to-[#fdf5e6] text-clip bg-clip-text text-transparent font-bold font-Titillium sm:text-xl lg:text-2xl tracking-widest">
                    LEARNFINITY
                </div>
                <div className='w-full h-auto py-5 sm:py-10 flex flex-col sm:flex-row px-5 justify-start sm:items-start items-center gap-5'>
                    <div className='w-full sm:w-1/3 flex flex-col items-center sm:justify-start lg:text-2xl'>
                        <h2 className='font-bold text-white mb-2'>Quick Links</h2>
                        <p className="text-white font-Josefin cursor-pointer mb-2 hover:text-cyan-400 text-s tracking-widest">
                            <NavLink to="/about">ABOUT US</NavLink>
                        </p>
                        <p className="text-white font-Josefin cursor-pointer mb-2 hover:text-cyan-400 text-s tracking-widest">
                            <NavLink to="/features">OUR FEATURES</NavLink>
                        </p>
                        <p className="text-white font-Josefin cursor-pointer mb-2 hover:text-cyan-400 text-s tracking-widest">
                            <NavLink to="/upcoming">UPCOMING</NavLink>
                        </p>
                    </div>
                    <div className='w-full sm:w-1/3 flex flex-col items-center lg:text-2xl'>
                        <h2 className='font-bold text-white mb-2'>Legal</h2>
                        <p className="text-white font-Josefin cursor-pointer mb-2 hover:text-cyan-400 text-s tracking-widest">
                            <NavLink to="/privacy-policy">PRIVACY POLICY</NavLink>
                        </p>
                        <p className="text-white font-Josefin cursor-pointer mb-2 hover:text-cyan-400 text-s tracking-widest">
                            <NavLink to="/terms">TERMS & CONDITIONS</NavLink>
                        </p>
                        <p className="text-white font-Josefin cursor-pointer mb-2 hover:text-cyan-400 text-s tracking-widest">
                            <NavLink to="/license">LICENSE</NavLink>
                        </p>
                    </div>
                    <div className='w-full sm:w-1/3 flex flex-col items-center lg:text-2xl'>
                        <h2 className='font-bold text-white mb-2'>Contact</h2>
                        <p className="text-white font-Josefin cursor-pointer mb-2 hover:text-cyan-400 text-s tracking-widest">
                            <NavLink to="/contact">CONTACT US</NavLink>
                        </p>
                    </div>
                </div>
                <div className='w-full h-12 flex flex-col justify-center items-center gap-2'>
                    <p className='text-white italic text-[10px] md:text-[12px] lg:text-[15px] font-Titillium'>Design & Developed By </p>
                    <div className='w-auto h-auto cursor-pointer flex justify-center items-center bg-white px-4 hover:px-10 py-1 duration-200 ease-in-out active:scale-95'>
                        <span className='bg-gradient-to-r from-cyan-600 via-purple-500-200 to-pink-500 font-bold bg-clip-text text-transparent opacity-100 italic text-[10px] md:text-[12px] lg:text-[15px] font-Titillium'>Sudipto Das</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
