import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[17%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div>
        <button className='bg-white text-black p-3 px-12 text-2xl rounded-lg hover:opacity-80'> Play</button>
        <button className='mx-2 bg-gray-500 text-white p-3 px-12 text-xl rounded-lg'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle