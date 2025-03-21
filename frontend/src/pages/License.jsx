import React from 'react'
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

function License() {
    return (
        <>
            <div className='h-44 md:h-60 w-full bg-black flex justify-center items-center relative'>
                <Link to="/"><p className='font-Titillium absolute left-20 font-bold text-xl md:text-2xl text-white'><IoReturnUpBack /></p></Link>
                <h2 className='text-white font-Josefin text-3xl md:text-5xl'>License</h2>
            </div>

            <div className='h-auto w-full px-10 py-10 sm:py-24 sm:px-16 lg:px-28 lg:py-28 text-center font-Titillium bg-white text-black'>
                <p className="text-s md:text-lg">Welcome to Learnfinity, It is licensed under MIT License. This page outlines the terms of the license and provide details on how you can use, modify and distribute ouur project.</p><br></br>

                <h2 className='text-black font-bold font-Josefin text-xl md:text-3xl'>MIT License</h2>
                <p className="text-s md:text-lg">Copyright (c) 2025 Sudipto Das</p><br></br>
                <p className="text-s md:text-lg">Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:
                </p><br></br><br></br>
                <p className="text-s md:text-lg">The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.

                </p><br></br><br></br>
                <p className="text-s md:text-lg">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.
                </p><br></br><br></br>


            </div>


        </>
    )
}

export default License