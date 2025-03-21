import { IoReturnUpBack } from "react-icons/io5";
import {Link} from 'react-router-dom';

function Upcoming() {
  return (
    <>
      <div className='h-44 md:h-60 w-full bg-black flex justify-center items-center relative'>
         <Link to="/"><p className='font-Titillium absolute left-20 font-bold text-xl md:text-2xl text-white'><IoReturnUpBack /></p></Link>
        <h2 className='text-white font-Josefin text-3xl md:text-5xl'>Upcoming</h2>
      </div>

      <div className='min-h-[100vh] w-full px-10 py-10 sm:py-24 sm:px-16 lg:px-28 lg:py-28 text-center font-Titillium bg-white text-black'>
      
        <p className="text-lg md:text-xl">Stay tuned to get notified about our upcoming features and updates.</p> <br></br>

      </div>
    </>
  )
}

export default Upcoming