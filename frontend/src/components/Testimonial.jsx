import React from 'react'

function Testimonial({img, rating, review, name, profession}) {
  return (
    <>
      <div className='h-auto w-96 lg:w-72 py-5 flex flex-col gap-5 bg-white rounded-xl shadow-lg hover:shadow-2xl cursor-default ease-in-out'>
            <div className='w-full flex justify-center items-center pl-2'>
                <div className=' rounded-full p-5 relative h-full w-[20%] overflow-hidden'>
                    <img className='h-full w-full absolute top-0 right-0 object-cover' src={img} />
                </div>
                <div className='w-[80%] text-s pl-3 pr-2 h-full flex flex-col justify-start items-start'>
                    <p className='font-bold font-Titillium text-start'>{name}</p>
                    <p className='italic text-start'>{profession}</p>
                    <p>{rating}</p>
                </div>
            </div>
            <div className='h-32 pr-5 text-start w-full break-words text-s overflow-hidden pl-4'>
                <p className='text-xs lg:text-s'>{review}</p>
            </div>
      </div>
    </>
  )
}

export default Testimonial
