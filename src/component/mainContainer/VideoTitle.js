import React from 'react'

const VideoTitle = ({title, description}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-16 absolute text-white bg-gradient-to-r from-black'>
        <h3 className='font-bold text-4xl mb-5'>{title}</h3>
        <p className='w-1/3 mb-5'>{description}</p>
        <div className='flex space-x-5'>
            <button className='bg-white px-10 py-2 rounded-md opacity-90 text-black font-bold hover:opacity-60'>Play</button>
            <button className='bg-gray-500 px-10 py-2 rounded-md opacity-90 text-white font-bold hover:opacity-50'>More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle;