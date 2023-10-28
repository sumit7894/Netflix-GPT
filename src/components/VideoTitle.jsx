import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-44 px-12'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-gray-500 text-white p-3 px-12 text-xl'>▶ Play</button>
        <button className='mx-2 bg-gray-500 text-white p-3 px-12 text-xl'>ℹ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle